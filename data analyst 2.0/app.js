// Mock Relational Database Schemas for SQL Sandbox Playground
const mockDB = {
  sales: [
    { sale_id: 101, product: 'MacBook Air', category: 'Electronics', revenue: 999, units_sold: 1, order_date: '2026-06-01' },
    { sale_id: 102, product: 'iPhone 15 Pro', category: 'Electronics', revenue: 1998, units_sold: 2, order_date: '2026-06-02' },
    { sale_id: 103, product: 'Ergonomic Chair', category: 'Office Supplies', revenue: 249, units_sold: 1, order_date: '2026-06-03' },
    { sale_id: 104, product: 'Wireless Mouse', category: 'Electronics', revenue: 150, units_sold: 3, order_date: '2026-06-04' },
    { sale_id: 105, product: 'Standing Desk', category: 'Office Supplies', revenue: 450, units_sold: 1, order_date: '2026-06-05' },
    { sale_id: 106, product: 'Coffee Maker', category: 'Home Appliances', revenue: 120, units_sold: 1, order_date: '2026-06-06' },
    { sale_id: 107, product: 'Smart Watch', category: 'Electronics', revenue: 299, units_sold: 1, order_date: '2026-06-07' }
  ],
  customers: [
    { customer_id: 1, name: 'John Doe', city: 'New York', sign_up_date: '2026-01-15', total_spent: 1250 },
    { customer_id: 2, name: 'Alice Smith', city: 'San Francisco', sign_up_date: '2026-02-20', total_spent: 2450 },
    { customer_id: 3, name: 'Bob Johnson', city: 'Chicago', sign_up_date: '2026-03-05', total_spent: 450 },
    { customer_id: 4, name: 'Emma Watson', city: 'London', sign_up_date: '2026-04-10', total_spent: 3100 },
    { customer_id: 5, name: 'David Lee', city: 'Toronto', sign_up_date: '2026-05-18', total_spent: 890 }
  ],
  restaurants: [
    { restaurant_id: 1, name: 'Pizza Palace', cuisine: 'Italian', rating: 4.6, avg_cost_for_two: 40, delivery_time_mins: 25 },
    { restaurant_id: 2, name: 'Spicy Tadka', cuisine: 'Indian', rating: 4.8, avg_cost_for_two: 30, delivery_time_mins: 35 },
    { restaurant_id: 3, name: 'Sushi Zen', cuisine: 'Japanese', rating: 4.7, avg_cost_for_two: 60, delivery_time_mins: 20 },
    { restaurant_id: 4, name: 'Burger Bistro', cuisine: 'American', rating: 4.2, avg_cost_for_two: 25, delivery_time_mins: 15 },
    { restaurant_id: 5, name: 'Taco Express', cuisine: 'Mexican', rating: 4.4, avg_cost_for_two: 20, delivery_time_mins: 30 }
  ]
};

// Simulated Activity Notification list (matches previous version activities logs)
const mockActivities = [
  "Amit Sharma just completed LeetCode SQL Challenge #12!",
  "Priya just scored 90% accuracy in Probability & Bayes Theorem.",
  "Rahul solved Averages & SD medium level queries.",
  "chen registered project submission: Sales Margin Analytics Dashboard.",
  "Fatima unlocked Level 3 Adaptive SQL Joins.",
  "Suresh achieved 78 LT Mastery Score in window functions!",
  "Zoe Martinez updated claims analysis dbt schemas.",
  "Vikram completed all Python Pandas dataframe preparation tasks."
];

