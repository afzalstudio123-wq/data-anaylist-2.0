# Project Memory | DataAnalystTheta 2.0

This memory document acts as a persistent reference guide for the **DataAnalystTheta 2.0** multi-page platform. It lists the core architecture, variables mapping, UI patterns, and compiler rules.

---

## 🛠️ Tech Stack & Elements
- **Core Layout**: Semantic HTML5 + Tailwind CSS CDN (custom theme configuration).
- **Styling Stylesheets**: Custom `.css` rules for macOS dock springs, glassmorphic panels (`bg-white/80 backdrop-blur-md`), linear color gradients (`text-brandBlueDark`), and glowing active indicators.
- **Charts & Statistics**: **Chart.js CDN** renders Topic Accuracy Bar Charts and Mastery Score Progression Line Charts dynamically.
- **Particle System**: **canvas-confetti CDN** triggers custom success celebrations when practice sessions finish.
- **Audio Synthesizer Engine**: Client-side **HTML5 Web Audio API** generates clean chime and thud sounds dynamically on answer submissions (no external file assets required).
- **Daily Streak Memory**: Leverages client-side `localStorage` to compute day difference variables and increments consistency streaks.

---

## 📂 File Architecture
1. **[index.html](file:///e:/data%20analystic%20site/data%20analyst%202.0/index.html)**: Landing page featuring the "Adaptive vs Traditional" comparison matrix.
2. **[practice.html](file:///e:/data%20analystic%20site/data%20analyst%202.0/practice.html)**: Practice Hub. Includes the Subject Dashboard curriculum list, testing terminal, SQL Sandbox compiler, and analytics.
3. **[resources.html](file:///e:/data%20analystic%20site/data%20analyst%202.0/resources.html)**: Curated free resources repository. Reuses the 6 original project resource cards.
4. **[style.css](file:///e:/data%20analystic%20site/data%20analyst%202.0/style.css)**: Holds all gradient classes, transition animations, and active state styles.
5. **[app.js](file:///e:/data%20analystic%20site/data%20analyst%202.0/app.js)**: Central logic engine storing the MCQ pools, mock databases, SQLite compiler sandbox, and audio tone oscillators.

---

## ⚙️ Interactive Mechanics

### 1. SQL Sandbox Compiler Sandbox (`app.js`)
- **Tables Scope (`mockDB`)**:
  - `sales`: `sale_id`, `product`, `category`, `revenue`, `units_sold`, `order_date`
  - `customers`: `customer_id`, `name`, `city`, `sign_up_date`, `total_spent`
  - `restaurants`: `restaurant_id`, `name`, `cuisine`, `rating`, `avg_cost_for_two`, `delivery_time_mins`
- **Compiler Routines**:
  - `executeMockSQL(query)`: Enforces SELECT-only parsing, extracts tables, and routes filtration.
  - `applyWhereFilter(data, expr)`: Compiles numeric and string evaluation rules (`>=`, `<=`, `>`, `<`, `=`).
  - `applyOrderBy(data, expr)`: Evaluates dynamic sort directions (`ASC`, `DESC`).
  - `renderSQLOutput(results, container)`: Compiles data models into styled HTML output tables.

### 2. Gamification & Score Rules
- **LT Score Calculation**: Mastery starts at `30.0`. Success increments it asymptotically toward `70+` (`currentLT += (70 - currentLT) * 0.08`), whereas failure penalizes it (`currentLT -= currentLT * 0.05`).
- **Badge Milestones Map**:
  - `🛡️ SQL Squire`: Unlocked at `45 LT` score.
  - `⚔️ Stats Knight`: Unlocked at `60 LT` score.
  - `👑 Data Overlord`: Unlocked at `75 LT` score (with visual pulsing).
- **College Leaderboard**: Simulates competing students (Amit, Priya, Suresh) alongside `You (Candidate)` whose rank updates relative to score changes.

### 3. Client-Side Audio Synth (`playFeedbackSound(isCorrect)`)
- **Success Chime**: Connects double-pitch sine wave nodes at `523.25Hz` (C5) and `659.25Hz` (E5) lasting `0.25s`.
- **Failure Thud**: Emits a low-frequency triangle wave thud starting at `174.61Hz` (F2) and slipping to `146.83Hz` (D2) lasting `0.32s`.

---

## 🎨 Theme Palette Color Configs
- **Primary Color**: `#0693E3` (brandBlue)
- **Primary Dark**: `#032656` (brandBlueDark)
- **Accent Purple**: `#7D077D` (brandPurple)
- **Background Slate**: `#F8FAFC` (lightBg)
- **Text Dark**: `#2B161B` (textMain)
- **Text Slate**: `#453E3E` (textMuted)
