// @ts-check

/**
 *
 * @param {number} records
 * @param {number} pages
 * @returns {number}
 */
function computePages(records, pages) {
  const quotient = Math.floor(records / pages);
  const remainder = records % pages;

  return quotient + (remainder > 0 ? 1 : 0);
}

export { computePages };
