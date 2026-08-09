// ASMUN — sections/glossary.js
// Alphabetical, scannable definition list. Sorting happens here, not in the data
// file, so terms can be appended in any order.

import { glossary } from '../../data/glossary.js?v=10';
import { el, mountSection, highlight } from '../modules/render.js?v=10';

// localeCompare so accented terms sort where a reader expects them to.
const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, 'en'));

function termEntry(entry, ctx) {
  const q = ctx.query;
  const wrap = el('div', { class: 'glossary-entry' });

  wrap.append(el('dt', { class: 'glossary-entry__term' }, [highlight(entry.term, q)]));
  wrap.append(el('dd', { class: 'glossary-entry__def' }, [highlight(entry.definition, q)]));

  if (entry.note) {
    wrap.append(el('dd', { class: 'glossary-entry__note' }, [highlight(entry.note, q)]));
  }
  return wrap;
}

export function initGlossary() {
  return mountSection({
    id: 'glossary',
    title: 'Glossary',
    blurb: 'Procedural vocabulary, alphabetical. These are real definitions, not placeholders.',
    items: sorted,
    itemView: termEntry,
    // A <dl> wrapper rather than the default <div> list, so the term/definition
    // relationship is exposed to screen readers.
    renderList: (container, items, ctx) => {
      const dl = el('dl', { class: 'glossary-list' });
      items.forEach((item) => dl.append(termEntry(item, ctx)));
      container.replaceChildren(dl);
    },
    controls: {
      search: true,
      searchLabel: 'Filter terms',
      searchPlaceholder: 'caucus, amendment, yield…',
    },
    searchIndex: (entry) => ({
      title: entry.term,
      snippet: entry.definition,
      keywords: entry.note ?? '',
    }),
  });
}
