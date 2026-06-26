# Design Doc — `ExpandableHeroes`

Component: `ExpandableHeroes`
Package: `@asu/unity-react-core`
SCSS partner: `@asu/unity-bootstrap-theme`
Stage: Unity (Stage A) — adversarial coding pipeline
Status: **LOCKED** (architect approval — no further clarifying questions)

---

## 0. Locked decisions (verbatim recap)

All five clarifying questions are LOCKED. The implementation MUST honor every clause below; the reviewer treats deviations as P1 findings.

- **Q1 — Interaction semantics: Option B (manual activation, APG Tabs pattern).** Hover and focus produce a **non-committing preview**. Click / Enter / Space **commit**. Arrow Left / Right / Home / End move focus among collapsed tabs **without committing**. Touch tap = commit (no hover semantics on touch). `aria-orientation="horizontal"`. **Roving tabindex.** Single active index in state. Honors `prefers-reduced-motion`.
- **Q2 — Desktop visual model: Option A (narrow vertical strips).** Active pane ~70%; each inactive pane ~15%. **These three percentages are the ONLY hardcoded numeric literals in the SCSS.** Every other value (colors, padding/gap spacing, font sizes/weights, transition durations, breakpoints, gradient) MUST come from existing Unity tokens.
- **Q3 — Rotated vertical title: same string as the expanded pane's heading.** CSS-rotated. The full string is in the DOM and is the tab's accessible name. **No separate `collapsedLabel` prop, no `aria-hidden` on visible text, no string truncation.** SCSS handles overflow via `overflow: hidden; text-overflow: ellipsis;` on a constrained inline-block tied to the parent pane's height — never alter the string itself.
- **Q4 — Desktop breakpoint: `lg` (≥992px / `$uds-breakpoint-lg`).** Use `@include media-breakpoint-up(lg)`. Below `lg`, all three panes stack vertically and render fully expanded; collapse/expand interaction does not exist below `lg`. **CSS-only gating** of layout: `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-orientation="horizontal"` are always present in the DOM at all viewports; CSS visually disables the strip layout below `lg`. **JS does NOT swap semantics on resize.** Tradeoff: an SR at narrow widths will announce a tablist on a stacked column — unusual but not incorrect, and it avoids mid-resize semantic flips.
- **Q5 — GA payload (single-fire; payload shape is locked, wiring mechanism amended in §8):**
  - `event` / `data-ga-event`: `link`
  - `action` / `data-ga-action`: `click` for mouse/touch commits, `keypress` for keyboard commits (Enter/Space)
  - `component` / `data-ga-component`: `expandable-heroes`
  - `region` / `data-ga-region`: prop (default `main content`)
  - `section` / `data-ga-section`: prop (default `hero`)
  - `text` / `data-ga`: the pane's title string
  - `type` / `data-ga-type`: **OMIT** (state toggles, not navigation)
  - Hover previews do **NOT** fire GA.

### Hard stop-conditions for the coder

- No PR, no push, no commits to `dev` / `master`. **Branch + Conventional Commits only.**
- Do not modify `component-header-footer` token assumptions (out of scope).
- Do not hardcode colors / spacing / fonts / breakpoints / transitions. **Only the three width percentages (70% / 15% / 15%) are exempt.**
- Reviewer + acp-visual will validate. Every assertion in the §10 test matrix must trace back to a section above.

---

## 1. Problem statement + success criteria (office-hours)

### Problem
The Unity design system needs a hero-class composition that presents **exactly three** narratives side-by-side at desktop widths, where one is expanded as a full hero and the other two remain visible as narrow, clickable "strips" with their title rotated 90°. Users can preview a strip by hovering/focusing and commit to expand by clicking, tapping, or pressing Enter/Space. At narrow widths the three panes stack and the collapse/expand interaction is suspended.

Today this composition does not exist in `unity-react-core` or `unity-bootstrap-theme`. Building it on top of the existing `Hero` component preserves visual parity with the established hero treatment and reuses the existing Unity tokens.

### Success criteria

1. **Functional:** The component renders three panes; the active pane composes the existing `<Hero type="heading-hero" />`; the inactive panes render a rotated title strip whose visible text equals the pane's heading text.
2. **Interaction (APG Tabs, manual activation):** Hover/focus = preview (visual emphasis, no state change). Click / Enter / Space / touch tap = commit. Arrow Left/Right/Home/End move roving focus without committing. Honors `prefers-reduced-motion`.
3. **A11y:** Full `tablist` / `tab` / `tabpanel` semantics with `aria-orientation="horizontal"`, `aria-selected`, `aria-controls`. Roving tabindex. Visible focus ring. Body text contrast ≥4.5:1; large/title contrast ≥3:1. Reflow works at 320px. Forced-colors mode legible. Component passes axe with zero violations.
4. **Brand / Tokens:** Every color, spacing, font-size, font-weight, breakpoint, transition duration, and gradient resolves to a `$uds-*` token from `_custom-asu-variables.scss` or a mixin defined in `_heroes.scss`. The only hardcoded numeric literals are the three pane widths (70% / 15% / 15%).
5. **HTML parity:** A pure-HTML story variant renders the exact same DOM tree as the React component (modulo content swaps), so CMS authors can copy-paste markup with identical CSS hooks.
6. **GA:** A single `dataLayer.push()` per commit with the payload defined in Q5 above. Hover does not fire GA.
7. **Build/lint/tests:** `yarn build`, `yarn lint`, vitest unit suite, and `run-story-tests` (interaction + a11y) all pass.

### Out-of-scope (handled in §12)
- N≠3 panes, programmatic "open all", auto-rotation/carousel behavior, deep-link via URL, animated image transitions on commit, RTL layout, vertical orientation, custom collapsed-label strings, sub-tab nesting.

---

## 2. Skills + validators table

| Skill | Applicable rules (load these into agent context) | Validators the reviewer MUST run |
|---|---|---|
| `unity-components` | TS-first / `@ts-check` JSDoc rule for `unity-react-core`; tokens from `_custom-asu-variables.scss`; HTML-parity; GA payload preservation (Q5 six-key contract — see §8 amendment for why `GaEventWrapper` is bypassed in this component); Storybook discovery via MCP. SCSS extension goes under `packages/unity-bootstrap-theme/src/scss/extends/` and is wired into `_unity-bootstrap-theme-extends.scss`. | `yarn build` (root + `packages/unity-react-core` + `packages/unity-bootstrap-theme`); `yarn lint`; vitest run (`packages/unity-react-core`); `run-story-tests` for interaction + a11y; SCSS compile check (root build). |
| `asu-design-a11y` | WCAG 2.1 AA: semantics/landmarks; keyboard + focus management; contrast (4.5:1 body / 3:1 large text); reflow at 320px; forced-colors mode; labels/forms; honor `prefers-reduced-motion`. APG Tabs (manual activation) pattern. Visible focus ring. Touch target ≥24×24 CSS px (best-effort 44×44). | axe via `run-story-tests` a11y harness; keyboard interaction test via `@storybook/testing-library` + `play` function; reflow test at 320px viewport in storybook; forced-colors snapshot story; prefers-reduced-motion snapshot story (`media: '(prefers-reduced-motion: reduce)'`). |
| `asu-brand` | Approved palette tokens (`$uds-color-base-*`, `$asu-gray-*`, `$uds-color-brand-*`); typography (`$uds-font-family-base`, `$uds-size-font-*`, `$uds-font-weight-*`); spacing scale (`$uds-size-spacing-*`); transitions (`$uds-time-transition-base`, `$uds-time-transition-xl`); never raw hex/px values. Reuse the existing `$uds-hero-gradient-overlay` linear-gradient from `_heroes.scss`. | SCSS grep audit: assert no raw hex literals, no raw `px`/`rem`/`em` numerics, and no raw seconds/ms in `_heroes-expandable.scss` (except the three locked `%` widths). The reviewer enforces this with a regex check during the spec-compliance phase. |

