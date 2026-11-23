import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { UdsBaseElement } from '../../core/base-element.js';
import type { UdsAccordionItem } from './uds-accordion-item.js';

/**
 * @tag uds-accordion
 * @summary A container for `<uds-accordion-item>` elements. Controls single/multiple open behavior.
 *
 * @slot - Default slot for `<uds-accordion-item>` children.
 *
 * @cssprop [--uds-spacing-12] - Gap between accordion items
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
      margin-bottom: var(--uds-spacing-12, 12px);
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
      const items = this.querySelectorAll<UdsAccordionItem>('uds-accordion-item');
      const target = e.composedPath()[0] as Element;
      items.forEach(item => {
        if (item !== target) {
          item.open = false;
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
