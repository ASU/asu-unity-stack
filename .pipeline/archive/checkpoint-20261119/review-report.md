<!-- Review amendment: carousel choreography restoration, 2026-11-19 -->

## Spec Compliance

PASS. Logical B is selected from correction start without a null carousel state;
A closes/shrinks immediately, B's parent grows concurrently while its face stays
hidden/inert, horizontal correction starts concurrently, and B visually opens
only at the closed-front center-edge threshold. Settlement leaves one open item
and no transient markers. Recent hidden-Close and focus fixes remain intact.

## Adversarial Findings

No scoped P1/P2 findings. Independent Chromium sampling found balanced A/B width
exchange within 0.016px, threshold activation around 84px against the 90px
limit, stable document-relative vertical position, at least 15.29px sampled
face separation, no null logical IDs, no snap-back, and clean settlement across
320px/393px directions and input paths.

The P3 early-opening regression protection was strengthened: it records the
first B-open frame, proves correction has not settled, observes continued
scrolling, and captures `scrollend` before the controller handler with matching
capture-phase cleanup. This prevents a future wait-until-scrollend regression
from passing accidentally.

## QA Verification

- Focused charter Storybook: 36/36 passed.
- Final full package implementation run: 343/343 passed.
- ESLint, Stylelint, package build, and whitespace checks passed.
- A later broad run had unrelated Reimagine/Stories Grid failures that passed in
  isolated reruns; no charter test failed.
- Choreography stories passed at 320px and 393px.

## Code Quality

Logical/visual state separation remains localized to the existing transition
authority. Frame tests use observable classes, widths, scroll geometry, and
capture-phase events without arbitrary sleeps or production diagnostics.

## Assessment: APPROVED

The restored choreography and its regression coverage satisfy the approved
contract without breaking the recent carousel accessibility improvements.

---

<!-- Review amendment: always-open carousel cycle 2, 2026-11-19 -->

## Spec Compliance

PASS against the always-open carousel amendment and all four cycle-1 closures.

- Carousel retains one logical active/open bubble; all empty-state dismissal
  paths remain cluster-only.
- Carousel Close controls are hidden, untabbable, and `aria-hidden`; cluster
  restores their authored state.
- Keyboard selection uses the active link without panel tabindex residue.
- Pending link focus is generation-guarded and canceled when external focus
  intent supersedes it without canceling the carousel selection.
- Breakpoint focus transfers from a disappearing owned Close control to the
  preserved active link, while outside-owned focus remains unchanged.
- When a focused endpoint navigation control becomes disabled, focus moves to
  the remaining enabled navigation control.
- The design amendment and regression stories match these behaviors.

## Adversarial Findings

No remaining P1/P2 findings. Native Chromium independently verified external
focus retention, cluster-Close breakpoint transfer, outside focus preservation,
both endpoint transfers, and zero carousel Close nodes in the accessibility
tree. Controller lifecycle and queued-callback generation guards remain intact.

## QA Verification

| Check | Result |
| --- | --- |
| Focused charter Storybook | 34/34 passed |
| Targeted ESLint and Stylelint | Passed |
| Package build | Passed |
| Scoped whitespace validation | Passed |
| Native Chromium focus regressions | Passed |
| Carousel Close accessibility-tree exclusion | Passed |

Full package Storybook ran twice at 339/341. Only the unchanged Reimagine
Entrance Animation and Entrance Reduced Motion stories failed; their isolated
file passed 7/7. No charter test failed. Existing Sass/Storybook warnings remain.

## Code Quality

Focus ownership is separated from active selection, names describe the new
generation and transfer responsibilities, existing lifecycle guards and seams
are reused, and no geometry, transform, breakpoint, or reduced-motion invariant
changed.

## Assessment: APPROVED

All review findings are resolved. Approval is scoped to the carousel change;
the unrelated full-suite Reimagine caveat remains recorded.

---

<!-- Review amendment: always-open carousel cycle 1, 2026-11-19 -->

## Spec Compliance

The one-open invariant, carousel Close suppression, cluster restoration,
keyboard link focus, and HTML parity are implemented. Two focus cases require
correction before approval: interrupted pending keyboard focus and a responsive
change while the disappearing cluster Close control owns focus.

