# Charter Bubbles Baseline Recovery — WWWCMS-238

Status: **LOCKED — approved by the user, 2026-11-19**

Branch: `codex/WWWCMS-238-baseline-recovery`

Baseline: `e24e660e3` with marker commit `ee578c5`

Safe checkpoint: `WWWCMS-238` at `9fbc2af37` (`bd9826d33` code/test state plus all pipeline records)

## Scope Decision

**Reduction.** Restore the known-good November 13 behavior first, preserve every
November 19 record byte-for-byte, and then reapply only four independently
verifiable changes. Later carousel contracts, broad test rewrites, and Webspark
handoff implementation are retained as evidence but are not imported into this
recovery.

No source code may change until the user approves this document. After approval,
each behavior patch must be independently committable and independently
revertible. If a patch cannot preserve the baseline behavior, stop that patch,
record the conflict, and leave it out.

## Problem Statement

Users and maintainers need the Charter Bubbles component restored to its
pre-base-merge behavior because later contract and test decisions changed a
carousel interaction that the user considered correct.

## Stakeholders

- **Visitors:** depend on predictable cluster/carousel motion, keyboard access,
  readable text, and controls that keep their native semantics.
- **Unity and Storybook maintainers:** need a small, reviewable recovery history
  whose tests describe approved behavior rather than redefine it.
- **Stage B/Webspark maintainers:** need the historical handoff and pipeline
  evidence retained, but handoff code changes are a separate follow-up task.
- **Future reviewers:** need both the November 19 records and the recovery reports
  so they can distinguish approved decisions from later drift.

## Success Criteria

1. Production and story source initially matches `e24e660e3` exactly; the existing
   `ee578c5` marker is the baseline commit.
2. Every file stored in `9fbc2af37:.pipeline` is preserved byte-for-byte beneath
   a recovery archive, while active recovery reports use the normal
   `.pipeline/design-doc.md`, `.pipeline/impl-report.md`, and
   `.pipeline/review-report.md` paths.
3. Existing baseline Charter Bubbles stories pass before any behavior patch, or
   every pre-existing failure is recorded without changing the baseline.
4. Minimum text size, cluster second-click dismissal, hover ratio, and focus
   ownership are each implemented and tested in separate commits.
5. Carousel visual choreography and selection behavior remain the November 13
   baseline after every isolated patch.
6. The expanded panel remains a non-focusable `div`, never gains `role="button"`,
   and never contains interactive descendants inside a semantic button.
7. React and copied static HTML remain behaviorally equivalent after enhancement.
8. Focused Storybook checks, package Storybook checks, lint, build, 320px reflow,
   keyboard/focus, and reduced-motion checks pass, subject to documented
   pre-existing baseline failures.

## Failure Modes

Ordered by blast radius:

1. **A later patch changes carousel choreography.** Detect with baseline
   characterization before and after each commit. Recovery: revert only that
   isolated commit and report the conflict.
2. **November 19 documentation is overwritten.** Detect by Git blob comparison
   between `9fbc2af37:.pipeline` and the archive. Recovery: restore the mismatched
   blob from `9fbc2af37`; do not reconstruct prose manually.
3. **A focused test encodes later policy rather than baseline behavior.** Detect
   by comparing the assertion to a real baseline run and source at `e24e660e3`.
   Recovery: discard or rewrite the new test before production code changes.
4. **The font patch causes overflow at 320px.** Detect in real browser layout for
   all five bubbles. Recovery: omit the font patch and report the content/layout
   conflict; do not shrink text below 16px.
5. **Static-surface dismissal swallows link/Close activation.** Detect with real
   link and Close clicks. Recovery: restore delegated-handler priority and limit
   dismissal to non-actionable descendants in cluster mode.
6. **Focus is moved to a hidden or static wrapper.** Detect by asserting the
   active element, absence of panel `tabindex`, and visibility/inert state.
   Recovery: omit the conflicting focus patch; never restore temporary wrapper
   focus merely to make a test pass.
7. **Archive or behavior work captures unrelated changes.** Detect with scoped
   status/diff checks before each commit. Recovery: unstage unrelated paths; do
   not reset user work.
8. **Tooling or browser tests are unavailable.** Record the exact command and
   failure. Do not claim the patch is verified; keep the commit unmade until the
   required focused check can run.

