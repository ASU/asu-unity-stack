// ts-check

/**
 * @typedef {import("../../../../components-core/src/core/types/feed-types").FeedType} CoreFeedsType
 * */

/**
 * @typedef {import("../../../../components-core/src/core/types/feed-types").FeedCardButton} CardButton
 * */

/**
 *  @typedef {Object} NewsFeedType
 *  @property {"carousel" | "card-grid" | "card-list"} [feedType]
 */

/**
 * @typedef {NewsFeedType & CoreFeedsType} FeedType
 */

/**
 * @ignore
 * @typedef {Object} TemplateProps
 * @property {CardButton} cardButton
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
