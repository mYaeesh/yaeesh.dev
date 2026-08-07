// ASMUN — render.js
// The generic, data-driven section renderer. Every section in the page is
// mounted through mountSection() and supplies only (a) its data array and
// (b) a function turning one datum into a DOM node. Nothing in here knows
// what a "bloc" or an "ally" is — that keeps the data files free to change
// shape without any render module needing edits.
//
// All text goes in via textContent, never innerHTML, so data authored by
// hand can never inject markup into the page.

/**
 * Terse DOM builder.
 * @param {string} tag
 * @param {Object} [props] - `class`, `text`, `dataset`, `onEvent` handlers, or any
 *   plain attribute. `text` sets textContent.
 * @param {Array<Node|string|null|undefined>} [children]
 * @returns {HTMLElement}
 */
export function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);

  for (const [key, value] of Object.entries(props)) {
    if (value == null || value === false) continue;

    if (key === 'class') {
      node.className = value;
    } else if (key === 'text') {
      node.textContent = String(value);
    } else if (key === 'dataset') {
      Object.assign(node.dataset, value);
    } else if (key === 'style') {
      node.setAttribute('style', value);
    } else if (key.startsWith('on') && typeof value === 'function') {
      node.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (value === true) {
      node.setAttribute(key, '');
    } else {
      node.setAttribute(key, String(value));
    }
  }

  appendAll(node, children);
  return node;
}

/** Append a mixed array of nodes/strings, skipping empties. */
export function appendAll(parent, children) {
  const list = Array.isArray(children) ? children : [children];
  for (const child of list) {
    if (child == null || child === false || child === '') continue;
    parent.append(child.nodeType ? child : document.createTextNode(String(child)));
  }
  return parent;
}

/** Case-insensitive literal-substring escape for building a match regex. */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Wrap every occurrence of `query` inside `text` in <mark>.
 * Returns a DocumentFragment so it can be dropped straight into any element.
 * With no query (or no match) this is just a text node — cheap.
 * @param {string} text
 * @param {string} query
 * @returns {DocumentFragment}
 */
export function highlight(text, query) {
  const frag = document.createDocumentFragment();
  const source = String(text ?? '');
  const needle = String(query ?? '').trim();

  if (!needle) {
    frag.append(document.createTextNode(source));
    return frag;
  }

  const re = new RegExp(escapeRegExp(needle), 'gi');
  let lastIndex = 0;
  let match;

  while ((match = re.exec(source)) !== null) {
    if (match.index > lastIndex) {
      frag.append(document.createTextNode(source.slice(lastIndex, match.index)));
    }
    frag.append(el('mark', { text: match[0] }));
    lastIndex = match.index + match[0].length;
    // Zero-length matches can't happen with a non-empty literal needle, but
    // guard anyway so a bad query can never spin this loop forever.
    if (match[0].length === 0) re.lastIndex += 1;
  }

  if (lastIndex < source.length) {
    frag.append(document.createTextNode(source.slice(lastIndex)));
  }
  return frag;
}

/** Replace a container's contents with `items` rendered by `itemFn`, in one reflow. */
export function renderInto(container, items, itemFn) {
  const frag = document.createDocumentFragment();
  items.forEach((item, index) => {
    const node = itemFn(item, index);
    if (node) frag.append(node);
  });
  container.replaceChildren(frag);
  return container;
}

/**
 * Group an array into a Map keyed by `keyFn`, preserving first-seen key order.
 * @returns {Map<string, Array>}
 */