## MVP Scope

- Preserve all November 19 pipeline records.
- Establish and verify the November 13 source as the behavior baseline.
- Reimplement four approved changes as isolated patches:
  1. minimum 16px detail/link text,
  2. cluster static-surface second-click dismissal,
  3. 180px-to-200px hover ratio via an overridable custom property,
  4. non-wrapper focus ownership.
- Run focused and broad Unity/Storybook verification.

## Out of Scope

- Updating or generating Webspark/Drupal handoff code.
- Importing the later always-open carousel contract or its state machinery.
- Importing the later carousel choreography amendment.
- Wholesale restoration of post-November-13 story registries, test wrappers,
  malformed-contract suites, cancellation logic, unique-ID changes, breakpoint
  changes, or unrelated fixes.
- Changing analytics attributes, component data, URLs, DOM hierarchy, public
  React props, package dependencies, or design tokens beyond the approved font
  token.
- Rewriting archived documentation to agree with the recovered implementation.
  Conflicting records stay preserved and are labeled historical evidence.

## Evidence and Authority Order

When sources disagree, use this order:

1. User-approved recovery decisions in this document.
2. Observable behavior and source at `e24e660e3`.
3. Small approved patch intent from `cd4883c54`, `d49c48355`, and the November 19
   discussion.
4. November 19 pipeline records as evidence and rationale.
5. Later tests and contracts only as non-authoritative leads.

Do not use `git cherry-pick` for the behavior commits. Extract the intent from
the original patch, write a baseline-specific failing test, and make the minimum
production change against the historical source.

## Documentation Preservation Plan

### Archive layout

Reserve active recovery paths for the current pipeline:

```text
.pipeline/design-doc.md       # this approved recovery design
.pipeline/impl-report.md      # recovery TDD/commit evidence
.pipeline/review-report.md    # recovery review
```

Preserve the complete checkpoint tree under:

```text
.pipeline/archive/checkpoint-20261119/<original path relative to .pipeline>/
```

This includes the checkpoint's own nested `archive/` directory, intake,
handoff, phase logs, visual reports, design, implementation, and review reports.
Add `.pipeline/archive/checkpoint-20261119/MANIFEST.md` containing source commit,
source tree object, destination, the full file list, and each source Git blob ID.

### Byte-preserving import

Use Git objects, not copy/paste or formatting tools:

```bash
git read-tree --prefix=.pipeline/archive/checkpoint-20261119/ -u 9fbc2af37:.pipeline
```

Then write the approved recovery design at `.pipeline/design-doc.md`. Before the
documentation commit, verify every archived file hashes to its source blob. For
each path returned by `git ls-tree -r --name-only 9fbc2af37:.pipeline`, compare:

```text
git rev-parse 9fbc2af37:.pipeline/<relative-path>
git hash-object .pipeline/archive/checkpoint-20261119/<relative-path>
```

Every pair must match. Formatting tools must exclude the archive. Existing
Markdown trailing spaces are evidence and must not be cleaned.

### Documentation commit

Commit only the recovery design, manifest, and archive:

```text
docs(components-homepage): preserve charter bubble recovery records
```

The coder creates a new recovery implementation report after this commit. The
reviewer creates a new recovery review report. Archived reports are never
modified.

## Behavior-Diff Method

1. Record `git diff --exit-code e24e660e3 --` for the Charter Bubbles production
   and story paths before patches; only the baseline marker and recovery docs may
   differ.
2. Run the existing baseline stories before adding tests. Record exact passes,
   failures, warnings, browser, viewport, and command in the new implementation
   report. A failure is characterization evidence, not permission to import a
   later fix.
3. For each approved change, inspect only the introducing commit's parent diff:
   - font: `git diff cd4883c54^ cd4883c54 -- <scoped paths>`;
   - second click and hover: `git diff d49c48355^ d49c48355 -- <scoped paths>`;
   - focus: compare baseline, `48a00a3d1`, and `bd9826d33`, but extract only the
     approved focus semantics.
4. Add one focused regression story that fails on the baseline for the intended
   reason. Avoid importing later helper frameworks or broad assertions.
5. Implement the minimum production delta. Run the focused test to green, then
   rerun the baseline characterization set.
