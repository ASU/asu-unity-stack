# Priority 4: Storybook Rewrite

**Goal:** Single Storybook using `@storybook/web-components`. One render mode.

## What Changes

| Before | After |
|---|---|
| Two Storybooks | One |
| Dual render mode | Single (web component) |
| eventSpy.js, reload hacks | Gone -- self-init |
| getBootstrapHTML() | Direct `<uds-*>` rendering |

## Story Pattern

```ts
import { html } from 'lit';
import './uds-button.js';

export default {
  title: 'Atoms/Button',
  component: 'uds-button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: { control: 'select', options: ['primary', 'secondary'] },
  },
};

export const Primary = {
  args: { label: 'Apply Now', color: 'primary' },
  render: (args) => html`<uds-button label=${args.label} color=${args.color}></uds-button>`,
};
```

## Docs Pages

Each component gets a custom MDX docs page (`uds-*.docs.mdx`) with:
- Interactive example + controls
- All stories
- **Framework Usage section** (separate, complete examples for HTML/Twig/React with all props)
- Auto-generated from component `tag` + `properties`

## Tasks

- [ ] Set up @storybook/web-components config
- [ ] Write stories per Lit component
- [ ] Create MDX docs pages with framework usage sections
- [ ] Remove legacy decorators
- [ ] Decommission unity-bootstrap-theme/.storybook/
- [ ] Update GitHub Pages deployment

## Dependencies

- P2 (stories written as components are migrated)

## Effort

Parallel with P2
