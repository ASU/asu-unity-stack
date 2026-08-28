import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { UdsBaseElement } from '../../core/base-element.js';

/**
 * `<uds-accordion>` — A container for `<uds-accordion-item>` elements.
 *
 * @slot - Default slot for `<uds-accordion-item>` children.
 *
 * @example
 * ```html
 * <uds-accordion>
 *   <uds-accordion-item title="Section 1" open>Content 1</uds-accordion-item>
 *   <uds-accordion-item title="Section 2">Content 2</uds-accordion-item>
 * </uds-accordion>
 * ```
 */
@customElement('uds-accordion')
export class UdsAccordion extends UdsBaseElement {
  static override styles = css`
    :host {
      display: block;
    }

    ::slotted(*) {
      margin-bottom: var(--uds-spacing-component-gap, 0.75rem);
    }

    ::slotted(*:last-child) {
      margin-bottom: 0;
    }
  `;

  /**
   * When false (default), only one item can be open at a time.
   * When true, multiple items may be open simultaneously.
   */
  @property({ type: Boolean })
  multiple = false;

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('uds-accordion-toggle', this._handleItemToggle as EventListener);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('uds-accordion-toggle', this._handleItemToggle as EventListener);
  }

  private _handleItemToggle(e: CustomEvent<{ open: boolean }>): void {
    if (!this.multiple && e.detail.open) {
      const items = this.querySelectorAll('uds-accordion-item');
      const target = e.composedPath()[0] as Element;
      items.forEach(item => {
        if (item !== target) {
          (item as any).open = false;
        }
      });
    }
  }

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uds-accordion': UdsAccordion;
  }
}
