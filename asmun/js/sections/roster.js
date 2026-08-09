// ASMUN — sections/roster.js
// Full committee roster. One data source, two presentations: a real <table> at
// >=900px and stacked cards below. Both are always in the DOM and CSS picks one,
// which keeps the markup semantic at every width without a resize listener.
//
// CORRECTION PHASE: entries now carry a `status` of confirmed | withdrawn | unconfirmed,
// plus an optional `unresolved` flag for data conflicts. Each gets a distinct visual
// treatment (strike-through / dashed edge / red edge) so the difference is obvious at a
// glance and does not live only in a tooltip.

import { roster, rosterCounts } from '../../data/roster.js?v=8';
import { el, mountSection, highlight } from '../modules/render.js?v=8';

const BLANK = '—';

const STATUS = {
  withdrawn: {
    label: 'WITHDRAWN',
    cls: 'badge--withdrawn',
    title: 'Withdrew from committee. No delegate. Does not vote.',
  },
  unconfirmed: {
    label: 'UNCONFIRMED',
    cls: 'badge--unconfirmed',
    title: 'Not on the official 51-country roll call — verify with the chair.',
  },
};

function statusBadge(entry) {
  const s = STATUS[entry.status];
  return s ? el('span', { class: `badge ${s.cls}`, text: s.label, title: s.title }) : null;
}

function unresolvedBadge(entry) {
  return entry.unresolved
    ? el('span', {
        class: 'badge badge--unresolved',
        text: 'TODO — CONFLICT',
        title: entry.unresolvedNote || 'Unresolved data conflict. Confirm with the chair.',
      })
    : null;
}

function rowClass(entry, base) {
  return [
    base,
    entry.isHome ? `${base}--home` : '',
    entry.status && entry.status !== 'confirmed' ? `${base}--${entry.status}` : '',
    entry.unresolved ? `${base}--unresolved` : '',
  ]
    .filter(Boolean)
    .join(' ');
}

/** Blank delegateName/placardNumber render as a visible dash, not empty space. */
function fieldValue(value, query) {
  const text = String(value ?? '').trim();
  if (!text) return el('span', { class: 'roster-blank', text: BLANK, title: 'Not yet filled in' });
  return el('span', {}, [highlight(text, query)]);
}

/** Withdrawn delegations have no delegate by definition — say so rather than showing a dash. */
function delegateCell(entry, q) {
  return entry.status === 'withdrawn'
    ? el('span', { class: 'roster-blank', text: 'no delegate — withdrawn' })
    : fieldValue(entry.delegateName, q);
}

function rosterRow(entry, ctx) {
  const q = ctx.query;
  const tr = el('tr', { class: rowClass(entry, 'roster-row') });

  tr.append(
    el('td', { class: 'roster-country' }, [
      el('span', { class: 'roster-flag', 'aria-hidden': 'true', text: entry.flag }),
      el('span', {}, [highlight(entry.country, q)]),
      entry.isHome ? el('span', { class: 'badge badge--home', text: 'YOU' }) : null,
      statusBadge(entry),
      unresolvedBadge(entry),
    ]),
    el('td', {}, [highlight(entry.spelling, q)]),
    el('td', { class: 'roster-pron' }, [highlight(entry.pronunciation, q)]),
    el('td', {}, [delegateCell(entry, q)]),
    el('td', { class: 'num' }, [fieldValue(entry.placardNumber, q)])
  );

  if (!entry.unresolvedNote) return tr;

  // The conflict note needs a full-width row of its own — a 5-column table can't
  // hold a 6th cell, so this is a sibling <tr>. Returning a fragment keeps the
  // caller's `tbody.append(...)` working unchanged.
  const noteRow = el('tr', { class: 'roster-row roster-row--note' }, [
    el('td', { colspan: '5' }, [el('p', { class: 'roster-note', text: entry.unresolvedNote })]),
  ]);

  const frag = document.createDocumentFragment();
  frag.append(tr, noteRow);
  return frag;
}

function rosterCard(entry, ctx) {
  const q = ctx.query;
  const card = el('article', { class: rowClass(entry, 'roster-card') + ' card' });

  card.append(
    el('h3', { class: 'roster-card__name' }, [
      el('span', { class: 'roster-flag', 'aria-hidden': 'true', text: entry.flag }),
      highlight(entry.country, q),
      entry.isHome ? el('span', { class: 'badge badge--home', text: 'YOU' }) : null,
      statusBadge(entry),
      unresolvedBadge(entry),
    ])
  );

  const rows = [
    ['Formal name', el('span', {}, [highlight(entry.spelling, q)])],
    ['Say it', el('span', { class: 'roster-pron' }, [highlight(entry.pronunciation, q)])],
    ['Delegate', delegateCell(entry, q)],
    ['Placard', fieldValue(entry.placardNumber, q)],
  ];

  const dl = el('dl', { class: 'roster-card__fields' });
  rows.forEach(([label, value]) => {
    dl.append(el('dt', { text: label }), el('dd', {}, [value]));
  });
  card.append(dl);

  if (entry.unresolvedNote) {
    card.append(el('p', { class: 'roster-note', text: entry.unresolvedNote }));
  }

  return card;
}

export function initRoster() {
  const active = roster.filter((r) => r.status !== 'withdrawn');
  const filled = active.filter((r) => String(r.delegateName ?? '').trim()).length;

  return mountSection({
    id: 'roster',
    title: 'Roster',
    blurb:
      `${rosterCounts.confirmed} active delegations · ${rosterCounts.withdrawn} withdrawn (no vote) · ` +
      `${rosterCounts.unconfirmed} unconfirmed · ${rosterCounts.unresolved} unresolved name conflicts. ` +
      `Delegate names filled: ${filled} of ${active.length}. Placard numbers blank — fill on the day.`,
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
      chips: [
        { id: 'all', label: 'All' },
        { id: 'confirmed', label: 'Active', test: (r) => r.status === 'confirmed' },
        { id: 'withdrawn', label: 'Withdrawn', test: (r) => r.status === 'withdrawn' },
        { id: 'unconfirmed', label: 'Unconfirmed', test: (r) => r.status === 'unconfirmed' },
        { id: 'unresolved', label: 'Conflicts', test: (r) => !!r.unresolved },
      ],
    },
    searchIndex: (entry) => ({
      title: entry.country,
      snippet: entry.spelling,
      keywords: [
        entry.pronunciation,
        entry.delegateName,
        entry.placardNumber,
        entry.status,
        entry.unresolved ? 'unresolved conflict todo' : '',
      ]
        .filter(Boolean)
        .join(' '),
    }),
  });
}
