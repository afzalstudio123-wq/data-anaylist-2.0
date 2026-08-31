// Practice Session Loop & Adaptive Engine Module

// Shared Practice State variables
let practiceState = {
  activeSubject: 'SQL', // Default
  activeTopic: '',
  selectedDifficulty: 'All', // All, Easy, Medium, Hard, Expert
  questions: [],
  currentIndex: 0,
  selectedOption: null,
  score: 0,
  timerInterval: null,
  secondsElapsed: 0,
  startTime: null
};

// Web Audio Synth feedback chimes
function playFeedbackSound(isCorrect) {
  try {
    // Check user preference
    const settings = Storage.get('settings', { sound: true });
    if (!settings.sound) return;

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (isCorrect) {
      // Pleasant double chime (C5 -> E5)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      osc.start();
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.stop(ctx.currentTime + 0.25);
    } else {
      // Dull warning thud (F2 -> D2)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(174.61, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      osc.start();
      osc.frequency.setValueAtTime(146.83, ctx.currentTime + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.32);
      osc.stop(ctx.currentTime + 0.32);
    }
  } catch (e) {
    console.warn("Audio Context blocked or unsupported:", e);
  }
}

// Adaptive Difficulty Logic
function recalculateAdaptiveMastery(subject, answeredCorrectly) {
  const mastery = Storage.get('mastery');
  const key = subject.toLowerCase().replace(/\s/g, '');
  let currentVal = mastery[key] !== undefined ? mastery[key] : 30.0;

  if (answeredCorrectly) {
    // Asymptotically increase toward 100
    currentVal += (100 - currentVal) * 0.08;
  } else {
    // Drop score by 5%
    currentVal -= currentVal * 0.05;
  }

  currentVal = Math.max(0, Math.min(100, Math.round(currentVal * 10) / 10));
  mastery[key] = currentVal;
  Storage.set('mastery', mastery);

  // Update XP separately
  const user = Storage.get('user');
  const xpReward = answeredCorrectly ? 15 : 5;
  user.xp += xpReward;
  
  // Dynamic level increments every 100 XP
  user.level = Math.floor(user.xp / 100) + 1;
  Storage.set('user', user);

  return currentVal;
}

// Helper to determine subject specific mastery values
function getSubjectMastery(subject) {
  const mastery = Storage.get('mastery');
  const key = subject.toLowerCase().replace(/\s/g, '');
  return mastery[key] !== undefined ? mastery[key] : 30.0;
}
