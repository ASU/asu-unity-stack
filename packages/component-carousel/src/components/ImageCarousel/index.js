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
 *  altText:string
 *  content?: string | h.JSX.Element
 * }} ImageItem
 */

/**
 * This function creates a html template which render an image
 * @param {ImageItem} props
 * @returns {CarouselItem}
 */
const htmlTemplate = ({ id, imageSource, altText, content }) => ({
  id,
  item: (
    <div className="uds-img">
      <figure className="figure uds-figure">
        <img
          src={imageSource}
          className="uds-img figure-img img-fluid"
          alt={altText}
        />
        {content && (
          <figcaption className="figure-caption uds-figure-caption">
            {typeof content === "string" ? (
              <span className="uds-caption-text">{content}</span>
            ) : (
              content
            )}
          </figcaption>
        )}
      </figure>
    </div>
  ),
});

/**
 *
 * @param {{
 *    perView: string | number
 *    imageItems: ImageItem []
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

  return (
    <BaseCarousel
      perView={+perView}
      maxWidth={maxWidth}
      width={width}
      cssClass="image-carousel"
      carouselItems={carouselItems}
      imageAutoSize={imageAutoSize}
    />
  );
};

ImageCarousel.propTypes = {
  perView: PropTypes.string.isRequired,
  imageItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  imageAutoSize: PropTypes.bool,
};

export { ImageCarousel, htmlTemplate };
