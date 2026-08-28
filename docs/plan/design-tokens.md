# Priority 1: Design Token System + Brand Governance

**Goal:** Single source of truth for design decisions. Figma-exportable, agent-readable, brand-governed.

## Token Source (JSON, Style Dictionary)

```
tokens/
├── colors.json
├── spacing.json
├── typography.json
├── radius.json
└── breakpoints.json
```

## Build Pipeline

```
tokens/*.json -> Style Dictionary -> css/tokens.css (CSS custom properties)
                                  -> js/tokens.ts (JS/TS constants)
                                  -> scss/_tokens.scss (bridge for migration)
                                  -> docs/tokens.md (auto-generated)
```

## Context-Aware Theming (Surfaces)

```css
:root, .uds-surface-light {
  --uds-color-primary: #8C1D40;
  --uds-color-secondary: #FFC627;
  --uds-color-surface: #ffffff;
  --uds-color-on-surface: #191919;
  --uds-color-on-primary: #ffffff;
}

.uds-surface-dark {
  --uds-color-primary: #FFC627;
  --uds-color-secondary: #ffffff;
  --uds-color-surface: #191919;
  --uds-color-on-surface: #ffffff;
  --uds-color-on-primary: #191919;
}
```

## Naming Convention

`uds-{category}-{group}-{variant}`

| Rule | Example | Why |
|---|---|---|
| Always prefix `uds-` | `uds-color-primary` | No collisions |
| Category first | `color-`, `spacing-`, `font-` | Autocomplete-friendly |
| Semantic over literal | `primary` not `maroon` | Survives rebranding |
| `on-` for contrast pairs | `color-on-primary` | Material Design pattern |
| States as suffix | `uds-color-primary-hover` | Filterable |

## Tasks

- [ ] Define token JSON files collaboratively with Brand team
- [ ] Set up Style Dictionary pipeline
- [ ] Create `yarn build:tokens` script
- [ ] Implement surface-aware theme generation
- [ ] Publish tokens as agent-consumable JSON
- [ ] Create Storybook token docs (auto-generated)
- [ ] Document naming conventions

## Dependencies

- Brand team alignment (charter requirement)

## Effort

3-4 weeks for foundation
