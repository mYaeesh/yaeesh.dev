// ASMUN — sections/blocs.js
// Bloc map. Short/detailed toggle plus an in-section filter; both views searchable.

import { blocs } from '../../data/blocs.js?v=4';
import { el, mountSection, highlight } from '../modules/render.js?v=4';

/** Everything about a bloc, flattened, so the filter searches detail text too. */
function blocText(bloc) {
  return [
    bloc.name,
    bloc.members.join(' '),
    bloc.summary,
    bloc.detail.join(' '),
    bloc.attacks.map((a) => `${a.target} ${a.grounds}`).join(' '),
    bloc.canadaLine ?? '',
  ].join(' ');
}

function blocCard(bloc, ctx) {
  const q = ctx.query;
  const detailed = ctx.view === 'detailed';

  const card = el('article', { class: 'card bloc-card' });

  card.append(
    el('header', { class: 'bloc-card__head' }, [
      el('h3', { class: 'bloc-card__name' }, [highlight(bloc.name, q)]),
      el(
        'p',
        { class: 'bloc-card__members' },
        bloc.members.map((m) => el('span', { class: 'member-chip' }, [highlight(m, q)]))
      ),
    ])
  );

  card.append(el('p', { class: 'bloc-card__summary' }, [highlight(bloc.summary, q)]));

  if (detailed) {
    card.append(el('h4', { class: 'bloc-card__subhead', text: 'Position in detail' }));
    card.append(
      el(
        'ul',
        { class: 'bloc-card__detail' },
        bloc.detail.map((point) => el('li', {}, [highlight(point, q)]))
      )
    );

    card.append(
      el('h4', { class: 'bloc-card__subhead', text: 'Who they attack, and on what grounds' })
    );
    card.append(
      el(
        'ul',
        { class: 'attack-list' },
        bloc.attacks.map((attack) =>
          el('li', { class: 'attack' }, [
            el('span', { class: 'attack__target' }, [highlight(attack.target, q)]),
            el('span', { class: 'attack__grounds' }, [highlight(attack.grounds, q)]),
          ])
        )
      )
    );
  }

  if (bloc.canadaLine) {
    card.append(
      el('p', { class: 'bloc-card__canada' }, [
        el('span', { class: 'bloc-card__canada-label', text: 'Canada' }),
        highlight(bloc.canadaLine, q),
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
