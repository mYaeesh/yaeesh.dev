// ASMUN — sections/phrases.js
// The phrase bank, grouped by the moment you need it in. Groups render under their PART heading
// (Points of Information first, then the general bank) because under pressure you look for the
// situation, not the wording.
//
// Filtering here matches on the phrase text and its note, so searching "yield" finds both the
// yielding group and the yield-time line buried in the POI group.

import { phrases, poiRule } from '../../data/phrases.js?v=10';
import { el, mountSection, highlight, groupBy } from '../modules/render.js?v=10';

function phraseGroupCard(group, ctx) {
  const q = ctx.query;
  return el('article', { class: 'card phrase-card' }, [
    el('h3', { class: 'phrase-card__title' }, [highlight(group.category, q)]),
    group.note ? el('p', { class: 'phrase-card__note' }, [highlight(group.note, q)]) : null,
    el(
      'ul',
      { class: 'phrase-card__list' },
      group.items.map((item) =>
        el('li', { class: 'phrase-card__item' }, [
          el('span', { class: 'phrase-card__text' }, [highlight(item.text, q)]),
          item.note
            ? el('span', { class: 'phrase-card__hint' }, [highlight(item.note, q)])
            : null,
        ])
      )
    ),
  ]);
}

export function initPhrases() {
  return mountSection({
    id: 'phrases',
    title: 'Phrases',
    blurb: poiRule,
    items: phrases,
    itemView: phraseGroupCard,
    renderList: (container, list, ctx) => {
      const frag = document.createDocumentFragment();
      for (const [part, group] of groupBy(list, (item) => item.part)) {
        frag.append(
          el('h3', { class: 'group-heading' }, [
            highlight(part, ctx.query),
            el('span', { class: 'group-heading__count', text: String(group.length) }),
          ])
        );
        group.forEach((item) => frag.append(phraseGroupCard(item, ctx)));
      }
      container.replaceChildren(frag);
    },
    controls: {
      search: true,
      searchLabel: 'Filter phrases',
      searchPlaceholder: 'concede, yield, point of information…',
      chips: [
        { id: 'all', label: 'All' },
        { id: 'poi', label: 'Points of Information', test: (item) => item.part === 'Points of Information' },
        { id: 'bank', label: 'Phrase bank', test: (item) => item.part === 'Phrase bank' },
      ],
    },
    searchIndex: (item) => ({
      title: item.category,
      snippet: item.items.map((p) => p.text).join('   '),
      keywords: `${item.part} ${item.note ?? ''} ${item.items.map((p) => p.note ?? '').join(' ')}`,
    }),
  });
}