// DataAnalystTheta Question Pool Database
const questionPool = [
  // 1. Probability & Stats
  {
    id: 1,
    topic: 'probability',
    difficulty: 'Easy',
    body: "A classifier has a Precision of 0.8 and a Recall of 0.5. If 100 positive instances exist in the validation dataset, how many True Positives (TP) did it identify?",
    options: [
      "A. 40 True Positives",
      "B. 50 True Positives",
      "C. 80 True Positives",
      "D. 100 True Positives"
    ],
    answer: 1, // Index 1 is B
    explanation: "Recall is defined as TP / (TP + FN), which is equivalent to TP / (Total Actual Positives). Given that Recall = 0.5 and Total Actual Positives = 100:\n0.5 = TP / 100 => TP = 50."
  },
  {
    id: 2,
    topic: 'probability',
    difficulty: 'Hard',
    body: "Bayes Theorem Application:\nA transaction classification model flags 90% of actual fraud. Only 1% of transactions are actually fraud. The false positive rate of the model is 5%. If a transaction is flagged as fraud, what is the probability P(Fraud | Flagged) that it is actually fraud?",
    options: [
      "A. 90.0%",
      "B. 5.0%",
      "C. 15.4%",
      "D. 1.8%"
    ],
    answer: 2, // Index 2 is C
    explanation: "Using Bayes' Theorem:\nP(Fraud|Flag) = [P(Flag|Fraud) * P(Fraud)] / [P(Flag|Fraud)*P(Fraud) + P(Flag|Legit)*P(Legit)]\nNumerator: 0.90 * 0.01 = 0.009\nDenominator: (0.90 * 0.01) + (0.05 * 0.99) = 0.009 + 0.0495 = 0.0585\nP(Fraud|Flag) = 0.009 / 0.0585 ≈ 15.38% (15.4%)."
  },
  // 2. Averages & Stats
  {
    id: 3,
    topic: 'statistics',
    difficulty: 'Easy',
    body: "If a numerical dataset has a mean of 50 and a standard deviation of 0, what does this mathematically imply about the data values?",
    options: [
      "A. Half of the values are 0 and half are 100.",
      "B. The dataset forms a uniform distribution from 0 to 100.",
      "C. All values in the dataset are exactly 50.",
      "D. The data contains infinite outliers."
    ],
    answer: 2, // Index 2 is C
    explanation: "Standard deviation measures dispersion or spread. A standard deviation of 0 indicates there is no variability in the dataset; therefore, every single data point must be equal to the mean (50)."
  },
  {
    id: 4,
    topic: 'statistics',
    difficulty: 'Medium',
    body: "A data analyst adds a constant value of 5 to every numerical data point in a database. What happens to the mean and standard deviation (SD) of the dataset?",
    options: [
      "A. Both Mean and Standard Deviation increase by 5.",
      "B. Mean increases by 5; Standard Deviation is unchanged.",
      "C. Mean remains unchanged; Standard Deviation increases by 5.",
      "D. Mean increases by 5; Standard Deviation decreases."
    ],
    answer: 1, // Index 1 is B
    explanation: "Adding a constant to all data values shifts the entire distribution along the number line, thereby increasing the mean by that constant (5). However, the relative distance between points (dispersion) remains identical, so the standard deviation is unchanged."
  },
  // 3. Percentages & Growth
  {
    id: 5,
    topic: 'trends',
    difficulty: 'Easy',
    body: "A retail store's revenue increased by 20% in Year 1, then decreased by 20% in Year 2. What is the net percentage change in revenue over the two-year period?",
    options: [
      "A. 0% change",
      "B. 4% increase",
      "C. 4% decrease",
      "D. 10% decrease"
    ],
    answer: 2, // Index 2 is C
    explanation: "Net Change multiplier = (1 + 0.20) * (1 - 0.20) = 1.20 * 0.80 = 0.96.\nRevenue is at 96% of the original starting value, representing a 4% net decrease."
  },
  {
    id: 6,
    topic: 'trends',
    difficulty: 'Medium',
    body: "Year-over-Year (YoY) company revenue grew from $200k to $250k. Q1 represented 30% of Year 1's revenue. If Q1 revenue grows by 10% in Year 2, what percentage of Year 2's total revenue does Q1 represent?",
    options: [
      "A. 30.0%",
      "B. 24.0%",
      "C. 33.0%",
      "D. 26.4%"
    ],
    answer: 3, // Index 3 is D
    explanation: "Year 1 Revenue = $200k. Year 1 Q1 = 30% of $200k = $60k.\nYear 2 Q1 Revenue (10% growth) = $60k * 1.10 = $66k.\nYear 2 Total Revenue = $250k.\nQ1 % of Year 2 Total = ($66k / $250k) * 100 = 26.4%."
  },
  // 4. SQL Joins
  {
    id: 7,
    topic: 'sql-joins',
    difficulty: 'Easy',
    body: "Which type of SQL JOIN returns all records from the left table, and matching records from the right table, filling nulls if no matching keys are found?",
    options: [
      "A. FULL OUTER JOIN",
      "B. LEFT JOIN",
      "C. INNER JOIN",
      "D. CROSS JOIN"
    ],
    answer: 1, // Index 1 is B
    explanation: "A LEFT OUTER JOIN (or LEFT JOIN) fetches all rows from the left table and matching rows from the right table. For rows in the left table with no match in the right table, columns of the right table are filled with NULLs."
  },
  {
    id: 8,
    topic: 'sql-joins',
    difficulty: 'Medium',
    body: "Given table `orders` with 5 rows, and table `refunds` with 2 rows. If you perform a LEFT JOIN from `orders` to `refunds` on order_id where only 1 refund matches, how many rows are returned in the result set?",
    options: [
      "A. 2 rows",
      "B. 5 rows",
      "C. 6 rows",
      "D. 1 row"
    ],
    answer: 1, // Index 1 is B
    explanation: "A LEFT JOIN preserves every row in the left table (`orders`, 5 rows). Since only 1 refund matched, that matching row will contain the joined refund data, and the other 4 rows will contain NULLs for the refund columns. Total rows remains 5."
  },
  // 5. SQL Aggregations
  {
    id: 9,
    topic: 'sql-agg',
    difficulty: 'Easy',
    body: "Which SQL clause is used to filter grouped query results after applying aggregate functions (e.g. SUM or AVG)?",
    options: [
      "A. WHERE",
      "B. GROUP BY",
      "C. HAVING",
      "D. ORDER BY"
    ],
    answer: 2, // Index 2 is C
    explanation: "The WHERE clause is applied to individual rows before grouping. To filter grouped summary rows computed by aggregate functions, the HAVING clause must be used."
  },
  {
    id: 10,
    topic: 'sql-agg',
    difficulty: 'Hard',
    body: "What values does the following SQL statement output?\nSELECT count(*), count(category) FROM items;\nIf the table `items` has 10 rows, but 3 rows contain a NULL value in the `category` column?",
    options: [
      "A. 10 and 10",
      "B. 7 and 7",
      "C. 10 and 7",
      "D. It throws a syntax error."
    ],
    answer: 2, // Index 2 is C
    explanation: "`COUNT(*)` counts all records in the table, including rows with NULLs, returning 10. `COUNT(column_name)` counts only non-null values in that specific column, returning 10 - 3 = 7."
  },
  // 6. SQL Windows
  {
    id: 11,
    topic: 'sql-windows',
    difficulty: 'Medium',
    body: "What is the primary difference in behavior between the ROW_NUMBER(), RANK(), and DENSE_RANK() window functions when ranking duplicate value keys?",
    options: [
      "A. ROW_NUMBER returns sequential ranks, RANK skips ranks after duplicates, DENSE_RANK does not skip ranks.",
      "B. RANK duplicates the count while DENSE_RANK gives unique indexes.",
      "C. ROW_NUMBER throws an error on duplicate rows.",
      "D. They perform identically across all duplicate entries."
    ],
    answer: 0, // Index 0 is A
    explanation: "If rows have duplicate values: ROW_NUMBER assigns sequential numbers (1, 2, 3). RANK assigns duplicates the same rank but skips (1, 2, 2, 4). DENSE_RANK assigns duplicates the same rank but does not skip (1, 2, 2, 3)."
  },
  {
    id: 12,
    topic: 'sql-windows',
    difficulty: 'Hard',
    body: "Which window boundary clause should be appended to partition aggregations to compile a running total from the start of the partition up to the current row?",
    options: [
      "A. ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING",
      "B. ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "C. ROWS BETWEEN 1 PRECEDING AND CURRENT ROW",
      "D. ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING"
    ],
    answer: 1, // Index 1 is B
    explanation: "`UNBOUNDED PRECEDING` references the very first record of the active partition. `CURRENT ROW` points to the active record. Combining them computes running accumulations (totals) incrementally."
  },
  // 7. Pandas
  {
    id: 13,
    topic: 'python-arrays',
    difficulty: 'Easy',
    body: "In Python Pandas, which DataFrame method is used to replace NaN (null) values in a column with a default value or statistic?",
    options: [
      "A. df.replace()",
      "B. df.fillna()",
      "C. df.dropna()",
      "D. df.isna()"
    ],
    answer: 1, // Index 1 is B
    explanation: "`fillna()` replaces missing values (NaN) with a designated placeholder value or fills using statistical methods like mean/mode."
  },
  {
    id: 14,
    topic: 'python-arrays',
    difficulty: 'Medium',
    body: "What does the following Pandas command execute?\ndf.groupby('dept')['salary'].transform('mean')",
    options: [
      "A. Groups df and reduces rows to unique department averages.",
      "B. Replaces salaries with the department mean while keeping the original shape.",
      "C. Filters out rows where salary is below average.",
      "D. Computes global average salaries across all departments."
    ],
    answer: 1, // Index 1 is B
    explanation: "`groupby().transform()` calculates aggregates per group but broadcasts the results back, retaining the original size of the dataframe, which allows direct comparison or imputation."
  },
  // 8. LeetCode Logic
  {
    id: 15,
    topic: 'leetcode',
    difficulty: 'Easy',
    body: "Which list method in Python finds and returns the zero-based index of the first occurrence of a specific value?",
    options: [
      "A. list.find(value)",
      "B. list.index(value)",
      "C. list.search(value)",
      "D. list.get(value)"
    ],
    answer: 1, // Index 1 is B
    explanation: "In Python, `list.index(x)` returns the zero-based index of the first occurrence of item x. (Note: `.find()` is a string object method, not a list method)."
  },
  {
    id: 16,
    topic: 'leetcode',
    difficulty: 'Hard',
    body: "Best Time to Buy and Sell Stock:\nGiven an array of daily stock prices, which strategy computes the maximum possible profit in O(N) time complexity and O(1) auxiliary space?",
    options: [
      "A. Nested double loop searching all buy-sell combinations.",
      "B. Dividing array partitions recursively via Merge Sort.",
      "C. One-pass greedy tracking of minimum price and max profit difference.",
      "D. Inserting prices into a Binary Search Tree."
    ],
    answer: 2, // Index 2 is C
    explanation: "By iterating through prices once, maintaining the minimum price found so far, and evaluating the profit of the current day against this minimum, you compute the max profit in linear time O(N) and constant space O(1)."
  }
];

