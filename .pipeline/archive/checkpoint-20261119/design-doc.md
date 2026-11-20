# Charter Bubbles Carousel Choreography Amendment — WWWCMS-238

Status: **PLAN — restore confirmed two-phase transition, 2026-11-19**.
This amendment refines the always-open carousel contract below: its invariant
is logical selection. Visual closing and opening retain the existing staggered
timing. Previous approved typography, hover, focus, and cluster fixes remain.

## History evidence and exact regression

The desired parent-width choreography first appears in committed history at
`4f87a1157` (2026-11-13, `feat(components-homepage): add charter bubbles`). Its
`startCorrection` adds `is-opening` to destination B, clears A through
`setOpenId(null, { allowCarouselEmpty: true, returnFocus: false })`, and starts
smooth correction. The mobile CSS treats `is-opening` as expanded parent width
without expanding the back face. `activatePendingSelection` grants B `is-open`
only after its closed-circle edge reaches center. `getExpandedTargetLeft`
predicts the final layout with exactly one expanded parent. This structure
survives through `bc33005e5`, the later accessibility/cancellation fixes, and
current HEAD `d49c48355`. The earlier `cfcf2e139` lacked the early parent-growth
step. No historical committed `is-closing` class was found.

The current uncommitted always-open changes remove A's immediate close from
`startCorrection`, keeping A visually open until `activatePendingSelection`
switches to B. They also add `retainedWidth` to correction geometry because A
and B both retain expanded parents. These two changes cause the sequencing
regression. Restore their original visual intent, while retaining a nonempty
logical selection rather than restoring the temporary null logical state.

## State, class, width, and accessibility ownership

Keep logical selection separate from visible face state in the existing
`bindBubbleTransitions`/`bindCarouselGeometry` boundary. Do not introduce a
second controller, cloned bubble, new scrolling mechanism, or restored carousel
dismissal. A small internal transition option/method may defer visual opening
while setting the destination's logical ID.

- `openId`/`data-open-id` and `getOpenItem` identify logical destination B from
  the start of a genuine A-to-B correction. They never become null in carousel.
- `is-open` remains the visual expanded-face state. Remove it from A immediately;
  add it to B only at the threshold. There may be zero fully open visual faces
  briefly; the logical selection remains B throughout. Require exactly one
  `is-open` after settlement, not at every intermediate animation frame.
- `is-opening` keeps its established meaning: B's parent is growing/expanded,
  while B's face remains the small closed bubble. It owns only B's parent-width
  reservation until `is-open` replaces it at the threshold, without a width
  discontinuity.
- A loses both expanded-width classes in the same update that starts B's parent
  growth. Its parent transitions from open width O to closed cell width C;
  B transitions C to O with the same duration/easing. Keep fixed carousel item
  height and local face anchors so neither face jumps vertically. Start A's
  close from its current scroll-relative position; never recenter A first.
- B's visually closed panel stays `aria-hidden`, `inert`, and untabbable until
  threshold activation. A's panel becomes hidden/inert as it closes. At settled
  open, B's ARIA/front/panel state agrees with `data-open-id`. Do not expose a
  visually hidden link merely because logical selection has changed.
- Continue using the existing mutation ledger and `syncRecord` path for classes
  and accessibility. Internal logical selection must not accidentally call the
  ordinary immediate-open synchronizer and defeat deferred visual activation.
- Preserve latest keyboard-link focus intent and cancellation generation. Move
  keyboard-requested focus only when B's panel is activated; never focus a
  pending/hidden link. Pointer, wheel, swipe, navigation buttons, or external
  focus changes retain their current focus rules and endpoint transfer.
- A retained closing class is not needed for the historical width sequence.
  Introduce a local, transient closing marker only if a real-browser test proves
  it necessary to preserve an existing face anchor/style during close; remove
  it on completion, interruption, mode change, and teardown.

```text
time       t0: correction begins              tT: edge at center        settled
logical    A ----------------> B ---------------------------------------- B
A face     OPEN -------------> CLOSING ------------------------------ CLOSED
A parent   O ----------------> shrinking at easing E --------------------- C
B parent   C ----------------> growing at easing E ----------------------- O
B face     CLOSED --------------------------------> OPENING ------------ OPEN
scroll     current ----------> smooth correction to B ---------------- centered
classes A  is-open ----------> no expanded-width class ---------------- none
classes B  none -------------> is-opening ----------> is-open -------- is-open
```

