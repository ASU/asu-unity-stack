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

## Naming conventions

Agreed in UDS-2274 / UDS-2279. Use these rules for every new token.

### Tiers

| Tier | What it names | Example | May reference |
|---|---|---|---|
| **Primitive** | A raw value from the palette or scale. No meaning attached. | `color.gray-2`, `spacing.16` | Nothing (literal values only) |
| **Semantic** | A design decision: what the value is used for, including the object it styles. | `color.text.secondary`, `spacing.section.standard` | Primitives |
| **Component** (optional) | A value scoped to one component. | `color.button.primary.background` | Semantics only, never primitives |

- Components consume semantic tokens. Use a primitive directly only when no
  semantic token fits, and propose one instead.
- Component tokens are opt-in. Add one only when a component needs to diverge
  from the semantic layer; creating them is a design-system decision.
- We do not use the term "role" for semantic tokens, to avoid confusion with
  the ARIA `role` attribute.

### Name structure

```
<category>.<object>.<variant>.<state>
```

Drop the parts that do not apply. Examples:

| Token | category | object | variant | state |
|---|---|---|---|---|
| `color.gray-2` | color | — | gray-2 | — |
| `color.text.secondary` | color | text | secondary | — |
| `color.background.accent` | color | background | accent | — |
| `color.border.focus` | color | border | focus | — |
| `color.border.error` | color | border | error | — |
| `spacing.section.small` | spacing | section | small | — |

- **Component tokens** use the component as the object and add the property
  it sets: `<category>.<component>.<variant>.<property>`, for example
  `color.button.primary.background` or `color.button.primary.text`.
- **Semantic color tokens always name the object** they style: `text`,
  `background` or `border` (`color.text.link`, not `color.link`).
- **Spacing primitives are named by their pixel value** (`spacing.16` = 16px),
  matching the Figma variable names. They are never renamed or re-valued;
  when a decision changes, point the semantic token to another primitive.
- **Segments are lowercase kebab-case** (`on-contrast`, `link-visited`).
  The `.` is reserved as the path separator (DTCG), so it never appears inside
  a segment: no `spacing.1.5`.
- **Size variants** use `xs`, `sm`, `md`, `lg`, `xl`, `2xl`…; level variants
  use plain words (`standard`, `small`).

### Categories

Top-level segment of every token. Do not add a new one without a team decision.

`color`, `font`, `spacing`, `radius`, `border`, `opacity`, `shadow`,
`transition`, `easing`, `breakpoint`

### Modes

Mode-dependent values are the last segment of the source path and are not
part of the token's public name:

- `<path>.{light,dark}` → `--uds-<path>`, emitted on
  `:root, .uds-surface-light` (light values) and `.uds-surface-dark`
  (dark values). Wrap a region in `class="uds-surface-dark"` to re-theme it.
- `<path>.{desktop,mobile}` → `--uds-<path>`, desktop on `:root`, mobile
  inside `@media (max-width: 767px)` (only emitted when it differs).

### Output names (encoded in `style-dictionary.config.js`)

`--uds-` (CSS) or `$uds-` (SCSS) + path joined with `-`:

| Token | CSS | SCSS |
|---|---|---|
| `color.gray-1` | `--uds-color-gray-1` | `$uds-color-gray-1` |
| `color.text.secondary` | `--uds-color-text-secondary` | `$uds-color-text-secondary-light` |
| `spacing.section.standard` | `--uds-spacing-section-standard` | `$uds-spacing-section-standard-desktop` |

SCSS variables are compile-time, so mode-dependent tokens keep the mode as a
suffix: `color.text.secondary.dark` → `$uds-color-text-secondary-dark`,
`spacing.section.standard.mobile` → `$uds-spacing-section-standard-mobile`.

### Legacy names

When a token replaces an existing SCSS or JS name (`$uds-color-base-gold`,
`TEXT_PRIMARY` in the header's `colors.js`), list it in
`deprecatedAliases`. That list is the old → new migration map (UDS-2278).
One legacy name can map to several semantic tokens, one per object it styles.

### Current state

The token files in this folder still use the prototype names
(`color.semantic.<role>`, `spacing.sm`, `border.color.*`). They will be
renamed to this convention once Brand confirms the token set in the
UDS-2274 report, together with the values (see the status note above).

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
