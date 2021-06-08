// @ts-check

// eslint-disable-next-line no-unused-vars
import { tagHeadings } from "./constants";

/**
 * @typedef {{
 *    url: string
 *    altText?: string
 *    cssClass?: string []
 * }} AppImageProps
 */

/**
 * @typedef {{
 *    text: string
 *    cssClass?: string []
 * }} AppContentProps
 */

/**
 * @typedef {{
 *    component?: keyof tagHeadings
 * }} ChildType
 *
 * @typedef {AppContentProps & ChildType} AppTitleProps
 */

/**
 * @typedef {{
 *    image: AppImageProps
 *    content?: AppContentProps
 * }} HeroProps
 */

/**
 * @typedef {{
 *    type?: "text" | "text-image-overlay" | "text-photo-grid"
 *    image?: AppImageProps
 *    header?: AppTitleProps
 *    title?: AppTitleProps
 *    contents?: AppContentProps[]
 *    photoGrid?: {
 *      images: AppImageProps[]
 *    }
 * }} IntroContentProps
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
 *                row: Object
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
 *  sharedDataSources?: AppDataSource []
 *  hero?: HeroProps
 *  introContent?: IntroContentProps
 *  degreeList?: GridListProps
 * }} AppProps
 */

/**
 * @typedef {{
 *  text: string
 *  url: string
 * }} AtAGlanceItem
 */

/**
 *  @typedef {{
 *    offeredBy: AtAGlanceItem
 *   locations: AtAGlanceItem[]
 *   firstRequirementMathCourse: string
 *   mathIntensity: string
 *  timeCommitment: string
 * }} AtAGlanceProps
 */

/**
 * This help VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
