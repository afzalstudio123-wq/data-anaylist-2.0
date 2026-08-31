// Global Question Pool Database for all subjects
const questionPool = [
  // ==================== SQL QUESTIONS ====================
  {
    id: "sql_01",
    subject: "SQL",
    topic: "JOINs",
    difficulty: "Medium",
    type: "mcq",
    question: "Given table `orders` (5 rows) and table `refunds` (2 rows). If you execute a LEFT JOIN from `orders` to `refunds` on `order_id` where exactly 1 row has matching keys, how many rows will be returned in the output?",
    options: [
      "A. 1 row",
      "B. 2 rows",
      "C. 5 rows",
      "D. 6 rows"
    ],
    answer: 2, // Index 2 is C
    explanation: "A LEFT JOIN preserves every row from the left table (`orders`, which has 5 rows) regardless of matches. Non-matching values are populated with NULL.",
    xp: 15
  },
  {
    id: "sql_02",
    subject: "SQL",
    topic: "GROUP BY",
    difficulty: "Easy",
    type: "mcq",
    question: "Which keyword must be used to filter grouped query results after applying aggregate functions (e.g. SUM or AVG)?",
    options: [
      "A. WHERE",
      "B. HAVING",
      "C. GROUP BY",
      "D. ORDER BY"
    ],
    answer: 1, // Index 1 is B
    explanation: "The WHERE clause is applied to rows BEFORE aggregation. The HAVING clause is evaluated AFTER rows are aggregated to filter the resulting groups.",
    xp: 10
  },
  {
    id: "sql_03",
    subject: "SQL",
    topic: "Window Functions",
    difficulty: "Hard",
    type: "mcq",
    question: "What is the primary difference in behavior between RANK() and DENSE_RANK() window functions when ranking rows with identical values?",
    options: [
      "A. RANK skips ranks after duplicates, DENSE_RANK does not skip ranks.",
      "B. DENSE_RANK skips ranks, whereas RANK assigns sequential indices.",
      "C. DENSE_RANK requires an ORDER BY clause, but RANK does not.",
      "D. There is no difference in execution results."
    ],
    answer: 0, // Index 0 is A
    explanation: "RANK assigns duplicate values the same rank but leaves gaps (e.g. 1, 2, 2, 4). DENSE_RANK assigns duplicate values the same rank but keeps rankings contiguous (e.g. 1, 2, 2, 3).",
    xp: 25
  },
  {
    id: "sql_04",
    subject: "SQL",
    topic: "SELECT",
    difficulty: "Easy",
    type: "mcq",
    question: "What does COUNT(column_name) output in SQL if some rows in the specified column contain NULL values?",
    options: [
      "A. The count of all rows, including NULL rows.",
      "B. The count of only non-NULL rows in that column.",
      "C. It returns 0.",
      "D. It throws a database execution error."
    ],
    answer: 1, // Index 1 is B
    explanation: "COUNT(column_name) ignores NULL values and counts only rows that contain non-NULL data. COUNT(*) counts all rows.",
    xp: 10
  },

  // ==================== EXCEL QUESTIONS ====================
  {
    id: "excel_01",
    subject: "Excel",
    topic: "XLOOKUP",
    difficulty: "Medium",
    type: "mcq",
    question: "What is the default match behavior of Excel's XLOOKUP function if the [match_mode] parameter is omitted?",
    options: [
      "A. Exact match (0)",
      "B. Exact match or next smaller item (-1)",
      "C. Wildcard match (2)",
      "D. Approximate match (1)"
    ],
    answer: 0, // Index 0 is A
    explanation: "Unlike VLOOKUP, which defaults to approximate matches, XLOOKUP defaults to an exact match (0) if match_mode is not explicitly specified.",
    xp: 15
  },
  {
    id: "excel_02",
    subject: "Excel",
    topic: "IF",
    difficulty: "Easy",
    type: "mcq",
    question: "Which of the following formula strings is correct to display 'Pass' if cell A1 is 50 or higher, and 'Fail' otherwise?",
    options: [
      "A. =IF(A1 > 50, 'Pass', 'Fail')",
      "B. =IF(A1 >= 50, \"Pass\", \"Fail\")",
      "C. =IF(A1 >= 50; \"Pass\"; \"Fail\")",
      "D. =IF(A1 < 50, \"Pass\", \"Fail\")"
    ],
    answer: 1, // Index 1 is B
    explanation: "Standard Excel syntax uses comma separators for parameters and double quotes to define string outputs.",
    xp: 10
  },
  {
    id: "excel_03",
    subject: "Excel",
    topic: "Pivot Tables",
    difficulty: "Medium",
    type: "mcq",
    question: "In Excel Pivot Tables, how do you prevent column widths from automatically adjusting when you refresh data?",
    options: [
      "A. Uncheck 'Autofit column widths on update' in PivotTable Options.",
      "B. Format the columns as text.",
      "C. Right-click and choose Lock Width.",
      "D. There is no way to prevent this in Excel."
    ],
    answer: 0, // Index 0 is A
    explanation: "Unchecking 'Autofit column widths on update' under PivotTable Options > Layout & Format locks current widths in place.",
    xp: 15
  },

  // ==================== PYTHON QUESTIONS ====================
  {
    id: "py_01",
    subject: "Python",
    topic: "Pandas Dataframes",
    difficulty: "Medium",
    type: "mcq",
    question: "In Pandas, what is the primary difference in behavior between calling df.groupby('dept')['salary'].mean() and df.groupby('dept')['salary'].transform('mean')?",
    options: [
      "A. transform() reduces the dataframe rows, mean() does not.",
      "B. transform() retains the original index structure, whereas mean() returns aggregated summary rows.",
      "C. mean() is faster but cannot handle null values.",
      "D. They return identical dataframe outputs."
    ],
    answer: 1, // Index 1 is B
    explanation: "transform() computes the group statistic and broadcasts (projects) it back to match the original dataframe's length, keeping its shape.",
    xp: 20
  },
  {
    id: "py_02",
    subject: "Python",
    topic: "Cleaning",
    difficulty: "Easy",
    type: "mcq",
    question: "Which Pandas method drops rows containing NaN/missing values in a DataFrame?",
    options: [
      "A. df.dropna()",
      "B. df.fillna()",
      "C. df.isna()",
      "D. df.drop_nulls()"
    ],
    answer: 0, // Index 0 is A
    explanation: "df.dropna() drops rows that contain any missing values. df.fillna() replaces missing values with a designated placeholder.",
    xp: 10
  },
  {
    id: "py_03",
    subject: "Python",
    topic: "NumPy",
    difficulty: "Hard",
    type: "mcq",
    question: "What is the shape of the array returned by performing matrix multiplication (np.dot) on a (3, 4) array and a (4, 2) array?",
    options: [
      "A. (3, 4)",
      "B. (4, 2)",
      "C. (3, 2)",
      "D. (4, 4)"
    ],
    answer: 2, // Index 2 is C
    explanation: "In matrix multiplication, the dot product of dimensions (M, N) and (N, P) results in an array with dimensions (M, P). Here, (3, 4) dot (4, 2) is (3, 2).",
    xp: 25
  },

  // ==================== STATISTICS QUESTIONS ====================
  {
    id: "stats_01",
    subject: "Statistics",
    topic: "Variance/SD",
    difficulty: "Medium",
    type: "mcq",
    question: "A data analyst adds a constant value of 10 to every customer transaction amount in a dataset. What happens to the mean and standard deviation (SD) of the dataset?",
    options: [
      "A. Both Mean and Standard Deviation increase by 10.",
      "B. Mean increases by 10; Standard Deviation remains unchanged.",
      "C. Mean remains unchanged; Standard Deviation increases by 10.",
      "D. Mean increases by 10; Standard Deviation decreases."
    ],
    answer: 1, // Index 1 is B
    explanation: "Adding a constant value shifts the entire distribution, increasing the mean. However, because the distance between points (dispersion) remains the same, the SD is unchanged.",
    xp: 15
  },
  {
    id: "stats_02",
    subject: "Statistics",
    topic: "A/B Testing",
    difficulty: "Hard",
    type: "mcq",
    question: "When conducting an A/B test, what does a p-value of 0.03 indicate if you are testing at a significance level (alpha) of 0.05?",
    options: [
      "A. There is a 3% probability that the variant is worse.",
      "B. We reject the null hypothesis; the observed effect is statistically significant.",
      "C. We fail to reject the null hypothesis; there is no effect.",
      "D. The test results are inconclusive."
    ],
    answer: 1, // Index 1 is B
    explanation: "A p-value (0.03) less than the significance level (0.05) indicates that the probability of observing these results under the null hypothesis is low. We reject the null hypothesis.",
    xp: 25
  },
  {
    id: "stats_03",
    subject: "Statistics",
    topic: "Probability",
    difficulty: "Easy",
    type: "mcq",
    question: "In binary classification audits, if Precision is 0.8 and Recall is 0.5. Out of 100 actual positive instances, how many True Positives (TP) did the classifier identify?",
    options: [
      "A. 40 True Positives",
      "B. 50 True Positives",
      "C. 80 True Positives",
      "D. 100 True Positives"
    ],
    answer: 1, // Index 1 is B
    explanation: "Recall = TP / (TP + FN) = TP / (Actual Positives). Thus, 0.5 = TP / 100 => TP = 50.",
    xp: 10
  },

  // ==================== POWER BI QUESTIONS ====================
  {
    id: "pbi_01",
    subject: "Power BI",
    topic: "DAX Measures",
    difficulty: "Medium",
    type: "mcq",
    question: "What is the primary difference between a Calculated Column and a Measure in Power BI?",
    options: [
      "A. Calculated columns are evaluated during refresh; Measures are evaluated dynamically in report visuals.",
      "B. Measures consume RAM storage; Calculated columns are computed on demand.",
      "C. Calculated columns can only use numerical data.",
      "D. There is no functional difference."
    ],
    answer: 0, // Index 0 is A
    explanation: "Calculated columns are pre-calculated and stored in the database model. Measures are calculated dynamically in response to user filters in report visuals.",
    xp: 20
  },
  {
    id: "pbi_02",
    subject: "Power BI",
    topic: "Relationships",
    difficulty: "Easy",
    type: "mcq",
    question: "In Power BI, which relationship direction is recommended to prevent circular dependencies in data models?",
    options: [
      "A. Both directions (Bi-directional)",
      "B. Single direction (One-to-Many)",
      "C. Many-to-Many",
      "D. No relationships"
    ],
    answer: 1, // Index 1 is B
    explanation: "Single direction (One-to-Many) relationships keep filter flow predictable and help prevent circular dependencies.",
    xp: 10
  }
];

