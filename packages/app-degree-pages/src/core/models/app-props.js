// @ts-check
/* eslint-disable no-unused-vars */
import { degreeDataPropResolverService } from "../services";
import { tagHeadings } from "./constants";

// dummy type to help the intellisense
const DegreeDataPropResolverServiceType = degreeDataPropResolverService({});
/** @typedef {DegreeDataPropResolverServiceType} DegreeDataPropResolver */

/**
 * @template S
 * @typedef {[S, import("react").Dispatch<import("react").SetStateAction<S>>]} UseStateTuple
 */

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
 *                resolver?: DegreeDataPropResolver
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
 *  hero?: import("@asu-design-system/components-core/src/components").HeroProps
 *  introContent?: IntroContentProps
 *  programList?: GridListProps
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
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
