import React from "react";

import {
  approvedGaAttributes,
  sanitizeCharterBubbleId,
  sanitizeCharterBubbleUrl,
} from "./charter-bubbles-data.js";

// Font Awesome Free 6.4.2 solid xmark (CC BY 4.0, https://fontawesome.com/license/free).
const XMARK_PATH =
  "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";

/**
 * @typedef {Object} CharterBubbleItem
 * @property {string} id
 * @property {string} frontHeadline
 * @property {string} backHeadline
 * @property {string} detail
 * @property {string} linkLabel
 * @property {string} linkUrl
 * @property {Record<string, string|number|boolean>} [frontAnalytics]
 * @property {Record<string, string|number|boolean>} [linkAnalytics]
 * @property {Record<string, string|number|boolean>} [closeAnalytics]
 */

/**
 * @typedef {Object} CharterBubbleProps
 * @property {CharterBubbleItem} item Validated bubble content.
 * @property {string} instanceId Stable, unique, HTML-safe component instance ID.
 * @property {boolean} [isOpen=false] Whether the expanded face is active.
 */

/**
 * Renders one bubble with both faces in the initial HTML.
 *
 * @param {CharterBubbleProps} props
 * @returns {JSX.Element}
 */
const CharterBubble = ({ item, instanceId, isOpen = false }) => {
  const safeInstanceId = sanitizeCharterBubbleId(instanceId, "charter-bubbles");
  const safeItemId = sanitizeCharterBubbleId(item.id, "item");
  const idBase = `${safeInstanceId}-${safeItemId}`;
  const triggerId = `${idBase}-trigger`;
  const panelId = `${idBase}-panel`;
  const headingId = `${idBase}-heading`;
  const itemClass = `hp-charter-bubble${isOpen ? " is-open" : ""}`;
  const closeLabel = `Close: ${item.frontHeadline}`;

  return (
    <li
      className={itemClass}
      data-charter-bubble-item=""
      data-charter-bubble-id={item.id}
      data-charter-bubble-state={isOpen ? "open" : "closed"}
    >
      <button
        id={triggerId}
        className="hp-charter-bubble__front"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-hidden={isOpen ? "true" : undefined}
        tabIndex={isOpen ? -1 : undefined}
        data-charter-bubble-open=""
        {...approvedGaAttributes(item.frontAnalytics)}
      >
        <span className="hp-charter-bubble__front-label">
          {item.frontHeadline}
        </span>
        <svg
          className="hp-charter-bubble__chevron"
          viewBox="0 0 512 512"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </button>

      <div
        id={panelId}
        className="hp-charter-bubble__back"
        aria-hidden={isOpen ? "false" : undefined}
        aria-labelledby={headingId}
        data-charter-bubble-panel=""
      >
        <h3 id={headingId} className="hp-charter-bubble__heading">
          {item.backHeadline}
        </h3>
        <p className="hp-charter-bubble__detail">{item.detail}</p>
        <a
          className="hp-charter-bubble__link"
          href={sanitizeCharterBubbleUrl(item.linkUrl)}
          {...approvedGaAttributes(item.linkAnalytics)}
        >
          {item.linkLabel}
        </a>
        <button
          className="hp-charter-bubble__close"
          type="button"
          aria-label={closeLabel}
          data-charter-bubble-close=""
          {...approvedGaAttributes(item.closeAnalytics)}
        >
          <svg
            className="hp-charter-bubble__close-icon"
            viewBox="0 0 384 512"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="currentColor" d={XMARK_PATH} />
          </svg>
        </button>
      </div>
    </li>
  );
};

export { CharterBubble };
