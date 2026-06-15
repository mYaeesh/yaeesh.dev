# yaeesh.dev website — Workspace Guide

## What this folder is
This is the primary working directory for Yaeesh's personal website cluster. It is **not** a git repo itself — it's a workspace containing multiple sub-projects with their own repos.

```
yaeesh.dev website/
├── index.html            ← Homepage draft (local working copy — see note below)
├── scoutblog/            ← Jekyll blog (separate git repo)
├── .mcp.json             ← MCP servers: shadcn + 21st-dev-magic
└── .claude/
    └── settings.local.json
```

---

## Repos and deployments

| Project | Local path | Git remote | Live URL |
|---------|-----------|------------|----------|
| Main website | `index.html` here + clone to tmp | `github.com/mYaeesh/yaeesh.dev` | `https://yaeesh.dev` |
| Scout Blog | `scoutblog/` | `github.com/mYaeesh/scoutblog` | `https://scoutblog.yaeesh.dev` |

### Working on yaeesh.dev (main site)
The main site has no local git here. Claude Code clones it to a job tmp dir:
```
git clone https://github.com/mYaeesh/yaeesh.dev <tmp-path>
```
Edit files there, then `git add`, `git commit`, `git push origin main`. GitHub Pages deploys automatically from `main`.

The `index.html` at the root of this folder is a **local draft** — it may be ahead of or different from the committed version. When working on the site, check both the local draft and the git state.

### Working on scoutblog
`scoutblog/` is a self-contained Jekyll repo. To run locally:
```
cd scoutblog
bundle exec jekyll serve
```
Push from inside `scoutblog/` to `github.com/mYaeesh/scoutblog`.

---

## Main website (yaeesh.dev) — Design system

### Pages
- `/` → `index.html` — Homepage (name, tagline, buttons, email)
- `/exam-countdown` → `exam-countdown/index.html` — Live countdown timer

### CSS custom properties (all pages share these)
```css
--bg:         #0c0c0b   /* page background */
--surface:    #141311   /* cards, overlays */
--border:     #252220
--border-hi:  #3d3935
--text:       #ede9e3
--text-sub:   #8a7e74
--text-muted: #4e4440
--amber:      #c8913c   /* accent / CTA */
--amber-hi:   #daa84e
--amber-lo:   #a3722a
```

### Grain texture
SVG `feTurbulence` fractalNoise at `opacity='0.05'` as body `background-image`. Behind all content.

### Buttons (homepage)
Two variants, all via `.btn` base class + modifier:
- `.btn-amber` — gold gradient, dark text. Primary CTA (Exam Countdown)
- `.btn-dark` — slate gradient, light text. Secondary (GitHub)

Hover: `translateY(-2px)` + elevated box-shadow. Active: `translateY(1px)`.

### Page loader (both pages)
Newton's Cradle animation overlay (`z-index: 9000`). On homepage: bare cradle + "yaeesh.dev" label (no terminal window). On exam-countdown: same cradle inside a terminal window chrome. Dismisses after 1800 ms + 500 ms fade. Hidden when `prefers-reduced-motion` is set.

### Custom cursor (homepage only)
`.cursor-dot` (7 px amber dot) + `.cursor-ring` (30 px ring, lazy-follows via rAF at 12% lerp). Ring expands on hover over `a`/`button` via JS `.hovered` class. Hidden on touch devices (`@media (hover: none)`).

### Cursor trail particles (homepage only)
Pool of 14 `.cursor-particle` divs (4 px amber circles), recycled cyclically. Animation restarted per mousemove using the `el.offsetHeight` reflow trick. `z-index: 9997`.

### Exam preview tooltip (homepage)
`.exam-preview` above the Exam Countdown button. Shows next exam name + live countdown. Appears on `.btn-wrap` mouseenter, updates every 1 s, hides on mouseleave.

---

## Exam Countdown page — key details

### Data format
```js
{ id, name, startMs, utcMs, display }
```
- All times stored as UTC milliseconds. MVT = UTC+5, so `utcMs = MVT_hour - 5`.
- Default selected exam: `o-level`. Saved in `localStorage` under `exam-countdown-selected`.

### Current exam dates (MVT)
| Exam | Date | `utcMs` |
|------|------|---------|
| Term Test | 30 Jun 2026 · 7:10 AM | `Date.UTC(2026, 5, 30, 2, 10, 0)` |
| Mock Exams | 1 Sep 2026 · 9:30 AM | `Date.UTC(2026, 8, 1, 4, 30, 0)` |
| O-Level & SSE | 20 Sep 2026 · 9:30 AM | `Date.UTC(2026, 8, 20, 4, 30, 0)` |

### Features
- Fast-path tick: only updates the 4 digit `<span>` elements without re-rendering
- `←` / `→` keys to cycle active exams
- `F` key to toggle fullscreen
- Live header clock (HH:MM, 24 h local time)
- Ambient radial glow behind digits (`glowPulse` 4 s alternate)
- Progress bars per exam card (based on `startMs → utcMs`)
- Toast on exam expiry mid-session (`aria-live="polite"`)
- Share button copies `https://yaeesh.dev/exam-countdown` to clipboard

---

## z-index scale
```
page-loader   9000
particles     9997
cursor-ring   9998/9999
toast          200
header          10
glow             0
```

## Accessibility
- `prefers-reduced-motion`: loader hidden, shake disabled, particles hidden, glow static
- `@media (hover: none)`: cursor elements hidden, `html { cursor: auto }`
- Countdown has `role="timer"` and `aria-label`
- Toast uses `aria-live="polite"`
- Buttons have `focus-visible` outlines (2 px amber)

---

## MCP servers (`.mcp.json`)
- **shadcn** — `npx shadcn@latest mcp` — shadcn/ui component search and examples
- **21st-dev-magic** — `@21st-dev/magic@latest` — UI component builder/refiner

---

## Scout Blog (`scoutblog/`)
- Jekyll site with `knhash/jekyllBear` remote theme
- Plugins: `jekyll-feed`, `jekyll-remote-theme`, `jekyll-redirect-from`
- Posts in `_posts/`, built output in `_site/` (gitignored)
- Author: Yaeesh · Email: yaeesh.main@gmail.com
- CNAME: `scoutblog.yaeesh.dev`
