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
  ALL: "all",
};

const engines = {
  [engineNames.FACULTY]: {
    url: `https://dev-asu-isearch.ws.asu.edu/api/v1/webdir-search-faculty-staff`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
  },
  [engineNames.STUDENTS]: {
    url: `https://dev-asu-isearch.ws.asu.edu/api/v1/webdir-search-students`,
    needsAuth: true,
    converter: studentsConverter,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
  },
  [engineNames.SITES]: {
    url: `https://dev-asu-isearch.ws.asu.edu/api/v1/webdir-api-web-search`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
  },
  [engineNames.ALL]: {
    url: `https://dev-asu-isearch.ws.asu.edu/api/v1/webdir-meta-search`,
    needsAuth: false,
    converter: subdomainConverter,
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

export const performSearch = (
  tab,
  term,
  page,
  items,
  auth = null,
  sort,
  filters,
  site
) => {
  return new Promise(resolve => {
    const currentSort = engines[tab].supportedSortTypes.includes(sort)
      ? sort
      : "_score";

    console.log({filters});

    let query = `${engines[tab].url}?query=${term}&size=${items}&sort=${currentSort}`;
    query = site ? `${query}&url_host=${site}` : query;

    axios.get(query).then(res => {
      engines[tab].inFlight = false;
      engines[tab].abortController = null;

      if (tab === "all") {
        const results = {};
        Object.keys(res.data).forEach((dataKey, idx) => {
          if (!auth && engines[dataKey].needsAuth) {
            results[dataKey] = {
              tab: dataKey,
              page: { current: 1, size: 3 },
              results: new Array(3).fill(anonConverter(idx)),
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
      }
      resolve({
        tab,
        page: res.data.meta.page,
        results: res.data.results.map(result => engines[tab].converter(result)),
      });
    });
  });
};
