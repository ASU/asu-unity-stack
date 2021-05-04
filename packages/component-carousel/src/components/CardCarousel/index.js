// @ts-check
import { h } from "preact";
import PropTypes from "prop-types";

import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * @typedef {import('../../core/components/BaseCarousel').CarouselItem} CarouselItem
 */

/**
 * @typedef {{
 *   id: number | string
 *   imageSource: string
 *   altText:string
 *   title:string
 *   content:string
 *   buttonLink: {
 *    url: string
 *    text: string
 *   }
 *}} CardItem
 */

/**
 *
 * @param {CardItem} props
 * @returns {CarouselItem}
 */
const htmlTemplate = ({
  id,
  imageSource,
  altText,
  title,
  content,
  buttonLink,
}) => ({
  id,
  item: (
    <div className="card">
      <img
        className="card-img-top"
        src={imageSource}
        alt={altText || "image card"}
      />
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <p className="card-text">{content}</p>
      </div>
      {buttonLink && (
        <div className="card-button">
          <a href="#" className="btn btn-maroon">
            Button link here
          </a>
        </div>
      )}
    </div>
  ),
});

/**
 *
 * @param {{
 *   perView: string | number
 *   cardItems: CardItem []
 *   maxWidth?: string
 *   width?: string
 *   imageAutoSize?: boolean
 *  }} props
 * @returns { JSX.Element }
 */
const CardCarousel = ({
  perView,
  cardItems,
  width = undefined,
  maxWidth = undefined,
  imageAutoSize = true,
}) => {
  const carouselItems = cardItems.map(htmlTemplate);

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

CardCarousel.propTypes = {
  perView: PropTypes.string.isRequired,
  cardItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  imageAutoSize: PropTypes.bool,
};

export { CardCarousel };