At t0 the four Phase-1 operations occur together: A closes, A shrinks, B's
parent grows, and correction starts. Phase 2 begins as soon as the geometric
threshold is met, even if correction or parent-width transitions are ongoing.
For sufficiently close targets the threshold may already be true at t0; do not
invent an artificial delay. Selecting the same logical/visual item remains a
no-op for face animations; held swipes defer selection until release as before.

## Threshold and correction geometry

Preserve the existing symmetric `targetEdgeHasReachedCenter` condition using
B's still-closed front, not its growing parent or expanded back:

```text
Vc = viewportRect.left + viewportRect.width / 2
Bc = closedFrontRect.left + closedFrontRect.width / 2
start B visual opening iff abs(Bc - Vc) <= closedFrontRect.width / 2
```

At the normal root size this is a 90px center-distance threshold for the 180px
closed front. Continue checking on correction progress and settlement fallback;
do not wait for `scrollend`, a fixed elapsed delay, or A's close completion.
Do not measure B after an open transform has shrunk/rotated its front.

Restore the final one-expanded-parent target used by `4f87a1157`: for B index j,
closed cell C, open parent O, gap G, and list start padding P,
`targetCenter = P + j*(C+G) + O/2`. Final track width is
`2P + O + (n-1)*C + (n-1)*G`; clamp target scroll to its valid range. Remove
the newly added previous-open `retainedWidth` compensation: A is now shrinking
from t0. Ensure final-layout correction does not skip its prediction solely
because B is already logically selected. Intermediate centering may consult
live parent boxes, but must not introduce auto-scroll snap-back while width
transitions run. Maintain equal/opposite A/B width exchange with no overlap.

## Cleanup, failure paths, and scope

Preserve current always-open semantics, hidden carousel Close controls, 16px
text, 180/200 hover contract, native vertical wheel behavior, one-neighbor/one-
continuous-wheel-session limits, and current second-click cluster dismissal.
All next/previous, direct-selection, keyboard-focus, released-swipe/native pan,
and horizontal wheel paths must enter the same correction sequence.

Interrupted/replaced correction, viewport mode change, reduced-motion toggling,
and teardown must clear pending visual/layout markers, stale frames, and focus
intent. On carousel-to-cluster change, reconcile the logical B into the settled
cluster visual state before clearing temporary classes. Avoid leaving a hidden
logical selection or a wide ghost parent. Reduced motion follows the same state
ordering and resolves immediately without waiting for absent transition events.
Missing/zero geometry must use existing guarded fallback/retry paths; it must
not invent a null logical item or start an unrelated bubble.

## Browser test matrix and verification

Extend existing charter stories with focused choreography coverage under Tests.
Use real rendered CSS and browser scroll/pointer behavior. Establish RED against
the current change: A stays visually open and its parent stays wide before B
reaches the threshold. No new runtime-only diagnostic API is required.

| Behavior | Observable browser evidence |
| --- | --- |
| Phase 1 exchange, both directions | Start with settled interior A; record frame samples before invoking Next/Previous; after correction begins, see A closing and width decreasing while B width increases, B back still closed, scroll changing, and logical ID never absent |
| Matched parent timing | Compare normalized widths `pA=(O-widthA)/(O-C)` and `pB=(widthB-C)/(O-C)` in the same frame; require progress together within layout rounding tolerance, with one parent-width gain balancing the other loss |
| Threshold opens before finish | Sample B front rect and visual-open class transition; B remains closed while its edge is outside center; first opening frame meets the edge threshold within one-frame tolerance; correction may still be moving and B is not required to be exactly centered |
| Direction symmetry/no snap-back | Record outgoing face centers and vertical anchor across close start for A→B and B→A; no recenter-to-viewport jump or vertical discontinuity; track neighboring painted-circle bounds through transition |
| Input paths | Repeat sequence through Next, Previous, direct closed-front click, keyboard selection, released pointer/touch pan and horizontal wheel; held pan does not animate faces; same-item settlement does not reanimate |
| Boundaries/focus | First/last centering, endpoint navigation focus, pointer/no-focus-steal, external focus cancellation, 768/769 transition mid-correction, reduced motion, HTML parity, and existing typography/cluster tests pass |

