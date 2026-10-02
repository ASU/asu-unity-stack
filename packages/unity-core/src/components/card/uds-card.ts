import { html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { UdsBaseElement } from '../../core/base-element.js';

/**
 * @tag uds-card
 * @summary A flexible card component with optional image, heading, body content, and action buttons.
 *
 * @slot - Default slot for body content
 * @slot actions - Slot for action buttons (e.g. uds-button) at the card footer
 *
 * @csspart card - The outer card container
 * @csspart image - The image container
 * @csspart heading - The heading element
 * @csspart body - The body content area
 * @csspart actions - The actions footer area
 *
 * @cssprop [--uds-color-surface] - Card background color
 * @cssprop [--uds-color-on-surface] - Card text color
 * @cssprop [--uds-spacing-3] - Internal padding
 * @cssprop [--uds-spacing-4] - Gap between card sections
 * @cssprop [--uds-radius-md] - Card border radius
 */
@customElement('uds-card')
export class UdsCard extends UdsBaseElement {
  /** Card heading text */
  @property({ type: String })
  heading = '';

  /** Image URL for the card's media area */
  @property({ type: String })
  image?: string;

  /** When set, the entire card becomes a clickable link */
  @property({ type: String })
  href?: string;

  /** When true, renders in a horizontal (side-by-side) layout */
  @property({ type: Boolean, reflect: true })
  horizontal = false;

  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
    }

    .card {
      display: flex;
      flex-direction: column;
      background: var(--uds-color-surface, #ffffff);
      color: var(--uds-color-on-surface, #191919);
      border-radius: var(--uds-radius-md, 4px);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(0, 0, 0, 0.08);
      overflow: hidden;
      transition: box-shadow 0.2s ease, transform 0.15s ease;
      height: 100%;
    }

    .card--horizontal {
      flex-direction: row;
    }

    .card--link {
      cursor: pointer;
    }

    .card--link:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .card--link:focus-within {
      outline: 2px solid var(--uds-color-semantic-primary, #8c1d40);
      outline-offset: 2px;
    }

    .card__link {
      display: contents;
      color: inherit;
      text-decoration: none;
    }

    .card__link:focus {
      outline: none;
    }

    .card__image {
      width: 100%;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      flex-shrink: 0;
    }

    .card--horizontal .card__image {
      width: 40%;
      aspect-ratio: auto;
      min-height: 100%;
    }

    .card__image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .card__content {
      display: flex;
      flex-direction: column;
      padding: var(--uds-spacing-4, 24px);
      gap: var(--uds-spacing-3, 16px);
      flex: 1;
    }

    .card__heading {
      margin: 0;
      font-family: var(--uds-font-family-heading, 'Arial', sans-serif);
      font-size: var(--uds-font-size-heading-4, 20px);
      font-weight: var(--uds-font-weight-bold, 700);
      line-height: 1.3;
      color: var(--uds-color-on-surface, #191919);
    }

    .card__body {
      flex: 1;
      font-size: var(--uds-font-size-body, 16px);
      line-height: 1.5;
    }

    .card__actions {
      display: flex;
      gap: var(--uds-spacing-2, 8px);
      flex-wrap: wrap;
      margin-top: auto;
      padding-top: var(--uds-spacing-2, 8px);
    }

    /* Responsive: horizontal layout at wider container sizes */
    @container (min-width: 500px) {
      :host([horizontal]) .card {
        flex-direction: row;
      }

      :host([horizontal]) .card__image {
        width: 40%;
        aspect-ratio: auto;
        min-height: 100%;
      }
    }

    /* Stacked at narrow container */
    @container (max-width: 499px) {
      :host([horizontal]) .card {
        flex-direction: column;
      }

      :host([horizontal]) .card__image {
        width: 100%;
        aspect-ratio: 16 / 9;
      }
    }

    /* Dark surface */
    :host-context(.uds-surface-dark) .card {
      background: color-mix(in srgb, var(--uds-color-surface, #191919) 100%, transparent);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    :host-context(.uds-surface-dark) .card__heading {
      color: var(--uds-color-on-surface, #ffffff);
    }

    :host-context(.uds-surface-dark) .card--link:focus-within {
      outline-color: var(--uds-color-brand-gold, #ffc627);
    }
  `;

  private _handleClick(): void {
    this.trackGA({
      component: 'uds-card',
      action: 'click',
      label: this.heading,
    });
  }

  render() {
    const classes = {
      card: true,
      'card--horizontal': this.horizontal,
      'card--link': !!this.href,
    };

    const imageTemplate = this.image
      ? html`
          <div class="card__image" part="image">
            <img src=${this.image} alt="" loading="lazy" />
          </div>
        `
      : nothing;

    const contentTemplate = html`
      ${imageTemplate}
      <div class="card__content">
        ${this.heading
          ? html`<h3 class="card__heading" part="heading">${this.heading}</h3>`
          : nothing}
        <div class="card__body" part="body">
          <slot></slot>
        </div>
        <div class="card__actions" part="actions">
          <slot name="actions"></slot>
        </div>
      </div>
    `;

    if (this.href) {
      return html`
        <div class=${classMap(classes)} part="card">
          <a
            class="card__link"
            href=${this.href}
            @click=${this._handleClick}
          >
            ${contentTemplate}
          </a>
        </div>
      `;
    }

    return html`
      <div class=${classMap(classes)} part="card">
        ${contentTemplate}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uds-card': UdsCard;
  }
}
