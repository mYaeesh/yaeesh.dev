// ASMUN — modules/search.js
// Global search across every mounted section.
//
// Built for speed under time pressure: the index is a flat array of records, each
// carrying a PRE-LOWERCASED haystack string built once at boot. A keystroke is then
// a plain indexOf over ~200 short strings — no re-serialising, no regex, no fuzzy
// matching. Input is debounced so a fast typist triggers one render, not eight.
//
// Every hit is labelled with the section it came from, and the matched substring is
// wrapped in <mark>. Enter jumps to that section and flashes the matching card.

import { getRegisteredSections, el, highlight } from './render.js?v=10';

const DEBOUNCE_MS = 80;
const PER_SECTION_CAP = 6;

let index = [];
let results = [];
let activeIndex = -1;
let lastFocus = null;

/** Build the flat search index from everything mountSection() registered. */
function buildIndex() {
  const records = [];
  for (const section of getRegisteredSections()) {
    section.items.forEach((item, i) => {
      const record = section.searchIndex(item) ?? {};
      const title = String(record.title ?? '').trim();
      const snippet = String(record.snippet ?? '').trim();
      const keywords = String(record.keywords ?? '').trim();
      records.push({
        sectionId: section.id,
        sectionTitle: section.title,
        title: title || section.title,
        snippet,
        keywords,
        itemIndex: i,
        haystack: `${title} ${snippet} ${keywords}`.toLowerCase(),
      });
    });
  }
  return records;
}

function search(query) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];

  const bySection = new Map();
  const hits = [];

  for (const record of index) {
    if (!record.haystack.includes(needle)) continue;
    const count = bySection.get(record.sectionId) ?? 0;
    if (count >= PER_SECTION_CAP) {
      bySection.set(record.sectionId, count + 1);
      continue;
    }
    bySection.set(record.sectionId, count + 1);
    // Title matches rank above body matches.
    hits.push({ ...record, rank: record.title.toLowerCase().includes(needle) ? 0 : 1 });
  }

  hits.sort((a, b) => a.rank - b.rank);

  const overflow = [];
  for (const [sectionId, count] of bySection) {
    if (count > PER_SECTION_CAP) {
      overflow.push({ sectionId, extra: count - PER_SECTION_CAP });
    }
  }
  return Object.assign(hits, { overflow });
}

/**
 * Pick which text to show under a hit.
 *
 * A record matches on title, snippet OR keywords. If the match is only in the
 * keywords — a bloc's detail bullets, say — showing the summary would render a hit
 * with no visible highlight, leaving you to guess why it matched. So fall back to
 * the field that actually contains the needle.
 */
function bestSnippet(record, needle) {
  const lower = needle.toLowerCase();
  if (record.snippet && record.snippet.toLowerCase().includes(lower)) return record.snippet;
  if (record.keywords && record.keywords.toLowerCase().includes(lower)) return record.keywords;
  return record.snippet;
}

/** Trim a snippet to a window around the match so the hit is visible without scrolling. */
function snippetAround(text, query, radius = 90) {
  const source = String(text ?? '');
  if (!source) return '';
  const at = source.toLowerCase().indexOf(query.trim().toLowerCase());
  if (at < 0 || source.length <= radius * 2) return source.slice(0, radius * 2);

  const start = Math.max(0, at - radius);
  const end = Math.min(source.length, at + query.length + radius);
  return `${start > 0 ? '…' : ''}${source.slice(start, end)}${end < source.length ? '…' : ''}`;
}

export function initSearch() {
  const input = document.getElementById('global-search');
  const overlay = document.getElementById('search-overlay');
  const list = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  if (!input || !overlay || !list || !status) {
    console.warn('[search] missing search markup; global search disabled');
    return null;
  }

  index = buildIndex();

  function open() {
    if (overlay.hidden) {
      lastFocus = document.activeElement;
      overlay.hidden = false;
      document.body.classList.add('search-open');
    }
  }

  function close() {
    if (!overlay.hidden) {
      overlay.hidden = true;
      document.body.classList.remove('search-open');
      activeIndex = -1;
      if (lastFocus && typeof lastFocus.focus === 'function' && lastFocus !== input) {
        lastFocus.focus();
      }
    }
  }

  function setActive(next) {
    const options = Array.from(list.querySelectorAll('.search-hit'));
    if (!options.length) return;
    activeIndex = (next + options.length) % options.length;
    options.forEach((option, i) => {
      const isActive = i === activeIndex;
      option.classList.toggle('is-active', isActive);
      option.setAttribute('aria-selected', String(isActive));
      if (isActive) {
        option.scrollIntoView({ block: 'nearest' });
        input.setAttribute('aria-activedescendant', option.id);
      }
    });
  }

  function jumpTo(hit) {
    close();
    const target = document.getElementById(hit.sectionId);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.classList.add('section-flash');
    setTimeout(() => target.classList.remove('section-flash'), 1200);
  }

  function render(query) {
    results = search(query);
    activeIndex = -1;
    input.removeAttribute('aria-activedescendant');

    if (!query.trim()) {
      close();
      list.replaceChildren();
      status.textContent = '';
      return;
    }

    open();

    if (!results.length) {
      list.replaceChildren(
        el('li', { class: 'search-empty', text: `No matches for “${query.trim()}”.` })
      );
      status.textContent = 'No results';
      return;
    }

    const frag = document.createDocumentFragment();
    results.forEach((hit, i) => {
      const shown = bestSnippet(hit, query);
      const option = el(
        'li',
        {
          class: 'search-hit',
          id: `search-hit-${i}`,
          role: 'option',
          'aria-selected': 'false',
          tabindex: '-1',
          onClick: () => jumpTo(hit),
        },
        [
          el('span', { class: 'search-hit__section', text: hit.sectionTitle }),
          el('span', { class: 'search-hit__title' }, [highlight(hit.title, query)]),
          shown
            ? el('span', { class: 'search-hit__snippet' }, [
                highlight(snippetAround(shown, query), query),
              ])
            : null,
        ]
      );
      frag.append(option);
    });

    (results.overflow ?? []).forEach(({ sectionId, extra }) => {
      const section = getRegisteredSections().find((s) => s.id === sectionId);
      frag.append(
        el('li', {
          class: 'search-more',
          text: `+${extra} more in ${section ? section.title : sectionId}`,
        })
      );
    });

    list.replaceChildren(frag);

    const sections = new Set(results.map((hit) => hit.sectionId));
    status.textContent =
      `${results.length} result${results.length === 1 ? '' : 's'} ` +
      `across ${sections.size} section${sections.size === 1 ? '' : 's'}`;
  }

  let timer = null;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    const value = input.value;
    timer = setTimeout(() => render(value), DEBOUNCE_MS);
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive(activeIndex + 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive(activeIndex - 1);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const hit = results[activeIndex] ?? results[0];
      if (hit) jumpTo(hit);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      input.value = '';
      render('');
      input.blur();
    }
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) render(input.value);
  });

  // "/" and Ctrl/Cmd+K from anywhere on the page.
  document.addEventListener('keydown', (event) => {
    const typingElsewhere =
      event.target instanceof HTMLElement &&
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName);

    if ((event.key === 'k' || event.key === 'K') && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      input.focus();
      input.select();
      return;
    }
    if (event.key === '/' && !typingElsewhere) {
      event.preventDefault();
      input.focus();
      return;
    }
    if (event.key === 'Escape' && !overlay.hidden) {
      close();
    }
  });

  // Clicking the backdrop (but not the panel) dismisses.
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });

  return { render, close, size: index.length };
}
