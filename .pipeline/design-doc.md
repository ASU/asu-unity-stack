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

Status: **LOCKED — approved by the user, 2026-11-19**

This amendment plans the already approved follow-up behavior without reopening
or rewriting the completed baseline-recovery design and evidence above. No
source or test implementation may begin until the user explicitly approves this
plan. Implementation is a separate, independently reviewable task.

### Follow-up scope decision

**Extension, isolated from enhanced behavior.** Replace only the current
rectangular unenhanced fallback with a responsive five-circle CSS layout and
make the existing `ReducedMotion` story establish its environment before render.
The production reduced-motion media rules are already correct and remain
unchanged. Existing cluster and carousel JavaScript, markup, state, focus,
motion, and choreography are authoritative and must not change.

The implementation may touch only:

- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`;
- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.storybook.scss`;
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`; and
- active implementation/review reports after implementation.

`vitest.config.js` and `reimagine-helpers.jsx` already provide real Chromium
`page.emulateMedia({ reducedMotion })` through `emulateReducedMotion`; they are
not changed. No JavaScript or markup file may change unless a RED browser test
proves the existing canonical five-item markup makes the required rows
impossible. That result stops implementation and requires a design amendment.

### Structured problem statement

**Problem.** The unenhanced component exposes all meaningful content but paints
rectangular cards instead of the approved open circles, and its auto-fit grid
does not guarantee the four required row patterns. Separately, the
`ReducedMotion` story calls browser emulation inside `play`, after React render
and possible first paint; direct Storybook preview does not call the Vitest
browser command at all.

**Affected stakeholders.** Storybook reviewers need deterministic visual
examples; visitors without JavaScript need readable, ordered fallback content;
keyboard and zoom users need non-overlapping links and focus indicators; future
Webspark consumers need the same initial-HTML contract retained for later handoff
work.

**Success.** Real-browser stories prove `5`, `3 / 2`, `2 / 1 / 2`, and five
single rows from rendered geometry. Closest circular edge gaps agree within one
CSS pixel after layout rounding. A direct `ReducedMotion` preview reports the
reduced-motion query as true before component initialization and paints zero
transition duration without external OS/browser settings. Cleanup restores the
next ordinary story.

**Failure policy.** Content containment, target visibility, DOM/link order, and
focus-ring clearance take priority over mathematically perfect gap equality. If
the formula causes a collision, reduce only the overlap custom property to the
smallest safe value, record the measured horizontal and diagonal gaps and the
deviation in `.pipeline/impl-report.md`, and keep the deviation at or below the
smallest value browser rounding and clearance permit. Do not shrink text below
the recovered 16px minimum.

### MVP and exclusions

MVP includes fallback CSS, Storybook-only reduced-motion CSS/environment setup,
four visual fallback stories or variants, focused browser assertions, and
cleanup/isolation coverage. It includes React/static parity proof without
changing either markup source.

Out of scope:

- enhanced carousel or cluster behavior, state, focus, event handling, or CSS;
- production reduced-motion media-query declarations;
- Webspark/static handoff implementation or regenerated CMS artifacts;
- new component data, copy, URLs, analytics, dependencies, global Storybook
  configuration, or package viewports; and
- production JavaScript measurement, resize logic, or layout attributes.

### Existing tooling decision

The current package supports the required approach:

- `.storybook/preview.js` already defines `hp320`, `hp768`, `hp1280`, and
  `hp1920`, which exercise the four target capacities after component padding.
- `vitest.config.js` already registers the browser-side
  `emulateReducedMotion` command using Playwright `page.emulateMedia`.
- `reimagine-helpers.jsx` exposes that command only in the Vitest browser, so a
  direct Storybook preview needs a story-local fallback.
- Storybook CSF `beforeEach` is already used in this package, including returned
  cleanup functions and pre-render reduced-motion setup.
- `_charter-bubbles.storybook.scss` is imported by the story file and is not in
  the production bundle, making it the correct location for direct-preview-only
  CSS mirroring.

No new runner command, viewport, addon, or dependency is introduced.

### CSS and story-environment data flow

```text
canonical React markup OR copied static HTML
                    |
                    v
        .hp-charter-bubbles root
                    |
          +---------+----------+
          |                    |
  no .is-enhanced        .is-enhanced present
          |                    |
          v                    v
 named inline-size       existing cluster/carousel
 container + CSS grid    CSS + controller unchanged
          |
  content-box capacity C
          |
  +-------+--------+---------+---------+
  |                |         |         |
 C >= T5        C >= T3   C >= T2    C < T2
  |                |         |         |
  5              3 / 2     2/1/2     1/1/1/1/1
          |
 rendered circle centers/bounds
          |
 gap/overlap/focus-ring browser assertions

Storybook selects ReducedMotion
          |
          v
 async story beforeEach (before render)
          |
          +--> Vitest: existing Playwright media emulation
          |
          +--> direct preview: scoped matchMedia adapter
          |                    + document root marker
          |                    + Storybook-only zero-motion mirror
          v
 React render/init sees reduced motion on first call and first paint
          |
          v
 returned cleanup restores native matchMedia, root marker, and media override
          |
 ordinary story observes normal motion
