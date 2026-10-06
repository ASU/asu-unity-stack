// @ts-check

// @ts-check

/**
 * @typedef {object} Logo
 * @property {string} alt
 * @property {string} title
 * @property {string} src
 * @property {string} mobileSrc
 * @property {string} [brandLink]
 */

/**
 * @typedef {object} Button
 * @property {string} [href]
 * @property {("gold"|"maroon"|"light"|"dark")} [color]
 * @property {string} text
 * @property {string} [classes]
 * @property {function} [onClick]
 * @property {function} [onFocus]
 * @property {("a"|"button"|"div")} [as]
 */

/**
 * @typedef {object} NavTreeProps
 * @property {number} id
 * @property {string} [href]
 * @property {string} [text]
 * @property {string} [type]
 * @property {boolean} [selected]
 * @property {object[]} [items]
 * @property {Button[]} [buttons]
 * @property {string} [class]
 * @property {function} [onClick]
 */

/**
 * @typedef {object} HeaderProps
 * @property {boolean} isPartner
 * @property {boolean} [isUnbranded] - Renders the unbranded header: the ASU logo is replaced by unbrandedLogo, and the universal navbar keeps only the skip-nav and report-accessibility links, revealed on keyboard focus.
 * @property {NavTreeProps[]} navTree
 * @property {string} [title]
 * @property {string} [baseUrl]
 * @property {string} [parentOrg]
 * @property {string} [parentOrgUrl]
 * @property {Logo} partnerLogo
 * @property {Logo} [unbrandedLogo] - Logo shown instead of the ASU logo when isUnbranded is true (src, alt, brandLink).
 * @property {Logo} logo
 * @property {boolean} loggedIn
 * @property {string} userName
 * @property {string} loginLink
 * @property {function} [onLoginClick]
 * @property {string} logoutLink
 * @property {function} [onLogoutClick]
 * @property {Button[]} buttons
 * @property {("Lg"|"Xl")} breakpoint
 * @property {boolean} animateTitle
 * @property {boolean} expandOnHover
 * @property {NavTreeProps[]} mobileNavTree
 * @property {string} searchUrl
 * @property {string} site
 * @property {string} renderDiv - Can be either "true" or "false".
 */

/**
 * @typedef {HeaderProps} HeaderContext
 * @property {number} headerTop
 * @property {number} headerHeight
 * @property {number|undefined} itemOpened
 * @property {function} setItemOpened
 * @property {boolean} mobileMenuOpen
 * @property {function} setMobileMenuOpen
 * @property {function} singlePageAppReset
 */

export const JSDOC = "jsdoc";
