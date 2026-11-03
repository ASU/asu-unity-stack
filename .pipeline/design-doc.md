# Design doc — Rankings cards (WWWCMS-233)

> **Status**: LOCKED on human approval. Pipeline anchor: `WWWCMS-233`.
> Package: `@asu/components-homepage` (vanilla HTML/SCSS/JS, React only in Storybook).
> Slug: `rankings-cards`. Class prefix: `.hp-rankings`.
> Produced by the architect from `.pipeline/intake-brief.md` + user's locked
> answers to five clarifying questions. Jira ticket and Figma node were not
> fetchable in this session; see [§11 Open items](#11-open-items).

## Change log

- **v3.1 — 2026-11-03T21:10Z — User-directed placeholder-pair source swap
  (mid-cycle-3, scope-locked to `img/rankings/` + this Change log)**.\
  Default placeholder changed from `.intake/rank-01.png` (dark navy) to
  `.intake/rank-01-w.png` (white, 500×251). Hover placeholder changed from
  `.intake/rank-06-w.png` (white) to `.intake/rank-01.png` (dark navy,
  500×251). Both sources remain 500×251; no code, SCSS, test, or markup
  changes. 14 PNG binary files replaced; README.md, TODO.md, and this
  Change log updated. All validators green.

- **v3 — 2026-11-03T19:25Z — Supersedes v2.1 (Phase 1 scope amendment)**.
  Scope: lock the media aspect-ratio to **2 / 1** at every breakpoint, lock
  the image intrinsics to **500 × 251** (overridable dataset-wide), replace
  the 400×500 placeholder-generation plan with a copy-from-`.intake/` plan
  that reuses the same two 500×251 PNGs across all 7 cards, and add the
  belt-and-suspenders forced-colors assertion. All other v2.1 content is
  preserved verbatim.

  **Pre-approved deltas (locked by this amendment):**
  - `aspect-ratio: 2 / 1` on `.hp-rankings__media` at every breakpoint;
    mobile media box renders at 288 × 144 by design.
  - Image intrinsics change from 400 × 500 to **500 × 251**, emitted as
    `width="500" height="251"` on both `<img>` elements per card.
  - New top-level `rankingsCardsHtml({ imageWidth, imageHeight })` dataset-
    wide override, defaults 500 / 251. The `RankingCard` typedef is unchanged
    (no per-card intrinsics field).
  - `object-fit: cover; object-position: center 30%` on `.hp-rankings__img`
    to defend hover-PNG framing.
  - §8 row 23 upgraded to a 3-way hybrid assertion (computed aspect-ratio
    string equality, layout-ratio tolerance, and image stack-equality).
  - **New §8 row 23b** asserts the forced-colors outline bbox tracks the
    media bbox within ±1 px.
  - Placeholder pair is **`.intake/rank-01.png`** (default/dark, 500×251)
    + **`.intake/rank-06-w.png`** (hover/white, 500×251) — **superseded by
    v3.1 user-directed swap (see above)**. No `-s22`
    variants. The same two PNGs are reused across all 7 cards until the
    designer provides real artwork.
  - 400 × 500 pure-Node `pngjs` placeholder generation is **struck**.
    Replaced with a copy-from-`.intake/` directive; no 400 × 500 PNG may
    exist in `packages/components-homepage/src/img/rankings/`.
  - Two new policy sections at the bottom: **Asset-handling policy**
    (locks the 500×251 pair + reuse) and **Coder-scope lock** (confines
    commits to `packages/components-homepage/src/components/rankings-cards/`
    and `packages/components-homepage/src/img/rankings/` for this cycle).

  **Clarifying questions resolved (locked):**
  - **Q1 → A**: 2:1 aspect ratio at every breakpoint. Mobile media box
    renders at 288 × 144 by design.
  - **Q2 → C**: Dataset-wide uniform intrinsics via a top-level
    `rankingsCardsHtml({ imageWidth, imageHeight })` override. Defaults
    500 × 251. `RankingCard` typedef unchanged.
  - **Q3 → D (hybrid)**: Row 23 asserts (a)
    `getComputedStyle(media).aspectRatio === '2 / 1'`, (b) layout ratio
    within ±0.01 of 2.0, (c) stack-equality on both `<img>` bounding boxes
    via `toBeCloseTo(..., 1)`.
  - **Q4 → C (belt + suspenders)**: Emit intrinsics
    (`width="500" height="251"`) AND `aspect-ratio: 2/1` on
    `.hp-rankings__media`; `object-fit: cover; object-position: center 30%`
    to defend hover-PNG framing; new row 23b asserts outline bbox ≈ media
    bbox in forced-colors mode within ±1 px.
    `object-position: center 30%` is tagged as a §11.2 Figma TODO for
    designer reconciliation.

  Sections touched: §3.1 (template signature + typedef note), §3.3
  (HTML attributes 500/251), §3.4 (first-render invariants update),
  §4.5 (ratio + object-fit + object-position), §6 (rows 9 & 10), §7.4
  (reflow re-write for taller→shorter media), §7.5 (forced-colors +
  row 23b pointer), §7.9 (framing note), §8 row 23 (hybrid) + new row
  23b, §9 (file manifest 500×251 pair, no `-s22`), §9.1 (naming note),
  §9.2 (strike pngjs; copy-from-`.intake/`), §10 Task 1 + Task 2,
  §11.2 (confirm `object-position` + 500×251 with design). New sections
  appended at the bottom.

- **v2.1 — user-directed**: replace IntersectionObserver edge-state detection
  with scrollLeft-based detection (CSS snap retained for alignment and
  keyboard scrollIntoView). Rationale: deterministic edges, fixes P1
  nav-correctness and resize-from-no-overflow bugs. Edge state is derived
  from `track.scrollLeft` and `track.scrollWidth - track.clientWidth` on
  `scroll` (passive), `scrollend`, `resize` (via the existing ResizeObserver),
  and immediately after each `scrollBy` click. The ResizeObserver still runs
  for the `--no-overflow` class. All other sections (HTML contract §3, CSS
  token discipline §6, keyboard model §7.2, forced-colors fallback §4.15 /
  §7.5, test matrix IDs §8) are unchanged.
- **v2 (patched)**: user clarified that the top of each card is a PNG (A2/B1/C1).
  Card body content model, HTML shape, SCSS card interior, test matrix
  hover/image assertions, and file manifest (`img/rankings/` folder +
  placeholder PNGs) have been revised. All other decisions (transparent bg,
  snap-scroll, triplet-disabled nav, zero `data-ga*`, no new tokens, keyboard
  model, contrast caveat, 6-task TDD plan) are unchanged.
- **v1 (initial)**: approved on first HITL gate.

---

## Scope decision

**Hold scope.** The user's five locked answers reduced ambiguity to the point
where the component contract is implementable without additional sibling pieces
or new tokens. One **selective expansion** inside scope: the design adds a
`.hp-rankings--no-overflow` class toggle so the carousel chrome (Prev/Next) can
be hidden when the track doesn't overflow at the current viewport — this is a
direct consequence of user's answer Q3 and the HTML-parity rule, not a new
feature.

Out of scope (do not implement, do not refactor):
- No new UDS/UBT tokens (background stays transparent per Q4; no navy added).
- No whole-card click target, no stretched link, no nested interactive content
  (Q2).
- No `data-ga*` attributes on markup (Q5, matches `reimagine`). The vanilla-JS
  `data-ga` listener in `unity-bootstrap-theme` will pick this up automatically
  if the package-wide policy later changes.
- No modifications to `component-header-footer` tokens.
- No arrow-key scrolling on the track element itself (keyboard model is "Tab
  through card links + nav buttons scroll the track" — see §7).

---

## 1. Problem framing (office-hours output)

### What is the user trying to accomplish?

Render a horizontally-scrollable row of ASU-ranking cards inside the dark hero
band on the homepage. The row must snap-align to card leading edges so a card is
never left half-visible on the left. Prev/Next buttons advance the row by one
card. A "See all ASU rankings →" link lives on the same baseline as the nav.
Each card has a default (on the dark parent) state and an inverted hover state
(white card, black text, maroon attribution link). Only the attribution link
inside each card is interactive.

### Who are the users?

- **Primary**: visitors to the ASU homepage — mouse, touch, keyboard, and
  screen-reader users. The component must be reachable and operable by
  keyboard alone, and comprehensible with a screen reader.
- **Secondary**: the Webspark 2 CMS, which copies the first-render HTML and
  compiled CSS from this package. No React runs in production (HTML-parity).

### What is the simplest thing that could possibly work?

Semantic `<section>` with a visually-hidden heading, a horizontally-scrolling
track using **CSS scroll-snap only** for the "never half-visible on the left"
rule, static `<article>` cards, two `<button type="button">` nav controls, and
a single `<a>` "See all". A tiny progressive-enhancement JS module adds:
smooth `scrollBy` on nav click, prev/next disabled state derived from
`track.scrollLeft` relative to the maximum scroll offset, and a
`.hp-rankings--no-overflow` class when the track doesn't overflow. No JS =
native touch/trackpad scroll + CSS snap still works. **Amended v2.1**:
IntersectionObserver was eliminated for edge-state detection; CSS snap is
retained for alignment and for the browser's native `scrollIntoView` on
keyboard focus.

### What are the forcing questions?

1. **What breaks when a user resizes the window after init?**
   Edge-state is a pure function of `track.scrollLeft` and
   `track.scrollWidth - track.clientWidth`, so resize correctness is trivial:
   a `ResizeObserver` on the track calls the same `syncNavState()` as every
   scroll event. `track.scrollWidth` changes with layout; the next
   `syncNavState()` reads the new value and sets the correct triplet on both
   buttons. The `--no-overflow` class is re-evaluated in the same tick, so
   resize-from-no-overflow-to-overflow immediately re-enables Next.
2. **What breaks for a touch user who swipes mid-scroll?**
   CSS mandatory snap handles the resting position. The track's `scroll`
   (passive) and `scrollend` listeners fire during and after the gesture, so
   `syncNavState()` keeps the disabled triplet in lockstep with the
   leading-edge scrollLeft — no JS intervention is needed to pan, only to
   observe.
3. **What breaks for a keyboard user?**
   The track is **not** keyboard-focusable (per keyboard model). The user Tabs
   through: Prev → Next → each attribution link in DOM order → See-all.
   When focus enters a card link that is horizontally scrolled off-screen,
   browsers call `scrollIntoView` on the focused element — card must have
   `scroll-snap-align: start` so the browser's auto-scroll resolves to a snap
   stop (not a half card).
4. **What breaks for a screen reader?**
   Section labelled by a visually-hidden `<h2>` ("ASU rankings"). Nav buttons
   named "Previous ranking" / "Next ranking". `aria-disabled="true"` + `.is-disabled`
   + `tabindex="-1"` while disabled (not `disabled` attribute — a `disabled`
   `<button>` disappears from the tab order abruptly and gives inconsistent AT
   announcements; `aria-disabled` keeps the button discoverable). No `aria-live`
   on the track — cards are static content; announcing scroll position is noise.
5. **What breaks under `prefers-reduced-motion: reduce`?**
   `scroll-behavior: smooth` is disabled; `scrollBy` uses `behavior: 'auto'`.
6. **What breaks under forced-colors mode?**
   Transparent backgrounds and white outlines disappear. Fallback: `border: 1px
   solid CanvasText` on cards and the nav buttons; icons use `currentColor`.
7. **What breaks when there is 1 card? 2 cards? N cards?**
   See §8 test matrix rows "overflow states".
8. **What breaks for a visitor whose parent surface is NOT dark enough?**
   White text on `background: transparent` fails WCAG contrast. The component
   contract (§3) declares a **dark-enough parent surface** as a consumer
   precondition. Storybook stories render on a dark backdrop so interaction/a11y
   tests pass. See §7 contrast caveat.

---

## 2. Skills consulted

| Category | Skill | Validators used in this doc |
|---|---|---|
| Architect — framing | **`office-hours`** | Six forcing questions in §1; "what breaks when X fails?" per edge case; purpose/users/simplest/forcing-questions structure. |
| Architect — architecture capture | **`architecture-lock`** | ASCII data flow (§5.6), state machine (§5.5), error paths (§5.7), test matrix (§8), bite-sized subtasks (§10), lock protocol at the bottom. This v3 amendment is itself an architecture-lock update. |
| Component / framework | **`unity-components`** | `yarn build` (lint + docs + bundle), `yarn lint`, `yarn test:storybook` (interaction via `@storybook/addon-vitest`), HTML-parity contract (first-render completeness). |
| Design + a11y | **`asu-design-a11y`** | `yarn test:accessibility` (Playwright + Siteimprove Alfa, WCAG 2.1 AA), the accessibility checklist (landmarks, keyboard, focus, contrast, reflow, forced-colors, labels). |
| Brand | **`asu-brand`** | Token source `_custom-asu-variables.scss`. "Never raw hex when a token exists" rule. See §6 reconciliation table. |

Coder MUST load the three UI skills (`unity-components`, `asu-design-a11y`,
`asu-brand`) before implementation. Reviewer MUST load the same three plus
`spec-compliance`, `adversarial-review`, `code-quality`, and
`qa-verification`. The architect's `office-hours` and `architecture-lock`
skills produced §1 and the overall doc structure respectively; they do not
need to be re-loaded by downstream agents but are named here for traceability
per the pipeline steering doc.

---

## 3. Component contract

### 3.1 Markup template function signature

File: `packages/components-homepage/src/components/rankings-cards/rankings-cards-helpers.jsx`

```js
/**
 * @typedef {Object} RankingCard
 * @property {string} imageSrc        - path to the default-state PNG, e.g. "img/rankings/sustainable-practices.png"
 * @property {string} imageSrcHover   - path to the hover-state PNG, e.g. "img/rankings/sustainable-practices--hover.png"
 * @property {string} imageAlt        - descriptive alt text for the default image: the full ranking statement, e.g. "#1 in the U.S. and #2 in the world for sustainable practices. ASU ahead of Stanford and UC Berkeley."
 * @property {string} attributionHref - URL for the attribution link
 * @property {string} [attributionLabel="Attribution link"] - visible link text
 */

/**
 * @param {Object} [options]
 * @param {string} [options.headingId="hp-rankings-heading"] - unique per rendered copy
 * @param {RankingCard[]} [options.cards] - defaults to a 7-item sample identical to the Figma
 * @param {string} [options.seeAllHref="#rankings-see-all"] - placeholder until real URL exists
 * @param {string} [options.seeAllLabel="See all ASU rankings"]
 * @param {number} [options.imageWidth=500]  - dataset-wide intrinsic width (px) emitted on every <img>; see §3 image intrinsics contract
 * @param {number} [options.imageHeight=251] - dataset-wide intrinsic height (px) emitted on every <img>; see §3 image intrinsics contract
 * @returns {string} HTML string
 */
export const rankingsCardsHtml = ({ headingId, cards, seeAllHref, seeAllLabel, imageWidth, imageHeight } = {}) => string
```

The function returns a single HTML string. The default `cards` array matches the
seven-card Figma sample so a Storybook consumer with no args reproduces the
reference frame.

**Image dimensions contract (locked for v3 per Q1 + Q2):**

- Both PNGs per card (default + hover) MUST share the same intrinsic
  dimensions. The hover PNG is a colour variant of the same artwork, not a
  different composition.
- Target card media aspect-ratio is **`2 / 1`** at every breakpoint (Q1 = A).
  The coder emits `aspect-ratio: 2 / 1` on `.hp-rankings__media` so the stack
  reserves vertical space from first paint at every viewport, including
  mobile (where the 288 px card produces a 288 × 144 media box by design).
- Target image intrinsic dimensions are **`500 × 251`** (Q2 = C). These values
  are the **defaults** for the top-level `imageWidth` / `imageHeight`
  parameters on `rankingsCardsHtml`. The parameters are **dataset-wide**:
  one pair of values applies to every `<img>` the template emits. The
  `RankingCard` typedef is **unchanged** — intrinsics are NOT a per-card
  field (per Q2 = C's rejection of per-card overrides).
- The `width` / `height` attributes on every `<img>` are populated from
  `imageWidth` / `imageHeight` (CLS prevention — see §3.3). Note that
  `500 × 251` is intentionally **not** a perfect 2:1 pair of integers (true
  2:1 would be `500 × 250`); the extra pixel matches the Figma export and
  does **not** invalidate the `aspect-ratio: 2 / 1` CSS rule because the CSS
  rule drives layout and `object-fit: cover` resolves the 1 px overshoot.
- The CSS lays out by `card-width` × `aspect-ratio: 2 / 1`; the `<img>`
  elements are stretched to fill the media box
  (`width: 100%; height: 100%; display: block; object-fit: cover`). Changing
  the Figma intrinsics does not require SCSS changes beyond passing new
  `imageWidth` / `imageHeight` values to `rankingsCardsHtml`.

### 3.2 Content model

Section-level:
- `headingId` (string, unique per rendered copy — feeds both `<h2 id>` and
  `aria-labelledby`).
- `cards` (array, length ≥ 1).
- `seeAllHref` (string, placeholder fragment per the package's
  `#rankings-see-all` convention — a bare `#` would scroll to top).
- `seeAllLabel` (string, default `"See all ASU rankings"`).

Per card: as declared in §3.1 `RankingCard` typedef.

### 3.3 HTML string shape (first-render output)

Full DOM on first render. State changes are **class toggles** on always-present
elements. The HTML below is the Stage B parity source — the coder's
`rankingsCardsHtml` MUST produce this shape exactly (whitespace between tags is
free; attribute order follows this listing).

```html
<section class="hp-rankings" aria-labelledby="hp-rankings-heading">
  <h2 id="hp-rankings-heading" class="visually-hidden">ASU rankings</h2>

  <div class="hp-rankings__inner">
    <ul class="hp-rankings__track" role="list">
      <li class="hp-rankings__card">
        <div class="hp-rankings__media">
          <img class="hp-rankings__img hp-rankings__img--default"
               src="img/rankings/sustainable-practices.png"
               alt="#1 in the U.S. and #2 in the world for sustainable practices. ASU ahead of Stanford and UC Berkeley."
               width="500" height="251"
               loading="lazy" decoding="async">
          <img class="hp-rankings__img hp-rankings__img--hover"
               src="img/rankings/sustainable-practices--hover.png"
               alt="" aria-hidden="true"
               width="500" height="251"
               loading="lazy" decoding="async">
        </div>
        <div class="hp-rankings__card-footer">
          <a class="hp-rankings__attribution" href="https://example.com/ranking">
            Attribution link
            <svg class="hp-rankings__attribution-icon" viewBox="0 0 448 512"
                 aria-hidden="true" focusable="false">
              <path fill="currentColor" d="…arrow-right path…"/>
            </svg>
          </a>
        </div>
      </li>
      <!-- … one <li class="hp-rankings__card"> per card … -->
    </ul>

    <div class="hp-rankings__controls">
      <div class="hp-rankings__nav" role="group" aria-label="Rankings carousel navigation">
        <button type="button" class="hp-rankings__nav-btn hp-rankings__nav-btn--prev is-disabled"
                aria-disabled="true" tabindex="-1" aria-label="Previous ranking">
          <svg class="hp-rankings__nav-icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="…chevron-left path…"/>
          </svg>
        </button>
        <button type="button" class="hp-rankings__nav-btn hp-rankings__nav-btn--next"
                aria-label="Next ranking">
          <svg class="hp-rankings__nav-icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="…chevron-right path…"/>
          </svg>
        </button>
      </div>
      <a class="hp-rankings__see-all" href="#rankings-see-all">
        See all ASU rankings
        <svg class="hp-rankings__see-all-icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="…arrow-right path…"/>
        </svg>
      </a>
    </div>
  </div>
</section>
```

**Attributes locked (v3):**

- `width` + `height` are REQUIRED on both `<img>` elements. They reserve space
  (CLS prevention). Values are the dataset-wide intrinsic dimensions
  **`500 × 251`** (defaults for the top-level `imageWidth` / `imageHeight`
  parameters on `rankingsCardsHtml`, per Q2 = C). Both images per card share
  identical `width` / `height` values, and every card in the dataset shares
  the same pair. `500 × 251` is intentionally not integer-perfect 2:1 — it
  matches the Figma export; the layout aspect-ratio is pinned to `2 / 1` by
  the CSS rule on `.hp-rankings__media` (§4.5) and `object-fit: cover`
  resolves the 1 px overshoot.
- `loading="lazy"` + `decoding="async"` on **both** `<img>` elements by
  default. There is a hero section above `rankings-cards` on the homepage, so
  this component is NOT above the fold — eager-loading would waste bandwidth.
  **Decision**: all images lazy. `// TODO: revisit at §11.2 if homepage places
  rankings above the fold on any viewport.`
- `alt=` on the default `<img>` carries the **complete accessible ranking
  statement** (rank clause + "and #X in the world for" clause + topic +
  caption source clause). This replaces the old HTML text for rank, topic, and
  caption pill — SR users receive the statement exactly once, from the alt
  text.
- The hover `<img>` is decorative (`alt=""` + `aria-hidden="true"`) so screen
  readers do NOT double-announce.
- **Explicitly NOT a `<picture>` element.** Two sibling `<img>`s give simpler
  CSS swap (opacity toggle on class flip) and better test ergonomics
  (`getComputedStyle` on each `<img>` is directly checkable). `<picture>`
  would require media-query-driven source swapping, which is the wrong tool
  for a hover state.
- The gold caption pill is **removed from the DOM**. Its text is baked into
  the PNG and carried in `imageAlt`. There is no HTML pill element anymore.

### 3.4 First-render invariants (coder MUST satisfy)

1. Every `<li class="hp-rankings__card">` is present in the DOM on first render.
   No `useEffect`, no mount-gated conditional rendering.
2. **Both images per card** MUST be in the DOM on first render (HTML-parity).
   The hover variant is NOT conditionally mounted or inserted by JS.
3. **Both images carry the correct `src`, `alt`, `width`, `height`, `loading`,
   `decoding` attributes on first render.** The default `<img>` has non-empty
   `alt`; the hover `<img>` has `alt=""` and `aria-hidden="true"`.
4. **The hover `<img>` is painted but hidden by CSS only** (`opacity: 0` on
   `.hp-rankings__img--hover` in the default state). State is NEVER swapped via
   a prop/boolean inside `rankingsCardsHtml` — the template always emits both
   `<img>` elements with the same first-render attribute shape.
5. Prev button ships with `is-disabled` + `aria-disabled="true"` + `tabindex="-1"`
   because the track starts at `scrollLeft = 0`. Next button ships without the
   disabled triplet.
6. The `.hp-rankings__nav` is **always present** in the DOM. Hiding it when the
   track doesn't overflow is done later by JS via a `.hp-rankings--no-overflow`
   modifier on the section (CSS `display: none` on the nav group). Without JS,
   the nav is visible but inert on a short track — acceptable fallback because
   nav is progressive enhancement.
7. The `visually-hidden` class is the one already defined by the Unity Bootstrap
   theme (Bootstrap 5 `.visually-hidden`). No new definition.
8. No `data-ga*` attributes on any element (Q5).

### 3.5 Nav visibility rule — justification

**Chosen rule**: ship the nav in the DOM; JS adds `.hp-rankings--no-overflow` on
the section when `track.scrollWidth <= track.clientWidth`, which `display: none`s
the `.hp-rankings__nav` group (prev + next). The See-all link stays visible
because it lives in the same `.hp-rankings__controls` row but is not inside
`.hp-rankings__nav`.

Why: user's phrasing in Q3 ("carousel chrome as a function of overflow, not a
fixed layout element") plus HTML-parity (always present + class toggle, no
conditional mount). Progressive-enhancement fallback: without JS the nav is
visible even on a short track, but the buttons degrade gracefully — they would
still fire `scrollBy` but hit the scroll limit immediately, which is harmless.
See-all remains visible always, satisfying "Keep the See-all link visible
regardless."

---

## 4. CSS architecture

File: `packages/components-homepage/src/components/rankings-cards/_rankings-cards.scss`
Imported from: `packages/components-homepage/src/scss/components-homepage.scss`.

### 4.1 Class prefix and modifiers

- Prefix: `.hp-rankings` (BEM-ish, mirrors `.hp-reimagine`).
- Elements: `__inner`, `__track`, `__card`, `__media`, `__img`,
  `__card-footer`, `__attribution`, `__attribution-icon`, `__controls`,
  `__nav`, `__nav-btn`, `__nav-icon`, `__see-all`, `__see-all-icon`.
- Modifiers: `__img--default`, `__img--hover`, `__nav-btn--prev`,
  `__nav-btn--next`, `--no-overflow` (section-level, JS-set).
- State classes (JS-toggled, mirror aria states): `.is-disabled` on
  `.hp-rankings__nav-btn`.
- **Removed in v2**: `__rank`, `__rank-number`, `__rank-suffix`,
  `__rank-world`, `__topic`, `__caption`. Those classes no longer exist in
  the SCSS because the HTML elements they styled no longer exist in the DOM.

### 4.2 Section (band)

- `background: transparent` (Q4). Full-bleed is achieved by the parent dark hero
  surface; this component contributes no background color.
- Vertical rhythm: `padding-block: $uds-size-spacing-6` (top + bottom 3rem).
  // TODO: confirm with design.
- `color: $uds-color-base-white` as the default text color (inverted on hover
  cards via a scoped override).

### 4.3 Inner wrapper

- `max-width: 1440px` (mirrors `.hp-reimagine__inner`). // TODO: confirm with design.
- `margin-inline: auto`; `padding-inline: var(--hp-rankings-gutter)`.
- Column: `grid-template-rows: auto auto`; `.hp-rankings__track` on row 1,
  `.hp-rankings__controls` on row 2 with `margin-top: $uds-size-spacing-3`.
- `--hp-rankings-gutter: #{$uds-size-spacing-6}` desktop,
  `--hp-rankings-gutter: #{$uds-size-spacing-2}` phone — same pattern as
  reimagine.

### 4.4 Track (snap scroll)

```scss
.hp-rankings__track {
  display: flex;
  gap: $uds-size-spacing-2;              // 1rem; // TODO: confirm with design.
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 0;
  // Hide native scrollbar (visual noise); keyboard model does not rely on it.
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
  }
  // prefers-reduced-motion: reduce leaves scroll-behavior at the default `auto`.
}
```

The `scroll-snap-type: x mandatory` + `scroll-snap-align: start` on each card
satisfies the user's "never a half-visible card on the left" rule **without
JS**.

### 4.5 Card media box (image stack)

**Locked approach: CSS grid overlay** (chosen over `position: absolute`).
Rationale: `display: grid` + `grid-template-areas: "img"` lets both images sit
in the same grid cell naturally sized by `width: 100%` + `aspect-ratio`
without `position: absolute`/`inset: 0` boilerplate. The grid container itself
reserves the space from first paint. Fewer rules, no coordinate math, simpler
to reason about in tests (both `<img>` elements have identical
`getBoundingClientRect()` by construction, not by CSS trickery).

Card wrapper (unchanged shape — the card still sets its own flex sizing,
snap-alignment, border, and transparent background; what changed is the
interior content model):

```scss
.hp-rankings__card {
  flex: 0 0 auto;
  width: 18rem;                            // 288px placeholder.
  // TODO: confirm with design — card width (constant, Figma Dev Mode value).
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  background: transparent;                 // Q4.
  color: $uds-color-base-white;
  border: 1px solid $uds-color-base-white; // Q4; weight placeholder.
  // TODO: confirm with design — card border color/weight/radius.
  border-radius: 0;                        // TODO: confirm with design.
  // No inner padding on the card itself anymore — the media box fills the
  // top, and `.hp-rankings__card-footer` owns the attribution padding.
}
```

Media box (updated in v3 — ratio locked to 2 / 1 at every breakpoint per
Q1 = A; `object-fit` + `object-position` locked per Q4 = C):

```scss
.hp-rankings__media {
  display: grid;
  grid-template-areas: "img";
  width: 100%;
  aspect-ratio: 2 / 1;                     // Q1 = A; locked at every breakpoint. Mobile media box renders at 288 × 144 by design.
  background: transparent;                 // dark hero bleeds through if PNG has alpha.
  overflow: hidden;                        // belt-and-braces for off-brand bleeds.
}

.hp-rankings__img {
  grid-area: img;                          // stack both images in the same cell.
  width: 100%;
  height: 100%;
  object-fit: cover;                       // Q4 = C — crop over distort; dataset-wide 500×251 intrinsics never match the box 1:1 at every breakpoint.
  object-position: center 30%;             // Q4 = C — defends hover-PNG framing (ranking numeral sits in the upper third). // TODO: confirm with design — see §11.2.
  display: block;
}

.hp-rankings__img--default {
  opacity: 1;
}

.hp-rankings__img--hover {
  opacity: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 150ms ease;        // TODO: confirm duration with design.
  }
}

.hp-rankings__card-footer {
  padding: $uds-size-spacing-2;            // TODO: confirm with design.
}
```

Under `prefers-reduced-motion: reduce`, the `transition` declaration is NOT
emitted — the opacity change on hover is instantaneous (zero-duration flip).

### 4.6 Card hover (class flip — colour + image swap)

CSS `:hover` plus the `[data-rankings-hover]` mirror pattern (mirroring the
reimagine `[data-reimagine-hover]` approach — Storybook cannot `:hover`
programmatically). The hover state is a **colour flip + image swap**, no
layout change:

```scss
.hp-rankings__card:hover,
.hp-rankings__card[data-rankings-hover] {
  background: $uds-color-base-white;
  color: $asu-gray-1;
  border-color: $uds-color-base-white;
}

.hp-rankings__card:hover .hp-rankings__attribution,
.hp-rankings__card[data-rankings-hover] .hp-rankings__attribution {
  color: $uds-color-brand-maroon;
}

.hp-rankings__card:hover .hp-rankings__img--default,
.hp-rankings__card[data-rankings-hover] .hp-rankings__img--default {
  opacity: 0;
}

.hp-rankings__card:hover .hp-rankings__img--hover,
.hp-rankings__card[data-rankings-hover] .hp-rankings__img--hover {
  opacity: 1;
}
```

The whole hover block is gated by `(hover: hover)` to prevent touch-tablet
"sticky hover" (same gate the reimagine component uses). The test-mirror
attribute `[data-rankings-hover]` bypasses the pointer-media gate so Storybook
stories can force the state on any device.

### 4.7 Caption pill — REMOVED

The caption pill is no longer an HTML element. Its text is baked into the PNG
and the SR-accessible version lives in `imageAlt`. There are no `.hp-rankings__caption`
rules in the SCSS. If a future reversion re-introduces HTML text, v1 of this
doc is the restoration source.

### 4.8 Attribution link

```scss
.hp-rankings__attribution {
  display: inline-flex;
  align-items: center;
  gap: $uds-size-spacing-half;
  color: $uds-color-base-white;              // default: white on transparent
  text-decoration: underline;
}
// Hover color handled by §4.6 flip rule.
```

### 4.9 Controls row (nav + see-all)

```scss
.hp-rankings__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $uds-size-spacing-3;
}

.hp-rankings__nav {
  display: flex;
  gap: $uds-size-spacing-1;
}

.hp-rankings--no-overflow .hp-rankings__nav {
  display: none;
}
```

### 4.10 Nav buttons

```scss
.hp-rankings__nav-btn {
  width: 3rem; height: 3rem;              // $uds-size-icon-xl placeholder.
  // TODO: confirm with design — nav button diameter and icon size.
  border-radius: 50%;
  background: $uds-color-base-white;
  color: $asu-gray-1;
  border: none;
  display: inline-grid; place-items: center;
  cursor: pointer;
}

.hp-rankings__nav-btn.is-disabled,
.hp-rankings__nav-btn[aria-disabled="true"] {
  background: $asu-gray-3;                // muted (matches screenshot "prev at start").
  color: $uds-color-base-white;
  cursor: not-allowed;
}
```

The `is-disabled` class and `aria-disabled="true"` attribute MUST be kept in
sync by the JS. Not using the native `disabled` attribute — AT reports it as a
mode change (focus can leap unexpectedly); `aria-disabled` + `tabindex="-1"`
retains discoverability without activation.

### 4.11 See-all link (always visible on controls row)

```scss
.hp-rankings__see-all {
  color: $uds-color-base-white;
  text-decoration: underline;
  display: inline-flex;
  align-items: center;
  gap: $uds-size-spacing-half;
}
```

### 4.12 Focus ring (reused from the package)

Reuse `--hp-focus-inner` / `--hp-focus-outer` from `src/scss/_variables.scss`:

```scss
.hp-rankings__attribution:focus-visible,
.hp-rankings__nav-btn:focus-visible,
.hp-rankings__see-all:focus-visible {
  outline: 2px solid transparent;         // forced-colors catch
  box-shadow:
    var(--hp-focus-inner),
    var(--hp-focus-outer);
}
```

### 4.13 Breakpoint-by-breakpoint visible-card count

With a constant card width `W = 288px` and gap `G = 16px`, visible-card count at
viewport width `V` (excluding the gutter):

| Viewport | Content width (approx) | `floor((V - G) / (W + G))` | Visible cards |
|---|---|---|---|
| 393  | ~345  | `floor(329 / 304)` | **1** |
| 768  | ~720  | `floor(704 / 304)` | **2** |
| 1024 | ~976  | `floor(960 / 304)` | **3** |
| 1280 | ~1232 | `floor(1216 / 304)` | **4** |
| 1440 | ~1392 | `floor(1376 / 304)` | **4** |
| 1920 | ~1440 (max-width capped) | `floor(1424 / 304)` | **4** at the capped inner |

Numbers above are placeholders tied to the 288px card-width TODO. The
screenshots show more cards at 1920 — this likely means card width is smaller
than 288px. The coder MUST confirm from Figma Dev Mode or sanity-check against
`.intake/width1920.png` and adjust the SCSS variable only (no other change).

### 4.14 Reduced motion

```scss
@media (prefers-reduced-motion: reduce) {
  .hp-rankings__track { scroll-behavior: auto; }
}
```

Additional reduced-motion handling for the image hover swap: the
`transition: opacity 150ms ease` rule on `.hp-rankings__img--hover` is itself
wrapped in `@media (prefers-reduced-motion: no-preference)` (see §4.5), so
under reduce the declaration is never emitted and the hover opacity flip is
instantaneous. All animated transitions in this component are inside
`no-preference` blocks; nothing animates when the user prefers reduced motion.

The JS branch (§5) uses `behavior: 'auto'` under reduced motion so programmatic
`scrollBy` also skips smoothing.

### 4.15 Forced colors

```scss
@media (forced-colors: active) {
  .hp-rankings__card {
    border: 1px solid CanvasText;
    background: Canvas;                    // ensures text readability
    color: CanvasText;
  }
  .hp-rankings__media {
    border: 1px solid CanvasText;          // keeps the media area visually distinct
  }
  .hp-rankings__nav-btn {
    border: 1px solid ButtonText;
    background: ButtonFace;
    color: ButtonText;
  }
  .hp-rankings__nav-btn.is-disabled { color: GrayText; }
}
```

**Images under forced-colors**: user agents may transform `<img>` elements into
monochrome glyphs (Edge/IE legacy heritage) or render them as-is depending on
the system. Because the ranking content is still carried in the alt text
(announced to SR + visible as the browser's "image missing" placeholder when a
UA strips images), the card chrome compensates with a system-color border on
both the card and the media container so the component remains visually
distinct even when the artwork is monochrome. Explicitly no
`forced-color-adjust: none` anywhere — we respect the UA's accessibility
transforms.

All SVG icons use `fill="currentColor"` so they adapt automatically.

---

## 5. Progressive-enhancement JS plan

File: `packages/components-homepage/src/components/rankings-cards/rankings-cards.js`
Public export: `initRankingsCards`, re-exported from `src/js/index.js`.

### 5.1 Signature

```js
/**
 * Wires each `.hp-rankings` under `root` for progressive-enhancement nav.
 * Safe to call repeatedly (idempotent via a module-level WeakSet of sections).
 * @param {Document|Element} [root=document]
 * @returns {function(): void} teardown — removes listeners, observers, and
 *   JS-added classes/attributes from every section this call bound.
 */
export function initRankingsCards(root = document) { … }
```

### 5.2 Behaviour

For each `.hp-rankings` under `root`:

1. Locate `.hp-rankings__track`, `.hp-rankings__nav-btn--prev`,
   `.hp-rankings__nav-btn--next`.
2. Compute `cardStep = card.offsetWidth + gap` where `gap` is derived from
   `getComputedStyle(track).columnGap || gap`. This is the "one card per press"
   step (Q1).
3. Add a `click` listener on each nav button:
   - If `aria-disabled === "true"` on the button → `event.preventDefault()`, no
     scroll (defence-in-depth; the `tabindex="-1"` already excludes keyboard
     activation).
   - Else `track.scrollBy({ left: ±cardStep, behavior: motionBehavior() })`
     where `motionBehavior()` returns `"smooth"` or `"auto"` based on the live
     `matchMedia("(prefers-reduced-motion: reduce)")`.
   - Rapid clicks during an in-flight smooth scroll are coalesced: a
     `pendingScroll` flag is set on `scrollBy` and cleared on the next
     `scrollend` event (or after `SCROLLEND_FALLBACK_MS` for browsers
     without `scrollend`). While pending, additional nav clicks are
     ignored. Documented in the function's JSDoc.
4. **Edge state (amended v2.1)** — derive both button states from
   `track.scrollLeft` relative to the maximum scroll offset. There is **no
   IntersectionObserver**. One deterministic function:

   ```js
   const syncNavState = () => {
     const maxScroll = track.scrollWidth - track.clientWidth;
     const overflows = maxScroll > 1;
     if (!overflows) {
       section.classList.add("hp-rankings--no-overflow");
       setDisabled(prev, true);
       setDisabled(next, true);
       return;
     }
     section.classList.remove("hp-rankings--no-overflow");
     const tol = edgeTolerance();  // half a card step
     setDisabled(prev, track.scrollLeft < tol);
     setDisabled(next, track.scrollLeft > maxScroll - tol);
   };
   ```

   `syncNavState()` is called on:
   - initial bind (immediately after wiring),
   - `scroll` on the track (passive, read-only),
   - `scrollend` on the track (plus the fallback timer for UAs without it,
     which also calls `syncNavState()` on fire),
   - `ResizeObserver(track)` fires,
   - immediately inside each nav-button click handler **before** `scrollBy`,
     so the `pendingScroll` guard reflects the correct starting state.

   `setDisabled(btn, true)` applies the triplet
   (class `is-disabled` + `aria-disabled="true"` + `tabindex="-1"`);
   `setDisabled(btn, false)` clears all three. Each per-attribute mutation
   is recorded in `mutationLog` so teardown can restore the exact prior
   value (see §5.3).

   **Why half a card step for `edgeTolerance()`**: first-render markup can
   carry a small scrollLeft wobble caused by `scroll-snap-type` combined
   with the initial layout pass. An absolute 1px threshold would incorrectly
   report the leading edge as "not at start" at mount time. Half a card step
   is the smallest tolerance that stays correct when the user has advanced
   by exactly one card (`scrollLeft ≈ cardStep` reads as "not at start" and
   "not at end" for any dataset of ≥3 cards).

5. Overflow detection: a single `ResizeObserver(track)` calls `syncNavState()`
   on every size change. `syncNavState()` sets or clears
   `hp-rankings--no-overflow` on the section in the same tick that it sets
   the disabled triplets — this fixes the resize-from-no-overflow dead state
   where only the class flipped and the button states lagged.
6. Reduced-motion listener: subscribe to the media query change event so a user
   toggling the OS preference mid-session gets the updated behaviour on the next
   nav click. The handler is a no-op body (motionBehavior() reads the live
   media query at click time) but is registered for symmetric teardown.

### 5.3 Teardown contract

The returned function:
- Disconnects the `ResizeObserver` created by this call.
- Removes every `click`, `scroll`, `scrollend`, and media-query listener
  added. Clears any `pendingScroll` timer.
- Restores each individual class/attribute on each button and the section
  to the **exact prior value** this invocation recorded in `mutationLog`
  / `classLog`. Values this invocation did not change are left alone —
  server-supplied initial state (e.g. the first-render prev-disabled
  triplet, or a pre-disabled next in a custom dataset) is preserved
  verbatim.
- Clears the section from the module-level WeakSet so re-init can re-bind.
- Idempotent (second call is a no-op).

### 5.4 No-op branch

If a section:
- has no `.hp-rankings__track`, `.hp-rankings__nav-btn--prev`, or
  `.hp-rankings__nav-btn--next`, OR
- has no `.hp-rankings__card`, OR
- has `cardStep <= 0`, OR
- the browser lacks `ResizeObserver` or `matchMedia`,

then that section is **skipped entirely** before any state is registered or
any listener is bound (preflight filter in `initRankingsCards`). The section
is never added to the `bound` WeakSet, and the returned teardown is the base
`ignore` function if no section passes preflight. CSS snap keeps the UX
usable; nav buttons remain first-render-correct (prev disabled, next
enabled).

### 5.5 State machine (nav buttons)

```
       scrollLeft < tol                       scrollLeft > max - tol
   ┌───────────────────────────────┐       ┌───────────────────────────────┐
   │                               │       │                               │
   ▼                               │       ▼                               │
 PREV_DISABLED <── syncNavState() ───> PREV_ENABLED
   │                                                 │
   │                                                 │
   └── syncNavState() [scrollLeft > max - tol] ──> NEXT_DISABLED <──┘
                                                      │
                                                      │ syncNavState() [scrollLeft ≤ max - tol]
                                                      ▼
                                                   NEXT_ENABLED

transition:
  disable(btn):   add .is-disabled; set aria-disabled=true; set tabindex=-1
  enable(btn):    remove .is-disabled; remove aria-disabled; remove tabindex
                  (per-attr mutation log restores exact prior value on teardown)

terminal:         maxScroll ≤ 1 == no-overflow — nav hidden, both disabled.
sync triggers:    initial bind, scroll (passive), scrollend (+ fallback timer),
                  ResizeObserver(track), inside each nav-button click handler.
```

### 5.6 Data flow diagram

```
    ┌─────────────────────────────────────────────┐
    │   First-render HTML (Stage B parity source) │
    │   `rankingsCardsHtml({ cards })` on server  │
    │   or inlined by the CMS                     │
    └─────────────┬───────────────────────────────┘
                  │
                  ▼
    ┌──────────────────────────────────┐
    │ Browser paints the section       │
    │ CSS applies:                     │
    │  - transparent bg                │
    │  - scroll-snap-type: x mandatory │
    │  - prev shows .is-disabled       │
    └─────────────┬────────────────────┘
                  │
                  ▼              (optional, progressive)
    ┌──────────────────────────────────────────┐
    │ `initRankingsCards()` runs:              │
    │  1. Preflight filter per section         │
    │  2. ResizeObserver -> syncNavState()     │
    │  3. scroll + scrollend -> syncNavState() │
    │  4. Click listeners -> scrollBy(cardStep)│
    │     with pendingScroll coalescing        │
    │  5. Initial syncNavState()               │
    └─────────────┬────────────────────────────┘
                  │
       ┌──────────┴──────────┬──────────────────┐
       │                     │                  │
       ▼                     ▼                  ▼
   user click            user swipe        viewport resize
   on prev/next        / trackpad scroll
       │                     │                  │
       └─────────┬───────────┴──────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ syncNavState() reads scrollLeft, │
    │ scrollWidth − clientWidth and    │
    │ sets both button triplets +      │
    │ .hp-rankings--no-overflow class  │
    │ in a single pass.                │
    └──────────────────────────────────┘
```

### 5.7 Error paths

| Error | Detection | Recovery |
|---|---|---|
| `ResizeObserver` undefined (very old browser) | `typeof window.ResizeObserver !== "function"` | Section is skipped by the preflight filter. Prev stays `is-disabled` from the server; next stays enabled. Users still scroll with trackpad/swipe and native snap. |
| `scrollend` unsupported | `scrollend` listener never fires | `SCROLLEND_FALLBACK_MS` timer clears `pendingScroll` and calls `syncNavState()`; functionally equivalent. |
| Nav button clicked while disabled (defence-in-depth) | `aria-disabled === "true"` on click target | `event.preventDefault()`; no `scrollBy`. |
| Nav button clicked while a smooth scroll is in flight | `pendingScroll === true` | Click is dropped (coalesced). Guard clears on `scrollend` or fallback timer. |
| `cardStep` computes to 0 (no cards rendered) | `querySelector('.hp-rankings__card') === null` or `offsetWidth + gap <= 0` | Section is skipped by the preflight filter. Nav remains in its first-render state. |
| Re-init on an already-bound section | WeakSet lookup | No-op; prior teardown is responsible for cleanup. |
| User toggles OS reduced-motion mid-session | `matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', ...)` | Next `scrollBy` call reads the live media query. |

---

## 6. Token reconciliation table

| # | Observed value | UDS/UBT token | Raw fallback + TODO |
|---|---|---|---|
| 1 | Section band bg (visually dark navy) | **transparent** (Q4) — no new token | `background: transparent` |
| 2 | Card default bg | **transparent** (Q4) | `background: transparent` |
| 3 | Card default text (attribution + see-all) | `$uds-color-base-white` | — |
| 4 | Card default border color | `$uds-color-base-white` (Q4) | // TODO: confirm from Figma if a different near-white value |
| 5 | Card default border weight | — | `1px` // TODO: confirm with design |
| 6 | Card border radius | — | `0` // TODO: confirm with design (screenshots look square) |
| 7 | Card width (constant) | — | `18rem` (288px) // TODO: confirm with design — pull from Figma Dev Mode on node `13467:58610` |
| 8 | Gap between cards | `$uds-size-spacing-2` placeholder | // TODO: confirm with design |
| 9 | **Media aspect-ratio** (locked v3 per Q1=A) | — | `2 / 1` at every breakpoint; mobile media box renders at 288 × 144 by design |
| 10 | **Image intrinsic dimensions** (locked v3 per Q2=C) | — | `500 × 251` (dataset-wide defaults via top-level `rankingsCardsHtml({ imageWidth, imageHeight })`); emitted as `width="500" height="251"` on every `<img>`. Not integer-perfect 2:1 — matches Figma export; CSS `aspect-ratio: 2 / 1` + `object-fit: cover` resolves the 1 px overshoot. |
| 11 | **Card media background** (new in v2) | **transparent** | `background: transparent` — the dark hero bleeds through if PNGs have an alpha channel |
| 12 | **Hover opacity transition duration** (new in v2) | — | `150ms` // TODO: confirm with design |
| 13 | **Attribution footer padding** (new in v2) | `$uds-size-spacing-2` placeholder | // TODO: confirm with design |
| 14 | Card hover bg | `$uds-color-base-white` | — |
| 15 | Card hover text | `$asu-gray-1` | — |
| 16 | Card hover attribution link | `$uds-color-brand-maroon` | — |
| 17 | Attribution link default color | `$uds-color-base-white` | — |
| 18 | Nav button bg (active) | `$uds-color-base-white` | — |
| 19 | Nav button icon color (active) | `$asu-gray-1` | — |
| 20 | Nav button bg (disabled) | `$asu-gray-3` | — |
| 21 | Nav button diameter | `$uds-size-icon-xl` (3rem) placeholder | // TODO: confirm with design |
| 22 | Nav gap | `$uds-size-spacing-1` placeholder | // TODO: confirm with design |
| 23 | See-all link color | `$uds-color-base-white` | — |
| 24 | Focus ring (inner) | `var(--hp-focus-inner)` (reused) | — |
| 25 | Focus ring (outer) | `var(--hp-focus-outer)` (reused) | existing `TODO: #00BAFF` carried over from package |
| 26 | Font family (attribution footer + see-all only) | `$uds-font-family-base` | — |
| 27 | Section padding-block | `$uds-size-spacing-6` placeholder | // TODO: confirm with design |
| 28 | Section inner max-width | — | `1440px` matches reimagine `// TODO: confirm with design` |
| 29 | Forced-colors fallbacks | system keywords (`CanvasText`, `ButtonText`, `ButtonFace`, `Canvas`, `GrayText`, `Highlight`) | — |

**Removed in v2** (rows deleted from v1): card inner padding (replaced by media
aspect-ratio sizing + footer padding), caption pill bg/text/padding, rank
number font size, rank suffix size, topic size. Those rules no longer exist in
the SCSS because the HTML elements they styled no longer exist in the DOM.

**Zero raw hex is emitted anywhere in the SCSS.** All raw values are either
pixel/rem sizes with a `// TODO`, the `2 / 1` aspect-ratio literal, the
`500 × 251` image attribute literals, the `150ms` duration literal, the
`center 30%` object-position literal, or system-color keywords inside
`@media (forced-colors: active)`.

---

## 7. Accessibility plan

### 7.1 Landmarks and heading

- Root: `<section class="hp-rankings" aria-labelledby="hp-rankings-heading">`.
- Heading: `<h2 class="visually-hidden">ASU rankings</h2>`.
  - **Choice justification (v2)**: with the v2 image-first content model, no
    visible HTML text appears inside the component except the "Attribution
    link" and the "See all ASU rankings" link. The ranking statement for each
    card lives in the default-image `alt` attribute (`imageAlt`). The
    visually-hidden `<h2>` provides the section landmark label; each card's
    `imageAlt` provides the per-card content. Together, SR users receive the
    full ranking content exactly once per card (default img) plus the section
    name — no double announcement from the decorative hover img (which is
    `alt=""` + `aria-hidden="true"`). **The alt text IS the content.**
  - A visible heading would introduce visual design not present in Figma. A
    visually-hidden heading preserves the sectioning semantic and the
    `aria-labelledby` target without altering visual design. Bootstrap 5's
    `.visually-hidden` utility (already shipped by `unity-bootstrap-theme`) is
    the exact pattern — no custom CSS.
- `headingId` must be unique per rendered copy (mirrors `reimagine-helpers`
  `headingId` parameter).

### 7.2 Keyboard model

Tab order:
1. `.hp-rankings__nav-btn--prev` (if enabled)
2. `.hp-rankings__nav-btn--next` (if enabled)
3. Each `.hp-rankings__attribution` in DOM order (card 1, card 2, …, card N)
4. `.hp-rankings__see-all`

The **track element is NOT keyboard-focusable** (`tabindex` not set). Rationale:
- The primary keyboard affordance is Tab-through-card-links. Each attribution
  link is a real `<a>`, so Tab moves through them in reading order.
- When focus lands on a card link that is horizontally scrolled off-screen,
  browsers run `scrollIntoView` on the newly focused element; combined with
  `scroll-snap-align: start` on the card, the resting scroll position is a
  valid snap stop (not a half card).
- No arrow-key scrolling on the track is required because the attribution
  links are the primary keyboard affordance and the nav buttons are
  programmatic alternatives for sighted keyboard users who want to pan the
  row without moving focus. Adding arrow-key panning to the track would
  create a two-tier keyboard model (track focus vs. card-link focus) with
  overlapping semantics — ruled out.
- Disabled nav buttons use `tabindex="-1"` to skip them in the tab order while
  retaining AT discoverability via `aria-disabled`.

Enter / Space on nav buttons → activate. Enter on attribution link → follow href.
No Escape handler (nothing to dismiss).

### 7.3 Focus-visible

- All interactive elements (prev, next, each attribution link, see-all) show the
  two-tone ring: `box-shadow: var(--hp-focus-inner), var(--hp-focus-outer)`.
- `outline: 2px solid transparent` is set so forced-colors mode still shows a
  ring (box-shadow is dropped in forced-colors; the transparent outline inherits
  `CanvasText`).

### 7.4 320px reflow (WCAG 1.4.10)

The horizontally-scrolling track creates **one-direction overflow**, which is
the explicit exception in WCAG 1.4.10:

> Except for parts of the content which require two-dimensional layout for
> usage or meaning.

A horizontal carousel is a one-dimensional presentation (the row) and the user
can access every card by scrolling. The surrounding page must still reflow to
one column at 320px — this is the host page's responsibility, not the
component's. Component contract: the track's own horizontal scroll does NOT
violate reflow because it is scoped to the component and does not force the
page to scroll horizontally.

**Media box reflow (updated in v3 — taller→shorter media per Q1 = A)**: the
card width stays constant across breakpoints; `.hp-rankings__media` uses
`width: 100%` + `aspect-ratio: 2 / 1` with no explicit `height` CSS. The
images stretch to fill the box via `width: 100%; height: 100%;
object-fit: cover; object-position: center 30%`. This guarantees the media
area resizes proportionally with the card and never overflows its container
regardless of the user's text zoom, system font, or forced-colors
transforms.

**Implications of the v2 → v3 ratio flip (4 / 5 → 2 / 1)**: the media box
is now **shorter and wider** at every breakpoint. Concrete numbers for the
locked 288 px card width:

- **320 px viewport** (hard reflow floor): card is 288 px wide; media box is
  288 × 144. Previously under 4 / 5 the media box was 288 × 360 — now it's
  216 px **shorter**, which gives the attribution footer (and the See-all
  controls row) materially more vertical room above the fold and reduces
  the total section height by ~216 px per card row.
- **393 px viewport** (package's smallest tested): card is 288 px wide;
  media box is 288 × 144, identical to 320 px because the card width is
  constant.
- **Desktop viewports (1024–1920)**: card is 288 px wide; media box is
  288 × 144. The total card height drops by ~216 px vs v2.1, so the row's
  overall vertical footprint shrinks and the "See-all" controls baseline
  sits higher on the page. This is accepted per Q1 = A and is the designer's
  intent per the Figma reference.

**No change to the one-direction overflow argument** — the horizontal
scroll track still exists at every breakpoint; the WCAG 1.4.10 exception
still applies.

**Verification**: at viewport 320px (and the package's smallest viewport 393px),
the component renders exactly one visible card, the nav buttons wrap under on
their own row, and the See-all link is on the same baseline. Confirmed by the
mobile screenshot `.intake/widthmobile.png`.

### 7.5 Forced colors

See §4.15. Cards get `border: 1px solid CanvasText` + `background: Canvas` so
white-on-transparent default is replaced by system colors; `.hp-rankings__media`
also receives a `CanvasText` border so the image area remains visually
distinct even when the UA transforms the artwork into monochrome glyphs. Icons
use `currentColor` so they adapt automatically. Images may be transformed by
the UA (that is a feature of forced-colors mode); the card chrome compensates
with system-color borders. Explicitly no `forced-color-adjust: none`
anywhere — we respect the UA's accessibility transforms rather than opting
out.

**Updated in v3 (Q1 = A + Q4 = C)**: because the media box is now `2 / 1`
and `.hp-rankings__media` has `overflow: hidden`, the forced-colors outline
(`border: 1px solid CanvasText` on `.hp-rankings__media`) **tracks the
shorter media bbox** at every breakpoint. The outline must not drift from
the layout bbox — a 1 px tolerance is accepted because `object-fit: cover`
can push the painted pixels a sub-pixel distance in either axis. The
**row 23b** test in §8 asserts this invariant explicitly: in forced-colors
mode, the outline bbox and the media bbox agree within ±1 px.

### 7.6 Reduced motion

- CSS: `scroll-behavior: smooth` is wrapped in `@media (prefers-reduced-motion:
  no-preference)` so the default (`auto`) kicks in under reduced motion.
- JS: `motionBehavior()` reads the live media query at every click so
  `scrollBy` uses `"auto"` when the user has reduced motion on.
- No transforms, no animations on the component — the only motion is the native
  scroll, which this toggle fully controls.

### 7.7 Labels and names

- `aria-labelledby` on `<section>` → the visually-hidden `<h2>`.
- Each attribution link's accessible name is its visible text ("Attribution
  link"). The `href` differs per card — users distinguish destinations by the
  surrounding card content (visible to sighted users). If the Jira ticket
  requires richer per-card accessible names, see §11 open item.
- Nav buttons:
  - prev `aria-label="Previous ranking"`
  - next `aria-label="Next ranking"`
- Nav wrapper: `<div role="group" aria-label="Rankings carousel navigation">`.
- See-all: visible text "See all ASU rankings" (no `aria-label` needed).
- **Image alt text (new in v2)**: each card's default `<img>` MUST carry a
  non-empty `imageAlt` string that reproduces the full ranking statement
  (rank + topic + caption source). The hover `<img>` is decorative
  (`alt=""` + `aria-hidden="true"`). See §7.9 for the full policy.
- No `aria-live` region — cards are static content; narrating scroll position
  would be noise and interrupt reading.

### 7.8 Contrast caveat (consumer contract)

**The component ships with `background: transparent` and white text/borders.
WCAG contrast is only met when the parent surface's rendered background is dark
enough.** The component's documentation (component README section + Storybook
docs block) states this consumer contract explicitly. All Storybook stories
render the section on a dark backdrop so interaction and a11y tests exercise
compliant pixels.

This pattern is acceptable per `asu-design-a11y` only when the contract is
documented. Any consumer that places `rankings-cards` on a light surface MUST
either (a) accept the contrast failure as their problem to fix with a wrapping
dark backdrop, or (b) request a light-surface variant in a follow-up ticket.

### 7.9 Image alt text policy (new in v2; v3 framing addendum)

- **Default `<img>` alt**: carries the complete ranking statement — the rank
  clause ("#1 in the U.S."), the "and #X in the world for" clause, the topic,
  and the caption source clause ("ASU ahead of Stanford and UC Berkeley").
  Example: `"#1 in the U.S. and #2 in the world for sustainable practices.
  ASU ahead of Stanford and UC Berkeley."`
- **Hover `<img>` alt**: empty (`alt=""`) + `aria-hidden="true"`. The hover
  variant is purely decorative — it is a colour variant of the same artwork,
  so re-announcing its content would cause screen-reader double-reads.
- **Content model ownership**: `imageAlt` is a required field on each card
  (part of the `RankingCard` typedef). The CMS supplies the alt text; the
  component does NOT fabricate alt. If the CMS omits it, the content contract
  is violated — see soft-check below.
- **DEV soft check**: if a card is passed to `rankingsCardsHtml` with
  `imageAlt === ""`, the component renders the default `<img>` with `alt=""`
  (never fabricates text) AND emits a `console.warn` guarded by
  `import.meta.env.DEV` so the warning appears in Storybook but is tree-shaken
  from the production bundle. Soft check — the hard content contract is
  enforced at the CMS layer, not here.
- **v3 framing note (Q1 = A + Q4 = C)**: with the media box flipped from
  `4 / 5` to `2 / 1` and `object-position: center 30%` applied, the painted
  crop centers on the upper third of the source PNG (where the ranking
  numeral sits in the Figma composition). The **alt text does not change**
  as a function of framing — alt describes the *ranking statement*, which is
  invariant across any crop that keeps the statement readable. If a future
  design iteration moves the numeral out of the upper third, update
  `object-position` (see §11.2 Figma TODO) — do NOT change the alt
  convention.

---

## 8. Test matrix

Every Storybook story referenced below MUST be registered in
`packages/components-homepage/tests/stories-to-test.mjs` so
`yarn test:accessibility` audits it.

| # | Behaviour | Story ID | Viewport | Test level | Verification command | Failure mode covered |
|---|---|---|---|---|---|---|
| 1 | Default render — 7-card HTML shape complete on first render; each card contains exactly two `<img>` with correct `src`, `alt`, `width`, `height`, `loading="lazy"`, `decoding="async"` (default img non-empty `alt`; hover img `alt=""` + `aria-hidden="true"`) | `homepage-rankings-cards--default` | hp1920 | component (story play) | `yarn test:storybook` | HTML-parity break (missing/added DOM nodes, missing/incorrect `<img>` attributes) |
| 2 | Default render at phone 393 | `homepage-rankings-cards--phone-393` | hp393 | component | `yarn test:storybook` | mobile layout regression |
| 3 | Default render at tablet 768 | `homepage-rankings-cards--tablet-768` | hp768 | component | `yarn test:storybook` | mid-size layout regression |
| 4 | Default render at desktop 1024 | `homepage-rankings-cards--desktop-1024` | hp1024 | component | `yarn test:storybook` | layout regression |
| 5 | Default render at desktop 1280 | `homepage-rankings-cards--desktop-1280` | hp1280 | component | `yarn test:storybook` | layout regression |
| 6 | Default render at desktop 1440 | `homepage-rankings-cards--desktop-1440` | hp1440 | component | `yarn test:storybook` | layout regression |
| 7 | Default render at large 1920 | `homepage-rankings-cards--large-1920` | hp1920 | component | `yarn test:storybook` | layout regression |
| 8 | Hover state — card 2 forced via `[data-rankings-hover]`: card bg = `rgb(255, 255, 255)`, attribution link color = `rgb(140, 29, 64)` (maroon), `.hp-rankings__img--default { opacity: 0 }`, `.hp-rankings__img--hover { opacity: 1 }` | `homepage-rankings-cards--hover` | hp1280 | component (forceHover mirror) | `yarn test:storybook` | hover colour flip or image swap broken |
| 9 | Focus-visible on card attribution link — two-tone ring | `homepage-rankings-cards--focus-visible-card` | hp1280 | component (realKeyboard) | `yarn test:storybook` | focus indicator missing |
| 10 | Focus-visible on prev button | `homepage-rankings-cards--focus-visible-prev` | hp1280 | component (realKeyboard) | `yarn test:storybook` | focus indicator missing on nav |
| 11 | Focus-visible on next button | `homepage-rankings-cards--focus-visible-next` | hp1280 | component (realKeyboard) | `yarn test:storybook` | focus indicator missing on nav |
| 12 | Focus-visible on see-all link | `homepage-rankings-cards--focus-visible-see-all` | hp1280 | component (realKeyboard) | `yarn test:storybook` | focus indicator missing |
| 13 | Prev disabled at start — initial scrollLeft=0 → `is-disabled` + `aria-disabled="true"` + `tabindex="-1"` on prev | `homepage-rankings-cards--prev-disabled-at-start` | hp1280 | component (initRankingsCards) | `yarn test:storybook` | disabled state missing |
| 14 | Next click scrolls one card and prev becomes enabled | `homepage-rankings-cards--next-scrolls-one-card` | hp1280 | component (initRankingsCards + realPointer) | `yarn test:storybook` | step-size regression / state desync |
| 15 | Prev click after Next returns to start and re-disables prev | `homepage-rankings-cards--prev-scrolls-back` | hp1280 | component | `yarn test:storybook` | reverse-direction regression |
| 16 | Next disabled at end — last card leading-edge fully visible | `homepage-rankings-cards--next-disabled-at-end` | hp1280 | component | `yarn test:storybook` | end-of-track state missing |
| 17 | No overflow — 1 card dataset → `.hp-rankings--no-overflow` on section, nav hidden, see-all still visible | `homepage-rankings-cards--one-card-no-overflow` | hp1280 | component (ResizeObserver branch) | `yarn test:storybook` | nav visibility rule broken |
| 18 | No overflow — 2 cards at 1920 (fits in frame) → no-overflow class, nav hidden | `homepage-rankings-cards--few-cards-no-overflow` | hp1920 | component | `yarn test:storybook` | breakpoint-sensitive overflow miscalc |
| 19 | Many cards (12-card dataset) at 393 → 12 snap stops, prev→next cycle disables correctly at both ends | `homepage-rankings-cards--many-cards-overflow` | hp393 | component | `yarn test:storybook` | overflow stress / cumulative state drift |
| 20 | Snap-to-start after manual trackpad scroll — scrolling mid-card and releasing lands on a card leading edge | `homepage-rankings-cards--snap-to-start` | hp1280 | component (programmatic `scrollTo` + `scrollend` check) | `yarn test:storybook` | snap regression |
| 21 | Reduced motion — `emulateReducedMotion(true)`; Next click uses `behavior: 'auto'`; `getComputedStyle('.hp-rankings__img--hover').transitionDuration === '0s'` | `homepage-rankings-cards--reduced-motion` | hp1280 | component (`emulateReducedMotion`) | `yarn test:storybook` | motion preference ignored on scroll or image hover transition |
| 22 | Forced-colors — `(forced-colors: active)` emulation: cards show `CanvasText` border, `.hp-rankings__media` shows `CanvasText` border, nav buttons show `ButtonText` border, no white-on-transparent invisible content | `homepage-rankings-cards--forced-colors` | hp1280 | component | `yarn test:storybook` | high-contrast regression |
| 23 | **Image sizing (v3 hybrid, Q3 = D)** — three-way assertion: (a) `getComputedStyle('.hp-rankings__media').aspectRatio === '2 / 1'` as an exact string match on every card; (b) layout ratio `rect.width / rect.height` is within ±0.01 of `2.0` on every card's `.hp-rankings__media`; (c) stack-equality — both `<img>` elements per card have `getBoundingClientRect().width` and `.height` equal via `toBeCloseTo(..., 1)` (1-decimal tolerance in CSS px) | `homepage-rankings-cards--image-sizing` | hp1280 | component | `yarn test:storybook` | aspect-ratio string regression, layout drift, or image stack misalignment |
| 23b | **Forced-colors outline bbox (v3, Q4 = C — belt + suspenders)** — under `(forced-colors: active)` emulation, assert `.hp-rankings__media`'s computed outline/border bbox agrees with its layout bbox within ±1 px on every card (top, right, bottom, left edges each within ±1 px). Guards against the forced-colors outline drifting from the shorter 2 / 1 media box. | `homepage-rankings-cards--forced-colors-outline-bbox` | hp1280 | component (`(forced-colors: active)` emulation) | `yarn test:storybook` | forced-colors outline drift when media ratio changes |
| 24 | **No-alt DEV warning** — passing a card with `imageAlt: ""` to `rankingsCardsHtml` emits a `console.warn` (DEV-only; skipped under `import.meta.env.PROD`) | `homepage-rankings-cards--no-alt-dev-warning` | hp1280 | component | `yarn test:storybook` | soft content contract check missing |
| 25 | Idempotent `initRankingsCards` — second init is a no-op; teardown removes exactly what the init added | `homepage-rankings-cards--idempotent-init` | hp1280 | component | `yarn test:storybook` | double-bind / leak |
| 26 | Teardown — calling teardown removes `.is-disabled`, `aria-disabled`, `tabindex="-1"` added by this init, and disconnects observers | `homepage-rankings-cards--teardown-cleans-up` | hp1280 | component | `yarn test:storybook` | leak / stuck-disabled nav |
| 27 | GA shape parity with reimagine — assert zero `data-ga*` attributes anywhere in the rendered section | `homepage-rankings-cards--no-ga-attributes` | hp1280 | component (`querySelectorAll('[data-ga], [data-ga-name], …]')`) | `yarn test:storybook` | accidental GA markup |
| 28 | A11y audit — alfa WCAG 2.1 AA on every registered story | all story IDs | all registered viewports | contract | `yarn test:accessibility` | a11y violation |
| 29 | Lint | n/a | n/a | lint | `yarn lint` | style regressions |
| 30 | Build | n/a | n/a | integration | `yarn build` | compile / docs regression |

**Removed in v2**: all text-content assertions for rank number, rank suffix,
rank-world phrase, topic, and caption pill text. Those DOM nodes no longer
exist; the content moved into the `<img alt>` attribute and is covered by the
row-1 attribute-shape assertion and the row-8 hover-swap assertion.

### 8.1 Test double strategy

- **Pointer events**: `realPointer` from `video-control-helpers.jsx` (real browser events — the only reliable way to produce `:hover` and genuine clicks).
- **Keyboard**: `realKeyboard` from `reimagine-helpers.jsx` for Tab and Enter.
- **Hover state**: `forceHover` helper (same CSS-mirror pattern as reimagine — a `[data-rankings-hover]` attribute replays the `.hp-rankings__card:hover` rules).
- **Reduced motion**: `emulateReducedMotion(true)` helper (vitest browser command).
- **Viewport**: `resizeViewport` helper (vitest browser command) for stories whose behaviour depends on overflow.
- **No mocks**. `ResizeObserver` is the real browser implementation; story
  tests await the real `scrollend` event (with a `setTimeout` fallback) or
  the existing `waitFor` pattern from reimagine to let the ResizeObserver
  callback flush. **Amended v2.1**: `IntersectionObserver` is no longer part
  of the component — the edge state comes from `track.scrollLeft`.

### 8.2 Behavioural matrix (interactive component)

| User action | Current state | Next state | Visual change | Animation |
|---|---|---|---|---|
| Click Next | prev=disabled, scrollLeft=0 | prev=enabled, scrollLeft=cardStep | Row slides left by one card | `scroll-behavior: smooth` (or `auto` if reduced motion) |
| Click Next (last card visible) | next=enabled, scrollLeft < max | next=disabled, scrollLeft=max | Row slides to end | smooth / auto |
| Click Prev | prev=enabled, scrollLeft > 0 | prev=enabled (unless now 0), scrollLeft -= cardStep | Row slides right by one card | smooth / auto |
| Click Prev while disabled | prev=disabled | no change | no change | none |
| Tab onto an off-screen card link | focus=prev or next or earlier link | focus on target card link | browser auto-scrolls to snap stop | native focus-scroll (CSS snap resolves to leading edge) |
| Swipe/trackpad scroll | any | nearest snap stop on release | row inertia then snap | native |
| Viewport resize (fits all cards) | overflows | no-overflow | nav hidden, see-all remains | none |
| Viewport resize (becomes overflow) | no-overflow | overflows | nav shown; buttons re-evaluated via IO | none |
| OS toggles reduced motion | smooth | auto (or vice versa) | next click uses new behaviour | — |

---

## 9. File manifest

| Path | Create / modify | Reason |
|---|---|---|
| `packages/components-homepage/src/components/rankings-cards/rankings-cards-helpers.jsx` | **create** | `rankingsCardsHtml` template, `AUDIENCES`-style default dataset, `forceHover` mirror, re-exported `realPointer`/`realKeyboard`/`emulateReducedMotion`/`resizeViewport` for stories. |
| `packages/components-homepage/src/components/rankings-cards/_rankings-cards.scss` | **create** | All component styles per §4; imports the UDS variables indirectly through the entry SCSS. |
| `packages/components-homepage/src/components/rankings-cards/rankings-cards.js` | **create** | `initRankingsCards` progressive-enhancement module per §5. |
| `packages/components-homepage/src/components/rankings-cards/rankings-cards.stories.jsx` | **create** | All Storybook stories listed in §8. Each story renders inside a dark backdrop wrapper (`<div style={{ background: '#002b5c', padding: '2rem' }}>…</div>`) to simulate the parent hero band and satisfy the contrast contract during visual + a11y tests. |
| `packages/components-homepage/src/scss/components-homepage.scss` | **modify** | Append `@import "../components/rankings-cards/rankings-cards";` after the reimagine import. |
| `packages/components-homepage/src/js/index.js` | **modify** | Append `export { initRankingsCards } from "../components/rankings-cards/rankings-cards.js";`. |
| `packages/components-homepage/tests/stories-to-test.mjs` | **modify** | Append all `homepage-rankings-cards--*` story IDs (see §8). |
| `packages/components-homepage/src/img/rankings/` | **create (new folder)** | Per-card PNG assets. Co-located with the existing `src/img/` tree already used by the `reimagine` scribble SVGs (user answer C1). |
| `packages/components-homepage/src/img/rankings/.gitkeep` | **create** | Ensures the folder exists in version control even if the HITL process rejects placeholder PNGs. |
| `packages/components-homepage/src/img/rankings/README.md` | **create** | Documents the file-naming convention and the dimensions contract (see below). |
| `packages/components-homepage/src/img/rankings/<slug>.png` × 7 | **create (placeholder; v3.1 — copy from `.intake/rank-01-w.png`)** | Default-state PNGs for the default 7-card dataset so Storybook stories render. **v3.1**: all 7 files are identical copies of `.intake/rank-01-w.png` (500 × 251, white/default variant). No pure-Node pngjs script, no 400 × 500 PNGs. See §9.2. |
| `packages/components-homepage/src/img/rankings/<slug>--hover.png` × 7 | **create (placeholder; v3.1 — copy from `.intake/rank-01.png`)** | Hover-state PNGs for the same 7 cards. **v3.1**: all 7 files are identical copies of `.intake/rank-01.png` (500 × 251, dark navy/hover variant). Same intrinsic dimensions as the default pair. No `-s22` variants. See §9.2. |
| `packages/components-homepage/src/img/rankings/TODO.md` | **create** | Points design to the Figma frame as the source of truth; lists each placeholder slug and the real artwork it must be replaced with before merge. |

### 9.1 `img/rankings/README.md` content (locked in v2)

The README MUST document, at minimum:

- **File naming convention (locked)**:
  - Default state: `img/rankings/<slug>.png`
  - Hover state: `img/rankings/<slug>--hover.png`
  - `<slug>` is lowercase, hyphen-separated, kebab-cased, derived from the
    ranking topic (e.g. `sustainable-practices`, `innovation`,
    `global-impact`). The suffix `--hover` is a double-dash to match the BEM
    modifier pattern used elsewhere in the design system and to avoid
    collision with slug separators. `// TODO: confirm --hover suffix with
    design` (see §11.2).
- **Dimensions contract (locked v3 per Q1 = A + Q2 = C)**:
  - Both PNGs in a pair MUST share identical intrinsic `width` × `height`.
  - All cards share the same intrinsic dimensions (dataset-wide, not
    per-card). Defaults: `500 × 251` via the top-level
    `rankingsCardsHtml({ imageWidth, imageHeight })` parameters.
  - All cards MUST share the same aspect-ratio, locked at `2 / 1` at every
    breakpoint (§6 row 9). Different aspect-ratios across cards would break
    the single-value `aspect-ratio` CSS rule on `.hp-rankings__media`.
- **Transparency**: PNGs SHOULD use an alpha channel so the dark hero bg
  bleeds through on the default state. Opaque PNGs are allowed but will show
  their own background colour and bypass the component's transparent-section
  contract (§4.2, §4.5).

### 9.2 Placeholder asset generation (locked in v3.1 — copy-from-`.intake/`)

The coder MUST NOT commit real brand assets without the designer's explicit
approval. Placeholder PNGs are the two 500 × 251 artifacts already present in
`.intake/`, reused across the dataset so Storybook stories, visual
regression (acp-visual), and HTML-parity tests have artifacts to work
with.

**STRUCK (v2 approach — do NOT execute)**: ~~Fallback source: a pure-Node
`pngjs` one-shot script generating 400 × 500 solid-color PNGs with a text
label.~~ Removed in v3. No 400 × 500 PNG may exist under
`packages/components-homepage/src/img/rankings/`. If a reviewer finds one,
reject the commit.

**Locked v3.1 procedure (copy, do not generate — user-directed swap 2026-11-03T21:10Z):**

1. Confirm the two canonical placeholders exist at
   `.intake/rank-01-w.png` (default/white, 500 × 251) and
   `.intake/rank-01.png` (hover/dark navy, 500 × 251). Explicitly **no**
   `-s22` variants.
2. For each of the 7 cards in the default `DEFAULT_CARDS` dataset in
   `rankings-cards-helpers.jsx`, copy the two placeholders into
   `packages/components-homepage/src/img/rankings/` using the final
   filenames the dataset expects. Concretely:
   - `.intake/rank-01-w.png` → `packages/components-homepage/src/img/rankings/<slug>.png`
     (one copy per card slug)
   - `.intake/rank-01.png` → `packages/components-homepage/src/img/rankings/<slug>--hover.png`
     (one copy per card slug)
   where `<slug>` is each card's slug as declared in `DEFAULT_CARDS`.
3. The **same pair** of PNGs is reused for every card. All 7 default
   `<slug>.png` files are byte-identical copies of `rank-01-w.png`; all 7
   default `<slug>--hover.png` files are byte-identical copies of
   `rank-01.png`. This is intentional and acceptable — the dataset-wide
   intrinsics contract (§3, Q2 = C) guarantees stack-equality, and no
   per-card artwork variance is required until designer artwork replaces
   them.

**Alternative source (optional, if the Figma frame is fetchable at
implementation time)**: export each card's composition from Figma Dev Mode
at the locked 500 × 251 intrinsic dimensions and commit those exports in
place of the copied `.intake/` pair. The 7-card byte-identical rule only
applies to the pre-designer-artwork placeholder phase.

Real brand PNGs replace the placeholders before merge to `dev`. The
placeholder commit is isolated (Task 1) and reversible.

Not modified (intentionally): the `component-header-footer` package, any
`unity-react-core` file, any file in `unity-bootstrap-theme`. No new UDS tokens.

---

## 10. Bite-sized task list for the coder (TDD RED → GREEN)

Each task is independently committable (Conventional Commit prefix shown). Each
task has a RED (failing test first) and GREEN (make it pass). Coder uses the
`tdd-red-green` skill.

### Task 1 — markup template + placeholder PNGs (asset copy/replace)
**Commit**: `feat(components-homepage): add rankingsCardsHtml markup template`

> **Dependency note (v3.1 — copy-from-`.intake/`)**: the two canonical
> placeholders at `.intake/rank-01-w.png` (default/white, 500 × 251) and
> `.intake/rank-01.png` (hover/dark navy, 500 × 251) are the asset source for
> this task. No pure-Node pngjs script runs. No 400 × 500 PNG is permitted
> under `packages/components-homepage/src/img/rankings/` at any point. The
> same pair is reused across all 7 cards until designer artwork replaces
> them. Real brand PNGs replace the placeholders before merge to `dev`;
> this task's commit is isolated and reversible.

- **Files**:
  - `src/components/rankings-cards/rankings-cards-helpers.jsx` (create)
  - `src/img/rankings/.gitkeep` (create)
  - `src/img/rankings/README.md` (create — follows §9.1)
  - `src/img/rankings/TODO.md` (create — maps placeholder slugs to Figma
    frames)
  - `src/img/rankings/<slug>.png` × 7 (create — **byte-identical copies of
    `.intake/rank-01-w.png`**, one per `DEFAULT_CARDS` slug)
  - `src/img/rankings/<slug>--hover.png` × 7 (create — **byte-identical
    copies of `.intake/rank-01.png`**, one per `DEFAULT_CARDS` slug)
- **Asset-copy sub-steps (v3.1)**:
  1. Verify `.intake/rank-01-w.png` exists and is 500 × 251.
  2. Verify `.intake/rank-01.png` exists and is 500 × 251.
  3. For each slug in `DEFAULT_CARDS`:
     - `cp .intake/rank-01-w.png packages/components-homepage/src/img/rankings/<slug>.png`
     - `cp .intake/rank-01.png packages/components-homepage/src/img/rankings/<slug>--hover.png`
  4. Confirm `ls packages/components-homepage/src/img/rankings/` lists 14
     PNGs (7 default + 7 hover) plus `.gitkeep`, `README.md`, `TODO.md`.
     Zero `-s22` variants permitted.
  5. Confirm no 400 × 500 PNG exists under the target directory
     (`identify` or `file` each PNG; height must be 251, width 500).
- **RED**: write a story test (`homepage-rankings-cards--default`) that calls
  `rankingsCardsHtml({ cards })` with the default 7-card dataset and asserts
  the DOM shape from §3.3 (section, `aria-labelledby`, 7 cards, each card
  containing a `.hp-rankings__media` with exactly two `<img>` elements with
  the correct `src`, `alt`, `width="500"`, `height="251"`, `loading="lazy"`,
  `decoding="async"` attributes — default img has non-empty `alt`, hover img
  has `alt=""` + `aria-hidden="true"`, no rank/topic/caption HTML elements,
  7 attribution links, nav group with 2 buttons, see-all link). Run
  `yarn test:storybook` — fails (file missing).
- **GREEN**: implement `rankingsCardsHtml` returning the string from §3.3
  (the default dataset's `imageSrc` / `imageSrcHover` paths point at the
  committed placeholder PNGs via relative path `img/rankings/<slug>.png`;
  the template reads `imageWidth` / `imageHeight` from the top-level
  options with defaults 500 / 251 per §3.1 Q2 = C). Re-run
  `yarn test:storybook` — passes for this one test.
- **Depends on**: none.

### Task 2 — SCSS partial (ratio + intrinsics + tests)
**Commit**: `feat(components-homepage): add rankings-cards styles`
- **Files**: `src/components/rankings-cards/_rankings-cards.scss` (create);
  `src/scss/components-homepage.scss` (modify, append import).
- **RED**: add Storybook stories for `--phone-393`, `--tablet-768`,
  `--desktop-1280`, `--large-1920`, `--hover`, `--focus-visible-card`,
  `--reduced-motion`, `--forced-colors`, `--image-sizing`,
  `--forced-colors-outline-bbox` (v3, row 23b). Assertions on
  computed styles (`getComputedStyle`):
    - card has `width = 288px` (or the TODO-confirmed value)
    - track has `scroll-snap-type: x mandatory`
    - card background `transparent`
    - **(v3, Q1 = A)** `.hp-rankings__media` computed `aspect-ratio` string
      equals `'2 / 1'` exactly on every card at every tested viewport
      (including hp393 where the box renders at 288 × 144) and
      `display: grid`
    - **(v3, Q3 = D hybrid)** `.hp-rankings__media` layout ratio
      `rect.width / rect.height` is within ±0.01 of `2.0` on every card
    - **(v3, Q3 = D hybrid)** both images per card have identical
      `getBoundingClientRect().width` and `.height` via
      `toBeCloseTo(..., 1)` (1-decimal tolerance in CSS px)
    - **(v3, Q4 = C)** `getComputedStyle('.hp-rankings__img').objectFit`
      is `'cover'` and `.objectPosition` is `'center 30%'` (or the
      resolved `50% 30%` equivalent, whichever the UA normalises to —
      test accepts either literal)
    - **(v3, Q2 = C)** each `<img>` has `getAttribute('width') === '500'`
      and `getAttribute('height') === '251'`; when `rankingsCardsHtml` is
      called with `{ imageWidth: 800, imageHeight: 400 }` the attributes
      flip to `'800'` / `'400'` on every image in the output
    - default `.hp-rankings__img--default` has `opacity: 1`, hover image
      `.hp-rankings__img--hover` has `opacity: 0`
    - under `[data-rankings-hover]`: card bg `rgb(255, 255, 255)`,
      attribution link `rgb(140, 29, 64)` (maroon),
      `.hp-rankings__img--default` opacity `0`, `.hp-rankings__img--hover`
      opacity `1`
    - under `emulateReducedMotion(true)`: track `scroll-behavior` is `auto`
      AND `.hp-rankings__img--hover` computed `transition-duration` is `0s`
    - under `(forced-colors: active)` emulation: `.hp-rankings__media` has
      a visible `CanvasText` border
    - **(v3, Q4 = C — row 23b)** under `(forced-colors: active)` emulation,
      the computed outline/border bbox of `.hp-rankings__media` agrees with
      its layout `getBoundingClientRect()` within ±1 px on each edge (top,
      right, bottom, left)
  Run `yarn test:storybook` — fails (styles not applied).
  The old RED stories that asserted rank/topic/caption text colors are
  **removed** — those DOM nodes no longer exist (see §8 "Removed in v2").
- **GREEN**: implement the SCSS from §4 (media box with `aspect-ratio: 2 / 1`,
  `object-fit: cover`, `object-position: center 30%`, opacity swap, and the
  `(prefers-reduced-motion: no-preference)` gate around the transition).
  Re-run — passes.
- **Depends on**: Task 1.

### Task 3 — progressive-enhancement JS
**Commit**: `feat(components-homepage): add initRankingsCards nav + IO`
- **Files**: `src/components/rankings-cards/rankings-cards.js` (create);
  `src/js/index.js` (modify, append export).
- **RED**: add stories `--prev-disabled-at-start`,
  `--next-scrolls-one-card`, `--prev-scrolls-back`,
  `--next-disabled-at-end`, `--one-card-no-overflow`, `--few-cards-no-overflow`
  (hp1920 viewport, 2-card dataset), `--many-cards-overflow` (12-card dataset,
  hp393 viewport), `--snap-to-start`, `--idempotent-init`, `--teardown-cleans-up`.
  Each story calls `initRankingsCards` in a `useEffect` and asserts the
  described state transitions. Run `yarn test:storybook` — fails.
- **GREEN**: implement `initRankingsCards` per §5. Re-run — passes.
- **Depends on**: Task 2.

### Task 4 — GA parity assertion
**Commit**: `test(components-homepage): assert rankings-cards has no data-ga markup`
- **Files**: `src/components/rankings-cards/rankings-cards.stories.jsx` (modify).
- **RED**: add story `--no-ga-attributes` with
  `expect(canvasElement.querySelector('.hp-rankings [data-ga], .hp-rankings [data-ga-name], .hp-rankings [data-ga-event]')).toBeNull()`.
  Run — passes immediately (there are no GA attributes by design); this test
  **locks** the Q5 decision so a later accidental addition fails. Technically
  this is a "GREEN by construction" test — called out explicitly so a reviewer
  does not flag it as missing a RED phase.
- **Depends on**: Task 1.

### Task 5 — register all stories for a11y
**Commit**: `test(components-homepage): register rankings-cards stories for a11y`
- **Files**: `tests/stories-to-test.mjs` (modify).
- **GREEN**: append every `homepage-rankings-cards--*` story ID from §8,
  including the new v2 story IDs `homepage-rankings-cards--image-sizing` and
  `homepage-rankings-cards--no-alt-dev-warning`. Run `yarn test:accessibility`.
  Fix any Alfa WCAG 2.1 AA findings (expected: 0, given the design plan).
  Depends on: Tasks 1–3.

### Task 6 — build + lint
**Commit**: `chore(components-homepage): run full validators for rankings-cards`
- **Files**: no new files; this is a verification pass.
- Run `yarn lint` → zero errors.
- Run `yarn build` → `dist/` emitted, no `JSDOC_ERROR`, no stylelint error.
- Depends on: Tasks 1–5.

### Rollback plan

Each task is a single commit. Rollback is `git revert <sha>` in reverse task
order (6 → 1). The two modified entry files (`src/scss/components-homepage.scss`
and `src/js/index.js`) each receive one single-line addition; no risk to the
reimagine or video-control pieces.

---

## 11. Open items

### 11.1 Jira AC not reconciled

`WWWCMS-233` was not fetchable in this session. The architect proceeded from
screenshots + the user's five locked answers. The following doc assumptions
could be invalidated by acceptance criteria the architect has not seen:

1. **One attribution link per card is the only interactive element.** AC may
   require whole-card click or a secondary CTA.
2. **Default card dataset is 7 cards.** AC may fix card count or require data
   coming from a specific source.
3. **"See all ASU rankings" href is a placeholder (`#rankings-see-all`).** AC
   likely provides the real URL.
4. **Attribution link accessible name is the literal string "Attribution link".**
   AC may require richer per-card accessible names (e.g. the ranking source
   name).
5. **Visually-hidden section heading "ASU rankings".** AC may require a visible
   heading, in which case story set + CSS must be amended.
6. **Nav buttons hide when the track doesn't overflow.** AC may prefer "nav
   always visible, both disabled."
7. **Reduced-motion branch disables smooth scroll but does not change layout or
   remove animations elsewhere** (there are no other animations). AC may require
   explicit messaging.
8. **No `data-ga*` attributes** (Q5 — matches reimagine). If AC specifies GA
   events, this doc's §4 and §9 must be revised and new stories added.
9. **Image-first card body (v2 — A2/B1/C1)**. The entire card body above the
   attribution footer is a PNG; the gold caption pill, rank statement, and
   topic are all baked into the image, with the SR-accessible version living
   in `imageAlt`. If AC specifies HTML text (for i18n reasons, SEO/structured
   data, or user-content reasons like per-visitor dynamic rankings), **this
   whole doc reverts to the pre-patch v1 version** — the content model and
   the entire §4 card-interior CSS block are invalidated.

The user will reconcile at the HITL approval gate.

### 11.2 Figma variables not pulled

Figma node `13467:58610` was not fetchable in this session. The coder MUST pull
exact values for these before merging to `dev`:

| Design value | Placeholder in this doc |
|---|---|
| Card width (constant) | `18rem` (288px) |
| Gap between cards | `$uds-size-spacing-2` (1rem) |
| Card border color | `$uds-color-base-white` (may be a near-white Figma variable) |
| Card border weight | `1px` |
| Card border radius | `0` |
| Nav button diameter | `3rem` |
| Nav gap | `$uds-size-spacing-1` (0.5rem) |
| Section padding-block | `$uds-size-spacing-6` (3rem) |
| Inner max-width | `1440px` |
| **Media aspect-ratio** (locked v3 per Q1 = A) | `2 / 1` at every breakpoint — **confirm with design** that the 2 / 1 ratio and 288 × 144 mobile media box match the Figma reference frame |
| **Image intrinsic dimensions** (locked v3 per Q2 = C) | `500 × 251` as dataset-wide defaults on `rankingsCardsHtml({ imageWidth, imageHeight })` — **confirm final intrinsics with design** before merge (if designer artwork ships at a different intrinsic size, pass new values via the top-level params; the SCSS does not change) |
| **`object-position` for hover-PNG framing** (locked v3 per Q4 = C) | `center 30%` on `.hp-rankings__img` — **confirm with design** that the upper-third framing matches the ranking numeral position in the Figma composition; if not, update the SCSS value only (no other change) |
| **Hover opacity transition duration** (v2) | `150ms` |
| **Image file naming convention** (v2) | hover suffix is `--hover` — confirm with design that double-dash BEM-style modifier matches their asset-naming expectations |
| **Attribution footer padding** (v2) | `$uds-size-spacing-2` (1rem) |
| **First-card eager-loading decision** (v2) | all images `loading="lazy"` by default; revisit if the homepage places rankings-cards above the fold on any viewport (hero sits above it today, so lazy is correct) |

**Removed in v2** (rows deleted from v1): card inner padding, rank "#1" font
size, topic font size, caption pill padding. Those styles no longer exist in
the SCSS.

Every placeholder is marked `// TODO: confirm with design` in the SCSS so a
`grep "TODO: confirm with design" src/components/rankings-cards/` returns the
exact list the coder owes to design review.

### 11.3 Contrast caveat (component contract)

The component ships with `background: transparent` and white text/borders. WCAG
contrast is only met when the parent surface is dark enough. The architect
chose this per Q4 and documented the caveat in §7.8. Every Storybook story
renders the component inside a dark backdrop wrapper so interaction and a11y
tests exercise compliant pixels. **Consumers who place this component on a
light surface must either wrap it in a dark surface or request a light-surface
variant in a follow-up ticket.** The component README added by this ticket
MUST say this verbatim (part of Task 1's helpers file JSDoc, surfaced in
Storybook docs).

---

## Security considerations

- The component accepts an array of card objects whose `attributionHref` lands
  in an `<a>` `href`. Values come from the host page / CMS (trusted content).
  No `innerHTML` or `dangerouslySetInnerHTML` on user input: `rankingsCardsHtml`
  returns a static string template; the Storybook stories use
  `dangerouslySetInnerHTML` because the stories' input is the hard-coded
  default dataset. In production (Webspark 2 CMS) the rendered HTML is paste-
  in content, not runtime-interpolated from user input.
- No `target="_blank"` is specified; if the Jira AC adds it later, the coder
  MUST include `rel="noopener"` (default secure pattern).
- No cookies, no localStorage, no network calls, no PII — stateless UI.
- Attribution hrefs are rendered unescaped **only** by the Storybook story
  (where the content is the author's own); any CMS-side consumer is responsible
  for HTML-escaping its inputs before pasting into the template. State this as
  a note in the component README (Task 1).

---

## Performance considerations

- **Expected load**: one `.hp-rankings` section per homepage, typically 5–12
  cards. No lazy-loading needed.
- **Observer cost**: one `ResizeObserver` per `.hp-rankings` section, plus
  one passive `scroll` and one `scrollend` listener on the track. Negligible
  cost. **Amended v2.1**: there is no `IntersectionObserver`.
- **Scroll perf**: CSS `scroll-snap-type: x mandatory` on the track is
  compositor-only. The passive `scroll` listener only reads
  `track.scrollLeft` / `scrollWidth` / `clientWidth` — no layout thrash.
- **Bundle size**: `rankings-cards.js` targets ≤ 2 KB minified (comparable to
  `video-control.js`). No external deps.
- **Repaint cost**: hover colour flip is CSS-only; no JS state changes required
  for hover.
- **CLS**: zero. The track is sized via a constant card width and native scroll;
  no layout shift occurs after first paint.

---

## Asset-handling policy (new in v3)

This section locks the placeholder-asset lifecycle for the amendment cycle.
Reviewer enforces every bullet; any violation blocks the GATE in §Lock
protocol.

1. **No 400 × 500 PNGs** are permitted anywhere under
   `packages/components-homepage/src/img/rankings/`. The v2 placeholder-
   generation plan (pure-Node `pngjs` 400 × 500 solid-color PNGs) is
   **struck** (§9.2). If a reviewer finds any 400 × 500 PNG in that
   directory, the PR is rejected.
2. **The placeholder pair is `.intake/rank-01-w.png` (default/white, 500 × 251)
   and `.intake/rank-01.png` (hover/dark navy, 500 × 251).** These are the
   only two placeholder sources; both exist already in `.intake/` and are
   version-controlled upstream from this amendment. (Swapped in v3.1
   per user direction 2026-11-03T21:10Z — previously rank-01 default +
   rank-06-w hover.)
3. **No `-s22` variants** are permitted at any point in the dataset,
   `.intake/`, or `packages/components-homepage/src/img/rankings/`. If a
   future task introduces size-tagged variants, that is a separate
   architecture change that requires a new HITL gate.
4. **The same two PNGs are reused across all 7 cards** until designer
   artwork replaces them. All 7 `<slug>.png` files are byte-identical
   copies of `.intake/rank-01-w.png`; all 7 `<slug>--hover.png` files are
   byte-identical copies of `.intake/rank-01.png`. This is intentional
   and acceptable per Q2 = C (dataset-wide uniform intrinsics) — the
   stack-equality invariant in §8 row 23 is satisfied by construction.
5. **Intrinsic dimensions are locked at 500 × 251** for every placeholder
   and emitted as `width="500" height="251"` on every `<img>`. Any
   deviation requires passing new values via the top-level
   `rankingsCardsHtml({ imageWidth, imageHeight })` parameters (§3.1,
   Q2 = C) — never by editing the SCSS and never per-card.
6. **Designer artwork swap**: when real brand PNGs become available, the
   coder replaces the placeholders in a single commit scoped to
   `packages/components-homepage/src/img/rankings/`. The intrinsic
   dimensions must remain 500 × 251 unless design explicitly provides
   different values **and** the architect updates §3 + §6 + §11.2 in a
   subsequent amendment.

---

## Coder-scope lock (new in v3)

This section locks the file-system scope of every commit made during this
amendment cycle. Reviewer enforces.

1. **Allowed paths** — commits in this cycle may touch **only** these two
   directory subtrees:
   - `packages/components-homepage/src/components/rankings-cards/`
   - `packages/components-homepage/src/img/rankings/`

2. **Hard prohibitions** — any change outside the two allowed subtrees is
   rejected by the reviewer. The 13 unrelated modified files visible in
   `git status` at the start of this cycle MUST remain **unstaged** at
   every commit. The coder MUST verify with `git status --short` before
   each `git commit` that no path outside the allowed subtrees appears in
   the index.

3. **Specific no-touch zones** (restated for clarity):
   - `.kiro/` and anything underneath it
   - `handoff/` and anything underneath it
   - Any package other than `components-homepage` (including
     `unity-react-core`, `unity-bootstrap-theme`, `component-header-footer`,
     `shared`, the app packages, the `static-site` package)
   - Root-level configs (`package.json`, `yarn.lock`, `lerna.json`,
     `.yarnrc.yml`, `tsconfig*.json`, `.github/`, etc.) — no changes
     during this cycle
   - `.intake/` — read-only during this cycle; the two canonical
     placeholder PNGs are consumed via `cp`, never modified

4. **Permitted modifications outside `rankings-cards/`** inside
   `components-homepage` — the v2 §9 file manifest already names two
   files-outside-the-component that need a one-line append each:
   `src/scss/components-homepage.scss` (import append) and
   `src/js/index.js` (export append). **v3 clarification**: those two
   single-line appends are the ONLY changes permitted outside
   `src/components/rankings-cards/` and `src/img/rankings/` within
   `components-homepage`. The reviewer treats them as pre-approved; any
   other touch inside `components-homepage` requires explicit HITL re-
   approval.
   - `packages/components-homepage/tests/stories-to-test.mjs` — ancillary
     story-ID registration file; permitted for adding IDs for new stories
     in this amendment only. Precedent: cycle-1 reviewer verdict (b)
     expressly approved this file as necessary for the §8 Alfa audit
     requirement; cycle-2 reviewer (P3) confirmed. Any line addition must
     be a `homepage-rankings-cards--*` ID; no other edits are permitted.
   - `packages/components-homepage/src/components/rankings-cards/_rankings-cards.storybook.scss` —
     Storybook-only backdrop partial; explicitly called out for clarity
     even though it sits inside the already-allowed `rankings-cards/`
     subtree. This file must NOT be added to the production CSS entry
     (`src/scss/components-homepage.scss`) and must NOT appear in `dist/`.
     Cycle-2 reviewer (P3) verified isolation.

5. **PR scope** — agents stop at a branch + conventional commits (per the
   steering doc). The coder does not open the PR; a human does. The PR
   diff MUST contain only paths from §Coder-scope lock items 1 and 4.

6. **Enforcement command (reviewer runs before approval)**:
   `git diff --stat <base>..HEAD` and verify every listed path is either
   under `packages/components-homepage/src/components/rankings-cards/`,
   under `packages/components-homepage/src/img/rankings/`, or one of the
   two single-line-append files named in item 4. Any other path fails
   the gate.

---

## Lock protocol

1. User reviews this doc at the HITL approval gate.
2. If approved → architecture is **LOCKED**. Pipeline moves to IMPLEMENT
   (coder-agent reads this doc, loads skills from §2, follows the task list in
   §10).
3. The reviewer validates against this locked spec (spec-compliance +
   adversarial-review + qa-verification). Coder↔reviewer loop up to 3 cycles.
4. Any architectural change (markup shape, class names, keyboard model, token
   substitutions, test matrix additions) requires explicit human re-approval
   back through this gate — not a side-channel change in a review loop.

**File path**: `.pipeline/design-doc.md` (this file).
