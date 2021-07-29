// @ts-check

/**
 * @typedef {{
 *  label?: string,
 *  ariaLabel?: string,
 *  block?: boolean,
 *  color?: string,
 *  disabled?: boolean,
 *  element?: any,
 *  href?: string,
 *  icon?: string[],
 *  innerRef?: any,
 *  onClick?: () => void,
 *  size?: string,
 *  classes?: string[],
 *  target?: "_blank" | "_self" | "_top" | "_parent"
 * }} ButtonProps
 */

/**
 * @typedef {{
 *  label?: string
 *  ariaLabel?: string
 *  color?: string
 *  disabled?: boolean
 *  element?: JSX.Element | string
 *  innerRef?: React.RefObject
 *  href?: string
 *  onClick?: () => void
 * }} TagsProps
 */

/**
 * @typedef {{
 *  title: string
 *  url: string
 *  active: boolean
 * }} BreadcrumbProps
 */

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
 *    color?: "black" | "white"
 *    highlightColor?: "gold" | "black" | "white"
 *    maxWidth?: string
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
