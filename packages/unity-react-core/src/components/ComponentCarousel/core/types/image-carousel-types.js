// ts-check

/**
 * @typedef {Object} ImageItem
 * @property {number}  id
 * @property {string}  imageSource
 * @property {string}  imageAltText
 * @property {string}  [title]
 * @property {string}  [content]
 */

/**
 * @typedef {Object} ImageCarouselType
 * @property {Array.<ImageItem>} imageItems
 * @property {number | string} [perView]
 * @property {string} [width]
 * @property {string} [maxWidth]
 * @property {boolean} [imageAutoSize]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
