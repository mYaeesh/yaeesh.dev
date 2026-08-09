// ASMUN — sections/speeches.js
// The five prepared speeches, in delivery order. Each card carries its own word count and timing
// in the header, because the only thing that matters under a 90-second gavel is whether this one
// fits — and the rebuttal template's three fill-in slots are marked so you can see at a glance
// how much of it you still have to improvise.

import { speeches, timingRule } from '../../data/speeches.js?v=10';
import { el, mountSection, highlight } from '../modules/render.js?v=10';

function speechCard(item, ctx) {
  const q = ctx.query;
  return el('article', { class: 'card speech-card' }, [
    el('header', { class: 'speech-card__head' }, [
      el('h3', { class: 'speech-card__title' }, [highlight(item.title, q)]),
      el('span', { class: 'speech-card__timing', text: item.timing }),
    ]),
    item.use
      ? el('p', { class: 'speech-card__use' }, [
          el('span', { class: 'speech-card__use-label', text: 'Use' }),
          highlight(item.use, q),
        ])
      : null,
    el(
      'div',
      { class: 'speech-card__body' },
      item.body.map((para) =>
        el(
          'p',
          { class: para.slot ? 'speech-card__slot' : 'speech-card__para' },
          [highlight(para.text, q)]
        )
      )
    ),
    item.notes
      ? el('p', { class: 'speech-card__notes' }, [
          el('span', { class: 'speech-card__notes-label', text: 'Delivery' }),
          highlight(item.notes, q),
        ])
      : null,
  ]);
}

export function initSpeeches() {
  return mountSection({
    id: 'speeches',
    title: 'Speeches',
    blurb: timingRule,
    items: speeches,
    itemView: speechCard,
    controls: {
      search: true,
      searchLabel: 'Filter speeches',
      searchPlaceholder: 'opening, rebuttal, yields…',
    },
    searchIndex: (item) => ({
      title: item.title,
      snippet: item.body.map((p) => p.text).join(' '),
      keywords: `${item.use} ${item.notes} ${item.timing}`,
    }),
  });
}
