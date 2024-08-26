// ts-check

/**
 * @typedef {Object} ButtonProps
 * @property {string}   [label]
 * @property {string}   [ariaLabel]
 * @property {string}   [href]
 * @property {function():void} [onClick]
 * @property {"default" | "small" | "xsmall"}   [size]
 * @property {"gold" | "maroon" | "gray" | "dark"} [color]
 * @property {"_blank" | "_self" | "_top" | "_parent"} [target]
 */

/**
 * @typedef {Object} TagsProps
 * @property {string}  [label]
 * @property {string}  [ariaLabel]
 * @property {string}  [href]
 * @property {function():void}[onClick]
 * @property {"white" | "gray" | "dark"}  [color]
 */

/**
 * @typedef {Object} CardItem
 * @property {number} id
 * @property {string} title
 * @property {string} imageSource
 * @property {string} imageAltText
 * @property {string} [content]
 * @property {string} [linkUrl]
 * @property {string} [linkLabel]
 * @property {string} [eventTime]
 * @property {string} [eventLocation]
 * @property {Array.<ButtonProps>} [buttons]
 * @property {Array.<TagsProps>} [tags]
 */

/**
 * @typedef {Object} CardCarouselType
 * @property {Array.<CardItem>} cardItems
 * @property {number | string} [perView]
 * @property {string} [width]
 * @property {string} [maxWidth]
 * @property {boolean} [imageAutoSize]
 * @property {boolean} [cardHorizontal]
 * @property {"stack" | "inline"} [cardEventFormat]
 * @property {"default" | "degree" | "event" | "news" | "story"} [cardType]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
