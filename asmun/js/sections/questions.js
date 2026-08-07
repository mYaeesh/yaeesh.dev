// ASMUN — sections/questions.js
// Questions grouped by the bloc they are aimed at. Bloc display names are resolved
// from data/blocs.js by id; an unknown id still renders under its raw value rather
// than silently vanishing, so a typo in the data is visible.

import { questions } from '../../data/questions.js?v=4';
import { blocs } from '../../data/blocs.js?v=4';
import { el, mountSection, highlight, groupBy } from '../modules/render.js?v=4';

const blocNameById = new Map(blocs.map((b) => [b.id, b.name]));
const blocName = (id) => blocNameById.get(id) ?? `${id} (unknown bloc id)`;

function questionCard(item, ctx) {
  const q = ctx.query;
  return el('article', { class: 'card question-card' }, [
    el('p', { class: 'question-card__q' }, [highlight(item.question, q)]),
    el('p', { class: 'question-card__why' }, [
      el('span', { class: 'question-card__why-label', text: 'Why ask it' }),
      highlight(item.why, q),
    ]),
  ]);
}

export function initQuestions() {
  return mountSection({
    id: 'questions',
    title: 'Questions',
    blurb: 'What to put to each bloc, and what the answer — or the silence — tells you.',
    items: questions,
    itemView: questionCard,
    renderList: (container, items, ctx) => {
      const frag = document.createDocumentFragment();
      for (const [blocId, group] of groupBy(items, (item) => item.targetBloc)) {
        frag.append(
          el('h3', { class: 'group-heading' }, [
            highlight(blocName(blocId), ctx.query),
            el('span', { class: 'group-heading__count', text: String(group.length) }),
          ])
        );
        group.forEach((item) => frag.append(questionCard(item, ctx)));
      }
      container.replaceChildren(frag);
    },
    controls: {
      search: true,
      searchLabel: 'Filter questions',
      searchPlaceholder: 'climate, funding, monitoring…',
      chips: [
        { id: 'all', label: 'All' },
        ...blocs.map((b) => ({
          id: b.id,
          label: b.name,
          test: (item) => item.targetBloc === b.id,
        })),
      ],
    },
    searchIndex: (item) => ({
      title: blocName(item.targetBloc),
      snippet: item.question,
      keywords: item.why,
    }),
  });
}
