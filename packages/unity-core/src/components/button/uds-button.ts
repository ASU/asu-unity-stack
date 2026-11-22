import { html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { UdsBaseElement } from '../../core/base-element.js';

/**
 * Brand-approved semantic color roles (ASU UDS button guide). These map to
 * the `--uds-color-button-*` component tokens in tokens.css:
 * - `default`  — primary button (background.accent: maroon, gold in dark sections)
 * - `cta`      — secondary button (background.highlight: gold)
 * - `neutral`  — gray button (background.neutral: gray-4)
 * - `contrast` — tertiary button (background.contrast: gray-1, gray-7 in dark sections)
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
 * `color` selects a semantic role (default/cta/neutral/contrast) that resolves to the
 * `--uds-color-button-*` component tokens; `variant` selects the style
 * treatment. Non-approved values are coerced to the default at runtime.
 *
 * @slot - Override label text with custom content
 *
 * @fires uds-click - Dispatched on click with detail { label }
 *
 * @csspart button - The inner button or anchor element
 *
 * @cssprop [--uds-color-button-primary-background] - `default` role fill → maroon (gold in dark sections)
 * @cssprop [--uds-color-button-primary-text] - Text on a solid `default` fill
 * @cssprop [--uds-color-button-secondary-background] - `cta` role fill → gold
 * @cssprop [--uds-color-button-secondary-text] - Text on a solid `cta` fill
 * @cssprop [--uds-color-button-gray-background] - `neutral` role fill → gray-4
 * @cssprop [--uds-color-button-gray-text] - Text on a solid `neutral` fill
 * @cssprop [--uds-color-button-tertiary-background] - `contrast` role fill → gray-1 (gray-7 in dark sections)
 * @cssprop [--uds-color-button-tertiary-text] - Text on a solid `contrast` fill
 * @cssprop [--uds-button-padding-default-y] - Default size vertical padding (16px)
 * @cssprop [--uds-button-padding-default-x] - Default size horizontal padding (32px)
 * @cssprop [--uds-button-padding-small-y] - Small size vertical padding (4px)
 * @cssprop [--uds-button-padding-small-x] - Small size horizontal padding (12px)
 * @cssprop [--uds-button-opacity-disabled] - Disabled opacity (0.5)
 * @cssprop [--uds-border-width-button] - Border width (2px)
 * @cssprop [--uds-radius-pill] - Pill border radius
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
      opacity: var(--uds-button-opacity-disabled, 0.5);
    }

    .btn {
      /* Per-role values are injected via --_c (base color) / --_on (on-solid text). */
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--uds-spacing-4, 4px);
      padding: var(--uds-button-padding-default-y, 16px) var(--uds-button-padding-default-x, 32px);
      border: var(--uds-border-width-button, 2px) solid transparent;
      border-radius: var(--uds-radius-pill, 400rem);
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
      --_c: var(--uds-color-button-primary-background, #8c1d40);
      --_on: var(--uds-color-button-primary-text, #ffffff);
    }
    .btn--cta {
      --_c: var(--uds-color-button-secondary-background, #ffc627);
      --_on: var(--uds-color-button-secondary-text, #191919);
    }
    .btn--neutral {
      --_c: var(--uds-color-button-gray-background, #bfbfbf);
      --_on: var(--uds-color-button-gray-text, #191919);
    }
    .btn--contrast {
      --_c: var(--uds-color-button-tertiary-background, #191919);
      --_on: var(--uds-color-button-tertiary-text, #ffffff);
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
      padding: var(--uds-button-padding-small-y, 4px) var(--uds-button-padding-small-x, 12px);
      font-size: 0.875rem;
    }

    /* Dark sections: no overrides here. The --uds-color-button-* tokens are
       re-declared in .uds-surface-dark (tokens.css), so --_c / --_on switch
       automatically (primary: gold fill + Gray 1 text; tertiary: Gray 7 fill). */
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
