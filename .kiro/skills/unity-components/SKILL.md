---
name: unity-components
description: "Component/framework skill for the ASU Unity design system (Bootstrap 5 + React monorepo). Use when designing, building, or reviewing any Unity component. Covers the Storybook MCP discovery workflow, the unity-bootstrap-theme token system (_custom-asu-variables.scss), the HTML-parity requirement, TypeScript-first rules for unity-react-core, GA event preservation, and the build/lint/story-test validators."
---

# Unity Components (ASU Design System)

The component/framework reference for `asu-unity-stack` — a Lerna + Yarn
workspaces monorepo. `unity-react-core` is the foundational React library;
`unity-bootstrap-theme` provides the Bootstrap 5 + ASU token foundation.

## Reuse before you build (Storybook MCP)

Each package runs a Storybook with an MCP endpoint. **Discover and reuse existing
components before creating anything new.**

| Package | Storybook | MCP server |
|---|---|---|
| unity-react-core | `cd packages/unity-react-core && yarn storybook` | `asu-unity-react-core` (:9200) |
| unity-bootstrap-theme | `cd packages/unity-bootstrap-theme && yarn storybook` | `asu-unity-bootstrap-theme` (:9000) |
| app-degree-pages | …`yarn storybook` | `asu-app-degree-pages` (:9010) |
| app-rfi | …`yarn storybook` | `asu-app-rfi` (:9020) |
| app-webdir-ui | …`yarn storybook` | `asu-app-webdir-ui` (:9030) |
| component-events | …`yarn storybook` | `asu-component-events` (:9060) |
| component-header-footer | …`yarn storybook` | `asu-component-header-footer` (:9080) |
| component-news | …`yarn storybook` | `asu-component-news` (:9090) |

Workflow:
1. `list-all-documentation` on the relevant MCP server to find existing components.
2. `get-documentation` for props, variants, and usage before using one.
3. After building, `get-storybook-story-instructions` and write a story.
4. `run-story-tests` to validate interaction + a11y. Fix failures before done.
5. `preview-stories` to render inline.

Components live in `packages/unity-react-core/src/components/` (check here first).
Many components exist only as theme stories in
`packages/unity-bootstrap-theme/stories/` — check there too.

## Tokens: never hardcode

All design values come from the theme. Source of truth:
`packages/unity-bootstrap-theme/src/scss/_custom-asu-variables.scss`.

- Colors → `$uds-color-*` / `$asu-gray-*` (e.g. `$uds-color-brand-maroon`,
  `$uds-color-brand-gold`, `$uds-color-font-dark-base`). Never raw hex/rgb.
- Spacing → `$uds-size-spacing-*`. Font → `$uds-font-family-base`,
  `$uds-size-font-*`, `$uds-font-weight-*`. Breakpoints → `$uds-breakpoint-*`.
- If no variable exists, flag it rather than hardcoding:
  ```scss
  // TODO: No variable found in _custom-asu-variables.scss — confirm with design.
  ```
- Prefer Bootstrap 5 utility classes before writing custom CSS. Co-locate SCSS
  with the component and import from `unity-bootstrap-theme`.
- Exception: `component-header-footer` is standalone (styled-components, no theme).

## HTML-parity requirement (Storybook HTML addon)

Consumers (incl. Webspark) copy the rendered static HTML and use it with only the
compiled CSS — no React. So every component must render its **full, correct HTML
on first render**.

- No logic that hides/defers HTML on first render (`{cond && <El/>}` starting
  false, `null` on mount, `useEffect`-gated render).
- Prop-based conditional rendering IS allowed (absence driven by the consumer's
  own config): `{label && <span className="component-label">{label}</span>}`.
- Express interactive/stateful variants via CSS class toggles on
  always-present elements, not conditional mounting.
- Attribute-driven visibility (`aria-hidden`, `hidden`, `data-*`) is fine if the
  element exists in initial HTML. Animations are CSS/SCSS-driven.

Ask: "If a user copied the rendered HTML on load, is every meaningful element
present? Can interactive states be reproduced by toggling classes?"

## TypeScript-first (unity-react-core)

- Prefer TypeScript for new or modified components in `unity-react-core`.
- If modifying a `.js`/`.jsx` file in `unity-react-core`, tell the user it should
  be migrated to TS and ask before converting.
- Props documented via JSDoc TypeScript comments (surfaced in the MCP docs).
- Preserve `trackGAEvent` / `GaEventWrapper` (push to `window.dataLayer`) when
  editing existing components.

### JSDoc types must be catharsis-parseable (docs build gotcha)

`yarn build` runs a `docs` target (`jsdoc-to-markdown`) across packages. JSDoc
`@property`/`@param`/`@typedef` **type expressions** must use JSDoc/catharsis
syntax, NOT TypeScript arrow types. A TS callback type like
`{(index: number, paneData: Pane) => void}` fails the docs build with
`JSDOC_ERROR: Unable to parse a tag's type expression`. Use either:
- closure style: `{function(number, Pane): void}`, or
- a `@callback` typedef referenced by name.
This applies to shared `*-types.js` files even under `// @ts-check`.

## Validators (run before reporting done)

- `yarn build` — builds packages (also runs lint **and the `docs` target**).
  `unity-react-core` builds first. Watch for `JSDOC_ERROR` from bad type syntax.
- `yarn eslint` / `yarn stylelint` for the package.
- `run-story-tests` (Storybook MCP) — interaction + a11y.
- HTML-parity: confirm the HTML-addon snapshot matches the React render.
