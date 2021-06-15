// @ts-check

/**
 * @typedef {{
 *    url: string
 *    altText?: string
 *    cssClass?: string []
 *    size: "small" | "medium" | "large"
 * }} ImageProps
 */

/**
 * @typedef {{
 *    text: string
 *    cssClass?: string []
 *    highlightColor?: "gold" | "black"
 * }} ContentProps
 */

/**
 * @typedef {{
 *  color?: "gold" | "maroon" | "gray" | "dark"
 *  content: {
 *    icon?: string
 *    header: string
 *    body: string
 *   }
 * }} AccordionCard
 */

/**
 * @typedef {{
 *  cards: AccordionCard[]
 *  openedCard: number
 * }} AccordionProps
 */

/**
 * @typedef {{
 *  id: number
 *  item: AccordionCard
 *  openCard: number
 *  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: number) => void
 * }} AccordionCardItemProps
 */

/**
 * This help VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
