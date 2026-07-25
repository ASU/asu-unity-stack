// @ts-check

/**
 * @typedef {import('./shared-types').ImageProps} ImageProps
 * @typedef {import('./shared-types').ContentProps} ContentProps
 */

/**
 * @typedef {Object} ExpandableHeroPane
 * @property {ImageProps} image
 * @property {ContentProps} title
 * @property {ContentProps} [subTitle]
 * @property {ContentProps[]} [contents]
 * @property {"white"|"black"} [contentsColor]
 */

/**
 * @typedef {Object} ExpandableHeroesProps
 * @property {ExpandableHeroPane[]} panes - EXACTLY 3 panes. Length validated at runtime.
 * @property {number} [initialActiveIndex=0]
 * @property {function(number, ExpandableHeroPane): void} [onPaneChange]
 * @property {string} [gaRegion="main content"]
 * @property {string} [gaSection="hero"]
 */

/**
 * This helps VSCODE and JSDOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 * @ignore
 */
export const JSDOC = "jsdoc";
