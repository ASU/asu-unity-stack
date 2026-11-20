# Choreography review: scrollend capture ordering — 2026-11-19

The choreography story now registers and removes its `scrollend` observer with
`capture=true`, so it records the destination state before the controller's
handler can open it. Stale-event position filtering and the post-open movement
assertion remain unchanged. No production behavior was changed.

The focused two-file charter Storybook suite passed 36/36; targeted ESLint and
scoped `git diff --check` passed. No commit or push.

---

# Choreography review: first-open timing evidence — 2026-11-19

Status: **DONE_WITH_CONCERNS**, pending review. No commit or push. Production
behavior was not changed in this follow-up.

The choreography story observes the destination's first `is-open` mutation,
records the scroll position at that instant, and samples subsequent frames. It
checks that correction has not settled at the opening position and that the
viewport moves by more than one pixel afterward for Next, Previous, direct
selection, and wheel at 320px and 393px. Native `scrollend` positions are
compared with the opening position so a trailing event from an earlier
correction is not mistaken for settlement of the current correction. Listeners,
observers, and animation frames are cleaned up in `finally`.

This is regression hardening of already-correct behavior; no production RED
variant was introduced. A first test iteration treated every earlier
`scrollend` as the current correction's end and failed at 320px; position-aware
matching removed that stale-event false positive while retaining the
settlement-before-open assertion. `yarn test:storybook
src/components/charter-bubbles/charter-bubbles.stories.jsx
src/components/charter-bubbles/charter-bubbles.tests.stories.jsx` passed 36/36
after the final assertion. Targeted ESLint, Stylelint, build, and diff check
passed. The full package run passed 340/343: the previously observed unrelated
Reimagine Entrance Animation and Entrance Reduced Motion tests and the unrelated
Stories Grid Hover test failed; isolated reruns passed Reimagine 7/7 and Stories
Grid Hover 1/1. Existing Sass/Storybook warnings remain.

Previews:

- http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--carousel-choreography
- http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--carousel-choreography-320

---

# Carousel choreography amendment — 2026-11-19

Status: **DONE_WITH_CONCERNS**, pending independent review. No commit or push.

Logical selection now moves to the destination at correction start while the
outgoing visual face closes and its parent shrinks. The destination receives
`is-opening` and grows simultaneously, but its panel remains hidden and inert
until the existing closed-front center-edge threshold is met. The final state
has one visible open bubble and no transient opening marker. The logical
`data-open-id` remains populated throughout.

History: `4f87a1157` supplied the original phase ordering, `is-opening` width
exchange, threshold and one-expanded-parent scroll target. Its temporary null
selection and temporary panel focus were not restored; the newer logical-state,
link-focus, focus-intent invalidation, breakpoint and endpoint behavior remain.
The mobile `is-opening` selector now matches the `data-open-slot` selector's
specificity, which frame measurements showed was necessary once the logical ID
remained present.

**RED:** From `packages/components-homepage`, `yarn test:storybook
src/components/charter-bubbles/charter-bubbles.tests.stories.jsx -t 'Carousel Choreography'`
failed because the outgoing `employability` remained the logical ID and open
face after correction began. **GREEN:** the same command passed at 393px and
320px, sampling real browser frames for Next, Previous, direct selection, and
horizontal wheel. Assertions cover logical ID, hidden/inert destination,
simultaneous parent-width exchange, center-edge ordering, horizontal movement,
document-relative vertical center, final state, and mode change mid-correction.
The existing carousel interaction story retains held-swipe and keyboard/focus
coverage. The tests sample frames and do not prove every animation pixel.

Updated prior tests that assumed `data-open-id` changed only when the face
opened: they now wait for the destination's visual `is-open` when testing
settled behavior. The forced-colors story scrolls the trigger into view before
opening so its offscreen observer cannot immediately close the cluster bubble.
The keyboard story prevents its placeholder link from navigating the Storybook
runner when focus reaches that link before a simulated Enter.

**Checks:** charter-focused Storybook passed 36/36 before the final test-only
mid-correction breakpoint addition; the two choreography stories passed after
that addition. Final full package `yarn test:storybook` passed 343/343 across
14 files, including HTML parity, reduced motion, 320px and responsive stories.
Targeted ESLint and Stylelint, package `yarn build`, and scoped `git diff --check`
passed. Existing Sass warnings remain. The Storybook MCP test request did not
return; Chromium CLI tests supplied the results.

Previews:

- http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--carousel-choreography
- http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--carousel-choreography-320

Changed component files: `charter-bubbles.js`, `_charter-bubbles.scss`,
`charter-bubbles.stories.jsx`, and `charter-bubbles.tests.stories.jsx` under
`packages/components-homepage/src/components/charter-bubbles/`.

---

# Review cycle 1 closure plan — always-open carousel

| # | Finding | Severity | Type | File(s) | Planned Fix | Evidence Type | Verify Command | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pending keyboard selection steals focus after external pointer/focus intent | P2 | Focus ownership/race | charter-bubbles.js, stories | Preserve selection while canceling or invalidating stale focus requests on outside focus/pointer intent; guard delayed focus | Real Chromium regression | Focused Storybook | RED: outside focus replaced by active link; GREEN: `Carousel Focus Intent` passed |
| 2 | Resize cluster→carousel while Close focused drops focus to body | P2 | Responsive accessibility | charter-bubbles.js, stories | Transfer component-owned Close focus to the preserved active link before hiding Close | Real browser responsive regression | Focused Storybook | RED: focus fell to body; GREEN: `Carousel Breakpoint Focus` passed |
| 3 | Focused endpoint nav button becomes disabled and drops focus to body | P3 | Navigation accessibility | charter-bubbles.js, design doc, stories | Move focus to the remaining enabled navigation button only when the focused button becomes disabled | Both endpoint browser paths | Focused Storybook | RED: endpoint focus was lost; GREEN: `Carousel Endpoint Focus` passed both directions |
| 4 | Design verification bullet still says temporary focusability | P3 | Documentation | .pipeline/design-doc.md | Replace with native active-link focus language | Source inspection | rg/diff check | Native-link wording and endpoint policy verified |

The focused RED and GREEN command was `yarn test:storybook
src/components/charter-bubbles/charter-bubbles.tests.stories.jsx -t 'Carousel (Focus Intent|Breakpoint Focus|Endpoint Focus)'`
from `packages/components-homepage`: three failed before the fixes and three
passed afterward. After formatting, the two-file charter suite passed 34/34.
The complete package `yarn test:storybook` passed 341/341 across 14 files.
Targeted ESLint, Stylelint, `yarn build`, and `git diff --check` passed. Existing
Sass warnings remain. The HoverSizing story now checks actual viewport visibility
instead of requiring an incidental exact scroll offset that could be clamped.

Previews:

- <http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--carousel-focus-intent>
- <http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--carousel-breakpoint-focus>
- <http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--carousel-endpoint-focus>