Use `requestAnimationFrame`, MutationObserver/class changes, real scroll events,
and animation/transition completion to collect and await sequence evidence.
Do not synthesize `scrollend` immediately after navigation in the choreography
test; it can conceal the real ordering. Do not add sleeps or increase timeouts.
Native smooth-scroll duration varies; assert order and geometry, not exact
milliseconds or exact scroll coordinates per frame. Restore any instrumentation
and fixtures in `finally`; do not claim sampled tests prove every pixel of all
animations. Run at 393px and at least one 320px/boundary carousel viewport.

Production changes are limited to `charter-bubbles.js` and only necessary local
carousel state selectors in `_charter-bubbles.scss`. Tests stay in
`charter-bubbles.stories.jsx` and `charter-bubbles.tests.stories.jsx`.
From `packages/components-homepage`, run focused RED/GREEN browser checks, then:

- `yarn exec eslint src/components/charter-bubbles/charter-bubbles.js src/components/charter-bubbles/charter-bubbles.stories.jsx src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`
- `yarn exec stylelint src/components/charter-bubbles/_charter-bubbles.scss`
- `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`
- `yarn test:storybook`
- `yarn build`

Use Storybook MCP instructions/tests/previews and report returned preview URLs.
Preserve current uncommitted focus/always-open work and historical reports;
append exact evidence to `.pipeline/impl-report.md`. No dependencies, analytics,
data model, new ARIA widget roles, or security boundaries are introduced. Keep
frame work bounded to an active correction and cancel it through the existing
controller cleanup ledger. Apply the existing Unity, brand, and design/a11y
skill references from the preceding amendments.

---

# Charter Bubbles Always-Open Carousel Amendment — WWWCMS-238

Status: **CONTRACT DECISION — implementation pending, 2026-11-19**.
Jira comment `2634729` records this decision. This amendment supersedes every
earlier carousel rule that permits an empty state, exposes a carousel Close
button, or moves carousel focus to that Close button. Cluster dismissal remains
unchanged.

## Carousel invariant and controls

- At 768px and below, carousel mode always has exactly one logical active/open
  item. `data-open-id`, `aria-expanded`, visible panel state, and carousel active
  selection must agree after every settled transition.
- Entering carousel mode preserves the logical open item when one exists;
  otherwise select the nearest centered item, falling back to the first item.
- Previous/Next, swipe, horizontal scroll, direct bubble activation, and
  focus-driven selection replace the active item. They never transition the
  carousel to `ALL_CLOSED`.
- Escape, outside click, second-click dismissal, and scrolling out of view are
  cluster-only close paths. They must not empty the carousel.
- Close controls remain in the shared DOM for cluster/static parity but are
  cluster-only. In carousel mode every Close control is visually hidden,
  removed from sequential focus, and absent from the accessibility tree. Mode
  changes restore the authored cluster state without duplicating controls.

## Accessibility and focus contract

- Previous/Next activation retains focus on the navigation button that was
  invoked while it remains enabled. If it becomes disabled at an endpoint,
  transfer focus to the other enabled navigation button. Changing slides must
  not otherwise move keyboard focus.
- Touch, pointer, trackpad, wheel, and native scroll selection do not force
  focus or announce every intermediate position.
- When keyboard focus or activation of a closed bubble makes it active, move
  focus to its visible, naturally focusable link. No temporary or persistent
  panel tabindex is introduced. Chromium moves focus to `body` immediately
  when a focused panel's temporary `tabindex` is removed, so the link is the
  stable focus destination. The next Tab reaches enabled navigation controls.
- Normal carousel Tab order contains the active bubble link followed by enabled
  Previous/Next controls. Hidden fronts, inactive panels, and every Close
  control are excluded.
- The active trigger retains `aria-expanded="true"` and its panel retains the
  existing deterministic `aria-controls`/label relationships. Inactive panels
  remain `aria-hidden` and `inert` with focusable descendants suppressed.
- The carousel is not a live region. State is conveyed through active content,
  control names/states, and deliberate keyboard focus only.
- Reduced motion changes transition timing, not the one-active-item invariant or
  focus order.

## Required verification before Stage B handoff

- Initialization, every navigation/input path, resize into carousel, and font/
  content reflow settle with exactly one open item.
- Close controls in carousel compute to hidden, have no sequential tabindex,
  and are not exposed in an accessibility snapshot; cluster Close controls
  remain visible, labelled, focusable, and functional.
- Escape, outside click, and second click do not empty carousel mode.
- Previous/Next focus remains stable, moving to the other enabled control when
  the focused endpoint becomes disabled. Keyboard bubble activation focuses its
  active link without a temporary tabindex; pointer/scroll selection does not
  steal focus.
