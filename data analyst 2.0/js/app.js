// Shared Core Logic, Branding & Navigation Toggles for Aptech@Mahanagar, Lko

document.addEventListener('DOMContentLoaded', () => {
  // Check login state for protected student pages
  const user = Storage.get('user');
  const path = window.location.pathname;

  // Render header username and user details if elements exist
  const headerUserEls = document.querySelectorAll('.header-user-name');
  headerUserEls.forEach(el => {
    el.innerText = (user && user.isLoggedIn && user.name) ? user.name : 'Student Login';
  });

  // Setup active navigation highlights based on page location
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

  // Inject Marquee styles and render Aptech Mahanagar Footer
  injectMarqueeStyles();
  renderAptechFooter();
});

/* INJECT MARQUEE ANIMATION STYLES */
function injectMarqueeStyles() {
  if (document.getElementById('aptech-marquee-styles')) return;
  const style = document.createElement('style');
  style.id = 'aptech-marquee-styles';
  style.textContent = `
    @keyframes marqueeHorizontal {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marqueeHorizontal 28s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused !important;
    }
  `;
  document.head.appendChild(style);
}

/* RENDER APTECH MAHANAGAR GOOGLE REVIEWS & GOOGLE MAPS FOOTER */
function renderAptechFooter() {
  const existingFooter = document.querySelector('footer');
  
  const googleReviews = [
    {
      name: 'Shivam Srivastava',
      course: 'Data Science & Analytics',
      rating: '5.0',
      review: 'Best institute in Lucknow for Data Science & Data Analytics! The hands-on training on Python, SQL, and Power BI along with mentor guidance helped me clear my interview. Highly recommended!',
      date: '2 weeks ago',
      avatarBg: 'bg-blue-600'
    },
    {
      name: 'Ananya Verma',
      course: 'AI & Data Science Batch',
      rating: '5.0',
      review: 'Aptech Learning Mahanagar has excellent faculty with 20+ years experience. Practical training with real-world datasets made Data Analytics & AI concepts super easy to understand.',
      date: '1 month ago',
      avatarBg: 'bg-emerald-600'
    },
    {
      name: 'Rahul Sharma',
      course: 'Full Stack & Analytics',
      rating: '5.0',
      review: 'Great learning environment and 100% placement support! The mock interviews and test series prepared me thoroughly for corporate technical rounds.',
      date: '3 weeks ago',
      avatarBg: 'bg-purple-600'
    },
    {
      name: 'Priya Mishra',
      course: 'Advanced Excel & SQL',
      rating: '5.0',
      review: 'Amazing computer institute near Midland Healthcare in Mahanagar. Trainers focus on 100% offline hands-on practice. Best choice for Data Analytics after 12th/Graduation!',
      date: '2 months ago',
      avatarBg: 'bg-amber-600'
    }
  ];

  // Duplicate for smooth continuous marquee loop
  const reviewCardsHTML = [...googleReviews, ...googleReviews].map(rev => `
    <div class="w-[300px] sm:w-[360px] shrink-0 bg-slate-800/90 border border-slate-700/80 p-5 rounded-2xl shadow-md hover:border-slate-500 transition duration-300 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow">
              ${rev.name.charAt(0)}
            </div>
            <div>
              <h5 class="font-semibold text-slate-200 text-sm leading-snug">${rev.name}</h5>
              <span class="text-[11px] text-slate-400 block">${rev.course}</span>
            </div>
          </div>
          <div class="flex items-center gap-1 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full text-xs font-semibold text-amber-300">
            <span>★</span> ${rev.rating}
          </div>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed italic mb-4">"${rev.review}"</p>
      </div>
      <div class="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-700/60 pt-3">
        <span class="flex items-center gap-1 text-emerald-400 font-medium">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          Verified Google Review
        </span>
        <span>${rev.date}</span>
      </div>
    </div>
  `).join('');

  const footerHTML = `
    <!-- APTECH MAHANAGAR GOOGLE REVIEWS & MAPS FOOTER SECTION -->
    <footer class="bg-slate-900 text-white pt-12 pb-8 border-t border-slate-800 relative overflow-hidden mt-16">
      <!-- GOOGLE REVIEWS SECTION WITH MOVING ANIMATION -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div class="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
              <svg class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-lg text-white">Google Student Reviews</span>
                <span class="bg-amber-500/20 text-amber-300 text-xs px-2 py-0.5 rounded-full font-semibold border border-amber-500/30">4.9 ★★★★★</span>
              </div>
              <p class="text-xs text-slate-400">Verified Positive Reviews for Aptech Learning Mahanagar, Lucknow</p>
            </div>
          </div>
          <a href="https://share.google/kAqmc2qMEBYQfS3bS" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition shadow">
            <span>📍 Open Google Maps</span>
            <span>→</span>
          </a>
        </div>

        <!-- MOVING REVIEWS CAROUSEL CONTAINER -->
        <div class="relative overflow-hidden w-full py-2 group">
          <div class="animate-marquee flex gap-6">
            ${reviewCardsHTML}
          </div>
        </div>
      </div>

      <!-- MAP & BRANCH DETAILS SECTION -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-slate-800">
        <!-- GOOGLE MAP EMBED & LINK (7 cols) -->
        <div class="lg:col-span-7 bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 shadow-lg flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <h4 class="font-bold text-slate-200 text-sm flex items-center gap-2">
                <span>📍</span> Aptech Learning Mahanagar Centre Location
              </h4>
              <a href="https://share.google/kAqmc2qMEBYQfS3bS" target="_blank" rel="noopener noreferrer" class="text-xs text-blue-400 hover:underline flex items-center gap-1 font-medium">
                View Location ↗
              </a>
            </div>
            <!-- Interactive Map Container -->
            <div class="w-full h-56 rounded-xl overflow-hidden border border-slate-700 relative bg-slate-900">
              <iframe 
                title="Aptech Learning Mahanagar Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.987747863588!2d80.9500!3d26.8725!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd003b123456%3A0x123456789abcdef!2sAptech%20Learning%20Mahanagar%20Lucknow!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                class="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:opacity-100 transition" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
              <div class="absolute bottom-2 left-2 bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] text-slate-300">
                📌 18 J Road, Near Midland Healthcare, Mahanagar, Lucknow
              </div>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-700/60 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span>Landmark: Above Radiance, Near Midland Healthcare</span>
            <a href="https://share.google/ZBD2pZAM647iI2cV2" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline font-semibold">Visit Official Website →</a>
          </div>
        </div>

        <!-- INSTITUTE DETAILS & CONTACT (5 cols) -->
        <div class="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div class="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-4">
            <h4 class="font-bold text-white text-base border-b border-slate-700 pb-2 flex items-center gap-2">
              <span class="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-xs font-bold text-white">A</span>
              Aptech Learning Center Mahanagar
            </h4>
            
            <div class="space-y-3 text-xs text-slate-300">
              <div class="flex items-start gap-3">
                <span class="text-base text-blue-400">🏢</span>
                <div>
                  <p class="font-semibold text-slate-200">Address:</p>
                  <p class="text-slate-400 leading-relaxed">Aptech Learning Center, First Floor, Above Radiance, 18 J Road, Near Midland Healthcare and Research center, Mahanagar, Lucknow</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <span class="text-base text-green-400">📞</span>
                <div>
                  <p class="font-semibold text-slate-200">Contact Phone:</p>
                  <a href="tel:+916386119566" class="text-blue-400 hover:underline font-medium">+91 6386 119 566</a>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <span class="text-base text-amber-400">✉️</span>
                <div>
                  <p class="font-semibold text-slate-200">Email Address:</p>
                  <a href="mailto:digilearninglko@gmail.com" class="text-blue-400 hover:underline font-medium">digilearninglko@gmail.com</a>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <span class="text-base text-purple-400">🌐</span>
                <div>
                  <p class="font-semibold text-slate-200">Official Portal:</p>
                  <a href="https://share.google/ZBD2pZAM647iI2cV2" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline font-medium">aptechlearninglko.com</a>
                </div>
              </div>
            </div>
          </div>

          <!-- HIGHLIGHT BADGES -->
          <div class="grid grid-cols-3 gap-2 text-center text-xs">
            <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700">
              <p class="text-base font-bold text-amber-400">20+</p>
              <p class="text-[10px] text-slate-400">Years Experience</p>
            </div>
            <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700">
              <p class="text-base font-bold text-blue-400">100+</p>
              <p class="text-[10px] text-slate-400">Hiring Partners</p>
            </div>
            <div class="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700">
              <p class="text-base font-bold text-green-400">25K+</p>
              <p class="text-[10px] text-slate-400">Students Trained</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FOOTER COPYRIGHT BAR -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 pb-8">
        <p>© 2025 Aptech Learning Center Mahanagar | All Rights Reserved</p>
        <div class="flex items-center gap-4 text-slate-400">
          <a href="https://share.google/kAqmc2qMEBYQfS3bS" target="_blank" rel="noopener noreferrer" class="hover:text-white transition">Google Maps Location</a>
          <span>•</span>
          <a href="https://share.google/ZBD2pZAM647iI2cV2" target="_blank" rel="noopener noreferrer" class="hover:text-white transition">Official Website</a>
        </div>
      </div>
    </footer>
  `;

  if (existingFooter) {
    existingFooter.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
}

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

  const mastery = Storage.get('mastery', {});
  const attempts = Storage.get('attempts', []);
  const streak = Storage.get('streak', { count: 1 });
  const activeBadges = Storage.get('badges', []);

  let updated = false;

  // 1. SQL Squire (LT >= 45 in SQL)
  if ((mastery.sql || 0) >= 45 && !activeBadges.includes('sql_squire')) {
    activeBadges.push('sql_squire');
    updated = true;
  }
  // 2. Stats Knight (LT >= 60 in Statistics)
  if ((mastery.statistics || 0) >= 60 && !activeBadges.includes('stats_knight')) {
    activeBadges.push('stats_knight');
    updated = true;
  }
  // 3. Data Science Pioneer (LT >= 50 in Data Science)
  if ((mastery.datascience || 0) >= 50 && !activeBadges.includes('datascience_pioneer')) {
    activeBadges.push('datascience_pioneer');
    updated = true;
  }
  // 4. AI Architect (LT >= 50 in AI)
  if ((mastery.ai || 0) >= 50 && !activeBadges.includes('ai_architect')) {
    activeBadges.push('ai_architect');
    updated = true;
  }
  // 5. Data Overlord (Overall LT average >= 75)
  const keys = ['sql', 'excel', 'python', 'statistics', 'powerbi', 'datascience', 'ai'];
  const totalSum = keys.reduce((acc, k) => acc + (mastery[k] || 30.0), 0);
  const avgLT = totalSum / keys.length;
  if (avgLT >= 75 && !activeBadges.includes('data_overlord')) {
    activeBadges.push('data_overlord');
    updated = true;
  }
  // 6. 7 Day Streak
  if (streak.count >= 7 && !activeBadges.includes('seven_day_streak')) {
    activeBadges.push('seven_day_streak');
    updated = true;
  }
  // 7. 100 Questions Completed
  if (attempts.length >= 100 && !activeBadges.includes('century_solver')) {
    activeBadges.push('century_solver');
    updated = true;
  }

  if (updated) {
    Storage.set('badges', activeBadges);
  }
}
