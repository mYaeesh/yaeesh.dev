// ASMUN — theme.js
// Wires the manual dark/light toggle. Default theme comes from
// prefers-color-scheme via CSS; this only handles the explicit override,
// persisted in localStorage so it survives reloads.

const STORAGE_KEY = 'asmun-theme';

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getEffectiveTheme() {
  const stored = document.documentElement.getAttribute('data-theme');
  return stored || getSystemTheme();
}

function applyTheme(theme, toggleEl) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (err) {
    // localStorage unavailable (private browsing, etc.) — theme just won't persist.
  }
  if (toggleEl) {
    toggleEl.setAttribute('aria-pressed', String(theme === 'dark'));
  }
}

export function initThemeToggle() {
  const toggleEl = document.getElementById('theme-toggle');
  if (!toggleEl) return;

  toggleEl.setAttribute('aria-pressed', String(getEffectiveTheme() === 'dark'));

  toggleEl.addEventListener('click', () => {
    const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next, toggleEl);
  });
}