// Curated Business Analyst Case Studies List
const caseStudies = [
  {
    id: "case_01",
    title: "E-Commerce Revenue Decline Audit",
    category: "E-Commerce",
    difficulty: "Medium",
    context: "A multi-category e-commerce retailer noticed a sudden 18% decline in month-over-month revenue for July 2026. The executive team wants you to analyze order tables to pinpoint the failure.",
    dataset: "sales (sale_id, product, category, revenue, units_sold, order_date)",
    questions: [
      {
        id: 1,
        question: "Which product category suffered the steepest drop in units sold between June and July?",
        options: [
          "A. Electronics",
          "B. Office Supplies",
          "C. Home Appliances",
          "D. Fashion & Apparel"
        ],
        answer: 0,
        explanation: "Analysing the July product sales volume shows Electronics units dropped from 450 to 120 (a 73% drop), which is the largest absolute and percentage decline among categories."
      },
      {
        id: 2,
        question: "What recommendation should you propose to reverse the trends based on customer total spending details?",
        options: [
          "A. Increase shipping rates across all orders.",
          "B. Launch high-value coupon campaigns in low-engagement cities.",
          "C. Halt sales on all Electronics components.",
          "D. Shift all marketing budgets exclusively to social media."
        ],
        answer: 1,
        explanation: "Low-engagement hubs represent the highest growth potential. Targeting them with high-value product coupons raises AOV (Average Order Value) and re-engages inactive users."
      }
    ]
  },
  {
    id: "case_02",
    title: "Food Delivery Customer Churn Analysis",
    category: "Food Delivery",
    difficulty: "Hard",
    context: "A quick-service delivery app is experiencing high customer churn. Customers with delivery times over 30 minutes appear to churn at higher rates.",
    dataset: "restaurants (restaurant_id, name, cuisine, rating, avg_cost_for_two, delivery_time_mins)",
    questions: [
      {
        id: 1,
        question: "Based on restaurant delivery data, what percentage of restaurants exceed the 30-minute delivery threshold?",
        options: [
          "A. 20%",
          "B. 40%",
          "C. 60%",
          "D. 80%"
        ],
        answer: 1, // Spicy Tadka (35) and Taco Express (30) -> 2 out of 5 is 40%
        explanation: " spciy tadka has 35 mins, taco express has 30 mins. 2 out of 5 is exactly 40%."
      }
    ]
  }
];