// SPA Navigation State
let appState = {
  selectedTopics: ['probability', 'statistics', 'sql-joins', 'sql-agg'],
  filteredQuestions: [],
  currentQuestionIndex: 0,
  selectedOptionIndex: null,
  sessionScore: 0,
  
  // Performance Analytics counters
  solvedCount: 0,
  correctCount: 0,
  secondsSpentTotal: 0,
  topicPerformance: {
    probability: { total: 0, correct: 0 },
    statistics: { total: 0, correct: 0 },
    trends: { total: 0, correct: 0 },
    'sql-joins': { total: 0, correct: 0 },
    'sql-agg': { total: 0, correct: 0 },
    'sql-windows': { total: 0, correct: 0 },
    'python-arrays': { total: 0, correct: 0 },
    leetcode: { total: 0, correct: 0 }
  },
  
  // Progression history for charts
  masteryProgression: [30], // initial starting LT Score
  timeProgression: [],
  
  // Timer attributes
  timerInterval: null,
  secondsElapsedOnQuestion: 0
};

// Global Chart references
let accuracyChartInstance = null;
let progressChartInstance = null;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const isPracticePage = path.includes('practice.html') || document.getElementById('tab-practice') !== null;
  
  if (isPracticePage) {
    syncTopicCheckboxes();
    initStreak();
    initActivityTicker();
    updateDashboardMetrics();
    showPracticeSubView('topics');
  }
});

/* PRACTICE PORTAL SUBVIEWS TOGGLER */
function showPracticeSubView(subViewName) {
  document.querySelectorAll('.practice-sub-view').forEach(view => {
    view.classList.add('hidden');
  });
  const targetEl = document.getElementById(`practice-view-${subViewName}`);
  if (targetEl) {
    targetEl.classList.remove('hidden');
    targetEl.classList.add('animate-fade-in');
  }

  // Update tabs highlight
  document.querySelectorAll('.sub-tab-btn').forEach(tab => {
    tab.classList.remove('border-brandBlue', 'text-brandBlue');
    tab.classList.add('border-transparent', 'text-gray-500');
  });
  const activeTabEl = document.getElementById(`practice-tab-${subViewName}`);
  if (activeTabEl) {
    activeTabEl.classList.remove('border-transparent', 'text-gray-500');
    activeTabEl.classList.add('border-brandBlue', 'text-brandBlue');
  }

  // Re-draw charts when opening performance
  if (subViewName === 'performance') {
    setTimeout(() => {
      renderPerformanceCharts();
    }, 150);
  }
  
  // Update metrics when viewing Dashboard
  if (subViewName === 'topics') {
    updateDashboardMetrics();
  }
}