6. Before each commit, inspect `git diff --stat`, `git diff --check` for non-archive
   files, and `git status --short`. Commit only that behavior's source, focused
   test, and the corresponding implementation-report evidence.
7. Compare the final production diff separately against `e24e660e3` and
   `bd9826d33`. The first must contain only approved isolated changes; the second
   is informational and must not drive implementation.

## Data Flow

```text
React render OR copied static HTML
              |
              v
  canonical five-item list + front button + back panel
              |
              v
       initCharterBubbles(root)
              |
        validate/discover DOM
              |
              +---- invalid contract ----> leave fallback HTML unenhanced
              |
              v
       bind shared controller
              |
       responsive mode authority
        /                       \
       v                         v
cluster (>768px)           carousel (<=768px)
front/Close/Escape/        baseline native scroll,
outside/static surface     buttons, click, wheel, pan
       |                         |
       +-----------> shared state/classes/ARIA
                                  |
                                  v
                      React/static observable parity

Checkpoint 9fbc2af37:.pipeline
              |
       Git-object archive
              |
              +---- hash mismatch ----> stop; restore source blob
              |
              v
 archived evidence (read-only) + active recovery reports
```

## State Machines

### Authoritative baseline interaction states

```text
CLUSTER_CLOSED
  -- activate front N --> CLUSTER_OPEN(N)

CLUSTER_OPEN(N)
  -- activate front M --> CLUSTER_OPEN(M)
  -- explicit Close --> CLUSTER_CLOSED
  -- Escape from component --> CLUSTER_CLOSED
  -- outside pointer/click --> CLUSTER_CLOSED
  -- static back surface [isolated patch] --> CLUSTER_CLOSED
  -- link/interactive descendant --> CLUSTER_OPEN(N), native action continues

CAROUSEL_OPEN(N)
  -- Previous/Next/direct click/keyboard/wheel/released pan --> CORRECTING(N,M)
  -- explicit Close/Escape/outside --> unchanged under baseline policy

CORRECTING(N,M)
  -- correction begins --> N closes, M has is-opening width reservation
  -- M closed-face edge reaches center --> CAROUSEL_OPEN(M)
  -- held pan --> defer selection until release
  -- interrupted/teardown/mode change --> baseline cleanup path
```

The recovery must characterize the actual November 13 transition and preserve
it. Do not replace its temporary empty visual/logical interval, centering
threshold, width exchange, or focus timing with the later always-open contract.

### Patch acceptance states

```text
PATCH_PROPOSED
  -- focused RED fails for intended reason --> PATCH_IMPLEMENTING
  -- test already passes --> NO_PRODUCTION_CHANGE; document redundancy

PATCH_IMPLEMENTING
  -- focused GREEN + baseline regression pass --> PATCH_ACCEPTED
  -- baseline behavior changes --> PATCH_CONFLICT
  -- required browser verification unavailable --> PATCH_BLOCKED

PATCH_CONFLICT
  -- report conflict --> OMITTED (terminal for this recovery)

PATCH_ACCEPTED
  -- isolated conventional commit --> COMMITTED (reversible)
```

## Behavioral Matrix

| User Action | Current State | Next State | Visual/Focus Result | Animation |
| --- | --- | --- | --- | --- |
| Click or keyboard-activate closed front N in cluster | closed or M open | N open | N expands; focus goes to visible explicit Close after focus patch | Baseline flip/geometry |
| Click explicit Close | N open | cluster closed | Trigger N regains focus when focus was inside | Baseline close |
| Press Escape inside cluster | N open | cluster closed | Trigger N regains focus when appropriate | Baseline close |
| Click outside cluster | N open | cluster closed | Baseline outside-focus policy | Baseline close |
| Click expanded background, heading, or detail | N open | cluster closed | Trigger N focused; only after second-click patch | Baseline close |
| Click expanded link or descendant | N open | N remains until navigation | Native link activation; no dismissal interception | None added |
| Click static expanded content in carousel | N open | N open | Second-click patch is cluster-only | None added |
| Click Previous/Next or closed carousel bubble | N open | Baseline correction to M | Preserve baseline close/grow/center/open sequence | Baseline easing/timing |
| Horizontal wheel or released pan | N open | Baseline adjacent/nearest item | Preserve baseline selection limit and correction | Native/baseline |
| Hover closed cluster front | closed | closed | 180px circle paints at 200px; custom-property ratio is overridable | Existing transition; none under reduced motion |