## Adversarial Findings

- **[P2] Pending keyboard selection steals focus after external intent.** A
  distant keyboard selection queues link focus; clicking an external control
  before correction settles focuses that control, but settlement later steals
  focus back to the active link. Cancel only the pending focus request when
  focus/pointer intent leaves; preserve carousel selection.
- **[P2] Cluster-to-carousel resize drops focus to `body`.** When the active
  cluster Close control owns focus and becomes hidden, transfer focus to the
  preserved active carousel link. Do so only when the component owned focus.
- **[P3] A focused endpoint navigation button becomes disabled and drops focus
  to `body`.** When focused Next/Previous becomes disabled at an endpoint, move
  focus to the remaining enabled navigation control; do not move it otherwise.
- **[P3] The design verification bullet still names superseded temporary
  focusability.** Update it to native active-link focus.

## QA Verification

Current implementation before fixes: focused Storybook 31/31, full package
338/338, targeted ESLint/Stylelint, build, and whitespace checks pass. Chromium
accessibility inspection exposes zero carousel Close controls. Independent real
browser checks reproduce both P2 issues and endpoint focus loss.

## Code Quality

The centralized empty-state prevention and hidden-control restoration are clear.
Existing browser seams can cover the missing focus ownership and responsive
cases without a new abstraction.

## Assessment: CHANGES_REQUIRED

Correct the focus ownership/responsive regressions and endpoint focus policy,
then rerun the affected and full verification ladders.

---

<!-- Review amendment: PR #1839 blockers 2 and 3, 2026-11-19 -->

## Spec Compliance

PASS against both approved amendments.

- Second-click dismissal is limited to an active cluster panel. Existing Close
  and front-trigger branches retain priority.
- Actionable descendants, including nested link content, are excluded through
  `closest(FOCUSABLE_SELECTOR)`.
- Static back-face clicks close through `transitionTo(null, { returnFocus: true })`;
  explicit trigger focus handles normal pointer focus moving to `body`.
- Carousel behavior is unchanged.
- `SecondClickCloses` covers panel, heading, and detail dismissal; closed
  classes/ARIA/inert state; returned focus; link activation; and carousel exclusion.
- The closed size remains 180px. `--hp-charter-emphasis` is the unitless
  `1.111111` ratio and the hover rule consumes it with
  `scale(var(--hp-charter-emphasis))`.
- Comments cite Jira clarification 2634628 and distinguish the Figma-aligned
  closed size from the prototype-derived hover.
- `HoverSizing` verifies the 180px base, approximately 200px native hover,
  a temporary 1.05 override producing 189px, restoration, unhover, and
  reduced-motion suppression.
- HTML parity and existing dismissal/navigation coverage remain present.

## Adversarial Findings

No P1 or P2 findings in the scoped changes.

Reviewed static targets versus nested actionable descendants, handler priority,
native link cancellation and propagation, pointer focus return, carousel
exclusion, transition completion, transform matrix extraction, ancestor-scale
isolation, custom-property consumption, and reduced-motion precedence.

The second-click branch does not cancel the event or stop propagation, preserving
native link behavior and delegated analytics. Its explicit focus return is
confined to the new dismissal path. The hover test uses the production rule and
restores its temporary property, motion fixture, and pointer state in `finally`.

The user-deferred URL-sanitizer blocker was outside this review's scope; this
approval does not declare it resolved.

## QA Verification

| Check | Result |
| --- | --- |
| Focused charter Storybook | 30/30 passed |
| Full package Storybook | 337/337 passed across 14 files |
| Targeted ESLint | Passed |
| Targeted Stylelint | Passed |
| Package `yarn build` | Passed |
| Scoped `git diff --check` | Passed |

The earlier Places and Reimagine failures did not reproduce in the independent
full-package rerun. No changes to those components were necessary. Storybook MCP
requests previously failed to return; the actual Chromium CLI suite supplies the
browser evidence. Existing Sass/Storybook warnings remain. Fresh Figma
measurements, manual screen-reader testing, 200% zoom, and Lighthouse were not
performed.

Previews:

- http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--second-click-closes
- http://localhost:9050/?path=/story/homepage-charter-bubbles-tests--hover-sizing

