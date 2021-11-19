// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * @typedef {import('../../core/components/BaseCarousel').CarouselItem} CarouselItem
 */

/**
 * @typedef {import('../../core/types/image-carousel-types').ImageItem} ImageItem
 */

/**
 * @typedef {import('../../core/types/image-carousel-types').ImageCarouselType} ImageCarouselType
 */

/**
 * @param {ImageItem} props
 * @returns {CarouselItem}
 * @ignore
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
          <figcaption
            className="figure-caption uds-figure-caption"
            data-testid="image-content-container"
          >
            <div className="uds-caption-text">
              {!title ? (
                // eslint-disable-next-line react/no-danger
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                <>
                  <h3>{title}</h3>
                  {/* eslint-disable-next-line react/no-danger */}
                  <div dangerouslySetInnerHTML={{ __html: content }} />
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
 * @param {ImageCarouselType} props
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
      cssClass="image-carousel aligned-carousel"
      carouselItems={carouselItems}
      imageAutoSize={imageAutoSize}
      removeSideBackground={imageItems.length <= perView}
      hasPositionIndicators={activateGlideActions}
      hasNavButtons={activateGlideActions}
      isDraggable={activateGlideActions}
      hasShadow
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