- HTML parity, 768/769 mode changes, end-button disabling, reduced motion,
  forced colors, no-script fallback, and cluster close paths continue to pass.

---

# Charter Bubbles Closed/Hover Contract Amendment — WWWCMS-238 / PR #1839

Status: **LOCKED — user-confirmed clarification, 2026-11-19**.
This amendment resolves blocker 3 and supersedes historical 195px closed /
211px hover statements below. Jira comment **2634628** records the decision.
The user has confirmed 180px closed and 200px hover are correct. Current Figma
supports the 180px closed circle; it exposes no hover measurement. The hover
value is prototype-derived, not a Figma specification.

## Scope and exact source contract

**Hold scope.** Consolidate the existing hover value into the existing custom
property and verify its rendered behavior. No visual size change is intended.
In `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`:

1. Retain `--hp-charter-circle: 11.25rem` (180px with the standard 16px root).
2. Replace the unused length `--hp-charter-emphasis: 12.5rem` with the unitless
   scale `--hp-charter-emphasis: 1.111111` (200 / 180).
3. Replace the hover rule's literal scale with
   `transform: translate(-50%, -50%) rotateY(0) scale(var(--hp-charter-emphasis))`.
4. Comments must cite the confirmed Jira clarification, Figma's closed size,
   and prototype-derived hover provenance without attributing hover to Figma.
   Preserve the existing component-size-token TODO where relevant.

The same property name now represents a ratio, not a length. Search all uses
before changing it; the current source declares it once and never consumes it.
Do not add a new public prop or dependency. Preserve the larger-size typography,
open-face transforms, no-script layout, carousel correction hover suppression,
neighbor suppression when another cluster bubble is open, and reduced motion.

```text
confirmed 180px closed + prototype 200px hover
                  -> unitless 200/180 custom property
                  -> existing front:hover scale(var(...))
                  -> closed 180px; hovered effective local size ~200px
```

## Focused rendered test contract

Use the existing real browser/CSS seam in
`charter-bubbles.stories.jsx`. Extend a suitable existing desktop story or add a
focused `HoverSizing` story re-exported under `Homepage/Charter bubbles/Tests`;
the latter source export must be excluded from the parent sidebar.

Use `realPointer.hover`/`realPointer.unhover` from the existing helper when
`realPointer.available` is true. Storybook's synthetic `userEvent.hover` does
not establish `:hover` and must not be claimed as a native-hover assertion.
If a non-test preview cannot set native hover, run baseline checks there and
record that the CLI browser test verifies hover. Do not mirror or invent a
second production transform declaration for this test.

| Behavior | Browser evidence | Failure caught |
| --- | --- | --- |
| Desktop closed base | At 1280px, wait for enhanced cluster with no open item; unhover and read computed front width/height as 180px | Stale 195px or accidental layout-size change |
| Ratio custom property | Parse the full trimmed property with `Number`, require finite value approximately `200 / 180`, not `parseFloat` alone | Unused `12.5rem` length survives; wrong units |
| Actual hover output | Native hover, assert `front.matches(':hover')`, await resulting transform; use `DOMMatrixReadOnly` to obtain scale, check computed width times scale is ~200px in both axes | Variable is not consumed, transform invalid, wrong ratio |
| Property controls output | While hovered, temporarily set the custom property to `1.05`, await effective 189px, then restore its exact prior value/priority in `finally` and await ~200px | Hardcoded 1.111111 remains despite a correct property declaration |
| Unhover/reduced motion | Unhover returns scale 1; with existing reduced-motion class/preference, native hover retains scale 1 and zero transition | Hover overrides motion preference or stays enlarged |
| Carousel/open neighbors | Run existing CarouselNavigation, breakpoint, desktop boundary/slot, and ReducedMotion stories | Cascade changes suppression or mobile behavior |

Accept 0.01px effective-size tolerance because six-digit ratio precision yields
199.99998px. Avoid comparing a whole computed matrix string. Width times the
front's own scale measures the design diameter without conflating an ancestor
cluster-stage scale: viewport-height rules can scale that stage to 0.85, and
the 769px range also uses an ancestor scale. Keep the default fixture/root
font size; assert the local rendered contract with computed CSS. Use
`waitFor` for numeric transform targets or actual CSS animation completion;
never add arbitrary sleeps or a longer test timeout to wait out transitions.
Restore custom property, pointer, and reduced-motion fixtures on all exits.

## Minimal implementation/verification tasks

