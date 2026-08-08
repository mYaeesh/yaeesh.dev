// ASMUN — sections/blocs.js
// Bloc map. Short/detailed toggle plus an in-section filter; both views searchable.

import { blocs } from '../../data/blocs.js?v=5';
import { el, mountSection, highlight } from '../modules/render.js?v=5';

/** Everything about a bloc, flattened, so the filter searches detail text too. */
function blocText(bloc) {
  return [
    bloc.name,
    bloc.members.join(' '),
    bloc.canadaRole ?? '',
    bloc.summary,
    (bloc.breakdown?.whatTheyWant ?? []).join(' '),
    (bloc.breakdown?.faultLines ?? []).join(' '),
    bloc.whoTheyAttack ?? '',
    bloc.canadaStrategyMapping ?? '',
  ].join(' ');
}

function blocCard(bloc, ctx) {
  const q = ctx.query;
  const detailed = ctx.view === 'detailed';

  const card = el('article', { class: 'card bloc-card' });

  card.append(
    el('header', { class: 'bloc-card__head' }, [
      el('h3', { class: 'bloc-card__name' }, [
        highlight(bloc.name, q),
        bloc.canadaRole
          ? el('span', {
              class: 'badge badge--role',
              text: `Canada: ${bloc.canadaRole}`,
            })
          : null,
      ]),
      el(
        'p',
        { class: 'bloc-card__members' },
        bloc.members.map((m) => el('span', { class: 'member-chip' }, [highlight(m, q)]))
      ),
    ])
  );

  card.append(el('p', { class: 'bloc-card__summary' }, [highlight(bloc.summary, q)]));

  if (detailed) {
    const wants = bloc.breakdown?.whatTheyWant ?? [];
    if (wants.length) {
      card.append(el('h4', { class: 'bloc-card__subhead', text: 'What they want' }));
      card.append(
        el(
          'ul',
          { class: 'bloc-card__detail' },
          wants.map((point) => el('li', {}, [highlight(point, q)]))
        )
      );
    }

    const faults = bloc.breakdown?.faultLines ?? [];
    if (faults.length) {
      card.append(
        el('h4', { class: 'bloc-card__subhead', text: 'Fault lines inside the bloc' })
      );
      card.append(
        el(
          'ul',
          { class: 'bloc-card__detail' },
          faults.map((point) => el('li', {}, [highlight(point, q)]))
        )
      );
    }

    if (bloc.whoTheyAttack) {
      card.append(
        el('h4', { class: 'bloc-card__subhead', text: 'Who they attack, and on what grounds' })
      );
      card.append(
        el('ul', { class: 'attack-list' }, [
          el('li', { class: 'attack' }, [
            el('span', { class: 'attack__grounds' }, [highlight(bloc.whoTheyAttack, q)]),
          ]),
        ])
      );
    }
  }

  if (bloc.canadaStrategyMapping) {
    card.append(
      el('p', { class: 'bloc-card__canada' }, [
        el('span', { class: 'bloc-card__canada-label', text: 'Canada' }),
        highlight(bloc.canadaStrategyMapping, q),
      ])
    );
  }

  return card;
}

export function initBlocs() {
  return mountSection({
    id: 'blocs',
    title: 'Blocs',
    blurb: 'Who groups with whom, what they want, and where they aim their fire.',
    items: blocs,
    itemView: blocCard,
    controls: {
      views: [
        { id: 'short', label: 'Short' },
        { id: 'detailed', label: 'Detailed' },
      ],
      search: true,
      searchLabel: 'Filter blocs',
      searchPlaceholder: 'Country, argument, keyword…',
    },
    searchIndex: (bloc) => ({
      title: bloc.name,
      snippet: bloc.summary,
      keywords: blocText(bloc),
    }),
  });
}