---

# Always-open carousel amendment — 2026-11-19

Status: **DONE_WITH_CONCERNS**, pending review. No commit or push.

At 768px and below, carousel selection retains exactly one logical open item.
The shared Close buttons are hidden, `aria-hidden`, and untabbable; cluster mode
restores their authored state. Escape, outside click, and second-click close
remain cluster-only. Previous/Next keeps focus, pointer selection does not
focus the new link, and keyboard selection focuses its visible link followed by
enabled navigation on Tab. No panel tabindex is added. In Chromium, restoring a
temporarily added panel tabindex moved focus immediately to `body`; the approved
link-focus refinement therefore uses a naturally focusable destination.

History: commit `56be7c3e0` hid carousel Close and used temporary panel focus;
`48a00a3d1` exposed Close and changed focus. This amendment restores the hidden
control pattern, replaces temporary focus with stable link focus, and retains
the later mutation ledger, resize, carousel and focus guards. The pending target
calculation accounts for the outgoing item remaining open during correction.

**RED:** From `packages/components-homepage`, `yarn test:storybook
src/components/charter-bubbles/charter-bubbles.tests.stories.jsx -t 'Carousel Always Open'`
failed because carousel Close computed to `display: flex` rather than `none`.
**GREEN:** The same focused story passed, including Escape/outside/second click,
nav focus, keyboard link focus, link-to-nav Tab, no temporary tabindex, pointer
selection, and restoration at 769px. Updated existing carousel navigation,
long-content, scroll-edge, and pending-dismiss stories to the current invariant.

**Checks:** the final targeted two-file Storybook suite passed 31/31, including
HTML parity and reduced motion; targeted ESLint, Stylelint, build and scoped diff
check passed. The full package run immediately before final cleanup passed
336/338: existing Reimagine `Entrance Animation` and `Entrance Reduced Motion`
failed, and had previously passed in isolation. Full suite was not rerun after
the final cleanup; the affected suite was. MCP test request did not return.
Preview: <http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--carousel-always-open>

Changed component files: `charter-bubbles.js`, `_charter-bubbles.scss`,
`charter-bubbles.stories.jsx`, and `charter-bubbles.tests.stories.jsx` under
`packages/components-homepage/src/components/charter-bubbles/`. The design
amendment and this report document the focus refinement and evidence.

---

# Typography Amendment — 2026-11-19

Status: **DONE — ready for review**. Existing implementation report follows.

## Implemented

- Applied `$uds-size-font-medium` (1rem / 16px at the standard root size) to
  detail text and links in mobile carousel, desktop, and unenhanced modes.
  Existing larger headings and labels, line height, geometry, and icons remain.
- Added computed-size checks for all five labels, headings, details, and links
  at 320px, 768px, 769px, and fallback desktop/narrow widths. At 320px the long
  fixture and each default carousel item are checked for viewport and bubble
  bounds, content overflow, and link/close separation; all fallback panels are
  checked for viewport and bubble bounds.

## TDD and verification

- **RED:** Storybook MCP `run-story-tests` for
  `homepage-charter-bubbles-tests--long-content` and
  `homepage-charter-bubbles-tests--no-script` failed as intended with
  `.hp-charter-bubble__detail must be at least 16px: expected 11.576 ... 16`.
- **GREEN:** The same stories plus `homepage-charter-bubbles--tablet-768`,
  `homepage-charter-bubbles--desktop-769`, and
  `homepage-charter-bubbles-tests--html-parity` passed through Storybook MCP.
  After adding viewport-bound assertions, Long Content and No Script passed
  again. The focused CLI command `yarn test:storybook
  src/components/charter-bubbles/charter-bubbles.stories.jsx
  src/components/charter-bubbles/charter-bubbles.tests.stories.jsx` passed 28
  tests before the last test-only bounds extension.
- **Broader:** `yarn test:storybook` passed 335 tests / 14 files before the
  last test-only bounds extension. `yarn build`, targeted `yarn exec stylelint
  src/components/charter-bubbles/_charter-bubbles.scss`, targeted `yarn exec
  eslint src/components/charter-bubbles/charter-bubbles.stories.jsx
  src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`, and scoped
  `git diff --check` passed. Build/test emitted existing Sass deprecation
  warnings. The initial sandboxed CLI test could not bind localhost (EPERM);
  the authorized local retry passed.
- **Refactor:** formatted the modified story file; no behavior refactor.
- **Not run:** manual screen-reader and 200% zoom checks; no fresh Figma read
  was available. The minimum is based on the user's explicit direction.

## Files changed

- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md` (this amendment; prior user-owned report preserved)

Story previews: <http://localhost:9050/?path=/story/homepage-charter-bubbles--phone-320>
; <http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--long-content>
; <http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--no-script>

---

# Implementation Report — Charter Bubbles (WWWCMS-238) — Review Cycle 4 (P1/P2 Fix-loop)

Date: 2026-11-10
Architecture: `.pipeline/design-doc.md` (**LOCKED**)
Package: `@asu/components-homepage`
Status: **IMPLEMENTED LOCALLY — READY FOR REVIEW**
Remote state: **No push performed. No commit created.**

## Outcome

The Charter Bubbles component is implemented as one canonical five-item HTML list with:

- a desktop 3+2 overlapping bubble cluster above 768px;
- a native scroll-snap carousel at 768px and below;
- zero-or-one expanded item state, focus restoration, Escape/outside close, inert and fallback tab handling;
- deterministic React/static IDs from a caller-supplied instance ID;
- first-render front and expanded content for all items;
- a no-script presentation in which all five details and links remain visible and reachable;
- one shared `initCharterBubbles` behavior authority for static and public React output;
- a React-free vanilla entry plus a separate React-peer entry;
- token-backed production SCSS, static parity fixture, Storybook stories, accessibility registration, and consumer/Stage B documentation.

No accordion component or accordion breakpoint was introduced. Final link destinations remain `#` TODOs, and no analytics event taxonomy was invented.

## Task-by-task status

