# ASU Unity Design System - AI Coding Guide

## Architecture Overview

This is a **Lerna + Yarn Workspaces monorepo** containing ASU's design system packages. Key architectural patterns:

- **Package dependency hierarchy**: `unity-react-core` is the foundational React component library that other packages depend on
- **Theme system**: `unity-bootstrap-theme` provides Bootstrap 5-based CSS/SCSS foundation, built with Vite
- **Shared utilities**: `shared` package contains common hooks, services, and utilities used across components
- **Multi-output builds**: React packages generate UMD, ES, and CJS modules for different consumption patterns

## Critical Build Dependencies

**Build order matters**: `unity-react-core` must build first, then other packages. The build system enforces this via:
```bash
yarn build     # Builds packages in parallel. This also runs linting before building.
```

**Package registry**: All `@asu` scoped packages are published to GitHub Package Registry, not npm. Authentication via `.env.yarn` file with `GITHUB_AUTH_TOKEN`.

## Development Workflows

### Local Development
```bash
# Always start from project root
yarn install
yarn build
cd packages/[package-name]
yarn storybook  # Primary development environment
```

### Component Development Patterns
- **Component structure**: Each React component follows pattern: `ComponentName.jsx`, `ComponentName.stories.jsx`, `ComponentName.test.jsx`, `init.js`
- **Google Analytics integration**: Components use `GaEventWrapper` or custom `trackGAEvent` functions pushing to `window.dataLayer`
- **Styling**: Components use Bootstrap classes from `unity-bootstrap-theme`, custom styles via CSS modules or SCSS. The exception is `component-header-footer` which is meant to be a standalone package not dependent on the theme. It uses React and styled components for styling.

### Package Management
- **Adding dependencies**: Always `cd` into specific package directory first, then `yarn add [package]`
- **Version management**: Uses semantic-release with conventional commits for automated versioning
- **Multi-target builds**: React packages output to `dist/` with multiple formats (`.umd.js`, `.es.js`, `.cjs.js`)

## Project-Specific Conventions

### Component Props & Types
- All components use TypeScript JSDoc comments for prop documentation
- Shared prop types in `shared/types`
- Google Analytics data structure standardized across components

### Build System Quirks
- **Vite configs**: `unity-bootstrap-theme` uses separate configs for CSS (`vite.config.js`) and JS bundling (`vite.config.bundle.js`)
- **Bootstrap integration**: Theme package copies Bootstrap JS files to `dist/js/` during build
- **Storybook builds**: Generate to project root `/build/$npm_package_name` for unified documentation site

### Testing & Quality
- **Accessibility testing**: Playwright-based a11y tests in `unity-react-core`
- **Linting**: ESLint + Stylelint with project-specific configs in `@asu/shared`

## Integration Points

### Cross-Package Dependencies
- Components import shared utilities: `import { ... } from '@asu/shared'`
- Theme consumption: React packages reference Bootstrap variables and mixins
- Storybook integration: All packages use consistent Storybook configuration

### External Systems
- **Jenkins CI/CD**: Automated build, test, publish, and deploy pipeline (see below)
- **Unity Web Platform**: Deployed to `https://unity.web.asu.edu` for QA
- **CMS Integration**: UMD builds designed for Webspark 2 CMS consumption

## CI/CD Pipeline (Jenkins)

### Branch-Specific Workflows
- **PR to `dev`**: Builds storybook → deploys to S3 staging → adds PR comment with preview URL
- **Merge to `dev`**: Full pipeline: build → test → security check → publish packages → deploy to GitHub Pages → accessibility tests
- **`testing` branch**: Developer releases with package publishing

### Pipeline Stages
1. **Build**: `yarn install` → `yarn build` (using GitHub auth token)
2. **Security Check**: npm audit for critical/high vulnerabilities → Slack alerts on issues
3. **Test**: Jest tests via Playwright container
4. **Publish**: Packages published to GitHub Package Registry with semantic-release
5. **Deploy**: Storybook built and deployed to GitHub Pages (`unity.web.asu.edu`)
6. **Accessibility**: Playwright a11y tests → Slack alerts on failures

