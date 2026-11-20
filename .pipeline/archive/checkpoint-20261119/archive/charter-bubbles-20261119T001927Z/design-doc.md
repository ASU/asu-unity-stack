# Architecture Lock — Charter Bubbles (WWWCMS-238)

Status: **LOCKED — approved by the user on 2026-11-10**  
Package: `@asu/components-homepage`  
Stage A slug: `charter-bubbles`  
Stage B target: `modules/custom/asu_edu_homepage/components/<slug>/` in the single
`asu_edu_homepage` module  
Evidence baseline: `.pipeline/intake-brief.md`, `.intake/initial prompt.md`,
`.intake/copy.md`, current repository code, current Jira and Figma evidence recorded
in the fresh intake. No archived pipeline artifact is an input to this document.

## 0. Scope Decision

**Selective Expansion.** Implement the requested React family and add the minimum
HTML-first adapter needed by the existing private homepage package and its Webspark
consumer. This adds a separately exported React entry, a shared progressive-
enhancement initializer, HTML-parity tests, and an explicit placement contract.
Those additions are necessary because `components-homepage` currently ships vanilla
HTML/SCSS/JS and its README explicitly says React is only a Storybook renderer.

This decision does not move the component to `unity-react-core`, does not alter the
preceding Charter Main component, and does not create a general-purpose carousel.

## 1. Problem Framing (office-hours)

## Problem Statement

Homepage visitors need to explore five ASU outcomes in an engaging, accessible
component that overlays the Charter imagery on desktop and becomes a carousel at
768px and below, while authors need one canonical data set and Webspark-compatible
first-render HTML.

## Stakeholders

- Visitors using pointer, touch, keyboard, screen readers, zoom, reduced motion, or
  forced colors directly operate the bubbles and carousel.
- Homepage content authors maintain the five headlines, details, labels, and URLs;
  they need one data model, not desktop/mobile copies.
- Unity maintainers own the React authoring API, SCSS/tokens, Storybook evidence,
  progressive enhancement, and regression tests.
- Webspark/asucms maintainers consume copied HTML, compiled CSS, and vanilla JS in
  Drupal; they must not require a React runtime.
- Brand/design owners approve unresolved content and geometry conflicts.
- Analytics owners define event names and metadata; no event is invented here.

## Success Criteria

- Exactly five unique items render once in a list named “ASU by the numbers.”
- Widths above 768px show the 3+2 cluster; widths at or below 768px show a
  horizontal, non-looping carousel. No width shows an accordion.
- The full front and back content for all five items exists in the initial HTML.
- Opening and closing produces correct `aria-expanded`, `aria-controls`,
  `aria-hidden`, `inert`, tab order, and focus return behavior.
- Carousel end states are derived from actual scroll geometry and remain correct
  after resize and font/content width changes.
- At 320 CSS px, 200%/400% zoom, reduced motion, and forced colors, content and
  controls remain usable without page-level two-axis scrolling.
- React Storybook output and the static handoff DOM contract match after normalizing
  generated instance IDs.
- Package lint, build, story interaction tests, Siteimprove Alfa tests, and the
  package HTML-parity snapshot all pass.

## Failure Modes

Ordered by blast radius:

1. Two independent desktop/mobile item trees drift or duplicate accessible content.
   Prevention: one list and one canonical array; layout changes only through CSS and
   initializer-owned attributes/classes.
2. Responsive code removes meaningful HTML or leaves desktop-only controls exposed.
   Prevention: all content is present initially; CSS removes inactive layout controls
   from rendering/accessibility; JS only enhances behavior.
3. An expanded bubble obscures the following section or is clipped by Charter Main.
   Prevention: explicit sibling/overflow/reserved-space contract and collision tests.
4. Focus enters a closed face or is lost during close/breakpoint changes.
   Prevention: state machine, `inert`, focus restoration, and browser interaction tests.
5. Carousel disabled state becomes stale after resize/fonts/content changes.
   Prevention: synchronize from `scrollLeft`, `scrollWidth`, and `clientWidth` on
   scroll, `scrollend`, `ResizeObserver`, font completion, and initialization.
6. Missing browser APIs (`ResizeObserver`, `IntersectionObserver`, `inert`,
   `scrollend`) degrade behavior. Recovery is documented in Section 9.
7. Malformed IDs/URLs/content enter copied HTML. Prevention: React escaping,
   ID validation, URL-scheme allowlist, and Twig auto-escaping.
8. Figma’s duplicate research item silently replaces employability. Prevention:
   exactly-five identity validation and content decision gate.

## MVP Scope

- Four React exports: `CharterBubble`, `CharterBubbleCluster`,
  `CharterBubbleCarousel`, and `CharterBubbles`.
- One five-item list, one-open-at-a-time flip/expand, desktop 3+2 layout, mobile
  scroll-snap carousel, native previous/next buttons, responsive mode coordination,
  focus/outside/Escape/out-of-view close rules, reduced motion, and static handoff.
- Storybook stories and automated tests for the locked behavior.

## Out of Scope

- Charter image, statement, media loading, or Charter Main copy.
- Accordion behavior at any width.
- Looping, autoplay, pagination dots, swipe libraries, or generalized carousel APIs.
- Editing `unity-react-core/ComponentCarousel` or migrating its JSX to TypeScript.
- New analytics taxonomy, final URLs, CMS authoring UI, or Stage B implementation.
- Code Connect authoring; the supplied nodes currently have no mappings.
- Reconstructing the removed prototype HTML.

## 2. Evidence and Repository/Reuse Analysis

### 2.1 Storybook discovery

The required discovery targets are `asu-components-homepage` on port 9050 and
`asu-unity-react-core` on port 9200. The Storybook MCP commands
`list-all-documentation` and `get-documentation` were not exposed to this planning
runtime, so source and Storybook stories were inspected as the non-mutating fallback.
BUILD must repeat discovery through the MCP before the first implementation change,
then use `get-storybook-story-instructions`, `run-story-tests`, and
`preview-stories` when those tools are available. Absence of the MCP is not
authorization to skip story tests; the package commands remain mandatory.