## Accessibility Requirements

### Keyboard Navigation

- **Tab order:** normal DOM order through visible front buttons and visible panel
  link/Close controls. Closed-panel descendants remain unavailable through
  baseline inert/fallback handling. The open wrapper is never a tab stop.
- **Arrow keys:** no custom arrow-key focus model is introduced. Carousel uses
  native horizontal input and labelled Previous/Next controls.
- **Enter/Space:** native activation of the focused front or Close button.
- **Escape:** closes only an open cluster bubble and returns focus according to
  the baseline/approved cluster focus policy. It does not redefine carousel
  selection.

### Focus Management

- Pattern: standard DOM order; no roving tabindex and no `aria-activedescendant`.
- The expanded `.hp-charter-bubble__back` remains a plain `div` without
  `tabindex`, `role="button"`, or button keyboard handlers.
- Cluster activation moves focus to the visible labelled Close button, not the
  wrapper. Closing from inside returns focus to the original front trigger.
- Pointer activation must not create a hidden or stale focus destination.
- Carousel focus behavior receives the minimum baseline-compatible correction:
  keyboard-requested focus may move to the visible native link only after the
  panel is active; pointer, wheel, swipe, and navigation controls must not steal
  focus. If this requires later carousel machinery or changes choreography, omit
  the carousel portion and report the conflict while retaining the cluster fix.

### Screen Reader

- No live region is added.
- Front button accessible name remains its visible headline.
- Close button retains its explicit `Close: <headline>` accessible name.
- `aria-expanded`, `aria-controls`, `aria-hidden`, and `inert` must agree with the
  visible settled state.
- The static-surface pointer shortcut does not turn heading, paragraph, panel,
  or list item into a semantic button.

### Motion

- Preserve baseline transitions and `prefers-reduced-motion` behavior.
- Reduced motion must not wait for a transition event that will not fire.
- Hover remains 180px under reduced motion if that is the baseline rule.

## Error Paths and Recovery

| Component/Stage | Error | Detection | Recovery | User Impact |
| --- | --- | --- | --- | --- |
| Documentation import | blob mismatch/missing file | source/destination hash comparison | restore exact blob; block docs commit | none; work stops |
| Baseline verification | existing story fails | focused/full Storybook command | record baseline failure; do not patch incidentally | known baseline issue remains |
| Font patch | overflow/overlap at 320px | real computed rectangles and scroll size | omit patch; report conflict | baseline text remains smaller |
| Second-click patch | link/Close swallowed | native click assertions | restore handler priority/guard or omit patch | explicit controls remain usable |
| Hover patch | wrong size or reduced-motion growth | computed transform/size | revert isolated hover commit | baseline hover remains |
| Focus patch | wrapper tabbable, hidden focus, focus race | activeElement/tabindex/inert assertions | reduce to compatible cluster scope or omit | baseline focus remains |
| Carousel regression | different state/class/geometry sequence | baseline characterization after each patch | revert isolated commit | no recovery release until clean |
| Teardown | leaked attributes/listeners | init/teardown parity story | fix within same isolated patch or omit | consumer DOM could remain mutated |

## Test Matrix

