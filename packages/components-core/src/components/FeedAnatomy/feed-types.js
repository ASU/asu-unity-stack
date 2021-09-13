// ts-check

/**
 *  @typedef {{
 *    color?: "white" | "dark"
 *    text?: string
 * }} FeedHeader
 *
 *  @typedef {{
 *    color?: "gold" | "maroon" | "gray" | "dark"
 *    text?: string
 *    url?: string
 * }} FeedCtaButton
 *
 *  @typedef {{
 *    color?: "gold" | "maroon" | "gray" | "dark"
 *    text?: string
 *    size?: "default" | "small" | "medium" | "large"
 * }} FeedCardButton
 *
 * @typedef {{
 *  url?: string
 *  filters?: string
 * }} DataSource
 *
 * @typedef {{
 *  header?: FeedHeader
 *  ctaButton?: FeedCtaButton
 *  cardButton?: FeedCardButton
 *  dataSource: DataSource
 *  maxItems?: number
 * }} FeedType
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
