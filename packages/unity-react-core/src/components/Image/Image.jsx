import { spreadClasses, sanitizeDangerousMarkup } from "@asu/shared";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

// @ts-ignore

/**
 * @typedef {import('../../core/types/image-types').ImageComponentProps} ImageComponentProps
 * @typedef {import('../../core/types/image-types').ImageItemProps} ImageItemProps
 */

/**
 * @typedef {import('../../core/types/shared-types').ImageProps} ImageProps
 */

/**
 * Base Image component for rendering individual images
 * @param {ImageItemProps} props
 * @returns {JSX.Element}
 */
const BaseImage = ({
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
        {}
        <img {...imageProps} className={combinedClasses} />
        <span className="visually-hidden">{title}</span>
      </a>
    ) : (
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
  images,
  columns,
}) => {
  // If images array is provided, render multiple images
  if (images && Array.isArray(images) && images.length > 0) {
    const containerClasses = classNames("uds-card-arrangement-card-container", {
      "auto-arrangement": !columns || columns === "0",
      "three-columns": columns === "3",
      "four-columns": columns === "4",
    });

    return (
      <div className="uds-card-arrangement">
        <div className={containerClasses}>
          {images.map((imageItem, index) => (
            <BaseImage key={index} {...imageItem} />
          ))}
        </div>
      </div>
    );
  }

  // Otherwise render single image (backward compatibility)
  return (
    <BaseImage
      src={src}
      alt={alt}
      cssClasses={cssClasses}
      loading={loading}
      decoding={decoding}
      dataTestId={dataTestId}
      fetchPriority={fetchPriority}
      width={width}
      height={height}
      cardLink={cardLink}
      title={title}
      caption={caption}
      captionTitle={captionTitle}
      border={border}
      dropShadow={dropShadow}
    />
  );
};

Image.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: PropTypes.string,
  /**
   * Image alt text
   */
  alt: PropTypes.string,
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
  /**
   * Array of image objects for multiple images display
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      cssClasses: PropTypes.arrayOf(PropTypes.string),
      loading: PropTypes.oneOf(["lazy", "eager"]),
      decoding: PropTypes.oneOf(["sync", "async", "auto"]),
      fetchPriority: PropTypes.oneOf(["auto", "high", "low"]),
      width: PropTypes.string,
      height: PropTypes.string,
      dataTestId: PropTypes.string,
      cardLink: PropTypes.string,
      title: PropTypes.string,
      caption: PropTypes.string,
      captionTitle: PropTypes.string,
      border: PropTypes.bool,
      dropShadow: PropTypes.bool,
    })
  ),
  /**
   * Number of columns for multiple images display (0 for auto, 3 for three columns, 4 for four columns)
   */
  columns: PropTypes.oneOf(["0", "3", "4"]),
};
