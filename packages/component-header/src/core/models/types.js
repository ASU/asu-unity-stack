// @ts-check

/**
 * @typedef {{
 *    alt: string
 *    src: string
 *    mobileSrc: string
 *    brandLink: string
 *  }} Logo
 */

/**
 * @typedef {{
 *    href: string
 *    color?: "gold" | "maroon" | "light" | "dark"
 *    text: string
 *    onClick?: () => void
 *  }} Button
 */

/**
 * @typedef {{
 *  id: number,
 *  href?: string,
 *  text?: string,
 *  type?: string,
 *  selected?: boolean,
 *  items?: [object][],
 *  buttons?: Button[],
 *  class?: string
 * }} NavTreeProps
 */

/**
 * @typedef {{
 *  isPartner: boolean
 *  navTree: NavTreeProps[]
 *  title?: string
 *  baseUrl?: string
 *  parentOrg?:  string
 *  parentOrgUrl?: string
 *  partnerLogo: Logo
 *  logo: Logo
 *  loggedIn: boolean
 *  userName: string
 *  loginLink: string
 *  logoutLink:  string
 *  buttons: Button[]
 *  breakpoint: "Lg" | "Xl"
 *  animateTitle: boolean
 *  expandOnHover: boolean
 *  mobileNavTree: NavTreeProps[]
 * }} HeaderProps
 */

export const JSDOC = "jsdoc";
