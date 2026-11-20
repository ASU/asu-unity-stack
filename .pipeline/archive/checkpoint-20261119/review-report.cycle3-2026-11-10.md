# Review Report — Charter Bubbles (WWWCMS-238)

Date: 2026-11-10  
Review cycle: **3 of 3 (FINAL)**  
Architecture: `.pipeline/design-doc.md` (**LOCKED**)  
Verdict: **CHANGES_REQUIRED**

## Resolution Summary

Cycle 3 resolves the four cycle-2 blockers except for one remaining focus-envelope collision:

- Equivalent cloned `items` arrays and unrelated React parent rerenders preserve the open item and focused Close control.
- A real ordered-ID structural change tears down/rebinds safely; unmount removes initializer-owned state.
- Page-flow reservation remains exactly 444.78px. The 832px collision stage is visual-only and translates upward into the image overlap, with its bottom aligned to the approved flow boundary.
- Hover growth is suppressed for closed neighbors while another bubble is open, so the 180px control surfaces do not overlap.
- Exact-five/full-relationship/shell/nav preflight prevents malformed markup from being enhanced; its consumable fallback remains intact.
- Previously resolved cycle-1 work remains present: content-driven mobile growth, 44×44 links, constrained analytics forwarding, valid no-script behavior, exact closed/open parity, and bounded rest-state collision geometry.

## Final Finding

### [P2] The focus-outline envelope is still covered by the expanded bubble at 769px

The open layout uses an 832px visual stage, four 180px neighbor surfaces, and a centered 454px expanded surface (`_charter-bubbles.scss`, lines 21–23 and 244–323; `charter-bubbles-geometry.js`, lines 4–9). This leaves about 2px between each top/bottom neighbor surface and the expanded surface.

The focus indicator is a 3px outline with a 4px positive offset (`_charter-bubbles.scss`, lines 146–152), so its visual envelope extends 7px beyond the 180px surface. At the 769px boundary:

```text
top neighbor surface bottom       187.295px
top focus-outline outer bottom    194.295px
expanded surface top              189px
covered focus envelope              5.295px
```

The bottom neighbors have the symmetric 5.295px collision. Because the expanded item has `z-index: 10` and closed neighbors remain at `z-index: 1` (lines 68–76 and 104–106), the expanded bubble paints over that portion of the focus ring.

The current geometry helper records only `neighborEmphasisSize = 180`, and the rendered story checks `getBoundingClientRect()` plus `outlineStyle` (`charter-bubbles.stories.jsx`, lines 341–439). CSS outlines are excluded from `getBoundingClientRect()`, so those tests cannot detect the covered envelope. This does not satisfy the final-review requirement that control/expanded overlap be absent including hover/focus envelopes, nor the locked requirement for a reliably visible focus indicator.

**Required fix:** provide at least the full outline-envelope clearance while keeping the 444.78px flow reservation. For example, increase only the visual stage height to at least 843px and translate the additional height upward, or use an equally visible non-overlapping focus treatment for neighbors while open. Extend the pure geometry model and rendered assertions to include outline width + offset, not only the control border box, for every neighbor/slot at 769, 1280, and 1920px.

## Final Validator Evidence

- Public React structural-lifetime finite reproduction: **PASS**.
  - Open/focus established.
  - Equivalent cloned array preserved `employability` and Close focus.
  - Ordered-ID change rebound to closed state, restored safe front focus, and re-enhanced.
  - Unmount removed `data-enhanced`/`.is-enhanced`.
- Static preflight finite reproduction: **PASS**.
  - Valid fixture enhanced.
  - Missing-Close fixture remained unenhanced; source inspection confirms exact-five, relationship, hierarchy, and nav checks.
- 444.78px flow reservation/upward stage: **PASS** by source and geometry inspection.
- 180px hover surface suppression while open: **PASS** by source inspection.
- Focus-outline envelope: **FAIL** by deterministic geometry calculation above.
- `yarn lint` in `packages/components-homepage`: **PASS** (final reviewer rerun).
- `yarn build` in `packages/components-homepage`: **PASS** (final reviewer rerun; 300ms).
- `yarn build-storybook` in `packages/components-homepage`: **PASS** (final reviewer rerun; 18.8s, existing warnings only).
- Static Storybook catalog: **PASS**, 33 Charter stories present.
- `git diff --check`: **PASS**.
- Browser Storybook plays and automated accessibility suite: **NOT VERIFIED** because of the documented localhost/runner restriction; not retried.
- Storybook MCP, root monorepo build, manual assistive-technology, 200%/400% zoom, touch, and photographic-background contrast checks remain outstanding.

## Source-Control and Scope Check

- No push, commit, branch, or pull request was created by review.
- Review made no implementation-source edits; its temporary finite-test file was removed.
- Pre-existing `.gitignore` and `.intake/initial prompt.md` changes remain outside this implementation and were not altered.

## Final Verdict

**CHANGES_REQUIRED.** No P1 blocker remains, and the implementation is otherwise materially aligned with the locked architecture. However, the final explicit focus-envelope requirement still fails at the 769px boundary. This is review cycle 3 of 3, so the adversarial review limit is exhausted with one unresolved P2 accessibility/geometry blocker. The component must not be reported as approved or pushed in its current state; resolving it requires a new authorized correction/review pass outside this completed three-cycle loop.
