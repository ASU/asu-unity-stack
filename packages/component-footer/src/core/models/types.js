// @ts-check

/**
 * @typedef {object} Link
 * @property {string} url
 * @property {string} title
 * @property {string} text
 */

/**
 * @typedef {object} Column
 * @property {string} title
 * @property {Link[]} links
 */

/**
 * @typedef {object} Social
 * @property {string} logoUrl
 * @property {string} unitLogo
 * @property {object} [mediaLinks]
 * @property {string} [mediaLinks.facebook]
 * @property {string} [mediaLinks.twitter]
 * @property {string} [mediaLinks.instagram]
 * @property {string} [mediaLinks.linkedIn]
 * @property {string} [mediaLinks.youtube]
 */

/**
 * @typedef {object} Contact
 * @property {string} title
 * @property {string} contactLink
 * @property {string} [contributionLink]
 * @property {Column[]} [columns]
 */

/**
 * @typedef {object} ASUFooter
 * @property {Social} social
 * @property {Contact} contact
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */

export const JSDOC = "jsdoc";
