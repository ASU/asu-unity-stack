// @ts-check

/**
 *
 * @param {import("../types/listing-page-types").AppDataSource} dataSource
 * @param {import("../types/listing-page-types").AppDataSource} defaultDataSource
 * @returns {string}
 */
function urlResolver(dataSource, defaultDataSource) {
  const httpParamters = { ...defaultDataSource, ...dataSource };
  const { endpoint, fields, ...keyValues } = httpParamters;

  const params = Object.keys(keyValues).reduce(
    (accumulator, paramName) =>
      `${accumulator}&${paramName}=${httpParamters[paramName]}`,
    ""
  );

  return `${endpoint}?fields=${fields}${params}`;
}

export { urlResolver };