```

### Responsive layout state matrix

Let:

- `Dmax = var(--hp-charter-mobile-open) = 20.529375rem` (328.47px at
  the default root size), the approved open-circle diameter;
- `D = min(Dmax, 100cqi)`, the rendered fallback diameter so a one-column
  circle cannot exceed the fallback container content box;
- `G = $uds-size-spacing-3 = 1.5rem` (24px), the approved visible horizontal
  edge gap; and
- `C` be the root container's available content-box inline size.

Capacity thresholds derive only from full-size circle geometry:

```text
T2 = 2Dmax + 1G = 42.55875rem
T3 = 3Dmax + 2G = 64.588125rem
T5 = 5Dmax + 4G = 108.646875rem
```

| State | Container condition | Explicit placement in DOM order | Representative story viewport |
| --- | --- | --- | --- |
| `ONE` | `C < T2` | items 1–5: column `1 / span 2`, rows 1–5 | `hp320`; use 1rem fallback inline padding, yielding a 288px maximum content box |
| `TWO` | `T2 <= C < T3` | row 1: items 1/2 at columns 1/3; row 2: item 3 at column 2; row 3: items 4/5 at columns 1/3 | `hp768` |
| `THREE` | `T3 <= C < T5` | row 1: items 1/2/3 at columns 1/3/5; row 2: items 4/5 at columns 2/4 | `hp1280` |
| `FIVE` | `C >= T5` | row 1: items 1–5 at columns 1/3/5/7/9 | `hp1920` |

The breakpoint conditions are named container queries on the unenhanced root,
not viewport queries, so the same component responds correctly in a constrained
CMS region. The current 3rem desktop padding remains. At the existing mobile
breakpoint, unenhanced inline padding becomes 1rem so the 320px story has a
288px circle and no page overflow; block padding may retain the existing token.
The browser test must prove the longest canonical heading, detail, and link fit
that circle. If 288px cannot contain them at the recovered font sizes, stop and
report the content conflict rather than clip, reduce type, or change copy.

### DOM-order-preserving grid strategy

The list uses twice as many tracks as visible bubble columns. Each track is:

```text
H = (D - G) / 2
```

and every bubble spans two tracks. A two-track bubble is therefore
`2H + G = D`; shifting a centered incomplete row by one half-track plus its gap
places its centers exactly halfway between the centers above. The grid declares
2, 4, 6, or 10 `H` tracks and uses `justify-content: center`. Explicit
`grid-column` and `grid-row` assignments match the matrix above. The code must
not use `order`, `grid-auto-flow: dense`, duplicated markup, or absolute
positioning. DOM, reading, selection, and link-tab order remain items 1–5.

The fallback item and back face use `inline-size: D`, `block-size: D`,
`aspect-ratio: 1`, and `border-radius: 50%`. Front triggers, Close buttons, and
navigation remain `display: none`; headings, details, and links stay in the
initial HTML. The fallback scope also sets transitions to none, transforms to
none, scroll snapping off, and scroll behavior to auto. No pointer cursor,
surface click handler, or dismissal affordance is added.

### Circular edge-gap formula

For staggered rows, adjacent circle centers are horizontally separated by:

```text
X = (D + G) / 2
```

To make their closest edge gap equal the same-row gap `G`, their center distance
must be `D + G`. The required vertical center pitch and negative block offset
are therefore:

```text
Y = sqrt((D + G)^2 - X^2)
O = (D + G) - Y
  = (D + G) * (1 - sqrt(3) / 2)
```

Staggering occurs only after `D` has reached fixed `Dmax`, so no runtime square
root is needed. Store the precomputed result (approximately `2.951rem`/47.22px
for `Dmax` and `G`) in the documented component custom property
`--hp-charter-noscript-row-overlap`. There is no matching UDS semantic token.
Apply `margin-block-start: calc(-1 * var(...))` to every item in each staggered
row after the first. The negative margin participates in grid track sizing, so
each subsequent row advances by `Y`; do not use transforms that leave phantom
block space. The one-column state has no stagger and uses the ordinary `G` row
gap. The five-column state has one row and no block offset.

Tests compute each circle's center and radius from
`getBoundingClientRect()` and compare
`hypot(dx, dy) - r1 - r2`; grid-cell gaps alone are not acceptance evidence.
Tolerance is at most 1 CSS pixel. If focus outlines, forced-color borders, or
content need more clearance, follow the failure policy and record the smallest
deviation rather than hiding or clipping focus.

### Reduced-motion pre-render strategy

Add one story-local installer used by `ReducedMotion.beforeEach`. It runs before
`render` and returns cleanup:

1. Save the exact current `window.matchMedia` function and the prior value or
   absence of a document-root story marker.
2. Await the existing `emulateReducedMotion(true)` helper. In the Vitest browser
   this calls Playwright before component construction; in direct preview it is
   intentionally a no-op.
3. Install a MediaQueryList-compatible adapter for the exact
   `(prefers-reduced-motion: reduce)` query with `matches: true`, `media`,
   `onchange`, `addEventListener`/`removeEventListener`, legacy
   `addListener`/`removeListener`, and `dispatchEvent`. Delegate every other
   query to the saved native function. This makes direct preview and component
   initialization deterministic without changing production JavaScript.
4. Set `data-charter-bubbles-reduced-motion-story` on `document.documentElement`
   before React render. In `_charter-bubbles.storybook.scss`, that marker mirrors
   only the already-correct production reduced-motion declarations: zero
   bubble/front/back transitions, base-size hover, and `scroll-behavior: auto`.
   The mirror is Storybook-only and cannot enter the package production bundle.
5. Cleanup removes/restores the marker exactly, restores the saved native
   `matchMedia`, and awaits `emulateReducedMotion(false)` even when an assertion
   fails. Cleanup is idempotent so rerender/HMR or an interrupted play cannot
   leak state.

The `play` function no longer enables or disables media emulation. Its first
assertion reads the media query and computed transition/scroll styles before any
hover, click, wait, or animation frame. It then uses the existing real pointer
to prove hover remains 180px and activates/selects a bubble while sampling
geometry/state to prove there is no intermediate animation. A separate ordinary
motion isolation story runs after cleanup and asserts a false reduced-motion
query, nonzero configured transition duration, and absence of the marker.

### State model

The fallback layout has CSS-only states; JavaScript never drives them:

```text
UNENHANCED_ONE
  -- C reaches T2 --> UNENHANCED_TWO