### Infrastructure
- **Kubernetes agents**: Node 24.13.1, Playwright, AWS CLI containers
- **S3 staging**: PR previews at `unity-uds-staging.s3.us-west-2.amazonaws.com/pr-{number}/`
- **Auto-cleanup**: Merged PR environments cleaned from S3 after 14 days or immediately after merging to dev branch (dev is main branch for this repo)
- **Slack integration**: `#prd-uds` and `#prdfam-uds-ci` channels for alerts

## Storybook MCP

This monorepo has Storybook MCP servers available for all component packages. When doing UI development, always use the MCP tools to find and reuse existing components before creating new ones.

### Available MCP servers

Each package runs its own Storybook dev server with an MCP endpoint. Start the relevant Storybook first, then use the corresponding MCP toolset:

| Package | Storybook command | MCP endpoint |
|---|---|---|
| `unity-react-core` | `cd packages/unity-react-core && yarn storybook` | `http://localhost:9200/mcp` |
| `unity-bootstrap-theme` | `cd packages/unity-bootstrap-theme && yarn storybook` | `http://localhost:9000/mcp` |
| `app-degree-pages` | `cd packages/app-degree-pages && yarn storybook` | `http://localhost:9010/mcp` |
| `app-rfi` | `cd packages/app-rfi && yarn storybook` | `http://localhost:9020/mcp` |
| `app-webdir-ui` | `cd packages/app-webdir-ui && yarn storybook` | `http://localhost:9030/mcp` |
| `component-events` | `cd packages/component-events && yarn storybook` | `http://localhost:9060/mcp` |
| `component-header-footer` | `cd packages/component-header-footer && yarn storybook` | `http://localhost:9080/mcp` |
| `component-news` | `cd packages/component-news && yarn storybook` | `http://localhost:9090/mcp` |

### Workflow

1. **Before building any UI**, use `list-all-documentation` on the relevant MCP server to discover available components.
2. **Before using a component**, call `get-documentation` to understand its props, variants, and usage patterns.
3. **After generating UI**, use `get-storybook-story-instructions` and write stories so the work can be previewed and tested.
4. **Run tests** using `run-story-tests` to validate interaction behavior and accessibility. Fix any failures before considering the task done.
5. **Preview work** using `preview-stories` to show live story renders inline.

### Key conventions for this codebase

- Components live in `packages/unity-react-core/src/components/` — this is the foundational library. Always check here first.
- Styles come from `unity-bootstrap-theme` (Bootstrap 5 + ASU brand tokens). Use Bootstrap utility classes before writing custom CSS.
- There are lots of components that arent yet in `packages/unity-react-core/src/components/`, also check `packages/unity-bootstrap-theme/stories/` for components that aren't in `packages/unity-react-core/src/components/`.
- The exception is `component-header-footer`, which uses styled-components and does not depend on the theme.
- All components use JSDoc TypeScript comments for prop documentation — these are surfaced in the MCP docs toolset.
- Always prefer typescript when creating any new components or updating any components in unity-react-core. Refactor only javascript files you modify in unity-react-core to typescript when you have to modify them but always ask user and let them know that this should be udpated to Typescript if they are modifying a javascript file in unity-react-core.
- Google Analytics events use `trackGAEvent` / `GaEventWrapper` — preserve these when modifying existing components.

## Key Files for Understanding Context
- `/packages/unity-react-core/src/components/` - Core React component patterns
- `/packages/unity-bootstrap-theme/src/` - Theme structure (CSS/SCSS + JS)
- `/packages/shared/` - Shared utilities and types
- `/nx.json` - Build dependency configuration
- `/lerna.json` - Monorepo package management settings
