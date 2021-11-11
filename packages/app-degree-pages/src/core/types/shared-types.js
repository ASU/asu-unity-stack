// @ts-check

/**
 * @typedef {import("@asu-design-system/components-core/src/core/types/shared-types").ImageProps} ImageItem
 */

/**
 * @typedef {import("@asu-design-system/components-core/src/core/types/shared-types").ButtonProps} ButtonProps
 */

/** @typedef {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"} tagHeadings */

/**
 * @typedef {Object} ContentItem
 * @property {string} text
 * @property {Array.<string>} [cssClass]
 * @property {tagHeadings} [component]
 */

/**
 * @typedef {Object} SectionContentItem
 * @property {string} title
 * @property {string} content
 */

/**
 * @typedef {Object} LinkItem
 * @property {string} url
 * @property {string} text
 */

/**
 * @typedef {Object} CardItem
 * @property {Array.<string>} icon
 * @property {string} title
 * @property {string} content
 * @property {ButtonProps} buttonLink
 */

/**
 * @typedef {Object} OverlapContentImage
 * @property {boolean} [hide]
 * @property {string} [headingTag]
 * @property {string} [title]
 * @property {"left" |  "right"} [contentDirection]
 * @property {Array.<ContentItem>} [contents]
 * @property {ImageItem} [image]
 * @property {JSX.Element} [contentChildren]
 * }}
 */

/**
 * @typedef {Object} TableProps
 * @property {LinkItem} career
 * @property {number} growth
 * @property {string} medianSalary
 * @property {boolean} brightOutlook
 * @property {boolean} greenOccupation
 */

/**
 * @typedef {Object} ColumSettings
 * @property {boolean} [hideCollegeSchool]
 */

/**
 * @typedef {Object} CardSettings
 * @property {ImageItem} [image]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