/* PRICING MODAL WINDOW */
function openPricingModal() {
  const modal = document.getElementById('pricing-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closePricingModal() {
  const modal = document.getElementById('pricing-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

/* SYNC CHECKBOX SELECTIONS */
function syncTopicCheckboxes() {
  document.querySelectorAll('.topic-checkbox').forEach(box => {
    box.checked = appState.selectedTopics.includes(box.value);
    box.addEventListener('change', () => {
      updateSelectedTopicsFromDOM();
    });
  });
}

function updateSelectedTopicsFromDOM() {
  const selected = [];
  document.querySelectorAll('.topic-checkbox').forEach(box => {
    if (box.checked) {
      selected.push(box.value);
    }
  });
  appState.selectedTopics = selected;
}

/* LAUNCH ACTIVE PRACTICE ENGINES */
function startSingleTopicPractice(topic) {
  appState.selectedTopics = [topic];
  document.querySelectorAll('.topic-checkbox').forEach(box => {
    box.checked = (box.value === topic);
  });
  appState.filteredQuestions = questionPool.filter(q => q.topic === topic);
  startSessionLoop();
}

function startMultiTopicPractice() {
  updateSelectedTopicsFromDOM();
  
  if (appState.selectedTopics.length === 0) {
    alert("Please select at least one topic checkbox first!");
    return;
  }

  appState.filteredQuestions = questionPool.filter(q => appState.selectedTopics.includes(q.topic));
  
  if (appState.filteredQuestions.length === 0) {
    alert("No questions found for the selected topics. Try adding more.");
    return;
  }

  startSessionLoop();
}

function startSessionLoop() {
  appState.currentQuestionIndex = 0;
  appState.sessionScore = 0;
  
  const scoreEl = document.getElementById('session-score');
  if (scoreEl) scoreEl.innerText = '0 pts';

  showPracticeSubView('terminal');
  loadActiveQuestion();
}

/* LOAD PRACTICE QUESTION */
function loadActiveQuestion() {
  appState.selectedOptionIndex = null;
  
  const explContainer = document.getElementById('explanation-container');
  if (explContainer) explContainer.classList.add('hidden');
  
  const aiCoachContainer = document.getElementById('ai-coach-container');
  if (aiCoachContainer) aiCoachContainer.classList.add('hidden');
  
  const solBtn = document.getElementById('btn-practice-solution');
  if (solBtn) solBtn.disabled = true;
  
  const skipBtn = document.getElementById('btn-practice-skip');
  if (skipBtn) skipBtn.disabled = false;
  
  const submitBtn = document.getElementById('btn-practice-submit');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit Answer";
    submitBtn.onclick = () => submitAnswer();
  }

  const currentQ = appState.filteredQuestions[appState.currentQuestionIndex];
  if (!currentQ) return;

  const progressPercent = Math.round((appState.currentQuestionIndex / appState.filteredQuestions.length) * 100);
  const progressBar = document.getElementById('question-progress-bar');
  if (progressBar) {
    progressBar.style.width = `${progressPercent}%`;
  }

  const tagEl = document.getElementById('current-question-tag');
  if (tagEl) tagEl.innerText = `Question #${appState.currentQuestionIndex + 1} of ${appState.filteredQuestions.length}`;
  
  const difficultyEl = document.getElementById('current-question-difficulty');
  if (difficultyEl) {
    difficultyEl.innerText = currentQ.difficulty;
    difficultyEl.className = 'text-xs text-white px-2.5 py-0.5 rounded-full font-bold uppercase ';
    if (currentQ.difficulty === 'Easy') difficultyEl.classList.add('bg-emerald-500');
    else if (currentQ.difficulty === 'Medium') difficultyEl.classList.add('bg-brandBlue');
    else difficultyEl.classList.add('bg-purple-600');
  }

  const bodyEl = document.getElementById('question-body');
  if (bodyEl) bodyEl.innerText = currentQ.body;

  const optionsGrid = document.getElementById('question-options-container');
  if (optionsGrid) {
    optionsGrid.innerHTML = '';
    currentQ.options.forEach((opt, idx) => {
      const optLetter = String.fromCharCode(65 + idx);
      const btn = document.createElement('div');
      btn.className = 'option-btn border border-gray-200 rounded-xl p-4 cursor-pointer flex items-center gap-3 bg-white hover:bg-gray-50 transition-all';
      btn.id = `option-item-${idx}`;
      btn.onclick = () => selectPracticeOption(idx);
      
      btn.innerHTML = `
        <div class="option-badge w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center font-bold text-xs text-gray-500 bg-white" id="option-badge-${idx}">
          ${optLetter}
        </div>
        <span class="text-sm font-semibold text-textMain">${opt}</span>
      `;
      optionsGrid.appendChild(btn);
    });
  }

  renderActiveTopicsSidebar();
  resetQuestionTimer();
}

function renderActiveTopicsSidebar() {
  const container = document.getElementById('active-topics-list');
  if (!container) return;
  
  container.innerHTML = '';
  appState.selectedTopics.forEach(topicCode => {
    const prettyName = getPrettyTopicName(topicCode);
    const item = document.createElement('div');
    item.className = 'flex items-center justify-between py-1 border-b border-gray-100';
    item.innerHTML = `
      <span>${prettyName}</span>
      <span class="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Selected</span>
    `;
    container.appendChild(item);
  });
}

/* OPTION SELECTION LOGIC */
function selectPracticeOption(index) {
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.remove('option-btn-selected');
  });
  
  appState.selectedOptionIndex = index;
  const targetBtn = document.getElementById(`option-item-${index}`);
  if (targetBtn) {
    targetBtn.classList.add('option-btn-selected');
  }
}