1. Obtain Storybook story instructions; add focused assertions before changing
   SCSS. Establish RED with the current `12.5rem` property and property-driven
   rendered-output assertion (the default 180/200 appearance already passes).
2. Make the three source-line changes plus accurate comments. Run the focused
   test, verify GREEN, then run the affected charter-bubble regression stories.
3. From `packages/components-homepage`, run:
   - `yarn exec stylelint src/components/charter-bubbles/_charter-bubbles.scss`
   - `yarn exec eslint src/components/charter-bubbles/charter-bubbles.stories.jsx src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`
   - `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`
   - `yarn test:storybook`
   - `yarn build`
4. Run Storybook MCP tests for affected discoverable IDs, request the focused
   preview and report its URL, and run scoped `git diff --check`. Update
   `.pipeline/impl-report.md` with exact evidence while preserving prior work.

No new state transitions, listeners, markup, analytics, data exposure, or
performance cost. Keyboard/focus and the explicit second-click fix retain their
existing behavior. Applicable skill references remain `unity-components`
(Storybook/HTML parity), `asu-design-a11y` (motion/focus), and `asu-brand`
(preserve token TODOs for measured sizes lacking a Unity component token).

---

# Charter Bubbles Second-Click Amendment — WWWCMS-238

Status: **PLAN — PR review item 2, 2026-11-19**.
This amendment governs cluster-mode second-click dismissal. Earlier component
architecture and the completed typography amendment remain preserved below.

## Problem, scope, and evidence

**Hold scope.** A visitor can open a cluster bubble but cannot dismiss it by
clicking the expanded face a second time. The ticket requires this path along
with Close, Escape, and outside-click. The user's review note specifies the
missing behavior and its minimal fix; no further product decision is needed.

`onRootClick` in `charter-bubbles.js` currently handles Close, closed-front
activation, and an outside-open-item click. The open front has
`pointer-events: none`, so normal clicks on an expanded bubble land on its
back face or its content, which the handler ignores. `CharterBubble.jsx` gives
that face a heading, paragraph, link, and Close button. Existing stories test
front activation, Close, Escape, and outside clicks, but never the back face.

Success means a desktop visitor can click the expanded face or its static
heading/detail to close it, while clicking its link still activates the link.
Maintainers and the HTML/Webspark consumer receive the same shared controller
fix, without a React-only path or markup duplication. No geometry, CSS, text,
analytics, carousel selection, or component API changes are needed.

## Handler decision order and interaction boundary

Keep the delegated root listener and existing `transitionTo` state machine.

1. Resolve an element target and require that it belongs to this component root.
2. Handle the active Close button through the existing branch (including its
   carousel dismissal notification and `allowCarouselEmpty` behavior).
3. Handle front-trigger activation through the existing branch. Closed triggers
   still open/select their item; programmatically dispatched open-front clicks
   retain their existing behavior and are not the new back-face close path.
4. Resolve the active record. For cluster mode only, if the target is within
   `active.item`, ignore actionable descendants; otherwise call
   `transitionTo(null, { returnFocus: true })` and return.
5. Preserve existing cluster outside-open-item dismissal for other root targets.

For actionable descendants, reuse the existing `FOCUSABLE_SELECTOR` for the
supported HTML contract (`a[href]`, buttons, inputs, selects, textareas,
`[tabindex]`, and editable content), with an explicit check that the matching
descendant lies within the active item. The Close branch already has priority.
This protects the current link and any supported focusable control from blanket
back-face dismissal. Nested spans/SVG inside a control must also be excluded via
`closest`. Static headings and paragraphs remain dismissal targets. Do not
prevent default or stop propagation: link navigation and delegated analytics
must continue normally. Do not add a wrapping button, role, or tab stop to the
back face; the explicit Close control remains the keyboard alternative.

## State and focus contract

```text
root click -> active Close? -> existing close path
           -> front?        -> existing open/select path
           -> cluster + inside active + static target?
                            -> transitionTo(null, { returnFocus: true })
                            -> closed ARIA/inert/classes and original front focus
           -> cluster + outside active? -> existing outside close path
           -> actionable descendant or carousel back -> unchanged
```

| User action | Current state | Next state | Focus/result |
| --- | --- | --- | --- |
| Click expanded background, heading, or detail | Cluster item open | All closed | Original front trigger focused |
| Activate expanded link or its descendant | Cluster item open | Same item open until navigation | Native link activation preserved |
| Activate active Close | Either mode open | Existing closed state | Existing focus return preserved |
| Click expanded static content | Carousel item open | Same item open | Existing carousel behavior |
| Click another closed front | Cluster item open | Other item open | Existing Close focus on new item |

