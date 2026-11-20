# Charter Bubbles Baseline Recovery — Final Review Report

Review date: 2026-11-19

Branch: `codex/WWWCMS-238-baseline-recovery`

Authoritative baseline: `e24e660e3` (November 13)

Reviewed implementation: `b4eb7152a`

Review cycle: 3 (final)

## Spec Compliance

**Result: PASS**

The recovery satisfies the locked design and all prior review findings are
closed. The final commit is test-only: `65861b0fd..b4eb7152a` changes only
`charter-bubbles.stories.jsx`. Independent diff checks confirm no production
JavaScript or SCSS changed after the approved runtime fix.

The `FocusLifecycle` story now encodes the two lifecycle guarantees separately:

1. It renders unenhanced static HTML and creates exactly one controller.
2. For teardown, it focuses a stable external start probe, queues cluster Close
   focus, tears down immediately, makes no later focus move, waits two frames,
   and verifies the probe still owns focus.
3. For external-focus supersession, it creates a fresh controller, queues the
   same focus, moves focus to a different external end probe without teardown,
   waits two frames, and verifies that focus is not overwritten.

The temporary `display: grid` applied after teardown only exposes the authored
Close button so stale focus remains observable after enhancement cleanup. It
does not create another controller, move focus, or affect production behavior.

### Staged commits

| Stage | Commit | Result |
| --- | --- | --- |
| Baseline marker | `ee578c5ba` | PASS |
| Preserve November 19 documents | `2c8a6d1d0` | PASS — 15/15 blobs previously verified |
| Minimum 16px text | `45ba5ebb0` | PASS |
| Cluster-only second-click dismissal | `79fa7e6af` | PASS |
| 180px→200px hover ratio | `fb206e0b0` | PASS |
| Focus ownership | `58f3043d8` | PASS |
| Pointer/lifecycle review closure | `65861b0fd` | PASS |
| Isolated teardown regression | `b4eb7152a` | PASS — test-only |
| Final evidence commit | pending by design | Ready after this approval |

No later checkpoint behavior was imported. Webspark/handoff code remains out of
scope. The November 13 carousel state, geometry, timing, temporary-empty state,
held-pan, swipe, threshold, and one-neighbor wheel choreography remain unchanged.

### Locked test matrix

| Requirement | Result | Evidence |
| --- | --- | --- |
| Archive preservation | PASS | 15/15 source blob hashes independently matched; final closure does not touch archive paths |
| Typography 320/768/769 and unenhanced | PASS | Prior direct Chromium review measured a 16px minimum in all modes |
| Cluster dismissal and native-action priority | PASS | Heading/panel/detail close; link remains actionable; Close retains priority |
| Carousel dismissal exclusion | PASS | Static panel/detail clicks do not close carousel bubbles |
| Hover/reduced geometry | PASS | Prior direct Chromium review measured 180→200 normal and 180 reduced |
| Pointer/keyboard focus | PASS | Pointer retains front focus; keyboard settlement focuses the native link |
| Teardown focus race | PASS | Isolated, single-controller, stable-owner committed regression |
| External focus race | PASS | Separate committed regression with a different external probe |
| Mutation sensitivity | PASS | In-memory removal of cleanup registration and active-controller guard caused stale Close focus and a `toHaveFocus` failure |
| Charter/package regression | PASS | 29/29 Charter independently rerun after final commit; package evidence remains 268/268 |

## Adversarial Findings

**No open P1, P2, or P3 findings.**

### Closure of the cycle-2 P2

The prior test-fidelity gap is closed. The teardown case no longer calls
`probe.focus()` after teardown and no longer adds a second controller to an
already enhanced React root. Its scheduled focus owner remains the start probe
through both animation frames.

The reviewer independently attacked mutation sensitivity without writing to
the repository. Playwright intercepted the browser module in memory and removed
both `controller.addCleanup(cancel)` and the `controller.active` guard. The
story then failed exactly at the teardown assertion: the start probe was
expected to retain focus, but `.hp-charter-bubble__close` received focus. The
unmodified focused story passed. This demonstrates that owner-change protection
cannot mask teardown cleanup failure anymore.

Prior findings remain closed:

- Real-pointer carousel selection does not inherit keyboard focus intent.
- Teardown and explicit external-focus changes invalidate queued focus.
- Typography boundaries, static-surface dismissal, carousel exclusion, painted
  hover geometry, and reduced-motion geometry are browser-observable tests.

No injection, unsafe-URL, cross-root ownership, analytics, dependency,
native-control nesting, or focusable-wrapper regression was found. Expanded
wrappers remain plain non-focusable `div` elements; Close and the hyperlink are
separate native controls.

## QA Verification

**Result: PASS**

### Targeted → edge → package → full available ladder

| Level | Command / method | Result |
| --- | --- | --- |
| Focused lifecycle | `yarn test:storybook ...charter-bubbles.stories.jsx -t 'Focus Lifecycle'` | PASS — 1 passed, 28 skipped |
| Mutation attack | Playwright in-memory module interception | PASS — mutation produced stale Close focus and assertion failure |
| Final Charter suite | `yarn test:storybook src/components/charter-bubbles/charter-bubbles.stories.jsx` | PASS — 29/29 |
| Story lint | `yarn exec eslint ...charter-bubbles.stories.jsx` | PASS |
| Final closure diff | `git diff --exit-code 65861b0fd..b4eb7152a -- ...charter-bubbles.js ...scss` | PASS — production unchanged |
| Whitespace | `git diff --check 65861b0fd..b4eb7152a` | PASS |
| Package browser suite | `yarn test:storybook` | PASS — implementation evidence 11 files, 268/268; cycle-2 reviewer independently reproduced 268/268 before the test-only closure |
| Scoped JS/SCSS lint and build | Commands from locked matrix | PASS in cycle 2; production unchanged |

The final Charter run includes the baseline `CarouselNavigation` coverage, so
the test-only closure did not disturb carousel behavior. Existing module-type
and Sass/Bootstrap deprecation warnings remain pre-existing and non-blocking.

## Code Quality

**Assessment: GOOD**

1. **Correctness:** Runtime focus ownership and lifecycle behavior match the
   locked contract and passed direct browser attacks.
2. **Code structure:** The owned focus scheduler remains localized and does not
   alter the baseline carousel state machine.
3. **Naming/readability:** Scheduler intent, expected owner, active link, start
   probe, and end probe names communicate their distinct roles.
4. **Lifecycle/error handling:** Cleanup, controller activity, focus ownership,
   and current-open-item guards provide layered stale-callback protection.
5. **File organization/scope:** The final closure modifies one focused story;
   no production, API, dependency, documentation archive, or handoff scope grew.
6. **Documentation:** The locked design, exact archive, isolated commit history,
   implementation closure tables, and final review evidence agree.
7. **Testing and seam quality:** The lifecycle story now uses one controller,
   independent teardown/external-focus cases, stable probes, real animation
   frames, and a mutation-sensitive observable. No test-only production seam
   was added.

CSS invariants remain intact: approved typography and unitless emphasis ratio,
reduced-motion suppression, and existing layout/overflow rules are unchanged.

## Assessment: APPROVED

The baseline recovery is approved. All runtime defects and test-fidelity gaps
are closed; production remains at the approved `65861b0fd` behavior; the final
commit adds only a mutation-sensitive lifecycle regression; and November 13
carousel choreography remains intact. The final evidence commit may proceed.
