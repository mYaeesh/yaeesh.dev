// ASMUN — modules/tooltips.js
// Finds glossary terms in already-rendered body copy and makes each one explain
// itself in place. Definitions are never restated here: data/glossary.js stays
// the single source of truth, and this module only reads it.
//
// WHY A RUNTIME PASS AND NOT MARKUP
// The sections render from plain data strings (data/*.js). Asking whoever writes
// those strings to hand-mark every "moderated caucus" would rot immediately, so
// the linking happens after render instead. The cost is that this module has to
// be careful about where it is allowed to write.
//
// WHY NOT CSS :hover
// A `:hover`-driven tooltip is fine on a desktop and broken on iOS: the first tap
// synthesises a hover that sticks, so the tooltip needs a second tap somewhere
// else before it will go away, and a third to open a different one. Instead the
// input type is read off Pointer Events and the two modes are handled separately —
// mouse/pen get hover-open, touch gets tap-to-toggle plus tap-outside-to-close.
//
// RE-ENTRANCY
// Wrapping a term rewrites the DOM this module is watching. Every pass therefore
// (a) refuses to descend into anything it has already wrapped, and (b) drops the
// mutation records it generated itself, so an injection can never trigger another
// injection. Without both, the observer feeds itself and the tab locks up.

import { glossary } from '../../data/glossary.js?v=6';

const TIP_ID = 'asmun-gloss-tip';
const GAP = 10; // px between trigger and bubble
const MARGIN = 8; // px minimum distance from any viewport edge

/* ===========================================================================
   Term index
   -------------------------------------------------------------------------
   One entry per glossary term. `aliases` is optional and exists so an acronym
   the room actually says out loud ("POI") can point at the full entry without
   anyone writing the definition twice.
=========================================================================== */

/** Lowercase + collapse whitespace, so a term split across a source line still keys correctly. */
function normalise(str) {
  return String(str).toLowerCase().replace(/\s+/g, ' ').trim();
}

/** Escape for use as a literal inside a RegExp. Safe under the `u` flag. */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const entries = glossary.map((term, i) => ({
  id: `gloss-${i}`,
  term: term.term,
  definition: term.definition,
}));

const byId = new Map(entries.map((e) => [e.id, e]));

// Every string that should resolve to an entry: the term itself plus its aliases.
const byPhrase = new Map();
glossary.forEach((term, i) => {
  const entry = entries[i];
  [term.term, ...(term.aliases ?? [])].forEach((phrase) => {
    const key = normalise(phrase);
    if (key && !byPhrase.has(key)) byPhrase.set(key, entry);
  });
});

/* ---------------------------------------------------------------------
   The matcher.

   Longest phrase first, so "Point of information" is tried before any
   shorter phrase that starts the same way.

   Shape:  (lead)(phrase)(inflection)(?!word)

   - lead is a consumed non-word character (or start of node) rather than a
     lookbehind, because lookbehind still throws a SyntaxError on older iOS
     Safari and that would take the whole module down at parse time.
   - the inflection group is what lets "IDP" match inside "IDPs" while "POI"
     stays out of "POINT": after the optional suffix a word character is still
     forbidden, so "POI" + "" fails against the "N", and every suffix branch
     fails too.
   - literal spaces become \s+ so a phrase that wrapped across a source line
     still matches.
--------------------------------------------------------------------- */
const WORD = '\\p{L}\\p{N}_';
const INFLECTION = "(?:['’]s|es|s|ing|ed)?";

const phraseAlternation = [...byPhrase.keys()]
  .sort((a, b) => b.length - a.length)
  .map((phrase) => escapeRegExp(phrase).replace(/\s+/g, '\\s+'))
  .join('|');

const MATCHER_SOURCE = `(^|[^${WORD}])(${phraseAlternation})(${INFLECTION})(?![${WORD}])`;

// Two copies on purpose: a sticky `g` one for scanning, and a stateless one for
// the observer's "is this mutation even worth a pass?" probe. Sharing a single
// regex across both would leak lastIndex between them.
const matcher = new RegExp(MATCHER_SOURCE, 'giu');
const probe = new RegExp(MATCHER_SOURCE, 'iu');

/* ===========================================================================
   Where the pass is not allowed to write
=========================================================================== */

