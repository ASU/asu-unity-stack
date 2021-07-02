// @ts-check

/**
 * @typedef {{
 *    applyNowUrl?: string
 *    type?: "text" | "text-media" | "text-image-overlay" | "text-photo-grid" | string
 *    image?: import("./shared-types").ImageItem
 *    video?: import("./shared-types").VideoItem
 *    header?: import("./shared-types").AppTitleProps
 *    title?: import("./shared-types").AppTitleProps
 *    contents?: import("./shared-types").ContentItem[]
 *    photoGrid?: {
 *      images: import("./shared-types").ImageItem[]
 *    }
 * }} IntroContentProps
 */

/* TODO: condider to remove this type, the application does not look to rquire
         this level of complexity. The datasource look to be a simple string
          which reppresents the API URL
*/
//  * TODO: remove it if not needed anymore
//  * @typedef {{
//  *    id?: string
//  *    sourceType?: "api" | "shared-data-source" | "static-json" // default `api`
//  *    sharedDataSourceId?: string // only if `dataSourceType == "shared-data-source"``
//  *    data?: object[] // only if `dataSourceType == "static-json"``
//  *    apiUrl?: string  // only if `dataSourceType == "api"``
//  * }} OldAppDataSource

/**
 * @typedef {"true" | "false"} stringBool
 *
 * @typedef {{
 *    endpoint: string
 *    method: string
 *    init?: stringBool
 *    [x:string]: string
 * }} AppDataSource
 *
 * @typedef {{
 *    program?: string
 *    cert?: stringBool
 *    CollegeAcadOrg?: string
 *    DepartmentCode?: string
 * } & AppDataSource } ProgramListDataSource
 *
 * @typedef {{
 *    acadPlan: string
 * } & AppDataSource } ProgramDetailDataSource
 *
 */

/**
 * @typedef {{
 *    id?: string
 *    label: string
 *    ariaLabel?: string
 *    dataKey?: string
 *    dataKeyLink?: string
 *    className?: string
 *    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
 *    format?: (dataKey: string, value: string) => string
 *    minWidth?: number
 *    sortable?: boolean
 *    hasInfo?: boolean
 *    headerTemplate?: () => JSX.Element
 *    contentTemplate?: (
 *      props: {
 *                col: GridColumn
 *                row: Object<string, any>
 *                resolver?: import("./shared-types").DegreeDataPropResolver
 *                rowIndex?: number
 *                onClick?: (rowIndex: number, ...rest) => void
 *                actionUrls?: ActionUrlProps
 *                onMouseOver?: (url: string) => void
 *                onMouseOut?: () => void
 *             }) => JSX.Element
 * }} GridColumn
 *
 * @typedef {{
 *  hideCollegeSchool?: boolean
 * }} ColumSettings
 *
 * @typedef {{
 *    dataSource: ProgramListDataSource | string
 *    columns?: GridColumn[]
 *    settings?: ColumSettings
 * }} GridListProps
 */
/**
 * @typedef {{
 *    applyNowUrl?: string
 *    majorInfoUrl?: string
 *    majorInfoOnlineUrl?: string
 *    accelerateDegreeUrl?: string
 * }} ActionUrlProps
 */

/**
 * @typedef {{
 *  actionUrls?: ActionUrlProps
 *  hero?: import("@asu-design-system/components-core/src/components").HeroProps
 *  introContent?: IntroContentProps
 *  hasSearchBar?: boolean
 *  hasFilters?: boolean
 *  programList: GridListProps
 * }} ListingPageProps
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
