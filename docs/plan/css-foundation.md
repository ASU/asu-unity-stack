# Priority 3: CSS Foundation -- Bootstrap Reduction + Tailwind

**Goal:** Replace Bootstrap utility bloat with Tailwind configured to UDS tokens.

## Strategy

| Keep (Bootstrap) | Remove | Replace (Tailwind) |
|---|---|---|
| Grid (transition) | Color utilities | Spacing |
| Resets/normalize | Unused components | Responsive |
| Base typography (transition) | Non-brand variants | Flex/grid layout |

## Tailwind Config (Brand-Constrained)

```js
export default {
  theme: {
    colors: {
      'primary': 'var(--uds-color-primary)',
      'secondary': 'var(--uds-color-secondary)',
      'surface': 'var(--uds-color-surface)',
      'on-surface': 'var(--uds-color-on-surface)',
    },
    spacing: {
      '1': 'var(--uds-spacing-1)',
      '2': 'var(--uds-spacing-2)',
      '3': 'var(--uds-spacing-3)',
      '4': 'var(--uds-spacing-4)',
      '5': 'var(--uds-spacing-5)',
      '6': 'var(--uds-spacing-6)',
    },
  },
};
```

## CSS Architecture Rules

1. Lit styles use `var(--uds-*)` -- never hardcoded
2. Tailwind ONLY with token values -- no defaults
3. Page-level layout uses Tailwind utilities
4. Component styles in Lit `static styles` (shadow DOM)
5. Surface context via CSS custom properties (pierces shadow DOM)
6. Bootstrap progressively removed
7. No Bootstrap color/button classes in new code

## Key Insight

Tailwind with CSS custom property values responds to surface context automatically. `bg-primary` on `.uds-surface-dark` resolves to gold.

## Tasks

- [ ] Define Bootstrap reduction plan
- [ ] Install and configure Tailwind with token values
- [ ] Migrate page-level layouts
- [ ] Remove unused Bootstrap SCSS
- [ ] Measure bundle size before/after
- [ ] Update lint rules

## Dependencies

- P1 (tokens define Tailwind config values)

## Effort

Medium -- 3-4 weeks foundation