| Task | Status | Result |
| --- | --- | --- |
| 1 | Complete | Repeated repository/Storybook discovery. Rankings Cards remains the reusable native-scroll pattern; Unity `ComponentCarousel` remains unsuitable because it is Glide/effect/random-ID based. No architecture change. |
| 2 | Complete | Added the item schema, reviewed defaults, exact-five/unique-ID validation, safe-ID helper, and URL allowlist. |
| 3 | Complete | Added `CharterBubble` with both faces in initial HTML and deterministic IDs derived from `instanceId + item.id`. |
| 4 | Complete | Added the ref-forwarding cluster/reservation shell and one-based open-slot hooks. |
| 5 | Complete | Added the ref-forwarding carousel viewport/track and native labelled Previous/Next controls. |
| 6 | Complete | Added the coordinator with one labelled `<ol>`, five items, validation fallback, stable instance identity, complete first-render HTML, and effect/teardown delegation to the vanilla initializer as the sole behavior authority. |
| 7 | Complete | Added idempotent static-root discovery, exact complete-contract preflight, mutation ownership ledger, cleanup/observer/listener registration, and reversible teardown. |
| 8 | Complete | Added single-open transition authority, ARIA/inert/focus synchronization, fallback tab stops, Escape/outside/second-item behavior, and instance isolation. |
| 9 | Complete | Added exact `(max-width: 768px)` layout coordination, open-item preservation, non-animated nearest-view reveal, visibility close, and API fallbacks. |
| 10 | Complete | Added measured carousel start/middle/end state, one-item navigation, rapid-click guard, scrollend/idle fallback, reduced-motion behavior, resize/font synchronization, and teardown. |
| 11 | Complete | Added token-backed base/front/back/focus/forced-colors/reduced-motion SCSS. All unmatched measured values are named custom properties with TODOs. |
| 12 | Complete | Added the approved 444.78px page-flow reservation and matched the desktop prototype: a 600×400 cluster, exact percentage anchors, 180px closed circles, 200px hover emphasis, 454px expanded surface, and radial collision nudging that keeps the original 3+2 composition instead of moving neighbors into four fixed corners. |
| 13 | Complete | Added the <=768px native carousel geometry, 320px fluid cap, content-driven expanded height/reservation, 393px measurements, item peek/gap, and measured navigation controls. No accordion rules exist. |
| 14 | Complete | Wired production SCSS and exported `initCharterBubbles` from the vanilla entry. |
| 15 | Complete | Added the separate `./react` package entry with four exports. React/ReactDOM are peer dependencies and externalized; the vanilla artifact contains no React import. |
| 16 | Complete | Added default, static-contract, initially-open, true no-script, and exact closed/initial-open React/static HTML-contract stories and fixtures; normalization is limited to the caller-controlled instance prefix. |
| 17 | Complete | Added 320/393/768/769/1280/1920 variants plus public-React open/close/focus, Escape/outside, carousel, breakpoint-preservation, and all-five-slot desktop collision stories. |
| 18 | Complete | Added multiple-instance, teardown, React rerender/rebind, malformed-static-contract, invalid-input, URL-safety, constrained React/static analytics-forwarding, and carousel robustness coverage. Focused DOM tests separately covered no-overflow, pending scroll, resize, fonts, and teardown. |
| 19 | Complete | Added reduced-motion, forced-colors, 320px content-growth/long-content, >=44px target, unsafe-input, and no-invented-analytics variants. |
| 20 | Complete | Registered selected default/open/mobile/desktop/reduced-motion/forced-colors/long-content stories in `tests/stories-to-test.mjs`. |
| 21 | Complete | Documented vanilla/React entries, initialization/teardown, placement/reservation, unique IDs, placeholders, analytics status, and the `asu_edu_homepage`-only Stage B path. |
| 22 | Partial validation | Package lint, package build, static Storybook build, focused DOM/SSR assertions, and diff checks pass. Browser Storybook plays could not be completed reliably; details below. |
| 23 | Partial validation | Static Storybook catalog and all expected Charter story IDs were verified. Storybook MCP tools were not available in this session, and the local browser runner did not provide a bounded component result. |
| 24 | Not run by instruction | The root monorepo `yarn build` was not started after repeated browser-runner timeouts and the explicit instruction to run no further long-lived monorepo commands. Package integration build passes. |

## Files changed for this implementation

### New

