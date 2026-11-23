# @asu/unity-core

ASU Unity Design System web components — framework-agnostic, token-driven, accessibility-first. Part of the **UDS Code Kit**.

## What is this?

`unity-core` provides the foundational layer of web components for the ASU Unity Design System. These are native [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) built with [Lit](https://lit.dev/), consuming shared design tokens as CSS custom properties. They work everywhere — Drupal, WordPress, static HTML, React wrappers, or any framework.

> **Not published yet.** `package.json` has `"private": true`, so the release
> pipeline (`lerna exec --no-private … semantic-release`) skips this package.
> Remove that line when the team decides to publish it to GitHub Packages
> (`publishConfig` is already set).

## Quick Start

### Which files to load

| Site | Load | Do not load |
|---|---|---|
| Uses `unity-bootstrap-theme` (e.g. Webspark 2) | `tokens.css` + the components JS | `base.css`: the theme already sets the reset, font, text color and heading sizes; loading both makes them override each other depending on order |
| No `unity-bootstrap-theme` (static HTML, new apps) | `tokens.css` + `base.css` + the components JS | — |

The components never need `base.css`: everything they render comes from the
tokens. `tokens.css` only defines `--uds-*` custom properties, so it does not
change how existing theme markup looks.

### In Drupal/Twig (Primary Consumer)

Example library for a Webspark 2 module. Webspark 2 ships each UDS package as an
esbuild IIFE bundle committed to the module's `dist/` (see its
`scripts/build_react_bundles`); bundle `@asu/unity-core` the same way so it is
aggregated like the other UDS scripts (no `type: module` needed):

```yaml
# asu_unity_core.libraries.yml
unity-core:
  css:
    theme:
      dist/tokens.css: {}   # copied from node_modules/@asu/unity-core/dist/tokens.css
  js:
    dist/unity-core.min.js: { minified: true }   # IIFE bundle of @asu/unity-core
  # No base.css: renovation (unity-bootstrap-theme) already provides it.
```


```twig
{# Load the library in your .libraries.yml or component.yml #}
{# unity_core/unity-core.button #}

{# Use the web component directly in Twig — no markup recreation needed #}
<uds-button label="{{ label }}" color="default" href="{{ url }}"></uds-button>

{# Card with button #}
<uds-card heading="{{ heading }}" image="{{ image_url }}">
  <p>{{ body }}</p>
  <uds-button slot="actions" label="{{ cta_label }}" href="{{ cta_url }}" color="cta"></uds-button>
</uds-card>

{# Webspark 2 stores button styles as legacy classes; map them to the color attribute #}
{% set uds_color = {
  'btn-maroon': 'default',
  'btn-gold': 'cta',
  'btn-gray': 'neutral',
  'btn-dark': 'contrast',
}[link_style] ?? 'default' %}
<uds-button label="{{ label }}" href="{{ url }}" color="{{ uds_color }}"></uds-button>

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
      <uds-button label="Apply Now" color="default" href="/apply"></uds-button>

      <uds-card heading="Programs" image="/img/programs.jpg">
        <p>Explore 350+ degree programs.</p>
        <uds-button slot="actions" label="Browse" color="cta"></uds-button>
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
<link rel="stylesheet" href="@asu/unity-core/dist/base.css" />  <!-- only when unity-bootstrap-theme is not loaded -->
<script type="module" src="@asu/unity-core/dist/unity-core.js"></script>

<uds-button label="Hello" color="default"></uds-button>
```

### Button colors

`<uds-button color="…">` takes one name per color (Brand, ask 4: "one name = one
value"). Any other value falls back to `default` with a console warning.

| `color` | Looks like | Token | Legacy class (unity-bootstrap-theme / Webspark 2) |
|---|---|---|---|
| `default` | Maroon (gold inside dark sections) | `color.button.primary.*` | `btn-maroon` |
| `cta` | Gold | `color.button.secondary.*` | `btn-gold` |
| `neutral` | Gray | `color.button.gray.*` | `btn-gray` |
| `contrast` | Gray 1 (Gray 7 inside dark sections) | `color.button.tertiary.*` | `btn-dark` (labelled "Gray 7" in the WS2 link widget) |

Consumers that store the legacy class translate it once, as in the Twig example
above. The component does not accept the legacy names as aliases.

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
  --uds-color-background-accent: #8c1d40;
}
```

```html
<!-- Dark section (built-in): semantic tokens switch to their dark values -->
<section class="uds-surface-dark" style="background: var(--uds-color-background-primary)">
  <uds-button label="Apply now"></uds-button> <!-- primary button turns gold -->
</section>
```

Token names, tiers and pending Brand decisions: see [`tokens/README.md`](tokens/README.md).

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
