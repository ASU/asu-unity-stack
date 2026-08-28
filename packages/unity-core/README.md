# @asu/unity-core

ASU Unity Design System web components — framework-agnostic, token-driven, accessibility-first. Part of the **UDS Code Kit**.

## What is this?

`unity-core` provides the foundational layer of web components for the ASU Unity Design System. These are native [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) built with [Lit](https://lit.dev/), consuming shared design tokens as CSS custom properties. They work everywhere — Drupal, WordPress, static HTML, React wrappers, or any framework.

## Quick Start

### In Drupal/Twig (Primary Consumer)

```twig
{# Load the library in your .libraries.yml or component.yml #}
{# unity_core/unity-core.button #}

{# Use the web component directly in Twig — no markup recreation needed #}
<uds-button label="{{ label }}" color="primary" href="{{ url }}"></uds-button>

{# Card with button #}
<uds-card heading="{{ heading }}" image="{{ image_url }}">
  <p>{{ body }}</p>
  <uds-button slot="actions" label="{{ cta_label }}" href="{{ cta_url }}" color="gold"></uds-button>
</uds-card>

{# Accordion from a Drupal field collection #}
<uds-accordion>
  {% for item in items %}
    <uds-accordion-item title="{{ item.title }}">
      {{ item.body|raw }}
    </uds-accordion-item>
  {% endfor %}
</uds-accordion>
```

### In React

Web components work directly in React (React 19+ has full CE support). Use the tags as-is:

```tsx
function MyPage() {
  return (
    <div>
      <uds-button label="Apply Now" color="primary" href="/apply"></uds-button>

      <uds-card heading="Programs" image="/img/programs.jpg">
        <p>Explore 350+ degree programs.</p>
        <uds-button slot="actions" label="Browse" color="gold"></uds-button>
      </uds-card>

      <uds-accordion>
        <uds-accordion-item title="Question 1">
          <p>Answer here.</p>
        </uds-accordion-item>
      </uds-accordion>
    </div>
  );
}
```

> **Note:** Import the component registration once at your app's entry point:
> ```ts
> import '@asu/unity-core';  // registers all <uds-*> elements
> ```

### In Static HTML (No Framework)

```html
<link rel="stylesheet" href="@asu/unity-core/dist/tokens.css" />
<link rel="stylesheet" href="@asu/unity-core/dist/base.css" />
<script type="module" src="@asu/unity-core/dist/unity-core.js"></script>

<uds-button label="Hello" color="primary"></uds-button>
```

## Selective Loading

Only ship what you use:

```ts
// Just the button
import '@asu/unity-core/button';

// Just the card
import '@asu/unity-core/card';

// Just the accordion
import '@asu/unity-core/accordion';
```

Each sub-path export registers only its component(s) and tree-shakes everything else.

## Components

| Component | Tag | Description |
|-----------|-----|-------------|
| Button | `<uds-button>` | Primary action element with link/button semantics |
| Card | `<uds-card>` | Content grouping with image, heading, body, actions |
| Accordion | `<uds-accordion>` | Collapsible content sections |

## Theming

Components consume CSS custom properties (design tokens) defined in `tokens.css`. Override them at any scope:

```css
/* Global override */
:root {
  --uds-color-primary: #8c1d40;
}

/* Dark surface (built-in) */
.uds-surface-dark {
  --uds-color-surface: #191919;
  --uds-color-on-surface: #ffffff;
}
```

## Development

```bash
# Start Storybook
yarn storybook

# Run unit tests
yarn test

# Run Playwright e2e tests
yarn test:e2e

# Build for distribution
yarn build

# Lint
yarn lint
```

## Storybook

Local: http://localhost:6008 (run `yarn storybook`)

## Architecture

- **Lit 3** — lightweight web component base class
- **CSS Custom Properties** — design tokens consumed at runtime, no build-time coupling
- **Shadow DOM** — style encapsulation with `::part()` escape hatches
- **ES Modules** — native module loading, tree-shakeable sub-path exports
- **Container Queries** — responsive component internals without page-level media queries

## Related

- [`@asu/unity-react-core`](../unity-react-core) — React wrappers around these web components
- [`@asu/unity-bootstrap-theme`](../unity-bootstrap-theme) — Legacy Bootstrap-based theme
- [UDS Design Guidelines](https://unity.web.asu.edu/)
