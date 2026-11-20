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
