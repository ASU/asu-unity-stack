# Handoff Gate Checklist — Charter Bubbles (WWWCMS-238)

Verified: 2026-11-17

## Contract

- [x] Exactly one labelled ordered list contains five validated bubble items.
- [x] React and static markup use the same structural and accessibility contract.
- [x] Deterministic trigger, panel, and heading relationships are preserved.
- [x] The shared initializer enhances both render paths.
- [x] `HtmlParity` compares the enhanced React and static contracts.
- [x] The parity story is available under the collapsible Storybook Tests group.
- [x] The no-script contract leaves details and links visible and reachable.

## Responsive and interaction behavior

- [x] Carousel applies through 768px.
- [x] Cluster applies from 769px.
- [x] Carousel always has exactly one active/open bubble after every settled
  interaction and responsive transition.
- [x] Carousel Close controls are hidden, untabbable, and absent from the
  accessibility tree; cluster Close behavior remains intact.
- [x] The logical active item is preserved when crossing between carousel and
  cluster modes.
- [x] Desktop open/close, focus, Escape, and outside-click behavior is covered.
- [x] Carousel navigation, centering, focus activation, and edge disabling is covered.
- [x] Reduced-motion behavior is covered.
- [x] Invalid data, unsafe URLs, and malformed static contracts are covered.

## Verification

- [x] Package lint passes.
- [x] Package production build passes.
- [x] Storybook Vitest project passes: 14 files, 327 tests.
- [x] HTML parity passes within the Storybook Vitest project.
- [x] Charter-bubbles working tree is clean.
- [x] Unrelated monorepo working-tree changes are excluded from the handoff.

## Handoff boundary

- [x] Source branch: `WWWCMS-238`.
- [x] Verified commit: `e90f651f3`.
- [x] Stage B destination:
  `modules/custom/asu_edu_homepage/components/charter-bubbles/`.
- [x] No push is required from this handoff preparation step.