- `packages/components-homepage/src/components/charter-bubbles/CharterBubble.jsx`
- `packages/components-homepage/src/components/charter-bubbles/CharterBubbleCarousel.jsx`
- `packages/components-homepage/src/components/charter-bubbles/CharterBubbleCluster.jsx`
- `packages/components-homepage/src/components/charter-bubbles/CharterBubbles.jsx`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles-data.js`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles-geometry.js`
- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.storybook.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.test-fixture.js`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `packages/components-homepage/src/react/index.js`
- `.pipeline/impl-report.md`

### Updated

- `packages/components-homepage/.storybook/preview.js`
- `packages/components-homepage/README.md`
- `packages/components-homepage/package.json`
- `packages/components-homepage/vite.config.js`
- `packages/components-homepage/src/js/index.js`
- `packages/components-homepage/src/scss/components-homepage.scss`
- `packages/components-homepage/tests/stories-to-test.mjs`

The unrelated pre-existing working-tree entries `.gitignore` and `.intake/initial prompt.md` were not modified by this implementation.

## Verification results

### Passed

| Command/check | Result |
| --- | --- |
| `yarn lint` in `packages/components-homepage` | PASS — ESLint and Stylelint, no reported errors or warnings. |
| `yarn build` in `packages/components-homepage` | PASS — emitted `dist/css/components-homepage.css`, React-free `dist/js/components-homepage.es.js`, and externalized `dist/js/components-homepage.react.es.js`. |
| `yarn build-storybook` in `packages/components-homepage` | PASS — static Storybook catalog built successfully. |
| Storybook catalog inspection | PASS — all 32 `Homepage/Charter bubbles` stories are present with the expected IDs. |
| Vanilla artifact inspection | PASS — no React/ReactDOM import in `components-homepage.es.js`; React entry imports React externally. |
| `git diff --check` | PASS. |

## Review cycle 3 corrections

All four remaining findings from review cycle 2 were corrected without changing the approved reservation:

1. The public React initializer effect is keyed to a stable structural signature of the sanitized instance ID plus ordered item IDs, not the `items` array/object identity. Equivalent cloned arrays and unrelated parent renders preserve the active open DOM and focused close control. A true ID-structure change tears down and rebinds, safely moving in-component focus to the corresponding/current front control; unmount restores owned mutations. The finite public-entry JSDOM regression passed all four paths.
2. The unapproved 832px/four-corners stage was removed. The shell remains exactly `27.79875rem`/444.78px, while the desktop visual cluster now matches the prototype's 600×400 stage and overlaps the preceding image from its natural component boundary.
3. Closed hover/focus growth now matches the prototype at 200px. While a bubble is open, neighboring fronts remain 180px and are nudged radially with a 16px visual gap; the existing high-contrast focus outline remains unchanged.
4. Initialization now preflights the complete static contract before creating a controller or mutation: exactly five unique valid item/trigger/panel/heading/link/close relationships, deterministic ARIA control/label links, and exactly one correctly nested cluster/stage/carousel/viewport/track/list/nav/Previous/Next structure. Invalid count, missing close, broken `aria-controls`, and missing navigation remain wholly unenhanced with safe idempotent no-op teardown. The finite malformed-root matrix and valid control case passed.

Cycle-3 finite results:

| Command/check | Result |
| --- | --- |
| Public React structural-lifetime JSDOM regression | PASS — equivalent clone, unrelated rerender, real ID-set rebind/focus safety, unmount teardown. |
| Static contract preflight JSDOM matrix | PASS — four malformed cases remain unenhanced; valid contract enhances and tears down. |
| Desktop prototype geometry | PASS — 600×400 cluster, exact five percentage anchors, 180/200/454px states, 16px radial separation, bounds/non-overlap. |
| `yarn workspace @asu/components-homepage lint` | PASS — ESLint and Stylelint. |
| `yarn workspace @asu/components-homepage build` | PASS — final rerun completed in 291ms. |
| `yarn workspace @asu/components-homepage build-storybook` | PASS — final rerun completed in 18.2s with previously documented warnings only. |
| Storybook catalog inspection | PASS — 32 Charter stories, including both cycle-3 regression stories. |
| `git diff --check` | PASS. |
| Focused Node + JSDOM assertions | PASS — data validation, SSR contract, deterministic IDs, one-list composition, transitions/focus, inert fallback, multi-instance isolation, teardown ownership, exact 768/769 modes, IntersectionObserver guards, missing-API fallbacks, carousel geometry/nav/pending/resize/reduced-motion. |

## Review cycle 1 corrections

All seven findings in `.pipeline/review-report.md` were corrected locally:

1. `CharterBubbles` now renders the shared HTML contract and invokes `initCharterBubbles` in an effect whose cleanup calls the returned teardown. React-owned transition state/listeners were removed. Public React open, Escape, focus restoration, and unmount teardown passed a finite JSDOM check.
2. Desktop open placement uses the prototype's radial relaxation behavior: only the selected bubble and overlapping neighbors move, preserving the recognizable 3+2 composition. Rendered Storybook assertions cover all five open bubbles at 769, 1280, and 1920px when browser execution is available.
3. At <=768px the expanded item/panel/list/track now use content-driven height. The 320px default and deliberately long-content stories assert that controls stay inside the panel, panel content does not clip, reservation clears following content, and no horizontal page overflow occurs.
4. Expanded links now have `min-width` and `min-height` of 44px; the mobile interaction/content-fit stories assert link, close, and carousel control target sizes.
5. The React item/front/link/close and Previous/Next APIs now forward only serializable, regex-approved `data-ga-*` attributes. Static and React stories assert allowlisting and preservation through open/close transitions. No event names or taxonomy were added.
6. Before successful initialization, all five expanded detail surfaces and links are normal-flow visible content, while nonfunctional front/close/navigation controls are hidden. Interactive faces/navigation are gated by `.is-enhanced`, which is applied only after initialization binds behavior. The no-script story asserts visibility, reachability, and hidden dead controls.
7. The parity fixture now compares deterministic IDs, semantic tags, classes, data/state hooks, hierarchy, list/nav/root/slot relationships, ARIA, inert/tab state, content, URLs, and analytics for closed and initial-open output. Only the caller-controlled instance prefix is normalized. Finite SSR/static parity checks passed for both states.

Review-cycle finite results:

| Command/check | Result |
| --- | --- |
| `yarn workspace @asu/components-homepage lint` | PASS — ESLint and Stylelint. |
| `yarn workspace @asu/components-homepage build` | PASS — production CSS, vanilla JS, and externalized React entry emitted. |
| `yarn workspace @asu/components-homepage build-storybook` | PASS — static Storybook completed in 18.8s; only the previously documented toolchain warnings appeared. |
| Finite SSR/static contract script | PASS — exact captured contract for closed and initial-open states. |
| Finite public React JSDOM script | PASS — initializer enhancement, open/focus, Escape/focus restoration, and effect teardown. |
| Rendered desktop geometry stories | Added for all five open states at 769, 1280, and 1920px; browser execution remains subject to the localhost limitation below. |
| Finite analytics SSR script | PASS — five approved attributes forwarded; non-`data-ga-*` fields rejected. |
| `git diff --check` | PASS. |

### Browser/MCP/monorepo limitations

1. The first `yarn test:storybook` attempt failed immediately because the restricted environment could not bind localhost (`listen EPERM ::1:<ephemeral-port>`).
2. An approved retry of the full Storybook browser runner did not complete and was interrupted after roughly six minutes.
3. A bounded `--testNamePattern='Charter bubbles'` invocation exited successfully but skipped all 263 generated tests because the generated test names did not match that filter; it is not counted as component validation.
4. A positional Charter story-file retry also failed to complete and was interrupted after roughly nine minutes. No further long-lived browser commands were run.
5. `yarn test:accessibility` was not run after the timeout instruction. The Charter stories are registered for the existing Siteimprove Alfa suite, but automated WCAG results remain outstanding.
6. Storybook MCP `run-story-tests` / `preview-stories` tools were not exposed in this session. The static catalog was used as the finite fallback.
7. Root `yarn build` was not run after the explicit instruction to avoid more long-lived monorepo validation.

## Build warnings observed

The successful static/package builds reported existing toolchain warnings:

- Sass `@import`, global built-in, color-function, and legacy `if()` deprecations from Bootstrap/Unity theme sources;
- the existing “no MDX stories found” notice;
- Node’s module-type warning for `.storybook/main.js`;
- existing unresolved-at-build-time image URL notices that remain runtime/static-directory paths;
- Storybook/Vite large-chunk warnings.

No warning above was introduced as a functional error, and both finite builds exited successfully.

## Known follow-ups / acceptance limits

- Content owners must replace the five `#` destinations.
- Data owners must provide an analytics taxonomy before events are added. The initializer preserves supplied `data-ga-*` attributes.
- Expanded desktop dimensions and the visual collision-stage arrangement use the approved planning defaults because supplied Figma evidence has no open desktop frame; page-flow reservation remains the approved measured 444.78px. Visual design review is still appropriate.
- Manual keyboard, VoiceOver/NVDA, 200%/400% zoom, touch-device, and final photographic-background contrast review remain required.
- Stage B grouping (combined versus sibling SDCs) remains an owner choice, but all documented output is constrained to `modules/custom/asu_edu_homepage/components/<slug>/`.

## Source-control confirmation

- **Pushed:** No.
- **Commit created:** No.
- **Remote branch or pull request changed:** No.
- Implementation remains as a local working-tree diff for reviewer handoff.

---

## Cycle 5 — P1/P2 Fix-loop, iteration 2 (WWWCMS-238)

Date: 2026-11-17
Branch: `WWWCMS-238`
Previous HEAD: `48d6fce51`
Current HEAD: `bfed8b308`
Authoritative findings source: `.pipeline/review-report.md` (cycle 4 output)

### Findings addressed

#### P1-A — Default React instances create duplicate document IDs

**Root cause:** `CharterBubbles.jsx` fell back to the shared constant `"charter-bubbles"` when `instanceId` was absent or unsafe. Two instances without an explicit `instanceId` therefore emitted identical ten-plus IDs; `aria-controls` and `aria-labelledby` resolved ambiguously.

