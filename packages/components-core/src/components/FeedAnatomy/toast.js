// src/toast.js

// /**
//  * @typedef {{
//  *    color: "warn" | "info",
//  *    pippo: string
//  * }} FeedType
//  */

// /**
//  * @typedef {Object} Entity
//  * @property {string} shape ...
//  * @property {string} name  ...
//  */

/**
 * @typedef {import("./entity").Entity} Entity
 */

/**
 * @typedef {Entity & PersonProperties} Person
 */

/**
 * @typedef {Object} PersonProperties
 * @property {number} age    ...
 * @property {number} height ...
 * @augments Person
 */

/**
 * @typedef {Object} Toast
 * @property {string} id
 * @property {boolean} closed - Indicates whether user has close the toast.
 * @property {Date} generatedOn - Indicates when the toast was generated.
 * @property {string} message - toast content.
 * @property {"warn" | "info"} type -  Indicates type of toast.
 * Also useful to show different icons.
 */

/**
 * A function for showing toast
 * @param {Toast} toast - {@link toast} object
 * @return {Entity}
 * containing all components of the toast.
 */
export function showToast(toast = null) {}
