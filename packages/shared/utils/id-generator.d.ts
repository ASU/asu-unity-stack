/**
 * example:
 * const gen = generator();
 * console.log(gen.next().value);
 * // expected output: id-1Î
 * @param {string} key
 * @param {number} startIndex
 *
 * @return {Generator<string, string, string>}
 */
export function idGenerator(key?: string, startIndex?: number): Generator<string, string, string>;