## Code Quality

1. **Structure:** Minimal delegated-handler addition and three-line CSS refactor.
2. **Naming:** Existing capability and state vocabulary is reused.
3. **Error handling:** No new asynchronous work or runtime failure paths.
4. **File organization:** Existing component and Tests story files are reused.
5. **Documentation:** Pointer-focus and size provenance comments are accurate.
6. **Testing:** Observable browser state and rendered CSS are tested without mocks.
7. **Testability/seams:** Existing Storybook and native-pointer helpers suffice.
8. **CSS invariants:** Geometry, flip transforms, breakpoints, and reduced motion
   remain intact.

## Assessment: APPROVED

Both scoped PR fixes satisfy their approved contracts. Independent final-state
validation passes, including the complete affected package suite.

---

<!-- Earlier review history retained below. -->

<!-- Review amendment: WWWCMS-238 charter-bubbles 16px typography, 2026-11-19 -->

## Spec Compliance

PASS against the approved typography amendment.

- `_charter-bubbles.scss` explicitly sets the base link, mobile detail/link,
  and unenhanced detail/link sizes to `$uds-size-font-medium`.
- Larger front labels and headings retain their existing sizes; icon sizes and
  controller geometry are unchanged.
- No layout, runtime, markup, dependency, or analytics changes were introduced.
- Story assertions inspect computed sizes for all five labels, headings,
  details, and links across the responsive and no-script stories.
- Long-content coverage verifies viewport fit, panel fit, and link/close
  separation for every expanded item.
- HTML parity and interaction regression coverage remain present and pass.

## Adversarial Findings

No actionable correctness or security findings.

Reviewed cascade overrides, visited links, computed font sizes versus animation
transforms, fallback selectors, active-item selection, and content clipping.
Although the font-size helper also checks hidden faces, actual open-face layout
is checked separately by the LongContent interactions.

An independent Chromium inspection at 320px reopened the long employability
fixture after animations settled:

- Heading: `20.258px`
- Body: `16px`
- Link: `16px`
- Panel `scrollHeight` and `clientHeight`: both `328`
- Zero non-space glyph rectangles crossed the circular clipping boundary

No spacing adjustment or geometry expansion was necessary.

## QA Verification

- Focused CLI Storybook suite: **28/28 passed**
- Full package `yarn test:storybook`: **335/335 passed across 14 files**
- Storybook MCP LongContent and NoScript: **passed**
- Targeted Stylelint and ESLint: **passed**
- Package `yarn build`: **passed**
- Scoped `git diff --check`: **passed**
- Actual 320px long-content glyph/circle inspection: **passed**

The first sandboxed CLI run could not bind localhost (`EPERM`); the approved
local retry passed. Existing Sass/Storybook configuration warnings remain.
Fresh Figma measurements, manual screen-reader testing, 200% browser zoom, and
Lighthouse were not performed. The root monorepo suite was not run for this
component-only CSS correction; the complete affected package suite and build
passed. Pre-existing unrelated reports and test-result directories were left
untouched.

## Code Quality

1. **Structure:** Four minimal font-size corrections; architecture retained.
2. **Naming:** Test helpers describe observable behavior.
3. **Error handling:** No new runtime failure paths.
4. **File organization:** Existing SCSS and Storybook files are reused.
5. **Documentation:** The obsolete small-font measurement comment was removed.
6. **Testing:** Real computed styles, all five items, fallback, narrow viewport,
   and regression interactions are covered without mocks.
7. **Testability/seams:** Existing Storybook/browser seams are reused.
8. **CSS invariants:** Positioning, transitions, sizing, responsive boundary,
   and focus behavior remain unchanged.

## Assessment: APPROVED

The change satisfies the 16px minimum using the canonical Unity token, with
rendered-content and full-package regression evidence.

---

<!-- Historical review retained below. -->

## Spec Compliance

Review target: `7d823cb2b09a75f3836b4e9dcd85db7b0217a870` on `WWWCMS-238`. The component source and Storybook registry are clean in the working tree. The only scoped pipeline edit is the permitted unstaged `.pipeline/impl-report.md`.