// Rejected outright, along with everything inside them:
//   headings          — a term in an <h2> is the label, not prose to annotate
//   th/dt/caption     — the same thing in table and definition-list form. A column
//                       headed "Placard" is naming the column, not using the word.
//   .gloss-term       — recursing into our own output is the hang
//   a/button/label/…  — no nesting a focusable span inside a control
//   input/textarea    — their value is not body copy
//   code/kbd/pre      — literal text, must stay literal
//   .badge/.section-status — chrome and live regions, not reading material
const SKIP_SELECTOR = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'th', 'dt', 'caption',
  'a', 'button', 'label', 'input', 'textarea', 'select', 'option',
  'code', 'kbd', 'pre', 'samp', 'script', 'style', 'svg', 'abbr',
  '[contenteditable]', '[data-no-gloss]',
  '.gloss-term', '.gloss-tip', '.badge', '.section-status', '.field__label', '.visually-hidden',
].join(',');

// The glossary section defines these terms; annotating it with itself is circular.
const EXCLUDED_SECTIONS = new Set(['glossary']);

/**
 * Is this element hidden outright at the current viewport width?
 *
 * The roster deliberately renders BOTH a <table> and a stack of cards and lets a
 * media query pick one, so roughly half that section is always display:none.
 * Wrapping a term in the hidden half would spend the section's single allowed
 * occurrence on text the reader cannot see, and leave the visible half bare.
 *
 * Only display/visibility are checked, not scroll position — offscreen-but-rendered
 * content is still content.
 */
function isHidden(element) {
  const style = getComputedStyle(element);
  return style.display === 'none' || style.visibility === 'hidden';
}

/** Text nodes under `root` that are eligible to be rewritten. */
function collectTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // REJECT prunes the whole subtree; SKIP keeps descending past the element itself.
        if (node.matches(SKIP_SELECTOR) || isHidden(node)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_SKIP;
      }
      return node.data.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);
  return nodes;
}

/* ===========================================================================
   Injection
=========================================================================== */

function makeTrigger(entry, label) {
  const span = document.createElement('span');
  span.className = 'gloss-term';
  span.dataset.term = entry.id;
  // Focusable, but deliberately not role="button": it does not perform an action,
  // it exposes a description. Screen readers get that description through
  // aria-describedby, which is attached only while the bubble is open.
  span.tabIndex = 0;
  span.textContent = label;
  return span;
}

/**
 * Rewrite one text node, wrapping each first-seen term.
 * @param {Text} textNode
 * @param {Set<string>} used - term ids already wrapped in this section
 * @returns {boolean} whether the node was replaced
 */
function wrapInTextNode(textNode, used) {
  const text = textNode.data;
  matcher.lastIndex = 0;

  let frag = null;
  let cursor = 0;
  let match;

  while ((match = matcher.exec(text)) !== null) {
    const [, lead, phrase, suffix] = match;
    const entry = byPhrase.get(normalise(phrase));
    if (!entry || used.has(entry.id)) continue;
    used.add(entry.id);

    const start = match.index + lead.length;
    const end = start + phrase.length + suffix.length;

    frag = frag ?? document.createDocumentFragment();
    if (start > cursor) frag.append(text.slice(cursor, start));
    frag.append(makeTrigger(entry, text.slice(start, end)));
    cursor = end;
  }

  if (!frag) return false;
  if (cursor < text.length) frag.append(text.slice(cursor));
  textNode.replaceWith(frag);
  return true;
}

/**
 * Annotate one section. Terms already wrapped in this section are seeded into
 * `used` first, so "first occurrence only" survives a partial re-render instead
 * of drifting to a second occurrence on every pass.
 */
function annotateSection(section) {
  const used = new Set();
  section.querySelectorAll('.gloss-term[data-term]').forEach((node) => used.add(node.dataset.term));

  let changed = false;
  for (const node of collectTextNodes(section)) {
    // The node may have been detached by an earlier replacement in this loop.
    if (!node.isConnected) continue;
    if (wrapInTextNode(node, used)) changed = true;
  }
  return changed;
}

/* ===========================================================================
   The bubble — one shared element, moved and refilled per trigger.
   A bubble per term would mean N copies of every definition sitting in the
   DOM, and would make "is anything nested?" a genuine question. One is simpler
   to reason about and trivially cannot nest.
=========================================================================== */