/* TIMER SYSTEM */
function resetQuestionTimer() {
  if (appState.timerInterval) {
    clearInterval(appState.timerInterval);
  }
  appState.secondsElapsedOnQuestion = 0;
  
  const timerEl = document.getElementById('question-timer');
  if (timerEl) timerEl.innerText = '00:00';
  
  appState.timerInterval = setInterval(() => {
    appState.secondsElapsedOnQuestion++;
    const mins = Math.floor(appState.secondsElapsedOnQuestion / 60).toString().padStart(2, '0');
    const secs = (appState.secondsElapsedOnQuestion % 60).toString().padStart(2, '0');
    if (timerEl) timerEl.innerText = `${mins}:${secs}`;
  }, 1000);
}

/* SUBMIT ANSWER */
function submitAnswer() {
  if (appState.selectedOptionIndex === null) {
    alert("Please select an answer choice before submitting!");
    return;
  }

  clearInterval(appState.timerInterval);

  const currentQ = appState.filteredQuestions[appState.currentQuestionIndex];
  const selectedIdx = appState.selectedOptionIndex;
  const isCorrect = selectedIdx === currentQ.answer;

  appState.solvedCount++;
  appState.secondsSpentTotal += appState.secondsElapsedOnQuestion;
  
  if (!appState.topicPerformance[currentQ.topic]) {
    appState.topicPerformance[currentQ.topic] = { total: 0, correct: 0 };
  }
  appState.topicPerformance[currentQ.topic].total++;
  
  // Play HTML5 Synthesized Sound Chime / Thud
  playFeedbackSound(isCorrect);

  const chosenBtn = document.getElementById(`option-item-${selectedIdx}`);
  if (isCorrect) {
    appState.correctCount++;
    appState.sessionScore += (currentQ.difficulty === 'Hard' ? 30 : currentQ.difficulty === 'Medium' ? 20 : 10);
    appState.topicPerformance[currentQ.topic].correct++;
    
    if (chosenBtn) {
      chosenBtn.classList.remove('option-btn-selected');
      chosenBtn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700', 'border-2');
    }
    const badgeEl = document.getElementById(`option-badge-${selectedIdx}`);
    if (badgeEl) badgeEl.className = 'option-badge w-6 h-6 rounded-full border border-emerald-500 flex items-center justify-center font-bold text-xs bg-emerald-500 text-white';
  } else {
    if (chosenBtn) {
      chosenBtn.classList.remove('option-btn-selected');
      chosenBtn.classList.add('bg-red-50', 'border-red-500', 'text-red-700', 'border-2');
    }
    const badgeEl = document.getElementById(`option-badge-${selectedIdx}`);
    if (badgeEl) badgeEl.className = 'option-badge w-6 h-6 rounded-full border border-red-500 flex items-center justify-center font-bold text-xs bg-red-500 text-white';

    const correctBtn = document.getElementById(`option-item-${currentQ.answer}`);
    if (correctBtn) correctBtn.classList.add('bg-emerald-50/50', 'border-emerald-400/50', 'text-emerald-700');
    
    const correctBadgeEl = document.getElementById(`option-badge-${currentQ.answer}`);
    if (correctBadgeEl) correctBadgeEl.className = 'option-badge w-6 h-6 rounded-full border border-emerald-400 flex items-center justify-center font-bold text-xs bg-emerald-400 text-white';
  }

  const scoreEl = document.getElementById('session-score');
  if (scoreEl) scoreEl.innerText = `${appState.sessionScore} pts`;

  const explanationTextEl = document.getElementById('explanation-text');
  if (explanationTextEl) explanationTextEl.innerText = currentQ.explanation;
  
  const solBtn = document.getElementById('btn-practice-solution');
  if (solBtn) solBtn.disabled = false;

  recalculateMasteryScore(isCorrect);

  // Generate simulated AI Coach advice
  generateAICoachFeedback(currentQ.topic, isCorrect);

  // Update Subject Dashboard metrics immediately
  updateDashboardMetrics();

  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.onclick = null;
  });

  const submitBtn = document.getElementById('btn-practice-submit');
  if (submitBtn) {
    submitBtn.innerText = "Next Question →";
    submitBtn.onclick = () => loadNextQuestion();
  }
}

/* RECALCULATE LT SCORE */
function recalculateMasteryScore(answeredCorrectly) {
  let currentLT = appState.masteryProgression[appState.masteryProgression.length - 1];
  
  if (answeredCorrectly) {
    currentLT += (70 - currentLT) * 0.08;
  } else {
    currentLT -= currentLT * 0.05;
  }
  
  currentLT = Math.max(0, Math.min(100, Math.round(currentLT * 10) / 10));
  appState.masteryProgression.push(currentLT);
  appState.timeProgression.push(appState.secondsElapsedOnQuestion);
}

/* LOAD NEXT QUESTION */
function loadNextQuestion() {
  appState.currentQuestionIndex++;

  if (appState.currentQuestionIndex >= appState.filteredQuestions.length) {
    clearInterval(appState.timerInterval);
    
    if (window.confetti) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    alert(`Practice session complete! Total Score: ${appState.sessionScore} pts. Re-drawing your performance diagnostics charts.`);
    showPracticeSubView('performance');
    return;
  }

  const submitBtn = document.getElementById('btn-practice-submit');
  if (submitBtn) {
    submitBtn.innerText = "Submit Answer";
    submitBtn.onclick = () => submitAnswer();
  }

  loadActiveQuestion();
}

/* SKIP QUESTION */
function skipQuestion() {
  clearInterval(appState.timerInterval);
  loadNextQuestion();
}

/* EXPLANATION ACCORDION PANEL */
function toggleExplanation() {
  const container = document.getElementById('explanation-container');
  if (container) container.classList.toggle('hidden');
}

