// ts-check

/**
 * @typedef {Object} ImageGalleryCarouselItem
 * @property {number}  id
 * @property {string}  imageSource
 * @property {string}  imageAltText
 * @property {string}  [thumbnailSource]
 * @property {string}  [title]
 * @property {string}  [content]
 */

/**
 * @typedef {Object} ImageGalleryCarouselType
 * @property {Array.<ImageGalleryCarouselItem>} imageItems
 * @property {string} [width]
 * @property {string} [maxWidth]
 * @property {boolean} [hasContent]
 * @property {boolean} [imageAutoSize]
 * @property {Object.<string, string>} [customClasses]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
