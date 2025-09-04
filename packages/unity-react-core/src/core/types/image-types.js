// @ts-check

/**
 * @typedef {Object} ImageItemProps
 * @property {string} src
 * @property {string} alt
 * @property {Array.<string>} [cssClasses]
 * @property {"lazy"|"eager"} [loading]
 * @property {"sync"|"async"|"auto"} [decoding]
 * @property {"auto"|"high"|"low"} [fetchPriority]
 * @property {string} [width]
 * @property {string} [height]
 * @property {string} [dataTestId]
 * @property {string} [cardLink]
 * @property {string} [title]
 * @property {string} [caption]
 * @property {string} [captionTitle]
 * @property {boolean} [border]
 * @property {boolean} [dropShadow]
 */

/**
 * @typedef {Object} ImageComponentProps
 * @property {string} [src]
 * @property {string} [alt]
 * @property {Array.<string>} [cssClasses]
 * @property {"lazy"|"eager"} [loading]
 * @property {"sync"|"async"|"auto"} [decoding]
 * @property {"auto"|"high"|"low"} [fetchPriority]
 * @property {string} [width]
 * @property {string} [height]
 * @property {string} [dataTestId]
 * @property {string} [cardLink]
 * @property {string} [title]
 * @property {string} [caption]
 * @property {string} [captionTitle]
 * @property {boolean} [border]
 * @property {boolean} [dropShadow]
 * @property {Array.<ImageItemProps>} [images] - Array of image objects for multiple images display
 * @property {"0"|"3"|"4"} [columns] - Number of columns for multiple images display (0 for auto, 3 for three columns, 4 for four columns)
 */

/**
 * This help VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