- [PASS] **Original P1-1, closed descendants are untabbable.** `syncRecord` applies `aria-hidden`, `inert`, and `tabindex="-1"` to every focusable descendant of every closed panel, independent of native `inert` support, and restores authored tabindex values on open/teardown. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:854-897`. The interaction story asserts all closed panel links/buttons before opening and all non-active panels after opening. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx:797-837`.
- [PASS] **Original P1-2, opening focuses Close.** Opening synchronizes the open record before queuing a guarded animation-frame focus on the labelled Close button; the callback is controller-owned and cancelled at teardown. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:914-970`. The story asserts the active Close button owns focus. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx:807-842`.
- [PASS] **Original P1-3, the carousel has Close, Escape, and outside-close paths.** The mobile rule exposes the 44px Close button for an open/opening item while hiding only closed-item Close buttons. `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss:396-418`. Root-click, Escape, and document-outside handlers permit a carousel transition to empty and call the carousel dismissal notification where applicable. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:987-994`, `1020-1042`, `1060-1079`. Carousel Escape is exercised by the interaction story. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx:1169-1173`.
- [PASS] **Prior P1-A, default React instances have component-safe IDs.** The React fallback derives a sanitized per-instance `useId()` value while preserving a valid caller prefix. `packages/components-homepage/src/components/charter-bubbles/CharterBubbles.jsx:82-100`. `TwoDefaultInstances` verifies no duplicate IDs within both component roots and that each `aria-controls` reference resolves inside its own root. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx:1392-1439`.
- [PASS] **Prior P1-B, a breakpoint change preserves the logical open item.** Responsive mode switching no longer closes the item; entering carousel only supplies the first item when no item is open. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1123-1154`. The 768px to 769px and return assertions preserve `faculty` and exactly one open item. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx:1176-1211`.
- [PASS] **Prior P1, StoryFrame probe IDs are unique under nested/multiple composition.** `StoryFrame` derives both probe IDs and fragment links from `idPrefix`. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx:58-84`. The two-instance story supplies distinct prefixes. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx:1401-1408`.
- [FAIL] **New P1, a deferred gesture selection can reopen after an explicit dismissal.** The post-cancel fix suppresses a pending selection and later `scrollend`, but it does not invalidate a `deferredSelection` that has already reached `finishPending`. That branch clears `deferredSelection` and schedules `shift()` in the next animation frame. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1762-1789`. If Escape or outside-click occurs after that scheduling but before the frame, `notifyDismissed()` marks the carousel empty but only clears `pendingSelectionItem`; it does not invalidate the scheduled deferred shift. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1607-1620`. The queued `shift()` then calls `startCorrection()`, which clears `explicitlyEmpty`, creating a new pending selection that can open after dismissal. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1622-1648`. This violates the locked explicit-dismiss behavior for the gesture -> scrollend -> Escape/outside ordering. The current regression story covers navigation-created pending selection, not this deferred gesture/rAF ordering. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx:1511-1563`.
- [PASS] **One-list React/static composition and complete first render.** `CharterBubbles` nests Cluster > Carousel > one labelled `<ol>` and maps the five resolved items once. `packages/components-homepage/src/components/charter-bubbles/CharterBubbles.jsx:158-185`. Each item includes both front and back faces in the first render. `packages/components-homepage/src/components/charter-bubbles/CharterBubble.jsx:49-118`. Static preflight rejects an incomplete/non-single contract before enhancement. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:367-425`.
- [PASS] **Deterministic IDs, exact-five fallback, URL allowlist, and constrained analytics forwarding.** IDs are constructed from validated instance and item tokens. `packages/components-homepage/src/components/charter-bubbles/CharterBubble.jsx:39-45`. The data validator enforces five complete, unique safe records and React falls back to reviewed defaults on invalid custom data. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles-data.js:106-153`; `packages/components-homepage/src/components/charter-bubbles/CharterBubbles.jsx:46-58`. The URL sanitizer rejects scheme-relative URLs before local paths and permits only the locked URL categories. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles-data.js:49-73`. Analytics forwarding accepts only serializable `data-ga-*` keys and values. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles-data.js:82-98`; `packages/components-homepage/src/components/charter-bubbles/CharterBubble.jsx:64-106`.
- [PASS] **ENHANCED-vs-ENHANCED HTML parity.** The parity story waits for both React and static roots to carry `data-enhanced="true"` before comparing normalized contracts. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx:164-179`. Contract capture includes enhanced/layout/open state, structure, ARIA, IDs, tabindex, inert, controls, and analytics. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.test-fixture.js:104-260`.
- [PASS] **Geometry Reconciliation — note.** The required subsection is present and documents the 635.78x366.19/194.59 measured values versus the 600x400/180 as-built SCSS values, with acp-visual as the final acceptance authority. `.pipeline/design-doc.md:330-354`. The as-built values are named custom properties with token/design TODOs. `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss:5-19`. Per the approved reconciliation, this is not a P1 spec failure.
- [PASS] **Collision Reconciliation — note.** The required subsection is present, explicitly permits the bounded deterministic relaxation/candidate search pending downstream visual acceptance, and identifies authored slot maps as the future remediation if acp-visual rejects a case. `.pipeline/design-doc.md:356-400`. The solver has a fixed 60-pass bound and a finite candidate search. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1-20`, `669-846`. Per the approved reconciliation, this is not a P1 spec failure.