export function groupBy(items, keyFn) {
  const map = new Map();
  for (const item of items) {
    const key = keyFn(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  }
  return map;
}

/** Flatten a search-index record's fields into one lowercase haystack. */
function toHaystack(record) {
  return [record.title, record.snippet, record.keywords]
    .filter(Boolean)
    .join('   ')
    .toLowerCase();
}

// Registry of every mounted section, consumed by search.js to build the
// global index. Populated as a side effect of mountSection().
const registry = [];

/** All mounted sections, in mount order. */
export function getRegisteredSections() {
  return registry;
}

/**
 * Mount one section into its <section id> host element.
 *
 * @param {Object} config
 * @param {string}   config.id           - matches the <section id> in index.html
 * @param {string}   config.title        - visible <h2>
 * @param {string}   [config.blurb]      - one-line description under the heading
 * @param {Array}    config.items        - the data array, straight from /data
 * @param {Function} config.itemView     - (item, ctx) => Node
 * @param {Object}   [config.controls]
 * @param {boolean}  [config.controls.search]   - render an in-section filter input
 * @param {Array}    [config.controls.views]    - [{id,label}] segmented view toggle
 * @param {Array}    [config.controls.chips]    - [{id,label,test(item)}] filter chips
 * @param {Function} [config.filter]     - (item, query, i) => boolean. Defaults to a
 *                                         substring test over the searchIndex blob.
 * @param {Function} [config.searchIndex]- (item) => {title, snippet, keywords}
 * @param {Function} [config.renderList] - (container, items, ctx) => void. Overrides the
 *                                         default flat list (used by grouped sections).
 * @param {string}   [config.emptyText]
 * @returns {Object|null} the section controller, or null if the host is missing
 */
export function mountSection(config) {
  const host = document.getElementById(config.id);
  if (!host) {
    console.warn(`[render] no host element for section "${config.id}"`);
    return null;
  }

  const state = {
    query: '',
    view: config.controls?.views?.[0]?.id ?? null,
    chip: config.controls?.chips?.[0]?.id ?? null,
  };

  // Precompute one lowercase haystack per item so filtering never re-serialises.
  const indexFn = config.searchIndex ?? (() => ({}));
  const haystacks = new Map();
  config.items.forEach((item, i) => {
    haystacks.set(i, toHaystack(indexFn(item)));
  });
  const indexOfItem = new Map(config.items.map((item, i) => [item, i]));
  const haystackFor = (item, i) => haystacks.get(indexOfItem.get(item) ?? i) ?? '';

  const defaultFilter = (item, query, i) => haystackFor(item, i).includes(query.toLowerCase());
  const filterFn = config.filter ?? defaultFilter;

  // --- chrome -------------------------------------------------------------
  host.replaceChildren();
  host.append(el('h2', { text: config.title }));
  if (config.blurb) {
    host.append(el('p', { class: 'section-blurb', text: config.blurb }));
  }

  const controlsRow = el('div', { class: 'section-controls' });
  let statusEl = null;

  if (config.controls?.views?.length) {
    const group = el('div', {
      class: 'view-toggle',
      role: 'group',
      'aria-label': `${config.title} view`,
    });
    config.controls.views.forEach((view) => {
      const btn = el('button', {
        type: 'button',
        class: 'view-toggle__btn',
        text: view.label,
        'aria-pressed': String(view.id === state.view),
        dataset: { view: view.id },
        onClick: () => {
          state.view = view.id;
          group.querySelectorAll('.view-toggle__btn').forEach((b) => {
            b.setAttribute('aria-pressed', String(b.dataset.view === view.id));
          });
          update();
        },
      });
      group.append(btn);
    });
    controlsRow.append(group);
  }

  if (config.controls?.search) {
    const inputId = `${config.id}-filter`;
    controlsRow.append(
      el('div', { class: 'section-filter' }, [
        el('label', {
          class: 'section-filter__label',
          for: inputId,
          text: config.controls.searchLabel ?? `Filter ${config.title.toLowerCase()}`,
        }),
        el('input', {
          id: inputId,
          class: 'section-filter__input',
          type: 'search',
          placeholder: config.controls.searchPlaceholder ?? 'Type to filter…',
          autocomplete: 'off',
          onInput: (event) => {
            state.query = event.target.value.trim();
            update();
          },
        }),
      ])
    );
  }

  if (config.controls?.chips?.length) {
    const chipRow = el('div', {
      class: 'chip-row',
      role: 'group',
      'aria-label': `Filter ${config.title.toLowerCase()} by category`,
    });
    config.controls.chips.forEach((chip) => {
      const count = chip.test ? config.items.filter(chip.test).length : config.items.length;
      chipRow.append(
        el(
          'button',
          {
            type: 'button',
            class: `chip chip--${chip.id}`,
            'aria-pressed': String(chip.id === state.chip),
            dataset: { chip: chip.id },
            onClick: () => {
              state.chip = chip.id;
              chipRow.querySelectorAll('.chip').forEach((b) => {
                b.setAttribute('aria-pressed', String(b.dataset.chip === chip.id));
              });
              update();
            },
          },
          [el('span', { text: chip.label }), el('span', { class: 'chip__count', text: String(count) })]
        )
      );
    });
    controlsRow.append(chipRow);
  }

  if (controlsRow.childElementCount) {
    host.append(controlsRow);
    statusEl = el('p', { class: 'section-status', role: 'status', 'aria-live': 'polite' });
    host.append(statusEl);
  }

  const list = el('div', { class: `section-list section-list--${config.id}` });
  host.append(list);

  // --- render -------------------------------------------------------------
  function currentItems() {
    let items = config.items;

    const activeChip = config.controls?.chips?.find((c) => c.id === state.chip);
    if (activeChip?.test) items = items.filter(activeChip.test);

    if (state.query) {
      items = items.filter((item, i) => filterFn(item, state.query, i));
    }
    return items;
  }

  function update() {
    const items = currentItems();
    const ctx = { query: state.query, view: state.view, chip: state.chip };

    if (!items.length) {
      list.replaceChildren(
        el('p', {
          class: 'empty-state',
          text: config.emptyText ?? `No ${config.title.toLowerCase()} match that filter.`,
        })
      );
    } else if (config.renderList) {
      config.renderList(list, items, ctx);
    } else {
      renderInto(list, items, (item) => config.itemView(item, ctx));
    }

    if (statusEl) {
      const total = config.items.length;
      statusEl.textContent =
        items.length === total
          ? `${total} ${total === 1 ? 'entry' : 'entries'}`
          : `${items.length} of ${total} shown`;
    }
  }

  update();

  registry.push({ id: config.id, title: config.title, items: config.items, searchIndex: indexFn });

  return { id: config.id, update, state };
}
