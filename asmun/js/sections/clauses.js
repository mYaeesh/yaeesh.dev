// ASMUN — sections/clauses.js
// The clause bank as two tables, preambulatory then operative, each row a starter verb with the
// strength rating that decides whether it is safe in an HRC committee.
//
// The verbs the source says NOT to use (Demands, Condemns, Deeply disturbed by) are rendered, not
// hidden — knowing which verb sinks a text is the point of the table. The strength value drives a
// modifier class so the strongest ones read as a warning rather than a recommendation.

import { clauses, clauseNotes } from '../../data/clauses.js?v=11';
import { el, mountSection, highlight, groupBy } from '../modules/render.js?v=11';

const KIND_LABEL = {
  preambulatory: 'Preambulatory starters',
  operative: 'Operative starters',
};

/** Starters the source marks as "do not use" or "avoid". */
const AVOID = new Set(['Demands', 'Condemns', 'Deeply disturbed by']);

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z]+/g, '-');
}

function clauseCard(item, ctx) {
  const q = ctx.query;
  const avoid = AVOID.has(item.starter);
  return el('article', { class: `card clause-card${avoid ? ' clause-card--avoid' : ''}` }, [
    el('div', { class: 'clause-card__head' }, [
      el('h3', { class: 'clause-card__starter' }, [highlight(item.starter, q)]),
      el('span', {
        class: `clause-card__strength clause-card__strength--${slug(item.strength)}`,
        text: item.strength,
      }),
    ]),
    el('p', { class: 'clause-card__when' }, [highlight(item.when, q)]),
  ]);
}

export function initClauses() {
  return mountSection({
    id: 'clauses',
    title: 'Clauses',
    blurb: clauseNotes.discipline,
    items: clauses,
    itemView: clauseCard,
    renderList: (container, list, ctx) => {
      const frag = document.createDocumentFragment();
      for (const [kind, group] of groupBy(list, (item) => item.kind)) {
        frag.append(
          el('h3', { class: 'group-heading' }, [
            highlight(KIND_LABEL[kind] ?? kind, ctx.query),
            el('span', { class: 'group-heading__count', text: String(group.length) }),
          ])
        );
        if (clauseNotes[kind]) {
          frag.append(el('p', { class: 'group-note' }, [highlight(clauseNotes[kind], ctx.query)]));
        }
        group.forEach((item) => frag.append(clauseCard(item, ctx)));
      }
      container.replaceChildren(frag);
    },
    controls: {
      search: true,
      searchLabel: 'Filter clauses',
      searchPlaceholder: 'recalls, urges, requests…',
      chips: [
        { id: 'all', label: 'All' },
        { id: 'preambulatory', label: 'Preambulatory', test: (item) => item.kind === 'preambulatory' },
        { id: 'operative', label: 'Operative', test: (item) => item.kind === 'operative' },
      ],
    },
    searchIndex: (item) => ({
      title: item.starter,
      snippet: item.when,
      keywords: `${item.kind} ${item.strength}`,
    }),
  });
}
