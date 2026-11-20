# Handoff Summary — Charter Bubbles (WWWCMS-238)

Date: 2026-11-17  
Component: Charter Bubbles  
Jira Key: `WWWCMS-238`  
Package: `@asu/components-homepage`  
Status: **Carousel contract implemented and independently verified; commit pending**

## Current implementation

- One canonical five-item ordered list is shared by the React and static contracts.
- Desktop uses the cluster layout at 769px and above.
- Mobile and tablet use the carousel layout at 768px and below.
- Carousel mode always has exactly one active/open bubble. Close controls and
  all empty-state dismissal paths are cluster-only; carousel Close controls are
  hidden from view, focus, and the accessibility tree.
- The no-script presentation keeps all expanded content and links available.
- The HTML parity story compares the enhanced React render with enhanced
  Stage-B/Twig-shaped static markup using the normalized contract captured by
  `charter-bubbles.test-fixture.js`.
- The parity contract covers structure, hierarchy, deterministic ID
  relationships, classes, state hooks, ARIA, tab/inert state, content, links,
  navigation state, and approved analytics attributes. Only the caller-owned
  instance-ID prefix is normalized.

## HTML parity gate

The required `HtmlParity` story is present in
`charter-bubbles.stories.jsx` and is exposed in Storybook under
`Homepage/Charter bubbles/Tests/Html Parity` by
`charter-bubbles.tests.stories.jsx`.

Both renders must reach `data-enhanced="true"` before their captured contracts
are compared. This verifies the markup after the shared initializer has applied
its current runtime state, rather than comparing only unenhanced source HTML.

The shared DOM may retain cluster Close controls, but the enhanced carousel
contract must suppress them semantically and visually while preserving their
cluster behavior after a 768/769 mode change.

## Handoff files

Production and contract sources:

- `packages/components-homepage/src/components/charter-bubbles/CharterBubble.jsx`
- `packages/components-homepage/src/components/charter-bubbles/CharterBubbleCarousel.jsx`
- `packages/components-homepage/src/components/charter-bubbles/CharterBubbleCluster.jsx`
- `packages/components-homepage/src/components/charter-bubbles/CharterBubbles.jsx`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles-data.js`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.js`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles-geometry.js`
- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.test-fixture.js`

Storybook verification sources:

- `packages/components-homepage/src/components/charter-bubbles/_charter-bubbles.storybook.scss`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.stories.jsx`
- `packages/components-homepage/src/components/charter-bubbles/charter-bubbles.tests.stories.jsx`

Package integration:

- `packages/components-homepage/src/js/index.js`
- `packages/components-homepage/src/react/index.js`
- `packages/components-homepage/src/scss/components-homepage.scss`
- `packages/components-homepage/package.json`
- `packages/components-homepage/vite.config.js`

## Verification — 2026-11-17

| Gate | Result |
| --- | --- |
| `yarn lint` in `packages/components-homepage` | PASS |
| `yarn build` in `packages/components-homepage` | PASS |
| `yarn vitest run --project storybook` | PASS — 14 files, 327 tests |
| `HtmlParity` React/static contract comparison | PASS as part of the Storybook project |

The build reports existing Sass/toolchain deprecation notices; it introduces no
build failure.

## Repository state

The charter-bubbles files and the HTML parity restoration are committed on
`WWWCMS-238` at `e90f651f3`. The branch points to the same commit as
`origin/WWWCMS-238` at the time of this verification.

There are unrelated, unstaged modifications in other monorepo packages. They
are not part of this handoff and must not be staged or committed with
WWWCMS-238.

## Stage B target

Port the component as a Drupal Single Directory Component under:

`modules/custom/asu_edu_homepage/components/charter-bubbles/`

Do not place it in the `asu_edu` theme or the shared `asu_edu_components`
module.
