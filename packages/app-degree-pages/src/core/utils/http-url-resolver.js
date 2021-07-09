// @ts-check

/**
 *
 * @param {import("../models/listing-page-types").AppDataSource | string} dataSource
 * @param {import("../models/listing-page-types").AppDataSource} defaultDataSource
 * @returns {string}
 */
function urlResolver(dataSource, defaultDataSource) {
  if (typeof dataSource === "object") {
    const httpParamters = { ...defaultDataSource, ...dataSource };
    const { endpoint, fields, ...keyValues } = httpParamters;

    const params = Object.keys(keyValues)
      // .filter(key => dataSource[key])
      .reduce(
        (accumulator, paramName) =>
          `${accumulator}&${paramName}=${httpParamters[paramName]}`,
        ""
      );

    return `${endpoint}?${fields}${params}`;
  }
  if (typeof dataSource === "string") {
    return dataSource;
  }
  return "";
}

export { urlResolver };
