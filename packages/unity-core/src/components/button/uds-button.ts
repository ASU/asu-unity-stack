import { html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { UdsBaseElement } from '../../core/base-element.js';

/**
 * Brand-approved semantic color roles (ASU UDS button guide). These map to
 * brand tokens via the `--uds-button-color-*` component tokens in tokens.css.
 * - `default`  — primary action (maroon)
 * - `cta`      — call-to-action (gold)
 * - `neutral`  — neutral (gray-4)
 * - `contrast` — high-contrast (gray-1)
 */
export type ButtonColor = 'default' | 'cta' | 'neutral' | 'contrast';

/** Brand-approved style treatments. */
export type ButtonVariant = 'solid' | 'outlined' | 'ghost';

/** Layout sizes. */
export type ButtonSize = 'default' | 'small';

/**
 * Approved value sets. These are the ONLY brand-approved options; any value
 * outside them is coerced to the default at runtime (see the property guards)
 * so a non-brand button cannot be produced in HTML/Drupal/Twig either.
 */
const APPROVED_COLORS: readonly ButtonColor[] = ['default', 'cta', 'neutral', 'contrast'];
const APPROVED_VARIANTS: readonly ButtonVariant[] = ['solid', 'outlined', 'ghost'];
const APPROVED_SIZES: readonly ButtonSize[] = ['default', 'small'];

const DEFAULT_COLOR: ButtonColor = 'default';
const DEFAULT_VARIANT: ButtonVariant = 'solid';
const DEFAULT_SIZE: ButtonSize = 'default';

/**
 * Coerce an incoming value to an approved one. Unknown values fall back to the
 * default and emit a console warning, keeping the component brand-safe in every
 * framework (TS types guard compile-time; this guards runtime).
 */
function coerce<T extends string>(
  value: unknown,
  approved: readonly T[],
  fallback: T,
  attr: string
): T {
  if (typeof value === 'string' && (approved as readonly string[]).includes(value)) {
    return value as T;
  }
  if (value !== undefined && value !== null && value !== '') {
    // eslint-disable-next-line no-console
    console.warn(
      `<uds-button>: "${String(value)}" is not a brand-approved ${attr}. ` +
        `Allowed: ${approved.join(', ')}. Falling back to "${fallback}".`
    );
  }
  return fallback;
}

/**
 * @tag uds-button
 * @summary Brand-approved UDS button. Renders as `<a>` when `href` is set, otherwise `<button>`.
 * `color` selects a semantic role (default/cta/neutral/contrast) that resolves to a brand
 * token via the `--uds-button-color-*` component tokens; `variant` selects the style
 * treatment. Non-approved values are coerced to the default at runtime.
 *
 * @slot - Override label text with custom content
 *
 * @fires uds-click - Dispatched on click with detail { label }
 *
 * @csspart button - The inner button or anchor element
 *
 * @cssprop [--uds-button-color-default] - Default (primary) role color → maroon
 * @cssprop [--uds-button-color-cta] - CTA role color → gold
 * @cssprop [--uds-button-color-neutral] - Neutral role color → gray-4
 * @cssprop [--uds-button-color-contrast] - Contrast role color → gray-1
 * @cssprop [--uds-button-on-default] - Foreground on a solid default fill
 * @cssprop [--uds-button-on-cta] - Foreground on a solid CTA fill
 * @cssprop [--uds-button-on-neutral] - Foreground on a solid neutral fill
 * @cssprop [--uds-button-on-contrast] - Foreground on a solid contrast fill
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

  /**
   * Brand-approved semantic color role. Reflected. Non-approved values are
   * coerced to `default`.
   */
  @property({ type: String, reflect: true })
  get color(): ButtonColor {
    return this._color;
  }
  set color(value: ButtonColor) {
    const next = coerce(value, APPROVED_COLORS, DEFAULT_COLOR, 'color');
    const old = this._color;
    this._color = next;
    this.requestUpdate('color', old);
  }
  private _color: ButtonColor = DEFAULT_COLOR;

  /**
   * Brand-approved style treatment. Reflected. Non-approved values are coerced
   * to `solid`.
   */
  @property({ type: String, reflect: true })
  get variant(): ButtonVariant {
    return this._variant;
  }
  set variant(value: ButtonVariant) {
    const next = coerce(value, APPROVED_VARIANTS, DEFAULT_VARIANT, 'variant');
    const old = this._variant;
    this._variant = next;
    this.requestUpdate('variant', old);
  }
  private _variant: ButtonVariant = DEFAULT_VARIANT;

  /** Layout size. Reflected. Non-approved values are coerced to `default`. */
  @property({ type: String, reflect: true })
  get size(): ButtonSize {
    return this._size;
  }
  set size(value: ButtonSize) {
    const next = coerce(value, APPROVED_SIZES, DEFAULT_SIZE, 'size');
    const old = this._size;
    this._size = next;
    this.requestUpdate('size', old);
  }
  private _size: ButtonSize = DEFAULT_SIZE;

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
      /* Per-role values are injected via --_c (base color) / --_on (on-solid text). */
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
      outline: 2px solid var(--_c);
      outline-offset: 2px;
    }

    /* ── Color role layer: bind semantic role → component token (with brand fallback) ── */
    .btn--default {
      --_c: var(--uds-button-color-default, var(--uds-color-brand-maroon, #8c1d40));
      --_on: var(--uds-button-on-default, #ffffff);
    }
    .btn--cta {
      --_c: var(--uds-button-color-cta, var(--uds-color-brand-gold, #ffc627));
      --_on: var(--uds-button-on-cta, #191919);
    }
    .btn--neutral {
      --_c: var(--uds-button-color-neutral, var(--uds-color-gray-4, #bfbfbf));
      --_on: var(--uds-button-on-neutral, #191919);
    }
    .btn--contrast {
      --_c: var(--uds-button-color-contrast, var(--uds-color-gray-1, #191919));
      --_on: var(--uds-button-on-contrast, #ffffff);
    }

    /* ── Variant layer: how the role color is applied ── */
    .btn--solid {
      background-color: var(--_c);
      color: var(--_on);
      border-color: var(--_c);
    }
    .btn--solid:hover {
      background-color: color-mix(in srgb, var(--_c) 85%, #000);
      border-color: color-mix(in srgb, var(--_c) 85%, #000);
    }

    .btn--outlined {
      background-color: transparent;
      color: var(--_c);
      border-color: var(--_c);
    }
    .btn--outlined:hover {
      background-color: var(--_c);
      color: var(--_on);
    }

    .btn--ghost {
      background-color: transparent;
      color: var(--_c);
      border-color: transparent;
    }
    .btn--ghost:hover {
      background-color: color-mix(in srgb, var(--_c) 12%, transparent);
    }

    /* ── Size ── */
    .btn--small {
      padding: var(--uds-spacing-xs, 0.25rem) var(--uds-spacing-sm, 0.5rem);
      font-size: 0.875rem;
    }

    /* ── Dark-surface adaptation ── */
    :host-context(.uds-surface-dark) .btn--solid {
      background-color: #ffffff;
      color: var(--_c);
      border-color: #ffffff;
    }
    :host-context(.uds-surface-dark) .btn--solid:hover {
      background-color: #e0e0e0;
      border-color: #e0e0e0;
    }
    :host-context(.uds-surface-dark) .btn--outlined,
    :host-context(.uds-surface-dark) .btn--ghost {
      color: #ffffff;
      border-color: currentColor;
    }
    :host-context(.uds-surface-dark) .btn--outlined:hover {
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
      action: 'click',
      label: this.label,
    });
  }

  override render() {
    const classes = {
      btn: true,
      [`btn--${this.color}`]: true,
      [`btn--${this.variant}`]: true,
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
