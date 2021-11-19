// @ts-check

/**
 * @typedef {{
 *   url: string,
 *   title: string,
 *   text: string,
 * }} Link
 */

/**
 * @typedef {{
 *   title: string,
 *   links: Link[]
 * }} Column;
 */

/**
 *  @typedef {{
 *   logoUrl: string
 *   unitLogo: string
 *   mediaLinks?: {
 *     facebook?: string
 *     twitter?: string
 *     instagram?: string
 *     linkedIn?: string
 *     youtube?: string
 *   }
 * }} Social
 */

/**
 *  @typedef {{
 *   title: string
 *   contactLink: string
 *   contributionLink?: string
 *   columns?: Column[]
 * }} Contact
 */

/**
 * @typedef {{
 *  social: Social
 *  contact: Contact
 * }} ASUFooter
 */

export const JSDOC = "jsdoc";