UNENHANCED_TWO
  -- C reaches T3 --> UNENHANCED_THREE
UNENHANCED_THREE
  -- C reaches T5 --> UNENHANCED_FIVE

Any state -- .is-enhanced added --> EXISTING_ENHANCED_CONTROLLER
EXISTING_ENHANCED_CONTROLLER -- this task --> no transition or behavior change
```

The story environment lifecycle is:

```text
ORDINARY_ENV
  -- ReducedMotion beforeEach --> REDUCED_ENV_READY
REDUCED_ENV_READY
  -- render/init/first paint --> REDUCED_STORY_ACTIVE
REDUCED_STORY_ACTIVE
  -- story cleanup (success or failure) --> ORDINARY_ENV
```

### Accessibility requirements

#### Keyboard and focus

- Only the five visible links are tabbable in the no-script state, in DOM order.
  Hidden front/Close/navigation buttons must not enter the accessibility tree or
  tab sequence.
- No wrapper receives `tabindex`, `role="button"`, key handlers, or click
  semantics. The open circle remains static content containing a separate link.
- Link focus indicators must be fully visible and must not touch or be clipped
  by an adjacent circle at every row pattern, at 320px, at 200% CSS zoom, and in
  forced colors. Circle overflow must not be hidden to manufacture a pass.

#### Screen reader and reading order

- All five headings, details, and links remain present in initial static HTML.
- CSS placement must not alter DOM, accessible-name, reading, or link order.
- Hidden inoperative controls retain their existing markup for parity but are
  not rendered or exposed through `display: none`.
- No live region, expanded-state announcement, or interactive surface role is
  added because the fallback has no state change.

#### Reflow, contrast, and motion

- At a 320 CSS-pixel viewport there is no horizontal document overflow and no
  clipped canonical content. A 200% test uses supported CSS `zoom: 2` in the
  browser story harness, restores it in `finally`, and rechecks content/focus
  rectangles; the 320 test independently covers WCAG narrow reflow.
- Forced-colors emulation uses the existing browser helper and verifies circular
  borders, links, and focus indicators remain distinguishable.
- The no-script state has no transition, flip, scroll snap, or smooth scroll.
  ReducedMotion has zero transition on first observable render.

### Error and recovery paths

| Stage | Error | Detection | Recovery / disposition | User impact |
| --- | --- | --- | --- | --- |
| Fallback RED | Existing markup cannot fit canonical content in a 288px circle | content and focus rectangles exceed the circle at 320 | stop; request design amendment; do not change markup/copy/type | current rectangular fallback remains |
| Container capacity | row count changes at wrong width | unique rendered center-Y groups and threshold boundary tests | correct threshold math/scoping in same commit | wrong visual grouping without JS |
| Placement | visual order differs from DOM order | compare link DOM indexes with sorted row/column centers | remove dense/order-based layout; use explicit rows/columns | confusing reading/tab sequence |
| Gap formula | circles/focus overlap or edge gaps differ by more than 1px | rendered-circle and focus-ring rectangles | reduce overlap to smallest safe value and document deviation | extra whitespace is accepted over lost content/focus |
| Fallback leaks into enhanced mode | cluster/carousel geometry or animation changes | enhanced characterization before/after | tighten `:not(.is-enhanced)` scope; revert fallback commit if unresolved | release blocked |
| Direct reduced motion | media query false or first computed transition nonzero | first synchronous play assertions/direct preview | fix beforeEach adapter/marker; do not alter production media CSS | reviewer sees motion unexpectedly |
| Story cleanup | next story remains reduced | ordinary-motion isolation story | idempotent `finally` cleanup; restore exact saved globals/attribute | cross-story false results |
| Browser emulation unavailable | Vitest command cannot execute | helper capability/assertion and command error | record blocker; direct shim is not a substitute for browser-emulation test evidence | implementation not verified |
| Tool/build failure | lint, Storybook, or build cannot run | exact command/exit output | record as blocked; do not claim green | no verified commit |

### Enhanced-behavior and HTML-parity proof

Before the fallback RED test, record current enhanced cluster and carousel story
results. After each commit, rerun the complete Charter Bubbles story file. The
production SCSS diff must contain only selectors rooted in
`.hp-charter-bubbles:not(.is-enhanced)`; the story mirror must contain the
document marker. `charter-bubbles.js`, `CharterBubbles.jsx`, `CharterBubble.jsx`,
the data module, and the static fixture must have empty diffs. Existing
`HtmlParity`, second-click, focus, hover, carousel selection, 320px, and reduced
motion stories remain green. These checks prove that the same canonical React
and static HTML receives the fallback styling while enhanced behavior remains
the recovered baseline.

If a markup change is proposed, this proof fails by definition: stop and seek a
new approval rather than changing both renderers during the CSS/story MVP.

### Exact test matrix

| Behavior | Level | Boundary / seam | Test double strategy | Exact command | Failure covered |
| --- | --- | --- | --- | --- | --- |
| Existing enhanced baseline | component/integration | fallback selector vs cluster/carousel | real Chromium, canonical data | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx` before edits | importing an existing regression |
| Initial no-script contract | component | static HTML to fallback CSS | real static fixture, no enhancement | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'No script'` | missing content, exposed dead controls, rectangular cards |
| `FIVE` rows | component/visual | container `C >= T5` at `hp1920` | real Chromium rectangles | same focused no-script command | wrong 5 layout/order |
| `THREE` rows | component/visual | `T3 <= C < T5` at `hp1280` | real Chromium rectangles | same focused no-script command | uncentered or reordered `3 / 2` |
| `TWO` rows | component/visual | `T2 <= C < T3` at `hp768` | real Chromium rectangles | same focused no-script command | wrong `2 / 1 / 2` |
| `ONE` rows and reflow | component/visual | `C < T2` at `hp320` | real Chromium rectangles/scroll widths | same focused no-script command | overflow, clipping, wrong five rows |
| Threshold edges | component | 1px below/at `T2`, `T3`, `T5` after padding | existing `resizeViewport`, real CSS | same focused no-script command | off-by-padding/container math |
| Circular gaps | component/geometry | same-row vs staggered circle edges | real `getBoundingClientRect`, no grid-box proxy | same focused no-script command | perceived gap mismatch/collision |
| DOM/link order | accessibility/component | CSS placement vs source order | real links and keyboard Tab | same focused no-script command | visual reordering changes navigation |
| 200% and forced colors | accessibility/visual | zoom/paint boundaries | real Chromium CSS zoom plus existing forced-color emulation, both cleaned up | same focused no-script command | clipped focus/content or indistinguishable circles |
| Reduced motion before render | component/integration | CSF `beforeEach` to component init/first style | existing Playwright media command plus direct-preview adapter | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Reduced motion'` | emulation starts after first paint |
| Reduced visual behavior | component/visual | media query to transition, scroll, hover, selection | real computed styles/pointer | same focused reduced-motion command | transition, smooth scroll, or 200px hover remains |
| Cleanup isolation | component/integration | story teardown to ordinary story | saved native globals/marker; real Storybook lifecycle | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Motion isolation'` | preference leaks to later stories |
| React/static parity | contract/integration | shared classes and unchanged markup | existing real parity render | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'HTML parity'` | static-only or React-only result |
| Targeted quality | static | three changed source/story files | real ESLint/Stylelint | `cd packages/components-homepage && yarn exec eslint src/components/charter-bubbles/charter-bubbles.stories.jsx && yarn exec stylelint src/components/charter-bubbles/_charter-bubbles.scss src/components/charter-bubbles/_charter-bubbles.storybook.scss` | syntax/style errors |
| Full package | integration | component to package bundle and stories | real build/Chromium | `cd packages/components-homepage && yarn build && yarn test:storybook` | bundle or cross-story regression |

The coder must confirm Vitest's resolved display names before using `-t` and
record the actual commands in `.pipeline/impl-report.md`. If a proposed focused
pattern matches zero tests, it is a failure, not a pass.

### Security considerations

- No HTML, URL, analytics, sanitizer, or event-handler logic changes.
- The `matchMedia` adapter accepts only the exact reduced-motion query and
  delegates every other query to the saved native function with the correct
  `window` receiver.
- The adapter and document marker exist only in the Storybook preview and are
  restored after every run; they must not be exported from production entry
  points.
- Do not insert styles from story args or user data. Storybook-only rules are
  static SCSS selectors.

### Performance considerations

- Container queries and grid replace the existing fallback grid only while
  unenhanced; no runtime observer, measurement, resize listener, or dependency
  is added.
- The fixed five-item grid has constant layout cost. Explicit placement avoids
  dense auto-placement retries.
- The media adapter is installed once per ReducedMotion story and removed at
  cleanup. No polling, animation-frame loop, or production work is introduced.
- Browser geometry reads occur only in tests and are batched after layout.

### Two-to-five-minute implementation tasks

#### Task F1 — Characterize and create no-script RED (5 minutes)

Files: `charter-bubbles.stories.jsx`, `.pipeline/impl-report.md`.

- Run and record the current full Charter story file.
- Add a shared geometry assertion that groups five circle rectangles by center Y,
  verifies source/link order, shape, content, hidden dead controls, and overflow.
- Add/parameterize `hp1920`, `hp1280`, `hp768`, and `hp320` unenhanced stories.
- Run the focused no-script command; RED must identify rectangular shape and/or
  wrong row groups, not an unrelated timeout.

Depends on: explicit user approval.

#### Task F2 — Establish the circle and one-column fallback (3 minutes)

File: `_charter-bubbles.scss`.

- Add the named container, `D`/`G` custom properties, fluid one-column tracks,
  round equal-size item/back faces, centered content, static-motion rules, and
  1rem mobile inline padding.
- Run the 320 story and content/focus rectangle assertions.
- Stop for amendment if the canonical copy cannot fit at 288px.

Depends on: F1 RED.

#### Task F3 — Add exact capacity placement (5 minutes)

File: `_charter-bubbles.scss`.

- Add `T2`, `T3`, `T5` named container queries.
- Declare 4/6/10 half-width tracks and the exact row/column placements from the
  state matrix.
- Run all four row-pattern and threshold-edge assertions.

Depends on: F2.

#### Task F4 — Calibrate circular edge spacing and accessibility (5 minutes)

Files: `_charter-bubbles.scss`, `charter-bubbles.stories.jsx`.

- Add the documented precomputed overlap custom property and negative block
  margins for later staggered rows.
- Measure same-row and diagonal edge gaps, focus-ring bounds, content, 200% zoom,
  forced colors, and 320px overflow.
- If clearance wins, record the exact smallest deviation in the implementation
  report before committing.

Depends on: F3.

#### Task F5 — Prove fallback isolation and commit (3 minutes)

- Run `HtmlParity`, the full Charter story file, targeted lint/stylelint, and
  inspect diffs of JS/JSX markup and enhanced selectors.
- Commit only fallback SCSS, its RED/GREEN stories, and implementation evidence.

Depends on: F4 GREEN.

#### Task M1 — Create pre-render reduced-motion RED (3 minutes)

File: `charter-bubbles.stories.jsx`.

- Move the first assertions before interaction and prove the current story sees
  false/nonzero motion before its `play` toggle.
- Add the following ordinary-motion isolation story.

Depends on: F5.

#### Task M2 — Install and clean the story environment (5 minutes)

Files: `charter-bubbles.stories.jsx`, `_charter-bubbles.storybook.scss`.

- Add the story-local MediaQueryList adapter, async `beforeEach`, document marker,
  Storybook-only mirrored declarations, and idempotent returned cleanup.
- Remove emulation toggles from `play`.
- Run focused ReducedMotion and isolation tests, then open the direct preview and
  record first-paint evidence.

Depends on: M1 RED.

#### Task M3 — Final regression and reports (5 minutes)

Files: `.pipeline/impl-report.md`; reviewer later owns
`.pipeline/review-report.md`.

- Run the complete matrix, compare production source to the pre-follow-up commit,
  and prove only guarded fallback CSS changed.
- Record browser, viewport, row centers, measured gaps, zoom/forced-color result,
  direct-preview result, cleanup result, and all command exits.
- Submit to adversarial review before the final documentation commit.

Depends on: M2 GREEN.

### Exact commit plan and rollback

After explicit user approval:

1. `docs(components-homepage): plan charter bubble fallback verification`
   - this expanded amendment only; no source/test changes.
2. `fix(components-homepage): restore charter bubble no-script circles`
   - fallback SCSS, four RED/GREEN row stories/assertions, and corresponding
     implementation evidence.
3. `test(components-homepage): emulate charter bubble reduced motion before render`
   - story installer/cleanup, Storybook-only mirror, focused RED/GREEN and
     isolation evidence.
4. `docs(components-homepage): record charter bubble fallback review`
   - final implementation and reviewer evidence only after approval.

Each behavior commit is independently revertible. If commit 2 fails content,
focus, parity, or enhanced regression checks, revert/omit commit 2 without
touching the motion work. If commit 3 leaks or cannot prove pre-render state,
revert/omit commit 3 without changing production reduced-motion CSS. Never
squash the behavior commits together, and never roll back completed recovery
commits above to resolve a follow-up failure.

### Follow-up lock protocol

This follow-up section is **LOCKED** by explicit user approval. Approval locks
the scope, four layout states, geometry formula, pre-render
emulation lifecycle, file boundaries, and staged commits. Any need to change
production markup/JavaScript, the enhanced behavior, the 16px minimum, or the
Webspark handoff requires a new amendment and renewed approval. No implementation
code may be written before that approval.

---

# Architecture Amendment — Carousel Arrow-Key Transition Parity — 2026-11-20

Status: **APPROVED AND LOCKED — 2026-11-20**

This amendment is additive. It preserves every earlier recovery and fallback
decision. Once approved, it supersedes only the earlier statement that the
carousel has no custom ArrowLeft/ArrowRight handling.

## Scope decision

**Hold scope.** The report is a narrow interaction regression. The minimum
durable fix is to route horizontal arrow keys through the carousel's existing
controlled selection transition. No markup, geometry, copy, analytics, cluster
behavior, or general focus model needs to change.

## Problem framing (six forcing questions)

### Problem Statement

Keyboard users need ArrowLeft/ArrowRight navigation inside the enhanced
carousel to use the same close → center → open choreography as its Previous/Next
buttons and horizontal wheel input, because native overflow scrolling currently
enters a delayed passive-scroll path with visibly different timing and state.

### Stakeholders

- Keyboard and switch users operating the mobile/tablet carousel are directly
  affected; they need deterministic movement and a valid visible focus target.
- Screen-reader users are indirectly affected because open-state ARIA/inert
  changes must settle before focus enters the destination panel.
- Pointer, touch, wheel, and copied-static-HTML consumers must retain their
  current behavior.
- Maintainers need one transition authority rather than a separate keyboard
  animation implementation.

### Success Criteria

1. With focus inside the carousel viewport, unmodified ArrowRight selects the
   next item and ArrowLeft selects the previous item.
2. Each accepted arrow begins the same existing `move`/`startCorrection`
   sequence used by Previous/Next: the old bubble closes, exactly one adjacent
   item gains `is-opening`, it centers, and only then becomes the sole open item.
3. The accepted key event prevents native horizontal scrolling, including while
   a transition is already pending, so the passive scroll path cannot race it.
4. As correction begins, focus moves from the closing panel to the destination's
   still-visible front button. After the destination is open and its ARIA/inert
   state is synchronized, focus moves to its visible link. Focus never remains
   in a closed/inert panel.
5. A held/repeated key cannot skip more than one item during a pending
   transition. At an edge, state and focus remain unchanged.
6. ArrowUp/ArrowDown and modified horizontal arrows retain native browser/page
   behavior. Cluster mode and navigation-button keyboard activation are unchanged.
7. Normal motion uses the existing smooth correction; reduced motion uses the
   existing immediate correction without waiting on a CSS transition.

### Failure Modes

1. **Hidden focus (highest impact):** the current item closes while focus stays
   in its inert panel. Detect by checking `activeElement`, `inert`, and open ARIA
   state before and after settlement. Recover by using the existing
   `pendingFocusItem`/post-activation focus scheduler.
2. **Native/controlled race:** a key both scrolls natively and starts correction.
   Detect with `defaultPrevented`, item classes, and single-open assertions.
   Recover by preventing every owned unmodified horizontal arrow before routing.
3. **Key repeat skips items:** repeated keydown events retarget while correction
   is pending. Detect with two keydowns before `scrollend`. Recover by consuming
   the repeat while the existing pending-state guard rejects the second move.
4. **Edge escape:** ArrowLeft at the first item or ArrowRight at the last item
   changes scroll/state or loses focus. Detect at both edges; consume the owned
   key and retain state/focus.
5. **Over-broad interception:** vertical arrows, modified arrows, cluster keys,
   or nav-button keys are prevented. Detect each boundary and leave it native.
6. **Motion regression:** reduced motion uses smooth scrolling or waits forever
   for a transition/scroll event. Detect under pre-render media emulation and
   exercise the existing idle/scrollend fallback.

### MVP Scope

- One viewport-scoped `keydown` handler in the existing carousel controller.
- A small option on the existing adjacent `move` path to request destination
  focus; no second transition implementation.
- One isolated Storybook interaction story covering RED/GREEN, boundaries,
  focus, repeat, and reduced-motion compatibility.
- Focused regression, lint, build, and the complete Charter story file.

### Out of Scope

- Roving tabindex, `aria-activedescendant`, new roles, live regions, or making
  the viewport/wrapper focusable.
- Home/End, PageUp/PageDown, ArrowUp/ArrowDown, RTL remapping, or a new carousel
  keyboard specification beyond the reported horizontal arrows.
- Changes to cluster interaction, carousel touch/pointer/wheel semantics,
  geometry, CSS timing/easing, markup/HTML parity, no-script layout, analytics,
  reduced-motion emulation, or Stage B handoff.

## Diagnosis and data flow

Current code has no ArrowLeft/ArrowRight listener. When a focused descendant
causes the overflow viewport to scroll natively, `onScroll` marks a deferred
selection, idle/`scrollend` chooses a neighbor, and only then
`startCorrection` begins. Buttons and horizontal wheel call `move` or
`startCorrection` immediately. The proposed handler removes that split path.

```text
keydown bubbles from focused link/front inside carousel viewport
  |
  +-- cluster / vertical key / modified key / already defaultPrevented
  |      -> do not handle; native behavior
  |
  +-- ArrowLeft / ArrowRight in carousel
         -> preventDefault (owns horizontal key; blocks native-scroll race)
         -> move(-1|+1, { focusPanel: true })
              |
              +-- edge or controlled transition already pending
              |      -> no state change; key remains consumed
              |
              +-- adjacent target
                     -> pendingFocusItem = target
                     -> existing startCorrection(target)
                     -> close old + target.is-opening + center
                     -> focus target's still-visible front button
                     -> scroll/scrollend/idle activation
                     -> synchronize open/ARIA/inert
                     -> existing focus scheduler focuses target link