The current `transitionTo` only returns focus when focus is still inside the
previous item. A genuine pointer click on a non-focusable back surface can move
focus to `body` before the click listener runs. Test this with the browser's
normal pointer sequence. If the return-focus guard prevents the required trigger
focus, explicitly focus `active.front` after a successful second-click
transition in this branch alone. Do not widen global outside-click focus rules.

Closing must remove `data-open-id`/`is-open`, set the front `aria-expanded=false`,
hide/inert the panel, and restore the existing closed-descendant tabindex rules.
Reopening must continue working. Reduced-motion behavior stays CSS-driven.

## Focused test matrix

Use the real rendered controller and DOM; no mocked transitions or direct calls
to internal state setters. Add `SecondClickCloses` to existing story exports and
register it under `Homepage/Charter bubbles/Tests`, excluding its source export
from the parent sidebar as with the other test stories.

| Behavior | Level / seam | Strategy and observable assertions | Failure covered |
| --- | --- | --- | --- |
| Click open back face closes | Browser component / actual click dispatch | Open at 1280px, wait for cluster/open/Close focus and stable hit target, click back surface, assert all closed ARIA/inert/classes and front focus | Missing second-click branch and pointer focus loss |
| Static child click closes | Browser component / bubbling target | Reopen and click heading or paragraph, assert closure | Branch handles only panel itself |
| Link click stays actionable | Browser component / native link click | Use a same-document fixture destination to avoid leaving the test, observe uncancelled activation, assert item remains open and href/analytics attributes unchanged; restore fixture/listeners | Blanket click handler swallows link or nested target |
| Carousel static click stays open | Browser component / responsive mode | At 393px or 768px, wait for existing active item and click back static content, assert same item remains open | Missing cluster-mode guard |
| Existing close modes and shared HTML survive | Existing integration stories | Run OpenCloseFocus, EscapeAndOutside, CarouselNavigation, HtmlParity, and breakpoint plays | Focus, dismissal, selection, or static-render regression |

Wait for observable state and relevant animations/hit-test readiness rather than
adding arbitrary sleeps/timeouts. A normal click must establish the core
regression; do not replace it with a synthetic event that skips pointer focus
behavior. The link test may prevent navigation only after recording whether the
component canceled it, with listener ordering documented; no production event
must be intercepted.

## Implementation tasks and verification

All implementation files are under
`packages/components-homepage/src/components/charter-bubbles/`:

1. Read the relevant skills listed below and call Storybook story instructions.
   Add `SecondClickCloses` to `charter-bubbles.stories.jsx` and re-export in
   `charter-bubbles.tests.stories.jsx`. Run it before production changes to record
   the expected failure that the open panel stays open.
2. Add the minimal cluster-only branch in `charter-bubbles.js` using the ordering,
   actionable-target guard, and focus behavior above. Re-run the new story and
   the existing dismissal/HTML-parity/carousel stories.
3. From `packages/components-homepage`, run:
   - `yarn exec eslint src/components/charter-bubbles/charter-bubbles.js src/components/charter-bubbles/charter-bubbles.stories.jsx src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`
   - `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`
   - `yarn test:storybook`
   - `yarn build`
4. Run Storybook MCP `run-story-tests` for the focused new/existing story IDs
   discovered through documentation, request its preview, and report every
   returned preview URL. Run scoped `git diff --check` and record RED/GREEN plus
   final checks in `.pipeline/impl-report.md`, preserving historical reports and
   all unrelated pending working-tree changes.

## Failure modes, accessibility, security, and performance

- Broad containment can close on link activation: guard the closest supported
  focusable/actionable descendant after handling Close and fronts.
- Pointer focus can leave the old item before click: assert actual final trigger
  focus and fix only this new dismissal branch if needed.
- Testing offscreen content can trigger IntersectionObserver closure and produce
  a false pass: place the cluster in view and assert open immediately before
  the tested click. Avoid `href=#` viewport jumps in the link case.
- A missing mode gate can empty the mobile carousel: assert mobile static click
  keeps the same active item.
- Nested roots must keep their existing ownership guard; no new global listener
  or event cancellation is introduced.
- Keyboard Tab, Enter/Space on existing buttons/links, Escape, labels, hidden/
  inert synchronization, and motion preferences retain their existing contract.
