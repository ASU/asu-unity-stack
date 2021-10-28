// @ts-check

/**
 * @typedef {import("@asu-design-system/components-core/src/core/types/hero-types").HeroProps} HeroProps
 */

/**
 * @typedef {import("@asu-design-system/components-core/src/core/types/shared-types").ImageProps} ImageItem
 */

/**
 * @typedef {import("@asu-design-system/components-core/src/core/types/video-types").VideoProps} VideoItem
 */

/**
 * @typedef {import("./shared-types").ContentItem} ContentItem
 */

/**
 * @typedef {import("./shared-types").ColumSettings} ColumSettings
 */

/**
 * @typedef {Object} IntroContentProps
 * @property {string} [applyNowUrl]
 * @property {"text" | "text-media" | "text-image-overlay" | "text-photo-grid"} [type]
 * @property {ImageItem} [image]
 * @property {VideoItem} [video]
 * @property {ContentItem} [header]
 * @property {ContentItem} [title]
 * @property {Array.<ContentItem>} [contents]
 * @property {Object} [photoGrid]
 * @property {Array.<ImageItem>} [photoGrid.images]
 *
 */

/**
 * @typedef {Object} ProgramListDataSource
 * @property {string} [endpoint]
 * @property {string} [method]
 * @property {"true" | "false"} [init]
 * @property {"true" | "false"} [cert]
 * @property {string} [fields]
 * @property {string} [program]
 * @property {string} [collegeAcadOrg]
 * @property {string} [departmentCode]
 * @property {boolean | "true" | "false"} [showInactivePrograms]
 */

/**
 * @typedef {Object} GridListProps
 * @property {ProgramListDataSource}  dataSource
 * @property {ColumSettings} [settings]
 */

/**
 * @typedef {Object} ActionUrlProps
 * @property {string}   [applyNowUrl]
 * @property {string}   [majorInfoUrl]
 */

/**
 * @typedef {Object} ListingPageProps
 * @property {string} [appPathFolder]
 * @property {ActionUrlProps} [actionUrls]
 * @property {boolean} [hideCollegeSchool]
 * @property {boolean} [hasSearchBar]
 * @property {boolean} [hasFilters]
 * @property {HeroProps} [hero]
 * @property {IntroContentProps} [introContent]
 * @property {GridListProps} [programList]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
