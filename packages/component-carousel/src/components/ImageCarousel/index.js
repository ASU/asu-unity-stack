// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * @typedef {import('../../core/components/BaseCarousel').CarouselItem} CarouselItem
 */

/**
 * @typedef {{
 *  id: number
 *  imageSource: string
 *  imageAltText: string
 *  title?: string
 *  content?: string
 * }} ImageItem
 */

/**
 * This function creates a html template which render an image
 * @param {ImageItem} props
 * @returns {CarouselItem}
 */
const htmlTemplate = ({ id, imageSource, imageAltText, title, content }) => ({
  id,
  item: (
    <div className="uds-img">
      <figure className="figure uds-figure">
        <img
          src={imageSource}
          className="uds-img figure-img img-fluid"
          alt={imageAltText}
        />
        {(title || content) && (
          <figcaption className="figure-caption uds-figure-caption">
            <div className="uds-caption-text">
              {!title ? (
                <span>{content}</span>
              ) : (
                <>
                  <h3>{title}</h3>
                  <p>{content}</p>
                </>
              )}
            </div>
          </figcaption>
        )}
      </figure>
    </div>
  ),
});

/**
 *
 * @param {{
 *    perView: number
 *    imageItems: ImageItem[]
 *    maxWidth?: string
 *    width?: string
 *    imageAutoSize?: boolean
 *  }} props
 * @returns { JSX.Element }
 */
const ImageCarousel = ({
  perView,
  imageItems,
  width = undefined,
  maxWidth = undefined,
  imageAutoSize = true,
}) => {
  const carouselItems = imageItems.map(htmlTemplate);
  const activateGlideActions = imageItems.length > perView;

  return (
    <BaseCarousel
      perView={+perView}
      maxWidth={maxWidth}
      width={width}
      cssClass="image-carousel"
      carouselItems={carouselItems}
      imageAutoSize={imageAutoSize}
      removeSideBackground={imageItems.length <= perView}
      hasPositionIndicators={activateGlideActions}
      hasNavButtons={activateGlideActions}
      isDraggable={activateGlideActions}
    />
  );
};

ImageCarousel.propTypes = {
  perView: PropTypes.number.isRequired,
  imageItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  imageAutoSize: PropTypes.bool,
};

export { ImageCarousel, htmlTemplate };