| Behavior | Test Level | Boundary / Seam | Test Double Strategy | Verification Command | Failure Mode Covered |
| --- | --- | --- | --- | --- | --- |
| Baseline source unchanged | contract | Git tree | real Git objects | `git diff --exit-code e24e660e3 -- packages/components-homepage/src/components/charter-bubbles packages/components-homepage/tests/stories-to-test.mjs` | accidental pre-patch drift |
| Baseline Charter stories | component/integration | Storybook browser | real Chromium | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx` | misunderstood baseline |
| Checkpoint archive exact | contract | Git object database | real blobs | source/destination blob comparison for every `9fbc2af37:.pipeline` path | documentation loss |
| Minimum 16px text | component | computed styles at 320/768/769 | real Chromium | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Typography Minimum'` | unreadable text, breakpoint drift |
| 320px content fit | component | rendered rectangles/scroll size | real Chromium | same focused typography command | clipping/overlap/reflow |
| Cluster second-click | component | delegated root click | real pointer + native DOM | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Second Click Closes'` | missing close path |
| Link and Close priority | component | actionable descendant boundary | real native elements | same second-click command | wrapper click swallows controls |
| Carousel excluded from second-click | component | responsive mode boundary | real viewport | same second-click command | carousel emptied/changed |
| Hover ratio 180→200 | component/visual | CSS custom property/transform | real Chromium pointer | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Hover Sizing'` | absolute length used as scale |
| Reduced-motion hover | component | media/class motion boundary | real Chromium | same hover command plus existing ReducedMotion story | motion preference ignored |
| Wrapper never focusable | contract/component | rendered DOM | real DOM | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Open Close Focus'` | nested/false button semantics |
| Cluster focus ownership | component | activeElement after open/close | real Chromium keyboard/pointer | same focus command | focus on static wrapper/body |
| Carousel focus compatibility | component | keyboard vs pointer selection | real Chromium | focused baseline carousel story plus focus story | focus stealing/hidden target |
| HTML parity | contract/integration | React vs static initial HTML | real render/controller | focused `HtmlParity` story from baseline file | React-only fix |
| Full Charter regression | component/integration | package stories | real Chromium | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx` | cross-patch regression |
| JS/SCSS quality | static | changed files | real linters | `cd packages/components-homepage && yarn exec eslint src/components/charter-bubbles/charter-bubbles.js src/components/charter-bubbles/charter-bubbles.stories.jsx && yarn exec stylelint src/components/charter-bubbles/_charter-bubbles.scss` | syntax/style regression |
| Package build | integration | Vite/package build | real toolchain | `cd packages/components-homepage && yarn build` | bundle/static output regression |
| Package Storybook suite | integration | full package | real Chromium | `cd packages/components-homepage && yarn test:storybook` | unrelated component regression |

If a baseline story name differs, use the existing exported story name rather
than importing a later test wrapper. The coder must record the actual resolved
test names and commands.

## Security Considerations

- Preserve `sanitizeCharterBubbleId`, `sanitizeCharterBubbleUrl`, and approved GA
  attribute filtering unchanged.
- Do not introduce `dangerouslySetInnerHTML` outside existing test fixtures.
- Do not intercept or rewrite link destinations in production.
- Delegated click handling must confirm the target belongs to the current root
  and active item; nested components must not be affected.
- Documentation preservation contains repository records only and introduces no
  credentials or generated secrets. Inspect the archive file list before commit.

## Performance Considerations

- Add no dependency, observer, polling loop, or per-frame production work.
- Second-click handling reuses the existing delegated listener and selector.
- Font and hover patches are CSS-only.
- Focus changes reuse the existing controller and at most one guarded animation
  frame if the baseline browser requires post-inert focus timing.
- Story instrumentation is test-only and must clean up listeners/styles.

## Exact Commit Plan

Already present:

1. `ee578c5 chore(components-homepage): establish charter bubble recovery baseline`

After user approval:

2. `docs(components-homepage): preserve charter bubble recovery records`
   - recovery design, manifest, byte-identical checkpoint archive only.
3. `fix(components-homepage): restore charter bubble minimum text size`
   - SCSS token changes, focused typography/320px story, implementation evidence.
4. `fix(components-homepage): restore charter bubble cluster dismissal`
   - cluster-only static-surface handler, focused behavior story, evidence.
5. `fix(components-homepage): restore charter bubble hover sizing`
   - ratio custom property/use, focused hover/reduced-motion story, evidence.
6. `fix(components-homepage): restore charter bubble focus ownership`
   - non-wrapper focus behavior and focused regression story, evidence.
7. `docs(components-homepage): record charter bubble recovery review`
   - final implementation/review reports only after approval by the reviewer.

Do not combine commits 3–6. If one is redundant, conflicting, or blocked, omit
its code commit and record the disposition in the final reports.

## Task Breakdown

### Task 1: Preserve checkpoint documents

Files:
- `.pipeline/design-doc.md`
- `.pipeline/archive/checkpoint-20261119/**`
- `.pipeline/archive/checkpoint-20261119/MANIFEST.md`

Code:
- Import `9fbc2af37:.pipeline` with `git read-tree` under the archive prefix.
- Generate the manifest from Git tree/blob IDs.
- Verify every destination blob matches its source.
- Commit with commit-plan item 2.

Test:
- Per-file source/destination blob comparison.
- `git diff --cached --name-only` contains only the design, manifest, and archive.

Depends on: user approval.

### Task 2: Establish baseline evidence

Files:
- `.pipeline/impl-report.md`

Code:
- Confirm production/story paths match `e24e660e3`.
- Run the baseline Charter story file and record exact results without changing
  source or tests.

Test:
- `git diff --exit-code e24e660e3 -- packages/components-homepage/src/components/charter-bubbles packages/components-homepage/tests/stories-to-test.mjs`
- `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx`

Depends on: Task 1.

### Task 3: Restore minimum text size with TDD

Files:
- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md`

Code:
- Add a focused baseline-compatible story checking all five front labels,
  headings, details, and links at 320, 768, and 769.
- RED must show baseline detail/link text below 16px.
- Replace only the approved detail/link sizes with
  `$uds-size-font-medium`; include base, carousel, and unenhanced selectors that
  actually exist in the baseline.
- Verify content remains inside each open bubble and 320px viewport.
- Commit with commit-plan item 3.

Test:
- Focused `Typography Minimum` command from the matrix.
- Baseline Charter regression command.

Depends on: Task 2.

### Task 4: Restore cluster second-click dismissal with TDD

Files:
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md`

Code:
- Add a focused story proving panel/background/heading/detail close in cluster,
  link and Close retain native behavior, focus returns to the trigger, and the
  same static click does not dismiss carousel.
- RED must fail because baseline static content does not close.
- Add one delegated cluster-only branch after explicit Close/front priority.
- Exclude any closest actionable descendant using the existing focusable
  selector; do not prevent default or add wrapper semantics.
- Commit with commit-plan item 4.

Test:
- Focused `Second Click Closes` command.
- Focus and baseline Charter regression commands.

Depends on: Task 3.

### Task 5: Restore hover ratio with TDD

Files:
- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md`

Code:
- Add a focused real-pointer story measuring 180px default and 200px hover,
  verifying the custom property can be overridden and reduced motion does not
  enlarge the bubble.
- RED must show the baseline custom property is a length rather than a unitless
  scale even if the hardcoded hover happens to paint at 200px.
- Change `--hp-charter-emphasis` to the unitless `200/180` ratio and use it in
  the hover transform. Retain the no-token/Jira rationale.
- Commit with commit-plan item 5.

Test:
- Focused `Hover Sizing` command.
- ReducedMotion and baseline Charter regression commands.

Depends on: Task 4.

### Task 6: Restore focus ownership with TDD

Files:
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `.pipeline/impl-report.md`

Code:
- Add/adjust a focused story proving the panel has no tabindex/role, cluster
  activation focuses the visible Close button, closed descendants are not
  tabbable, closing returns focus, pointer selection does not steal focus, and
  any keyboard carousel destination is native and visible.
- RED must fail on temporary panel focus without asserting later always-open or
  carousel-dismissal policy.
- Remove temporary wrapper focus. Apply the smallest baseline-compatible focus
  destination change. Do not import carousel Close visibility/dismissal,
  always-open state, breakpoint focus transfer, or endpoint machinery.
- If native-link carousel focus cannot be added without changing baseline
  choreography, scope the commit to the cluster and report the carousel conflict.
- Commit with commit-plan item 6.

Test:
- Focused `Open Close Focus` command.
- HTML parity, keyboard, reduced motion, and baseline Charter regression.

Depends on: Task 5.

### Task 7: Verify the complete recovery

Files:
- `.pipeline/impl-report.md`
- `.pipeline/review-report.md` (reviewer-owned)

Code:
- Compare final source diff to baseline and checkpoint.
- Run focused tests, Charter story file, full package Storybook suite, targeted
  lint/stylelint, and package build.
- Reviewer performs spec compliance, adversarial review, QA verification, and
  code-quality review.
- Commit approved reports with commit-plan item 7.

Test:
- All commands in the test matrix.
- `git log --oneline e24e660e3..HEAD` demonstrates staged history.
- `git status --short` is empty.

Depends on: Tasks 3–6 and reviewer approval.

## Lock Protocol

This document becomes **LOCKED** only after explicit user approval. Any change
to the authority order, commit staging, carousel baseline, wrapper semantics,
or isolated patch list requires renewed approval. Test-detail refinements that
do not change observable behavior may be recorded in the implementation report.

## User-Approved Follow-Up Amendment — No-Script Layout and Reduced-Motion Story

Status: **APPROVED REQUIREMENT — implementation pending, 2026-11-19**

This amendment records follow-up behavior requested after the baseline recovery
was completed and approved. It does not change the recovery evidence above and
must be implemented and reviewed as a separate task.

### No-script presentation

When JavaScript is unavailable or enhancement does not initialize, the
`NoScript` story must render all five expanded bubble faces as open, round
bubbles. It must not replace them with rectangular fallback cards. All headings,
details, and links remain present and readable in the initial HTML. Controls
that cannot operate without JavaScript (front triggers, Close buttons, and
carousel navigation) remain hidden.

The five bubbles must retain DOM, reading, and link-tab order while arranging
into these responsive visual rows according to the available inline width:

| Available row capacity | Required rows |
| --- | --- |
| Five bubbles | `5` — one row of five |
| Three bubbles | `3 / 2` — three on the first row and two centered below |
| Two bubbles | `2 / 1 / 2` — two on the first row, one centered, and two on the final row |
| One bubble | `1 / 1 / 1 / 1 / 1` — five rows of one |

Breakpoint thresholds must be derived from the bubble's minimum usable diameter,
the approved horizontal gap, and the component's available width. They must not
depend on JavaScript measurements. Representative wide, desktop, tablet, and
mobile Storybook viewports must prove each row pattern, including 320px reflow.

Because the bubbles are circular, equal CSS grid row and column gaps do not
produce equal perceived edge-to-edge spacing. Each row after the first must use
a controlled negative block offset (or equivalent negative row-gap calculation)
so the visible vertical gap between circle edges matches the visible horizontal
gap. The offset must:

- be expressed through an existing token or a documented component custom
  property when no suitable token exists;
- preserve the required `3 / 2` and `2 / 1 / 2` centering;
- avoid content, link-focus-ring, and bubble overlap;
- remain correct at 200% zoom, forced colors, and 320px width; and
- be verified from rendered circle bounds rather than grid-cell bounds alone.

The no-script state is static: it must not animate, flip, scroll-snap, or imply
that clicking the expanded surface will dismiss a bubble.

### Reduced-motion Storybook contract

The production component already behaves correctly when the browser genuinely
reports `prefers-reduced-motion: reduce`. The remaining defect is the Storybook
story environment: opening the `ReducedMotion` story without separately enabling
browser emulation can still show animation.

The `ReducedMotion` story must establish reduced-motion emulation before the
component initializes and before its first painted frame. It must not rely only
on a play-function toggle that occurs after render. Opening the story directly
must therefore satisfy:

```text
matchMedia('(prefers-reduced-motion: reduce)').matches === true
```

without requiring the viewer to change browser or operating-system settings.
The story or test harness must restore the previous emulation state during
cleanup so it cannot leak into other stories.

The focused browser test must verify:

- the media query matches before interaction;
- bubble/front/back transition durations are `0s` on first observable render;
- carousel scrolling uses `auto` behavior;
- hover remains at the 180px base size;
- opening or selecting a bubble does not animate; and
- the following ordinary-motion story is not left in reduced-motion mode.

### Follow-up verification matrix

| Behavior | Required evidence |
| --- | --- |
| No-script initial HTML | All five expanded round faces, meaningful content and links present, inoperative controls hidden |
| Five-column capacity | One row of five in DOM order |
| Three-column capacity | Centered `3 / 2` rows |
| Two-column capacity | Centered `2 / 1 / 2` rows |
| One-column capacity | Five rows of one with no horizontal page overflow at 320px |
| Perceived gap equality | Rendered vertical circle-edge gap matches horizontal circle-edge gap within layout-rounding tolerance |
| Accessibility | Link order remains DOM order; visible focus rings do not overlap adjacent bubbles; 200% zoom and forced colors retain content |
| Reduced-motion direct preview | Media query is true before first interaction and no transition is observable |
| Story isolation | Subsequent ordinary-motion story retains normal motion |
