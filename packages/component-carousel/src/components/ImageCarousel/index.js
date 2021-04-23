// @ts-check
import { h } from "preact";
import PropTypes from "prop-types";

import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * This function creates a html template which render an image
 * @param {{
 *          id: number
 *          imageSource: string
 *          altText:string
 *          content?: string | h.JSX.Element
 *        }} props
 * @returns {{ id: number, item: h.JSX.Element }}
 */
const imageTemplate = ({ id, imageSource, altText, content }) => ({
  id,
  item: (
    <div class="uds-img">
      <figure class="figure uds-figure">
        <img
          src={imageSource}
          class="uds-img figure-img img-fluid"
          alt={altText}
        />
        {content && (
          <figcaption class="figure-caption uds-figure-caption">
            {typeof content === "string" ? (
              <span class="uds-caption-text">{content}</span>
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
 *            perView: string | number
 *            imageItems: { id: number, imageSource: string, altText:string }[]
 *            maxWidth?: string
 *            width?: string
 *        }} props
 * @returns
 */
const ImageCarousel = ({
  perView,
  imageItems,
  width = undefined,
  maxWidth = undefined,
}) => {
  const carouselItems = imageItems.map(imageTemplate);

  return (
    <BaseCarousel
      perView={+perView}
      maxWidth={maxWidth}
      width={width}
      cssClass="image-carousel"
      carouselItems={carouselItems}
    />
  );
};

ImageCarousel.propTypes = {
  perView: PropTypes.string.isRequired,
  imageItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
};

export { ImageCarousel, imageTemplate };