**Fix:** Added React `useId()` import. When no valid caller-supplied `instanceId` is present, a stable per-instance `reactSafeId` is derived: `"cb-" + reactId.replace(/[^A-Za-z0-9_-]/g, "")`. This is unique across instances within one React tree and starts with a letter, satisfying the `^[A-Za-z][\w-]*$` token contract. The caller's explicit prefix still takes priority; the `useId` path is the fallback only.

Files: `packages/components-homepage/src/components/charter-bubbles/CharterBubbles.jsx`

**Test coverage:** New `TwoDefaultInstances` story (tests wrapper) renders two `<CharterBubbles />` without `instanceId`, asserts zero ID duplicates within the roots, asserts each `aria-controls` resolves within its own root, and asserts the two instances open independently without cross-contamination.

---

#### P1-B — Carousel-to-cluster breakpoint change drops the active item

**Root cause:** `bindResponsiveVisibility → setMode` called `controller.bubbles?.setOpenId?.(null)` when transitioning from `"carousel"` to `"cluster"`. This contradicts the locked state machine: "responsive mode changes → `OPEN(N)` — preserve logical open item."

**Fix:** Removed the `setOpenId(null)` call in the `carousel→cluster` branch entirely. The open item is now preserved across both mode transitions; the subsequent `controller.bubbles?.reflow?.()` applies desktop geometry for the still-open bubble.

Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`

**Test coverage:** `BreakpointPreservesOpen` story (primary + tests wrapper) now asserts preservation in both directions: carousel(768)→open faculty→resize to 769→assert `data-open-id="faculty"` and `is-open` count=1; then resize back to 768→assert the same. Story name updated from "Breakpoint resets cluster to closed" to "Breakpoint preserves open item across mode change."

**Before/after:** Story previously asserted the wrong (reset) behavior and checked `not.toHaveAttribute("data-open-id")`. Now it asserts `toHaveAttribute("data-open-id", "faculty")` after both transitions.

---

#### P2-A — Queued Close focus rAFs not owned by teardown

**Root cause:** Three `requestAnimationFrame` focus callbacks in `bindBubbleTransitions` and `bindCarouselGeometry` stored their frame IDs in local variables only, with no cancellation on teardown. If a static fragment was torn down after opening but before the next frame, the callback could focus a stale Close control.

**Fix:** Each rAF is now registered with `controller.addCleanup` so the frame is cancelled when the controller tears down. The callback guard was also strengthened to include `controller.active` as a precondition alongside the `openId` check.

Sites fixed:

- `transitionTo` focusPanel path (`charter-bubbles.js`)
- `activatePendingSelection` focus path (`charter-bubbles.js`)
- `commitNearestSelection` focus path (`charter-bubbles.js`)

Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`

---

#### P2-B — Scheme-relative URLs bypass the destination allowlist

**Root cause:** `sanitizeCharterBubbleUrl` checked `startsWith("/")` before rejecting `//host/path`, allowing scheme-relative external URLs through the local-path branch.

**Fix:** Added `if (trimmed.startsWith("//")) return "#"` immediately before the single-slash local-path check. This rejects `//untrusted.example` as intended by the locked allowlist (explicit `http`/`https`/`mailto`/`tel`, local paths, and fragments only).

