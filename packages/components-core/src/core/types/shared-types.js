// @ts-check

/**
 * @typedef {Object} ButtonProps
 * @property {string}   [label]
 * @property {string}   [ariaLabel]
 * @property {boolean}  [block]
 * @property {boolean}  [disabled]
 * @property {any}      [element]
 * @property {string}   [href]
 * @property {string[]} [icon]
 * @property {any}      [innerRef]
 * @property {string[]} [classes]
 * @property {function():void} [onClick]
 * @property {"default"|"small"|"xsmall"}   [size]
 * @property {"gold"|"maroon"|"gray"|"dark"} [color]
 * @property {"_blank"|"_self"|"_top"|"_parent"} [target]
 */

/**
 * @typedef {Object} ButtonIconOnlyProps
 * @property {Array.<string>} icon
 * @property {string} [color]
 * @property {React.RefObject} [innerRef]
 * @property {function():void} [onClick]
 * @property {"large"|"small"} [size]
 */

/**
 * @typedef {Object} TagsProps
 * @property {string}  [label]
 * @property {string}  [ariaLabel]
 * @property {string}  [color]
 * @property {boolean} [disabled]
 * @property {string}  [href]
 * @property {function():void}[onClick]
 * @property {JSX.Element|string}[element]
 * @property {React.RefObject}   [innerRef]
 */

/**
 * @typedef {Object} BreadcrumbProps
 * @property {string}  title
 * @property {string}  url
 * @property {boolean} active
 */

/**
 * @typedef {Object} ImageProps
 * @property {string}    url
 * @property {string}    [altText]
 * @property {Array.<string>}  [cssClass]
 * @property {"small"|"medium"|"large"} [size]
 */

/**
 * @typedef {Object} ContentProps
 * @property {string} text
 * @property {string} [maxWidth]
 * @property {Array.<string>}  [cssClass]
 * @property {"black"|"white"} [color]
 * @property {"gold"|"black"|"white"} [highlightColor]
 */

/**
 * @typedef {Object} AccordionCard
 * @property {"gold" | "maroon" | "gray" | "dark"} [color]
 * @property {Object} [content]
 * @property {string} [content.icon]
 * @property {string} content.header
 * @property {string} content.body
 */

/**
 * @typedef {Object} AccordionProps
 * @property {AccordionCard[]} cards
 * @property {number} [openedCard]
 */

/**
 * @callback ReactMouseEvent
 * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} event
 * @param {number} id
 * @returns {void}
 */

/**
 * @typedef {Object} AccordionCardItemProps
 * @property {number} id
 * @property {AccordionCard} item
 * @property {number} openCard
 * @property {ReactMouseEvent} onClick
 */

/**
 * @typedef {Object} AnchorMenuItem
 * @property {string} text
 * @property {string} targetIdName
 * @property {Array.<string>} [icon]
 */

/**
 * @typedef {Object} AnchorMenuProps
 * @property {Array.<AnchorMenuItem>} items
 * @property {string} firstElementId
 * @property {boolean} [focusFirstFocusableElement]
 */

/**
 * @callback PageChangeEvent
 * @param {Event} e
 * @param {number} pages
 * @returns {void}
 */

/**
 * @typedef {Object} PaginationProps
 * @property {string}  type
 * @property {string}  background
 * @property {number}  [currentPage]
 * @property {number}  [totalPages]
 * @property {boolean} [showFirstButton]
 * @property {boolean} [showLastButton]
 * @property {number}  [totalNumbers]
 * @property {PageChangeEvent} onChange
 */

/**
 * @typedef {Object} PageItemProps
 * @property {boolean} [isClickeable]
 * @property {boolean} [disabled]
 * @property {boolean} [pageLinkIcon]
 * @property {boolean} [selectedPage]
 * @property {function():void} [onClick]
 * @property {React.ReactNode} children
 */

/**
 * This help VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
