// @ts-check
import PropTypes from "prop-types";
import React from "react";
import { sanitizeDangerousMarkup } from "@asu/shared";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";


/**
 * @typedef {Object} ContentSpotlightProps
 * @property {string} backgroundImage - URL of the background image
 * @property {string|string[]} [icon] - FontAwesome icon name (e.g. 'graduation-cap') or array ['fab', 'icon-name']
 * @property {string|React.ReactNode} title - Main title
 * @property {string} [highlightText] - Text to highlight in gold within the title.
 * @property {string} [description] - Body text
 * @property {Object} [button] - Button config
 * @property {string} button.label - Button text
 * @property {string} button.href - Button URL
 * @property {string} button.color - Button color
 */

const gaDefaultObject = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
};

/**
 * @param {ContentSpotlightProps} props
 * @returns {JSX.Element}
 */
export const ContentSpotlight = ({
  backgroundImage,
  icon,
  title,
  highlightText,
  description,
  button,
}) => {
  // Icon rendering helper
  const renderIcon = () => {
    if (!icon) return null;
    let iconClasses = "";
    if (Array.isArray(icon)) {
      iconClasses = icon.join(" ");
    } else {
      iconClasses = icon.includes(" ") ? icon : `fas fa-${icon}`;
    }

    return <i className={iconClasses} aria-hidden="true" />;
  };

  return (
    <div className="content-spotlight">
      <div className="content-spotlight-image-container">
        <div className="content-spotlight-image-wrapper">
          <div className="content-spotlight-overlay" />
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="content-spotlight-image"
          />
        </div>
      </div>

      <div className="content-spotlight-content">
        {icon && <div className="content-spotlight-icon">{renderIcon()}</div>}

        <h2 className="content-spotlight-title">
          {title}
          {highlightText && (
            <>
              {title && highlightText && <br />}
              <span className="highlight">{highlightText}</span>
            </>
          )}
        </h2>

        {description && (
          <p
            className="content-spotlight-description"
            dangerouslySetInnerHTML={sanitizeDangerousMarkup(description)}
          />
        )}

        {button && (
          <GaEventWrapper
          gaData={{...gaDefaultObject, text: button.label, component: "ContentSpotlight"}}
          >

          <a
            href={button.href}
            className={`btn ${button.color ? `btn-${button.color}` : "btn-gold"}`}

          >
            {button.label}
          </a>
          </GaEventWrapper>
        )}
      </div>
    </div>
  );
};

ContentSpotlight.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  title: PropTypes.node.isRequired,
  highlightText: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    color: PropTypes.string,
  }),
};
