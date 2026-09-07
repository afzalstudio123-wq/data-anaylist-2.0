// Global Question Database for Aptech@Mahanagar, Lko
// Contains 25+ COMPLETELY DISTINCT questions per course track (Python, SQL, Excel, Statistics, Power BI, Data Science, AI)

const questionPool = [

  // =========================================================================
  // ==================== 1. PYTHON (25 DISTINCT QUESTIONS) ===================
  // =========================================================================
  {
    id: "py_01",
    subject: "Python",
    topic: "Pandas Dataframes",
    difficulty: "Moderate",
    type: "mcq",
    question: "In Pandas, what does df.groupby('dept')['salary'].transform('mean') do compared to mean()?",
    options: [
      "A. Reduces dataframe row count",
      "B. Broadcasts group mean while maintaining original dataframe shape",
      "C. Drops null values automatically",
      "D. Returns a scalar value"
    ],
    answer: 1,
    explanation: "transform() computes the group summary and broadcasts it back to match the original dataframe's shape.",
    xp: 20
  },
  {
    id: "py_02",
    subject: "Python",
    topic: "Data Cleaning",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: In Pandas, to drop all rows containing NaN values, call the method df.__________().",
    fillAnswer: ["dropna", "dropna()"],
    explanation: "dropna() removes missing values from a DataFrame.",
    xp: 10
  },
  {
    id: "py_03",
    subject: "Python",
    topic: "NumPy Arrays",
    difficulty: "Hard",
    type: "mcq",
    question: "What is the shape of np.dot() between a (3, 4) matrix and a (4, 2) matrix?",
    options: ["A. (3, 4)", "B. (4, 2)", "C. (3, 2)", "D. (4, 4)"],
    answer: 2,
    explanation: "Matrix multiplication of (M, N) and (N, P) results in shape (M, P).",
    xp: 25
  },
  {
    id: "py_04",
    subject: "Python",
    topic: "Pandas Libraries",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The standard Python library used for dataframe manipulation and tabular data analysis is called __________.",
    fillAnswer: ["pandas", "Pandas"],
    explanation: "Pandas is the primary data analysis library in Python.",
    xp: 10
  },
  {
    id: "py_05",
    subject: "Python",
    topic: "Data Inspection",
    difficulty: "Easy",
    type: "mcq",
    question: "By default, how many rows does df.head() display in Pandas if no argument is passed?",
    options: ["A. 10 rows", "B. 5 rows", "C. 1 row", "D. All rows"],
    answer: 1,
    explanation: "df.head() displays the first 5 rows of a DataFrame by default.",
    xp: 10
  },
  {
    id: "py_06",
    subject: "Python",
    topic: "Data Imputation",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: In Pandas, to replace missing NaN values with a specific constant or mean value, use df.__________().",
    fillAnswer: ["fillna", "fillna()"],
    explanation: "fillna() replaces missing values (NaN) in a DataFrame.",
    xp: 10
  },
  {
    id: "py_07",
    subject: "Python",
    topic: "File I/O",
    difficulty: "Easy",
    type: "mcq",
    question: "Which Pandas function is used to load a CSV file into a DataFrame?",
    options: ["A. pd.read_file()", "B. pd.read_csv()", "C. pd.load_csv()", "D. pd.import_csv()"],
    answer: 1,
    explanation: "pd.read_csv('filename.csv') reads a CSV file into a Pandas DataFrame.",
    xp: 10
  },
  {
    id: "py_08",
    subject: "Python",
    topic: "Indexing",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: In Pandas, integer position-based indexing (e.g. row 0, col 2) is performed using the .__________ attribute.",
    fillAnswer: ["iloc", "iloc[]"],
    explanation: ".iloc is used for integer position-based indexing.",
    xp: 15
  },
  {
    id: "py_09",
    subject: "Python",
    topic: "List Slicing",
    difficulty: "Easy",
    type: "mcq",
    question: "Given Python list nums = [10, 20, 30, 40, 50]. What is the output of nums[1:4]?",
    options: ["A. [10, 20, 30]", "B. [20, 30, 40]", "C. [20, 30, 40, 50]", "D. [30, 40]"],
    answer: 1,
    explanation: "nums[1:4] slices from index 1 up to (excluding) index 4, returning [20, 30, 40].",
    xp: 10
  },
  {
    id: "py_10",
    subject: "Python",
    topic: "Built-in Functions",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The built-in Python function used to determine the total number of items in a list or length of a string is __________.",
    fillAnswer: ["len", "len()"],
    explanation: "len() returns the number of items in an object.",
    xp: 10
  },
  {
    id: "py_11",
    subject: "Python",
    topic: "Data Merging",
    difficulty: "Moderate",
    type: "mcq",
    question: "What is the default join type when executing pd.merge(df1, df2, on='key') in Pandas?",
    options: ["A. outer", "B. left", "C. inner", "D. right"],
    answer: 2,
    explanation: "pd.merge() defaults to how='inner'.",
    xp: 15
  },
  {
    id: "py_12",
    subject: "Python",
    topic: "Label Indexing",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: In Pandas, label-based index selection (using explicit row and column labels) is accessed via .__________.",
    fillAnswer: ["loc", "loc[]"],
    explanation: ".loc selects rows and columns with specific labels.",
    xp: 15
  },
  {
    id: "py_13",
    subject: "Python",
    topic: "DataFrame Attributes",
    difficulty: "Easy",
    type: "mcq",
    question: "Which DataFrame attribute returns a tuple representing (number_of_rows, number_of_columns)?",
    options: ["A. df.size", "B. df.shape", "C. df.ndim", "D. df.columns"],
    answer: 1,
    explanation: "df.shape returns (rows, columns).",
    xp: 10
  },
  {
    id: "py_14",
    subject: "Python",
    topic: "Data Types",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To inspect the data types of all columns in a Pandas DataFrame, check the attribute df.__________.",
    fillAnswer: ["dtypes", "dtypes"],
    explanation: "df.dtypes returns the data type of each column.",
    xp: 10
  },
  {
    id: "py_15",
    subject: "Python",
    topic: "Column Dropping",
    difficulty: "Moderate",
    type: "mcq",
    question: "Which code snippet correctly drops a column named 'Age' from DataFrame df?",
    options: [
      "A. df.drop('Age', axis=1)",
      "B. df.remove('Age')",
      "C. df.delete('Age')",
      "D. df.pop_row('Age')"
    ],
    answer: 0,
    explanation: "df.drop('Age', axis=1) or df.drop(columns=['Age']) drops the column.",
    xp: 15
  },
  {
    id: "py_16",
    subject: "Python",
    topic: "Summary Statistics",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To generate summary statistics (mean, std, min, max, quartiles) for numeric columns, call df.__________().",
    fillAnswer: ["describe", "describe()"],
    explanation: "df.describe() computes descriptive statistics.",
    xp: 10
  },
  {
    id: "py_17",
    subject: "Python",
    topic: "Sorting Data",
    difficulty: "Moderate",
    type: "mcq",
    question: "How do you sort DataFrame df by column 'Salary' in descending order?",
    options: [
      "A. df.sort_values(by='Salary', ascending=False)",
      "B. df.order_by('Salary', desc=True)",
      "C. df.sort('Salary', reverse=True)",
      "D. df.sort_rows('Salary', descending=True)"
    ],
    answer: 0,
    explanation: "df.sort_values(by='Salary', ascending=False) sorts the DataFrame.",
    xp: 15
  },
  {
    id: "py_18",
    subject: "Python",
    topic: "Index Manipulation",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: To reset the index of a DataFrame back to default sequential integers, call df.__________().",
    fillAnswer: ["reset_index", "reset_index()"],
    explanation: "reset_index() resets the index of the DataFrame.",
    xp: 15
  },
  {
    id: "py_19",
    subject: "Python",
    topic: "List Methods",
    difficulty: "Easy",
    type: "mcq",
    question: "Which Python list method adds a single element to the end of a list?",
    options: ["A. list.add(x)", "B. list.append(x)", "C. list.insert_end(x)", "D. list.push(x)"],
    answer: 1,
    explanation: "list.append(x) appends element x to the end.",
    xp: 10
  },
  {
    id: "py_20",
    subject: "Python",
    topic: "Duplicates Handling",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: In Pandas, to check for duplicate rows in a DataFrame, call df.__________().",
    fillAnswer: ["duplicated", "duplicated()"],
    explanation: "df.duplicated() identifies duplicate rows.",
    xp: 15
  },
  {
    id: "py_21",
    subject: "Python",
    topic: "Data Filtering",
    difficulty: "Moderate",
    type: "mcq",
    question: "Which expression filters df for rows where column 'Age' is greater than 25 AND 'Salary' > 50000?",
    options: [
      "A. df[(df['Age'] > 25) & (df['Salary'] > 50000)]",
      "B. df[df['Age'] > 25 and df['Salary'] > 50000]",
      "C. df.where(Age > 25, Salary > 50000)",
      "D. df.filter(Age > 25, Salary > 50000)"
    ],
    answer: 0,
    explanation: "In Pandas, boolean conditions use bitwise & and | enclosed in parentheses.",
    xp: 20
  },
  {
    id: "py_22",
    subject: "Python",
    topic: "List Comprehension",
    difficulty: "Hard",
    type: "mcq",
    question: "What is the output of [x**2 for x in range(5) if x % 2 == 0]?",
    options: ["A. [0, 4, 16]", "B. [0, 2, 4]", "C. [1, 9]", "D. [0, 1, 4, 9, 16]"],
    answer: 0,
    explanation: "range(5) = [0, 1, 2, 3, 4]. Even numbers = [0, 2, 4]. Squared = [0, 4, 16].",
    xp: 25
  },
  {
    id: "py_23",
    subject: "Python",
    topic: "Unique Values",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To count unique non-null values in a Pandas Series, use the method s.__________().",
    fillAnswer: ["nunique", "nunique()"],
    explanation: "s.nunique() counts distinct values in a Series.",
    xp: 10
  },
  {
    id: "py_24",
    subject: "Python",
    topic: "Data Structure Characteristics",
    difficulty: "Easy",
    type: "mcq",
    question: "What is the primary difference between a Python List and a Python Tuple?",
    options: [
      "A. Lists are immutable; Tuples are mutable",
      "B. Tuples are immutable; Lists are mutable",
      "C. Tuples only store integers",
      "D. Lists cannot be indexed"
    ],
    answer: 1,
    explanation: "Tuples cannot be modified after creation (immutable), whereas lists are mutable.",
    xp: 10
  },
  {
    id: "py_25",
    subject: "Python",
    topic: "NumPy Creation",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: To create an array of 10 evenly spaced numbers between 0 and 1 in NumPy, call np.__________ (0, 1, 10).",
    fillAnswer: ["linspace", "linspace()"],
    explanation: "np.linspace(start, stop, num) returns evenly spaced numbers over a specified interval.",
    xp: 25
  },

  // =========================================================================
  // ==================== 2. SQL (25 DISTINCT QUESTIONS) =====================
  // =========================================================================
  {
    id: "sql_01",
    subject: "SQL",
    topic: "JOINs",
    difficulty: "Moderate",
    type: "mcq",
    question: "Given table `orders` (5 rows) and table `refunds` (2 rows). If you execute a LEFT JOIN from `orders` to `refunds` on `order_id` where 1 row matches, how many rows are returned?",
    options: ["A. 1 row", "B. 2 rows", "C. 5 rows", "D. 6 rows"],
    answer: 2,
    explanation: "A LEFT JOIN preserves all 5 rows from the left table (orders).",
    xp: 15
  },
  {
    id: "sql_02",
    subject: "SQL",
    topic: "GROUP BY",
    difficulty: "Easy",
    type: "mcq",
    question: "Which keyword is used to filter aggregated group results in SQL (e.g. SUM or AVG)?",
    options: ["A. WHERE", "B. HAVING", "C. GROUP BY", "D. ORDER BY"],
    answer: 1,
    explanation: "WHERE filters rows before grouping; HAVING filters groups after aggregation.",
    xp: 10
  },
  {
    id: "sql_03",
    subject: "SQL",
    topic: "Window Functions",
    difficulty: "Hard",
    type: "mcq",
    question: "Which SQL window function ranks rows without skipping rank numbers when values tie?",
    options: ["A. RANK()", "B. DENSE_RANK()", "C. ROW_NUMBER()", "D. PERCENT_RANK()"],
    answer: 1,
    explanation: "DENSE_RANK() assigns consecutive rank numbers (1, 2, 2, 3) without skipping ranks.",
    xp: 25
  },
  {
    id: "sql_04",
    subject: "SQL",
    topic: "Aggregate Functions",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To calculate the average value of a numeric column in SQL, use the __________ function.",
    fillAnswer: ["AVG", "AVG()"],
    explanation: "The AVG() function returns the average value of a numeric column.",
    xp: 10
  },
  {
    id: "sql_05",
    subject: "SQL",
    topic: "Sorting",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To sort query results in descending order, append the keyword __________ after ORDER BY column_name.",
    fillAnswer: ["DESC", "DESCENDING"],
    explanation: "DESC specifies descending order in SQL ORDER BY clauses.",
    xp: 10
  },
  {
    id: "sql_06",
    subject: "SQL",
    topic: "Distinct Records",
    difficulty: "Easy",
    type: "mcq",
    question: "Which SQL keyword eliminates duplicate rows from query results?",
    options: ["A. UNIQUE", "B. DISTINCT", "C. DIFFERENT", "D. SINGLE"],
    answer: 1,
    explanation: "SELECT DISTINCT removes duplicate rows from the output.",
    xp: 10
  },
  {
    id: "sql_07",
    subject: "SQL",
    topic: "Row Count",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To count the total number of rows in a table including NULLs, write SELECT __________(*) FROM table_name.",
    fillAnswer: ["COUNT", "COUNT()"],
    explanation: "COUNT(*) counts total table records.",
    xp: 10
  },
  {
    id: "sql_08",
    subject: "SQL",
    topic: "Limit Output",
    difficulty: "Easy",
    type: "mcq",
    question: "In MySQL and PostgreSQL, which clause limits the number of rows returned by a SELECT query?",
    options: ["A. TOP", "B. LIMIT", "C. ROWNUM", "D. FETCH"],
    answer: 1,
    explanation: "LIMIT clause sets the maximum number of rows returned.",
    xp: 10
  },
  {
    id: "sql_09",
    subject: "SQL",
    topic: "Pattern Matching",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: In SQL WHERE clauses, wildcards like '%' are used alongside the __________ operator.",
    fillAnswer: ["LIKE"],
    explanation: "LIKE operator is used in WHERE clauses to search for a specified pattern.",
    xp: 15
  },
  {
    id: "sql_10",
    subject: "SQL",
    topic: "NULL Checks",
    difficulty: "Easy",
    type: "mcq",
    question: "Which condition correctly checks if a column contains a NULL value?",
    options: ["A. WHERE col = NULL", "B. WHERE col IS NULL", "C. WHERE col == NULL", "D. WHERE col IN (NULL)"],
    answer: 1,
    explanation: "NULL comparisons must use IS NULL or IS NOT NULL.",
    xp: 10
  },
  {
    id: "sql_11",
    subject: "SQL",
    topic: "Table Aliases",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To assign a temporary alias name to a table or column, use the keyword __________.",
    fillAnswer: ["AS"],
    explanation: "AS keyword is used to rename a column or table with an alias.",
    xp: 10
  },
  {
    id: "sql_12",
    subject: "SQL",
    topic: "Subqueries",
    difficulty: "Hard",
    type: "mcq",
    question: "Which operator checks if a subquery returns ANY rows?",
    options: ["A. EXISTS", "B. IN", "C. ANY", "D. CONTAINS"],
    answer: 0,
    explanation: "EXISTS returns TRUE if the subquery returns one or more records.",
    xp: 25
  },
  {
    id: "sql_13",
    subject: "SQL",
    topic: "CTE Definitions",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: A Common Table Expression (CTE) is defined at the start of a query using the __________ keyword.",
    fillAnswer: ["WITH"],
    explanation: "WITH keyword introduces a Common Table Expression (CTE).",
    xp: 25
  },
  {
    id: "sql_14",
    subject: "SQL",
    topic: "Subqueries & IN",
    difficulty: "Moderate",
    type: "mcq",
    question: "Which clause checks if a scalar value matches any value in a list or subquery?",
    options: ["A. BETWEEN", "B. IN", "C. LIKE", "D. HAVING"],
    answer: 1,
    explanation: "IN allows you to specify multiple values in a WHERE clause.",
    xp: 15
  },
  {
    id: "sql_15",
    subject: "SQL",
    topic: "Case Statements",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: Conditional IF-THEN-ELSE branching logic in SQL queries is written using the __________ expression.",
    fillAnswer: ["CASE"],
    explanation: "CASE expressions go through conditions and return a value when the first condition is met.",
    xp: 15
  },
  {
    id: "sql_16",
    subject: "SQL",
    topic: "Full Outer Join",
    difficulty: "Hard",
    type: "mcq",
    question: "Which JOIN type returns all records when there is a match in left OR right table records?",
    options: ["A. INNER JOIN", "B. LEFT JOIN", "C. FULL OUTER JOIN", "D. CROSS JOIN"],
    answer: 2,
    explanation: "FULL OUTER JOIN returns all records from both tables.",
    xp: 25
  },
  {
    id: "sql_17",
    subject: "SQL",
    topic: "Min Aggregate",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To find the smallest value in a column, use the aggregate function __________.",
    fillAnswer: ["MIN", "MIN()"],
    explanation: "MIN() returns the smallest value of the selected column.",
    xp: 10
  },
  {
    id: "sql_18",
    subject: "SQL",
    topic: "Cross Join",
    difficulty: "Moderate",
    type: "mcq",
    question: "Given Table A (3 rows) and Table B (4 rows). How many rows does a CROSS JOIN produce?",
    options: ["A. 7 rows", "B. 12 rows", "C. 4 rows", "D. 3 rows"],
    answer: 1,
    explanation: "CROSS JOIN produces a Cartesian product (3 * 4 = 12 rows).",
    xp: 15
  },
  {
    id: "sql_19",
    subject: "SQL",
    topic: "Between Range",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To filter values within an inclusive numeric or date range, use the __________ operator.",
    fillAnswer: ["BETWEEN"],
    explanation: "BETWEEN selects values within a given range (inclusive).",
    xp: 10
  },
  {
    id: "sql_20",
    subject: "SQL",
    topic: "Union vs Union All",
    difficulty: "Moderate",
    type: "mcq",
    question: "What is the difference between UNION and UNION ALL in SQL?",
    options: [
      "A. UNION retains duplicates; UNION ALL removes duplicates",
      "B. UNION removes duplicates; UNION ALL retains all duplicate rows",
      "C. UNION ALL requires different column numbers",
      "D. No difference"
    ],
    answer: 1,
    explanation: "UNION removes duplicates; UNION ALL keeps duplicate rows.",
    xp: 20
  },
  {
    id: "sql_21",
    subject: "SQL",
    topic: "Max Aggregate",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To find the highest numerical value in a column, call the __________ function.",
    fillAnswer: ["MAX", "MAX()"],
    explanation: "MAX() returns the maximum value.",
    xp: 10
  },
  {
    id: "sql_22",
    subject: "SQL",
    topic: "Sum Function",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To calculate the sum total of all values in a numeric column, use the __________ function.",
    fillAnswer: ["SUM", "SUM()"],
    explanation: "SUM() calculates the total sum.",
    xp: 10
  },
  {
    id: "sql_23",
    subject: "SQL",
    topic: "Coalesce Function",
    difficulty: "Hard",
    type: "mcq",
    question: "What does the SQL COALESCE(col1, col2, 'Default') function return?",
    options: [
      "A. Returns the first non-NULL value in the list of arguments",
      "B. Combines strings together",
      "C. Returns NULL always",
      "D. Throws an error"
    ],
    answer: 0,
    explanation: "COALESCE returns the first non-null expression among its arguments.",
    xp: 25
  },
  {
    id: "sql_24",
    subject: "SQL",
    topic: "Row Number Window",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: The window function that assigns a sequential integer to each row starting at 1 is __________().",
    fillAnswer: ["ROW_NUMBER", "ROW_NUMBER()"],
    explanation: "ROW_NUMBER() numbers rows sequentially.",
    xp: 20
  },
  {
    id: "sql_25",
    subject: "SQL",
    topic: "Over Partition",
    difficulty: "Hard",
    type: "mcq",
    question: "Which clause is appended to window functions to divide query result sets into subsets before applying rankings?",
    options: ["A. GROUP BY", "B. PARTITION BY", "C. DIVIDE BY", "D. BREAK BY"],
    answer: 1,
    explanation: "PARTITION BY divides the result set into partitions.",
    xp: 25
  },

  // =========================================================================
  // ==================== 3. EXCEL (25 DISTINCT QUESTIONS) ===================
  // =========================================================================
  {
    id: "excel_01",
    subject: "Excel",
    topic: "XLOOKUP",
    difficulty: "Moderate",
    type: "mcq",
    question: "What is the default match mode of XLOOKUP if match_mode is omitted?",
    options: ["A. Exact match (0)", "B. Next smaller (-1)", "C. Wildcard (2)", "D. Approximate (1)"],
    answer: 0,
    explanation: "XLOOKUP defaults to exact match (0).",
    xp: 15
  },
  {
    id: "excel_02",
    subject: "Excel",
    topic: "Logical Formulas",
    difficulty: "Easy",
    type: "mcq",
    question: "Which Excel formula returns TRUE if cell A1 is greater than 50 AND cell B1 is less than 100?",
    options: ["A. =AND(A1>50, B1<100)", "B. =IF(A1>50, B1<100)", "C. =OR(A1>50, B1<100)", "D. =CONCAT(A1, B1)"],
    answer: 0,
    explanation: "AND() checks whether all conditions evaluate to TRUE.",
    xp: 10
  },
  {
    id: "excel_03",
    subject: "Excel",
    topic: "Lookup Formulas",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: The modern replacement for VLOOKUP that can search both left and right is __________.",
    fillAnswer: ["XLOOKUP", "XLOOKUP()"],
    explanation: "XLOOKUP is the modern flexible lookup function in Excel.",
    xp: 15
  },
  {
    id: "excel_04",
    subject: "Excel",
    topic: "Conditional Counting",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To count cells that meet a single specific condition in Excel, use the __________ function.",
    fillAnswer: ["COUNTIF", "COUNTIF()"],
    explanation: "COUNTIF(range, criteria) counts cells matching a single condition.",
    xp: 10
  },
  {
    id: "excel_05",
    subject: "Excel",
    topic: "Absolute References",
    difficulty: "Easy",
    type: "mcq",
    question: "Which character is used to lock row and column references in Excel cell formulas (e.g., $A$1)?",
    options: ["A. #", "B. $", "C. &", "D. @"],
    answer: 1,
    explanation: "The dollar sign ($) locks column and row references.",
    xp: 10
  },
  {
    id: "excel_06",
    subject: "Excel",
    topic: "Conditional Summing",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: To sum values across multiple range conditions in Excel, use the __________ function.",
    fillAnswer: ["SUMIFS", "SUMIFS()"],
    explanation: "SUMIFS sums cells matching multiple criteria.",
    xp: 15
  },
  {
    id: "excel_07",
    subject: "Excel",
    topic: "Index Match Combination",
    difficulty: "Hard",
    type: "mcq",
    question: "In classical Excel formulas, which function combination replaces VLOOKUP to perform two-way dynamic lookups?",
    options: ["A. INDEX and MATCH", "B. FIND and SEARCH", "C. OFFSET and ROW", "D. LOOKUP and CHOOSE"],
    answer: 0,
    explanation: "INDEX and MATCH combined provide dynamic 2D lookups.",
    xp: 25
  },
  {
    id: "excel_08",
    subject: "Excel",
    topic: "Text Concatenation",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The operator symbol used to join two text strings together in Excel without CONCAT is __________.",
    fillAnswer: ["&"],
    explanation: "The ampersand (&) joins text strings.",
    xp: 10
  },
  {
    id: "excel_09",
    subject: "Excel",
    topic: "VLOOKUP Constraints",
    difficulty: "Moderate",
    type: "mcq",
    question: "What is a key structural limitation of VLOOKUP in Excel?",
    options: [
      "A. It can only search for values to the right of the lookup column",
      "B. It cannot calculate numbers",
      "C. It only works on 10 rows",
      "D. It requires macros"
    ],
    answer: 0,
    explanation: "VLOOKUP can only search for values in the leftmost column and return values to the right.",
    xp: 15
  },
  {
    id: "excel_10",
    subject: "Excel",
    topic: "Error Handling",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: To trap errors in Excel formulas and display a custom friendly message, wrap the formula in __________().",
    fillAnswer: ["IFERROR", "IFERROR()"],
    explanation: "IFERROR returns a value you specify if a formula evaluates to an error.",
    xp: 15
  },
  {
    id: "excel_11",
    subject: "Excel",
    topic: "Pivot Tables",
    difficulty: "Easy",
    type: "mcq",
    question: "Which feature in Excel is best suited for quickly summarizing, grouping, and analyzing large tabular datasets?",
    options: ["A. Pivot Table", "B. Goal Seek", "C. Data Validation", "D. Conditional Formatting"],
    answer: 0,
    explanation: "Pivot Tables summarize and analyze large datasets interactively.",
    xp: 10
  },
  {
    id: "excel_12",
    subject: "Excel",
    topic: "Text Extraction",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To extract the first 3 characters from the left side of cell A1, use =__________(A1, 3).",
    fillAnswer: ["LEFT", "LEFT()"],
    explanation: "LEFT(text, num_chars) extracts characters from the start of a string.",
    xp: 10
  },
  {
    id: "excel_13",
    subject: "Excel",
    topic: "Unique Array",
    difficulty: "Hard",
    type: "mcq",
    question: "Which dynamic array function introduced in modern Excel returns a list of unique values from a range?",
    options: ["A. UNIQUE()", "B. DISTINCT()", "C. SINGLE()", "D. DEDUPE()"],
    answer: 0,
    explanation: "UNIQUE() returns unique values from a range or array.",
    xp: 25
  },
  {
    id: "excel_14",
    subject: "Excel",
    topic: "Right Text",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To extract characters from the end (right side) of a text cell, use the __________ function.",
    fillAnswer: ["RIGHT", "RIGHT()"],
    explanation: "RIGHT(text, num_chars) extracts characters from the end.",
    xp: 10
  },
  {
    id: "excel_15",
    subject: "Excel",
    topic: "Upper Function",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To convert a text string in cell A1 to all uppercase letters, use =__________(A1).",
    fillAnswer: ["UPPER", "UPPER()"],
    explanation: "UPPER converts text to uppercase.",
    xp: 10
  },
  {
    id: "excel_16",
    subject: "Excel",
    topic: "Lower Function",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To convert text to lowercase in Excel, use the __________ function.",
    fillAnswer: ["LOWER", "LOWER()"],
    explanation: "LOWER converts text to lowercase.",
    xp: 10
  },
  {
    id: "excel_17",
    subject: "Excel",
    topic: "Len Function",
    difficulty: "Easy",
    type: "mcq",
    question: "What does formula =LEN('Data Analyst') output in Excel?",
    options: ["A. 12", "B. 11", "C. 2", "D. 10"],
    answer: 0,
    explanation: "'Data Analyst' contains 12 characters including the space.",
    xp: 10
  },
  {
    id: "excel_18",
    subject: "Excel",
    topic: "Trim Function",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To remove leading and trailing extra spaces from text in cell A1, use =__________(A1).",
    fillAnswer: ["TRIM", "TRIM()"],
    explanation: "TRIM removes extra spaces except single spaces between words.",
    xp: 10
  },
  {
    id: "excel_19",
    subject: "Excel",
    topic: "Averageif",
    difficulty: "Moderate",
    type: "mcq",
    question: "Which Excel function calculates the average of cells that meet a specified criteria?",
    options: ["A. AVERAGEIF", "B. MEANIF", "C. AVGIF", "D. SUMAVERAGE"],
    answer: 0,
    explanation: "AVERAGEIF calculates the average for cells matching criteria.",
    xp: 15
  },
  {
    id: "excel_20",
    subject: "Excel",
    topic: "Date Functions",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: To return the current date and time in Excel dynamically, write =__________().",
    fillAnswer: ["NOW", "NOW()"],
    explanation: "NOW() returns the current date and time.",
    xp: 15
  },
  {
    id: "excel_21",
    subject: "Excel",
    topic: "Today Function",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To return only the current date without the timestamp in Excel, write =__________().",
    fillAnswer: ["TODAY", "TODAY()"],
    explanation: "TODAY() returns the current date.",
    xp: 10
  },
  {
    id: "excel_22",
    subject: "Excel",
    topic: "Net Work Days",
    difficulty: "Hard",
    type: "mcq",
    question: "Which Excel function calculates the number of working days between two dates excluding weekends?",
    options: ["A. NETWORKDAYS", "B. WORKDAYS", "C. DAYS360", "D. DATEDIF"],
    answer: 0,
    explanation: "NETWORKDAYS calculates net working days between start and end dates.",
    xp: 25
  },
  {
    id: "excel_23",
    subject: "Excel",
    topic: "Filter Function",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: Modern Excel's dynamic array function that filters data based on criteria is =__________().",
    fillAnswer: ["FILTER", "FILTER()"],
    explanation: "FILTER filters a range based on criteria.",
    xp: 25
  },
  {
    id: "excel_24",
    subject: "Excel",
    topic: "Match Mode exact",
    difficulty: "Moderate",
    type: "mcq",
    question: "In VLOOKUP(lookup_value, table_array, col_index, [range_lookup]), what value forces an exact match?",
    options: ["A. FALSE (or 0)", "B. TRUE (or 1)", "C. NULL", "D. EXACT"],
    answer: 0,
    explanation: "FALSE (0) specifies an exact match in VLOOKUP.",
    xp: 15
  },
  {
    id: "excel_25",
    subject: "Excel",
    topic: "Rank Function",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: To calculate the numerical rank of a number compared to a range of values, use =__________().",
    fillAnswer: ["RANK", "RANK.EQ", "RANK()"],
    explanation: "RANK returns the rank of a number in a list of numbers.",
    xp: 15
  },

  // =========================================================================
  // ==================== 4. STATISTICS (25 DISTINCT QUESTIONS) ==============
  // =========================================================================
  {
    id: "stats_01",
    subject: "Statistics",
    topic: "Variance & SD",
    difficulty: "Moderate",
    type: "mcq",
    question: "If a constant of 10 is added to every data point in a dataset, what happens to the mean and standard deviation?",
    options: [
      "A. Both increase by 10",
      "B. Mean increases by 10; Standard Deviation is unchanged",
      "C. Mean is unchanged; Standard Deviation increases by 10",
      "D. Both remain unchanged"
    ],
    answer: 1,
    explanation: "Adding a constant shifts the mean by that constant but does not change dispersion (SD).",
    xp: 15
  },
  {
    id: "stats_02",
    subject: "Statistics",
    topic: "A/B Testing",
    difficulty: "Hard",
    type: "mcq",
    question: "In A/B testing at alpha = 0.05, what does a p-value of 0.02 indicate?",
    options: [
      "A. Accept null hypothesis",
      "B. Reject null hypothesis; result is statistically significant",
      "C. Result is invalid",
      "D. P-value must be equal to 0.05"
    ],
    answer: 1,
    explanation: "P-value (0.02) < alpha (0.05) means we reject the null hypothesis.",
    xp: 25
  },
  {
    id: "stats_03",
    subject: "Statistics",
    topic: "Central Tendency",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The middle value of a sorted numerical dataset is called the __________.",
    fillAnswer: ["median", "Median"],
    explanation: "The median represents the 50th percentile / middle element of a sorted dataset.",
    xp: 10
  },
  {
    id: "stats_04",
    subject: "Statistics",
    topic: "Mode Concept",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The data value that occurs most frequently in a dataset is called the __________.",
    fillAnswer: ["mode", "Mode"],
    explanation: "The mode is the most frequently occurring value in a dataset.",
    xp: 10
  },
  {
    id: "stats_05",
    subject: "Statistics",
    topic: "Skewness",
    difficulty: "Moderate",
    type: "mcq",
    question: "In a right-skewed (positively skewed) distribution, what is the relationship between Mean, Median, and Mode?",
    options: [
      "A. Mean > Median > Mode",
      "B. Mode > Median > Mean",
      "C. Mean = Median = Mode",
      "D. Median > Mean > Mode"
    ],
    answer: 0,
    explanation: "In right-skewed distributions, high outliers pull the mean to the right: Mean > Median > Mode.",
    xp: 20
  },
  {
    id: "stats_06",
    subject: "Statistics",
    topic: "Normal Distribution",
    difficulty: "Moderate",
    type: "mcq",
    question: "Under the Empirical Rule (68-95-99.7 rule) for normal distributions, what percentage of data falls within 1 standard deviation of the mean?",
    options: ["A. 50%", "B. 68%", "C. 95%", "D. 99.7%"],
    answer: 1,
    explanation: "Approximately 68% of data falls within +/- 1 standard deviation.",
    xp: 15
  },
  {
    id: "stats_07",
    subject: "Statistics",
    topic: "Variance Definition",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: Standard deviation is mathematically defined as the square root of the __________.",
    fillAnswer: ["variance", "Variance"],
    explanation: "Standard Deviation = sqrt(Variance).",
    xp: 10
  },
  {
    id: "stats_08",
    subject: "Statistics",
    topic: "Correlation Range",
    difficulty: "Easy",
    type: "mcq",
    question: "What is the numerical range of the Pearson Correlation Coefficient?",
    options: ["A. 0 to 1", "B. -1 to +1", "C. -Infinity to +Infinity", "D. 0 to 100"],
    answer: 1,
    explanation: "Pearson correlation ranges from -1 (perfect negative) to +1 (perfect positive).",
    xp: 10
  },
  {
    id: "stats_09",
    subject: "Statistics",
    topic: "Bayes Theorem",
    difficulty: "Hard",
    type: "mcq",
    question: "Which theorem calculates conditional probability P(A|B) using P(B|A), P(A), and P(B)?",
    options: ["A. Central Limit Theorem", "B. Bayes Theorem", "C. Chebyshev Inequality", "D. Law of Large Numbers"],
    answer: 1,
    explanation: "Bayes' Theorem provides a mathematical framework for updating conditional probabilities.",
    xp: 25
  },
  {
    id: "stats_10",
    subject: "Statistics",
    topic: "Null Hypothesis",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: In hypothesis testing, the default claim of no effect or no difference is called the __________ hypothesis.",
    fillAnswer: ["null", "Null"],
    explanation: "The null hypothesis (H0) assumes no effect or relationship exists.",
    xp: 15
  },
  {
    id: "stats_11",
    subject: "Statistics",
    topic: "Type 1 Error",
    difficulty: "Hard",
    type: "mcq",
    question: "What is a Type I Error in hypothesis testing?",
    options: [
      "A. Rejecting a true null hypothesis (False Positive)",
      "B. Failing to reject a false null hypothesis (False Negative)",
      "C. Calculating an incorrect mean",
      "D. Setting alpha = 0"
    ],
    answer: 0,
    explanation: "Type I error occurs when you reject a true null hypothesis.",
    xp: 25
  },
  {
    id: "stats_12",
    subject: "Statistics",
    topic: "Type 2 Error",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: Failing to reject a false null hypothesis is called a Type __________ error.",
    fillAnswer: ["II", "2", "two", "Two"],
    explanation: "Type II error is a False Negative (failing to reject a false H0).",
    xp: 25
  },
  {
    id: "stats_13",
    subject: "Statistics",
    topic: "Z-score Formula",
    difficulty: "Moderate",
    type: "mcq",
    question: "What does a Z-score of +2.0 indicate about a data point?",
    options: [
      "A. It is 2 units above the mean",
      "B. It is 2 standard deviations above the mean",
      "C. It is 200% greater than median",
      "D. It is an impossible value"
    ],
    answer: 1,
    explanation: "A Z-score measures how many standard deviations a point is from the mean.",
    xp: 15
  },
  {
    id: "stats_14",
    subject: "Statistics",
    topic: "IQR Definition",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: Interquartile Range (IQR) is calculated as Q3 minus __________.",
    fillAnswer: ["Q1", "q1", "Quartile 1"],
    explanation: "IQR = Q3 - Q1 (75th percentile minus 25th percentile).",
    xp: 10
  },
  {
    id: "stats_15",
    subject: "Statistics",
    topic: "Central Limit Theorem",
    difficulty: "Hard",
    type: "mcq",
    question: "What does the Central Limit Theorem (CLT) state regarding sample means as sample size n increases?",
    options: [
      "A. The distribution of sample means approaches a normal distribution regardless of population shape",
      "B. Population variance becomes zero",
      "C. Mean equals zero always",
      "D. Data becomes skewed"
    ],
    answer: 0,
    explanation: "CLT states that the sampling distribution of the mean approaches normal as n increases.",
    xp: 25
  },
  {
    id: "stats_16",
    subject: "Statistics",
    topic: "Outliers Detection",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: In box plots, data points beyond 1.5 times the __________ are considered potential outliers.",
    fillAnswer: ["IQR", "iqr", "Interquartile Range"],
    explanation: "Outliers are commonly flagged beyond 1.5 * IQR from Q1/Q3.",
    xp: 15
  },
  {
    id: "stats_17",
    subject: "Statistics",
    topic: "Probability Mutually Exclusive",
    difficulty: "Easy",
    type: "mcq",
    question: "If two events A and B are mutually exclusive, what is P(A and B)?",
    options: ["A. 1", "B. 0", "C. P(A) * P(B)", "D. 0.5"],
    answer: 1,
    explanation: "Mutually exclusive events cannot happen simultaneously; P(A and B) = 0.",
    xp: 10
  },
  {
    id: "stats_18",
    subject: "Statistics",
    topic: "Range Metric",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The difference between the maximum and minimum values in a dataset is called the __________.",
    fillAnswer: ["range", "Range"],
    explanation: "Range = Max - Min.",
    xp: 10
  },
  {
    id: "stats_19",
    subject: "Statistics",
    topic: "R-squared Metric",
    difficulty: "Moderate",
    type: "mcq",
    question: "In regression analysis, what does an R-squared value of 0.85 represent?",
    options: [
      "A. 85% of variance in the dependent variable is explained by the model",
      "B. 85% of data is invalid",
      "C. Error is 85%",
      "D. Correlation is 0.85 squared"
    ],
    answer: 0,
    explanation: "R-squared represents the proportion of variance explained by independent variables.",
    xp: 20
  },
  {
    id: "stats_20",
    subject: "Statistics",
    topic: "Standard Error",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: The standard deviation of a sample statistic's distribution is called the standard __________.",
    fillAnswer: ["error", "Error"],
    explanation: "Standard Error (SE) measures the variability of a sample statistic.",
    xp: 25
  },
  {
    id: "stats_21",
    subject: "Statistics",
    topic: "Bernoulli Trial",
    difficulty: "Moderate",
    type: "mcq",
    question: "What is a Bernoulli Trial?",
    options: [
      "A. A random experiment with exactly two possible outcomes (Success / Failure)",
      "B. An experiment with infinite continuous values",
      "C. A 3D matrix test",
      "D. A normal curve calculation"
    ],
    answer: 0,
    explanation: "Bernoulli trial has exactly two outcomes: success or failure.",
    xp: 15
  },
  {
    id: "stats_22",
    subject: "Statistics",
    topic: "Binomial Distribution",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: A sequence of n independent Bernoulli trials with constant probability p forms a __________ distribution.",
    fillAnswer: ["binomial", "Binomial"],
    explanation: "Binomial distribution models the number of successes in n independent Bernoulli trials.",
    xp: 20
  },
  {
    id: "stats_23",
    subject: "Statistics",
    topic: "Mean Formula",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To calculate the arithmetic mean, divide the sum of values by the total count __________.",
    fillAnswer: ["n", "N", "count"],
    explanation: "Mean = sum(x) / n.",
    xp: 10
  },
  {
    id: "stats_24",
    subject: "Statistics",
    topic: "Confidence Interval",
    difficulty: "Hard",
    type: "mcq",
    question: "What does a 95% Confidence Interval for a mean imply?",
    options: [
      "A. If repeated samples are taken, 95% of constructed intervals will contain the true population mean",
      "B. 95% of sample values lie inside the interval",
      "C. There is a 95% chance sample mean is zero",
      "D. Alpha is 0.95"
    ],
    answer: 0,
    explanation: "95% CI means 95% of such intervals will cover the true parameter under repeated sampling.",
    xp: 25
  },
  {
    id: "stats_25",
    subject: "Statistics",
    topic: "P-value Concept",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: The probability of obtaining test results at least as extreme as observed assuming H0 is true is the __________-value.",
    fillAnswer: ["p", "P"],
    explanation: "P-value measures probability of evidence against the null hypothesis.",
    xp: 25
  },

  // =========================================================================
  // ==================== 5. POWER BI (25 DISTINCT QUESTIONS) =================
  // =========================================================================
  {
    id: "pbi_01",
    subject: "Power BI",
    topic: "DAX Measures",
    difficulty: "Moderate",
    type: "mcq",
    question: "What is the key functional difference between a Calculated Column and a Measure in Power BI?",
    options: [
      "A. Calculated columns evaluate on refresh; Measures evaluate dynamically in report visuals",
      "B. Measures consume RAM storage permanently",
      "C. Calculated columns only accept numbers",
      "D. No functional difference"
    ],
    answer: 0,
    explanation: "Calculated columns store values in the model; Measures compute dynamically based on filter context.",
    xp: 20
  },
  {
    id: "pbi_02",
    subject: "Power BI",
    topic: "DAX Functions",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The primary DAX function used to modify filter context in measures is __________.",
    fillAnswer: ["CALCULATE", "CALCULATE()"],
    explanation: "CALCULATE evaluates an expression in a modified filter context.",
    xp: 15
  },
  {
    id: "pbi_03",
    subject: "Power BI",
    topic: "Power Query ETL",
    difficulty: "Easy",
    type: "mcq",
    question: "Which component of Power BI is responsible for Data Extraction, Transformation, and Loading (ETL)?",
    options: ["A. Power Query Editor", "B. DAX Studio", "C. Power BI Service", "D. Report View"],
    answer: 0,
    explanation: "Power Query Editor performs ETL data transformations.",
    xp: 10
  },
  {
    id: "pbi_04",
    subject: "Power BI",
    topic: "Relationships",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: In data modeling, connecting a Dimension table (1) to a Fact table (*) creates a One-to-__________ relationship.",
    fillAnswer: ["Many", "many", "*"],
    explanation: "One-to-Many is the standard relationship direction in star schemas.",
    xp: 10
  },
  {
    id: "pbi_05",
    subject: "Power BI",
    topic: "Star Schema",
    difficulty: "Moderate",
    type: "mcq",
    question: "In data modeling, what type of table contains quantitative measures and metrics surrounded by dimension tables?",
    options: ["A. Fact Table", "B. Lookup Table", "C. Parameter Table", "D. Date Table"],
    answer: 0,
    explanation: "Fact tables contain numerical measurements and key foreign keys.",
    xp: 15
  },
  {
    id: "pbi_06",
    subject: "Power BI",
    topic: "DAX Sumx",
    difficulty: "Hard",
    type: "mcq",
    question: "What is the difference between SUM and SUMX in DAX?",
    options: [
      "A. SUM operates over a single column; SUMX is an iterator function evaluating row-by-row before summing",
      "B. SUMX is faster and requires no arguments",
      "C. SUM only works on text columns",
      "D. No difference"
    ],
    answer: 0,
    explanation: "SUMX iterates over a table row-by-row evaluating an expression.",
    xp: 25
  },
  {
    id: "pbi_07",
    subject: "Power BI",
    topic: "Storage Engine",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: The highly compressed, columnar in-memory database engine powering Power BI is named __________.",
    fillAnswer: ["VertiPaq", "vertipaq", "xVelocity"],
    explanation: "VertiPaq is the columnar in-memory engine behind Power BI.",
    xp: 25
  },
  {
    id: "pbi_08",
    subject: "Power BI",
    topic: "M Language",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: The formula language used behind Power Query transformations is called __________ Language.",
    fillAnswer: ["M", "m"],
    explanation: "M is the formula language used in Power Query.",
    xp: 15
  },
  {
    id: "pbi_09",
    subject: "Power BI",
    topic: "Slicers",
    difficulty: "Easy",
    type: "mcq",
    question: "Which visual type in Power BI allows report viewers to filter other visuals on the canvas by selecting categories?",
    options: ["A. Slicer", "B. Gauge", "C. Card", "D. Matrix"],
    answer: 0,
    explanation: "Slicers filter interactive visuals on the canvas.",
    xp: 10
  },
  {
    id: "pbi_10",
    subject: "Power BI",
    topic: "DAX All Function",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: To clear or ignore filters applied to a column or table in a DAX measure, use the =__________() function.",
    fillAnswer: ["ALL", "ALL()"],
    explanation: "ALL ignores filters on specified tables or columns.",
    xp: 20
  },
  {
    id: "pbi_11",
    subject: "Power BI",
    topic: "RLS Security",
    difficulty: "Hard",
    type: "mcq",
    question: "What feature in Power BI restricts data access for specific users based on their login roles?",
    options: [
      "A. Row-Level Security (RLS)",
      "B. Column-Level Encryption",
      "C. Active Directory Lock",
      "D. Data Masking"
    ],
    answer: 0,
    explanation: "RLS restricts row access for specific users based on roles.",
    xp: 25
  },
  {
    id: "pbi_12",
    subject: "Power BI",
    topic: "DAX Related",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: To fetch a column value from a related table on the 1-side of a relationship, use the DAX function __________().",
    fillAnswer: ["RELATED", "RELATED()"],
    explanation: "RELATED fetches values from a related table.",
    xp: 15
  },
  {
    id: "pbi_13",
    subject: "Power BI",
    topic: "Import Mode vs DirectQuery",
    difficulty: "Moderate",
    type: "mcq",
    question: "Which data connectivity mode loads data into the Power BI VertiPaq memory for maximum speed performance?",
    options: ["A. Import Mode", "B. DirectQuery", "C. Live Connection", "D. Push Dataset"],
    answer: 0,
    explanation: "Import Mode loads data directly into memory.",
    xp: 15
  },
  {
    id: "pbi_14",
    subject: "Power BI",
    topic: "Time Intelligence",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: In DAX, to calculate Year-to-Date totals, use the function TOTAL__________().",
    fillAnswer: ["YTD", "YTD()"],
    explanation: "TOTALYTD calculates Year-to-Date totals.",
    xp: 20
  },
  {
    id: "pbi_15",
    subject: "Power BI",
    topic: "Date Table Requirement",
    difficulty: "Moderate",
    type: "mcq",
    question: "Why is a dedicated Date Table recommended for Power BI Time Intelligence DAX functions?",
    options: [
      "A. To ensure contiguous, unbroken calendar date sequences required by DAX time functions",
      "B. To reduce file size to zero",
      "C. To prevent data refresh",
      "D. It is optional with no benefits"
    ],
    answer: 0,
    explanation: "Time Intelligence requires an unbroken contiguous date table marked as Date Table.",
    xp: 20
  },
  {
    id: "pbi_16",
    subject: "Power BI",
    topic: "Format Custom",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To convert values or dates to explicit text strings with formatting in DAX, use =__________().",
    fillAnswer: ["FORMAT", "FORMAT()"],
    explanation: "FORMAT converts a value to text with specified formatting.",
    xp: 10
  },
  {
    id: "pbi_17",
    subject: "Power BI",
    topic: "Matrix Visual",
    difficulty: "Easy",
    type: "mcq",
    question: "Which visual component displays cross-tabulated data across Rows, Columns, and Values (similar to an Excel Pivot Table)?",
    options: ["A. Matrix Visual", "B. Table Visual", "C. Card Visual", "D. Treemap"],
    answer: 0,
    explanation: "Matrix Visual supports multi-dimensional cross-tabulation.",
    xp: 10
  },
  {
    id: "pbi_18",
    subject: "Power BI",
    topic: "DAX Divide",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: To perform division safely in DAX and handle division by zero errors, use =__________().",
    fillAnswer: ["DIVIDE", "DIVIDE()"],
    explanation: "DIVIDE safely performs division and handles division-by-zero.",
    xp: 10
  },
  {
    id: "pbi_19",
    subject: "Power BI",
    topic: "Drill Down",
    difficulty: "Easy",
    type: "mcq",
    question: "What feature in Power BI lets users navigate from summary data down to detailed hierarchical levels in a visual?",
    options: ["A. Drill Down", "B. Tooltips", "C. Bookmarks", "D. Cross Highlight"],
    answer: 0,
    explanation: "Drill down allows navigating hierarchy levels.",
    xp: 10
  },
  {
    id: "pbi_20",
    subject: "Power BI",
    topic: "DAX Countrows",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: To count the total number of rows in a table or filtered context in DAX, use __________().",
    fillAnswer: ["COUNTROWS", "COUNTROWS()"],
    explanation: "COUNTROWS counts rows in a table.",
    xp: 15
  },
  {
    id: "pbi_21",
    subject: "Power BI",
    topic: "Bi directional filters",
    difficulty: "Hard",
    type: "mcq",
    question: "Why should bi-directional relationship filters be used with caution in Power BI data models?",
    options: [
      "A. They can create ambiguous filter propagation paths and unexpected performance degradation",
      "B. They delete fact records",
      "C. They disable measures",
      "D. They convert data to CSV"
    ],
    answer: 0,
    explanation: "Bi-directional filters can cause circular paths and performance bottlenecks.",
    xp: 25
  },
  {
    id: "pbi_22",
    subject: "Power BI",
    topic: "DAX Values",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: The DAX function that returns a 1-column table of distinct values in current filter context is __________().",
    fillAnswer: ["VALUES", "VALUES()"],
    explanation: "VALUES returns distinct values of a column in context.",
    xp: 15
  },
  {
    id: "pbi_23",
    subject: "Power BI",
    topic: "Data Refresh Gateway",
    difficulty: "Moderate",
    type: "mcq",
    question: "What service component connects on-premises local datasets to the cloud Power BI Service for scheduled refreshes?",
    options: [
      "A. On-Premises Data Gateway",
      "B. Power Query Engine",
      "C. Direct Connector",
      "D. DAX Tunnel"
    ],
    answer: 0,
    explanation: "Data Gateway bridges local data sources to the cloud Power BI Service.",
    xp: 15
  },
  {
    id: "pbi_24",
    subject: "Power BI",
    topic: "DAX Filter",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: The DAX iterator function that returns a table filtered by a boolean condition is __________().",
    fillAnswer: ["FILTER", "FILTER()"],
    explanation: "FILTER returns a table filtered by boolean criteria.",
    xp: 20
  },
  {
    id: "pbi_25",
    subject: "Power BI",
    topic: "DAX Switch",
    difficulty: "Moderate",
    type: "mcq",
    question: "Which DAX function evaluates an expression against a list of values and returns corresponding result expressions (like SWITCH/CASE)?",
    options: ["A. SWITCH", "B. CASE", "C. IF", "D. CHOOSE"],
    answer: 0,
    explanation: "SWITCH evaluates expressions against value-result pairs.",
    xp: 15
  },

  // =========================================================================
  // ==================== 6. DATA SCIENCE (25 DISTINCT QUESTIONS) ============
  // =========================================================================
  {
    id: "ds_01",
    subject: "Data Science",
    topic: "Machine Learning",
    difficulty: "Moderate",
    type: "mcq",
    question: "Which algorithm is a Supervised Learning method used for classification tasks?",
    options: ["A. K-Means Clustering", "B. Random Forest Classifier", "C. PCA (Principal Component Analysis)", "D. Apriori"],
    answer: 1,
    explanation: "Random Forest is an ensemble supervised learning algorithm.",
    xp: 20
  },
  {
    id: "ds_02",
    subject: "Data Science",
    topic: "Model Evaluation",
    difficulty: "Hard",
    type: "mcq",
    question: "What evaluation metric represents the harmonic mean of Precision and Recall?",
    options: ["A. ROC-AUC", "B. F1-Score", "C. Mean Absolute Error (MAE)", "D. R-Squared"],
    answer: 1,
    explanation: "F1-Score is calculated as 2 * (Precision * Recall) / (Precision + Recall).",
    xp: 25
  },
  {
    id: "ds_03",
    subject: "Data Science",
    topic: "Exploratory Data Analysis",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The statistical metric measuring linear relationship strength between two variables ranging from -1 to +1 is __________.",
    fillAnswer: ["correlation", "Correlation", "pearson correlation"],
    explanation: "Correlation measures direction and strength of linear relationships.",
    xp: 15
  },
  {
    id: "ds_04",
    subject: "Data Science",
    topic: "Feature Scaling",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: The Python library most widely used for machine learning algorithms like Decision Trees and SVM is scikit-__________.",
    fillAnswer: ["learn", "Learn"],
    explanation: "scikit-learn (sklearn) is the premier Python ML library.",
    xp: 15
  },
  {
    id: "ds_05",
    subject: "Data Science",
    topic: "Overfitting Concept",
    difficulty: "Moderate",
    type: "mcq",
    question: "What is overfitting in machine learning?",
    options: [
      "A. Model performs well on training data but poorly on unseen test data",
      "B. Model performs poorly on both training and test data",
      "C. Model has zero parameters",
      "D. Model requires infinite memory"
    ],
    answer: 0,
    explanation: "Overfitting occurs when a model learns noise in training data and fails to generalize.",
    xp: 15
  },
  {
    id: "ds_06",
    subject: "Data Science",
    topic: "Supervised vs Unsupervised",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: Machine learning algorithms trained on unlabeled data to discover hidden patterns are called __________ learning.",
    fillAnswer: ["unsupervised", "Unsupervised"],
    explanation: "Unsupervised learning finds patterns in unlabeled data.",
    xp: 10
  },
  {
    id: "ds_07",
    subject: "Data Science",
    topic: "Confusion Matrix",
    difficulty: "Moderate",
    type: "mcq",
    question: "In a binary confusion matrix, what does False Positive (FP) mean?",
    options: [
      "A. Actual Negative instance incorrectly classified as Positive",
      "B. Actual Positive instance correctly classified as Positive",
      "C. Actual Positive instance incorrectly classified as Negative",
      "D. Actual Negative correctly classified as Negative"
    ],
    answer: 0,
    explanation: "False Positive is a Type I error (flagged positive when actually negative).",
    xp: 15
  },
  {
    id: "ds_08",
    subject: "Data Science",
    topic: "Precision Metric",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: Precision is calculated as True Positives divided by (True Positives + __________ Positives).",
    fillAnswer: ["False", "false"],
    explanation: "Precision = TP / (TP + FP).",
    xp: 15
  },
  {
    id: "ds_09",
    subject: "Data Science",
    topic: "Recall Metric",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: Recall is calculated as True Positives divided by (True Positives + __________ Negatives).",
    fillAnswer: ["False", "false"],
    explanation: "Recall = TP / (TP + FN).",
    xp: 15
  },
  {
    id: "ds_10",
    subject: "Data Science",
    topic: "Cross Validation",
    difficulty: "Hard",
    type: "mcq",
    question: "What is K-Fold Cross-Validation?",
    options: [
      "A. Partitioning data into K subsets to evaluate model performance iteratively",
      "B. Multiplying dataset size by K",
      "C. Dropping K random columns",
      "D. Setting K clusters"
    ],
    answer: 0,
    explanation: "K-Fold cross-validation splits data into K folds for out-of-sample testing.",
    xp: 25
  },
  {
    id: "ds_11",
    subject: "Data Science",
    topic: "Hyperparameter Tuning",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: The exhaustive search technique over a specified grid of parameters in sklearn is called __________SearchCV.",
    fillAnswer: ["Grid", "grid"],
    explanation: "GridSearchCV performs exhaustive search over specified parameter values.",
    xp: 25
  },
  {
    id: "ds_12",
    subject: "Data Science",
    topic: "Clustering Algorithms",
    difficulty: "Moderate",
    type: "mcq",
    question: "Which unsupervised learning algorithm partitions data into K distinct clusters based on centroid distances?",
    options: ["A. K-Means", "B. Logistic Regression", "C. Naive Bayes", "D. Linear Regression"],
    answer: 0,
    explanation: "K-Means clusters data by minimizing distances to K centroids.",
    xp: 15
  },
  {
    id: "ds_13",
    subject: "Data Science",
    topic: "Regression Metric",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The regression loss metric calculating average squared differences between predicted and actual values is Mean Squared __________ (MSE).",
    fillAnswer: ["Error", "error"],
    explanation: "MSE calculates mean squared error.",
    xp: 10
  },
  {
    id: "ds_14",
    subject: "Data Science",
    topic: "Dimensionality Reduction",
    difficulty: "Hard",
    type: "mcq",
    question: "Which technique projects high-dimensional data onto orthogonal principal components to reduce dimensionality?",
    options: [
      "A. PCA (Principal Component Analysis)",
      "B. Linear Regression",
      "C. One-Hot Encoding",
      "D. SMOTE"
    ],
    answer: 0,
    explanation: "PCA reduces dimensions while preserving maximum variance.",
    xp: 25
  },
  {
    id: "ds_15",
    subject: "Data Science",
    topic: "Categorical Encoding",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: Converting categorical string variables into binary indicator columns (0 or 1) is called One-__________ Encoding.",
    fillAnswer: ["Hot", "hot", "Hot"],
    explanation: "One-Hot Encoding converts categorical variables into binary dummy variables.",
    xp: 10
  },
  {
    id: "ds_16",
    subject: "Data Science",
    topic: "Logistic Regression",
    difficulty: "Moderate",
    type: "mcq",
    question: "Despite its name, what task is Logistic Regression primarily used for?",
    options: ["A. Classification", "B. Continuous Price Forecasting", "C. Image Generation", "D. Clustering"],
    answer: 0,
    explanation: "Logistic Regression predicts probability for classification tasks.",
    xp: 15
  },
  {
    id: "ds_17",
    subject: "Data Science",
    topic: "Decision Trees",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: The impurity metric commonly used by Decision Trees to measure split quality is Gini __________.",
    fillAnswer: ["Impurity", "impurity"],
    explanation: "Gini Impurity measures frequency of incorrect labeling.",
    xp: 15
  },
  {
    id: "ds_18",
    subject: "Data Science",
    topic: "Imbalanced Data",
    difficulty: "Hard",
    type: "mcq",
    question: "What technique creates synthetic minority class samples to address imbalanced classification datasets?",
    options: ["A. SMOTE", "B. PCA", "C. Lasso", "D. Ridge"],
    answer: 0,
    explanation: "SMOTE (Synthetic Minority Over-sampling Technique) generates synthetic samples.",
    xp: 25
  },
  {
    id: "ds_19",
    subject: "Data Science",
    topic: "Train Test Split",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: In sklearn, dataset partitioning is performed using train_test___________().",
    fillAnswer: ["split", "split()"],
    explanation: "train_test_split divides data into train and test sets.",
    xp: 10
  },
  {
    id: "ds_20",
    subject: "Data Science",
    topic: "L1 Regularization",
    difficulty: "Hard",
    type: "mcq",
    question: "Which regularization method adds absolute value penalties of coefficients to drive redundant feature weights to zero (L1)?",
    options: ["A. Lasso Regression", "B. Ridge Regression", "C. Elastic Net", "D. Linear Regression"],
    answer: 0,
    explanation: "Lasso (L1) regularization performs feature selection by shrinking coefficients to zero.",
    xp: 25
  },
  {
    id: "ds_21",
    subject: "Data Science",
    topic: "L2 Regularization",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: Regularization that adds squared magnitude penalties of coefficients (L2) is called __________ Regression.",
    fillAnswer: ["Ridge", "ridge"],
    explanation: "Ridge (L2) regularization penalizes squared coefficient magnitudes.",
    xp: 25
  },
  {
    id: "ds_22",
    subject: "Data Science",
    topic: "ROC Curve",
    difficulty: "Moderate",
    type: "mcq",
    question: "What does an ROC curve plot on its X and Y axes?",
    options: [
      "A. False Positive Rate (X) vs True Positive Rate (Y)",
      "B. Precision (X) vs Recall (Y)",
      "C. Loss (X) vs Accuracy (Y)",
      "D. Mean (X) vs Variance (Y)"
    ],
    answer: 0,
    explanation: "ROC plots FPR on X-axis vs TPR on Y-axis at various threshold settings.",
    xp: 20
  },
  {
    id: "ds_23",
    subject: "Data Science",
    topic: "Bias Variance Tradeoff",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: High variance in a machine learning model leads to __________, whereas high bias leads to underfitting.",
    fillAnswer: ["overfitting", "Overfitting"],
    explanation: "High variance causes overfitting; high bias causes underfitting.",
    xp: 25
  },
  {
    id: "ds_24",
    subject: "Data Science",
    topic: "StandardScaler",
    difficulty: "Moderate",
    type: "mcq",
    question: "What transformation does sklearn's StandardScaler apply to features?",
    options: [
      "A. Scales features to Mean = 0 and Variance = 1",
      "B. Scales features strictly between 0 and 1",
      "C. Converts numbers to text",
      "D. Log transforms data"
    ],
    answer: 0,
    explanation: "StandardScaler standardizes features by removing mean and scaling to unit variance.",
    xp: 15
  },
  {
    id: "ds_25",
    subject: "Data Science",
    topic: "MinMaxScaler",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: Feature scaling that transforms values into a range between 0 and 1 is called __________Scaler.",
    fillAnswer: ["MinMax", "minmax", "MinMax"],
    explanation: "MinMaxScaler transforms features to a given range, typically [0, 1].",
    xp: 15
  },

  // =========================================================================
  // ==================== 7. AI (25 DISTINCT QUESTIONS) ======================
  // =========================================================================
  {
    id: "ai_01",
    subject: "AI",
    topic: "Neural Networks",
    difficulty: "Moderate",
    type: "mcq",
    question: "What is the primary function of an Activation Function (e.g. ReLU, Sigmoid) in an Artificial Neural Network?",
    options: [
      "A. To store training data",
      "B. To introduce non-linearity so the network can learn complex patterns",
      "C. To reduce matrix dimensions to zero",
      "D. To encrypt weights"
    ],
    answer: 1,
    explanation: "Activation functions introduce non-linearity into neural network decision boundaries.",
    xp: 20
  },
  {
    id: "ai_02",
    subject: "AI",
    topic: "Generative AI & LLMs",
    difficulty: "Hard",
    type: "mcq",
    question: "Which deep learning architecture introduced in 2017 powered modern Large Language Models (LLMs) using Self-Attention mechanisms?",
    options: ["A. Convolutional Neural Network (CNN)", "B. Recurrent Neural Network (RNN)", "C. Transformer", "D. Markov Chain"],
    answer: 2,
    explanation: "The Transformer architecture ('Attention Is All You Need', Vaswani et al.) underpins modern LLMs.",
    xp: 25
  },
  {
    id: "ai_03",
    subject: "AI",
    topic: "Deep Learning",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: Neural network architectures designed specifically for image and spatial pattern recognition are called __________ Neural Networks (CNNs).",
    fillAnswer: ["Convolutional", "convolutional"],
    explanation: "CNNs specialize in image recognition and computer vision tasks.",
    xp: 15
  },
  {
    id: "ai_04",
    subject: "AI",
    topic: "AI Concepts",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The technique of crafting precise text instructions to guide Large Language Models to generate desired outputs is called __________ engineering.",
    fillAnswer: ["prompt", "Prompt"],
    explanation: "Prompt engineering is the practice of designing inputs for generative AI models.",
    xp: 10
  },
  {
    id: "ai_05",
    subject: "AI",
    topic: "Activation Functions",
    difficulty: "Easy",
    type: "mcq",
    question: "Which activation function outputs zero for negative input values and passes positive values unchanged?",
    options: ["A. Sigmoid", "B. ReLU (Rectified Linear Unit)", "C. Tanh", "D. Softmax"],
    answer: 1,
    explanation: "ReLU(x) = max(0, x), outputting 0 for negative values.",
    xp: 10
  },
  {
    id: "ai_06",
    subject: "AI",
    topic: "Backpropagation",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: The algorithm used to compute gradients of the loss function with respect to neural network weights is called __________.",
    fillAnswer: ["backpropagation", "Backpropagation"],
    explanation: "Backpropagation calculates gradients efficiently via the chain rule.",
    xp: 25
  },
  {
    id: "ai_07",
    subject: "AI",
    topic: "RNN Architectures",
    difficulty: "Moderate",
    type: "mcq",
    question: "Which neural network architecture is designed for processing sequential data like text or time-series?",
    options: ["A. Recurrent Neural Network (RNN)", "B. K-Means", "C. Decision Tree", "D. Autoencoder"],
    answer: 0,
    explanation: "RNNs process sequential inputs using internal memory states.",
    xp: 15
  },
  {
    id: "ai_08",
    subject: "AI",
    topic: "LSTM Networks",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: The specialized RNN variant designed to prevent vanishing gradients using memory cells and gates is __________ (Long Short-Term Memory).",
    fillAnswer: ["LSTM", "lstm"],
    explanation: "LSTM architecture mitigates vanishing gradient problems in long sequences.",
    xp: 25
  },
  {
    id: "ai_09",
    subject: "AI",
    topic: "Softmax Layer",
    difficulty: "Moderate",
    type: "mcq",
    question: "Where is the Softmax activation function typically placed in a multi-class classification neural network?",
    options: [
      "A. Output layer to convert raw logits into normalized probabilities summing to 1",
      "B. First input layer",
      "C. Hidden layer weight initialization",
      "D. Loss function optimizer"
    ],
    answer: 0,
    explanation: "Softmax converts output logits into probability distributions.",
    xp: 15
  },
  {
    id: "ai_10",
    subject: "AI",
    topic: "Optimization",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: The popular neural network optimizer combining momentum and RMSprop is called __________.",
    fillAnswer: ["Adam", "adam"],
    explanation: "Adam (Adaptive Moment Estimation) is a widely used optimizer.",
    xp: 20
  },
  {
    id: "ai_11",
    subject: "AI",
    topic: "Dropout Regularization",
    difficulty: "Moderate",
    type: "mcq",
    question: "What does the Dropout technique do during neural network training?",
    options: [
      "A. Randomly deactivates a percentage of neurons during training to prevent co-adaptation",
      "B. Drops all dataset rows",
      "C. Permanently deletes weights",
      "D. Stops training immediately"
    ],
    answer: 0,
    explanation: "Dropout randomly sets input units to 0 during training to prevent overfitting.",
    xp: 20
  },
  {
    id: "ai_12",
    subject: "AI",
    topic: "GAN Architectures",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: AI models consisting of a Generator and a Discriminator competing against each other are Generative __________ Networks (GANs).",
    fillAnswer: ["Adversarial", "adversarial"],
    explanation: "GANs pit a generator against a discriminator network.",
    xp: 25
  },
  {
    id: "ai_13",
    subject: "AI",
    topic: "Computer Vision Task",
    difficulty: "Easy",
    type: "mcq",
    question: "Which computer vision task involves identifying and drawing bounding boxes around objects in an image?",
    options: ["A. Object Detection", "B. Image Classification", "C. Text Summarization", "D. Sentiment Analysis"],
    answer: 0,
    explanation: "Object Detection identifies object categories and locates them with bounding boxes.",
    xp: 10
  },
  {
    id: "ai_14",
    subject: "AI",
    topic: "Tokenization Concept",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: In Natural Language Processing, breaking raw text into smaller words or sub-word chunks is called __________.",
    fillAnswer: ["tokenization", "Tokenization"],
    explanation: "Tokenization splits raw text strings into discrete tokens.",
    xp: 10
  },
  {
    id: "ai_15",
    subject: "AI",
    topic: "Embeddings Vector",
    difficulty: "Moderate",
    type: "mcq",
    question: "What are Word Embeddings (e.g. Word2Vec, GloVe) in AI?",
    options: [
      "A. Dense vector representations capturing semantic meanings of words in continuous space",
      "B. Encrypted text files",
      "C. HTML tags",
      "D. Database tables"
    ],
    answer: 0,
    explanation: "Word embeddings map words to dense vectors reflecting semantic similarity.",
    xp: 15
  },
  {
    id: "ai_16",
    subject: "AI",
    topic: "Fine-Tuning",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: Adapting a pre-trained foundation model on a specific custom dataset is known as fine-__________.",
    fillAnswer: ["tuning", "Tuning"],
    explanation: "Fine-tuning adapts pre-trained weights for specialized downstream tasks.",
    xp: 15
  },
  {
    id: "ai_17",
    subject: "AI",
    topic: "Transfer Learning",
    difficulty: "Moderate",
    type: "mcq",
    question: "What is Transfer Learning in Artificial Intelligence?",
    options: [
      "A. Reusing pre-trained model knowledge from one task to accelerate learning on a new target task",
      "B. Moving files across servers",
      "C. Converting Python code to C++",
      "D. Copying datasets"
    ],
    answer: 0,
    explanation: "Transfer learning leverages pre-trained weights for related new tasks.",
    xp: 15
  },
  {
    id: "ai_18",
    subject: "AI",
    topic: "Gradient Descent",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: The optimization algorithm that steps in the direction of steepest descent to minimize loss is Gradient __________.",
    fillAnswer: ["Descent", "descent"],
    explanation: "Gradient Descent updates parameters in the direction of negative gradient.",
    xp: 10
  },
  {
    id: "ai_19",
    subject: "AI",
    topic: "Learning Rate",
    difficulty: "Moderate",
    type: "mcq",
    question: "What occurs if the Learning Rate hyperparameter in neural network optimization is set too high?",
    options: [
      "A. Model training may diverge or oscillate without reaching minimum loss",
      "B. Model trains instantly with zero loss",
      "C. Memory usage becomes zero",
      "D. Network layer count increases"
    ],
    answer: 0,
    explanation: "An excessively large learning rate causes updates to overshoot the minimum.",
    xp: 15
  },
  {
    id: "ai_20",
    subject: "AI",
    topic: "Vanishing Gradient",
    difficulty: "Hard",
    type: "fillup",
    question: "Fill in the blank: When backpropagation gradients become extremely small in deep networks, it is called the vanishing __________ problem.",
    fillAnswer: ["gradient", "Gradient"],
    explanation: "Vanishing gradients prevent early layers from updating their weights effectively.",
    xp: 25
  },
  {
    id: "ai_21",
    subject: "AI",
    topic: "Attention Mechanism",
    difficulty: "Hard",
    type: "mcq",
    question: "What problem does the Self-Attention mechanism solve in sequence processing models?",
    options: [
      "A. Allows models to dynamically focus on relevant parts of the entire sequence regardless of distance",
      "B. Reduces image resolution",
      "C. Encrypts output text",
      "D. Automatically labels data"
    ],
    answer: 0,
    explanation: "Self-attention computes dynamic weights connecting distant tokens across sequences.",
    xp: 25
  },
  {
    id: "ai_22",
    subject: "AI",
    topic: "Epoch Concept",
    difficulty: "Easy",
    type: "fillup",
    question: "Fill in the blank: One complete pass of the entire training dataset through the neural network is called one __________.",
    fillAnswer: ["epoch", "Epoch"],
    explanation: "An epoch is one full training cycle over the complete dataset.",
    xp: 10
  },
  {
    id: "ai_23",
    subject: "AI",
    topic: "Batch Size",
    difficulty: "Easy",
    type: "mcq",
    question: "What does Batch Size refer to in deep learning training loops?",
    options: [
      "A. Number of training samples processed before updating model weights",
      "B. Total number of layers",
      "C. File download size",
      "D. Epoch duration"
    ],
    answer: 0,
    explanation: "Batch size specifies the number of samples processed per weight update.",
    xp: 10
  },
  {
    id: "ai_24",
    subject: "AI",
    topic: "Hallucination in LLMs",
    difficulty: "Moderate",
    type: "fillup",
    question: "Fill in the blank: When a Large Language Model generates confident but factually incorrect information, it is called AI __________.",
    fillAnswer: ["hallucination", "Hallucination"],
    explanation: "AI hallucination refers to plausible-sounding but incorrect model outputs.",
    xp: 15
  },
  {
    id: "ai_25",
    subject: "AI",
    topic: "RAG Architecture",
    difficulty: "Hard",
    type: "mcq",
    question: "What does RAG (Retrieval-Augmented Generation) do in generative AI systems?",
    options: [
      "A. Combines an external vector database retrieval step with an LLM generator to answer queries with factual grounding",
      "B. Deletes prompt memory",
      "C. Generates synthetic images only",
      "D. Replaces neural networks with SQL"
    ],
    answer: 0,
    explanation: "RAG retrieves relevant domain documents to augment the prompt context for LLM generation.",
    xp: 25
  }

];

