# Charter Bubbles Baseline Recovery — Implementation Report

Status: **DONE**

Branch: `codex/WWWCMS-238-baseline-recovery`

## Documentation Preservation

- Imported all 15 files from `9fbc2af37:.pipeline` beneath
  `.pipeline/archive/checkpoint-20261119/` using Git tree objects.
- Verified every destination file with `git hash-object` against its source blob.
- Preserved source tree `704663e6d49f4e462af0b99c2b3c559969e36fac` and the complete blob list in `MANIFEST.md`.
- Commit: `2c8a6d1d0 docs(components-homepage): preserve charter bubble recovery records`.

## Baseline Evidence

- `git diff --exit-code e24e660e3 -- packages/components-homepage/src/components/charter-bubbles packages/components-homepage/tests/stories-to-test.mjs` — PASS; source and stories matched the November 13 baseline before behavior patches.
- `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx` — PASS, 21/21 historical stories in Chromium.
- The first restricted run could not bind local port `63315` (`EPERM`); rerunning with local-browser permission passed. Existing Sass and Storybook deprecation warnings remain.

## Isolated Patch 1 — Minimum Text Size

### Tests added/changed

- Added `TypographyMinimum` in `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`.
- Checks all five labels, headings, details, and links at 320px and waits for the baseline carousel to settle before verifying visible content remains inside the viewport.

### RED

- Command: `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Typography Minimum'`
- Expected/observed failure: `.hp-charter-bubble__detail` computed to `11.576px`, below the approved 16px minimum.

### GREEN

- Changed only mobile detail/link sizes from measured `0.7235rem` to `$uds-size-font-medium`.
- Focused command passed: 1 passed, 21 skipped.
- Historical regression command passed: 22/22 stories.
- Refactor: the viewport-fit assertions were changed to wait for the existing carousel centering rather than sampling transient pre-settlement geometry; no production refactor.

### Files

- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md`

## Isolated Patch 2 — Cluster Second-Click Dismissal

### Tests added/changed

- Added `SecondClickCloses` and updated the historical `OpenCloseFocus`
  interaction to require a second click on static expanded content to close
  the bubble and return focus to its front. The focused story also verifies
  that an action link remains actionable.
- Existing carousel stories remain the regression coverage for the explicitly
  excluded carousel mode.

### RED

- Command: `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Second Click Closes'`
- Expected/observed failure: clicking the expanded heading left
  `data-open-id="employability"` in place.

### GREEN

- Added one cluster-only event-delegation branch: static content inside the
  active panel dismisses it, while descendants matching the existing
  focusable/action selector do not.
- Focused command passed: 1 passed, 22 skipped.
- Full Charter Bubbles regression command passed: 23/23 stories.
- Refactor: the focused story uses synchronous DOM activation so its
  cluster-only assertions cannot race unrelated viewport stories in a full
  Storybook run; no production refactor.

### Files

- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md`

## Isolated Patch 3 — Hover Sizing

### Tests added/changed

- Added `HoverSizing` to require a unitless `200 / 180` emphasis ratio, confirm
  the base hover rule consumes the custom property, and prove an instance can
  override the ratio.
- Existing interaction geometry and `ReducedMotion` stories remain the browser
  regressions for hover collision suppression and motion removal.

### RED

- Command: `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Hover Sizing'`
- Expected/observed failure: the prior length value `12.5rem` parsed as `NaN`
  instead of the required unitless `1.111111` ratio.

### GREEN

- Replaced the length-valued emphasis property with the approved unitless
  ratio and consumed it from the existing hover transform.
- Focused command passed: 1 passed, 23 skipped.
- Full Charter Bubbles regression command passed: 24/24 stories.
- Refactor: the test inspects the same-origin CSS rule because synthetic hover
  does not activate the browser `:hover` state in this Storybook test runner;
  no production refactor.

### Files

- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md`

## Isolated Patch 4 — Focus Ownership

### Tests added/changed

- Promoted and narrowed `OpenCloseFocus` into a focused browser regression for
  focus ownership instead of unrelated geometry assertions.
- It requires closed panel actions to be unavailable, panel wrappers to remain
  plain non-focusable `div` elements, cluster opens to focus the labelled Close
  button, closes to return focus to the front, keyboard carousel selection to
  focus the visible native link, and carousel navigation not to steal focus.

### RED

- Command: `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Open Close Focus'`
- Expected/observed failure: focus remained on the expanded panel wrapper
  instead of the labelled Close button. The baseline also omitted explicit
  `tabindex="-1"` fallback state from closed panel actions in inert-capable
  Chromium.