```

No storage, network, analytics, markup, or new output channel is introduced.

## State machine amendment

```text
OPEN(N), focus inside viewport
  -- owned ArrowRight and N is not last --> CORRECTING(N, N+1, keyboardFocus=true)
  -- owned ArrowLeft  and N is not first -> CORRECTING(N, N-1, keyboardFocus=true)
  -- owned arrow at edge ----------------> OPEN(N), unchanged

CORRECTING(N, M, keyboardFocus=true), focus on M front
  -- repeated owned arrow ---------------> same CORRECTING state; no skip
  -- target reaches center / scrollend ---> OPEN(M), then focus M link
  -- idle fallback -----------------------> retry existing correction/activation
  -- teardown or leaves carousel mode ----> existing cleanup; no scheduled focus

Any state
  -- ArrowUp/Down or modified horizontal arrow --> existing/native behavior
```

Side effects remain reversible through the controller ledger and existing
teardown. `preventDefault` is the only new event side effect.

## Behavioral matrix

| User Action | Current State | Next State | Visual/Focus Result | Animation |
| --- | --- | --- | --- | --- |
| ArrowRight in viewport | item N open, next exists | correcting to N+1, then N+1 open | same close/center/open classes as Next; focus N+1 front during correction, then its link after open | existing smooth correction; auto under reduced motion |
| ArrowLeft in viewport | item N open, previous exists | correcting to N-1, then N-1 open | same as Previous; focus N-1 front during correction, then its link after open | existing smooth correction; auto under reduced motion |
| Repeated owned arrow while correcting | correction pending | same correction | no second target, no native scroll, no focus loss | existing in-flight animation only |
| Horizontal arrow at edge | first/last open | unchanged | focus and open state remain | none |
| ArrowUp/ArrowDown | any carousel state | unchanged by component | native page behavior | native |
| Ctrl/Meta/Alt/Shift + horizontal arrow | any carousel state | unchanged by component | native/assistive-technology behavior | native |
| Horizontal arrow in cluster | any cluster state | existing cluster behavior | no carousel interception | existing |
| Enter/Space on Previous/Next | carousel | adjacent item | existing button path | existing |

## Accessibility Requirements

### Keyboard Navigation

- **Tab order:** unchanged normal DOM order through visible front buttons and
  the open panel link; the wrapper and viewport do not become tab stops.
- **Arrow keys:** while focus is within the carousel viewport, unmodified
  ArrowLeft/ArrowRight select exactly one adjacent item through the controlled
  transition. ArrowUp/ArrowDown and modified arrows remain native.
- **Enter/Space:** native activation of front and navigation buttons remains.
- **Escape:** unchanged by this amendment.

### Focus Management

- Pattern: standard DOM focus, not roving tabindex or `aria-activedescendant`.
- The existing pending-focus seam is used. Once correction starts, focus moves
  synchronously to the destination's visible front button; the existing
  `focusin` selection hook is idempotent because that item is already pending.
  Focus then moves to the destination link only after that item is open and its
  panel is no longer inert.
- A rejected repeat or edge key does not move focus. Teardown cancels scheduled
  focus through the existing owned focus scheduler.

### Screen Reader

- No live region or role changes.
- Existing front/link/Close accessible names remain.
- `aria-expanded`, `aria-hidden`, and `inert` synchronize before destination
  focus. Exactly one item is exposed as open after settlement.

### Motion

- Reuse `startCorrection`, which selects `smooth` only when
  `prefers-reduced-motion` is false and `auto` otherwise.
- No new CSS transition, duration, easing, or transition-event dependency.

## Error paths and recovery

| Component/Stage | Error | Detection | Recovery | User impact |
| --- | --- | --- | --- | --- |
| Key classifier | intercepts non-owned key/modifier | focused boundary assertions | tighten exact key/modifier/mode/containment guards | native key behavior restored |
| Adjacent move | pending or edge move returns false | state/class assertions | consume owned key but retain current target/state | no skip or drift |
| Correction | native scroll also occurs | `defaultPrevented` plus target/state geometry | prevent before routing; reuse one correction authority | consistent transition |
| Activation | target not centered/open | existing scrollend + idle fallback assertions | retain existing retry/fallback | temporary correction only |
| Focus scheduler | focus remains in old inert panel or reaches link early/stale | activeElement and inert assertions | focus target front after correction starts; schedule link only for matching open ID; existing cleanup cancellation | focus stays valid |
| Mode/teardown | handler fires after cluster switch/destroy | mode and teardown regression | controller-owned listener and active/mode guards | native behavior after teardown |

## Test matrix

| Behavior | Test Level | Boundary / Seam | Test Double Strategy | Verification Command | Failure Mode Covered |
| --- | --- | --- | --- | --- | --- |
| ArrowRight parity with Next | component/regression | viewport keydown → `move` → correction | real Chromium event/classes/geometry | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Keyboard arrow transition'` | delayed passive-scroll choreography |
| ArrowLeft parity with Previous | component/regression | same path, reverse direction | real Chromium | same focused command | asymmetric transition |
| Prevent native race | component | cancelable key event boundary | real `KeyboardEvent`, inspect `defaultPrevented` | same focused command | native and controlled paths both run |
| Interim and settled focus/ARIA/inert | accessibility/component | target front → pending focus scheduler → active panel | real focus and DOM state | same focused command | focus in closed/inert panel or premature link focus |
| Repeat during correction | component | pending-state guard | two real keydowns before `scrollend` | same focused command | multi-item skip |
| First/last edge | component | adjacency bounds | real events at both endpoints | same focused command | drift or focus loss at edge |
| Vertical/modified keys | accessibility/component | exact classifier | real cancelable key events | same focused command | over-broad interception |
| Reduced motion | component/integration | pre-render media state → existing correction | existing real Storybook media emulation | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'Reduced motion|Keyboard arrow transition'` | smooth motion or transition wait under preference |
| Pointer/wheel/button regression | component/integration | shared controller paths | existing real stories | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx` | changing established inputs |
| Static/React contract | contract | unchanged markup | existing parity story | `cd packages/components-homepage && yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx -t 'HTML parity'` | accidental markup divergence |
| Static quality | static | changed JS/story | real ESLint | `cd packages/components-homepage && yarn exec eslint src/components/charter-bubbles/charter-bubbles.js src/components/charter-bubbles/charter-bubbles.stories.jsx` | syntax/style error |
| Package integration | integration | production bundle | real Vite build | `cd packages/components-homepage && yarn build` | bundling/export regression |