/* COMPUTE PERFORMANCE DIAGNOSTICS & RENDER CHARTS */
function renderPerformanceCharts() {
  const totalSolved = appState.solvedCount;
  const accuracyPercent = totalSolved === 0 ? 0 : Math.round((appState.correctCount / totalSolved) * 100);
  const avgTime = totalSolved === 0 ? 0 : Math.round(appState.secondsSpentTotal / totalSolved);
  const currentLTScore = appState.masteryProgression[appState.masteryProgression.length - 1];

  const kpiLt = document.getElementById('kpi-lt-score');
  if (kpiLt) kpiLt.innerText = currentLTScore;
  
  const kpiAcc = document.getElementById('kpi-accuracy');
  if (kpiAcc) kpiAcc.innerText = `${accuracyPercent}%`;
  
  const kpiTot = document.getElementById('kpi-total-solved');
  if (kpiTot) kpiTot.innerText = totalSolved;
  
  const kpiTime = document.getElementById('kpi-avg-time');
  if (kpiTime) kpiTime.innerText = `${avgTime}s`;

  // Draw chart 1: Topic accuracy distribution (Bar Chart)
  const accuracyCtx = document.getElementById('accuracyChart');
  if (accuracyCtx) {
    if (accuracyChartInstance) accuracyChartInstance.destroy();
    
    const labels = appState.selectedTopics.map(t => getPrettyTopicName(t));
    const accuracyData = appState.selectedTopics.map(topicCode => {
      const stats = appState.topicPerformance[topicCode] || { total: 0, correct: 0 };
      return stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100);
    });

    accuracyChartInstance = new Chart(accuracyCtx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Accuracy Rate (%)',
          data: accuracyData,
          backgroundColor: '#0693E3',
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { min: 0, max: 100 }
        }
      }
    });
  }

  // Draw chart 2: Mastery Score Progression (Line Chart)
  const progressCtx = document.getElementById('progressChart');
  if (progressCtx) {
    if (progressChartInstance) progressChartInstance.destroy();

    const steps = appState.masteryProgression.map((_, i) => `Q ${i}`);

    progressChartInstance = new Chart(progressCtx, {
      type: 'line',
      data: {
        labels: steps,
        datasets: [{
          label: 'Mastery Progression (LT Score)',
          data: appState.masteryProgression,
          borderColor: '#7D077D',
          backgroundColor: 'rgba(125, 7, 125, 0.05)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { min: 0, max: 100 }
        }
      }
    });
  }
}

/* DAILY STREAK INITIALIZER */
function initStreak() {
  const streakEl = document.getElementById('practice-streak');
  const dashStreakEl = document.getElementById('practice-dashboard-streak');
  if (!streakEl && !dashStreakEl) return;
  
  let streak = parseInt(localStorage.getItem('da_streak') || '1');
  let lastDate = localStorage.getItem('da_last_date');
  const todayStr = new Date().toDateString();
  
  if (lastDate && lastDate !== todayStr) {
    const last = new Date(lastDate);
    const diffTime = Math.abs(new Date() - last);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      streak++;
      localStorage.setItem('da_streak', streak.toString());
    } else if (diffDays > 1) {
      streak = 1;
      localStorage.setItem('da_streak', '1');
    }
  }
  localStorage.setItem('da_last_date', todayStr);
  
  const textVal = `🔥 ${streak} ${streak === 1 ? 'Day' : 'Days'}`;
  if (streakEl) streakEl.innerText = textVal;
  if (dashStreakEl) dashStreakEl.innerText = textVal;
}

/* SMART AI COACH ADVICE GENERATOR */
function generateAICoachFeedback(topic, isCorrect) {
  const aiCoachContainer = document.getElementById('ai-coach-container');
  const aiCoachText = document.getElementById('ai-coach-text');
  if (!aiCoachContainer || !aiCoachText) return;
  
  aiCoachContainer.classList.remove('hidden');
  aiCoachText.innerText = "Analyzing query constraints...";
  
  const feedbackDatabase = {
    probability: {
      correct: "Excellent logic! You applied standard sample space bounds accurately. In product metrics tests, Bayes' Theorem is highly queried to test diagnostic accuracy.",
      incorrect: "Watch your priors. Recall is strictly TP / (TP + FN). If you struggle with conditional bounds, write out the tree diagram before compiling percentages."
    },
    statistics: {
      correct: "Exactly. Remember that standard deviation is a translation-invariant metric. Adding a constant shifts the mean but leaves dispersion unchanged.",
      incorrect: "Recall that standard deviation measures dispersion from the mean. If a constant is added to all rows, the dispersion remains identical."
    },
    trends: {
      correct: "Correct percentage compounding logic! Year-over-year Q1 trends should always be analyzed against shifted denominators in annual revenue charts.",
      incorrect: "Compounding growth is multiplicative: (1 + x) * (1 - y). Be careful not to simply add or subtract growth rates directly!"
    },
    'sql-joins': {
      correct: "Perfect. LEFT JOIN guarantees the preservation of the left table. Knowing row multiplier scenarios (duplicate join keys) is highly tested in interviews.",
      incorrect: "Note that LEFT JOIN preserves all left table records. If a join key is missing in the right table, columns are padded with NULLs, but no rows are dropped."
    },
    'sql-agg': {
      correct: "Spot on! HAVING is processed after GROUP BY, whereas WHERE is processed before. COUNT(*) counts records; COUNT(col) ignores nulls.",
      incorrect: "Remember: WHERE cannot filter aggregated groups because aggregates compile after rows filter. Use HAVING to filter based on sums, averages, or counts."
    },
    'sql-windows': {
      correct: "Precisely! DENSE_RANK() is extremely helpful when you need sequential indices without rank skipping. Standard ranks skip after ties.",
      incorrect: "Compare ROW_NUMBER(), RANK(), and DENSE_RANK() side by side. ROW_NUMBER assigns distinct indexes; RANK skips indexes; DENSE_RANK retains continuity."
    },
    'python-arrays': {
      correct: "Nice Pandas logic! Using transform() broadcasts group aggregates back to the parent indices, preserving the original array shapes.",
      incorrect: "Be careful: standard groupby().mean() reduces the shape of your dataframe. Use transform() if you need to impute values or keep matching row sizes."
    },
    leetcode: {
      correct: "Great space-time trade-off choice! O(N) linear time and O(1) auxiliary space is the gold standard benchmark for array greedy matching questions.",
      incorrect: "A nested O(N^2) loop is too slow for placement tests. Track the rolling minimum value in a single loop to compute difference thresholds in O(N)."
    }
  };
  
  setTimeout(() => {
    const topicFeed = feedbackDatabase[topic] || { correct: "Good work!", incorrect: "Review the topic fundamentals." };
    aiCoachText.innerText = isCorrect ? topicFeed.correct : topicFeed.incorrect;
  }, 600);
}

