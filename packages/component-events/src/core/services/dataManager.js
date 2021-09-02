// @ts-check

import { filterFields } from "../constants/filters";

const normalizeFiltersData = filter => {
  const normalizedFilter = filter.toLowerCase().split(" ").join("_");
  return normalizedFilter;
};

/**
 *
 * @param {object[]} data
 * @param {string} filters
 * @return {object[]}
 */
const filterData = (data, filters) => {
  if (!filters) return data;

  const providedFilters = filters.split(",");
  const filteredData = [];
  data?.forEach(event => {
    providedFilters.forEach(filter => {
      filterFields.forEach(field => {
        const normalizedField = normalizeFiltersData(event[field]);
        const existEventOnData = filteredData.find(el => el.id === event.id);
        if (normalizedField.includes(filter) && !existEventOnData)
          filteredData.push(event);
      });
    });
  });

  return filteredData;
};

export { filterData };
