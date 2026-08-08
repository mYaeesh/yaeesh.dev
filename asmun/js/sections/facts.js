// ASMUN — sections/facts.js
// Fact sheet. Source is always visible. `verified` is three-state, and the two
// non-"yes" states are marked three ways each — border colour, a badge, and a text
// label on the source line — so a half-checked or unchecked claim can never be
// mistaken for a checked one at a glance.
//
// Each card also carries the two things you actually need under pressure: how to
// USE the fact, and the CAVEAT an opposing delegate will reach for.

import { facts } from '../../data/facts.js?v=8';
import { el, mountSection, highlight } from '../modules/render.js?v=8';

/** Anything not explicitly "yes"/"partially" is treated as unverified — fail loud. */
function statusOf(fact) {
  if (fact.verified === 'yes' || fact.verified === true) return 'yes';
  if (fact.verified === 'partially') return 'partially';
  return 'no';
}

const STATUS = {
  yes: { label: 'Verified', badge: null, flag: null },
  partially: {
    label: 'Partly verified',
    badge: 'PARTLY VERIFIED',
    flag: 'One or more sub-figures are not primary-sourced. Read the verification note.',
  },
  no: {
    label: 'Not verified',
    badge: 'UNVERIFIED',
    flag: 'Check this before saying it out loud.',
  },
};

/** A labelled block under the fact — used for the note, the use, and the caveat. */
function detailBlock(labelText, value, q, modifier) {
  if (!value) return null;
  return el('p', { class: `fact-card__detail fact-card__detail--${modifier}` }, [
    el('span', { class: 'fact-card__detail-label', text: labelText }),
    highlight(value, q),
  ]);
}

function factCard(fact, ctx) {
  const q = ctx.query;
  const state = statusOf(fact);
  const meta = STATUS[state];

  const card = el('article', {
    class: `card fact-card fact-card--${state}${state === 'no' ? ' fact-card--unverified' : ''}`,
  });

  if (meta.badge) {
    card.append(
      el('p', { class: 'fact-card__flag' }, [
        el('span', { class: `badge badge--${state === 'no' ? 'danger' : 'warn'}`, text: meta.badge }),
        el('span', { class: 'fact-card__flag-text', text: meta.flag }),
      ])
    );
  }

  card.append(el('p', { class: 'fact-card__text' }, [highlight(fact.fact, q)]));

  card.append(
    el('p', { class: 'fact-card__source' }, [
      el('span', { class: 'fact-card__source-label', text: 'Source' }),
      el('span', { class: 'fact-card__source-value' }, [highlight(fact.source, q)]),
      el('span', {
        class: `fact-card__status fact-card__status--${state}`,
        text: meta.label,
      }),
    ])
  );

  const details = [
    detailBlock('Verification note', fact.verifiedNote, q, 'note'),
    detailBlock('How to use it', fact.use, q, 'use'),
    detailBlock('Caveat', fact.caveat, q, 'caveat'),
  ].filter(Boolean);

  details.forEach((node) => card.append(node));

  return card;
}

export function initFacts() {
  const counts = facts.reduce((acc, f) => {
    const s = statusOf(f);
    acc[s] = (acc[s] ?? 0) + 1;
    return acc;
  }, {});

  return mountSection({
    id: 'facts',
    title: 'Facts',
    blurb:
      `${facts.length} entries — ${counts.yes ?? 0} verified against a primary source, ` +
      `${counts.partially ?? 0} partly, ${counts.no ?? 0} unverified and flagged in red.`,
    items: facts,
    itemView: factCard,
    controls: {
      search: true,
      searchLabel: 'Filter facts',
      searchPlaceholder: 'PSR, resettlement, UNHCR…',
      chips: [
        { id: 'all', label: 'All' },
        { id: 'yes', label: 'Verified', test: (f) => statusOf(f) === 'yes' },
        { id: 'partially', label: 'Partly', test: (f) => statusOf(f) === 'partially' },
        { id: 'no', label: 'Unverified', test: (f) => statusOf(f) === 'no' },
      ],
    },
    searchIndex: (fact) => ({
      title: fact.id,
      snippet: fact.fact,
      keywords: `${fact.source} ${fact.use ?? ''} ${fact.caveat ?? ''} ${fact.verifiedNote ?? ''}`,
    }),
  });
}