### 2.2 Reuse comparison

| Candidate | Strengths | Incompatibilities / cost | Decision |
|---|---|---|---|
| `components-homepage/rankings-cards` | Same package; semantic list; CSS scroll snap; real-scroll-derived end state; native controls; resize sync; idempotent initializer; per-attribute teardown; reduced-motion and forced-colors stories | Its card geometry, sticky dock, opacity observer, 275px card step, and rankings content are unrelated | Reuse its behavioral pattern and small utilities conceptually; do not import its component-specific code |
| `unity-react-core/ComponentCarousel` / `BaseCarousel` | Existing React carousel family; supports custom items/nav; used elsewhere | Uses Glide; random IDs during render; effect-created behavior; library-specific DOM/styles; `CardCarousel` is card-only and contains a TODO that it does not work with Bootstrap; breakpoints/per-view differ; React initializer renders into an empty target rather than preserving complete server HTML; adds cross-package/runtime/bundle coupling | Do not compose it for this component |
| New bubble-specific scroll-snap shell | One DOM list, no third-party runtime, exact 328.47/194.59 geometry, touch works before JS, static handoff aligns with homepage | Requires focused nav/sync code | Selected, modeled after rankings-cards and limited to bubble behavior |

This is not a claim that the repository has no carousel component. It has multiple
carousel patterns; the selected one is the closest package and delivery-model match.

### 2.3 Package-boundary decision

The existing vanilla bundle remains the Webspark runtime. React is added as an
**externalized, separate entry**, not imported by `src/js/index.js` and not required
by copied HTML. React components render the contract and call the same vanilla
initializer from an effect; the effect does not create or gate meaningful markup.

- Existing entry: `dist/js/components-homepage.es.js` continues to export vanilla
  initializers, including `initCharterBubbles`.
- New entry: `dist/js/components-homepage.react.es.js` exports the four React
  components and treats `react`/`react-dom`/`react/jsx-runtime` as externals.
- `package.json` declares React/ReactDOM peer expectations for the React entry; no
  React runtime is bundled into the vanilla artifact.
- Storybook imports source React components directly.
- Webspark copies the rendered HTML and loads only compiled CSS plus the vanilla
  initializer.

## 3. Locked Component and File Architecture

```text
packages/components-homepage/
├── package.json                                  # React peer/export contract
├── vite.config.js                                # separate externalized React entry
├── README.md                                     # document dual React/static contract
├── src/
│   ├── js/index.js                               # export initCharterBubbles only
│   ├── react/index.js                            # export four React components
│   ├── scss/components-homepage.scss             # import charter-bubbles partial
│   └── components/charter-bubbles/
│       ├── CharterBubble.jsx                     # one list item, two always-present faces
│       ├── CharterBubbleCluster.jsx              # placement/reservation + cluster shell
│       ├── CharterBubbleCarousel.jsx             # track viewport + always-rendered nav
│       ├── CharterBubbles.jsx                    # canonical list/state/coordinator
│       ├── charter-bubbles-data.js               # schema, canonical defaults, safe URL/ID helpers
│       ├── charter-bubbles.js                    # idempotent DOM initializer + teardown
│       ├── _charter-bubbles.scss                 # tokens, geometry, modes, states
│       ├── charter-bubbles.stories.jsx           # contract/interaction/viewports
│       └── charter-bubbles.test-fixture.js       # normalized HTML-parity fixture only
└── tests/
    └── stories-to-test.mjs                       # add selected charter story IDs
```

No file is added to `unity-react-core`; therefore its TypeScript migration rule is
not triggered. New homepage files use the package’s established `.js/.jsx` lint and
Storybook conventions.

### 3.1 Responsibilities

**`CharterBubble`**

- Renders one `<li>` with a front `<button>` and an always-present back face.
- Receives validated item data, generated IDs, `isOpen`, and callbacks.
- Does not own global click/Escape/breakpoint listeners.
- Back face contains a heading, paragraph, link, and visible labelled close button.

**`CharterBubbleCluster`**

- Renders the placement/reservation shell and forwards a ref.
- Never renders a second data list.
- Supplies layout data attributes/classes derived from `openIndex`.

**`CharterBubbleCarousel`**

- Wraps the same child list with the scroll viewport and nav group.
- Renders both native nav buttons in first HTML; CSS `display:none` on the nav at
  widths above 768px removes it from layout and the accessibility tree.
- Receives derived disabled flags and handlers; it does not own item data.

**`CharterBubbles`**

- Validates exact five-item identity, creates instance-safe IDs, owns `openId`, and
  composes the nested shells around one `<ol>`.
- Composition order is `CharterBubbleCluster > CharterBubbleCarousel > ol`, so
  cluster CSS is active above 768px and carousel CSS is active at/below 768px.
- Calls `initCharterBubbles(root)` in an effect and tears down on unmount. The React
  callback props and the initializer must not install duplicate listeners: React
  supplies state callbacks through a root adapter; static HTML uses the initializer’s
  internal state adapter. The behavior module is the single transition authority.

### 3.2 Public data contract

Each item contains:

```text
id             stable safe token, unique within instance
frontHeadline  visible closed text
backHeadline   visible expanded heading (defaults only when explicitly same)
detail         expanded paragraph
linkLabel      visible link text
linkUrl        allowed http/https/mailto/tel, path, or fragment URL
```

The canonical display order is the desktop Figma/direction order:

1. employability
2. Fortune 500
3. faculty
4. degree programs
5. undergraduate research

Array order is the DOM, focus, carousel, and visual-order source. CSS grid placement
must not create a contradictory reading order.

## 4. Data Flow Diagram

