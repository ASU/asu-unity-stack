// @ts-check

/**
 *
 * @param {any} condition
 * @param {any} then
 * @param {any} otherwise
 * @returns {any}
 */

const iff = (condition, then, otherwise) => (condition ? then : otherwise);

export { iff };
