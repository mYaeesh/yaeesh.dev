// ASMUN — sections/allies.js
// Ally alignment bars, sorted by score descending.
//
// MOBILE LAYOUT NOTE — this is designed for 375px first, not shrunk down to it.
// Each country is a full-width STACKED block:
//   row 1  flag + country name (left) · category label + score (right)
//   row 2  the bar, spanning the full content width
//   row 3  the rationale, wrapping freely — never clamped, never ellipsised
// A side-by-side name/bar/rationale layout would leave the bar ~150px and crush
// the rationale into uselessness at this width, so the same stack is used at every
// size and simply gets wider. Category is encoded three ways (fill colour, fill
// pattern, and an uppercase text label) so it survives greyscale and colour-blindness.
//
// CORRECTION PHASE — UNSCORED ENTRIES.
// data/allies.js now contains entries with `score: null`. Three things break if that
// reaches the old code path, so all three are handled explicitly below:
//   1. (null / 10) * 100 === 0        -> a zero-width bar that reads as the WORST score.
//   2. String(null) === 'null'        -> renders the literal text "null/10".
//   3. b.score - a.score === NaN      -> comparator returns NaN, sort order undefined.
// Unscored entries therefore get a hollow hatched track, an "UNSCORED" chip instead of a
// number, and are held out of the ranked list entirely in a collapsed <details> group.

import { allies, allyCounts } from '../../data/allies.js?v=11';
import { el, mountSection, highlight } from '../modules/render.js?v=11';

const MAX_SCORE = 10;

const CATEGORY_LABEL = {
  ally: 'Ally',
  neutral: 'Neutral',
  rival: 'Rival',
  unscored: 'Unscored',
};

const isScored = (a) => typeof a.score === 'number' && Number.isFinite(a.score);

const byName = (a, b) => a.country.localeCompare(b.country, 'en');

// Highest first; ties broken alphabetically so the order is stable between renders.
// Unscored entries are partitioned out rather than sorted, so no NaN ever reaches a comparator.
const scored = allies.filter(isScored).sort((a, b) => b.score - a.score || byName(a, b));
const unscored = allies.filter((a) => !isScored(a)).sort(byName);

function allyRow(entry, ctx) {
  const q = ctx.query;
  const category = entry.category ?? 'neutral';
  const label = CATEGORY_LABEL[category] ?? category;
  const hasScore = isScored(entry);
  const pct = hasScore ? Math.max(0, Math.min(100, (entry.score / MAX_SCORE) * 100)) : 0;

  const row = el('article', {
    class: `ally ally--${category}${hasScore ? '' : ' ally--unscored'}`,
  });

  // Row 1 — identity and score.
  row.append(
    el('header', { class: 'ally__head' }, [
      el('h3', { class: 'ally__name' }, [
        entry.flag ? el('span', { class: 'ally__flag', 'aria-hidden': 'true', text: entry.flag }) : null,
        highlight(entry.country, q),
        entry.isUnconfirmed
          ? el('span', {
              class: 'badge badge--unconfirmed',
              text: 'UNCONFIRMED',
              title: 'Not on the official roll call — verify with the chair.',
            })
          : null,
      ]),
      el('p', { class: 'ally__meta' }, [
        el('span', { class: 'ally__category', text: label }),
        el(
          'span',
          { class: 'ally__score' },
          hasScore
            ? [
                el('span', { class: 'ally__score-value', text: String(entry.score) }),
                el('span', { class: 'ally__score-max', text: `/${MAX_SCORE}` }),
              ]
            : [el('span', { class: 'ally__score-none', text: 'UNSCORED' })]
        ),
      ]),
    ])
  );

  // Row 2 — the bar. role=img with a full text label, so a screen reader gets the
  // number and the category rather than trying to read a decorative div.
  // Unscored entries keep the same track height so row rhythm doesn't break at 375px,
  // but the track is empty and hatched rather than filled to 0%.
  row.append(
    el(
      'div',
      {
        class: `ally__track${hasScore ? '' : ' ally__track--empty'}`,
        role: 'img',
        'aria-label': hasScore
          ? `${entry.country}: ${entry.score} out of ${MAX_SCORE}, ${label}`
          : `${entry.country}: not yet scored`,
      },
      hasScore ? [el('div', { class: 'ally__fill', style: `width:${pct}%` })] : []
    )
  );

  // Row 3 — rationale, free to wrap to as many lines as it needs.
  row.append(el('p', { class: 'ally__rationale' }, [highlight(entry.rationale, q)]));

  return row;
}

export function initAllies() {
  const total = allyCounts.scored + allyCounts.placeholder;

  return mountSection({
    id: 'allies',
    title: 'Ally scores',
    blurb:
      'Personal strategic read — not a confirmed alliance structure. ' +
      `${allyCounts.scored} of ${total} delegations scored 1–10 against Canada, highest first. ` +
      `10 is the closest ally, 1 the most hostile. ${allyCounts.placeholder} are UNSCORED and ` +
      'collapsed at the bottom — that is what you still owe.',
    items: [...scored, ...unscored],
    itemView: allyRow,
    renderList: (container, items, ctx) => {
      const frag = document.createDocumentFragment();

      // `items` is already filtered by search/chips upstream, so re-partition rather
      // than reusing the module-level arrays.
      const s = items.filter(isScored);
      const u = items.filter((a) => !isScored(a));

      if (s.length) s.forEach((entry) => frag.append(allyRow(entry, ctx)));

      if (u.length) {
        const box = el('details', { class: 'ally-placeholders' });
        // Auto-open while a search or filter is active, otherwise a match inside the
        // collapsed group would look like "no results".
        if (ctx.query) box.setAttribute('open', '');
        box.append(
          el('summary', { class: 'ally-placeholders__summary' }, [
            el('span', { class: 'badge badge--placeholder', text: 'PLACEHOLDER' }),
            el('span', {
              text: ` ${u.length} ${u.length === 1 ? 'delegation' : 'delegations'} not yet scored — tap to expand`,
            }),
          ])
        );
        u.forEach((entry) => box.append(allyRow(entry, ctx)));
        frag.append(box);
      }

      if (!s.length && !u.length) {
        frag.append(el('p', { class: 'empty-state', text: 'No delegations match.' }));
      }

      container.replaceChildren(frag);
    },
    controls: {
      search: true,
      searchLabel: 'Find a delegation',
      searchPlaceholder: 'Country or reason…',
      chips: [
        { id: 'all', label: 'All' },
        { id: 'ally', label: 'Allies', test: (a) => a.category === 'ally' },
        { id: 'neutral', label: 'Neutral', test: (a) => a.category === 'neutral' },
        { id: 'rival', label: 'Rivals', test: (a) => a.category === 'rival' },
        { id: 'unscored', label: 'Unscored', test: (a) => !isScored(a) },
      ],
    },
    searchIndex: (entry) => ({
      title: entry.country,
      snippet: entry.rationale,
      keywords: `${CATEGORY_LABEL[entry.category] ?? ''} ${
        isScored(entry) ? `score ${entry.score}` : 'unscored placeholder todo'
      }`,
    }),
  });
}
