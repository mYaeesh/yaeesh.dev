// ASMUN — sections/facts.js
// Grouped fact sheet. Source is always visible. Anything verified:false is marked
// three ways — red border, UNVERIFIED badge, and a text label on the source line —
// so an unchecked claim can never be mistaken for a checked one at a glance.

import { facts } from '../../data/facts.js?v=4';
import { el, mountSection, highlight, groupBy } from '../modules/render.js?v=4';

function factCard(fact, ctx) {
  const q = ctx.query;
  const unverified = fact.verified !== true;

  const card = el('article', {
    class: `card fact-card${unverified ? ' fact-card--unverified' : ''}`,
  });

  if (unverified) {
    card.append(
      el('p', { class: 'fact-card__flag' }, [
        el('span', { class: 'badge badge--danger', text: 'UNVERIFIED' }),
        el('span', { class: 'fact-card__flag-text', text: 'Check this before saying it out loud.' }),
      ])
    );
  }

  card.append(el('p', { class: 'fact-card__text' }, [highlight(fact.text, q)]));

  card.append(
    el('p', { class: 'fact-card__source' }, [
      el('span', { class: 'fact-card__source-label', text: 'Source' }),
      el('span', { class: 'fact-card__source-value' }, [highlight(fact.source, q)]),
      el('span', {
        class: `fact-card__status fact-card__status--${unverified ? 'no' : 'yes'}`,
        text: unverified ? 'Not verified' : 'Verified',
      }),
    ])
  );

  return card;
}

export function initFacts() {
  const unverifiedCount = facts.filter((f) => f.verified !== true).length;

  return mountSection({
    id: 'facts',
    title: 'Facts',
    blurb:
      `${unverifiedCount} of ${facts.length} entries are unverified and marked in red. ` +
      'Every figure in this sheet is a placeholder until you check it.',
    items: facts,
    itemView: factCard,
    renderList: (container, items, ctx) => {
      const frag = document.createDocumentFragment();
      for (const [group, groupFacts] of groupBy(items, (f) => f.group)) {
        frag.append(el('h3', { class: 'group-heading' }, [
          highlight(group, ctx.query),
          el('span', { class: 'group-heading__count', text: String(groupFacts.length) }),
        ]));
        groupFacts.forEach((fact) => frag.append(factCard(fact, ctx)));
      }
      container.replaceChildren(frag);
    },
    controls: {
      search: true,
      searchLabel: 'Filter facts',
      searchPlaceholder: 'climate, funding, Convention…',
      chips: [
        { id: 'all', label: 'All' },
        { id: 'unverified', label: 'Unverified', test: (f) => f.verified !== true },
        { id: 'verified', label: 'Verified', test: (f) => f.verified === true },
      ],
    },
    searchIndex: (fact) => ({
      title: fact.group,
      snippet: fact.text,
      keywords: fact.source,
    }),
  });
}
