// @ts-check

/**
 * @typedef {import("@asu/components-core").HeroProps} HeroProps
 */

/**
 * @typedef {import("@asu/components-core").ImageProps} ImageItem
 */

/**
 * @typedef {import("@asu/components-core").VideoProps} VideoItem
 */

/**
 * @typedef {import("./shared-types").ContentItem} ContentItem
 */

/**
 * @typedef {import("./shared-types").ListSettings} ListSettings
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
 * @property {string} [filter]
 * @property {string} [include]
 * @property {string} [degreeType]
 * @property {string} [method]
 * @property {"true" | "false"} [init]
 * @property {"true" | "false"} [cert]
 * @property {string} [fields]
 * @property {string} [program]
 * @property {string} [collegeAcadOrg]
 * @property {string} [acadPlan]
 * @property {string} [departmentCode]
 * @property {boolean | "true" | "false"} [showInactivePrograms]
 * @property {Array} [blacklistAcadPlans]
 */

/**
 * @typedef {Object} GridListProps
 * @property {ProgramListDataSource}  dataSource
 * @property {ListSettings} [settings]
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
 * @property {number} [degreesPerPage]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
