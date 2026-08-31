// Client-side Custom SQLite Mock Compiler Engine

function executeMockSQL(query) {
  const clean = query.replace(/\s+/g, ' ').replace(/;$/, '').trim();
  const lower = clean.toLowerCase();

  if (!lower.startsWith('select')) {
    throw new Error('Sandbox compiler only supports SELECT queries. Write operations (INSERT, UPDATE, DELETE) are locked.');
  }

  // Find targeted table
  let tableName = '';
  if (lower.includes('from sales')) tableName = 'sales';
  else if (lower.includes('from customers')) tableName = 'customers';
  else if (lower.includes('from restaurants')) tableName = 'restaurants';
  else {
    throw new Error('Table not found. Available schemas in sandbox: [sales], [customers], [restaurants]');
  }

  // Load from data.js mockDB object
  if (typeof mockDB === 'undefined') {
    throw new Error('Mock Database registry is loading. Try again.');
  }

  const database = mockDB[tableName];
  let results = [...database];

  // Distinct check
  const isDistinct = lower.startsWith('select distinct');

  // WHERE Filters
  if (lower.includes('where')) {
    const whereIdx = lower.indexOf('where') + 6;
    let endIdx = clean.length;
    
    const groupIdx = lower.indexOf('group by');
    const orderIdx = lower.indexOf('order by');
    const limitIdx = lower.indexOf('limit');

    const nextIndices = [groupIdx, orderIdx, limitIdx].filter(idx => idx !== -1);
    if (nextIndices.length > 0) {
      endIdx = Math.min(...nextIndices);
    }

    const whereClause = clean.substring(whereIdx, endIdx).trim();
    results = applyWhereFilter(results, whereClause);
  }

  // GROUP BY & HAVING
  let isGrouped = false;
  let groupByCol = '';
  if (lower.includes('group by')) {
    isGrouped = true;
    const groupIdx = lower.indexOf('group by') + 8;
    let endIdx = clean.length;
    
    const orderIdx = lower.indexOf('order by');
    const limitIdx = lower.indexOf('limit');

    const nextIndices = [orderIdx, limitIdx].filter(idx => idx !== -1);
    if (nextIndices.length > 0) {
      endIdx = Math.min(...nextIndices);
    }

    groupByCol = clean.substring(groupIdx, endIdx).trim();
    results = applyGroupBy(results, groupByCol);

    // HAVING filter
    if (lower.includes('having')) {
      const havingIdx = lower.indexOf('having') + 6;
      let havingEnd = clean.length;
      
      const orderIdx2 = lower.indexOf('order by');
      const limitIdx2 = lower.indexOf('limit');
      const nextIndices2 = [orderIdx2, limitIdx2].filter(idx => idx !== -1);
      if (nextIndices2.length > 0) {
        havingEnd = Math.min(...nextIndices2);
      }
      
      const havingClause = clean.substring(havingIdx, havingEnd).trim();
      results = applyHavingFilter(results, havingClause);
    }
  }

  // Get selected projection columns clause
  const fromIdx = lower.indexOf('from');
  const selectStart = isDistinct ? 15 : 6;
  const selectClause = clean.substring(selectStart, fromIdx).trim();
  const selectCols = selectClause.split(',').map(s => s.trim());

  // Handle global aggregations (e.g. SELECT SUM(revenue) FROM sales) when GROUP BY is omitted
  const hasAggregates = selectCols.some(col => col.match(/^(sum|avg|count|min|max)\((.*)\)$/i));
  if (hasAggregates && !isGrouped) {
    results = applyGlobalAggregation(results);
    isGrouped = true;
  }

  // ORDER BY
  if (lower.includes('order by')) {
    const orderIdx = lower.indexOf('order by') + 9;
    let endIdx = clean.length;
    const limitIdx = lower.indexOf('limit');
    if (limitIdx !== -1) {
      endIdx = limitIdx;
    }
    const orderClause = clean.substring(orderIdx, endIdx).trim();
    results = applyOrderBy(results, orderClause);
  }

  // LIMIT
  if (lower.includes('limit')) {
    const limitIdx = lower.indexOf('limit') + 5;
    const limitClause = clean.substring(limitIdx).trim();
    const limitVal = parseInt(limitClause);
    if (!isNaN(limitVal)) {
      results = results.slice(0, limitVal);
    }
  }

  // Project select columns
  let projectedData = [];
  if (selectClause === '*') {
    projectedData = results.map(row => {
      const obj = {};
      Object.keys(database[0]).forEach(k => {
        obj[k] = Array.isArray(row[k]) ? row[k][0] : row[k];
      });
      return obj;
    });
    return { columns: Object.keys(database[0]), data: projectedData };
  }

  projectedData = results.map(row => {
    const projectedRow = {};
    selectCols.forEach(col => {
      const aggMatch = col.match(/^(sum|avg|count|min|max)\((.*)\)$/i);
      if (aggMatch) {
        const func = aggMatch[1];
        const innerCol = aggMatch[2].trim();
        const rawVal = row[innerCol] !== undefined ? row[innerCol] : row[col];
        projectedRow[col] = getAggregateValue(rawVal, func);
      } else {
        const val = row[col];
        projectedRow[col] = Array.isArray(val) ? val[0] : val;
      }
    });
    return projectedRow;
  });

  if (isDistinct) {
    projectedData = getDistinctRows(projectedData, selectCols);
  }

  return { columns: selectCols, data: projectedData };
}

