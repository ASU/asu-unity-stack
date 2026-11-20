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
