import {
  staffConverter,
  studentsConverter,
  subdomainConverter,
  anonConverter,
} from "./dataConverter";

const axios = require("axios");

export const engineNames = {
  FACULTY: "web_dir_faculty_staff",
  STUDENTS: "web_dir_students",
  SITES: "web_sites",
  WEB_DIRECTORY: "people_in_dept",
  ALL: "all",
};

const engines = {
  [engineNames.FACULTY]: {
    url: `webdir-search-faculty-staff`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
  },
  [engineNames.STUDENTS]: {
    url: `webdir-search-students`,
    needsAuth: true,
    converter: studentsConverter,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
  },
  [engineNames.SITES]: {
    url: `webdir-api-web-search`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
  },
  [engineNames.ALL]: {
    url: `webdir-meta-search`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc"],
  },
  [engineNames.WEB_DIRECTORY]: {
    url: `webdir-people-in-department`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc"],
  },
};

const sortOptions = {
  _score_desc: { _score: "desc" },
  last_name_asc: { last_name: "asc" },
  last_name_desc: { last_name: "desc" },
  date_desc: {
    arbitraryDate: {
      order: "asc",
    },
  },
};

const getTopResult = results => {
  const topResult = results.reduce((prev, curr) => {
    return prev === null || prev["_meta"].score < curr["_meta"].score
      ? curr
      : prev;
  }, null);
  if (topResult && topResult["_meta"].score >= 1) {
    return topResult;
  }
  return null;
};

export const performSearch = ({
  tab,
  term,
  page,
  items,
  auth,
  sort,
  filters,
  site,
  searchURL,
  titleOverwrite,
}) => {
  return new Promise(resolve => {
    const currentSort = engines[tab].supportedSortTypes.includes(sort)
      ? sort
      : "_score_desc";

    const searchURLOrDefault =
      searchURL || "https://dev-asu-isearch.ws.asu.edu/api/v1/";

    let query = `${searchURLOrDefault}${engines[tab].url}?&sort-by=${currentSort}`;

    if (term) {
      query = `${query}&query=${term}`;
    }
    if (site) {
      query = `${query}&url_host=${site}`;
    }
    if (items) {
      query = `${query}&size=${items}`;
    }
    if (page) {
      query = `${query}&page=${page}`;
    }
    if (filters && filters.deptIds) {
      const deptIDParam = filters.deptIds.map(n => `dept_id[]=${n}`).join("&");
      query = `${query}&${deptIDParam}`;
    }
    if (filters && filters.peopleIds) {
      const asuriteIDParam = filters.peopleIds
        .map(n => `asurite_id[]=${n}`)
        .join("&");
      query = `${query}&${asuriteIDParam}`;
    }
    axios.get(query).then(res => {
      engines[tab].inFlight = false;
      engines[tab].abortController = null;

      if (tab === engineNames.ALL) {
        const results = {};
        Object.keys(res.data).forEach(dataKey => {
          if (!auth && engines[dataKey].needsAuth) {
            const anonResults = new Array(items)
              .fill(1)
              .map((n, idx) => anonConverter(idx));
            results[dataKey] = {
              tab: dataKey,
              page: { current: 1, size: items, total_results: items },
              results: anonResults,
              topResult: null,
            };
          } else {
            const topResult = getTopResult(res.data[dataKey].results);
            results[dataKey] = {
              tab: dataKey,
              page: res.data[dataKey].meta.page,
              results: res.data[dataKey].results.map(result =>
                engines[dataKey].converter(result)
              ),
              topResult: engines[dataKey].converter(topResult, "small"),
            };
          }
        });
        resolve(results);
      } else if (tab === engineNames.WEB_DIRECTORY) {
        resolve({
          tab,
          page: res.data.meta.page,
          results: res.data.results.map(result =>
            engines[tab].converter(result, "large", titleOverwrite)
          ),
        });
      } else {
        resolve({
          tab,
          page: res.data.meta.page,
          results: res.data.results.map(result =>
            engines[tab].converter(result)
          ),
        });
      }
    });
  });
};
