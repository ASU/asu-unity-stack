# @asu/components-homepage

Vanilla HTML/SCSS/JS foundations for the ASU homepage (Jira WWWCMS-227 / WWWCMS-230).

- **Private package** (`"private": true`, version `0.0.0`). It is never published to a registry.
- No React in shipped code. `@storybook/react-vite` is used only as the story renderer.
- Design tokens come from `@asu/unity-bootstrap-theme` (`src/scss/_custom-asu-variables.scss`); never copy token values.

## Layout

| Path | Purpose |
|---|---|
| `src/scss/components-homepage.scss` | SCSS entry; imports the UDS variables |
| `src/js/index.js` | JS entry |
| `src/img/` | Art copied unchanged to `dist/img/` |
| `stories/` | Storybook stories (`*.stories.jsx`) |
| `tests/` | Playwright accessibility spec |

## Scripts

Run from `packages/components-homepage` or with `yarn workspace @asu/components-homepage <script>`.

| Script | What it does |
|---|---|
| `yarn build` | Builds `dist/` (`css/`, `js/`, `img/`) |
| `yarn storybook` | Storybook on <http://localhost:9050> (MCP at `/mcp`) |
| `yarn build-storybook` | Builds Storybook to `../../build/@asu/components-homepage` |
| `yarn lint` | ESLint + Stylelint |
| `yarn test:storybook` | Story `play` tests and axe checks via `@storybook/addon-vitest` (headless Chromium) |
| `yarn test:accessibility` | Playwright + Siteimprove Alfa audit (WCAG 2.1 AA) of the stories listed in `tests/stories-to-test.mjs` |

There is intentionally no `test` script: the root `yarn test` (Jenkins on every PR, `.husky/pre-push`) runs every package's `test` script.

The first run of `test:storybook` and `test:accessibility` needs Playwright's Chromium (`npx playwright install chromium`).

## Viewports

`.storybook/preview.js` defines 393, 768, 1280 and 1920 px viewports.
