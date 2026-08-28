# Priority 2: Lit Component Framework

**Goal:** Replace React+Bootstrap dual-render with Lit web components. Single render path. Universal interop.

## Why Lit

| Problem | How Lit Fixes It |
|---|---|
| Universal interop | Web components work everywhere |
| Dual render | One path -- component IS the web component |
| Environment mismatch | `connectedCallback()` self-initializes |
| Twig handoff | Twig outputs `<uds-*>` tag directly |
| React 19 UMD | No React dependency at all |

## Component Pattern

```ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('uds-button')
export class UdsButton extends LitElement {
  static styles = css`
    .btn {
      background: var(--uds-color-primary);
      color: var(--uds-color-on-primary);
      padding: var(--uds-spacing-2) var(--uds-spacing-4);
    }
  `;

  @property() label = '';
  @property() href = '';
  @property() color: 'primary' | 'secondary' = 'primary';

  render() {
    if (this.href) return html`<a class="btn" href=${this.href}>${this.label}</a>`;
    return html`<button class="btn" @click=${this._onClick}>${this.label}</button>`;
  }

  private _onClick() {
    this.dispatchEvent(new CustomEvent('uds-click', { bubbles: true, composed: true }));
    window.dataLayer?.push({ event: 'click', component: 'uds-button', label: this.label });
  }
}
```

## Shadow DOM + Theming

CSS custom properties pierce shadow DOM:
- Token-based theming works without config
- Surface classes on ancestors resolve inside shadow DOM
- No style leakage

## Migration Strategy (Incremental)

1. Simple atoms (Button, Divider, Alert)
2. Interactive atoms (Accordion, Modal, Tabs)
3. Molecules (Card, Hero, Banner)
4. Organisms (Header, Footer)

## Consumer Usage

```html
<!-- Drupal/Twig -->
<uds-button label="Apply Now" href="/apply" color="primary"></uds-button>

<!-- React -->
<uds-button label="Apply Now" href="/apply"></uds-button>

<!-- Static HTML -->
<script type="module" src="@asu/unity-core/uds.js"></script>
<uds-button label="Apply Now" href="/apply"></uds-button>
```

## Tasks

- [ ] Set up Lit project infrastructure (TypeScript, Vite)
- [ ] Configure @storybook/web-components
- [ ] Build Button + Accordion POC
- [ ] Create @lit/react wrapper generation
- [ ] Validate with Webspark team (SDC)
- [ ] Document authoring pattern
- [ ] Progressive migration

## Dependencies

- P1 (tokens must exist for components to consume)

## Effort

Large -- core of the project, spans several months