let tip = null;
let tipTerm = null;
let tipDef = null;
let activeTrigger = null;

function buildTip() {
  tip = document.createElement('div');
  tip.className = 'gloss-tip';
  tip.id = TIP_ID;
  tip.setAttribute('role', 'tooltip');
  tip.hidden = true;

  tipTerm = document.createElement('p');
  tipTerm.className = 'gloss-tip__term';

  tipDef = document.createElement('p');
  tipDef.className = 'gloss-tip__def';

  tip.append(tipTerm, tipDef);
  document.body.append(tip);
}

/** Place the bubble above the trigger, flipping below and clamping horizontally at the edges. */
function positionTip(trigger) {
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;

  // Measure from a known origin so the box is sized by its max-width, never by
  // however far off-screen the previous trigger pushed it.
  tip.style.left = '0px';
  tip.style.top = '0px';

  const anchor = trigger.getBoundingClientRect();
  const box = tip.getBoundingClientRect();

  const spaceAbove = anchor.top;
  const spaceBelow = vh - anchor.bottom;
  const fitsAbove = spaceAbove >= box.height + GAP + MARGIN;

  let placement = 'top';
  let top = anchor.top - box.height - GAP;

  if (!fitsAbove) {
    const fitsBelow = spaceBelow >= box.height + GAP + MARGIN;
    if (fitsBelow || spaceBelow >= spaceAbove) {
      placement = 'bottom';
      top = anchor.bottom + GAP;
    }
  }

  // Last resort when neither side fits: keep it fully on screen rather than
  // letting it run off the top or bottom.
  top = Math.min(Math.max(top, MARGIN), Math.max(MARGIN, vh - box.height - MARGIN));

  const anchorCentre = anchor.left + anchor.width / 2;
  const left = Math.min(
    Math.max(anchorCentre - box.width / 2, MARGIN),
    Math.max(MARGIN, vw - box.width - MARGIN)
  );

  tip.dataset.placement = placement;
  tip.style.left = `${Math.round(left)}px`;
  tip.style.top = `${Math.round(top)}px`;

  // The arrow tracks the trigger even after the box has been clamped, so a
  // flipped/clamped bubble still points at the word it belongs to.
  const arrowX = Math.min(Math.max(anchorCentre - left, 14), Math.max(14, box.width - 14));
  tip.style.setProperty('--gloss-arrow-x', `${Math.round(arrowX)}px`);
}

function openTip(trigger) {
  const entry = byId.get(trigger.dataset.term);
  if (!entry) return;
  if (activeTrigger && activeTrigger !== trigger) closeTip();

  tipTerm.textContent = entry.term;
  tipDef.textContent = entry.definition;

  tip.hidden = false;
  positionTip(trigger); // position while still transparent, so it never flashes in the old spot
  tip.classList.add('is-open');

  trigger.setAttribute('aria-describedby', TIP_ID);
  trigger.classList.add('is-active');
  activeTrigger = trigger;
}

function closeTip() {
  if (!activeTrigger) return;
  activeTrigger.removeAttribute('aria-describedby');
  activeTrigger.classList.remove('is-active');
  activeTrigger = null;
  tip.classList.remove('is-open');
  tip.hidden = true;
}

/* ===========================================================================
   Input handling
=========================================================================== */

// What the user most recently used to reach the page. Touch is tracked so a
// focus event that is really just the tail of a tap does not open the bubble
// a frame before the tap handler tries to toggle it.
let inputMode = 'mouse'; // 'mouse' | 'touch' | 'key'

function isHoverPointer(event) {
  return event.pointerType === 'mouse' || event.pointerType === 'pen' || !event.pointerType;
}

function bindTrigger(trigger) {
  if (trigger.dataset.glossBound === '1') return;
  trigger.dataset.glossBound = '1';

  trigger.addEventListener('pointerenter', (event) => {
    if (isHoverPointer(event)) openTip(trigger);
  });

  trigger.addEventListener('pointerleave', (event) => {
    if (!isHoverPointer(event)) return;
    // Keyboard focus outranks the pointer: don't yank a bubble the user tabbed to.
    if (document.activeElement === trigger && inputMode === 'key') return;
    if (activeTrigger === trigger) closeTip();
  });

  // Touch opens on pointerup rather than click. pointerup is guaranteed to fire
  // on a plain <span>, whereas iOS only synthesises click for elements it has
  // decided are clickable — and a scroll that began on the term sends
  // pointercancel instead, so this does not fire on a swipe.
  trigger.addEventListener('pointerup', (event) => {
    if (event.pointerType !== 'touch') return;
    if (activeTrigger === trigger) closeTip();
    else openTip(trigger);
  });

  trigger.addEventListener('focus', () => {
    if (inputMode === 'touch') return; // the pointerup handler owns this case
    openTip(trigger);
  });

  trigger.addEventListener('blur', () => {
    if (activeTrigger === trigger) closeTip();
  });
}

