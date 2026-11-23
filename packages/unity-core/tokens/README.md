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

> **Status.** Token names and values follow the UDS Report (UDS-2274), with
> production (`unity-bootstrap-theme` on `dev`) as the base, and the UDS
> spacing guidelines v1 for semantic spacing. Tokens still waiting on Brand are
> `experimental` and say why in their `$description`; see
> [Pending Brand](#pending-brand). Known differences with Figma are surfaced by
> `yarn tokens:check-figma`.

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
- Every token needs a `$description`, a `com.asu.uds.status`
  (`stable | experimental | deprecated`) and a `com.asu.uds.tier`
  (`primitive | semantic | component`) — own or inherited from an ancestor
  group via `$extensions`.
- Tier rules: a primitive holds a literal value; a semantic token holds a
  literal or references a primitive; a component token references a semantic
  token. A component token may reference a primitive only with
  `primitiveRef: true` and a `$description` saying why (today:
  `button.padding.small.x` = 12px and `button.opacity.disabled`, which have no
  semantic token).
- `$extensions["com.asu.uds"]` fields:
  - `figmaVar` — round-trip link to the Figma variable
    (`"Collection/Group/Name"`, resolved against `figma/figma-variables.json`).
    Allowed on a token or on a mode group (`{light, dark}`,
    `{desktop, mobile}`, `{desktop, tablet, mobile}`); each leaf is compared
    with its own Figma mode. `tablet` has no Figma mode yet.
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
| `spacing.section.sm` | spacing | section | sm | — |

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
- **Size variants** use `xs`, `sm`, `md`, `lg`, `xl`, `2xl`…, with
  `standard` for the default size (`spacing.section.standard`,
  `spacing.padding.standard`), as in Figma.

### Categories

Top-level segment of every token. Do not add a new one without a team decision.

`color`, `font`, `line-height`, `letter-spacing`, `spacing`, `radius`,
`border`, `opacity`, `duration`, `breakpoint`, `container`, `grid`, `icon`,
`target-size`, plus component groups (`button`).

### Modes

Mode-dependent values are the last segment of the source path and are not
part of the token's public name:

- `<path>.{light,dark}` → `--uds-<path>`, emitted on
  `:root, .uds-surface-light` (light values) and `.uds-surface-dark`
  (dark values). Wrap a region in `class="uds-surface-dark"` to re-theme it.
  The section classes production already uses switch the tokens too, so
  existing Webspark 2 content works without migration: dark =
  `.gray-7-bg`, `.gray-dark-bg`, `.bg-dark`; light = `.white-bg`,
  `.gray-1-bg`, `.gray-2-bg`, `.bg-white`, `.bg-gray-1`, `.bg-gray-2`
  (`LIGHT_SURFACES` / `DARK_SURFACES` in `style-dictionary.config.js`). These
  rules only set `--uds-*` properties; they never paint a background. Use
  `.uds-surface-*` in new code.
  Why a class and not descendant selectors: the components use Shadow DOM,
  which outside selectors cannot reach; custom properties are inherited
  through it.
- `<path>.{desktop,tablet,mobile}` → `--uds-<path>`: desktop (≥992px) on
  `:root`, tablet inside `@media (max-width: 991.98px)`, mobile inside
  `@media (max-width: 575.98px)`, matching production's
  `media-breakpoint-down(lg)` / `down(sm)`. The tablet block comes first so
  mobile wins below 576px. An override is emitted only when it differs from
  the next larger breakpoint; a token without `tablet` uses its desktop value
  on tablet.
- A token that references a light/dark value (for example
  `color.button.primary.background` → `color.background.accent`) is declared
  in both the light and the dark block, so it switches inside
  `.uds-surface-dark` (custom properties resolve where they are declared).

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

Token names and values follow the UDS Report (UDS-2274), with production
values as the base. The prototype names (`color.semantic.<role>`,
`color.brand.*`, `spacing.sm`, `spacing.1…6`, `border.color.*`) were removed;
note that `spacing.4` now means 4px (it was an alias of 24px).

## Pending Brand

These tokens ship as `experimental` until Brand decides. The number is the ask
in the UDS Report (`docs/UDS REPORT.xlsx`, "Asks for Brand").

| Ask | Topic | What ships today |
|---|---|---|
| 1 | Tier names | `primitive / semantic / component`. Brand asked "Brand replaces primitive?": to confirm whether that means renaming the tier or adding a brand layer. The tier is metadata only; no token name depends on it. |
| 2, 3 | H1 desktop / H2 mobile line-height | Brand values (68px / 36px). Production keeps 72px / 40px until Brand decides to change it. |
| 9 | Status colors in dark | Figma values; the dark pairs are about 2:1 contrast until Brand defines dark status backgrounds. |
| 11 | The 4 Figma "Brand colors" | Functional names: `color.background.accent` (ASU Maroon), `color.background.highlight` (ASU Gold), `color.background.contrast` (ASU Black), `color.text.on-contrast` (ASU White). Figma rename tabled by Brand. |
| 13 | Production values missing in Figma | H1 article, H3–H5, letter-spacing, radius, `color.maroon-dark`, spacing 72–512. List: `docs/uds-2274-ask13-add-to-figma.xlsx`. |
| 14, 16, 22 | Semantic spacing | UDS spacing guidelines v1 (`docs/UDS SPACING GUIDELINES PROPOSAL.xlsx`), taken as final by the team because Brand did not respond. Tablet values need a Tablet mode in Figma. The hero keeps 64px (ask 22). `heading-paragraph` is 16px (production) vs 24px in Figma. |
| 21 | Header search color `#495057` | Approved by Brand (use Gray 2); still on `dev` in `component-header-footer`. Separate ticket, not done yet. |

Also deferred:

- `line-height.paragraph` (production: font-size + 8px) is not a single DTCG
  value, so it has no token yet.
- The Figma snapshot (`figma/figma-variables.json`, 2026-09-21) predates
  Brand's ask 7 update, so `color.text.secondary` (Gray 2) shows as a
  mismatch until the snapshot is refreshed.

Expected `yarn tokens:check-figma` mismatches, each a documented decision:
`color.text.primary`, `color.border.focus` and `color.background.contrast`
dark (Gray 7, ask 5); `color.text.inverse` light and dark (ask 12);
`color.text.on-contrast` dark (Gray 1, tertiary button); `color.text.secondary`
light (snapshot predates ask 7); `color.text.warning` light (`#BB4700`,
ask 10); `line-height.h2` mobile (36px, ask 3);
`spacing.paragraph.heading-paragraph` (16px, production).

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
