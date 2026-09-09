# AGENTS.md — ASU Unity Design System

Tool-agnostic guidance for AI coding agents working in this repository. This is
the canonical entry point; it complements (does not replace) the human `README.md`
and `CONTRIBUTING.md` and the tool-specific docs linked under
[Further reading](#further-reading).

## Project overview

- **Lerna + Yarn Workspaces monorepo** containing ASU's design system packages.
- Node `24.13.1` / Yarn `4.17.0` (pinned via Volta).
- `dev` is the main branch for this repo.
- Packages under `packages/`:
  - `unity-react-core` — foundational React component library; other packages
    depend on it. **Check here first.**
  - `unity-bootstrap-theme` — Bootstrap 5-based CSS/SCSS foundation (built with
    Vite); source of brand tokens and utilities.
  - `shared` — common hooks, services, types.
  - `app-degree-pages`, `app-rfi`, `app-webdir-ui` — application packages.
  - `component-events`, `component-news`, `component-header-footer` — components
    (`component-header-footer` uses styled-components and does **not** depend on
    the theme).
  - `static-site` — unified docs/site build.

## Setup

```bash
# Auth: @asu packages publish to the GitHub Package Registry, not npm.
# Create .env.yarn with GITHUB_AUTH_TOKEN=... (see .env.yarn.example).
yarn install
yarn build          # builds unity-react-core first, then the rest; runs lint
```

### Local development

```bash
cd packages/<package-name>
yarn storybook      # Storybook is the primary development environment
```

## Build, test, and lint commands

```bash
yarn build          # ordered build (unity-react-core first) + lint (prebuild)
yarn lint           # lerna run lint across packages
yarn test           # unit tests (lerna run test)
yarn test:accessibility   # a11y tests
yarn test:e2e       # Jest + Puppeteer e2e
```

- **Build order matters**: `unity-react-core` must build before dependents;
  `yarn build` enforces this and runs lint in its `prebuild` step.
- React packages emit multiple formats to `dist/` (`.umd.js`, `.es.js`, `.cjs.js`);
  UMD builds are consumed by the Webspark 2 CMS.

## Code style & conventions

- **Prefer TypeScript** for new or modified components in `unity-react-core`. If
  you must edit a `.js` file there, tell the user it should be migrated to
  TypeScript and ask before converting.
- Document props with JSDoc TypeScript comments (surfaced in Storybook + MCP docs).
- Use Bootstrap utility classes from `unity-bootstrap-theme` before writing custom
  CSS. Exception: `component-header-footer` uses styled-components.
- Preserve Google Analytics integration (`trackGAEvent` / `GaEventWrapper`,
  pushing to `window.dataLayer`) when modifying components.
- Add dependencies from within the target package: `cd packages/<pkg>` then
  `yarn add <package>`.
- Conventional commits; versioning/publishing is automated via semantic-release.
  Use `yarn commit` (commitizen) to author compliant messages.

## Storybook MCP

Each component package runs a Storybook dev server exposing an MCP endpoint (see
`.github/copilot-instructions.md` for the port table). Before building UI, use
`list-all-documentation` / `get-documentation` to discover and reuse existing
components; after generating UI, write stories and run `run-story-tests`.

## Further reading

- [`README.md`](README.md) — full human-oriented project documentation.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — contribution workflow.
- [`.github/copilot-instructions.md`](.github/copilot-instructions.md) — detailed
  architecture, build quirks, CI/CD (Jenkins), Storybook MCP port table, and
  conventions.
- [`.github/instructions/unity-react-core.instructions.md`](.github/instructions/unity-react-core.instructions.md)
  — component library specifics.
- [`.kiro/README.md`](.kiro/README.md) — the Stage A adversarial coding pipeline.

> Monorepo note: this repository intentionally uses a single root `AGENTS.md`.
> Per-package specifics live in each package's own docs and in the instruction
> files linked above.
