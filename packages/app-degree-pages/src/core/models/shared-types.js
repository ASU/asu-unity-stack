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
 * }} LinkItem
 */

/** This type set the `text` optional
 * @typedef {{
 *    url: string
 *    text?: string
 * }} SoftLinkItem
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
 *  @typedef {{
 *    title?: string
 *    contents?: import("./shared-types").ContentItem[]
 *    image: import("./shared-types").ImageItem
 * }} OverlapContentImage
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