/* SQL PLAYGROUND SANDBOX STATE HANDLERS */
function toggleSQLPlayground() {
  const content = document.getElementById('sql-playground-content');
  const arrow = document.getElementById('sql-sandbox-arrow');
  if (!content) return;
  content.classList.toggle('hidden');
  if (arrow) {
    arrow.innerText = content.classList.contains('hidden') ? '▼' : '▲';
  }
  if (!content.classList.contains('hidden')) {
    loadSandboxTableSchema();
  }
}

function loadSandboxTableSchema() {
  const tableSelect = document.getElementById('sql-sandbox-table-select');
  const schemaTable = document.getElementById('sql-sandbox-schema-table');
  if (!tableSelect || !schemaTable) return;
  
  const tableName = tableSelect.value;
  const data = mockDB[tableName];
  if (!data || data.length === 0) return;
  
  const columns = Object.keys(data[0]);
  let html = `<table class="min-w-full divide-y divide-gray-200 text-left border-collapse">
    <thead class="bg-gray-100 font-bold">
      <tr>`;
  columns.forEach(col => {
    html += `<th class="px-3 py-1.5 border">${col}</th>`;
  });
  html += `</tr>
    </thead>
    <tbody>`;
  data.forEach(row => {
    html += `<tr>`;
    columns.forEach(col => {
      html += `<td class="px-3 py-1.5 border text-gray-700">${row[col]}</td>`;
    });
    html += `</tr>`;
  });
  html += `</tbody>
  </table>`;
  
  schemaTable.innerHTML = html;
}

function runSandboxQuery() {
  const queryInput = document.getElementById('sql-sandbox-query-input');
  const outputContainer = document.getElementById('sql-sandbox-output');
  if (!queryInput || !outputContainer) return;
  
  const query = queryInput.value.trim();
  if (!query) {
    outputContainer.innerHTML = "Error: Query is empty!";
    return;
  }
  
  try {
    const result = executeMockSQL(query);
    renderSQLOutput(result, outputContainer);
  } catch (err) {
    outputContainer.innerHTML = `Console Error: ${err.message}`;
  }
}