The coder must verify the story's resolved display name before relying on `-t`;
zero matched tests is a failed verification.

## Implementation tasks (two-to-five minutes each)

### Task K1 — Add isolated RED characterization (5 minutes)

Files:
`packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`,
`.pipeline/impl-report.md`.

- Add `KeyboardArrowTransition` at 393px and begin with the initial open link
  focused.
- Dispatch a cancelable ArrowRight and require `defaultPrevented`, immediate old
  close plus one adjacent `is-opening`, then destination open/focused after
  `scrollend`.
- Compare the observable class/ARIA sequence with the existing Next-button path.
- Run the focused command and record RED caused by absent key handling.

Depends on: human approval.

### Task K2 — Route owned arrows through the existing transition (5 minutes)

File:
`packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`.

- Extend the existing adjacent `move` helper with a keyboard-focus option that
  assigns the destination to `pendingFocusItem`, calls `startCorrection`, and
  then focuses the destination's still-visible front. Its resulting `focusin`
  must remain idempotent through the existing same-pending-item guard.
- Add a controller-owned viewport `keydown` listener with exact carousel,
  containment, key, `defaultPrevented`, and modifier guards.
- For an owned key, call `preventDefault` before attempting `move`, so edges and
  in-flight repeats cannot fall back to native horizontal scrolling.
