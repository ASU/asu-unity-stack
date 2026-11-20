# Charter Bubbles No-script / Reduced-motion Follow-up — Final Review Report

Review date: 2026-11-19

Branch: `codex/WWWCMS-238-baseline-recovery`

Authoritative enhanced baseline: `b4eb7152a` and the previously approved
November 13 recovery behavior

Reviewed follow-up through: `e64140056`

Review cycle: 2 (closure)

The prior baseline recovery remains **APPROVED**. This report covers the
separately locked no-script-circle and pre-render-motion follow-up.

## Spec Compliance

**Result: PASS**

Both findings from follow-up review cycle 1 are closed. Forced-colors keyboard
focus now has visible nonzero system-color paint, and the direct Reduced Motion
preview completes without requiring Vitest-only pointer automation. The
mandatory query, marker, transition, and scroll assertions still execute in
both environments; Vitest retains the real-hover and real-click tail.

### Staged commits and scope

| Stage | Commit | Result |
| --- | --- | --- |
| Locked follow-up plan | `ae4175920` | PASS |
| No-script circles | `f82adefaa` | PASS |
| Pre-render reduced motion | `e6c839df1` | PASS |
| Review closure | `e64140056` | PASS — fallback focus CSS and focused story coverage only |
| Final evidence | pending by design | Ready after approval |

The closure commit changes only `_charter-bubbles.scss` and
`charter-bubbles.stories.jsx`. Its production rule is scoped to
`.hp-charter-bubbles:not(.is-enhanced)` inside `forced-colors: active`.
Independent diffs confirm no change to controller JavaScript, React component
markup, data, or the static fixture. The Storybook motion marker remains absent
from the built production artifacts.

### Contract matrix

| Requirement | Result | Independent evidence |
| --- | --- | --- |
| `ONE`, `TWO`, `THREE`, `FIVE` geometry | PASS | Prior direct rectangles remain `[1,1,1,1,1]`, `[2,1,2]`, `[3,2]`, `[5]`; closure has no layout declaration |
| Circle size and gaps | PASS | 288px at 320; 328.46875px full size; 24px same-row and 24.016px diagonal |
| Threshold edges | PASS | content widths 680/681, 1033/1034, and 1738/1739 retain the required transitions |
| DOM/tab order and hidden controls | PASS | canonical `0–4` order; five links only; dead controls remain `display: none` |
| 320 fit and zoom | PASS | canonical content and focus paint remain contained; no 320 overflow |
| Forced-color link focus | PASS | trusted Tab yields 2px solid `CanvasText` outline, 4px offset, 6px total extent |
| Focused/unfocused delta | PASS | unfocused paint has no outline; focused signature changes to visible solid system-color paint |
| Focus clipping/overlap | PASS | all five links in all four row layouts clear page edges and every neighboring circle |
| Direct motion first state | PASS | query true, marker present, transition `0s`, scroll `auto` |
| Direct preview errors | PASS | zero console, page, play, or assertion errors; render phase finished |
| Vitest motion interaction | PASS | test-mode branch still requires pointer capability, real hover at 180px, real click, final 454px face, and no `is-opening` state |
| Cleanup/isolation | PASS | same-page switch restores query false, removes marker, and restores 0.62s ordinary transition |
| Enhanced/HTML parity | PASS | parity, cluster, carousel, focus, dismissal, hover, and motion stories pass in 36/36 |
| Production leakage | PASS | Storybook marker absent from `dist`; only approved fallback CSS enters production |

## Adversarial Findings

**No open P1, P2, or P3 findings.**

### Cycle-1 finding closure

- **P1 forced-colors focus — CLOSED.** Direct Playwright enabled forced colors
  and used trusted keyboard Tab across the 320, 768, 1280, and 1920 fallback
  stories. Every one of the twenty link-focus observations computed
  `outline-style: solid`, `outline-width: 2px`, `outline-offset: 4px`, a visible
  system color, and no box shadow. The 6px painted extent remained within the
  viewport and outside every neighboring circle.
