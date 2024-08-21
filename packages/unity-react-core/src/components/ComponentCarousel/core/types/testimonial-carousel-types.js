// ts-check

/**
 * @typedef {import("../../../../components-core/src/core/types/testimonial-types").TestimonialStyle} TestimonialStyle
 * */

/**
 * @typedef {import("../../../../components-core/src/core/types/testimonial-types").TestimonialQuote} TestimonialQuote
 * */

/**
 * @typedef {Object} TestimonialItem
 * @property {number}  id
 * @property {string} [imageSource]
 * @property {string} [imageAltText]
 * @property {TestimonialQuote} quote
 */

/**
 * @typedef {Object} TestimonialCarouselType
 * @property {Array.<TestimonialItem>} testimonialItems
 * @property {string} maxWidth
 * @property {string} [width]
 * @property {TestimonialStyle} [itemStyle]
 * @property {boolean} [hasPositionIndicators]
 * @property {boolean} [hasNavButtons]
 * @property {boolean} [imageAutoSize]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
