// @ts-check

/**
 * @typedef {Object} TestimonialStyle
 * @property {Array.<string>} [containerCssClass]
 * @property {Array.<string>} [titleCssClass]
 * @property {Array.<string>} [contentCssClass]
 */

/**
 * @typedef {Object} TestimonialQuote
 * @property {string} content
 * @property {string} [title]
 * @property {Object} cite
 * @property {string} cite.name
 * @property {string} [cite.description]
 */

/**
 * @typedef {Object} TestimonialProps
 * @property {string} imageSource
 * @property {string} imageAltText
 * @property {TestimonialQuote} quote
 * @property {TestimonialStyle} itemStyle
 */

/**
 * This help VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
