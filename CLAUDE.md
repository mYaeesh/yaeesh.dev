# yaeesh.dev — Project Guide

## Overview
Personal website for Yaeesh. Pure HTML/CSS/JS, **no build tools, no frameworks, no external dependencies**. Every page is a single self-contained `.html` file.

## Repo layout
```
/
├── index.html            # Homepage
├── exam-countdown/
│   └── index.html        # Exam Countdown page
├── CNAME                 # yaeesh.dev → GitHub Pages
└── CLAUDE.md
```

## Working with the repo
This repo has no local copy on the user's desktop. Always clone it fresh in the job tmp directory:
```
git clone https://github.com/mYaeesh/yaeesh.dev <path>
```
Edit files there, then `git add`, `git commit`, `git push origin main`. GitHub Pages deploys automatically from `main`.

## Design system
All CSS uses these custom properties (defined in `:root` in every page):
```
--bg:         #0c0c0b   (page background)
--surface:    #141311   (cards, terminal)
--border:     #252220
--text:       #ede9e3
--text-sub:   #8a7e74
--text-muted: #4e4440
--amber:      #c8913c   (accent / CTA colour)
```
Body grain texture: SVG `feTurbulence` fractalNoise at `opacity='0.05'` as `background-image`.

## Components in use

### Page loader (both pages)
Terminal window overlay (`z-index: 9000`) with Newton's Cradle animation. Fades out after 1800 ms + 500 ms. Hidden via `display: none` when `prefers-reduced-motion` is set.

### Brutalist buttons (homepage only)
`.btn-brutalist` with `.btn-amber` (Exam Countdown) or `.btn-github` (GitHub). Inner `.button_top` lifts on hover; `@keyframes brutalistShake` bakes the `-4px,-4px` offset into keyframes so it coexists with the `animation` property.

### Custom cursor (homepage only)
`.cursor-dot` (4 px amber dot) + `.cursor-ring` (20 px ring) tracked via `mousemove`. JS adds `.hovered` class on anchor hover. Hidden on touch devices via `@media (hover: none)`.

### Cursor trail particles (homepage only)
Pool of 14 `.cursor-particle` divs recycled by index. Animation restarted each mousemove with the `el.offsetHeight` reflow trick. `z-index: 9997`.

### Exam countdown logic
- Data in `EXAMS` array: `{ id, name, startMs, utcMs, display }`.
- All times stored as UTC milliseconds (MVT = UTC+5, so `MVT_hour - 5`).
- `getActive()` filters exams where `utcMs > Date.now()`.
- Fast-path tick: updates only the 4 digit `<span>` elements without re-rendering.
- `selectedId` persisted in `localStorage` under key `exam-countdown-selected`.
- Default exam: `o-level`.

### Header clock (exam-countdown only)
`<span id="headerClock">` in `.header-right`, updated every second with 24-h `HH:MM` local time.

### Ambient glow (exam-countdown only)
`<div class="digit-glow">` as first child of `.hero`. Radial gradient, `@keyframes glowPulse` 4 s alternate. `.main-wrap` sits above it via `position: relative; z-index: 1`.

## Keyboard shortcuts (exam-countdown)
- `F` — toggle fullscreen
- `←` / `→` — cycle between active exams

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
- `prefers-reduced-motion`: loader hidden, shake disabled, particles hidden, glow static.
- `@media (hover: none)`: cursor elements hidden, `html { cursor: auto }`.
- Countdown has `role="timer"` and `aria-label`.
- Toast has `aria-live="polite"`.

## Exam dates (as of June 2026)
| Exam | Date (MVT) | `utcMs` |
|------|-----------|---------|
| Term Test | 30 Jun 2026 · 7:10 AM | `Date.UTC(2026, 5, 30, 2, 10, 0)` |
| Mock Exams | 1 Sep 2026 · 9:30 AM | `Date.UTC(2026, 8, 1, 4, 30, 0)` |
| O-Level & SSE | 20 Sep 2026 · 9:30 AM | `Date.UTC(2026, 8, 20, 4, 30, 0)` |

MVT is UTC+5. To convert: `utcMs = MVT_hour - 5`.
