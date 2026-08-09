// ASMUN — sections/questions.js
// Questions grouped by the bloc they are aimed at, in the order they are written —
// most aggressive first, so the sharp ones sit at the top of each group where you'll
// find them under pressure.
//
// data/questions.js stores the questions in one object keyed by group, and
// questionGroupBlocIds says which bloc in data/blocs.js each group belongs to. That
// pair is flattened here into the flat list mountSection wants. A group whose bloc id
// isn't in blocs.js still renders, under its raw id, so a typo is visible rather than
// silently dropping questions off the page.

import { questions, questionGroupBlocIds } from '../../data/questions.js?v=8';
import { blocs } from '../../data/blocs.js?v=8';
import { el, mountSection, highlight, groupBy } from '../modules/render.js?v=8';

const blocNameById = new Map(blocs.map((b) => [b.id, b.name]));
const blocName = (id) => blocNameById.get(id) ?? `${id} (unknown bloc id)`;

/** One flat list, group order preserved, each item tagged with its bloc id. */
const items = Object.entries(questions).flatMap(([group, list]) =>
  (list ?? []).map((item) => ({
    ...item,
    group,
    targetBloc: questionGroupBlocIds[group] ?? group,
  }))
);

function questionCard(item, ctx) {
  const q = ctx.query;
  return el('article', { class: 'card question-card' }, [
    item.target
      ? el('p', { class: 'question-card__target' }, [
          el('span', { class: 'question-card__target-label', text: 'Ask' }),
          highlight(item.target, q),
        ])
      : null,
    el('p', { class: 'question-card__q' }, [highlight(item.question, q)]),
    el('p', { class: 'question-card__why' }, [
      el('span', { class: 'question-card__why-label', text: 'Why ask it' }),
      highlight(item.goal, q),
    ]),
  ]);
}

export function initQuestions() {
  return mountSection({
    id: 'questions',
    title: 'Questions',
    blurb:
      'Points of information to put to each bloc, most aggressive first. ' +
      'Each one either exposes an error, forces a commitment, or splits a bloc.',
    items,
    itemView: questionCard,
    renderList: (container, list, ctx) => {
      const frag = document.createDocumentFragment();
      for (const [blocId, group] of groupBy(list, (item) => item.targetBloc)) {
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
      searchPlaceholder: 'sovereignty, funding, non-refoulement…',
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
      title: `${item.target ?? ''} — ${blocName(item.targetBloc)}`,
      snippet: item.question,
      keywords: item.goal,
    }),
  });
}
