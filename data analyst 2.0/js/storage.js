const DB_PREFIX = 'datatheta_';

const Storage = {
  get(key, defaultValue = null) {
    try {
      const val = localStorage.getItem(DB_PREFIX + key);
      return val !== null ? JSON.parse(val) : defaultValue;
    } catch (e) {
      console.error("Error reading localStorage key:", key, e);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(DB_PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error("Error writing localStorage key:", key, e);
      return false;
    }
  },

  remove(key) {
    localStorage.removeItem(DB_PREFIX + key);
  },

  clear() {
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith(DB_PREFIX)) {
        localStorage.removeItem(k);
      }
    });
  },

  // Auto initialize defaults
  init() {
    if (!this.get('user')) {
      this.set('user', { name: 'Candidate', xp: 0, level: 1 });
    }
    if (!this.get('mastery')) {
      this.set('mastery', {
        sql: 30.0,
        excel: 30.0,
        python: 30.0,
        statistics: 30.0,
        powerbi: 30.0
      });
    }
    if (!this.get('streak')) {
      this.set('streak', { count: 1, lastDate: null });
    }
    if (!this.get('attempts')) {
      this.set('attempts', []);
    }
    if (!this.get('badges')) {
      this.set('badges', []);
    }
    if (!this.get('settings')) {
      this.set('settings', { sound: true, animations: true });
    }
  }
};

// Immediately initialize
Storage.init();
