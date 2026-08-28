import { html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { UdsBaseElement } from '../../core/base-element.js';

export type ButtonColor = 'primary' | 'secondary' | 'gold';
export type ButtonSize = 'default' | 'small';

/**
 * @tag uds-button
 * @summary A UDS button component that renders as `<a>` when href is provided, otherwise `<button>`.
 *
 * @fires uds-click - Dispatched on click with detail { label }
 *
 * @csspart button - The inner button or anchor element
 *
 * @cssprop [--uds-color-primary] - Primary brand color
 * @cssprop [--uds-color-secondary] - Secondary brand color
 * @cssprop [--uds-color-gold] - ASU gold color
 * @cssprop [--uds-spacing-xs] - Extra-small spacing
 * @cssprop [--uds-spacing-sm] - Small spacing
 * @cssprop [--uds-spacing-md] - Medium spacing
 * @cssprop [--uds-radius-sm] - Small border radius
 * @cssprop [--uds-font-weight-bold] - Bold font weight
 */
@customElement('uds-button')
export class UdsButton extends UdsBaseElement {
  /** Button label text */
  @property({ type: String })
  label = '';

  /** When set, renders as an anchor element */
  @property({ type: String })
  href?: string;

  /** Color variant */
  @property({ type: String, reflect: true })
  color: ButtonColor = 'primary';

  /** Size variant */
  @property({ type: String, reflect: true })
  size: ButtonSize = 'default';

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  static override styles = css`
    :host {
      display: inline-block;
    }

    :host([disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--uds-spacing-xs, 0.25rem);
      padding: var(--uds-spacing-sm, 0.5rem) var(--uds-spacing-md, 1rem);
      border: 2px solid transparent;
      border-radius: var(--uds-radius-sm, 4px);
      font-family: inherit;
      font-size: 1rem;
      font-weight: var(--uds-font-weight-bold, 700);
      line-height: 1.5;
      text-decoration: none;
      cursor: pointer;
      transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    }

    .btn:focus-visible {
      outline: 2px solid var(--uds-color-primary, #8c1d40);
      outline-offset: 2px;
    }

    /* Primary */
    .btn--primary {
      background-color: var(--uds-color-primary, #8c1d40);
      color: #ffffff;
      border-color: var(--uds-color-primary, #8c1d40);
    }

    .btn--primary:hover {
      background-color: color-mix(in srgb, var(--uds-color-primary, #8c1d40) 85%, #000);
      border-color: color-mix(in srgb, var(--uds-color-primary, #8c1d40) 85%, #000);
    }

    /* Secondary */
    .btn--secondary {
      background-color: transparent;
      color: var(--uds-color-secondary, #191919);
      border-color: var(--uds-color-secondary, #191919);
    }

    .btn--secondary:hover {
      background-color: var(--uds-color-secondary, #191919);
      color: #ffffff;
    }

    /* Gold */
    .btn--gold {
      background-color: var(--uds-color-gold, #ffc627);
      color: #191919;
      border-color: var(--uds-color-gold, #ffc627);
    }

    .btn--gold:hover {
      background-color: color-mix(in srgb, var(--uds-color-gold, #ffc627) 85%, #000);
      border-color: color-mix(in srgb, var(--uds-color-gold, #ffc627) 85%, #000);
    }

    /* Small */
    .btn--small {
      padding: var(--uds-spacing-xs, 0.25rem) var(--uds-spacing-sm, 0.5rem);
      font-size: 0.875rem;
    }

    /* Dark surface overrides via CSS custom properties */
    :host-context(.uds-surface-dark) .btn--primary {
      background-color: #ffffff;
      color: var(--uds-color-primary, #8c1d40);
      border-color: #ffffff;
    }

    :host-context(.uds-surface-dark) .btn--primary:hover {
      background-color: #e0e0e0;
      border-color: #e0e0e0;
    }

    :host-context(.uds-surface-dark) .btn--secondary {
      color: #ffffff;
      border-color: #ffffff;
    }

    :host-context(.uds-surface-dark) .btn--secondary:hover {
      background-color: #ffffff;
      color: #191919;
    }

    :host-context(.uds-surface-dark) .btn:focus-visible {
      outline-color: #ffffff;
    }
  `;

  private _handleClick(e: Event): void {
    if (this.disabled) {
      e.preventDefault();
      return;
    }

    this.dispatchEvent(
      new CustomEvent('uds-click', {
        bubbles: true,
        composed: true,
        detail: { label: this.label },
      })
    );

    this.trackGA({
      component: 'uds-button',
      label: this.label,
    });
  }

  override render() {
    const classes = {
      btn: true,
      [`btn--${this.color}`]: true,
      'btn--small': this.size === 'small',
    };

    if (this.href && !this.disabled) {
      return html`
        <a
          class=${classMap(classes)}
          href=${this.href}
          part="button"
          @click=${this._handleClick}
        >
          <slot>${this.label}</slot>
        </a>
      `;
    }

    return html`
      <button
        class=${classMap(classes)}
        part="button"
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled ? 'true' : nothing}
        @click=${this._handleClick}
      >
        <slot>${this.label}</slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uds-button': UdsButton;
  }
}