### GREEN

- Removed temporary wrapper `tabindex` mutation and wrapper focusing.
- Cluster activation now schedules focus on the visible Close button after the
  inert/state update, guarded by the still-open bubble ID.
- Closed panel actions now consistently receive the existing mutation-ledger
  `tabindex="-1"` fallback and restore their authored state when opened.
- Keyboard-requested carousel selection uses the native panel link after the
  baseline correction settles; pointer selection no longer requests programmatic
  panel focus, and Previous/Next retain focus.
- Focused command passed: 1 passed, 24 skipped.
- Full Charter Bubbles regression command passed: 25/25 stories.
- Refactor: consolidated carousel native-action focus in one guarded helper and
  removed the obsolete temporary-focus helper. No carousel state, geometry,
  timing, or CSS choreography changed; no approved portion was omitted.

### Files

- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md`

## Commit Sequence

1. `ee578c5ba chore(components-homepage): establish charter bubble recovery baseline`
2. `2c8a6d1d0 docs(components-homepage): preserve charter bubble recovery records`
3. `45ba5ebb0 fix(components-homepage): restore charter bubble minimum text size`
4. `79fa7e6af fix(components-homepage): restore charter bubble cluster dismissal`
5. `fb206e0b0 fix(components-homepage): restore charter bubble hover sizing`
6. `58f3043d8 fix(components-homepage): restore charter bubble focus ownership`

Behavior changes were not combined, and no later checkpoint commit was
cherry-picked.

## Verification Ladder

- Focused typography: PASS, 1 passed / 21 skipped at the patch stage.
- Focused cluster dismissal: PASS, 1 passed / 22 skipped at the patch stage.
- Focused hover sizing: PASS, 1 passed / 23 skipped at the patch stage.
- Focused focus ownership: PASS, 1 passed / 24 skipped.
- Final Charter Bubbles suite:
  `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx`
  — PASS, 29/29 in Chromium after review closure.
- Scoped JavaScript lint:
  `yarn exec eslint src/components/charter-bubbles/charter-bubbles.js src/components/charter-bubbles/charter-bubbles.stories.jsx`
  — PASS.
- Scoped SCSS lint:
  `yarn exec stylelint src/components/charter-bubbles/_charter-bubbles.scss`
  — PASS.
- Package build: `yarn build` — PASS; Vite built 15 modules and emitted the
  expected CSS, React ES, component ES, and Charter Bubbles ES bundles.
- Full package browser suite: `yarn test:storybook` — PASS, 11 files and
  268/268 stories in Chromium after review closure.
- Archive verification: PASS, all 15 destination files still match their
  `9fbc2af37:.pipeline` source blob hashes; zero mismatches.
- Final production diff whitespace check against `e24e660e3`: PASS.
- Worktree after behavior commits: clean before this final report update.

The browser and build checks retain pre-existing Bootstrap/Sass deprecation
warnings (`@import` and legacy color functions); no new warning or failure was
introduced.

## Conflicts, Omissions, and Skipped Checks

- No approved patch conflicted with the November 13 carousel state, geometry,
  or animation baseline, so no behavior patch was omitted.
- No required check was skipped.
- The final diff against non-authoritative `bd9826d33` remains intentionally
  large because later carousel machinery, broad story rewrites, malformed
  contract suites, and registry changes were not imported.
- Webspark/handoff code was not changed because the locked recovery design
  explicitly defers it to a later task.

## Review-Fix Closure Table — Cycle 1

| # | Finding | Severity | Type | File(s) | Planned Fix | Evidence Type | Verify Command | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Real-pointer closed carousel front retains queued keyboard focus intent | P1 | AUTO-FIX | `charter-bubbles.js`, `charter-bubbles.stories.jsx` | Clear queued carousel focus intent when a pointer selection supersedes `focusin`; add real-pointer focus regression without changing selection geometry/state | red-test, green-test, integration | `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Carousel Navigation'` | PASS — RED reproduced destination-link focus; GREEN 1 passed / 28 skipped; final Charter 29/29 |
| 2 | Queued focus frames survive teardown or external focus changes | P2 | AUTO-FIX | `charter-bubbles.js`, `charter-bubbles.stories.jsx` | Register focus frames with controller cleanup, guard controller activity, invalidate superseded intent, and add teardown/external-focus race regressions | red-test, green-test, integration | `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Focus Lifecycle'` | PASS — RED reproduced post-teardown Close focus; GREEN 1 passed / 28 skipped; final Charter 29/29 |
| 3 | Focused stories omit locked typography, dismissal, hover, and reduced-motion browser seams | P2 | AUTO-FIX | `charter-bubbles.stories.jsx` | Extend focused stories for 768/769/unenhanced typography; panel/detail/Close/carousel dismissal boundaries; and real-pointer painted hover geometry under normal/reduced motion | red-test, green-test, integration | `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Typography Minimum'`; `-t 'Second Click Closes'`; `-t 'Hover Sizing'`; `-t 'Reduced Motion'` | PASS — typography 3/3, dismissal 2/2, hover 1/1, reduced motion 1/1; rendered 180→200 normal and 180 reduced |
| 4 | Lifecycle story does not isolate teardown cancellation from external owner change | P2 | AUTO-FIX | `charter-bubbles.stories.jsx` | Replace the teardown case with a single-controller unenhanced fixture that pre-focuses an external probe, queues cluster focus programmatically, tears down without another focus move, and independently retains the external-focus-without-teardown case | red-test, green-test, integration | `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Focus Lifecycle'` | PASS — controlled mutation RED focused stale Close; restored production GREEN 1 passed / 28 skipped; Charter 29/29; package retry 268/268 |

