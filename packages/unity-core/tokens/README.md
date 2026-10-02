# UDS Design Tokens

Source of truth for the Unity Design System tokens, in
[W3C DTCG](https://design-tokens.github.io/community-group/format/) JSON format
with an agent-consumable metadata layer. Everything downstream is **generated**
from these files — never edit the outputs by hand.

```
tokens/*.json  (DTCG source, this folder)
      │
      ▼  yarn build:tokens  (validates, then Style Dictionary)
  ├── src/global/tokens.css              --uds-* custom properties (runtime,
  │                                      Lit/Shadow-DOM theming contract)
  └── src/global/generated/_tokens.scss  $uds-* variables (compile-time bridge
                                         for legacy Bootstrap/SCSS consumers)
```

> **Status: values are provisional.** Token *values* mirror the unity-core
> prototype and are pending final confirmation by the Brand team
> (UDS-2268 / UDS-2275). Do not align values to Figma or to the legacy SCSS
> theme until Brand signs off — known divergences are documented in each
> token's `$description` and surfaced by `yarn tokens:check-figma`.

## Scripts

| Command | What it does |
|---|---|
| `yarn build:tokens` | Validates the source, then regenerates the CSS and SCSS outputs. |
| `yarn tokens:validate` | Enforces the token contract (see below). Fails CI on violations. |
| `yarn tokens:check-figma` | Diffs every `figmaVar`-linked token against the vendored Figma snapshot. Report-only; `--strict` exits 1 on drift. |

## Token contract

Validated by `scripts/validate-tokens.mjs` (formal shape in
`tokens.schema.json`):

- Tokens use DTCG keys: `$value`, `$type`, `$description`. Legacy
  `value`/`type` keys are rejected.
- Every token needs a `$description` and a `com.asu.uds.status`
  (`stable | experimental | deprecated`) — own or inherited from an ancestor
  group via `$extensions`.
- `$extensions["com.asu.uds"]` fields:
  - `figmaVar` — round-trip link to the Figma variable
    (`"Collection/Group/Name"`, resolved against `figma/figma-variables.json`).
  - `deprecatedAliases` — legacy SCSS/JS names the token replaces, so
    migration tooling and agents can map old → new.
  - `usage` / `avoid` — positive/negative guidance for choosing tokens.
- Pure references (`"{color.gray-1}"`) must resolve within the token set and
  are preserved as `var()` / `$uds-*` references in the outputs.

## Naming conventions (encoded in `style-dictionary.config.js`)

- `color.semantic.<role>.{light,dark}` → `--uds-color-<role>`, emitted on
  `:root, .uds-surface-light` (light values) and `.uds-surface-dark`
  (dark values). Wrap a region in `class="uds-surface-dark"` to re-theme it.
- `<path>.{desktop,mobile}` → `--uds-<path>`, desktop on `:root`, mobile
  inside `@media (max-width: 767px)` (only emitted when it differs).
- Everything else: `--uds-` + path joined with `-`
  (`color.gray-1` → `--uds-color-gray-1`).

## Figma connection

`figma/figma-variables.json` is a vendored snapshot of the Brand team's
**UDS Design Kit (web only)** variables (99 variables, 4 collections),
extracted for the UDS-2275 audit. It gives every `figmaVar` a resolvable
target and lets `tokens:check-figma` detect drift between code and design
without requiring Figma Enterprise API access.

Intended flow once Brand confirms the token set: designers maintain the
variables in Figma → export via Tokens Studio (or refresh this snapshot) →
this folder is updated → `build:tokens` regenerates all outputs. The
authoritative direction (Figma-leads vs. code-leads) is an open decision
tracked in the design-tokens proposal (§9).