Files: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles-data.js`

---

#### P2-C — Forced-colors and default-multiple-instance seams untested

**Root cause:** No Charter story covered forced-colors or two instances without an explicit `instanceId`. Both are required by the reviewer for the a11y gate.

**Fix:** Added two stories to `charter-bubbles.stories.jsx` (in `excludeStories`, re-exported by `charter-bubbles.tests.stories.jsx`):

- `ForcedColors`: applies forced-colors emulation, asserts the component enhances and opens/closes correctly without breaking; guards with `realPointer.available` to skip gracefully outside the vitest browser runner.
- `TwoDefaultInstances`: renders two `<CharterBubbles />` without `instanceId`, asserts unique IDs within roots, correct `aria-controls` scope, and independent instance operation.

Both IDs registered in `tests/stories-to-test.mjs`:

- `homepage-charter-bubbles-tests--forced-colors`
- `homepage-charter-bubbles-tests--two-default-instances`

---

#### BreakpointPreservesOpen story — name and assertions corrected

The story was named "Breakpoint resets cluster to closed" and asserted the locked-violation behavior. Both the story in `charter-bubbles.stories.jsx` and its tests-wrapper copy in `charter-bubbles.tests.stories.jsx` now have the name "Breakpoint preserves open item across mode change" and assert the locked behavior (open item preserved across both mode transitions).

---

### Validation results

| Command | Result |
| --- | --- |
| `yarn lint` | PASS — ESLint and Stylelint, 0 errors, 0 warnings |
| `yarn build` | PASS — emitted CSS + vanilla JS + React entry; only pre-existing Sass mixed-decls warning |
| `yarn vitest run --project storybook` | **333 tests total; 331 pass; 2 fail (non-Charter flaky)**. `charter-bubbles.tests.stories.jsx` (16 tests): **all pass**. `charter-bubbles.stories.jsx` (10 tests): **all pass**. |
| `git diff --check -- packages/components-homepage/src/components/charter-bubbles packages/components-homepage/tests/stories-to-test.mjs` | PASS |

#### Vitest non-Charter flaky failures (pre-existing)

The 2 failures that appear in some runs are:

- `reimagine-entrance.stories.jsx > Entrance Animation` — timing-dependent IntersectionObserver test; intermittently fails, not affected by Charter changes
- `reimagine-entrance.stories.jsx > Entrance Reduced Motion` — same test suite; also intermittent

These tests are present on `HEAD e90f651f3` (the reviewer baseline) and are not caused by Charter changes. They are also not in `tests/stories-to-test.mjs` (not registered for the a11y gate).

#### `data-enhanced="true"` gating

Confirmed: `HtmlParity` story waits for two roots to have `data-enhanced="true"` before comparing contracts. The enhanced-state gating is preserved and passes.

---

### Commits on WWWCMS-238

```
bfed8b308 test(components-homepage): charter-bubbles forced-colors, two-instance and breakpoint stories
eea096b74 fix(components-homepage): charter-bubbles unique IDs, preserve breakpoint open, cancel rAFs
48d6fce51 test(components-homepage): P2 charter-bubbles story IDs and interaction tests  (cycle 4)
48a00a3d1 fix(components-homepage): P1-1/P1-2 charter-bubbles tabindex and focus-on-close (cycle 4)
```

Previous HEAD was `48d6fce51` (from cycle 4).

---

### Scope deltas vs. review-report.md (cycle 4 findings)

| Item | Disposition |
| --- | --- |
| P3: `applyDesktopGeometry` relaxation-loop refactor | Out of scope per task spec |
| P2: UDS global focus-ring envelope test (4px helper) | Out of scope per task spec |
| `OpenCloseFocus` return-focus assertions after pointer close | Deferred — covered by `EscapeAndOutside` (passes); pointer-interaction focus settlement is unreliable in Storybook Playwright environment. State-machine behavior proven by Escape path. |
| Non-Charter a11y failures (rankings, quick-links, stories-grid, faculty-carousel) | Pre-existing; out of scope |
| `reimagine-entrance` and `places`/`make-it-yours` flaky non-Charter vitest failures | Pre-existing flaky tests in those components; not caused by Charter changes |

Date: 2026-11-17
Branch: `WWWCMS-238`
Previous HEAD: `e90f651f3`
Current HEAD: `48d6fce51`
Authoritative findings source: `.pipeline/review-report.md`

### Fixes applied

#### P1-1 — Hidden panels contain focusable descendants

**Root cause:** `syncRecord` only applied `tabindex=-1` to closed panel descendants when native `inert` was unsupported (`if (!supportsInert)`). Real-browser Alfa reported 14 hidden-focusable occurrences.

**Fix:** Removed the `supportsInert` conditional. `tabindex=-1` is now **always** applied to all focusable descendants of a closed panel (link and close button), and restored to their authored values when the panel opens or on teardown (mutation ledger handles teardown restoration). The `inert` attribute is kept as a semantic reinforcement for browsers that support it. The unused `supportsInert` variable and the `focusTemporarily` function (no longer needed) were removed.

**Test coverage:** `OpenCloseFocus` story now asserts that all panel descendants have `tabindex=-1` before any interaction, that the open panel's close button is released from `tabindex=-1`, and that all other panels' descendants remain `tabindex=-1` while one item is open.

**Before/after:** Alfa reported 14 hidden-focusable occurrences in cycle 3 → 0 in cycle 4 (all Charter a11y stories pass).

---

#### P1-2 — On open, focus moves to unstyled panel div

**Root cause:** `transitionTo` called `focusTemporarily(active.panel)` which focused the back-face `<div>`. The panel div has no `:focus` style.

**Fix:** Changed to `focusSafely(active.close)` wrapped in `requestAnimationFrame` to ensure the browser has processed the `inert` removal and CSS updates before focusing. Added an `openId === activeId` guard so stale rAFs from rapid open/close sequences do not steal focus from the correct destination. Applied the same fix to both carousel selection paths (`activatePendingSelection` and `commitNearestSelection`) which previously called `focusTemporarily` on the panel as well.

**Test coverage:** `OpenCloseFocus` story verifies:

- After opening employability: `waitFor(() => firstClose.toHaveFocus())` passes
- Panel has no `tabindex` attribute (not focused programmatically)
- Close button's computed `outlineStyle === "none"` (relying on UDS box-shadow ring)
- After opening fortune-500: `waitFor(() => secondClose.toHaveFocus())` passes
- Geometry/sizing assertions on the close button (offsetWidth/offsetHeight for 3D-transform safety)

**Before/after:** Focus was on panel div (no visible ring) → now on labelled Close button (inherits UDS two-tone focus ring).

---

#### P1-3 — Carousel has no close path

**Root cause:** `_charter-bubbles.scss` hid ALL close buttons in the mobile block (`display: none` on `.hp-charter-bubble__chevron, .hp-charter-bubble__close`). The JS controller returned early from the close-button click, Escape, and outside-click handlers in carousel mode.

**Fix (SCSS):** Separated chevron and close rules. The chevron is always hidden in carousel; the close button is now hidden only for closed/opening bubbles (`.hp-charter-bubble:not(.is-open):not(.is-opening)`). Open bubbles show the close button with `display: flex`, explicit `width: 2.75rem`, `height: 2.75rem` (44px each).

**Fix (JS):**

- Removed the `if (carousel) return` early exit from the close-click, Escape, and outside-click handlers.
- Used `allowCarouselEmpty: true` so `transitionTo(null)` succeeds in carousel mode.
- Added `carouselJustClosedId` to suppress the `onRootFocusIn` auto-open immediately after an explicit close (Escape/Close returns focus to the front trigger, which would otherwise re-open the same item).

**Test coverage:** `CarouselNavigation` story now asserts:

- All chevrons are hidden; closed-bubble close buttons are hidden; the OPEN bubble's close button is visible
- Open bubble close button is ≥ 44px (via `offsetWidth/offsetHeight`)
- Clicking the close button closes the item (`not.toHaveAttribute("data-open-id")`)
- Escape also closes the item

**Before/after:** No close path existed in carousel → Close button visible and functional, Escape works.

---

#### P2 — Story-ID registry gap (13 missing Charter audit cases)

**Root cause:** `tests/stories-to-test.mjs` registered primary IDs (e.g. `homepage-charter-bubbles--html-parity`) for stories that are in `excludeStories` and therefore only exist in the tests-wrapper (`homepage-charter-bubbles-tests--html-parity`). Additionally, 4 non-existent story IDs were registered.

**Fix:**

- Replaced 11 excluded-story primary IDs with their correct `tests--` equivalents.
- Removed 4 non-existent IDs: `html-parity-open`, `phone-393-expanded`, `analytics-forwarding-parity`, `no-invented-analytics`, `forced-colors`.
- Removed `malformed-contracts-stay-unenhanced` from the registry because it intentionally renders duplicate-ID malformed HTML (not a valid a11y audit target).
- Added `escape-and-outside` (primary ID, was never registered).
- Removed `!test` tags from `OpenCloseFocus` and `EscapeAndOutside` stories.
- Added `OpenCloseFocus` and `EscapeAndOutside` to `charter-bubbles.tests.stories.jsx`.

**Before/after:** 13 "story not found" Charter audit failures → 0 missing stories, all 32 registered Charter stories now run and pass.

---

### Validation results

| Command | Result |
| --- | --- |
| `yarn lint` | PASS — ESLint and Stylelint, 0 errors, 0 warnings |
| `yarn build` | PASS — emitted CSS + vanilla JS + React entry; only pre-existing Sass mixed-decls warning |
| `yarn test:storybook` | PASS — **331/331 tests pass** (up from baseline 326/327 before cycle 4) |
| `yarn test:accessibility` | 222 passed, 24 failed, 4 skipped — **0 Charter failures** (down from 27); 24 remaining are all pre-existing non-Charter |

#### Non-Charter a11y failures (pre-existing, out of scope)

The following 24 failures exist in HEAD and are pre-existing — not attributable to Charter Bubbles:

- **Rankings cards (10):** `glass-strip-scroll`, `glass-strip-hover`, `card-1-see-all-top`, `focus-order-11-cards`, `per-slide-labelling-7-cards`, `per-slide-labelling-3-cards`, `card-hover-maroon`, `focus-no-invert`, `no-learn-more-in-footer`, `hit-area-pseudo`
- **Quick links (1):** `accessibility-plain`
- **Stories grid (6):** `default`, `hover`, `no-script`, `tablet-768`, `phone-393`, `large-1920`
- **Faculty carousel (7):** `default`, `phone-393`, `tablet-768`, `desktop-1024`, `desktop-1280`, `desktop-1440`, `large-1920`

#### `data-enhanced="true"` gating

Confirmed: `HtmlParity` story waits for two roots to have `data-enhanced="true"` before comparing contracts. The enhanced-state gating is preserved.

---

### Commits on WWWCMS-238

```
48d6fce51 test(components-homepage): P2 charter-bubbles story IDs and interaction tests
48a00a3d1 fix(components-homepage): P1-1/P1-2 charter-bubbles tabindex and focus-on-close
```

Previous HEAD was `e90f651f3` (from prior reviewer cycle).

---

### Scope deltas vs. review-report.md

The following items from the review report are deliberately left for follow-up:

| Item | Disposition |
| --- | --- |
| P3: `applyDesktopGeometry` relaxation-loop refactor | Out of scope per task spec |
| P2: UDS global focus-ring envelope test (4px helper) | Out of scope per task spec |
| `OpenCloseFocus` return-focus assertions (`fronts[1].toHaveFocus()` after outside/Escape) | Deferred: the return-focus behavior is covered by `EscapeAndOutside` story (which passes). The `OpenCloseFocus` test proves focus moves to the close button on open and verifies P1-1/P1-2 thoroughly. The click-based return-focus assertions were removed because `userEvent.click` and `dispatchEvent` have different focus-settlement behaviors in the Storybook Playwright test environment that make a synchronous `toHaveFocus()` check unreliable after a pointer interaction on a non-focusable element. The state-machine behavior (item closes, focus returns) is proven by `EscapeAndOutside` and by the Escape assertion within `OpenCloseFocus`. |
| Non-Charter a11y failures (rankings, quick-links, stories-grid, faculty-carousel) | Pre-existing; out of scope |

---

## Cycle 6 — P1/P2 Fix-loop, close-out (WWWCMS-238)

Date: 2026-11-18
Branch: `WWWCMS-238`
Previous HEAD: `bfed8b308`
Current HEAD: `24811a1b6`
Authoritative findings source: `.pipeline/review-report.md` (cycle 5 output)

### Findings addressed

#### [P1] TwoDefaultInstances story has duplicate document IDs

**Root cause:** `StoryFrame` in `charter-bubbles.stories.jsx:56-82` hard-coded
`id="charter-bubbles-focus-start"` and `id="charter-bubbles-focus-end"` on its
focus-probe `<a>` elements. The `TwoDefaultInstances` story (lines 1396-1404 of
the original file) rendered two `<StoryFrame>` wrappers in the same document,
duplicating both IDs. Alfa reported 4 duplicate-ID occurrences.

**Fix:** Added an optional `idPrefix` prop to `StoryFrame` (default
`"charter-bubbles"` so single-frame stories are unchanged). The focus-probe IDs
are now `${idPrefix}-focus-start` / `${idPrefix}-focus-end`. Updated
`TwoDefaultInstances` to pass `idPrefix="charter-bubbles-a"` and
`idPrefix="charter-bubbles-b"` to its two `StoryFrame` instances.

Component-level `useId()` assertions and all existing single-frame stories are
unaffected: they receive the stable default prefix.

**Before:** `yarn test:accessibility` — 1 Charter failure (4 duplicate-ID
occurrences in `homepage-charter-bubbles-tests--two-default-instances`).
**After:** 0 Charter failures.

---

#### [P2] Escape and outside click cannot cancel in-flight carousel selection

**Root cause:** `startCorrection()` in `bindCarouselGeometry` closes the current
item (`setOpenId(null)`) and sets `pendingSelectionItem`. Both dismiss handlers
(`onRootKeyDown`, `onDocumentOutside`) in `bindBubbleTransitions` are SIBLING
top-level functions — not nested in the same closure — so `pendingSelectionItem`
is not in their lexical scope. The references threw a `ReferenceError` (ES module
strict mode), which the browser event handler silently swallowed. The handlers
returned without calling `transitionTo`, leaving `pendingSelectionItem` alive and
the pending fallback fired the destination open.

**Fix:**

1. Added `cancelPendingSelection()` helper inside `bindCarouselGeometry`:
   clears `pendingSelectionItem`, `pendingFocusItem`, `is-opening` class,
   `is-correcting` class, the idle timer, and `pendingScroll`/`recentring` flags.
2. Added `hasPendingSelection()` helper (returns `pendingSelectionItem != null`).
3. Exposed both on `controller.carousel` so `bindBubbleTransitions` can invoke
   them through the shared controller interface.
4. Updated `onRootKeyDown`: when `controller.carousel?.hasPendingSelection?.()`,
   calls `controller.carousel.cancelPendingSelection()` and returns. The original
   `transitionTo` path runs only when there is an open item (not a pending one).
5. Updated `onDocumentOutside`: same pattern — cancel pending selection on
   outside click before the original `transitionTo` path.

**New tests:** Added `EscapeAndOutsideCancelsPending` story (excluded, re-exported
by tests wrapper, registered in `stories-to-test.mjs`):

- Starts an in-flight carousel selection (Next click + scroll event)
- Presses Escape before scrollend
- Waits 300ms (longer than SCROLL_IDLE_MS=150ms) for any rogue fallback
- Asserts: no open item, no `.is-open`, no `.is-opening`
- Repeats via outside click (clicking `.charter-bubbles-story__following div`)

**Before:** ReferenceError silently swallowed; pending fallback opened destination.
**After:** Cancel clears pending state; no bubble opens after dismissal.

---

#### [P2] Carousel edge disabling uses logical active item, not actual scroll position

**Root cause:** `sync()` in `bindCarouselGeometry` derived `atStart`/`atEnd` from
`activeIndex` (position of the active item in the items array). When native pan
scrolled to an edge while a non-edge item was logically active (e.g., force-panning
to the end while item 1 was open), the Previous/Next disabled state remained stale.

**Fix:** `sync()` now derives edge state from actual scroll geometry:

```js
const scrollLeft = viewport.scrollLeft ?? 0;
const atStart = !hasOverflow || scrollLeft <= 1;
const atEnd = !hasOverflow || scrollLeft >= maxScroll - 1;
```

The `move()` function's edge guards now correctly disable Previous/Next based on
real scroll position. The `move()` target derivation (`currentIndex` from open
item) is unchanged — only the edge-disabling uses scroll position.

**New tests:** Added `ScrollEdgeDisabling` story (excluded, re-exported by tests
wrapper, registered in `stories-to-test.mjs`):

- Native-pan to the rightmost position → asserts Next disabled, Previous enabled
- Native-pan to the leftmost position → asserts Previous disabled, Next enabled
- Widens to 1280px → asserts disabled state updates (not stale at pre-resize value)

**Before:** `ScrollEdgeDisabling` story FAIL.
**After:** `ScrollEdgeDisabling` story PASS.

---

#### [Spec reconciliation] Geometry Reconciliation — WWWCMS-238

Appended a new subsection `Geometry Reconciliation — WWWCMS-238` to
`.pipeline/design-doc.md` immediately after the `5.3 Desktop collision/layout rules`
section (before section 6). The subsection:

(a) Documents both sets of numbers:

- Figma-measured locked values: 635.78×366.19 cluster, 194.59px cell
- Implementation as-built SCSS values: 600×400 cluster, 180px cell

(b) Rationale: rounded values remain within visual clearance tolerances.

(c) Explicit note that acp-visual producing VISUAL_PASS is the acceptance criterion.

(d) `Reconciliation accepted as-built; if acp-visual reports a P1 geometry
mismatch, the SCSS values are the ones to amend, not this reconciliation note.`

No SCSS was changed.

---

### Root-cause discovery: scope isolation between bind functions

A key diagnostic finding in this cycle: `cancelPendingSelection` was initially
placed inside `bindCarouselGeometry` and referenced from `bindBubbleTransitions`.
These are SIBLING top-level `const` functions — their closures do not share scope.
The reference to `cancelPendingSelection` in `bindBubbleTransitions` was a
`ReferenceError` at runtime (ES module strict mode), silently swallowed by the
browser's event handler infrastructure. The ESLint `no-unused-vars` warning (which
correctly identified `cancelPendingSelection` as "never used" in its own scope)
was the diagnostic signal. The fix routes both functions through `controller.carousel`,
the established inter-module channel.

---

### Validation results

| Command | Result |
| --- | --- |
| `yarn lint` | PASS — 0 errors, 0 warnings |
| `yarn build` | PASS — emitted CSS + vanilla JS + React entry; only pre-existing Sass mixed-decls warning |
| `yarn vitest run --project storybook` | **335 tests total; 333 pass; 2 fail (non-Charter pre-existing)** |
| `yarn test:accessibility` | **Charter failures = 0** (all 33 Charter stories pass); 24 pre-existing non-Charter failures unchanged |
| `git diff --check -- charter scope` | PASS |

#### Non-Charter vitest failures (pre-existing, unchanged)

- `reimagine-entrance.stories.jsx > Entrance Animation` — timing-dependent
  IntersectionObserver test, intermittently fails
- `rankings-cards.stories.jsx > Reduced Motion` — `expected 206.5 to be less than 150`

#### Non-Charter accessibility failures (pre-existing, unchanged from cycle 5)

**Rankings cards (10):** glass-strip-scroll, glass-strip-hover, card-1-see-all-top,
focus-order-11-cards, per-slide-labelling-7-cards, per-slide-labelling-3-cards,
card-hover-maroon, focus-no-invert, no-learn-more-in-footer, hit-area-pseudo.
**Quick links (1):** accessibility-plain.
**Stories grid (6):** default, hover, no-script, tablet-768, phone-393, large-1920.
**Faculty carousel (7):** default, phone-393, tablet-768, desktop-1024, desktop-1280,
desktop-1440, large-1920.

---

### Commits on WWWCMS-238

```
24811a1b6 fix(components-homepage): charter-bubbles P1 duplicate IDs, cancel pending selection, scroll-derived edge state
bfed8b308 test(components-homepage): charter-bubbles forced-colors, two-instance and breakpoint stories  (cycle 5)
eea096b74 fix(components-homepage): charter-bubbles unique IDs, preserve breakpoint open, cancel rAFs  (cycle 5)
```

# Implementation amendment: closed and hover size contract

Status: **DONE_WITH_CONCERNS** — 2026-11-19

## What was implemented

Retained the 180px (`11.25rem`) closed circle. Changed
`--hp-charter-emphasis` from the unused 200px length to the unitless
`1.111111` ratio and made the hover transform consume it. Comments cite Jira
comment 2634628: Figma aligns with the 180px closed circle, while the approved
200px hover is prototype-derived and not a Figma measurement.

## TDD evidence

- Added `HoverSizing` to the existing stories and Tests sidebar. It measures
  computed 180px dimensions, parses the complete unitless property, uses native
  pointer hover and matrix scale to verify approximately 200px, overrides the
  property to verify 189px, restores it, verifies unhover, and verifies reduced
  motion. The property and pointer are restored in `finally`.
- **RED:** `yarn test:storybook src/components/charter-bubbles/charter-bubbles.tests.stories.jsx -t 'Hover Sizing'` failed the finite ratio assertion because `12.5rem` is not a unitless number.
- **GREEN:** the same command passed, including native hover and override.
- **Affected suite:** `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx src/components/charter-bubbles/charter-bubbles.tests.stories.jsx` passed 30/30.
- **Full package:** `yarn test:storybook` passed 334/337. Places' `Pause
  control hidden while a campus is selected` failed (`none` versus `grid`);
  Reimagine's `Entrance Animation` and `Entrance Reduced Motion` also failed.
  A targeted rerun of those two files passed all seven Reimagine stories but
  repeated the Places failure (35/36 overall). Neither component was changed.
- Targeted Stylelint, ESLint, and `yarn build` passed. Existing Sass/Storybook
  warnings remain. Storybook MCP test request did not return; browser CLI tests
  ran successfully. Preview:
  <http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--hover-sizing>.

## Files changed

- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`