// Open Datasets Library Catalog
const datasetsCatalog = [
  {
    id: "ds_sales",
    title: "E-Commerce Sales Transactions",
    description: "Detailed daily sales transactional logs including product descriptions, pricing, units sold, and shipping parameters.",
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
    id: "ds_restaurants",
    title: "Zomato Food Delivery Ratings",
    description: "Reviews, average cost metrics, delivery response timelines, and restaurant locations indexes.",
    rows: 5,
    columns: ["restaurant_id", "name", "cuisine", "rating", "avg_cost_for_two", "delivery_time_mins"],
    difficulty: "Medium"
  }
];

// JSON Driven Resources Configuration
const resourcesCatalog = [
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
    id: "res_02",
    category: "SQL",
    title: "SQLZoo Tutorials",
    description: "Excellent interactive tutorials starting from SELECT basics up to advanced nested SELECT queries.",
    url: "https://sqlzoo.net/wiki/SQL_Tutorial",
    icon: "🗄️",
    tag: "Free"
  },
  {
    id: "res_03",
    category: "Projects",
    title: "Maven Analytics Datasets",
    description: "Test your BI skills with industry-standard datasets. Create dashboard projects in Tableau, Power BI, or Excel.",
    url: "https://mavenanalytics.io/data-playground",
    icon: "📊",
    tag: "Free"
  },
  {
    id: "res_04",
    category: "Projects",
    title: "Kaggle Dataset Hub",
    description: "Discover thousands of open-source datasets. Analyze user behavior, compile trends, and publish notebooks.",
    url: "https://www.kaggle.com/datasets",
    icon: "🗃️",
    tag: "Free"
  },
  {
    id: "res_05",
    category: "Interview",
    title: "KPMG Virtual Internship",
    description: "Deliver insights on customer datasets. Focuses on data quality evaluation, RFM, and dashboard communication.",
    url: "https://www.theforage.com/virtual-internships/prototype/m7W4GMqeTCkHO8T97/KPMG-Data-Analytics-Virtual-Internship",
    icon: "💼",
    tag: "Free"
  },
  {
    id: "res_06",
    category: "Interview",
    title: "Accenture Data Analytics Experience",
    description: "Advise corporate clients on content category engagement, data cleaning, and visual data storytelling.",
    url: "https://www.theforage.com/virtual-internships/prototype/yGvzgj7alKAZqH9Co/Accenture-North-America-Data-Analytics-Virtual-Experience",
    icon: "⚡",
    tag: "Free"
  }
];