function bindGlobalHandlers() {
  document.addEventListener(
    'pointerdown',
    (event) => {
      inputMode = event.pointerType === 'touch' ? 'touch' : 'mouse';
      // Tap/click anywhere that is not a term and not the bubble itself dismisses.
      const target = event.target instanceof Element ? event.target : null;
      if (target && (target.closest('.gloss-term') || target.closest('.gloss-tip'))) return;
      closeTip();
    },
    true
  );

  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Tab') inputMode = 'key';
      if (event.key === 'Escape' && activeTrigger) {
        const trigger = activeTrigger;
        closeTip();
        trigger.focus({ preventScroll: true });
      }
    },
    true
  );

  // Fixed positioning means a scrolled page would leave the bubble behind.
  let frame = 0;
  const reflow = () => {
    if (!activeTrigger || frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (activeTrigger) positionTip(activeTrigger);
    });
  };
  window.addEventListener('scroll', reflow, { passive: true, capture: true });
  window.addEventListener('resize', reflow, { passive: true });
}

/* ===========================================================================
   Passes and re-runs
=========================================================================== */

let injecting = false;
let observer = null;

function runPass(sections) {
  injecting = true;
  try {
    for (const section of sections) {
      if (annotateSection(section)) {
        section.querySelectorAll('.gloss-term').forEach(bindTrigger);
      }
    }
    // If the trigger we were showing got re-rendered out from under us, the
    // bubble is now pointing at nothing.
    if (activeTrigger && !activeTrigger.isConnected) closeTip();
  } finally {
    // Discard the records this pass just generated, so re-arming the observer
    // does not immediately hand us back our own writes.
    if (observer) observer.takeRecords();
    injecting = false;
  }
}

/**
 * Does a batch of mutations contain any text that could possibly match?
 *
 * The agenda ticks once a second and rewrites countdown digits, which is a
 * childList mutation inside an observed section every second forever. Probing
 * the changed text first turns that into one failed regex test per tick instead
 * of a full tree walk.
 */
function sectionsNeedingRescan(records, sections) {
  const dirty = new Set();

  for (const record of records) {
    const candidates =
      record.type === 'characterData'
        ? [record.target.data ?? '']
        : [...record.addedNodes].map((node) => node.textContent ?? '');

    if (!candidates.some((text) => text.length >= 3 && probe.test(text))) continue;

    const start =
      record.target.nodeType === Node.ELEMENT_NODE ? record.target : record.target.parentElement;
    const section = start?.closest('.panel-section');
    if (section && sections.includes(section)) dirty.add(section);
  }

  return [...dirty];
}

/**
 * Wrap glossary terms in the rendered page and keep them wrapped.
 * @returns {{refresh: () => void, destroy: () => void}}
 */
export function initTooltips() {
  if (!phraseAlternation) {
    console.warn('[tooltips] glossary is empty — nothing to annotate');
    return { refresh() {}, destroy() {} };
  }

  const sections = [...document.querySelectorAll('.panel-section')].filter(
    (section) => !EXCLUDED_SECTIONS.has(section.id)
  );
  if (!sections.length) return { refresh() {}, destroy() {} };

  buildTip();
  bindGlobalHandlers();

  observer = new MutationObserver((records) => {
    if (injecting) return;
    const dirty = sectionsNeedingRescan(records, sections);
    if (dirty.length) runPass(dirty);
  });

  runPass(sections);

  sections.forEach((section) => {
    observer.observe(section, { childList: true, subtree: true, characterData: true });
  });

  return {
    refresh: () => runPass(sections),
    destroy: () => {
      observer?.disconnect();
      observer = null;
      closeTip();
      tip?.remove();
    },
  };
}

export default initTooltips;
