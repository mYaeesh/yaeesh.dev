// ASMUN — sections/allies.js
// Ally alignment bars, sorted by score descending.
//
// MOBILE LAYOUT NOTE — this is designed for 375px first, not shrunk down to it.
// Each country is a full-width STACKED block:
//     row 1  flag + country name (left) · category label + score (right)
//     row 2  the bar, spanning the full content width
//     row 3  the rationale, wrapping freely — never clamped, never ellipsised
// A side-by-side name/bar/rationale layout would leave the bar ~150px and crush
// the rationale into uselessness at this width, so the same stack is used at every
// size and simply gets wider. Category is encoded three ways (fill colour, fill
// pattern, and an uppercase text label) so it survives greyscale and colour-blindness.

import { allies } from '../../data/allies.js?v=5';
import { el, mountSection, highlight } from '../modules/render.js?v=5';

const MAX_SCORE = 10;

const CATEGORY_LABEL = {
  ally: 'Ally',
  neutral: 'Neutral',
  rival: 'Rival',
};

// Highest first; ties broken alphabetically so the order is stable between renders.
const sorted = [...allies].sort(
  (a, b) => b.score - a.score || a.country.localeCompare(b.country, 'en')
);

function allyRow(entry, ctx) {
  const q = ctx.query;
  const category = entry.category ?? 'neutral';
  const label = CATEGORY_LABEL[category] ?? category;
  const pct = Math.max(0, Math.min(100, (entry.score / MAX_SCORE) * 100));

  const row = el('article', { class: `ally ally--${category}` });

  // Row 1 — identity and score.
  row.append(
    el('header', { class: 'ally__head' }, [
      el('h3', { class: 'ally__name' }, [
        entry.flag ? el('span', { class: 'ally__flag', 'aria-hidden': 'true', text: entry.flag }) : null,
        highlight(entry.country, q),
      ]),
      el('p', { class: 'ally__meta' }, [
        el('span', { class: 'ally__category', text: label }),
        el('span', { class: 'ally__score' }, [
          el('span', { class: 'ally__score-value', text: String(entry.score) }),
          el('span', { class: 'ally__score-max', text: `/${MAX_SCORE}` }),
        ]),
      ]),
    ])
  );

  // Row 2 — the bar. role=img with a full text label, so a screen reader gets the
  // number and the category rather than trying to read a decorative div.
  row.append(
    el(
      'div',
      {
        class: 'ally__track',
        role: 'img',
        'aria-label': `${entry.country}: ${entry.score} out of ${MAX_SCORE}, ${label}`,
      },
      [el('div', { class: 'ally__fill', style: `width:${pct}%` })]
    )
  );

  // Row 3 — rationale, free to wrap to as many lines as it needs.
  row.append(el('p', { class: 'ally__rationale' }, [highlight(entry.rationale, q)]));

  return row;
}

export function initAllies() {
  return mountSection({
    id: 'allies',
    title: 'Ally scores',
    blurb:
      `All ${allies.length} committee delegations scored 1–10 against Canada, highest first. ` +
      '10 is the closest ally, 1 the most hostile.',
    items: sorted,
    itemView: allyRow,
    controls: {
      search: true,
      searchLabel: 'Find a delegation',
      searchPlaceholder: 'Country or reason…',
      chips: [
        { id: 'all', label: 'All' },
        { id: 'ally', label: 'Allies', test: (a) => a.category === 'ally' },
        { id: 'neutral', label: 'Neutral', test: (a) => a.category === 'neutral' },
        { id: 'rival', label: 'Rivals', test: (a) => a.category === 'rival' },
      ],
    },
    searchIndex: (entry) => ({
      title: entry.country,
      snippet: entry.rationale,
      keywords: `${CATEGORY_LABEL[entry.category] ?? ''} score ${entry.score}`,
    }),
  });
}
