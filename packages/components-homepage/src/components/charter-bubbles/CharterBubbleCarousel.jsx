import React, { forwardRef } from "react";

import { approvedGaAttributes } from "./charter-bubbles-data.js";

/**
 * @typedef {Object} CharterBubbleCarouselProps
 * @property {React.ReactNode} children One canonical bubble list.
 * @property {boolean} [previousDisabled=true] Whether Previous is unavailable.
 * @property {boolean} [nextDisabled=false] Whether Next is unavailable.
 * @property {Record<string, string|number|boolean>} [previousAnalytics] Approved data-ga-* attributes for Previous.
 * @property {Record<string, string|number|boolean>} [nextAnalytics] Approved data-ga-* attributes for Next.
 * @property {string} [className=""] Additional class for composition only.
 */

/**
 * Renders the mobile/tablet viewport and controls without owning scroll logic.
 * The forwarded ref targets the viewport used for later geometry measurement.
 *
 * @param {CharterBubbleCarouselProps} props
 * @param {React.ForwardedRef<HTMLDivElement>} ref
 * @returns {JSX.Element}
 */
const CharterBubbleCarouselRender = (
  {
    children,
    previousDisabled = true,
    nextDisabled = false,
    previousAnalytics,
    nextAnalytics,
    className = "",
  },
  ref
) => {
  const classes = ["hp-charter-bubbles__carousel", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} data-charter-bubble-carousel="">
      <div
        ref={ref}
        className="hp-charter-bubbles__viewport"
        data-charter-bubble-viewport=""
      >
        <div className="hp-charter-bubbles__track" data-charter-bubble-track="">
          {children}
        </div>
      </div>

      <div
        className="hp-charter-bubbles__nav"
        role="group"
        aria-label="ASU facts carousel navigation"
        data-charter-bubble-nav=""
      >
        <button
          className="hp-charter-bubbles__nav-button hp-charter-bubbles__nav-button--previous"
          type="button"
          aria-label="Previous ASU fact"
          disabled={previousDisabled}
          data-charter-bubble-previous=""
          {...approvedGaAttributes(previousAnalytics)}
        >
          <svg
            className="hp-charter-bubbles__nav-icon"
            viewBox="0 0 320 512"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </button>
        <button
          className="hp-charter-bubbles__nav-button hp-charter-bubbles__nav-button--next"
          type="button"
          aria-label="Next ASU fact"
          disabled={nextDisabled}
          data-charter-bubble-next=""
          {...approvedGaAttributes(nextAnalytics)}
        >
          <svg
            className="hp-charter-bubbles__nav-icon"
            viewBox="0 0 320 512"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const CharterBubbleCarousel = forwardRef(CharterBubbleCarouselRender);
CharterBubbleCarousel.displayName = "CharterBubbleCarousel";

export { CharterBubbleCarousel };