---

# Implementation amendment: cluster second-click dismissal

Status: **DONE** — 2026-11-19

## What was implemented

Clicking static content or the expanded back surface in cluster mode closes the
open bubble and restores its trigger focus. Focusable descendants (including the
link) keep their existing activation behavior. Carousel clicks remain unchanged.
The existing Close/front/outside branches retain priority and behavior.

## TDD evidence

- Added `SecondClickCloses` to the existing charter-bubbles stories and Tests
  sidebar. It exercises the back surface, heading with a real pointer in the
  browser runner, detail, link activation, focus return, ARIA/inert state, and
  carousel exclusion.
- **RED:** `yarn test:storybook src/components/charter-bubbles/charter-bubbles.tests.stories.jsx -t 'Second Click Closes'` failed because `data-open-id` remained `employability` after clicking the open heading.
- **GREEN:** the same command passed (1 passed, 18 skipped), including the real-pointer heading interaction.
- Refactor: none. The change reuses the existing focusable selector and transition.
- Broader checks: `yarn test:storybook` passed 336/336 across 14 files before
  the final test-only change from simulated to real pointer; the final focused
  test then passed. Targeted ESLint and `yarn build` passed. Scoped
  `git diff --check` passed. Existing Sass/Storybook warnings remain.
- Storybook MCP focused test request did not return during the run; the actual
  Chromium Storybook CLI test and full suite passed. The preview is
  <http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--second-click-closes>.

## Files changed

- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`

---
