// ts-check

/**
 * @typedef {Object} FeedHeader
 * @property {"white" | "dark"} [color]
 * @property {string} [text]
 */

/**
 * @typedef {Object} FeedCtaButton
 * @property {"gold" | "maroon" | "gray" | "dark"} [color]
 * @property { string} [text]
 * @property { string} [url]
 */

/**
 * @typedef {Object} FeedCardButton
 * @property {"gold" | "maroon" | "gray" | "dark"} [color]
 * @property {string} [text]
 * @property {"default" | "small" | "medium" | "large"} [size]
 */

/**
 * @typedef {Object} DataSource
 *  @property {string} [url]
 *  @property {string} [filters]
 */

/**
 *  @typedef {Object} FeedType
 *  @property {FeedHeader} [header]
 *  @property {FeedCtaButton} [ctaButton]
 *  @property {FeedCardButton} [cardButton]
 *  @property {DataSource} [dataSource]
 *  @property {number} [maxItems]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 * @ignore
 */
export const JSDOC = "jsdoc";