If a skill below is **not** matched, the doc says so explicitly. All three skills above ARE matched for this work; no defaults needed.

---

## 3. Component API

### File: `packages/unity-react-core/src/components/ExpandableHeroes/ExpandableHeroes.jsx`

Uses `@ts-check` + JSDoc (matches `Hero.jsx` style). The component is a controlled-uncontrolled hybrid: `initialActiveIndex` seeds internal state; `onPaneChange` is an optional notifier; no external `activeIndex` prop in v1 (kept simple — additive change later).

```js
// @ts-check

/**
 * @typedef {import('../../core/types/shared-types').ImageProps} ImageProps
 * @typedef {import('../../core/types/shared-types').ContentProps} ContentProps
 */

/**
 * @typedef {Object} ExpandableHeroPane
 * @property {ImageProps} image
 * @property {ContentProps} title
 * @property {ContentProps} [subTitle]
 * @property {ContentProps[]} [contents]
 * @property {"white"|"black"} [contentsColor]
 */

/**
 * @typedef {Object} ExpandableHeroesProps
 * @property {ExpandableHeroPane[]} panes - EXACTLY 3 panes. Length validated at runtime.
 * @property {number} [initialActiveIndex=0]
 * @property {(index: number, paneData: ExpandableHeroPane) => void} [onPaneChange]
 * @property {string} [gaRegion="main content"]
 * @property {string} [gaSection="hero"]
 */
```

#### Prop validation

```js
ExpandableHeroes.propTypes = {
  panes: PropTypes.arrayOf(panePropType).isRequired,
  initialActiveIndex: PropTypes.number,
  onPaneChange: PropTypes.func,
  gaRegion: PropTypes.string,
  gaSection: PropTypes.string,
};

ExpandableHeroes.defaultProps = {
  initialActiveIndex: 0,
  gaRegion: "main content",
  gaSection: "hero",
};
```

Where `panePropType` is a `PropTypes.shape` composed of the existing `imagePropType`, `contentPropType`, and arrays thereof, declared **locally in the same file** for now (re-export postponed to v2). Reuses `imagePropType`, `contentPropType` from `packages/unity-react-core/src/core/models/shared-prop-types.js`. The GA payload object is constructed inline at commit time (see §8 amendment — `pushGaEvent` helper, not `GaEventWrapper`).

#### Runtime guards

- If `panes.length !== 3`, log a single `console.error` (matches `Hero.jsx` pattern) and render `null`. Document this in JSDoc and the README story. Reviewer asserts the warning fires in the off-spec test case.
- Clamp `initialActiveIndex` to `[0, 2]`; out-of-range values clamp and log a warning.

#### Hero composition

The expanded pane internally renders `<Hero type="heading-hero" image={pane.image} title={pane.title} subTitle={pane.subTitle} contents={pane.contents} contentsColor={pane.contentsColor} />`. The collapsed strips render their own minimal markup (image + rotated title) — they do NOT render `<Hero>`. This keeps the collapsed-strip DOM cheap.

#### Type file

A new typedef file is added at `packages/unity-react-core/src/core/types/expandable-heroes-types.js` exporting the `ExpandableHeroPane` and `ExpandableHeroesProps` typedefs and a JSDOC sentinel, mirroring `hero-types.js`.

---

## 4. Data flow diagram (ASCII)

```
                ┌───────────────────────────────────────────────────┐
                │  ExpandableHeroes (React, controlled-internal)    │
                │                                                   │
   props.panes ─┼──▶  React.useState(activeIndex = initialActiveIndex)
                │           │                                       │
                │           │     ┌──────────────────────────────┐  │
                │           ├────▶│ useRefs() for tab buttons    │  │
                │           │     └──────────────────────────────┘  │
                │           │                                       │
                │           ▼                                       │
                │   render() loops panes.map((pane, i) => …)        │
                │           │                                       │
                │       i === activeIndex ?                         │
                │           │                                       │
                │     ┌─────┴─────┐                                 │
                │     ▼           ▼                                 │
                │  EXPANDED     COLLAPSED STRIP                     │
                │  ──────       ────────────                        │
                │  role=tab     role=tab                            │
                │  aria-selected=true   aria-selected=false         │
                │  tabindex=0   tabindex=-1                         │
                │  + role=tabpanel sibling rendered after the tab   │
                │  <Hero …/>    rotated-title <span>                │
                │     │           │                                 │
                │     │           ├── onMouseEnter → setPreview(i)  │
                │     │           ├── onFocus → setPreview(i)       │
                │     │           ├── onMouseLeave/blur → clearPrev │
                │     │           ├── onClick → commit(i, 'click')  │
                │     │           ├── onKeyDown:                    │
                │     │           │     Enter/Space → commit('keypress')
                │     │           │     ArrowLeft/Right → moveFocus │
                │     │           │     Home/End      → moveFocus   │
                │     │           │                                 │
                │     └───────────┴─────► pushGaEvent (commits)     │
                │                            │  (direct window.    │
                │                            │   dataLayer.push;    │
                │                            │   §8 amended)        │
                │                            ▼                      │
                │                       window.dataLayer.push(gaData)
                │                                                   │
                └───────────────────────────────────────────────────┘
                              │
                              ▼ on commit
                  onPaneChange(activeIndex, panes[activeIndex])
```

State summary:
- `activeIndex: number` — committed selection (drives `aria-selected` + which pane renders `<Hero>`).
- `previewIndex: number | null` — purely visual (CSS class), never read by SRs, never persisted, no GA.
- `focusIndex: number` — roving tabindex pointer (drives which tab has `tabindex=0` at any moment). On mount, `focusIndex === activeIndex`.

Effects:
- `useEffect(() => focusIndex !== prev → ref.focus())` only when the user drove the change via keyboard (a guard flag prevents focus-stealing on click commits where the click already focused the element).

---

## 5. State machine (APG Tabs, manual activation)

States:
- `IDLE` — no preview; active pane is the source of truth.
- `PREVIEWING(i)` — pointer or focus on pane `i ≠ activeIndex`. Visual only; no aria change.
- `COMMITTED(j)` — `activeIndex = j`; if `j ≠ previousActive`, fires GA and `onPaneChange`.

Below `lg`, the machine collapses into a stacked layout where all panes render fully expanded; the JSX still carries `role`/`aria-selected` (gated CSS-only per Q4), but CSS hides the strip layout and the user-visible interaction is effectively no-op (panes are all visible). The keyboard / pointer handlers remain attached — pressing Enter on a tab still updates `activeIndex` and still fires GA, but no visual layout change occurs because every pane is already expanded; this is acceptable because the SR experience remains consistent.