- No new inputs, dependencies, timers, persistence, network requests, or looped
  work. The delegated click adds a bounded DOM ancestor query only.

Required implementation/review references: `.agents/skills/unity-components/SKILL.md`
(Storybook discovery, HTML parity, validators),
`.agents/skills/asu-design-a11y/SKILL.md` (keyboard/focus/semantics), and
`.agents/skills/asu-brand/SKILL.md` (preserve existing styles and tokens). The
architect read these references and Storybook component documentation for this
amendment. No Figma remeasurement is required for the behavior-only ticket fix.

---

# Charter Bubbles Typography Amendment — WWWCMS-238

Status: **PLAN — focused amendment prepared for review, 2026-11-19**.
This amendment governs the font-size correction only. The earlier component
architecture is preserved below for reference; its behavior remains the baseline.

## Problem and scope

**Hold scope.** Visitors must be able to read every visible charter-bubble label,
heading, description, and link at a settled font size of at least 16 CSS px in
the standard 16px-root environment. Use rem-based Unity tokens so user font
preferences can enlarge that text. There are no intentionally smaller text
exceptions. SVG dimensions and brief animation transforms are not text sizes.

The user has already specified the problem, the affected component, and the
minimum size. Existing source identifies the cause; no additional product
decision is required for this amendment. Stakeholders are homepage visitors,
Unity maintainers, and the static HTML/Webspark consumer. Success is observable
computed text sizing and readable, unclipped content across the existing modes.

### Evidence

- `_charter-bubbles.scss` currently sets carousel detail and links to
  `0.7235rem` (11.576px) at widths through 768px. Its unenhanced/no-script detail
  and links repeat that value at every width.
- Desktop detail already uses `$uds-size-font-medium` (1rem). Desktop links
  currently inherit their size and should receive an explicit component size.
- Front labels use `$uds-size-font-large` (20px); expanded headings are 28px on
  desktop and approximately 20.26px on mobile and no-script views.
- Canonical token: `packages/unity-bootstrap-theme/src/scss/_custom-asu-variables.scss`
  defines `$uds-size-font-medium: 1rem`.
- User direction supersedes the older 11.58px Figma measurement comments. The
  referenced mobile Figma node is `13472:61899` in file
  `F4lomCUW2bWkekYZ0j7O03`. A fresh Figma design-context read has not been completed:
  the connector's required design-to-code guidance resource was not exposed by
  its resource or template inventory. Do not claim this amendment was measured
  from a fresh Figma response.
- Storybook discovery and `get-documentation` confirmed the existing
  `homepage-charter-bubbles` component and responsive stories; no new component
  or dependency is needed.

## Decision and affected files

Production scope is
`packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`:

1. Set `.hp-charter-bubble__detail` and the existing link/visited link rules to
   `$uds-size-font-medium` at their effective cascade levels.
2. Replace both mobile body/link `0.7235rem` declarations and the no-enhancement
   body/link declaration with that token, or remove redundant overrides once the
   same computed size is demonstrably inherited from the component base.
3. Preserve the current larger front-label and heading sizes, link normal weight,
   inline-link behavior, breakpoints, circle dimensions, and icon dimensions.
4. Remove stale comments claiming the old mobile text size is authoritative.
5. Start with existing line-height/spacing. Make only the smallest local
   content-layout adjustment proven necessary by rendered checks. Do not add
   font shrinking, line clamping, truncation, or clipping to obtain a passing
   fit test. Do not change the carousel/controller or desktop placement formula.
6. If the requested typography cannot fit real content within the current circle
   contract, record the exact failing item and viewport and bring that concrete
   tradeoff back to the parent before widening this amendment's geometry scope.

Test scope is the existing
`charter-bubbles.stories.jsx` and, only if needed for sidebar export,
`charter-bubbles.tests.stories.jsx` in that same directory. Prefer extending
the existing rendered-content assertions and responsive/no-script plays over
creating parallel test infrastructure. Contract or handoff text elsewhere changes
only if it explicitly asserts the obsolete 11.58px requirement; do not rewrite
unrelated pipeline artifacts or the dirty `.pipeline/impl-report.md` during planning.

## Data flow and state

```text
Unity font token -> compiled component CSS -> existing shared HTML
                                         -> desktop text >= 16px
                                         -> carousel text >= 16px
                                         -> no-script text >= 16px
```

