import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { UdsBaseElement } from '../../core/base-element.js';

/**
 * Google Analytics event payload shape (mirrors the React `GaEventType`).
 */
export interface GaEventType {
  text?: string;
  name?: string;
  event?: string;
  action?: string;
  type?: string;
  region?: string;
  section?: string;
  component?: string;
}

/**
 * Allowed `data-ga` attribute prefixes. Matches the React `GaEventWrapper`.
 * An empty string applies the base `data-ga*` attributes; the others namespace
 * them (e.g. `data-ga-input-action`) so a page can track several element roles.
 */
export type GaPrefix = '' | 'input' | 'header' | 'header-input';

const VALID_PREFIXES: GaPrefix[] = ['input', 'header', 'header-input'];

/**
 * @tag uds-ga-event-wrapper
 * @summary Wraps a single slotted element and wires it for Google Analytics
 * tracking — the web-component equivalent of the React `GaEventWrapper`.
 *
 * It supports the same two mechanisms the design system uses elsewhere:
 *
 * 1. **Declarative (`data-ga*` attributes)** — the wrapper reflects the values
 *    from `gaData` onto the slotted child as `data-ga{prefix}-*` attributes, so
 *    the CMS/global `[data-ga]` click listener picks them up. This is the
 *    primary mechanism for HTML/Drupal consumption.
 * 2. **Programmatic (`dataLayer` push)** — on click it also pushes the event
 *    straight to `window.dataLayer`, guarded (like the React version) so it only
 *    fires when `gaData.event` and `gaData.action` are both present.
 *
 * @slot - A single element to track (e.g. an `<a>`, `<button>`, or `<uds-button>`).
 */
@customElement('uds-ga-event-wrapper')
export class UdsGaEventWrapper extends UdsBaseElement {
  /** Google Analytics data applied to the slotted child. */
  @property({ type: Object })
  gaData: GaEventType = {};

  /** Prefix for the emitted `data-ga` attributes (`data-ga-{prefix}-action`). */
  @property({ type: String })
  prefix: GaPrefix = '';

  /** Cached reference to the currently-tracked slotted element. */
  private _tracked: HTMLElement | null = null;

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._tracked?.removeEventListener('click', this._handleClick);
    this._tracked = null;
  }

  override updated(): void {
    // Re-apply attributes whenever gaData/prefix change.
    this._applyGaAttributes();
  }

  private get _prefixSegment(): string {
    return VALID_PREFIXES.includes(this.prefix) ? `-${this.prefix}` : '';
  }

  private _getSlottedElement(): HTMLElement | null {
    const slot = this.shadowRoot?.querySelector('slot');
    const assigned = slot?.assignedElements({ flatten: true }) ?? [];
    return (assigned[0] as HTMLElement) ?? null;
  }

  private _handleSlotChange = (): void => {
    const next = this._getSlottedElement();
    if (next === this._tracked) {
      return;
    }
    this._tracked?.removeEventListener('click', this._handleClick);
    this._tracked = next;
    this._tracked?.addEventListener('click', this._handleClick);
    this._applyGaAttributes();
  };

  private _applyGaAttributes(): void {
    const el = this._tracked;
    if (!el) {
      return;
    }
    const seg = this._prefixSegment;
    const map: Record<string, string | undefined> = {
      [`data-ga${seg}`]: this.gaData.text,
      [`data-ga${seg}-name`]: this.gaData.name,
      [`data-ga${seg}-event`]: this.gaData.event,
      [`data-ga${seg}-action`]: this.gaData.action,
      [`data-ga${seg}-type`]: this.gaData.type,
      [`data-ga${seg}-region`]: this.gaData.region,
      [`data-ga${seg}-section`]: this.gaData.section,
      [`data-ga${seg}-component`]: this.gaData.component,
    };
    for (const [attr, value] of Object.entries(map)) {
      if (value === undefined || value === null || value === '') {
        el.removeAttribute(attr);
      } else {
        el.setAttribute(attr, value);
      }
    }
  }

  private _handleClick = (): void => {
    // Mirror the React guard: only push to the dataLayer when the event has
    // meaningful content.
    if (this.gaData?.event && this.gaData?.action) {
      this.trackGA({
        component: this.gaData.component ?? 'uds-ga-event-wrapper',
        action: this.gaData.action,
        label: this.gaData.text,
        event: this.gaData.event,
        name: this.gaData.name,
        type: this.gaData.type,
        region: this.gaData.region,
        section: this.gaData.section,
      });
    }
  };

  override render() {
    return html`<slot @slotchange=${this._handleSlotChange}></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uds-ga-event-wrapper': UdsGaEventWrapper;
  }
}
