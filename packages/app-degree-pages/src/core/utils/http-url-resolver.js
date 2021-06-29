// @ts-check

/**
 *
 * @param {import("../models/listing-page-types").AppDataSource | string} dataSource
 * @returns {string}
 */
function urlResolver(dataSource, fields) {
  if (typeof dataSource === "object") {
    const { endpoint, ...keyValues } = dataSource;

    const params = Object.keys(keyValues)
      // .filter(key => dataSource[key])
      .reduce(
        (accumulator, paramName) =>
          `${accumulator}&${paramName}=${dataSource[paramName]}`,
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