function executeMockSQL(query) {
  const clean = query.replace(/\s+/g, ' ').replace(/;$/, '').trim();
  const lower = clean.toLowerCase();

  if (!lower.startsWith('select')) {
    throw new Error('Sandbox compiler only supports SELECT queries. Write operations (INSERT, UPDATE, DELETE) are locked.');
  }

  let tableName = '';
  if (lower.includes('from sales')) tableName = 'sales';
  else if (lower.includes('from customers')) tableName = 'customers';
  else if (lower.includes('from restaurants')) tableName = 'restaurants';
  else {
    throw new Error('Table not found. Available schemas in sandbox: [sales], [customers], [restaurants]');
  }

  const database = mockDB[tableName];
  let results = [...database];

  if (lower.includes('where')) {
    const whereClause = clean.substring(lower.indexOf('where') + 6);
    const orderIndex = whereClause.toLowerCase().indexOf('order by');
    const filterExpr = orderIndex !== -1 ? whereClause.substring(0, orderIndex).trim() : whereClause.trim();

    results = applyWhereFilter(results, filterExpr);
  }

  if (lower.includes('order by')) {
    const orderClause = clean.substring(lower.indexOf('order by') + 9).trim();
    results = applyOrderBy(results, orderClause);
  }

  const selectCols = clean.substring(6, lower.indexOf('from')).split(',').map(s => s.trim());
  if (selectCols.length === 1 && selectCols[0] === '*') {
    return { columns: Object.keys(database[0]), data: results };
  } else {
    const validCols = Object.keys(database[0]);
    selectCols.forEach(col => {
      if (!validCols.includes(col)) {
        throw new Error(`Column '${col}' does not exist on table '${tableName}'. Valid columns are: [${validCols.join(', ')}]`);
      }
    });
    const parsedData = results.map(row => {
      const obj = {};
      selectCols.forEach(col => { obj[col] = row[col]; });
      return obj;
    });
    return { columns: selectCols, data: parsedData };
  }
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

function applyOrderBy(data, orderExpr) {
  const parts = orderExpr.split(/\s+/);
  const col = parts[0];
  const direction = parts[1] && parts[1].toLowerCase() === 'desc' ? 'desc' : 'asc';

  return data.sort((a, b) => {
    let valA = a[col];
    let valB = b[col];
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

function renderSQLOutput(result, container) {
  if (result.data.length === 0) {
    container.innerHTML = `Console Output: Query OK, but returned 0 rows.`;
    return;
  }

  let tableHtml = `<div class="overflow-x-auto w-full">
    <table class="min-w-full divide-y divide-gray-700 text-left border border-gray-700">
      <thead class="bg-gray-800 text-gray-300 font-bold">
        <tr>`;
  result.columns.forEach(col => {
    tableHtml += `<th class="px-2 py-1 border border-gray-700">${col}</th>`;
  });
  tableHtml += `</tr>
      </thead>
      <tbody>`;
  result.data.forEach(row => {
    tableHtml += `<tr>`;
    result.columns.forEach(col => {
      tableHtml += `<td class="px-2 py-1 border border-gray-700 text-gray-300">${row[col]}</td>`;
    });
    tableHtml += `</tr>`;
  });
  tableHtml += `</tbody>
    </table>
    <div class="mt-2 text-[9px] text-emerald-500 font-bold">
      Query executed successfully. Rows returned: ${result.data.length}
    </div>
  </div>`;

  container.innerHTML = tableHtml;
}

/* LIVE PLACEMENT ACTIVITY FEED TICKER LOOP */
function initActivityTicker() {
  const container = document.getElementById('live-activity-ticker-container');
  if (!container) return;
  
  let idx = 0;
  container.innerHTML = `<div class="py-1 text-emerald-600 animate-slide-up flex items-center gap-2">
    <span>⚡</span> <span>${mockActivities[idx]}</span>
  </div>`;
  
  setInterval(() => {
    idx = (idx + 1) % mockActivities.length;
    container.innerHTML = `<div class="py-1 text-emerald-600 animate-slide-up flex items-center gap-2">
      <span>⚡</span> <span>${mockActivities[idx]}</span>
    </div>`;
  }, 4000);
}

/* UPDATE SUBJECT DASHBOARD DYNAMIC METRICS */
function updateDashboardMetrics() {
  const totalSolved = appState.solvedCount;
  const currentLT = appState.masteryProgression[appState.masteryProgression.length - 1];

  // Update level text & gauge bars
  const statusEl = document.getElementById('readiness-status');
  const barEl = document.getElementById('readiness-gauge-bar');
  if (statusEl) {
    let level = 'Beginner';
    if (currentLT >= 75) level = 'Placement Ready (Expert)';
    else if (currentLT >= 60) level = 'Advanced (Knight)';
    else if (currentLT >= 45) level = 'Intermediate (Squire)';
    statusEl.innerText = `${level} (${currentLT}%)`;
  }
  if (barEl) {
    barEl.style.width = `${currentLT}%`;
  }

  // Update solved count target (out of 5 daily)
  const goalEl = document.getElementById('practice-daily-goal');
  if (goalEl) {
    goalEl.innerText = `${totalSolved} / 5 Solved`;
  }

  // Sync dashboard streak values
  const streakVal = localStorage.getItem('da_streak') || '1';
  const dashStreakEl = document.getElementById('practice-dashboard-streak');
  if (dashStreakEl) {
    dashStreakEl.innerText = `🔥 ${streakVal} ${streakVal === '1' ? 'Day' : 'Days'}`;
  }

  // Update self peer-rank score in leaderboard
  const selfScoreEl = document.getElementById('leaderboard-self-score');
  if (selfScoreEl) {
    selfScoreEl.innerText = `${currentLT.toFixed(1)} LT`;
  }

  // Update Achievement Badges
  updateDashboardBadges(currentLT);

  // Calculate accuracies per topic dynamically on cards
  const cardMappings = {
    probability: 'acc-prob',
    statistics: 'acc-stats',
    trends: 'acc-trends',
    'sql-joins': 'acc-joins',
    'sql-agg': 'acc-agg',
    'sql-windows': 'acc-windows',
    'python-arrays': 'acc-python',
    leetcode: 'acc-leetcode'
  };

  for (let topicCode in cardMappings) {
    const elId = cardMappings[topicCode];
    const el = document.getElementById(elId);
    if (el) {
      const stats = appState.topicPerformance[topicCode];
      if (stats && stats.total > 0) {
        const pct = Math.round((stats.correct / stats.total) * 100);
        el.innerText = `${pct}%`;
      } else {
        el.innerText = '0%';
      }
    }
  }
}

/* DYNAMIC BADGES RENDER RULES */
function updateDashboardBadges(currentLT) {
  const container = document.getElementById('unlocked-badges-container');
  if (!container) return;

  container.innerHTML = '';
  const badges = [];

  if (currentLT >= 45) {
    badges.push({ name: '🛡️ SQL Squire', color: 'bg-blue-50 text-brandBlue border-blue-200' });
  }
  if (currentLT >= 60) {
    badges.push({ name: '⚔️ Stats Knight', color: 'bg-purple-50 text-brandPurple border-purple-200' });
  }
  if (currentLT >= 75) {
    badges.push({ name: '👑 Data Overlord', color: 'bg-amber-50 text-amber-600 border-amber-200 animate-pulse' });
  }

  if (badges.length === 0) {
    container.innerHTML = `<span class="text-[9px] text-gray-400 font-bold bg-gray-100 px-2 py-0.5 rounded border border-gray-200">No Badges Yet</span>`;
    return;
  }

  badges.forEach(badge => {
    const el = document.createElement('span');
    el.className = `text-[9px] font-bold px-2 py-0.5 rounded border ${badge.color}`;
    el.innerText = badge.name;
    container.appendChild(el);
  });
}

/* HTML5 WEB AUDIO FREQUENCY SYNTHESIZER FEEDBACKS */
function playFeedbackSound(isCorrect) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (isCorrect) {
      // Pleasant double chime (C5 -> E5)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      osc.start();
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.stop(ctx.currentTime + 0.25);
    } else {
      // Dull thud thud (F2 -> D2)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(174.61, ctx.currentTime); // F2
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      osc.start();
      osc.frequency.setValueAtTime(146.83, ctx.currentTime + 0.12); // D2
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.32);
      osc.stop(ctx.currentTime + 0.32);
    }
  } catch (e) {
    // Audio Context blocked by user interaction settings
  }
}
