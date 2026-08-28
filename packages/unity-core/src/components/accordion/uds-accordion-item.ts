import { html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { UdsBaseElement } from '../../core/base-element.js';

let instanceCounter = 0;

/**
 * `<uds-accordion-item>` — A single collapsible item within a `<uds-accordion>`.
 *
 * @slot - Default slot for the panel content.
 * @fires uds-accordion-toggle - Fired when the item is opened or closed.
 *
 * @example
 * ```html
 * <uds-accordion-item title="Section Title">
 *   <p>Panel content here.</p>
 * </uds-accordion-item>
 * ```
 */
@customElement('uds-accordion-item')
export class UdsAccordionItem extends UdsBaseElement {
  static override styles = css`
    :host {
      display: block;
      border: 1px solid var(--uds-color-border, #e8e8e8);
      border-radius: var(--uds-border-radius, 0);
      overflow: hidden;
    }

    .header-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: var(--uds-spacing-accordion-header, 1rem 1.5rem);
      border: none;
      background: var(--uds-color-background-accordion-header, #ffffff);
      color: var(--uds-color-font-dark-base, #191919);
      font-family: inherit;
      font-size: var(--uds-font-size-accordion-header, 1rem);
      font-weight: 700;
      cursor: pointer;
      text-align: left;
      line-height: 1.5;
      transition: background-color 0.2s ease;
    }

    .header-button:hover {
      background: var(--uds-color-background-accordion-header-hover, #fafafa);
    }

    .header-button:focus-visible {
      outline: 2px solid var(--uds-color-base-bluefocus, #00baff);
      outline-offset: -2px;
      z-index: 1;
      position: relative;
    }

    .chevron {
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
      border-right: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      transform: rotate(45deg);
      transition: transform 0.25s ease;
      flex-shrink: 0;
      margin-left: 1rem;
    }

    :host([open]) .chevron {
      transform: rotate(-135deg);
    }

    .panel {
      display: none;
      padding: var(--uds-spacing-accordion-panel, 1rem 1.5rem);
      background: var(--uds-color-background-accordion-panel, #ffffff);
      color: var(--uds-color-font-dark-base, #191919);
    }

    :host([open]) .panel {
      display: block;
      animation: slideDown 0.25s ease;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  /** The text displayed in the header button. */
  @property({ type: String })
  title = '';

  /** Whether the panel is currently expanded. */
  @property({ type: Boolean, reflect: true })
  open = false;

  private _headerId = '';
  private _panelId = '';

  constructor() {
    super();
    const id = ++instanceCounter;
    this._headerId = `uds-accordion-header-${id}`;
    this._panelId = `uds-accordion-panel-${id}`;
  }

  private _toggle(): void {
    this.open = !this.open;

    this.trackGA({
      component: 'uds-accordion',
      action: this.open ? 'open' : 'close',
      label: this.title,
    });

    this.dispatchEvent(
      new CustomEvent('uds-accordion-toggle', {
        bubbles: true,
        composed: true,
        detail: { open: this.open },
      })
    );
  }

  private _handleKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._toggle();
    }
  }

  override render() {
    return html`
      <button
        class="header-button"
        id=${this._headerId}
        aria-expanded=${this.open ? 'true' : 'false'}
        aria-controls=${this._panelId}
        @click=${this._toggle}
        @keydown=${this._handleKeydown}
      >
        <span class="header-text">${this.title}</span>
        <span class="chevron" aria-hidden="true"></span>
      </button>
      <div
        class="panel"
        id=${this._panelId}
        role="region"
        aria-labelledby=${this._headerId}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uds-accordion-item': UdsAccordionItem;
  }
}