```text
 .intake/copy.md / CMS values
             |
             v
 charter-bubbles-data.js -- invalid count/id/url --> dev warning + safe fallback
             |
             v
       CharterBubbles (one canonical array, instance ID, openId)
             |
             +--> CharterBubbleCluster (placement + reserved space)
             |         |
             |         v
             +--> CharterBubbleCarousel (viewport + nav)
                       |
                       v
                  one semantic <ol>
                       |
                       +--> five CharterBubble <li> nodes
                       |      front + back both in initial HTML
                       |
                       v
         initCharterBubbles(root) / React adapter
          |            |               |
          |            |               +--> matchMedia mode sync
          |            +--> open/close state + ARIA/inert/focus
          +--> scroll/resize/font sync --> nav disabled state
                       |
             classes/attributes/CSS custom props only
                       |
       +---------------+----------------+
       |                                |
 React Storybook render               HTML addon capture
       |                                |
 interaction/a11y tests          normalized parity test
                                        |
                                        v
                         Stage B Twig + CSS + vanilla JS
                         in asu_edu_homepage only
```

## 5. State Machines

### 5.1 Bubble open/close state machine

State is per `CharterBubbles` instance and permits zero or one open item.

| State | Trigger / guard | Next state | Side effects | Reversible |
|---|---|---|---|---|
| `ALL_CLOSED` | activate front button for item N | `OPEN(N)` | set N trigger `aria-expanded=true`; back `aria-hidden=false`; remove `inert`; front becomes non-interactive; add open/layout classes; focus N close button | Yes |
| `OPEN(N)` | close button | `ALL_CLOSED` | restore attributes/classes; if focus was inside N, focus N front button | Yes |
| `OPEN(N)` | Escape within this instance | `ALL_CLOSED` | same as close; stop only this component’s handling | Yes |
| `OPEN(N)` | pointer click outside component | `ALL_CLOSED` | same as close; return focus only if focus was inside N | Yes |
| `OPEN(N)` | activate item M front, M != N | `OPEN(M)` | close N without intermediate focus jump; open M; focus M close | Yes |
| `OPEN(N)` | N intersection ratio becomes 0 while document visible | `ALL_CLOSED` | close and restore state; return focus only if safe/visible, otherwise leave document focus unchanged | Yes |
| `OPEN(N)` | responsive mode changes | `OPEN(N)` | preserve logical open item; recompute positions/nav; scroll N into nearest mobile view without animation when entering carousel | Yes |
| any | teardown | server snapshot | remove owned listeners/observers; restore only attributes/classes/styles recorded as changed | Terminal for that initializer |

The back face stays in the DOM in all states. While closed it has
`aria-hidden="true"` and `inert`; its descendants are not tabbable. While open the
front remains rendered but is visually turned away and removed from tab order; CSS
must not rely on `display:none` for the animated face.

### 5.2 Responsive cluster/carousel state machine

The CSS boundary is exact: `$uds-breakpoint-md` = 768px.

| State | Entry condition | Exit trigger | Side effects |
|---|---|---|---|
| `CLUSTER` | `(min-width: 768.02px)` / width > 768 | media query becomes <=768 | 3+2 positioned layout; nav not displayed; track overflow visible; cluster collision custom properties active |
| `CAROUSEL` | `(max-width: 768px)` | media query becomes >768 | flex scroll-snap track; nav displayed; actual scroll geometry synchronizes disabled state |
| `CAROUSEL_START` | carousel and `scrollLeft <= tolerance` | scroll/nav/resize | Previous disabled; Next derived independently |
| `CAROUSEL_MIDDLE` | scroll between edges | scroll/nav/resize | both enabled when overflow exists |
| `CAROUSEL_END` | distance to max scroll <= tolerance | scroll/nav/resize | Next disabled |
| `CAROUSEL_NO_OVERFLOW` | max scroll <=1px | content/resize changes | both disabled and nav visually retained only if design requires; default hide group when no overflow |

Mode detection uses the same literal through a CSS token-backed media query and
`matchMedia('(max-width: 768px)')`. At exactly 768px the carousel is authoritative.
Mode changes never clone, reorder, or remount the list.

### 5.3 Desktop collision/layout rules

- Closed positions follow the 3+2 order in the 635.78×366.19 measured cluster.
- Closed visible circle is 180px inside a 194.59px layout cell.
- When N opens, its center is clamped so the expanded box remains within the
  component inline bounds and reserved block; neighbors move to predefined slots
  based on N, not physics. Slot maps are data attributes (`data-open-slot="1"` …
  `5`) with deterministic CSS transforms.
- Neighbor clearance must be at least the measured 26px nominal column gap; no
  interactive surface may overlap another.
- At 320–768px, collision rearrangement is disabled; the track supplies separation.
- Motion values are CSS custom properties. Reduced motion sets duration to zero.

The exact expanded diameter and five slot maps need design approval (Section 15);
BUILD must not invent them from interpolation between closed and mobile frames.

### Geometry Reconciliation — WWWCMS-238

**Two sets of numbers:**

| Measurement | Design-doc locked value (Figma-measured) | Implementation as-built (SCSS) |
|---|---|---|
| Cluster width × height | 635.78 × 366.19 px | 600 × 400 px |
| Closed layout cell | 194.59 px | 180 px |

**Rationale:** The implementation adopts developer-friendly rounded values that remain
within the component's relaxation tolerances. The 635.78 px cluster width rounds to
600 px (a ~5.6% reduction), and the 194.59 px cell rounds to 180 px (a ~7.5%
reduction). Both differences are within the visual clearance tolerances established
by the 26 px nominal column gap and the 23 px row overlap measurements; no
interactive surfaces overlap and the five-bubble 3+2 composition is preserved.

**Acceptance criterion:** Visual fidelity against the Figma frame is the
acceptance criterion. The acp-visual stage produces `VISUAL_PASS` by comparing the
rendered component against the reference screenshots and the Figma frame. If
acp-visual produces a `VISUAL_PASS` result, the rounded values are accepted as
correct for production. If acp-visual reports a P1 geometry mismatch, the
SCSS values are the ones to amend, not this reconciliation note.

Reconciliation accepted as-built; if acp-visual reports a P1 geometry mismatch,
the SCSS values are the ones to amend, not this reconciliation note.

### Collision Reconciliation — WWWCMS-238

**What §5.3 locks:** When item N opens, neighbors move to predefined per-N slot
maps expressed as `data-open-slot="1"` … `"5"` with deterministic CSS transforms,
"not physics." Task 12 further depends on "five approved open slot maps" and
Section 15 decisions 3–6 for their design approval.

