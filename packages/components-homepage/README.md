# @asu/components-homepage

Vanilla HTML/SCSS/JS foundations for the ASU homepage (Jira WWWCMS-227 / WWWCMS-230).

- **Private package** (`"private": true`, version `0.0.0`). It is never published to a registry.
- No React in shipped code. `@storybook/react-vite` is used only as the story renderer.
- Design tokens come from `@asu/unity-bootstrap-theme` (`src/scss/_custom-asu-variables.scss`); never copy token values.

## Layout

| Path | Purpose |
|---|---|
| `src/components/<piece>/` | One folder per foundation piece, with its SCSS partial, JS and stories side by side (see below) |
| `src/scss/components-homepage.scss` | SCSS entry; imports the UDS variables, `_variables.scss` and each piece's partial |
| `src/scss/_variables.scss` | Shared homepage variables and custom properties |
| `src/js/index.js` | JS entry; re-exports the public API (`initVideoControls`, `initReimagine`) |
| `src/img/` | Art copied unchanged to `dist/img/` |
| `tests/` | Playwright accessibility spec |

Pieces under `src/components/`:

| Folder | Contents |
|---|---|
| `underline-mark/` | `_underline-mark.scss`, `underline-mark.stories.jsx` (`Foundations/Underline mark`) |
| `backgrounds/` | `_backgrounds.scss`, `backgrounds.stories.jsx` (`Foundations/Backgrounds`) |
| `video-control/` | `_video-control.scss`, `video-control.js`, `video-control.stories.jsx`, `video-control-helpers.jsx` (`Foundations/Video control`) |
| `reimagine/` | `_reimagine.scss`, `reimagine.stories.jsx`, `reimagine-helpers.jsx` (`Homepage/Reimagine`): the "reimagining education for everyone" section, static HTML + CSS. Opt-in scroll entrance (removable): `reimagine.js` (`initReimagine`), the ENTRANCE block in `_reimagine.scss`, `reimagine-entrance.stories.jsx` (`Homepage/Reimagine entrance`). Link `href`s are placeholders until the real URLs exist (`#audience-<slug>` per row, `#reimagine-learn-more` for Learn more): each is a fragment that matches no element, because a bare `#` scrolls the page to the top on click |

Adding a piece: create `src/components/<piece>/`, add `_<piece>.scss` and `@import "../components/<piece>/<piece>";` in `components-homepage.scss`, and put `<piece>.stories.jsx` in the same folder (Storybook picks up `src/components/**/*.stories.jsx`).

In the SCSS partials, `url()` art paths are written relative to the SCSS entry (`../img/<file>`, i.e. `src/scss/`), not to the partial: Vite does not rebase `url()` in `@import`ed partials.

## Scripts

Run from `packages/components-homepage` or with `yarn workspace @asu/components-homepage <script>`.

| Script | What it does |
|---|---|
| `yarn build` | Builds `dist/` (`css/`, `js/`, `img/`) |
| `yarn storybook` | Storybook on <http://localhost:9050> (MCP at `/mcp`) |
| `yarn build-storybook` | Builds Storybook to `../../build/@asu/components-homepage` |
| `yarn lint` | ESLint + Stylelint |
| `yarn test:storybook` | Story `play` tests via `@storybook/addon-vitest` (headless Chromium); axe checks are off (`a11y.test: "off"` in `.storybook/preview.js`) |
| `yarn test:accessibility` | Playwright + Siteimprove Alfa audit (WCAG 2.1 AA) of the stories listed in `tests/stories-to-test.mjs` |

There is intentionally no `test` script: the root `yarn test` (Jenkins on every PR, `.husky/pre-push`) runs every package's `test` script.

The first run of `test:storybook` and `test:accessibility` needs Playwright's Chromium (`npx playwright install chromium`).

## Viewports

`.storybook/preview.js` defines 393, 768, 1024, 1280, 1440 and 1920 px viewports.
