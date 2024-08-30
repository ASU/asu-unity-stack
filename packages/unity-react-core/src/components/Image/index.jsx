import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

// eslint-disable-next-line import/no-cycle
import { spreadClasses } from "../../../../../shared";
import { sanitizeDangerousMarkup } from "../../../../../shared/utils";

/**
 * @typedef {import('../../core/types/image-types').ImageComponentProps} ImageComponentProps
 */

/**
 * @param {ImageComponentProps} props
 * @returns {JSX.Element}
 */

export const Image = ({
  src,
  alt,
  cssClasses,
  loading = "lazy",
  decoding = "async",
  dataTestId,
  fetchPriority = "auto",
  width,
  height,
  cardLink,
  title,
  caption,
  captionTitle,
  border,
  dropShadow,
}) => {
  const imageProps = {
    src,
    alt,
    loading,
    decoding,
    fetchpriority: fetchPriority, // React attribute bug workaround
    ...(cssClasses?.length > 0 && { className: spreadClasses(cssClasses) }),
    ...(dataTestId && { "data-testid": dataTestId }),
    ...(width && { width }),
    ...(height && { height }),
  };

  const borderAndDropShadowClasses = classNames("uds-img", {
    "borderless": !border,
    "uds-img-drop-shadow": dropShadow,
  });

  const renderImage = classes => {
    const combinedClasses = classes
      ? `${imageProps.className} ${classes}`
      : imageProps.className;
    return cardLink ? (
      <a href={cardLink}>
        {/* eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading */}
        <img {...imageProps} className={combinedClasses} />
        <span className="visually-hidden">{title}</span>
      </a>
    ) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      <img {...imageProps} className={combinedClasses} />
    );
  };

  const renderFigure = () => (
    <div className={borderAndDropShadowClasses}>
      <figure className="figure uds-figure">
        {renderImage()}
        {caption && (
          <figcaption className="figure-caption uds-figure-caption">
            {captionTitle && <h3>{captionTitle}</h3>}
            <span
              className="uds-caption-text"
              dangerouslySetInnerHTML={sanitizeDangerousMarkup(caption)}
            />
          </figcaption>
        )}
      </figure>
    </div>
  );

  return (
    <>{caption ? renderFigure() : renderImage(borderAndDropShadowClasses)}</>
  );
};

Image.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: PropTypes.string.isRequired,
  /**
   * Image alt text
   */
  alt: PropTypes.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: PropTypes.arrayOf(PropTypes.string),
  /**
   * Image loading mode
   */
  loading: PropTypes.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: PropTypes.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: PropTypes.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: PropTypes.string,
  /**
   * Height of the image
   */
  height: PropTypes.string,
  dataTestId: PropTypes.string,
  cardLink: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
  captionTitle: PropTypes.string,
  border: PropTypes.bool,
  dropShadow: PropTypes.bool,
};