## Adversarial Findings

- [P1] **Deferred gesture settlement survives explicit dismissal.**
  File: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1762-1789`, `1607-1648`
  Attack: Start a touch/pointer pan, release it so `deferredSelection` is set, dispatch/receive `scrollend`, then press Escape or click outside before the requestAnimationFrame scheduled by the deferred branch runs.
  Impact: `notifyDismissed()` sets `explicitlyEmpty`, but the already-queued `shift()` still invokes `startCorrection()`, resets `explicitlyEmpty` to `false`, and later opens the selected bubble. This is a post-dismissal reopen through the deferred-selection path, outside the navigation-pending scenario covered by the new commit.
  Fix: Add a dismissal generation/token or invalidate and clear deferred-selection state in `notifyDismissed()` and `cancelPendingSelection()`. Capture that generation before scheduling `shift()` and return from the callback unless it still matches. Add a Storybook regression for gesture -> scrollend -> Escape/outside before the next animation frame, followed by the delayed scroll fallback and `scrollend`.

- [P2] **Horizontal wheel after an explicit empty state remains suppressed until a different input path clears it.**
  File: `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1860-1870`, `1894-1902`, `1932-1959`
  Attack: Explicitly close the active mobile item, then use a horizontal/Shift+wheel gesture rather than pointer/touch drag, direct bubble activation, or Previous/Next.
  Impact: `explicitlyEmpty` is cleared by `beginGesture()` and `startCorrection()`, but the wheel path does neither before calling `preventDefault()`. With no open item it returns without selection, leaving the flag true and consuming that horizontal wheel input. A later pointer/touch/nav interaction recovers, so this is not permanent or P1, but it contradicts the stated "new ... gesture" recovery behavior.
  Fix: Treat the first eligible wheel session as a new gesture by clearing `explicitlyEmpty` before `preventDefault()`, and define the empty-state wheel selection policy explicitly. Cover close -> horizontal wheel -> expected scroll/selection in a story.

- [P3] **The successful navigation-pending cancellation path is otherwise bounded and cleaned up.** `cancelPendingSelection()` clears timer, pending focus, correction flags, and opening class. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1584-1595`. `finishPending()` suppresses the ordinary post-cancel scroll/scrollend path. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1747-1757`. Controller cleanup clears timers, pending references, correction state, and queued sync frames. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:2041-2063`. The unresolved issue is specifically the previously queued deferred rAF, not a general timer/resource leak.

