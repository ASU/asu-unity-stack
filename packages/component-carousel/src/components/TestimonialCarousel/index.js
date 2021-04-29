// @ts-check
import { h } from "preact";
import PropTypes from "prop-types";

import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * @typedef {import('../../core/components/BaseCarousel').CarouselItem} CarouselItem
 */

/**
 * @typedef {{
 *          id: number
 *          quote: {
 *            title?: string
 *            content: string
 *            cite?: {
 *               name: string
 *               description?: string
 *            }
 *          }
 *          imageSource?: string
 *          altText?:string
 * }} TestimonialItem
 *
 *
 * @typedef {{
 *      itemCssClass?: string[]
 *      itemTitleCssClass?: string[]
 *      itemQuoteContentCssClass?: string[]
 * }} ItemCssClass
 */

/**
 * @param {string []} classes
 * @returns {string}
 */
const spreadClasses = classes => (classes || []).join(" ");

/**
 * This function creates a html template which render an image
 * @param {TestimonialItem} props
 * @param {ItemCssClass} itemStyle
 * @returns { CarouselItem }
 */
const template = ({ id, imageSource, altText, quote }, itemStyle = {}) => ({
  id,
  item: (
    <div
      className={`uds-blockquote uds-testimonial ${spreadClasses(
        itemStyle.itemCssClass
      )}`}
    >
      {imageSource && <img src={imageSource} alt={altText} />}
      <svg role="presentation" viewBox="0 0 302.87 245.82">
        <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
      </svg>

      <blockquote>
        {quote.title && (
          <h3 className="text-center">
            <span className={spreadClasses(itemStyle.itemTitleCssClass)}>
              {quote.title}
            </span>
          </h3>
        )}
        <p className={spreadClasses(itemStyle.itemQuoteContentCssClass)}>
          {quote.content}
        </p>

        {quote.cite && (
          <div className="citation">
            <cite className="name">{quote.cite.name}</cite>
            {quote.cite && (
              <cite className="description">{quote.cite.description}</cite>
            )}
          </div>
        )}
      </blockquote>
    </div>
  ),
});

/**
 *
 * @param {{
 *  testimonialItems: TestimonialItem[]
 *  maxWidth: string
 *  width?: string
 *  hasPositionIndicators?: boolean
 *  hasNavButtons?: boolean
 *  itemStyle?:ItemCssClass
 *  }} props
 * @returns { JSX.Element }
 */
const TestimonialCarousel = ({
  width,
  maxWidth,
  testimonialItems,
  hasNavButtons = false,
  hasPositionIndicators = false,
  itemStyle = {},
}) => {
  const carouselItems = testimonialItems.map(item => template(item, itemStyle));

  return (
    <BaseCarousel
      perView={1}
      maxWidth={maxWidth}
      width={width}
      carouselItems={carouselItems}
      isFullWidth={true}
      removeSideBackground={true}
      hasNavButtons={hasNavButtons}
      hasPositionIndicators={hasPositionIndicators}
    />
  );
};

TestimonialCarousel.propTypes = {
  perView: PropTypes.string.isRequired,
  imageItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  hasContent: PropTypes.bool,
};

export { TestimonialCarousel };