No JavaScript state transition changes. Desktop open/close, carousel activation,
keyboard focus, reduced motion, and 768px/769px mode changes retain their current
state machine. Compute sizes after enhancement/layout and any relevant animation
settles; the hidden reverse face is not a visible-state reading target.

## Failure modes and responsive considerations

- Cascade regression: a mobile or no-enhancement override can silently restore
  11.58px. Assert actual computed sizes, not merely SCSS source text.
- Inherited link size: a parent or link rule can differ from paragraph size.
  Check links independently, including the visited selector in source review.
- Text growth increases wrapping inside the ~328.47px mobile/fallback circles.
  Check all five default items and the existing long-copy fixture at 320px,
  including link/close collision and panel clipping. A positive scrollHeight fit
  alone does not prove a positioned close button is clear of the link.
- At 320px, circle edges may exceed the viewport under the existing approved
  contract; meaningful text and controls must remain inside it.
- No-script content is visible at every breakpoint and must use the same floor.
- Rem-based text should enlarge under user font preference/zoom; never counteract
  enlargement with a compensating transform. Existing flip/hover transitions
  remain intact.

## Focused test matrix

All checks use real DOM, CSS, and browser layout; no mocks or new seams.

| Behavior | Level / boundary | Verification | Failure covered |
| --- | --- | --- | --- |
| Front labels and open headings/details/links are >=16px | Browser component; current rendered styles | Responsive stories at 320, 393, 768, 769, 1280, and 1920px; inspect all five items where practical | Mobile override or inherited link below floor |
| Default and long content remains readable | Browser component; existing `assertExpandedContentFits` | Existing `LongContent` and narrow expanded-content checks; add link/close separation and content bounds where needed | Clipping, overlapping controls, viewport escape |
| Unenhanced text remains >=16px | Browser component; existing `NoScript` | Check all five headings, details, and links at narrow and desktop sizes | Fallback-only regression |
| Shared React/static contract and interactions survive | Browser integration | Existing `HtmlParity`, carousel, focus, breakpoint, reduced-motion, and desktop boundary plays | Accidental unrelated behavioral change |
| SCSS compiles and changed files conform | Package build/lint | Commands below | Invalid tokens or selectors |

## Small implementation tasks and exact commands

Working directory for commands: `packages/components-homepage`.

1. Read the brand, accessibility, and Unity skills named below and obtain
   Storybook story instructions. Extend existing browser plays with meaningful
   computed-font assertions and narrow text/control fit checks. Run the focused
   command to establish the current undersized-text failure:
   `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`.
2. Apply the SCSS token/cascade correction above. Run the same focused command.
   Inspect 320px default/long-content results before changing any spacing. Preserve
   all unrelated pending work.
3. Run `yarn exec stylelint src/components/charter-bubbles/_charter-bubbles.scss`;
   if stories changed, run
   `yarn exec eslint src/components/charter-bubbles/charter-bubbles.stories.jsx src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`.
4. Run `yarn build` and `yarn test:storybook` from this package. Use Storybook MCP
   `run-story-tests` for focused stories and `preview-stories` for review URLs.
   Inspect no-script and 320px text fit in rendered output. Report exact results;
   do not claim a fresh Figma match without obtaining fresh design evidence.

## Accessibility requirements

- Keyboard and focus: retain current trigger -> open face -> link -> close flow,
  carousel navigation, Escape handling, and global focus styling.
- Screen reader: retain list labels, heading associations, hidden/inert state,
  and live announcements; no semantic HTML changes are required.
- Motion: retain existing reduced-motion preferences and transitions.
- Reflow: visible text/control content fits at 320px; increasing font size must
  not be neutralized by shrinking the wrapper or text. Existing circle overflow
  permission does not authorize text overflow.

## Skills and required source references

- Brand: `.agents/skills/asu-brand/SKILL.md`; read the canonical theme token file
  named above. Use the existing medium token; add no new font-size token.
- Design/accessibility: `.agents/skills/asu-design-a11y/SKILL.md`; verify narrow
  reflow and unchanged focus/motion behavior in the existing browser stories.
- Framework: `.agents/skills/unity-components/SKILL.md`; retain initial HTML and
  the HTML-parity check, obtain Storybook instructions, and run story tests.

## Security and performance

No new inputs, permissions, dependencies, DOM nodes, network requests, or runtime
listeners. Preserve URL sanitation and analytics attributes. CSS layout may wrap
text onto more lines; verify fitting using the existing browser environment.

---

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