- [P3] **No analytics double-fire found by static inspection.** The component forwards approved attributes only; it does not call `dataLayer.push`, replace interactive nodes, or add a second analytics listener. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles-data.js:82-98`; `packages/components-homepage/src/components/charter-bubbles/CharterBubble.jsx:56-106`.

## QA Verification

Yarn was unavailable in this reviewer shell. Per the required fallback protocol, no Phase 3 command is reported as an exit-127 test failure.

- [DEFERRED — environment: yarn unavailable in reviewer shell] `yarn lint` from `packages/components-homepage`.
- [DEFERRED — environment: yarn unavailable in reviewer shell] `yarn build` from `packages/components-homepage`.
- [DEFERRED — environment: yarn unavailable in reviewer shell] `yarn vitest run --project storybook` from `packages/components-homepage`.
- [DEFERRED — environment: yarn unavailable in reviewer shell] `yarn test:accessibility` from the repository root.

Yarn-availability probe output, verbatim:

```text
== yarn availability probe ==
yarn path: yarn exit: 127
== corepack fallback ==
corepack yarn exit: 127
== Volta fallback ==
Volta yarn exit: 126
== Yarn release fallback ==
release yarn exit: 127
```

```text
bash: line 3: yarn: command not found
bash: line 8: corepack: command not found
Volta error: Node is not available.

To run any Node command, first set a default version using `volta install node`
Error details written to /Users/stwilli2/.volta/log/volta-error-2026-11-18_16_50_24.148.log
bash: line 19: node: command not found
```

Coder Cycle 6 evidence, used only as the required environment substitute, reported: package lint and build PASS; Storybook Vitest 335 total, 333 pass, with only the permitted pre-existing non-Charter failures (`reimagine-entrance` and `rankings-cards` reduced-motion); accessibility audit Charter failures = **0** across all 33 registered Charter stories, with the permitted 24 non-Charter failures unchanged (rankings-cards 10, Quick Links 1, Stories Grid 6, Faculty Carousel 7). `.pipeline/impl-report.md`, “Cycle 6 — P1/P2 Fix-loop, close-out”, Validation results.

Static and shell-independent evidence collected in this review:

- [PASS] All 33 Charter audit IDs are present in `packages/components-homepage/tests/stories-to-test.mjs:154-194`, including `escape-and-outside-cancels-pending` and `scroll-edge-disabling`.
- [PASS] The Storybook test wrapper re-exports the excluded contract, focus, cancellation, forced-colors, multiple-instance, and edge-state stories. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.tests.stories.jsx:1-100`.
- [PASS] The current regression specifically waits past the 150ms fallback and then dispatches post-cancel `scrollend` for both Escape and outside-click navigation-pending paths. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx:1511-1563`.
- [PASS] Scoped working-tree `git diff --check -- packages/components-homepage/src/components/charter-bubbles packages/components-homepage/tests/stories-to-test.mjs` completed with no output and exit 0.
- [PASS] `git diff --check 24811a1b6..HEAD -- <Charter scope>` completed with no output and exit 0.
- [PASS] Scoped `git status --porcelain=v1` is clean for Charter source and `tests/stories-to-test.mjs`; it reports only the permitted unstaged `.pipeline/impl-report.md`. Other untracked package test-result/accessibility-report directories are outside Charter scope. The stale detached Nov-4 rankings-cards worktree was not treated as a regression.

The deferred QA substitute meets the environment exception for existing gates, but it cannot overturn the new P1 found by static adversarial inspection.

## Code Quality

- [P2] **Cancellation state is split across three partially overlapping reset paths.** `cancelPendingSelection()` and `notifyDismissed()` duplicate most reset work, while deferred selection is reset separately in `finishPending()`. `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1584-1620`, `1747-1789`. The omission of deferred-rAF invalidation is the P1 above. Fix the correctness defect with one explicit cancellation/reset routine or a generation guard, then keep the state ownership documented at that seam.
- [P3] **The carousel coordinator is necessarily complex but difficult to audit as one large module.** `charter-bubbles.js` contains lifecycle ledger, desktop collision solver, transition authority, responsive handling, carousel state machine, and initialization. The code has useful names and cleanup guards, but the cancellation-state variables span `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js:1282-1305` and event paths through `2063`. After the P1 is fixed, consider extracting the carousel state transition helpers without changing the public/static contract.
- [P3] **CSS quality is otherwise aligned with Unity conventions.** Theme tokens are used where available and unmatched measurements are named custom properties with TODOs. `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss:1-28`. Critical absolute desktop positioning and its mobile static override are co-located. `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss:39-79`, `277-364`. The reconciliation defers visual acceptance appropriately.

Final Verdict: CHANGES_REQUIRED
