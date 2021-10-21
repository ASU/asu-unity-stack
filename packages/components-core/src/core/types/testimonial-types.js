// @ts-check

/**
 * @typedef {Object} TestimonialStyle
 * @property {Array.<string>} [containerCssClass]
 * @property {Array.<string>} [titleCssClass]
 * @property {Array.<string>} [contentCssClass]
 */

/**
 * @typedef {Object} TestimonialProps
 * @property {string} imageSource
 * @property {string} imageAltText
 * @property {Object} quote
 * @property {string} quote.content
 * @property {string} [quote.title]
 * @property {Object} quote.cite
 * @property {string} quote.cite.name
 * @property {string} [quote.cite.description]
 * @property {TestimonialStyle} itemStyle
 */

/**
 * This help VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
