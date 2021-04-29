// @ts-check
import { h } from "preact";
import PropTypes from "prop-types";

import { BaseCarousel } from "../../core/components/BaseAsuCmsCarousel";

/**
 * This function creates a html template which render an image
 * @param {{
 *          id: number
 *          imageSource: string
 *          altText:string,
 *          caption:string,
 *          content?: string | h.JSX.Element
 *        }} props
 * @returns {{ id: number, item: h.JSX.Element }}
 */
const imageTemplate = ({ id, imageSource, altText, caption, content }) => ({
  id,
  item: (
    <div className="asucms-image">
        <img
          src={imageSource}
          alt={altText}
        />
        <div className="content-area">
          <h2 class="mb-3"><span class="highlight-gray">{caption}</span></h2>
          <input class="btn btn-gold" type="submit" value="Input button">Schedule a tour</input>
        </div>
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