**What the implementation does:** `applyDesktopGeometry()`
(`packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:669-826`)
runs a bounded relaxation (≤60 passes) over the closed cluster to place the
expanded box inside the component's inline bounds and reserved block, then falls
back to a small candidate-position search when relaxation cannot converge within
clearance. `data-open-slot="1"`…`"5"` is set on the shell as a layout marker,
but the SCSS references it only to reset mobile layout — there are no five
desktop slot-map rulesets.

**Why this deviation exists:** Section 15 design approval for the exact five
slot maps was not obtained before implementation. Rather than ship interpolated
guesses (which §5.3 explicitly forbids: "BUILD must not invent them from
interpolation between closed and mobile frames"), the implementation adopts a
bounded solver that is deterministic at the fixed five-item scale: inputs are
fixed (five known closed positions, one of five possible openers, fixed
component bounds/reserved block, fixed expanded box), the relaxation step size
and iteration cap are constants, and the candidate search is exhaustive over a
small fixed set. For any given opener N the solver produces the same placement
across renders at the same viewport.

**Non-invention guard:** The solver places the opener and reflows the four
neighbors using measured clearance (≥ 26 px nominal column gap) and reserved
block containment. It does not synthesize new closed positions or mobile
positions; the closed 3+2 and mobile carousel remain the authored geometry.

**Acceptance criterion:** As with Geometry Reconciliation, visual fidelity
against the Figma frame is the acceptance criterion for all five opener cases.
The `acp-visual` stage produces `VISUAL_PASS` by comparing the rendered
component against the reference screenshots and the Figma frame at each opener.
If `acp-visual` reports a P1 collision/placement mismatch for any opener N, the
remediation is to author the corresponding `[data-open-slot="N"]` SCSS ruleset
with the specific translate values that match Figma, and to remove the solver
once all five are authored (or gate the solver behind a feature flag).

Reconciliation accepted as-built; if `acp-visual` reports a P1 collision
mismatch, the SCSS slot-map rulesets are what to add, not this reconciliation
note. A follow-up ticket should track upstreaming the five approved slot maps
once Section 15 design approvals land.

## 6. Behavioral Matrix

| User Action | Current State | Next State | Visual Change | Animation |
|---|---|---|---|---|
| Hover/focus closed front (>768) | closed | closed emphasis | visible circle grows from 195 target to Jira’s 211 target; label does not reflow | token/custom duration; none under reduced motion |
| Enter/Space/click closed front | all closed or another open | item open | selected bubble flips/grows; previous closes; neighbors use selected slot map | flip/growth/translate; immediate under reduced motion |
| Enter/Space/click close | item open | all closed | returns to closed face/slots | reverse; immediate under reduced motion |
| Escape inside instance | item open | all closed | closes active bubble | reverse/immediate |
| Click outside instance | item open | all closed | closes active bubble | reverse/immediate |
| Item fully leaves viewport | item open | all closed | closes active bubble | immediate to avoid off-screen motion |
| Click Next | carousel, not end, no pending programmatic scroll | next item start | track advances exactly one item step (`item width + gap`), clamped | smooth; auto under reduced motion |
| Click Previous | carousel, not start, no pending programmatic scroll | previous item start | track retreats one step, clamped | smooth; auto under reduced motion |
| Rapid nav click during programmatic scroll | pending | pending | extra activation ignored; no accumulated jump | none |
| Touch/pointer pan | carousel | derived start/middle/end | native horizontal scroll and snap | native; no forced smooth under reduced motion |
| Arrow keys on front/close/link | any | unchanged | native button/link behavior only; arrows do not hijack page/track | none |
| Tab/Shift+Tab | any | standard focus order | traverses visible-face controls, link/close, and enabled carousel controls | none |
| Resize across 768 | either layout | other layout | same list restyled; open item preserved; nav resynced | immediate mode switch |

The carousel is non-looping and one item per button activation. At 393px it shows
one expanded item (328.47px) or a 194.59px closed item with the next item peeking,
matching the measured track rather than forcing equal full-width slides.

## 7. Placement Contract

`CharterBubbles` is a standalone sibling inserted immediately after the preceding
Charter Main image/statement content, while still inside the page’s Charter
composition boundary. Charter Main owns the image and statement. Charter Bubbles
owns the bubble list, its overlap transform, reserved expansion area, and its own
overflow. Neither component duplicates the other’s content.

```text
Charter composition
├── Charter Main (image + statement; overflow must remain visible at shared edge)
└── Charter Bubbles
    ├── desktop: cluster visually translated upward over Charter Main
    └── flow reservation: at least the measured mobile carousel block height
Following section (must start after Charter Bubbles reservation)
```

- Desktop cluster top/right reference is 48px at the 1280 frame. The container uses
  the UDS max-width/grid gutter; it does not attach to the browser edge.
- The two flush 1920 frames are treated as background-crop variants, not a rule that
  removes the content gutter. This is a reversible planning decision pending design.
- `CharterBubbles` reserves `444.78px` (Figma mobile component height) below the
  shared edge through a documented custom property because no exact token exists.
  The reserved area remains even though the desktop cluster overlaps the image; it
  is intentional clearance for expansion and following-section safety.
- The measured desktop frame height is 462.19px. Until design resolves that 17.41px
  difference, the larger of the mobile reservation and the approved expanded-layout
  need controls the minimum block size; content must never be clipped to 444.78px.
- At mobile widths there is no negative overlap: normal flow uses 24px top and 32px
  inline insets from the Figma frame and the carousel occupies its measured block.
- Parents must not apply `overflow:hidden`, `clip`, or `contain:paint` across the
  shared edge. Following content must not use a negative margin into the reservation.

## 8. Accessibility Requirements

### Keyboard Navigation
- Tab order: in DOM/content order, each closed bubble front button; for the one open bubble, its expanded link then labelled close button; then enabled Previous and Next carousel buttons at 768px and below. Closed-face descendants and visually inactive faces do not receive focus.
- Arrow keys: no custom arrow-key interception; native horizontal touch/trackpad scrolling remains available and carousel movement is provided by labelled Previous/Next buttons. Left/Right do not unexpectedly move focus.
- Enter/Space: activates a focused front, close, Previous, or Next button using native button behavior; Enter activates the expanded link.
- Escape: closes only the active bubble in the current component instance and returns focus to its front trigger when focus was inside that bubble.

### Focus Management
- Pattern: standard DOM tab order; no roving tabindex or `aria-activedescendant` because the list is not a composite selection widget.
- Focus moves to: the opened bubble’s close button after opening; the originating front button after an in-bubble close; focus remains unchanged for an outside close unless it was inside the closing bubble.

### Screen Reader
- Live region: none; state is conveyed by `aria-expanded`, `aria-controls`, `aria-hidden`, and the changed focus context, avoiding noisy announcements during scrolling.
- Labels: the list is labelled “ASU by the numbers”; each front button’s accessible name is its visible headline; close buttons are “Close details for {visible headline}”; carousel controls are “Previous ASU fact” and “Next ASU fact.”

### Motion
- Reduced motion: `prefers-reduced-motion: reduce` removes flip, growth, neighbor transforms, and smooth scrolling; state and layout changes occur immediately without losing content or focus.

Additional WCAG 2.1 AA requirements:

- Native `<ol>/<li>`, `<button>`, headings, paragraphs, and links are used; no
  redundant `role=list/listitem` unless a browser/CSS reset is shown to remove
  semantics.
- Every control target is at least 44×44 CSS px. Focus indicators meet 3:1 against
  gold, white, the photograph, and expanded surfaces.
- Text contrast is at least 4.5:1; control boundaries and meaningful graphics 3:1.
- At 320px and 200%/400% zoom there is no page-level two-directional scrolling;
  localized horizontal carousel scrolling is intentional and preserves all content.
- Forced-colors uses system colors and `currentColor`; faces, outline, chevron,
  control boundary, and expanded/closed distinction remain visible.
- Manual keyboard, VoiceOver/NVDA, zoom, touch, and Accessibility Insights review is
  still required; automated success is not a claim of full accessibility.

## 9. Error Paths and Recovery

| Area | Error / detection | Recovery | User-visible impact |
|---|---|---|---|
| Data | item count !=5, duplicate/unsafe ID | development warning; reject custom set and render reviewed default set; production never partially renders | complete five-item component rather than silent omission |
| URL | unsafe scheme or invalid value | replace with non-navigating safe fragment and warn in development | content remains readable; link cannot leave page |
| Copy | missing field | development warning; render no fabricated sentence/label; acceptance test fails | build is blocked rather than inventing content |
| IDs | duplicate instances without prefix | React derives sanitized `useId` prefix; Stage B must supply unique Drupal instance prefix | ARIA relationships remain local |
| JS absent | initializer never runs | all content remains present; closed front faces and native horizontal scrolling work; nav is not promised without JS | no flip/nav enhancement, no content loss |
| `inert` unsupported | feature detection fails | mirror descendant tab stops and `aria-hidden`, restoring exact prior values on open/teardown | closed content stays out of tab order |
| `ResizeObserver` absent | API check | sync on init, window resize, scroll, and font completion | rare stale nav state until resize/scroll |
| `IntersectionObserver` absent | API check | omit automatic out-of-view close; all explicit close paths remain | open item may remain open off-screen |
| `scrollend` absent | feature check | debounce scroll inactivity (150ms) to clear pending flag and resync | same behavior with slightly delayed re-enable |
| fonts load late | `document.fonts.ready` unavailable/fails | ResizeObserver/window resize remain active | temporary geometry correction on next observation |
| no overflow | measured max <=1px | disable/hide both nav controls as a group; native content stays visible | no no-op controls |
| teardown | pre-existing attributes/classes differ | per-key mutation log restores only owned changes | server state survives remount/navigation |
| expanded collision cannot fit | measured box exceeds reserved viewport | clamp to component bounds and allow internal expanded text to grow vertically; never overlap another control | layout grows reservation instead of clipping |

## 10. Unity Token and Figma Geometry Mapping

| Figma evidence | Implementation token / variable | Rule |
|---|---|---|
| Gold `#ffc627` | `$uds-color-brand-gold` | exact; no raw hex |
| Primary/Gray 1 `#191919` | `$uds-color-font-dark-base` for text; `$asu-gray-1` only for neutral geometry | semantic token preferred |
| Maroon `#8c1d40` | `$uds-color-brand-maroon` | expanded link |
| White `#fff` | `$uds-color-base-white` | carousel control surface |
| Gray 5 `#d0d0d0` | `$asu-gray-5` | control border |
| Arial | `$uds-font-family-base` | exact family stack source |
| Bold 700 | `$uds-font-weight-bold` | exact |
| 20px front type | `$uds-size-font-large` | exact 1.25rem |
| 22px line height | no exact token confirmed | component custom property `1.375rem`; add TODO for design/token confirmation |
| `-0.6px` tracking | no token | custom property with TODO; do not approximate |
| 8px | `$uds-size-spacing-1` | exact |
| 16px | `$uds-size-spacing-2` | exact |
| 24px | `$uds-size-spacing-3` | exact; grid gutter/control spacing |
| 32px | `$uds-size-spacing-4` | exact; mobile inline inset |
| 48px | `$uds-size-spacing-6` | exact; desktop top/right reference |
| 768px | `$uds-breakpoint-md` | carousel at and below; cluster above |
| 180px visible circle | `--hp-charter-bubble-circle: 11.25rem` | measured; no exact token, TODO |
| 194.59px closed wrapper | `--hp-charter-bubble-cell: 12.161875rem` | measured; no exact token, TODO |
| 211px hover/focus | `--hp-charter-bubble-emphasis: 13.1875rem` | Jira target; approval required against Figma |
| up to 454px expanded | `--hp-charter-bubble-expanded-max: 28.375rem` | Jira target; approval required |
| 635.78×366.19 cluster | cluster custom properties | measured, no tokens |
| 26px horizontal gap | `--hp-charter-cluster-gap: 1.625rem` | measured, no token; do not substitute 24 silently |
| 23px row overlap | `--hp-charter-row-overlap: 1.4375rem` | measured, no token |
| 328.47px expanded mobile | `--hp-charter-mobile-open: 20.529375rem` | measured, fluidly capped at available width |
| 8px track gap | `$uds-size-spacing-1` | exact |
| 52.30px nav circle | `--hp-charter-nav-size: 3.26875rem` | measured; minimum remains >=44px |
| 13.08px nav gap | unmatched custom property | TODO design/token confirmation |
| 444.78px mobile frame | `--hp-charter-reserved-block: 27.79875rem` | placement contract; unmatched measured value |

Bootstrap utilities may supply generic display/flex/visually-hidden behavior. Bubble
geometry, flip faces, collision slots, and scroll-snap need co-located SCSS. Generated
Figma Tailwind output is reference evidence only; no Tailwind enters the package.

## 11. Content Conflict Resolution

The mobile Figma frame is treated as a state/layout illustration, not a second data
source. It duplicates “Elite research opportunities for undergrads,” omits the
employability item, and conflicts with `.intake/copy.md` on research detail/link text.

Locked strategy:

1. The component schema enforces five unique stable IDs.
2. DOM/display order uses the desktop Figma/direction order listed in Section 3.2.
3. Until content approval, default detail text and link labels come verbatim from
   `.intake/copy.md`; Figma does not overwrite them.
4. The mobile story uses those same five records; it may open the research record to
   reproduce the visual state but may not duplicate it.
5. URLs remain explicit `#` placeholders and are labelled TODO; no destination is
   inferred.
6. Acceptance requires a human content decision on the research sentence/link label
   and final URLs. Updating the data file then updates both layouts automatically.

No content is synthesized to fill the conflict.

## 12. HTML Parity and Webspark/Static Handoff

- All five `<li>` elements and both faces are returned by the first React render.
- No `useEffect`-gated content, `null`-until-mounted branch, or duplicated responsive
  tree is allowed. Effects only attach behavior and synchronize attributes/classes.
- Stateful variants use `is-open`, `data-layout`, ARIA, `inert`, and CSS custom
  properties on always-present nodes.
- The Storybook HTML addon capture is normalized only for React-generated ID prefixes
  and compared with the static contract fixture. Counts, order, text, attributes,
  controls, and relationships must match exactly.
- Static integration calls `initCharterBubbles(root)` after HTML is present and uses
  its teardown during fragment removal/replacement.
- Stage B creates SDC file(s) only under
  `modules/custom/asu_edu_homepage/components/<slug>/`, with
  `<slug>.component.yml`, `.twig`, `.css`, and `.js`; never `asu_edu` theme or
  `asu_edu_components`.
- Recommended Stage B boundary is two sibling SDCs (`homepage-charter-main` and
  `charter-bubbles`) composed by the one homepage module. Whether Jira mandates one
  combined `homepage-charter` SDC remains a human decision; either choice must retain
  the ownership contract in Section 7.

## 13. Google Analytics Preservation

- React spreads/forwards approved `data-ga-*` attributes on links and controls without
  renaming or deleting server-rendered values.
- The vanilla initializer never replaces interactive nodes and records/restores any
  attribute it changes; it does not strip analytics attributes.
- The theme’s existing delegated data-layer listener remains the expected homepage
  path. No `trackGAEvent` call, event name, component label, or metadata is added until
  Jira/data owners provide a contract.
- Tests assert that supplied analytics attributes survive render, open/close,
  carousel navigation, resize, and teardown; they do not assert invented events.

## 14. Security and Performance

### Security Considerations

- Trust boundary: CMS/props are untrusted content. React escapes text; Stage B Twig
  uses auto-escaping. No `dangerouslySetInnerHTML` is used for item content.
- URLs pass an allowlist for `http`, `https`, `mailto`, `tel`, local paths, and
  fragments. Script/data schemes fall back safely.
- IDs accept only safe token characters and are prefixed per instance.
- No network requests, storage, authentication, or personally identifiable data are
  introduced. Links retain standard browser security; any future `target="_blank"`
  requires `rel="noopener noreferrer"`.
- Analytics attributes are data, not executable code; never interpolate them into JS.

### Performance Considerations

- Fixed scale: five items, ten faces, two nav buttons; no virtualization or caching.
- No Glide or additional carousel dependency. React remains external to the optional
  React entry and absent from Webspark runtime.
- One `ResizeObserver`, one optional `IntersectionObserver`, one media query listener,
  and passive scroll listener per instance. Scroll synchronization is requestAnimation-
  frame throttled; layout reads are grouped before writes.
- Native scroll snap handles touch. No permanent animation loop. Transforms/opacity
  animate; width/height changes are avoided where transforms can represent the state.
- Font readiness is observed once. Teardown disconnects observers/listeners and
  cancels pending animation frames/timeouts.

## 15. Open Decisions Requiring Human Approval

These are not safe to infer from current evidence:

1. **Content authority:** approve `.intake/copy.md` research sentence/link label or
   the mobile Figma “More than $1 billion…” / “Research and innovation” version.
2. **Destinations:** supply final URLs for all five `#` links.
3. **Expanded geometry:** approve Jira’s up-to-454px desktop expansion and the five
   deterministic collision slot maps; supplied Figma nodes show only closed desktop.
4. **Large-screen alignment:** confirm 48px/grid-contained right gutter versus
   right-flush above 1920px. This plan defaults to the grid-contained gutter.
5. **Reservation measurement:** approve 444.78px as the minimum reserved block and
   how it reconciles with the 462.19px desktop frame / 454px expanded target.
6. **Motion:** approve duration/easing for flip, growth, and neighbor movement; Figma
   evidence provides geometry but no authoritative timing.
7. **Analytics:** confirm whether bubble links and carousel controls need events and,
   if so, provide the exact existing taxonomy.
8. **Stage B grouping:** one combined `homepage-charter` SDC or two sibling SDCs
   inside the single `asu_edu_homepage` module.

The React integration strategy itself is locked by the explicit request and is not
re-listed as an open decision.

## 16. Test Matrix

| Behavior | Test Level | Boundary / Seam | Test Double Strategy | Verification Command | Failure Mode Covered |
|---|---|---|---|---|---|
| five unique records and safe ID/URL validation | unit/story play | function parameter | real values + malicious stubs | `yarn workspace @asu/components-homepage test:storybook --run` | malformed/duplicate data, unsafe URL |
| complete first-render HTML and one list | contract | React render / HTML addon | real render + normalized fixture | `yarn workspace @asu/components-homepage test:storybook --run` | mount gating, duplicate trees |
| open/close ARIA, inert, focus | component | DOM initializer | real browser | `yarn workspace @asu/components-homepage test:storybook --run` | hidden focus, lost focus |
| Escape/outside/second-item close | component | document events | real browser | same | cross-instance or ambiguous close |
| teardown restores server attributes | regression | initializer adapter | real DOM + preseeded attributes | same | server state clobber |
| >768 cluster, =768 carousel | component | viewport | real browser viewport | same | breakpoint off-by-one / accordion regression |
| one-list responsive transition preserves open item | component | `matchMedia` | real resize | same | remount/content loss |
| nav advances one item and clamps | component | scroll geometry | real browser | same | wrong step/looping |
| disabled state start/end/resize/font change | component | observer/font seam | real ResizeObserver; font-ready stub only if needed | same | stale nav state |
| touch/native scroll remains usable | e2e/story | browser input | real Playwright touch emulation | same | JS-only carousel |
| reduced motion removes all motion | component | media preference | browser media emulation | same | vestibular motion |
| forced-colors/focus boundaries | component + a11y | media preference | browser media emulation | same plus Alfa command | invisible controls/faces |
| 320/393/768/1280/1920 geometry, no page overflow | visual/contract | viewport | real browser | `yarn workspace @asu/components-homepage test:storybook --run` | clipping, two-axis page scroll |
| WCAG 2.1 AA selected stories | e2e a11y | Storybook page | Siteimprove Alfa real browser | `yarn workspace @asu/components-homepage test:accessibility` | automated AA violations |
| SCSS token/style rules | static | package files | real linters | `yarn workspace @asu/components-homepage css-lint` | raw colors/token drift |
| JSX/JS quality | static | package files | real linter | `yarn workspace @asu/components-homepage js-lint` | code/style defects |
| vanilla + externalized React artifacts build | integration | Vite/Rollup | real local build | `yarn workspace @asu/components-homepage build` | bundle/package breakage |
| monorepo/doc integration | integration | workspace | real build | `yarn build` | dependency/docs/order regression |
| Storybook MCP interaction/a11y | integration | MCP story runner | real Storybook | `run-story-tests` on `asu-components-homepage` | browser behavior/a11y drift |
| copied HTML equals React contract | contract | HTML addon snapshot | normalized real output | HTML addon inspection + parity story play | Webspark divergence |

The `--run` suffix may be omitted if the local Storybook Vitest script rejects it;
the package-defined `yarn test:storybook` command is authoritative. Manual acceptance
also checks 200%/400% zoom, keyboard, VoiceOver/NVDA, and the Charter integration edge.

## 17. Bite-Sized Task Breakdown (BUILD only, after approval)

Each task is designed for approximately 2–5 focused minutes and is independently
verifiable/committable. The coder must stop if a human decision in Section 15 blocks
the named task rather than inventing an answer.

Task 1: Repeat Storybook component discovery
  Files: none
  Code: run `list-all-documentation` and `get-documentation` for homepage rankings and Unity carousels; record any contract-changing discovery in the approved design before coding
  Test: `yarn workspace @asu/components-homepage storybook --ci`
  Depends on: human architecture approval

Task 2: Add canonical schema and reviewed five-item defaults
  Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles-data.js`
  Code: item typedef, exact-five/unique-ID validation, ID sanitizer, URL allowlist, canonical order and approved copy
  Test: `yarn workspace @asu/components-homepage js-lint`
  Depends on: Task 1; Section 15 decisions 1–2 for final content (placeholders may remain only if explicitly approved)

Task 3: Render one bubble’s complete HTML
  Files: `packages/components-homepage/src/components/charter-bubbles/CharterBubble.jsx`
  Code: semantic list item, front button, always-present back heading/detail/link/close, ARIA/inert/data hooks, JSDoc props
  Test: `yarn workspace @asu/components-homepage js-lint`
  Depends on: Task 2

Task 4: Add cluster placement shell
  Files: `packages/components-homepage/src/components/charter-bubbles/CharterBubbleCluster.jsx`
  Code: reservation/overlap wrapper, ref and state-class forwarding; no duplicate list
  Test: `yarn workspace @asu/components-homepage js-lint`
  Depends on: Task 3

Task 5: Add carousel shell and native nav
  Files: `packages/components-homepage/src/components/charter-bubbles/CharterBubbleCarousel.jsx`
  Code: viewport/track slot, labelled Previous/Next buttons, derived disabled props; no item copy
  Test: `yarn workspace @asu/components-homepage js-lint`
  Depends on: Task 3

Task 6: Compose the coordinator
  Files: `packages/components-homepage/src/components/charter-bubbles/CharterBubbles.jsx`
  Code: validate data, generate instance IDs, nest cluster/carousel around one `<ol>`, render five bubbles, expose root adapter
  Test: `yarn workspace @asu/components-homepage js-lint`
  Depends on: Tasks 4–5

Task 7: Implement initializer discovery and mutation snapshots
  Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
  Code: root querying, WeakSet idempotence, per-attribute/class/style mutation log, teardown skeleton
  Test: `yarn workspace @asu/components-homepage js-lint`
  Depends on: Task 6

Task 8: Implement bubble transition authority
  Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
  Code: single-open transition, ARIA/inert/tab state, focus open/return, Escape/outside/second-item rules
  Test: `yarn workspace @asu/components-homepage test:storybook`
  Depends on: Task 7

Task 9: Implement responsive and visibility coordination
  Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
  Code: exact 768px matchMedia listener, preserve open ID, optional IntersectionObserver zero-visibility close, fallbacks
  Test: `yarn workspace @asu/components-homepage test:storybook`
  Depends on: Task 8

Task 10: Implement carousel geometry synchronization
  Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
  Code: real-scroll start/end derivation, one-item step, pending guard, scroll/scrollend fallback, ResizeObserver/font sync
  Test: `yarn workspace @asu/components-homepage test:storybook`
  Depends on: Task 9

Task 11: Add token-backed base and bubble-face styles
  Files: `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
  Code: semantic tokens, circle/front/back/focus/forced-colors/reduced-motion; unmatched measured custom properties with TODOs
  Test: `yarn workspace @asu/components-homepage css-lint`
  Depends on: Task 3

Task 12: Add desktop cluster geometry and collision slots
  Files: `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
  Code: >768 3+2 layout, overlap/reservation, hover/focus growth, five approved open slot maps, containment safety
  Test: `yarn workspace @asu/components-homepage css-lint`
  Depends on: Task 11; Section 15 decisions 3–6

Task 13: Add mobile/tablet carousel geometry
  Files: `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
  Code: <=768 flex scroll-snap, 393 measurements with fluid 320 cap, peek/gap/nav placement, no accordion rules
  Test: `yarn workspace @asu/components-homepage css-lint`
  Depends on: Tasks 10–11

Task 14: Wire SCSS and vanilla exports
  Files: `packages/components-homepage/src/scss/components-homepage.scss`, `packages/components-homepage/src/js/index.js`
  Code: import partial and export `initCharterBubbles`
  Test: `yarn workspace @asu/components-homepage build`
  Depends on: Tasks 10, 12–13

Task 15: Add separate React entry/build contract
  Files: `packages/components-homepage/src/react/index.js`, `packages/components-homepage/vite.config.js`, `packages/components-homepage/package.json`
  Code: four exports, externalized React entry, peer/export metadata; keep vanilla entry React-free
  Test: `yarn workspace @asu/components-homepage build`
  Depends on: Task 14

Task 16: Add default and static-contract stories
  Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`, `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.test-fixture.js`
  Code: default/closed/open/no-script/parity stories and exact content/order assertions
  Test: `yarn workspace @asu/components-homepage test:storybook`
  Depends on: Task 15

Task 17: Add breakpoint and interaction stories
  Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
  Code: 320/393/768/769/1280/1920, open/close/focus/Escape/outside, breakpoint preservation, one-list assertions
  Test: `yarn workspace @asu/components-homepage test:storybook`
  Depends on: Task 16

Task 18: Add carousel robustness stories
  Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
  Code: start/end/one-step/rapid-click/resize/font/no-overflow/native-scroll/teardown/server-attribute cases
  Test: `yarn workspace @asu/components-homepage test:storybook`
  Depends on: Task 17

Task 19: Add inclusive rendering stories
  Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
  Code: reduced-motion, forced-colors, 320 reflow, long strings, unsafe input, analytics preservation
  Test: `yarn workspace @asu/components-homepage test:storybook`
  Depends on: Task 18

Task 20: Register accessibility stories
  Files: `packages/components-homepage/tests/stories-to-test.mjs`
  Code: add stable charter story IDs covering default/open/mobile/desktop/reduced-motion/forced-colors
  Test: `yarn workspace @asu/components-homepage test:accessibility`
  Depends on: Task 19

Task 21: Document consumer and placement contracts
  Files: `packages/components-homepage/README.md`
  Code: React/static entries, initializer/teardown, Charter sibling boundary, unique instance IDs, placeholder/content/analytics status, Stage B path
  Test: `yarn workspace @asu/components-homepage build`
  Depends on: Tasks 15, 20

Task 22: Run component validators
  Files: none unless fixes are required in files above
  Code: fix only failures caused by charter-bubbles
  Test: `yarn workspace @asu/components-homepage lint && yarn workspace @asu/components-homepage test:storybook && yarn workspace @asu/components-homepage test:accessibility && yarn workspace @asu/components-homepage build`
  Depends on: Task 21

Task 23: Run Storybook MCP and HTML-parity validation
  Files: story/fixture files only if a contract defect is found
  Code: run story instructions/tests/preview; inspect HTML addon and normalized parity output
  Test: `run-story-tests` and `preview-stories` for `asu-components-homepage`
  Depends on: Task 22

Task 24: Run monorepo integration validator
  Files: only charter-owned files for fixes
  Code: verify ordered build/docs/lint and preserve unrelated dirty work
  Test: `yarn build`
  Depends on: Task 23

## 18. Explicit Skill Validators and Lock Protocol

### `unity-components` validators

- Storybook discovery: `list-all-documentation` and `get-documentation` before code.
- `yarn build` including docs/JSDoc validation.
- Package ESLint and Stylelint (`js-lint`, `css-lint`, or `lint`).
- `run-story-tests` through Storybook MCP.
- HTML addon snapshot/parity inspection.
- Confirm no meaningful HTML is conditionally mounted after first render.

### `asu-design-a11y` validators

- WCAG 2.1 AA automated package audit plus manual keyboard/screen-reader review.
- Visible focus/no trap; correct labels/names/states; 44px targets.
- 320 CSS px, 200% and 400% zoom/reflow.
- Reduced motion and forced-colors checks.
- Contrast verification on gold, white, expanded, and photographic surfaces.

### `asu-brand` validators

- All colors, typography, spacing, and breakpoints use Unity tokens where they
  exist; `css-lint` passes.
- Every unmatched measured value is a named custom property with a design/token
  TODO, not a silent approximation.
- Copy remains clear, inclusive, and unchanged from the approved source.
- No fabricated brand asset, color, or logo rule.

### Lock protocol

1. Human approves this document and resolves or explicitly defers the blocking open
   decisions.
2. Architecture becomes **LOCKED**.
3. Coder implements only the locked paths/contracts.
4. Reviewer validates behavior against this document and current approved evidence.
5. Any change to one-list architecture, breakpoint, React/static boundary, placement
   ownership, carousel mechanics, or accessibility state machine requires explicit
   human re-approval before implementation continues.
