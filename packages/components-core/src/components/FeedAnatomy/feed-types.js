// ts-check

/**
 *  @typedef {{
 *    color: string
 *    text: string
 * }} FeedHeader
 *
 *  @typedef {{
 *    color: string
 *    text: string
 *    url: string
 * }} FeedCtaButton
 *
 * @typedef {{
 *  feedType?: "carousel" | "card-grid" | "card-list"
 *  header: AppHeader
 *  ctaButton: FeedCtaButton
 *  dataSource: { url: string }
 *  maxItems?: number
 * }} FeedType
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
