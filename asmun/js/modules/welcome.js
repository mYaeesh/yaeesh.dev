// ASMUN — welcome.js
// Full-viewport welcome interstitial: one Canada fact, one way through.
// Shows once per browser session (sessionStorage, not localStorage) — a
// reload later in the same session goes straight to the toolkit.

import { trivia } from '../../data/trivia.js?v=10';

const STORAGE_KEY = 'asmun-welcome-shown';
const INERT_SELECTORS = '.skip-link, .site-header, .shell, .tab-bar';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function pickIndex(excludeIndex) {
  if (trivia.length <= 1) return 0;
  let index = excludeIndex;
  while (index === excludeIndex) {
    index = Math.floor(Math.random() * trivia.length);
  }
  return index;
}

function setRestInert(inert) {
  document.querySelectorAll(INERT_SELECTORS).forEach((el) => {
    if (inert) {
      el.setAttribute('inert', '');
    } else {
      el.removeAttribute('inert');
    }
  });
}

export function initWelcome() {
  const overlay = document.getElementById('welcome');
  if (!overlay) return;

  let alreadyShown = false;
  try {
    alreadyShown = sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch (err) {
    // sessionStorage unavailable (private browsing, etc.) — fail open and
    // show the interstitial rather than blocking the page.
  }

  if (alreadyShown) {
    overlay.hidden = true;
    return;
  }

  const factEl = overlay.querySelector('.welcome__fact');
  const enterBtn = overlay.querySelector('.welcome__enter');
  const rerollBtn = overlay.querySelector('.welcome__reroll');

  let currentIndex = Math.floor(Math.random() * trivia.length);
  factEl.textContent = trivia[currentIndex];

  overlay.hidden = false;
  setRestInert(true);

  function dismiss() {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch (err) {
      // Won't persist — the interstitial may show again next reload, which
      // is an acceptable fallback when storage isn't available.
    }

    setRestInert(false);

    if (prefersReducedMotion()) {
      overlay.hidden = true;
      return;
    }

    overlay.classList.add('is-dismissing');
    overlay.addEventListener(
      'transitionend',
      () => {
        overlay.hidden = true;
      },
      { once: true }
    );
  }

  function reroll() {
    currentIndex = pickIndex(currentIndex);
    const nextText = trivia[currentIndex];

    if (prefersReducedMotion()) {
      factEl.textContent = nextText;
      return;
    }

    factEl.classList.add('is-fading');
    setTimeout(() => {
      factEl.textContent = nextText;
      factEl.classList.remove('is-fading');
    }, 150);
  }

  enterBtn.addEventListener('click', dismiss);
  rerollBtn.addEventListener('click', reroll);

  if (prefersReducedMotion()) {
    overlay.classList.add('is-visible');
  } else {
    requestAnimationFrame(() => overlay.classList.add('is-visible'));
  }

  enterBtn.focus();
}