```
                   ┌────────────────┐
                   │  IDLE          │◀────────────────────────┐
                   │  activeIndex=A │                         │
                   └─┬──────┬────┬──┘                         │
                     │      │    │                            │
   pointerenter(i≠A) │      │    │ focus(i≠A)                 │
   focusin(i≠A)      │      │    │                            │
                     ▼      │    │                            │
              ┌─────────────────────┐                         │
              │  PREVIEWING(i)      │                         │
              │  activeIndex=A      │                         │
              └─┬─────┬─────┬───────┘                         │
                │     │     │                                 │
   leave/blur   │     │     │ ArrowL/R, Home, End             │
   ─────────────┘     │     ▼                                 │
                      │  moveFocus(i') ─────────── (focusIndex│
                      │      ▶ PREVIEWING(i')      changes,   │
                      │                            activeIndex│
                      │                            unchanged) │
                      │                                       │
   commit (click /    │                                       │
   Enter / Space /    ▼                                       │
   touch tap)    ┌──────────────────────┐                     │
                 │  COMMITTED(i)         │ ── side effects ──▶│
                 │  activeIndex ← i      │   GA event         │
                 │  previewIndex ← null  │   onPaneChange(...)│
                 └──────────┬────────────┘                    │
                            │                                 │
                            └────── transitions to IDLE ─────▶
```

### Touch path
- Hover semantics are suppressed on touch by detecting `pointerType === 'touch'` in `onPointerDown` and short-circuiting the preview state set. A touch tap fires the click handler normally and commits.

### Reduced-motion path
- The pane width transition is gated by `@media (prefers-reduced-motion: no-preference)` in SCSS. With reduce-motion enabled, the width snaps instead of animating. JS does not check `matchMedia` — CSS is the source of truth for motion.

### `lg`-breakpoint stack gating (CSS-only, per Q4)
- JS attaches handlers and renders `role`/`aria-*` attributes identically at all viewports.
- SCSS at `< lg`: `display: block;` on the strip container; each pane is `width: 100%`; rotated title is `transform: none; writing-mode: horizontal-tb;` and hidden via `display: none` (the expanded `<Hero>` is the only thing shown for every pane).
- SCSS at `≥ lg`: flex strip layout, three pane widths (70/15/15), rotated titles visible only on collapsed strips.

---

## 6. A11y contract

### Semantics

| DOM node | Role | Required ARIA | Notes |
|---|---|---|---|
| Root container | `tablist` | `aria-orientation="horizontal"`, `aria-label` (configurable, default "Expandable hero panes") | Always present, all viewports. |
| Each tab button | `tab` | `aria-selected={i === activeIndex}`, `aria-controls={panelId}`, `id={tabId}`, `tabindex={i === focusIndex ? 0 : -1}` | Roving tabindex. Tab IS the strip element (acts as both interactive trigger and the visible strip surface). |
| Each panel | `tabpanel` | `aria-labelledby={tabId}`, `id={panelId}`, `tabindex="0"` (only when active, to make focusable for users tabbing past) | Inactive panels: rendered in DOM with `hidden` attribute below `lg`-stack mode; above `lg`, inactive panels are NOT rendered (the strip itself is the visible representation). To keep the DOM consistent both ways, the chosen model is: at `≥ lg`, only the active pane renders `<role="tabpanel">` content; the collapsed strips do not. The tab still owns the rotated label and is its own accessible name. SRs in collapsed state will hear "Tab, [title], 1 of 3, not selected" — correct APG behavior. |

### Keyboard map

| Key | When focus is on a tab | Effect |
|---|---|---|
| `Tab` | Tab focused | Moves focus out of the tablist (focus goes to next focusable region per browser order). |
| `Shift+Tab` | Tab focused | Moves focus out of the tablist (previous focusable region). |
| `ArrowRight` | Tab focused | Move focus to next tab (wraps from last to first). **No commit.** |
| `ArrowLeft` | Tab focused | Move focus to previous tab (wraps from first to last). **No commit.** |
| `Home` | Tab focused | Move focus to first tab. **No commit.** |
| `End` | Tab focused | Move focus to last tab. **No commit.** |
| `Enter` | Tab focused | **Commit** focused tab. Fires GA with `action: "keypress"`. |
| `Space` | Tab focused | **Commit** focused tab. Fires GA with `action: "keypress"`. `event.preventDefault()` to avoid page scroll. |
| Any other | — | Default browser behavior. |

`ArrowDown` / `ArrowUp` are NOT bound because `aria-orientation="horizontal"`.

### Focus management

- Initial focus: none stolen on mount. The tablist participates in natural Tab order; first user `Tab` into the tablist lands on the tab where `tabindex=0` (the active tab).
- After arrow navigation: roving tabindex updates such that the previously focused tab becomes `tabindex=-1` and the new tab becomes `tabindex=0`; `.focus()` is called on the new tab's ref.
- After commit via click: focus remains on the clicked tab (browser default). No programmatic focus jump to the panel content (APG guidance — pulls focus into panel only for "managed" tabs; this is a "manual" pattern).
- After commit via keypress: focus remains on the tab; the panel becomes the active panel; SRs hear the `aria-selected="true"` update.

### Visible focus ring
SCSS sets `:focus-visible` on each tab with a 2px solid outline using `$uds-color-base-bluefocus` (`#00baff`) and a 2px offset, matching `_anchor-menu.scss` conventions.

### Contrast