// Business Analyst & Data Science Case Studies
const caseStudies = [
  {
    id: "case_01",
    title: "E-Commerce Revenue Decline Audit",
    category: "E-Commerce",
    difficulty: "Moderate",
    context: "A retailer noticed an 18% decline in month-over-month revenue. The executive team wants you to analyze order tables at Aptech@Mahanagar, Lko lab.",
    dataset: "sales (sale_id, product, category, revenue, units_sold, order_date)",
    questions: [
      {
        id: 1,
        question: "Which product category suffered the steepest drop in units sold between June and July?",
        options: ["A. Electronics", "B. Office Supplies", "C. Home Appliances", "D. Fashion"],
        answer: 0,
        explanation: "Electronics units dropped by 73%, accounting for the main decline."
      }
    ]
  },
  {
    id: "case_02",
    title: "AI Churn Prediction Model Evaluation",
    category: "AI & ML",
    difficulty: "Hard",
    context: "A telecom firm trained a Gradient Boosting model to predict customer churn. Evaluate precision vs recall trade-offs for high-value users.",
    dataset: "churn_predictions (customer_id, predicted_prob, actual_churn, tenure_months)",
    questions: [
      {
        id: 1,
        question: "If high precision is prioritized over recall, what is the impact on marketing campaign budgets?",
        options: [
          "A. Fewer customers receive retention offers, minimizing wasted budget on false positives.",
          "B. Every churning customer is guaranteed to receive an offer.",
          "C. Precision has no impact on budget allocations.",
          "D. Recalls increase automatically."
        ],
        answer: 0,
        explanation: "High precision ensures flagged customers are truly churners, reducing false positives."
      }
    ]
  }
];