- Do not add CSS, timers, markup, roles, tabindex, or a second transition path.
- Run K1 to GREEN.

Depends on: K1 RED.

### Task K3 — Close keyboard boundaries and motion cases (5 minutes)

File:
`packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`.

- Add reverse, repeat-before-settlement, both-edge, vertical/modifier, focus,
  ARIA/inert, and reduced-motion assertions to the isolated story or a tightly
  paired story.
- Confirm teardown/mode guards through existing full-story regressions.
- Run the focused keyboard and reduced-motion commands.

Depends on: K2 GREEN.

### Task K4 — Regression, evidence, and isolated commit (5 minutes)

Files: `.pipeline/impl-report.md`; reviewer later owns
`.pipeline/review-report.md`.

- Run the full Charter story file, HTML parity, targeted ESLint, package build,
  and scoped `git diff --check`.
- Record exact RED/GREEN output, focus/motion evidence, files, and anything not
  run. Submit to adversarial review.
- Commit the implementation separately as
  `fix(components-homepage): align charter bubble arrow transitions`; keep final
  review documentation in its own later docs commit.

Depends on: K3 GREEN.

## Security and performance considerations

- No new trust boundary, input, URL, HTML, analytics, storage, or network path.
  Event handling accepts only browser-generated/local key names after exact
  guards and performs no dynamic lookup outside the owned root.
- One bubbling `keydown` listener is owned and removed by the existing controller
  ledger. Work is constant over five items and only occurs for two exact keys.
- The implementation adds no observer, timer, layout loop, CSS animation, or
  additional geometry read beyond the existing correction path.

## Amendment lock protocol

No implementation or test code may be written until the user approves this
amendment. Approval locks the owned keys, focus destination, transition reuse,
scope exclusions, tests, and isolated commit. Any need to change markup, CSS,
geometry, non-horizontal keys, cluster behavior, or the Webspark handoff requires
a new amendment and renewed approval.
