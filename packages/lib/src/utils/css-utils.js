// @ts-check

/**
 * @description Concatenate the provided classes into a single string, separated by a space.
 * @param {string []} classes
 * @returns {string}
 */
const spreadClasses = classes => (classes || []).join(" ");

export { spreadClasses };