// Open Datasets Library Catalog
const datasetsCatalog = [
  {
    id: "ds_sales",
    title: "E-Commerce Sales Transactions",
    description: "Daily sales logs including product descriptions, category pricing, units sold, and shipping parameters.",
    rows: 7,
    columns: ["sale_id", "product", "category", "revenue", "units_sold", "order_date"],
    difficulty: "Easy"
  },
  {
    id: "ds_customers",
    title: "Global Customers Profiles",
    description: "Profiles of registered users, location coordinates, signup dates, and aggregate historical purchases values.",
    rows: 5,
    columns: ["customer_id", "name", "city", "sign_up_date", "total_spent"],
    difficulty: "Easy"
  },
  {
    id: "ds_ml_churn",
    title: "Customer Churn & AI Feature Dataset (Kaggle)",
    description: "Customer usage patterns, tenure, monthly charges, and churn flags for ML classification models.",
    rows: 1000,
    columns: ["customer_id", "tenure", "monthly_charges", "total_charges", "churn"],
    difficulty: "Moderate"
  }
];

// JSON Driven Resources Configuration (Integrated with Kaggle https://www.kaggle.com/)
const resourcesCatalog = [
  {
    id: "res_kaggle_01",
    category: "Kaggle",
    title: "Kaggle Machine Learning Micro-Courses",
    description: "Hands-on machine learning micro-courses on Kaggle. Master Random Forests, XGBoost, and model evaluation metrics.",
    url: "https://www.kaggle.com/learn/intro-to-machine-learning",
    icon: "🏆",
    tag: "Kaggle Free"
  },
  {
    id: "res_kaggle_02",
    category: "Kaggle",
    title: "Kaggle Open Datasets Repository",
    description: "Explore 200,000+ public datasets on Kaggle. Practice Data Science, AI modeling, EDA, and publish Jupyter notebooks.",
    url: "https://www.kaggle.com/datasets",
    icon: "🗃️",
    tag: "Kaggle Free"
  },
  {
    id: "res_kaggle_03",
    category: "Kaggle",
    title: "Kaggle Data Cleaning & Prep",
    description: "Learn practical handling of missing values, data scaling, normalization, and parsing dates on Kaggle.",
    url: "https://www.kaggle.com/learn/data-cleaning",
    icon: "🧹",
    tag: "Kaggle Free"
  },
  {
    id: "res_01",
    category: "SQL",
    title: "LeetCode Top 50 SQL",
    description: "The benchmark collection of relational database questions. Master JOINS, Aggregations, Window Functions, and CTEs.",
    url: "https://leetcode.com/studyplan/top-sql-50/",
    icon: "💻",
    tag: "Free"
  },
  {
    id: "res_03",
    category: "Projects",
    title: "Maven Analytics Datasets",
    description: "Test your BI skills with industry-standard datasets. Create dashboard projects in Power BI, Tableau, or Excel.",
    url: "https://mavenanalytics.io/data-playground",
    icon: "📊",
    tag: "Free"
  },
  {
    id: "res_05",
    category: "Interview",
    title: "Aptech@Mahanagar Analytics Prep",
    description: "Practice simulated test papers and corporate client case studies designed for Aptech students.",
    url: "interview.html",
    icon: "🎓",
    tag: "Aptech"
  }
];
