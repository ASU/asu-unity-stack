# Charter Bubbles Baseline Recovery — Implementation Report

Status: **IN_PROGRESS**

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
