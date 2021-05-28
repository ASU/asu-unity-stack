// @ts-check

/**
 * Returns the list of all degree programs
 * @returns {Promise}
 */

/**
 *
 * @param {string} url
 * @returns
 */
function fetchData(url) {
  return fetch(url).then(res => res.json());
}

export { fetchData };
