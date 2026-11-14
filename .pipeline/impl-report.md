# Implementation Report — Charter Bubbles (WWWCMS-238)

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