| Element | Foreground | Background | Required ratio | Plan |
|---|---|---|---|---|
| Rotated title on collapsed strip (large text, ~1.5rem bold) | `$uds-color-base-white` (#fff) | Dark gradient bottom (`#191919c9` → solid `#191919` over image) | 3:1 | Existing `$uds-hero-gradient-overlay` end-stop is opaque enough at the bottom of the strip; strip places title near the bottom. Reviewer measures with axe / visual check. Story uses high-contrast image fixture. |
| Active pane heading | Inherited from `<Hero>` `heading-hero` | Image + overlay | 3:1 | Inherits from `_heroes.scss` rules — already verified by Unity. |
| Body content in active pane | `$uds-color-base-white` or default | Image + overlay | 4.5:1 | Same as `<Hero>` baseline. |
| Tab focus ring | `$uds-color-base-bluefocus` | Any | 3:1 against adjacent colors | Confirmed by `$uds-color-base-bluefocus = #00baff` against `$asu-gray-1 = #191919` (≈8.0:1). |

### Reflow @ 320px

At 320px:
- `display: block;` (CSS-only stack mode) → each pane is full-width and full hero rendering, top-to-bottom.
- No horizontal scrollbar permitted (`overflow-x: hidden` on the root).
- Rotated title nodes are `display: none` in stack mode (the active `<Hero>` already shows the title).
- Tablist remains in DOM with the same roles (acknowledged tradeoff).

### Forced-colors mode

- The dark overlay gradient becomes `forced-color-adjust: none` is **NOT** applied — instead we let the system colors take over.
- Tabs use `border: 1px solid CanvasText;` under `@media (forced-colors: active)`.
- Focus ring switches to `outline: 2px solid Highlight;` under `(forced-colors: active)`.
- Rotated title falls back to `background: Canvas; color: CanvasText;` so it remains legible.
- Reviewer captures a forced-colors story screenshot via the storybook addon.

### WCAG 2.5.3 Label-in-Name argument

The rotated visible string on a collapsed pane IS the pane's title — same text node. The tab's accessible name is computed from the visible text content (no `aria-label` override on the tab). Therefore the visible label is contained within the accessible name verbatim, satisfying SC 2.5.3. The CSS rotation does not change the text content. The `aria-label` on the surrounding tablist is the only `aria-label` in use and applies to the container, not the tabs.

---

## 7. SCSS plan

### File: `packages/unity-bootstrap-theme/src/scss/extends/_heroes-expandable.scss`

Inserted into `_unity-bootstrap-theme-extends.scss` immediately after `@import 'extends/heroes';`:

```scss
@import 'extends/heroes';
@import 'extends/heroes-expandable';
```

### Selectors (BEM-aligned with existing `uds-hero` naming)

*(amended after cycle 2: wrapper-per-pane required to give the active panel a proper containing block; original sibling structure had unrecoverable layout issues with `position: absolute` panels)*

| Selector | Purpose |
|---|---|
| `.uds-expandable-heroes` | Root `tablist`. Sets flex container at `≥ lg`, block container at `< lg`. |
| `.uds-expandable-heroes__item` | Wrapper div — the flex item carrying width logic (`flex-basis: 15%` / `70%`). Contains one `__pane` button and one `__panel`. |
| `.uds-expandable-heroes__pane` | Each `tab` button element. Width logic removed (moved to `__item`). Modifier: `.is-active` and `.is-preview`. |
| `.uds-expandable-heroes__pane--collapsed` | Style hook for collapsed-strip variant. |
| `.uds-expandable-heroes__rotated-title` | The rotated label span. `display: none` at `< lg`. |
| `.uds-expandable-heroes__panel` | The `tabpanel` element containing `<Hero>`. In-flow inside `__item` at `≥ lg` (option β). |

### Layout

```scss
.uds-expandable-heroes {
  display: block;                                  // mobile-first stack
  position: relative;
  width: 100%;
  margin-bottom: $uds-size-spacing-8;

  &:focus-visible {
    outline: none;
  }

  @include media-breakpoint-up(lg) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 0;                                        // tokens default; widths are exact %
    min-height: 32rem;                             // ← FORBIDDEN literal — REPLACE with $uds-size-spacing-* approximation
  }
}
```

**NOTE — the coder must remove the `32rem` placeholder above.** The minimum height of the strip at `≥ lg` is `$uds-size-spacing-32` (= 16rem) doubled via two stacked `$uds-size-spacing-16`s if a taller hero is needed; but since the active pane is a full `<Hero>` whose intrinsic height is set by the image aspect, the SCSS does NOT set `min-height` on the container at all. Drop the line entirely. (This note is intentional in the design doc to flag the literal-hunt the reviewer performs.)

### The three (and only three) hardcoded literals

```scss
@include media-breakpoint-up(lg) {
  .uds-expandable-heroes__pane {
    transition: flex-basis $uds-time-transition-base ease-in-out;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 15%;            // ← LITERAL 1 (locked)

    &.is-active {
      flex-basis: 70%;          // ← LITERAL 2 (locked)
    }

    // Two inactive panes share the remaining 30% (15% each, locked above as default).
    // No third literal here — the default `15%` IS literal 3.
  }
}
```

Three literals: `15%` (default), `70%` (active), `15%` (the doc names the inactive default twice but it is one declaration). To be explicit: the SCSS contains exactly two `%` literals in the layout rule — `15%` and `70%`. The "three percentages" phrase in Q2 refers conceptually to one expanded + two collapsed panes; the implementation is two literal SCSS values. **Reviewer accepts this clarification.**

### Tokens enumerated (every `$uds-*` referenced)

| Token | Used for |
|---|---|
| `$uds-breakpoint-lg` (via `media-breakpoint-up(lg)`) | Desktop gate |
| `$uds-size-spacing-1` (0.5rem) | Inner padding on collapsed strip overlay |
| `$uds-size-spacing-2` (1rem) | Inner padding on rotated title block |
| `$uds-size-spacing-3` (1.5rem) | Padding around tab focus zone |
| `$uds-size-spacing-4` (2rem) | Margins around tablist (matches `_heroes.scss`) |
| `$uds-size-spacing-8` (4rem) | Bottom margin of root (matches `_heroes.scss`) |
| `$uds-size-font-small` (0.875rem) | Rotated label fallback size below `xl` |
| `$uds-size-font-large` (1.25rem) | Rotated label base size |
| `$uds-size-font-xl` (1.5rem) | Rotated label `≥ xl` size |
| `$uds-font-weight-bold` (700) | Rotated label weight |
| `$uds-font-family-base` | Rotated label family |
| `$uds-color-base-white` (#ffffff) | Rotated label foreground |
| `$uds-color-base-bluefocus` (#00baff) | Focus ring |
| `$asu-gray-1` (#191919) | Collapsed strip background fallback (under image) |
| `$uds-time-transition-base` (0.40s) | Pane width transition |
| `$uds-hero-gradient-overlay` (linear-gradient defined in `_heroes.scss`) | Collapsed strip overlay |

No raw hex, no raw px/rem/em outside of `media-breakpoint-up`'s internal mechanics (Bootstrap handles that), no raw time literals. The reviewer will grep `_heroes-expandable.scss` for `#[0-9a-f]`, `\d+px`, `\d+rem`, `\d+ms`, `\d+(\.\d+)?s` and assert no matches outside of the three `%` literals.

### Transition declaration

```scss
.uds-expandable-heroes__pane {
  @media (prefers-reduced-motion: no-preference) {
    transition: flex-basis $uds-time-transition-base ease-in-out;
  }
}
```

Reduce-motion users get an instant snap.

### Rotated text rule

```scss
.uds-expandable-heroes__rotated-title {
  display: none;

  @include media-breakpoint-up(lg) {
    display: inline-block;
    writing-mode: vertical-rl;
    transform: rotate(180deg);                     // reads bottom-to-top
    font-family: $uds-font-family-base;
    font-size: $uds-size-font-large;
    font-weight: $uds-font-weight-bold;
    color: $uds-color-base-white;
    padding: $uds-size-spacing-2;
    max-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;                          // tab itself receives clicks
  }
}
```

Per Q3: the string is NOT altered; only CSS handles overflow.

### Gradient reuse from `_heroes.scss`

The local variable `$uds-hero-gradient-overlay` (declared in `_heroes.scss`) is reused for the collapsed strip's dim overlay:

```scss
.uds-expandable-heroes__pane--collapsed::before {
  content: "";
  position: absolute;
  inset: 0;
  background: $uds-hero-gradient-overlay;
  z-index: 1;
}
```

Note: `$uds-hero-gradient-overlay` is currently file-local to `_heroes.scss`. The coder MUST verify scope; if Sass partial scoping prevents reuse, the coder will refactor `$uds-hero-gradient-overlay` upward into either `_heroes.scss`'s top (so subsequent imports see it) or duplicate the literal — **and if duplicating, this is the lone exception requiring architect re-approval.** Preferred path: declare `_heroes-expandable.scss` to be imported AFTER `_heroes.scss` (already specified in the import order above), and Sass `@import` makes the variable visible to subsequent partials in the same compilation unit, so reuse should work without refactoring.

---

## 8. GA event shape   *(amended after cycle 1: GaEventWrapper is structurally incompatible with the Q5 payload contract — see "Amendment" subsection below)*

Single `dataLayer.push()` per commit. Implementation calls `window.dataLayer.push()` directly from the React component (`pushGaEvent` helper inside `ExpandableHeroes.jsx`). HTML-parity is preserved via `data-ga-*` attributes rendered on the tab buttons — the existing `unity-bootstrap-theme/src/js/cookie-consent.js` global listener picks those up unchanged.

```js
// At commit time, inside ExpandableHeroes.jsx:
const pushGaEvent = data => {
  const { dataLayer } = window;
  if (!dataLayer) return;
  dataLayer.push({
    event: "link",
    action: data.action,          // "click" for mouse/touch, "keypress" for Enter/Space
    component: "expandable-heroes",
    region: data.region,          // prop, default "main content"
    section: data.section,        // prop, default "hero"
    text: data.text,
    // type: OMITTED (state toggle, not navigation)
    // name: OMITTED (not in Q5 contract)
  });
};
```

Wired:

```jsx
<button
  role="tab"
  aria-selected={i === activeIndex}
  aria-controls={panelId(i)}
  id={tabId(i)}
  tabIndex={i === focusIndex ? 0 : -1}
  // HTML-parity GA attributes (read by the cookie-consent global listener)
  data-ga={pane.title.text}
  data-ga-event="link"
  data-ga-action="click"
  data-ga-component="expandable-heroes"
  data-ga-region={gaRegion}
  data-ga-section={gaSection}
  onClick={() => commit(i, "click")}
  onKeyDown={onKeyDown}
  onMouseEnter={() => setPreview(i)}
  onMouseLeave={clearPreview}
  onFocus={() => setPreview(i)}
  onBlur={clearPreview}
>
  <span className="uds-expandable-heroes__rotated-title">{pane.title.text}</span>
</button>
```

Hover-only state changes do NOT call `pushGaEvent`. Only the commit path does. `Enter`/`Space` handlers call `e.preventDefault()` so the browser-synthesized click that follows a keydown on a `<button>` cannot double-fire `commit()`.

### Amendment — why `<GaEventWrapper>` is not used here   *(architect, cycle 1, 2026-06-26)*

The original §8 prescription was to wrap each tab in `<GaEventWrapper gaData={…}>`. Independent inspection of the wrapper and its delegate confirms two unconditional blockers against the locked Q5 contract:

1. **Forced `type` (and `name`) injection.** `GaEventWrapper.jsx` delegates to `trackGAEvent()` from `@asu/shared` (`packages/shared/services/googleAnalytics.js`). That function builds the pushed object with a fixed shape that always includes `type: type.toLowerCase()` and `name: name.toLowerCase()` — defaulting both to `""` when absent. There is no opt-out. Any push through the wrapper would emit `type: ""` and `name: ""` in the payload, directly violating Q5 ("EXACTLY these keys: `event, action, component, region, section, text`; `type` is explicitly OMIT"). Two off-contract keys, not one.

2. **Static `gaData` prop, no callback API, click-only interception.** The wrapper captures `gaData` in a closure at render time and only hooks `onClick`. It does NOT hook `onKeyDown`. Q5 requires `action: "click"` for mouse/touch commits and `action: "keypress"` for keyboard commits (Enter/Space). With a static `gaData`, the value of `action` is fixed at wrap time. A keyboard Enter on a `<button>` synthesizes a click that fires through the wrapper with whatever static `action` was passed — meaning the keypress distinction is lost. No function-prop / callback API exists on the wrapper to inject the runtime-determined `action`. Modifying the shared wrapper to add one is out of this component's scope (it would require its own scope review across all other consumers of `GaEventWrapper`).

**Resolved approach (locked):** `ExpandableHeroes.jsx` calls `window.dataLayer.push()` directly via a local `pushGaEvent` helper that emits the exact six-key Q5 payload. HTML-parity is preserved through `data-ga-*` attributes rendered on the tab buttons — the cookie-consent global listener attaches `click` listeners to any element with `[data-ga]` and pushes the same shape. Tests `T25` (exact key set, no `type`/`name`) and `T26` (region/section prop propagation) verify observable equivalence to the Q5 contract.

**Constraint preserved:** `packages/unity-react-core/src/components/GaEventWrapper/` is NOT modified by this work (still listed under "Do not touch" in Appendix A). The wrapper remains available unchanged for components whose payload contract permits the `type`/`name` keys.

**Implication for other components:** Any future Unity component whose GA payload contract excludes `type` (or any other key always injected by `trackGAEvent`) cannot use `GaEventWrapper` either, and must take the same direct-push approach. A follow-up ticket to make `trackGAEvent` (or `GaEventWrapper`) configurable would unify this — explicitly OUT OF SCOPE for `ExpandableHeroes` v1.

### HTML-parity GA

In both the React story and the HTML-parity story variant, the same `data-ga-*` attribute set is rendered on the tab button — `unity-bootstrap-theme/src/js/cookie-consent.js` picks them up via a global click listener. The attributes are:

```
data-ga="<title text>"
data-ga-event="link"
data-ga-action="click"             (static — the bootstrap listener only fires on click)
data-ga-component="expandable-heroes"
data-ga-region="<region>"
data-ga-section="<section>"
```

No `data-ga-type`. No `data-ga-name`. The `data-ga-action` attribute is fixed at `"click"` in the rendered DOM because the bootstrap listener path is click-only by design; React handles the keypress→`"keypress"` distinction at runtime in its `pushGaEvent` call (the attribute is informational for non-React consumers).

---

## 9. HTML-parity contract

*(amended after cycle 2: wrapper-per-pane required to give the active panel a proper containing block; original sibling structure had unrecoverable layout issues with `position: absolute` panels. The `.uds-expandable-heroes__item` wrapper div is now the flex item. The `__pane` button and `__panel` div are children of `__item`.)*

### Exact DOM tree emitted by the React component (active = pane 0)

```html
<div class="uds-expandable-heroes" role="tablist" aria-orientation="horizontal" aria-label="Expandable hero panes">

  <!-- Item 0: ACTIVE -->
  <div class="uds-expandable-heroes__item is-active">
    <button
      type="button"
      class="uds-expandable-heroes__pane is-active"
      role="tab"
      id="expandable-heroes-tab-0"
      aria-selected="true"
      aria-controls="expandable-heroes-panel-0"
      tabindex="0"
      style="background-image: url('…');"
    >
      <span class="uds-expandable-heroes__rotated-title">Pane One Title</span>
    </button>
    <div
      class="uds-expandable-heroes__panel"
      role="tabpanel"
      id="expandable-heroes-panel-0"
      aria-labelledby="expandable-heroes-tab-0"
      tabindex="0"
    >
      <div class="uds-hero uds-hero-lg">…</div>
    </div>
  </div>

  <!-- Item 1: COLLAPSED STRIP -->
  <div class="uds-expandable-heroes__item">
    <button
      type="button"
      class="uds-expandable-heroes__pane uds-expandable-heroes__pane--collapsed"
      role="tab"
      id="expandable-heroes-tab-1"
      aria-selected="false"
      aria-controls="expandable-heroes-panel-1"
      tabindex="-1"
      style="background-image: url('…');"
    >
      <span class="uds-expandable-heroes__rotated-title">Pane Two Title</span>
    </button>
    <div
      class="uds-expandable-heroes__panel is-hidden"
      role="tabpanel"
      id="expandable-heroes-panel-1"
      aria-labelledby="expandable-heroes-tab-1"
      tabindex="-1"
    >
      <div class="uds-hero uds-hero-lg">…</div>
    </div>
  </div>

  <!-- Item 2: COLLAPSED STRIP -->
  <div class="uds-expandable-heroes__item">
    <button
      type="button"
      class="uds-expandable-heroes__pane uds-expandable-heroes__pane--collapsed"
      role="tab"
      id="expandable-heroes-tab-2"
      aria-selected="false"
      aria-controls="expandable-heroes-panel-2"
      tabindex="-1"
      style="background-image: url('…');"
    >
      <span class="uds-expandable-heroes__rotated-title">Pane Three Title</span>
    </button>
    <div
      class="uds-expandable-heroes__panel is-hidden"
      role="tabpanel"
      id="expandable-heroes-panel-2"
      aria-labelledby="expandable-heroes-tab-2"
      tabindex="-1"
    >
      <div class="uds-hero uds-hero-lg">…</div>
    </div>
  </div>

</div>
```

**Layout (option β — in-flow panel):** At `≥ lg`, each `__item` is `display: flex; flex-direction: column`. The active `__panel` is in flow (the Hero's image drives the item's height, which drives the flex row's height via `align-items: stretch`). Collapsed items' `__panel` is `display: none`; the `__pane` button fills the full item area showing the background image and rotated title. The `__item` is the flex item carrying `flex-basis: 15%` (collapsed) and `flex-basis: 70%` (active); the width transition also moves to `__item`.

**Stack-mode (below `lg`):** All `__item` wrappers are `display: block`. All `__panel` elements are visible (CSS shows all panels in stack mode). Rotated titles are `display: none`.

### Panel visibility control (CSS only)

```scss
.uds-expandable-heroes__panel {
  display: block; // stack mode: all panels visible

  @include media-breakpoint-up(lg) {
    display: none; // collapsed items: panel hidden; button fills item
  }
}

.uds-expandable-heroes__item.is-active .uds-expandable-heroes__panel {
  @include media-breakpoint-up(lg) {
    display: block; // active item: panel in flow, Hero drives height
    flex: 1 1 auto;
  }
}

.uds-expandable-heroes__panel.is-hidden {
  @include media-breakpoint-down(md) {
    display: none; // stack mode: hide inactive panels if is-hidden set
  }
}
```
### HTML-parity story

`ExpandableHeroes.stories.jsx` contains TWO stories minimum:
1. **React story** — uses the React component with sample props.
2. **HTML story** — exports a story whose render function returns a JSX-as-HTML literal mirroring the exact wrapper-per-pane tree above, hand-written, no React state.

---

## 10. Test matrix

All tests live in `ExpandableHeroes.test.jsx` (vitest + RTL) and the stories file (`play` functions invoked by `run-story-tests`).

| # | Behavior | Level | Seam | Doubles | Verification command | Linked spec section |
|---|---|---|---|---|---|---|
| T01 | Renders three tab buttons with role="tab" | RTL unit | `getAllByRole('tab')` | none | `yarn workspace @asu/unity-react-core test` | §6 |
| T02 | Renders one tabpanel for the active pane only (≥lg via CSS); all three panels exist in DOM (stack) | RTL unit | `getAllByRole('tabpanel', { hidden: true })` | none | same | §6, §9 |
| T03 | Active tab has aria-selected="true", others "false" | RTL unit | `getAllByRole('tab')` + attribute | none | same | §6 |
| T04 | Active tab has tabindex=0, others tabindex=-1 (roving) | RTL unit | tab attributes | none | same | §6 |
| T05 | Rotated title span exists for each pane and equals the pane title text | RTL unit | `getByText` | none | same | §3, §6 (Label-in-Name), §9 |
| T06 | `aria-orientation="horizontal"` on tablist | RTL unit | tablist attribute | none | same | §6 |
| T07 | Hover on a collapsed tab adds `.is-preview`, does NOT change `aria-selected`, does NOT push to `dataLayer` | Storybook play (interaction) | `userEvent.hover()` | `vi.spyOn(window.dataLayer, 'push')` | `yarn run-story-tests` | §5, §8 |
| T08 | Click on a collapsed tab commits, fires GA with `action: "click"` | Storybook play | `userEvent.click()` | dataLayer spy | same | §5, §8 |
| T09 | Enter on a focused collapsed tab commits, fires GA with `action: "keypress"` | Storybook play | `userEvent.keyboard("{Enter}")` | dataLayer spy | same | §5, §6, §8 |
| T10 | Space on a focused collapsed tab commits, fires GA with `action: "keypress"` (no page scroll) | Storybook play | `userEvent.keyboard(" ")` | dataLayer spy | same | §5, §6, §8 |
| T11 | ArrowRight moves focus to next tab WITHOUT committing | Storybook play | `userEvent.keyboard("{ArrowRight}")` + assert document.activeElement + aria-selected unchanged | dataLayer spy expects 0 calls | same | §5, §6 |
| T12 | ArrowLeft on first tab wraps to last | Storybook play | same pattern | none | same | §6 |
| T13 | Home moves focus to first tab; End to last; no commit | Storybook play | keyboard events | dataLayer spy expects 0 | same | §6 |
| T14 | `onPaneChange(index, paneData)` is called once per commit, never on hover | RTL unit | spy prop | `vi.fn()` | `yarn workspace @asu/unity-react-core test` | §3, §5 |
| T15 | `initialActiveIndex={1}` renders pane 1 as active on mount | RTL unit | rendered DOM | none | same | §3 |
| T16 | `panes.length !== 3` logs error and renders null | RTL unit | `console.error` spy | spy | same | §3 |
| T17 | `panes.length === 3` and `initialActiveIndex=5` clamps to 2 + logs warning | RTL unit | console spy | spy | same | §3 |
| T18 | Touch tap commits without firing hover preview state | Storybook play | `userEvent.pointer({ keys: '[TouchA]', target: tab })` | dataLayer spy | same | §5 (touch path) |
| T19 | `prefers-reduced-motion: reduce` story renders without `transition` style | Storybook play + viewport-with-prefers-reduced-motion addon | computed style assertion | none | same | §5 (reduced-motion), §7 |
| T20 | Below `lg` (320px viewport) all three Hero panels render visibly; no horizontal scroll | Storybook play + viewport addon set to 320×800 | DOM visibility + scroll measurement | none | same | §6 (reflow) |
| T21 | axe a11y scan: 0 violations on the React story at default viewport | Storybook a11y addon via `run-story-tests` | `axe.run()` | none | same | §2, §6 |
| T22 | axe a11y scan: 0 violations on the React story at 320px viewport | same | same | none | same | §2, §6 |
| T23 | axe a11y scan: 0 violations on the HTML-parity story (default viewport) | same | same | none | same | §9 |
| T24 | Forced-colors mode story renders with `CanvasText` outline visible on focus | Storybook play (force-colors media emulation) | computed style assertion | none | same | §6 (forced-colors) |
| T25 | GA payload contains exactly the keys: `event, action, component, region, section, text` (NO `type`) | Storybook play | dataLayer spy → assert object shape | spy | same | §8 |
| T26 | `gaRegion="custom region"` and `gaSection="custom"` props flow through to GA payload | Storybook play / RTL | dataLayer spy | spy | same | §3, §8 |
| T27 | SCSS literal audit: `_heroes-expandable.scss` contains exactly the locked `%` literals and no raw hex/px/rem/time values | Static (grep regex run in lint step) | filesystem | none | reviewer script `grep -E '(#[0-9a-f]{3,8}\|\d+(px\|rem\|em\|ms\|s)\b)' packages/unity-bootstrap-theme/src/scss/extends/_heroes-expandable.scss \| grep -v '%'` should return empty | §2, §7 |
| T28 | HTML-parity story DOM tree byte-equivalent (modulo whitespace) to the React story's rendered DOM | RTL unit | snapshot two stories, normalize, diff | none | `yarn workspace @asu/unity-react-core test` | §9 |
| T29 | Lerna build green: `yarn build` from monorepo root completes with 0 errors | E2E build | filesystem | none | `yarn build` | §2 |
| T30 | Lint green: `yarn lint` from monorepo root completes with 0 errors | E2E lint | filesystem | none | `yarn lint` | §2 |

Every test row above traces back to one or more spec sections via the "Linked spec section" column. The reviewer rejects any test that does not trace.

---

## 11. Bite-sized task breakdown (TDD-ordered)

Each task = one failing test → minimum production code to pass → refactor. Each task should take 2–8 minutes; the coder commits after each green cycle using Conventional Commits in a feature branch (no push, no PR — per stop-conditions).

> **Branch name:** `feat/expandable-heroes` (created from `dev` baseline). Conventional commit scope: `unity-react-core` or `unity-bootstrap-theme` as appropriate.

### Phase 0 — Scaffolding (no tests)

- **0.1** Create directory `packages/unity-react-core/src/components/ExpandableHeroes/`.
- **0.2** Create empty stubs: `ExpandableHeroes.jsx` (exports a no-op component), `ExpandableHeroes.test.jsx`, `ExpandableHeroes.stories.jsx`, `init.js` (matches `Hero/init.js` shape — re-exports an `initExpandableHeroes` from `core/utils`).
- **0.3** Create `packages/unity-react-core/src/core/types/expandable-heroes-types.js` (typedef + JSDOC sentinel, mirroring `hero-types.js`).
- **0.4** Add `export const initExpandableHeroes = ({ targetSelector, props }) => RenderReact(ExpandableHeroes, props, document.querySelector(targetSelector));` to `packages/unity-react-core/src/core/utils/index.js` (import `ExpandableHeroes` at top of that file alongside the other component imports).
- **0.5** Add `export * from "./ExpandableHeroes/ExpandableHeroes";` to `packages/unity-react-core/src/components/index.js`.
- **0.6** Create `packages/unity-bootstrap-theme/src/scss/extends/_heroes-expandable.scss` (empty file with header comment).
- **0.7** Add `@import 'extends/heroes-expandable';` to `packages/unity-bootstrap-theme/src/scss/_unity-bootstrap-theme-extends.scss` immediately after the `extends/heroes` import.
- **0.8** Commit: `chore(unity-react-core): scaffold ExpandableHeroes`.

### Phase 1 — Structural rendering (T01–T06, T15, T16)

- **1.1** Write failing test T16 (length validation logs error and renders null). Implement guard. Commit `feat(unity-react-core): validate ExpandableHeroes panes length`.
- **1.2** Write failing test T01 (renders 3 tab buttons). Render a `<div role="tablist">` with three `<button role="tab">`. Commit `feat(unity-react-core): render ExpandableHeroes tablist skeleton`.
- **1.3** Write failing tests T03 + T04 (aria-selected + roving tabindex). Implement `activeIndex` state and per-tab attributes. Commit `feat(unity-react-core): wire aria-selected and roving tabindex`.
- **1.4** Write failing test T05 (rotated title span). Add the span node. Commit `feat(unity-react-core): add rotated title span to ExpandableHeroes tabs`.
- **1.5** Write failing test T02 (three tabpanels). Add three `<div role="tabpanel">` siblings *(amended after cycle 2: each tabpanel is now inside a `.uds-expandable-heroes__item` wrapper — see §9 for the final DOM structure)*. Commit `feat(unity-react-core): render ExpandableHeroes tabpanels`.
- **1.6** Write failing test T06 (`aria-orientation`). Add it. Commit `feat(unity-react-core): set aria-orientation horizontal`.
- **1.7** Write failing test T15 (`initialActiveIndex={1}`). Implement prop wiring + clamp. Write T17 + pass it. Commit `feat(unity-react-core): support initialActiveIndex with clamping`.

### Phase 2 — Interaction (T07–T13, T14, T18)

- **2.1** Write failing test T08 (click commits + GA fires with `action: "click"`). Wire `onClick` → `commit(i, "click")` and emit GA via local `pushGaEvent` helper that calls `window.dataLayer.push()` directly with the Q5 six-key payload (see §8 amendment for rationale). Commit `feat(unity-react-core): commit on click and emit GA`.
- **2.2** Write failing test T07 (hover sets `.is-preview`, no GA). Add `previewIndex` state + `.is-preview` class + verify GA spy unchanged. Commit `feat(unity-react-core): non-committing hover preview`.
- **2.3** Write failing test T09 (Enter commits, GA `action: "keypress"`). Implement `onKeyDown` Enter branch. Commit `feat(unity-react-core): commit on Enter via keyboard`.
- **2.4** Write failing test T10 (Space commits + `preventDefault`). Commit `feat(unity-react-core): commit on Space via keyboard`.
- **2.5** Write failing test T11 (ArrowRight moves focus, no commit). Implement arrow handlers. Commit `feat(unity-react-core): arrow-key roving focus without commit`.
- **2.6** Write failing tests T12 + T13. Implement wrap + Home/End. Commit `feat(unity-react-core): support Home, End, wrap on arrow nav`.
- **2.7** Write failing test T14 (`onPaneChange`). Wire callback inside `commit()`. Commit `feat(unity-react-core): emit onPaneChange callback`.
- **2.8** Write failing test T18 (touch tap). Implement `onPointerDown` touch-detection guard. Commit `feat(unity-react-core): suppress hover preview on touch`.

### Phase 3 — Styling + responsive + reduced-motion (T19, T20, T27)

- **3.1** Write SCSS in `_heroes-expandable.scss` per §7, using ONLY tokens. Run reviewer's literal-audit grep (T27) locally and assert clean. Commit `feat(unity-bootstrap-theme): style ExpandableHeroes panes and rotated titles`.
- **3.2** Add `@media (prefers-reduced-motion: ...)` gate. Author story for T19. Commit `feat(unity-bootstrap-theme): respect prefers-reduced-motion on expandable heroes`.
- **3.3** Verify T20 (320px reflow) passes via the storybook viewport addon. If failing, adjust CSS. Commit `fix(unity-bootstrap-theme): reflow expandable heroes at 320px`.
- **3.4** Forced-colors styling per §6. Author story for T24. Commit `feat(unity-bootstrap-theme): forced-colors fallback for expandable heroes`.

### Phase 4 — Hero composition + HTML-parity story (T23, T28)

- **4.1** Wire `<Hero type="heading-hero" />` into the active tabpanel. Test the rendered Hero subtitle/title/content. Commit `feat(unity-react-core): compose Hero in ExpandableHeroes active panel`.
- **4.2** Author HTML-parity story (T23). Run a11y scan locally. Commit `feat(unity-react-core): add ExpandableHeroes HTML-parity story`.
- **4.3** Author T28 snapshot equivalence test. Commit `test(unity-react-core): assert HTML-parity DOM equivalence for ExpandableHeroes`.

### Phase 5 — GA shape audit + final validators (T21, T22, T24, T25, T26, T29, T30)

- **5.1** Write T25 (exact GA key shape; no `type`). Assert. Commit `test(unity-react-core): assert GA payload omits type for ExpandableHeroes`.
- **5.2** Write T26 (`gaRegion`, `gaSection` propagate). Commit `test(unity-react-core): assert GA region and section props flow through`.
- **5.3** Run `yarn build` and `yarn lint` from monorepo root (T29, T30). Fix any issues. Commit `chore: fix build and lint for ExpandableHeroes`.
- **5.4** Run `run-story-tests` and confirm T21–T24 green. Address any failures. Commit `fix(unity-react-core): address a11y and viewport story-test findings for ExpandableHeroes`.

### Phase 6 — Handoff prep

- **6.1** Stop. Do not push. Do not open PR. Surface the branch + commits to the orchestrator for human review.

---

## 12. Risks / open questions / out-of-scope

### Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| `$uds-hero-gradient-overlay` is scope-local to `_heroes.scss` and not visible to `_heroes-expandable.scss` | Medium | Medium — would force a literal duplication (forbidden) | Validate Sass import order (`_heroes-expandable.scss` imported AFTER `_heroes.scss` in `_unity-bootstrap-theme-extends.scss`). If scope still blocks, refactor `$uds-hero-gradient-overlay` to a shared partial. Architect approval required for that refactor. |
| Touch + keyboard preview interaction may "stick" `previewIndex` on touch if `blur` doesn't fire as expected on iOS | Low | Low | Clear `previewIndex` after a 250ms timeout on touch commit; covered in T18. |
| SCSS literal audit regex over-matches (e.g., would flag `media-breakpoint-up(lg)` if naïve) | Low | Low | Audit regex is scoped to value positions, not selectors; reviewer script in T27 is explicit. |
| Storybook a11y addon does not flag the "tablist on stacked column" pattern below `lg`, but a real SR audit might surface it as unusual | Low | Low | Documented tradeoff per Q4. No code change. |
| `pointerType === 'touch'` is not 100% supported on all browsers (Firefox iOS quirks) | Low | Low | Falls back to `onClick` behavior — commit still works, just briefly shows preview. Acceptable. |
| Rotated title overflow on extremely long titles (>40 chars) at small `lg`-region widths (~992–1100px) clips with ellipsis but may visually look truncated | Medium | Low — per Q3, this is the accepted SCSS behavior | Story includes a long-title fixture so the visual reviewer (acp-visual) can sign off. |
| Active-panel `<Hero>` height may visually misalign with collapsed strip height (image aspect mismatch) | Medium | Medium | Active pane sets the container height; collapsed strips `height: 100%`. Visual reviewer assesses. |

### Open questions (none blocking)

1. Should `onPaneChange` also fire on `initialActiveIndex` mount? **Decision (architect):** NO — only on user-driven commits. Mount-time is not a "change".
2. Should the rotated label clip with ellipsis when title is very long? **Decision (Q3):** YES, via CSS only; the string itself stays intact in DOM.
3. Should the collapsed strip image be set via `<img>` element or CSS `background-image`? **Decision:** `background-image` via inline `style="background-image: url(…)"` on the tab button. Reasoning: the collapsed strip is a decorative interaction surface; the active pane uses the `<Hero>` `<img>` semantics for alt-text. Alt-text for the collapsed strip image is intentionally not exposed — the tab's accessible name (the title) suffices. (This matches the existing `_image-based-card-and-hover.scss` pattern.)

### Explicitly out of scope (v1)

- N≠3 panes.
- Programmatic "expand all" / "collapse all".
- Carousel auto-rotation.
- Deep-link via URL hash.
- Image cross-fade transitions on commit.
- RTL layout (`writing-mode: vertical-lr` flip).
- Vertical orientation (`aria-orientation="vertical"`).
- Custom `collapsedLabel` prop separate from title.
- Sub-tab nesting inside a pane.
- Modifying `component-header-footer` token assumptions (per stop-conditions).

---

## Appendix A — File manifest the coder will touch

**Create:**
- `packages/unity-react-core/src/components/ExpandableHeroes/ExpandableHeroes.jsx`
- `packages/unity-react-core/src/components/ExpandableHeroes/ExpandableHeroes.styles.js` (small styled-component for the strip background image only, mirroring `Hero.styles.js`)
- `packages/unity-react-core/src/components/ExpandableHeroes/ExpandableHeroes.test.jsx`
- `packages/unity-react-core/src/components/ExpandableHeroes/ExpandableHeroes.stories.jsx` (contains BOTH React story and HTML-parity story)
- `packages/unity-react-core/src/components/ExpandableHeroes/init.js`
- `packages/unity-react-core/src/core/types/expandable-heroes-types.js`
- `packages/unity-bootstrap-theme/src/scss/extends/_heroes-expandable.scss`

**Modify:**
- `packages/unity-react-core/src/components/index.js` (add `export * from "./ExpandableHeroes/ExpandableHeroes";`)
- `packages/unity-react-core/src/core/utils/index.js` (add `initExpandableHeroes` export, mirroring `initHero`)
- `packages/unity-bootstrap-theme/src/scss/_unity-bootstrap-theme-extends.scss` (add `@import 'extends/heroes-expandable';` immediately after `'extends/heroes';`)

**Do not touch:**
- `packages/component-header-footer/**`
- `packages/unity-bootstrap-theme/src/scss/_custom-asu-variables.scss`
- `packages/unity-react-core/src/components/Hero/**` (compose, don't modify)
- `packages/unity-react-core/src/components/GaEventWrapper/**` (do not modify; not used by `ExpandableHeroes` per §8 amendment — incompatible with Q5 payload contract)

---

## Appendix B — Reviewer's pre-flight checklist (handed to acp-reviewer)

The reviewer will run, in order:

1. **Spec compliance phase** (`spec-compliance` skill): walk §1–§9 and assert every claim has matching code. Open one finding per gap.
2. **Adversarial phase** (`adversarial-review` skill): focus on touch+keyboard race, focus traps, SR announcement order, dataLayer double-firing, SCSS literal leaks.
3. **QA phase** (`qa-verification` skill): run the full §10 test matrix end-to-end. Capture results.
4. **Visual phase** (acp-visual via `visual-diff` skill): start storybook (`cd packages/unity-react-core && yarn storybook`), screenshot at 320 / 768 / 992 / 1260 / 1920px viewports, compare to `.intake/` screenshots and the Figma frame.
5. **Pass criteria:** all tests green; literal audit clean; axe 0 violations on both stories at all required viewports; visual VISUAL_PASS; build + lint green from root; up to 3 coder↔reviewer loops permitted.

If any criterion fails after 3 loops, surface the deadlock to the orchestrator.

---

**Design doc locked. Coder may proceed.**
