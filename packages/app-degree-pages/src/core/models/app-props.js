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
 *    image: AppImageProps
 *    content?: AppContentProps
 * }} HeroProps
 */

/**
 * @typedef {("text" | "text-image-overlay" | "text-photo-grid")} IntroType
 *
 * @typedef {{
 *    type?: IntroType
 *    image?: AppImageProps
 *    header?: AppContentProps
 *    title?: AppContentProps
 *    body?: AppContentProps
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
 *    label: AppContentProps
 *    dataKey: string
 *    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
 *    format?: (dataKey: string, value: string) => string
 *    minWidth?: number
 * }} GridColumn
 *
 * @typedef {{
 *    dataSource: AppDataSource | string
 *    columns: GridColumn[]
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
 * This help VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
