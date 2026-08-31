// Shared Core Logic & Navigation Toggles

document.addEventListener('DOMContentLoaded', () => {
  // Setup active navigation highlights based on page location
  const path = window.location.pathname;
  const navButtons = {
    'index.html': 'nav-btn-landing',
    'dashboard.html': 'nav-btn-dashboard',
    'practice.html': 'nav-btn-practice',
    'challenges.html': 'nav-btn-challenges',
    'interview.html': 'nav-btn-interview',
    'analytics.html': 'nav-btn-analytics',
    'resources.html': 'nav-btn-resources',
    'profile.html': 'nav-btn-profile'
  };

  Object.keys(navButtons).forEach(fileName => {
    const btnId = navButtons[fileName];
    const btn = document.getElementById(btnId);
    if (btn) {
      if (path.includes(fileName)) {
        btn.classList.add('text-brandBlue', 'border-b-2', 'border-brandBlue');
        btn.classList.remove('hover:text-brandBlue');
      } else {
        btn.classList.remove('text-brandBlue', 'border-b-2', 'border-brandBlue');
        btn.classList.add('hover:text-brandBlue');
      }
    }
  });

  // Sync user badges list on load
  evaluateAndAwardBadges();
});

/* PRICING MODAL TRIGGERS */
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

/* GAMIFIED PLACEMENT BADGES MAP AWARDER */
function evaluateAndAwardBadges() {
  if (typeof Storage === 'undefined') return;

  const mastery = Storage.get('mastery');
  const attempts = Storage.get('attempts', []);
  const streak = Storage.get('streak', { count: 1 });
  const activeBadges = Storage.get('badges', []);

  let updated = false;

  // 1. SQL Squire (LT >= 45 in SQL)
  if (mastery.sql >= 45 && !activeBadges.includes('sql_squire')) {
    activeBadges.push('sql_squire');
    updated = true;
  }
  // 2. Stats Knight (LT >= 60 in Statistics)
  if (mastery.statistics >= 60 && !activeBadges.includes('stats_knight')) {
    activeBadges.push('stats_knight');
    updated = true;
  }
  // 3. Data Overlord (Overall LT average >= 75)
  const avgLT = (mastery.sql + mastery.excel + mastery.python + mastery.statistics + mastery.powerbi) / 5;
  if (avgLT >= 75 && !activeBadges.includes('data_overlord')) {
    activeBadges.push('data_overlord');
    updated = true;
  }
  // 4. 7 Day Streak
  if (streak.count >= 7 && !activeBadges.includes('seven_day_streak')) {
    activeBadges.push('seven_day_streak');
    updated = true;
  }
  // 5. 100 Questions Completed
  if (attempts.length >= 100 && !activeBadges.includes('century_solver')) {
    activeBadges.push('century_solver');
    updated = true;
  }

  if (updated) {
    Storage.set('badges', activeBadges);
  }
}