## Review-Fix Evidence — Cycle 1

- P1 RED: a real pointer click on the closed `fortune-500` carousel front
  settled on the correct bubble but moved focus to its destination link.
- P1 GREEN: pointer selection now clears earlier `focusin` intent while the
  existing keyboard path still focuses the native link after settlement.
  The baseline `CarouselNavigation` story retains all state, geometry, held-pan,
  wheel, and temporary-empty assertions.
- P2 RED: opening a cluster bubble and immediately tearing down still allowed
  the queued animation-frame callback to focus Close; external focus could be
  overwritten by the same stale callback.
- P2 GREEN: focus frames are controller-owned, cancelled during teardown,
  guarded by `controller.active`, and invalidated when newer focus intent wins.
- Test-fidelity GREEN: fixed viewport stories cover 320px content fit, 768px,
  769px, and unenhanced typography; cluster panel/detail/link/Close priority and
  carousel exclusion; real-pointer painted hover geometry in normal and reduced
  motion.
- Broader verification: Charter Bubbles 29/29; package Storybook 268/268 across
  11 files; scoped ESLint PASS; scoped Stylelint PASS; Vite package build PASS
  with 15 modules.
- Existing Bootstrap/Sass deprecation warnings remain unchanged.

## Review-Fix Evidence — Cycle 2

- Fixture: `FocusLifecycle` now renders unenhanced static HTML and creates only
  one controller at a time. The authored initial open state makes Close
  observable after teardown without a React effect creating a second owner.
- Teardown-only case: the external start probe is focused before a programmatic
  cluster open queues the focus frame; teardown runs immediately; no focus move
  occurs afterward; after two frames the probe must still own focus and Close
  must not.
- External-focus case: a fresh single controller queues the same frame, then
  focus explicitly moves to the separate end probe without teardown; after two
  frames the end probe must still own focus and Close must not.
- Mutation RED: temporarily removing both the scheduler cleanup registration
  and `controller.active` guard caused the focused story to fail because the
  stale frame moved focus from the unchanged start probe to Close. The
  production file was immediately restored, and
  `git diff --exit-code -- .../charter-bubbles.js` passed before GREEN.
- GREEN command:
  `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Focus Lifecycle'`
  — PASS, 1 passed / 28 skipped.
- Charter command:
  `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx`
  — PASS, 29/29.
- Scoped lint:
  `yarn exec eslint src/components/charter-bubbles/charter-bubbles.stories.jsx`
  — PASS.
- Full package command: first run reached 267/268 because of one unrelated
  intermittent `places.stories.jsx` assertion; a clean retry passed 11/11 files
  and 268/268 stories. No runner or background server was left active.
- Cycle 2 makes no production change and does not alter carousel state,
  geometry, timing, or choreography.

## Follow-up Implementation — No-script Circles and Pre-render Motion

### Fallback RED/GREEN

- Pre-change enhanced characterization:
  `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx`
  — PASS, 29/29.
