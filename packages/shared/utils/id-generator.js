// @ts-check

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
function* idGenerator(key = "id-", startIndex = 0) {
  let i = startIndex;
  while (true) {
    i += 1;
    yield key + i;
  }
}

export { idGenerator };
