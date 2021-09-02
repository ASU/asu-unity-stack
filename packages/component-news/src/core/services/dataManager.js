import { filterFields } from "../constants/filters";

/**
 *
 * @param {Object.<string,string>} node
 * @return {boolean}
 */
const filterData = (node, rawFilters = "") => {
  if (!rawFilters) return true;

  const filters = rawFilters.split("|");
  for (let key of filterFields) {
    for (let filter of filters) {
      const nodeValue = node[key];
      if (nodeValue.includes(filter)) {
        return true;
      }
    }
  }
  filterFields.forEach(key => {

  return false;
};

export { filterData };
