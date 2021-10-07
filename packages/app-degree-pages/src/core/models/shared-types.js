// @ts-check

import { tagHeadings } from "../constants/component-constants";
import { degreeDataPropResolverService } from "../services";

// dummy type to help the intellisense
const DegreeDataPropResolverServiceType = degreeDataPropResolverService({});
/** @typedef {DegreeDataPropResolverServiceType} DegreeDataPropResolver */

/**
 * @typedef {import("../../../../components-core/src/core/models/shared-model-types").ImageProps} ImageProps
 */

/**
 * @template S
 * @typedef {[S, import("react").Dispatch<import("react").SetStateAction<S>>]} UseStateTuple
 */

/**
 * @typedef {{
 *    type?: "video" | "youtube"
 *    title?: string
 *    url: string
 *    vttUrl?: string
 * }} VideoItem
 */

/**
 * @typedef {{
 *    url: string
 *    text: string
 * }} LinkItem
 */

/** This type set the `text` optional
 * @typedef {{
 *    url: string
 *    text?: string
 * }} SoftLinkItem
 */

/**
 * @typedef {{
 *  ariaLabel: string
 *  color: "gold" | "maroon" | "gray" | "dark"
 *  icon?: string []
 *  href?: string
 *  label: string
 *  onClick?: () => void
 *  size?: "default" | "small" | "xsmall"
 *  target?: "_blank" | "_self" | "_top" | "_parent"
 * }} Button
 */

/**
 *  @typedef {{
 *    icon: string []
 *    title: string
 *    content: string
 *    buttonLink: Button
 * }} CardItem
 */

/**
 * @typedef {{
 *    url: string
 *    altText?: string
 *    cssClass?: string []
 * }} ImageItem
 */

/**
 * @typedef {{
 *    text: string
 *    cssClass?: string []
 * }} ContentItem
 */

/**
 * @typedef {{
 *    title: string
 *    content: string
 * }} SectionContentItem
 */

/**
 * @typedef {{
 *    component?: keyof tagHeadings
 * }} ChildType
 *
 * @typedef {ContentItem & ChildType} AppTitleProps
 */

/**
 * @typedef {{
 *  color?: "gold" | "maroon" | "gray" | "dark"
 *  content: {
 *    icon?: string
 *    header: string
 *    body: string
 *   }
 * }} AccordionCard
 */

/**
 *  @typedef {{
 *    headingTag?: string
 *    title?: string
 *    contentDirection?: "left" |  "right"
 *    contents?: import("./shared-types").ContentItem[]
 *    image?: import("./shared-types").ImageItem
 *    contentChildren?: JSX.Element
 * }} OverlapContentImage
 */

/**
 * @typedef {{
 *  career: import("./shared-types").LinkItem
 *  growth: number
 *  medianSalary: string
 *  brightOutlook: boolean
 *  greenOccupation: boolean
 * }} TableProps
 */

/**
 * @typedef {{
 *  targetIdName: string
 *  text: string
 * }} AnchorItem
 */

/**
 * @typedef  {{
 *    id?: string | number
 *    text: string
 *    value: string
 * }} FilterOption
 *
 *  @typedef  {{
 *    isActive?: boolean
 *    keyword?: string
 *    collegeAcadOrg?: string
 *    departmentCode?: string
 *    locations?: FilterOption []
 *    asuLocals?: FilterOption []
 *    acceleratedConcurrent?: FilterOption
 *    showInactivePrograms?: boolean | import("./listing-page-types").stringBool
 * }} FiltersState
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