- RED command:
  `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'No script'`
  — FAIL, 4/4 focused stories. The existing fallback rendered rectangles and
  row groups `[1,1,1,1,1]`, `[3,1,1]`, and `[3,2]` instead of the locked
  circle patterns.
- 320px feasibility GREEN: the canonical heading, detail, and link remain at
  or above 16px and fit the 288px circle without clipping, copy/markup changes,
  or horizontal page overflow.
- Final focused GREEN command: the same `-t 'No script'` command — PASS, 7/7
  (four patterns, threshold edges, 200% CSS zoom, and forced colors).
- Final Charter command:
  `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx`
  — PASS, 35/35.
- Scoped quality:
  `yarn exec eslint src/components/charter-bubbles/charter-bubbles.stories.jsx`
  and
  `yarn exec stylelint src/components/charter-bubbles/_charter-bubbles.scss src/components/charter-bubbles/_charter-bubbles.storybook.scss`
  — PASS.

### Rendered Fallback Geometry

- `ONE`: row groups `[1,1,1,1,1]`; `TWO`: `[2,1,2]`; `THREE`: `[3,2]`;
  `FIVE`: `[5]`. Sorted rendered centers retain DOM indexes `0,1,2,3,4`.
- Full-size diameter `D = 328.46875px`; half-row X offset `176.234375px`;
  vertical center pitch `305.25275px` from the documented `47.216px` overlap.
- Same-row circular edge gap: `24px`. Diagonal edge gap: `24.005px`; the
  `0.005px` deviation is browser/decimal rounding and needs no clearance
  adjustment. The locked overlap remains unchanged.
- The threshold fixture proves below/at transitions at outer widths 776/777,
  1129/1130, and 1834/1835px after the retained 3rem desktop padding.
- Only the five visible links enter the Tab sequence, in DOM order. Rendered
  focus outlines clear every neighboring circle in all four patterns, at 200%
  CSS zoom, and in forced colors. Dead front, Close, and navigation controls
  remain `display: none`; circle overflow remains visible.
- No-script transitions, smooth scrolling, and scroll snapping are disabled.
  Enhanced cluster/carousel production selectors and JavaScript are untouched.

### Fallback Files Changed

- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md`

Status after fallback stage: **GREEN; ready for isolated fallback commit.**

### Reduced-motion RED/GREEN and Cleanup

- The initially proposed lowercase filter `-t 'Reduced motion'` matched zero
  tests and was rejected. The resolved Storybook display name is
  `Reduced Motion`.
- RED command:
  `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Reduced Motion'`
  — FAIL, 1 failed / 35 skipped. The first synchronous play assertion observed
  `matchMedia('(prefers-reduced-motion: reduce)').matches === false`, proving
  the old play-time emulation began after render.
- GREEN command: the same resolved command — PASS, 1 passed / 35 skipped.
  The story `beforeEach` now awaits browser emulation, installs the exact-query
  MediaQueryList-compatible adapter and document marker, and returns idempotent
  cleanup before React renders.
- First observable story state: query `true`; marker present; bubble, front, and
  back transition duration `0s`; viewport scroll behavior `auto`. A real hover
  stays at 180px and a real click immediately exposes the final 454px open face
  with no `is-opening` intermediate state.
- Direct-preview support uses the same pre-render adapter and Storybook-only
  marker rules even when the Vitest command is unavailable/no-op. The mirror is
  confined to `_charter-bubbles.storybook.scss`; production reduced-motion CSS
  is unchanged.
- Cleanup command:
  `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Motion isolation'`
  — PASS, 1 passed / 35 skipped. The following ordinary story observes query
  `false`, no marker, and a nonzero transition. Cleanup restores the exact saved
  `matchMedia` function and prior marker absence/value, awaits emulation reset,
  and safely no-ops on a second call.

### Follow-up Broader Verification

- Charter Bubbles: 36/36 PASS.
- Full package Storybook: 11/11 files and 275/275 stories PASS.
- Scoped ESLint and Stylelint: PASS.
- Package build: PASS; Vite transformed 15 modules and emitted the production
  CSS, React ES, package ES, and Charter Bubbles ES bundles.
- Existing Sass/Bootstrap deprecation warnings remain; no new failure or
  warning was introduced.
- Production JavaScript, JSX component markup, data, static fixture, enhanced
  cluster/carousel behavior, and production reduced-motion media rules have no
  follow-up diff.

### Reduced-motion Files Changed

- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.storybook.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md`

Follow-up implementation status: **GREEN; ready for isolated motion commit and
review.**
