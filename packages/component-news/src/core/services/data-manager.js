import { filterFields } from "../constants/filter-fields";

/**
 *
 * @param {Object.<string,string>} node
 * @return {boolean}
 */
const filterData = (node, rawFilters = "") => {
  if (!rawFilters) return true;

  const filters = rawFilters.split(",");

  for (let fieldIndex = 0; fieldIndex < filterFields.length; fieldIndex += 1) {
    const key = filterFields[fieldIndex];
    for (let filterIndex = 0; filterIndex < filters.length; filterIndex += 1) {
      const filter = filters[filterIndex];
      const nodeValue = node[key] || "";

      const matches = nodeValue.match(new RegExp(filter, "gi"));
      if (matches?.length > 0) return true;
    }
  }

  return false;
};

const normalizeFiltersData = filter => {
  const normalizedFilter = filter.toLowerCase().split(" ").join("_");
  return normalizedFilter;
};

export { filterData, normalizeFiltersData };
