// @ts-check

import { filterFields } from "../constants/filter-fields";

const normalizeFiltersData = filter => {
  const normalizedFilter = filter.toLowerCase().split(" ").join("_");
  return normalizedFilter;
};

/**
 *
 * @param {object} event
 * @param {string} rawFilters
 * @return {boolean}
 */
const filterData = (event, rawFilters) => {
  if (!rawFilters) return true;

  const filters = rawFilters.split(",");

  for (let filterIndex = 0; filterIndex < filters.length; filterIndex += 1) {
    const filter = filters[filterIndex];
    for (
      let fieldIndex = 0;
      fieldIndex < filterFields.length;
      fieldIndex += 1
    ) {
      const field = filterFields[fieldIndex];
      const filterValue = normalizeFiltersData(event[field] || "");

      if (filterValue.includes(filter)) return true;
    }
  }

  return false;
};

export { filterData };
