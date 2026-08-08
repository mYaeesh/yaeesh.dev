// ASMUN — sections/roster.js
// Full committee roster. One data source, two presentations: a real <table> at
// >=900px and stacked cards below. Both are always in the DOM and CSS picks one,
// which keeps the markup semantic at every width without a resize listener.

import { roster } from '../../data/roster.js?v=5';
import { el, mountSection, highlight } from '../modules/render.js?v=5';

const BLANK = '—';

/** Blank delegateName/placardNumber render as a visible dash, not empty space. */
function fieldValue(value, query) {
  const text = String(value ?? '').trim();
  if (!text) return el('span', { class: 'roster-blank', text: BLANK, title: 'Not yet filled in' });
  return el('span', {}, [highlight(text, query)]);
}

function rosterRow(entry, ctx) {
  const q = ctx.query;
  const tr = el('tr', { class: entry.isHome ? 'roster-row roster-row--home' : 'roster-row' });

  tr.append(
    el('td', { class: 'roster-country' }, [
      el('span', { class: 'roster-flag', 'aria-hidden': 'true', text: entry.flag }),
      el('span', {}, [highlight(entry.country, q)]),
      entry.isHome ? el('span', { class: 'badge badge--home', text: 'YOU' }) : null,
    ]),
    el('td', {}, [highlight(entry.spelling, q)]),
    el('td', { class: 'roster-pron' }, [highlight(entry.pronunciation, q)]),
    el('td', {}, [fieldValue(entry.delegateName, q)]),
    el('td', { class: 'num' }, [fieldValue(entry.placardNumber, q)])
  );
  return tr;
}

function rosterCard(entry, ctx) {
  const q = ctx.query;
  const card = el('article', {
    class: `card roster-card${entry.isHome ? ' roster-card--home' : ''}`,
  });

  card.append(
    el('h3', { class: 'roster-card__name' }, [
      el('span', { class: 'roster-flag', 'aria-hidden': 'true', text: entry.flag }),
      highlight(entry.country, q),
      entry.isHome ? el('span', { class: 'badge badge--home', text: 'YOU' }) : null,
    ])
  );

  const rows = [
    ['Formal name', el('span', {}, [highlight(entry.spelling, q)])],
    ['Say it', el('span', { class: 'roster-pron' }, [highlight(entry.pronunciation, q)])],
    ['Delegate', fieldValue(entry.delegateName, q)],
    ['Placard', fieldValue(entry.placardNumber, q)],
  ];

  const dl = el('dl', { class: 'roster-card__fields' });
  rows.forEach(([label, value]) => {
    dl.append(el('dt', { text: label }), el('dd', {}, [value]));
  });
  card.append(dl);

  return card;
}

export function initRoster() {
  const filled = roster.filter((r) => String(r.delegateName ?? '').trim()).length;

  return mountSection({
    id: 'roster',
    title: 'Roster',
    blurb:
      `${roster.length} delegations. Delegate names filled in: ${filled} of ${roster.length}. ` +
      'Blank fields show a dash so gaps stay obvious.',
    items: roster,
    itemView: rosterCard,
    renderList: (container, items, ctx) => {
      const frag = document.createDocumentFragment();

      // Desktop: table.
      const table = el('table', { class: 'roster-table' }, [
        el('caption', { class: 'visually-hidden', text: 'Committee roster' }),
        el('thead', {}, [
          el('tr', {}, [
            el('th', { scope: 'col', text: 'Country' }),
            el('th', { scope: 'col', text: 'Formal name' }),
            el('th', { scope: 'col', text: 'Pronunciation' }),
            el('th', { scope: 'col', text: 'Delegate' }),
            el('th', { scope: 'col', class: 'num', text: 'Placard' }),
          ]),
        ]),
      ]);
      const tbody = el('tbody');
      items.forEach((entry) => tbody.append(rosterRow(entry, ctx)));
      table.append(tbody);
      frag.append(el('div', { class: 'table-wrap roster-table-wrap' }, [table]));

      // Mobile: cards.
      const cards = el('div', { class: 'roster-cards' });
      items.forEach((entry) => cards.append(rosterCard(entry, ctx)));
      frag.append(cards);

      container.replaceChildren(frag);
    },
    controls: {
      search: true,
      searchLabel: 'Find a delegation',
      searchPlaceholder: 'Country, delegate, placard…',
    },
    searchIndex: (entry) => ({
      title: entry.country,
      snippet: entry.spelling,
      keywords: `${entry.pronunciation} ${entry.delegateName} ${entry.placardNumber}`,
    }),
  });
}