function applyWhereFilter(data, filterString) {
  const operators = ['>=', '<=', '>', '<', '='];
  let operator = '';
  for (let op of operators) {
    if (filterString.includes(op)) {
      operator = op;
      break;
    }
  }

  if (!operator) return data;

  const parts = filterString.split(operator).map(s => s.trim());
  const col = parts[0];
  let val = parts[1].replace(/['"]/g, '');

  return data.filter(row => {
    const rowVal = row[col];
    if (rowVal === undefined) return false;

    const numVal = parseFloat(val);
    const isNum = !isNaN(numVal) && !isNaN(rowVal);

    const compareA = isNum ? parseFloat(rowVal) : String(rowVal).toLowerCase();
    const compareB = isNum ? numVal : val.toLowerCase();

    if (operator === '=') return compareA == compareB;
    if (operator === '>') return compareA > compareB;
    if (operator === '<') return compareA < compareB;
    if (operator === '>=') return compareA >= compareB;
    if (operator === '<=') return compareA <= compareB;

    return false;
  });
}

function applyGroupBy(data, col) {
  const groups = {};
  data.forEach(row => {
    const key = row[col];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(row);
  });

  const aggregatedRows = [];
  for (let key in groups) {
    const groupRows = groups[key];
    const baseRow = { ...groupRows[0] };
    
    // Group all values into arrays
    Object.keys(baseRow).forEach(k => {
      baseRow[k] = groupRows.map(r => r[k]);
    });
    
    baseRow['count(*)'] = groupRows.length;
    baseRow['count(1)'] = groupRows.length;
    aggregatedRows.push(baseRow);
  }
  return aggregatedRows;
}

function applyGlobalAggregation(data) {
  if (data.length === 0) return [];
  const baseRow = {};
  Object.keys(data[0]).forEach(k => {
    baseRow[k] = data.map(r => r[k]);
  });
  baseRow['count(*)'] = data.length;
  baseRow['count(1)'] = data.length;
  return [baseRow];
}

function getAggregateValue(val, func) {
  if (!Array.isArray(val)) {
    return val;
  }
  const cleanNums = val.map(v => parseFloat(v)).filter(v => !isNaN(v));
  switch (func.toLowerCase()) {
    case 'sum':
      return cleanNums.reduce((a, b) => a + b, 0);
    case 'avg':
      return cleanNums.length > 0 ? (cleanNums.reduce((a, b) => a + b, 0) / cleanNums.length) : 0;
    case 'min':
      return cleanNums.length > 0 ? Math.min(...cleanNums) : 0;
    case 'max':
      return cleanNums.length > 0 ? Math.max(...cleanNums) : 0;
    case 'count':
      return val.filter(v => v !== null && v !== undefined).length;
    default:
      return val[0];
  }
}

function applyHavingFilter(data, havingString) {
  // e.g. having sum(revenue) > 1000
  const operators = ['>=', '<=', '>', '<', '='];
  let operator = '';
  for (let op of operators) {
    if (havingString.includes(op)) {
      operator = op;
      break;
    }
  }

  if (!operator) return data;

  const parts = havingString.split(operator).map(s => s.trim());
  const aggExpr = parts[0]; // e.g. sum(revenue)
  let val = parts[1].replace(/['"]/g, '');

  const aggMatch = aggExpr.match(/^(sum|avg|count|min|max)\((.*)\)$/i);
  if (!aggMatch) return data;

  const func = aggMatch[1];
  const col = aggMatch[2].trim();

  return data.filter(row => {
    const rawVal = row[col];
    const aggValue = getAggregateValue(rawVal, func);
    const numVal = parseFloat(val);
    const isNum = !isNaN(numVal) && !isNaN(aggValue);

    const compareA = isNum ? parseFloat(aggValue) : String(aggValue).toLowerCase();
    const compareB = isNum ? numVal : val.toLowerCase();

    if (operator === '=') return compareA == compareB;
    if (operator === '>') return compareA > compareB;
    if (operator === '<') return compareA < compareB;
    if (operator === '>=') return compareA >= compareB;
    if (operator === '<=') return compareA <= compareB;

    return false;
  });
}

function applyOrderBy(data, orderExpr) {
  const parts = orderExpr.split(/\s+/);
  const col = parts[0];
  const direction = parts[1] && parts[1].toLowerCase() === 'desc' ? 'desc' : 'asc';

  return data.sort((a, b) => {
    let valA = Array.isArray(a[col]) ? a[col][0] : a[col];
    let valB = Array.isArray(b[col]) ? b[col][0] : b[col];
    
    if (valA === undefined || valB === undefined) return 0;

    const numA = parseFloat(valA);
    const numB = parseFloat(valB);
    const isNum = !isNaN(numA) && !isNaN(numB);

    if (isNum) {
      return direction === 'desc' ? numB - numA : numA - numB;
    } else {
      valA = String(valA).toLowerCase();
      valB = String(valB).toLowerCase();
      if (valA < valB) return direction === 'desc' ? 1 : -1;
      if (valA > valB) return direction === 'desc' ? -1 : 1;
      return 0;
    }
  });
}

function getDistinctRows(data, columns) {
  const seen = new Set();
  return data.filter(row => {
    const key = columns.map(col => row[col]).join('|');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function renderSQLOutput(result, container) {
  if (!result || !result.data || result.data.length === 0) {
    container.innerHTML = `<div class="text-amber-500 font-bold p-1">Console Output: Query executed successfully but returned 0 rows.</div>`;
    return;
  }

  let tableHtml = `<div class="overflow-x-auto w-full">
    <table class="min-w-full divide-y divide-gray-700 text-left border border-gray-800 text-[10px]">
      <thead class="bg-gray-850 text-gray-400 font-bold">
        <tr>`;
  result.columns.forEach(col => {
    tableHtml += `<th class="px-2.5 py-1.5 border border-gray-800 uppercase tracking-wider">${col}</th>`;
  });
  tableHtml += `</tr>
      </thead>
      <tbody class="divide-y divide-gray-800 font-mono">`;
  result.data.forEach(row => {
    tableHtml += `<tr class="hover:bg-gray-900 transition-colors">`;
    result.columns.forEach(col => {
      tableHtml += `<td class="px-2.5 py-1.5 border border-gray-800 text-gray-300">${row[col] !== undefined ? row[col] : 'NULL'}</td>`;
    });
    tableHtml += `</tr>`;
  });
  tableHtml += `</tbody>
    </table>
    <div class="mt-2 text-[9px] text-emerald-400 font-bold">
      ✔ Query OK. Rows returned: ${result.data.length}
    </div>
  </div>`;

  container.innerHTML = tableHtml;
}
