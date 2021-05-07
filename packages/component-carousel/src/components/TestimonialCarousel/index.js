// @ts-check
import { Testimonial } from "@asu-design-system/components-core/src/components/Testimonial";
import { h } from "preact";
import PropTypes from "prop-types";

import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * @typedef {import('../../core/components/BaseCarousel').CarouselItem} CarouselItem
 */

/**
 * @typedef {import("@asu-design-system/components-core/src/components/Testimonial").TestimonialStyle} TestimonialStyle
 */

/**
 * @typedef {{
 *  id: number
 *  quote: {
 *    title?: string
 *    content: string
 *    cite?: {
 *       name: string
 *       description?: string
 *    }
 *  }
 *  imageSource?: string
 *  altText?:string
 * }} TestimonialItem
 */

/**
 * This function creates a html template which render an image
 * @param {TestimonialItem} props
 * @param {TestimonialStyle} itemStyle
 * @returns { CarouselItem }
 */
const htmlTemplate = ({ id, imageSource, altText, quote }, itemStyle = {}) => ({
  id,
  item: (
    <Testimonial
      imageSource={imageSource}
      altText={altText}
      quote={quote}
      itemStyle={itemStyle}
    />
  ),
});

/**
 *
 * @param {{
 *    testimonialItems: TestimonialItem[]
 *    itemStyle?: TestimonialStyle
 *    maxWidth: string
 *    width?: string
 *    hasPositionIndicators?: boolean
 *    hasNavButtons?: boolean
 *    imageAutoSize?: boolean
 *  }} props
 * @returns { JSX.Element }
 */
const TestimonialCarousel = ({
  width,
  maxWidth,
  testimonialItems,
  itemStyle = {},
  hasNavButtons = false,
  hasPositionIndicators = false,
  imageAutoSize = true,
}) => {
  const carouselItems = testimonialItems.map(item =>
    htmlTemplate(item, itemStyle)
  );

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
      imageAutoSize={imageAutoSize}
    />
  );
};

TestimonialCarousel.propTypes = {
  perView: PropTypes.string.isRequired,
  testimonialItems: PropTypes.arrayOf(PropTypes.shape(Testimonial.propTypes))
    .isRequired,
  itemStyle: PropTypes.object,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  hasContent: PropTypes.bool,
  imageAutoSize: PropTypes.bool,
};

export { TestimonialCarousel };
