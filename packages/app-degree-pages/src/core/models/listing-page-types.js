// @ts-check
/* eslint-disable no-unused-vars */

/**
 * @typedef {{
 *    type?: "text" | "text-image-overlay" | "text-photo-grid"
 *    image?: import("./shared-types").AppImageProps
 *    header?: import("./shared-types").AppTitleProps
 *    title?: import("./shared-types").AppTitleProps
 *    contents?: import("./shared-types").ContentItem[]
 *    photoGrid?: {
 *      images: import("./shared-types").AppImageProps[]
 *    }
 * }} IntroContentProps
 */

/* TODO: condider to remove this type, the application does not look to rquire
         this level of complexity. The datasource look to be a simple string
          which reppresents the API URL
*/
/**
 *
 * @typedef {{
 *    id?: string
 *    sourceType?: "api" | "shared-data-source" | "static-json" // default `api`
 *    sharedDataSourceId?: string // only if `dataSourceType == "shared-data-source"``
 *    data?: object[] // only if `dataSourceType == "static-json"``
 *    apiUrl?: string  // only if `dataSourceType == "api"``
 * }} AppDataSource
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
 *                onMouseOver?: (url: string) => void
 *                onMouseOut?: () => void
 *             }) => JSX.Element
 * }} GridColumn
 *
 * @typedef {{
 *    dataSource: AppDataSource | string
 *    columns?: GridColumn[]
 * }} GridListProps
 */

/**
 * @typedef {{
 *  hero?: import("@asu-design-system/components-core/src/components").HeroProps
 *  introContent?: IntroContentProps
 *  programList?: GridListProps
 * }} ListingPageProps
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
