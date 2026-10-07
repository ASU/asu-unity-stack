// @ts-check

/**
 * @typedef {Object} BlockQuoteStyle
 * @property {Array.<string>} [containerCssClass]
 * @property {Array.<string>} [titleCssClass]
 * @property {Array.<string>} [contentCssClass]
 */

/**
 * @typedef {Object} BlockQuoteQuote
 * @property {string} content
 * @property {string} [title]
 * @property {Object} cite
 * @property {string} cite.name
 * @property {string} [cite.description]
 */

/**
 * @typedef {Object} BlockQuoteProps
 * @property {string} imageSource
 * @property {string} imageAltText
 * @property {BlockQuoteQuote} quote
 * @property {BlockQuoteStyle} itemStyle
 */

/**
 * This help VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