- **P1 test-fidelity gap — CLOSED.** The helper now rejects zero focus paint,
  compares focused and unfocused signatures, parses outline and box-shadow
  extents, expands the tested focus rectangle by the actual extent, and uses
  trusted keyboard input in Vitest. The forced-colors story explicitly requires
  a nonzero outline on `:focus-visible`.
- **P2 direct-preview error — CLOSED.** Direct Storybook still executes the
  universal synchronous media/style assertions, then returns only before the
  automation-only pointer tail when `MODE !== "test"`. The direct iframe
  reached `phase: finished` with no logged error. The Vitest environment remains
  `MODE === "test"`, so it executes the required pointer assertion, hover, and
  selection checks.

Same-page cleanup remained correct after the direct-preview change: switching
from Reduced Motion to Motion Isolation restored the native media result,
removed the marker, restored ordinary transition timing, and produced no
console/page error.

No container-rounding, content collision, HMR/retry leakage, matchMedia
compatibility, injection, URL, analytics, dependency, cross-root, or
production-bundle regression was found. Enhanced carousel choreography remains
the approved baseline because neither closure file changes controller behavior
or enhanced layout rules.

## QA Verification

**Result: PASS**

### Targeted → edge → component → package ladder

| Level | Command / method | Result |
| --- | --- | --- |
| Focused closure stories | `yarn test:storybook ... -t 'No script — forced colors\|Reduced Motion\|Motion isolation\|Html Parity'` | PASS — 4 passed, 32 skipped |
| Forced-color layout sweep | Direct Playwright, trusted Tab, 320/768/1280/1920 | PASS — 20/20 links, 6px visible extent, no clipping/overlap |
| Direct preview | Real Storybook iframe with console/page listeners | PASS — true marker/query, 0s/auto, finished, zero errors |
| Same-page cleanup | Storybook channel switch | PASS — false query, no marker, 0.62s transition, zero errors |
| Charter suite | `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx` | PASS — 36/36 |
| Package suite | `yarn test:storybook` | PASS — 11 files, 275/275 |
| ESLint | scoped story file | PASS |
| Stylelint | production and Storybook Charter SCSS | PASS |
| Package build | `yarn build` | PASS — 15 modules and expected CSS/ES artifacts |
| Closure scope/whitespace | `git diff` and `git diff --check e6c839df1..e64140056` | PASS — two planned files only, no whitespace errors |
| JS/JSX/data/fixture isolation | diff from `b4eb7152a` over locked files | PASS — empty |
| Production leakage | built-artifact marker search | PASS — no Storybook marker in `dist` |

Existing Sass/Bootstrap and module-type deprecation warnings remain pre-existing
and non-blocking. The package suite passed on the first independent closure run.

## Code Quality

**Assessment: GOOD**

1. **Correctness:** The system-color outline restores a real forced-colors focus
   indicator without changing ordinary or enhanced behavior.
2. **Structure:** Production CSS remains narrowly fallback-scoped; the direct
   preview branch separates universal assertions from automation-only actions.
3. **Naming/readability:** `focusPaint`, `assertLinkFocusClearance`, and
   `trustedTab` make the observable and test intent explicit.
4. **Lifecycle/error handling:** Media setup and cleanup remain idempotent and
   exact; the direct preview no longer treats unavailable automation as an
   application failure.
5. **Organization/scope:** The closure touches two approved files, adds no API,
   dependency, markup, data, controller, or Webspark change, and is reversible.
6. **Documentation:** The locked design, closure table, implementation evidence,
   independent measurements, and commit scope now agree.
7. **Testing/testability:** Tests use trusted keyboard input, real computed
   system-color paint, actual paint extent, circle geometry, direct-preview
   error listeners, Vitest pointer interaction, and same-page cleanup. No
   test-only production seam was added.

The shadow parser conservatively measures every CSS shadow ring and combines it
with visible outline extent. This is appropriate for clearance assertions and
correctly yields 4px for ordinary focus and 6px for forced-color focus.

## Assessment: APPROVED

The no-script / reduced-motion follow-up is approved. Both review findings are
closed with browser-observable, regression-sensitive coverage; geometry and
enhanced choreography remain unchanged; direct preview and Vitest each follow
their intended capability path; cleanup and bundle isolation hold; and the
complete available component/package verification is green. The final evidence
commit may proceed.
