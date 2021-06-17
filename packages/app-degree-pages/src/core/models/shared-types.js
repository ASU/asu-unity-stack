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
 *    altText: string
 *    vttUrl: string
 * }} VideoItem
 */

/**
 * @typedef {{
 *    url: string
 *    text: string
 *    isActive?: boolean
 * }} LinkItem
 */

/**
 *  @typedef {{
 *    icon: string
 *    title: string
 *    content: string
 *    buttonLink: LinkItem
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
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
