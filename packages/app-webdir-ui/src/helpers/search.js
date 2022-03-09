import {
  staffConverter,
  studentsConverter,
  subdomainConverter,
  anonConverter,
} from "./dataConverter";

const axios = require("axios");

export const engineNames = {
  FACULTY: "faculty",
  STUDENTS: "students",
  SITES: "sites",
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

const searchEngine = (engineName, term, page, items, auth, sort, filters) => {
  if (engines[engineName].needsAuth && !auth) {
    return new Promise(resolve => {
      resolve({
        engineName,
        page: { page, total_results: 0 },
        results: [...Array(items).keys()].map(res => anonConverter(res)),
      });
    });
  }
  return new Promise(resolve => {
    axios
      .get(`${engines[engineName].url}?query=${term}`)
      .then(res => {
        engines[engineName].inFlight = false;
        engines[engineName].abortController = null;
        let topResult = res.data.results.reduce((prev, curr) => {
          return prev === null || prev["_meta"].score < curr["_meta"].score
            ? curr
            : prev;
        }, null);
        topResult =
          topResult === null || topResult["_meta"].score >= 1
            ? engines[engineName].converter(topResult, "small")
            : null;
        resolve({
          engineName,
          page: res.data.meta.page,
          results: res.data.results.map(result =>
            engines[engineName].converter(result)
          ),
          topResult,
        });
      });
  });
};

export const performSearch = (
  tab,
  term,
  page,
  items,
  auth = null,
  sort,
  filters
) => {
  return new Promise(resolve => {
    if (tab === "all") {
      const promises = Object.keys(engines).map(engine => {
        const currentSort = engines[engine].supportedSortTypes.includes(sort)
          ? sortOptions[sort]
          : { _score: "desc" };
        return searchEngine(
          engine,
          term,
          page,
          engines[engine].resultsPerSummaryPage,
          auth,
          currentSort,
          filters
        );
      });
      const resultsDict = {};
      Promise.all(promises).then(results => {
        results.forEach(res => {
          resultsDict[res.engineName] = {
            results: res.results,
            topResult: res.topResult,
            page: res.page,
          };
        });
        resolve(resultsDict);
      });
    } else {
      const currentSort = engines[tab].supportedSortTypes.includes(sort)
        ? sortOptions[sort]
        : { _score: "desc" };
      searchEngine(tab, term, page, items, auth, currentSort).then(results => {
        resolve(results);
      });
    }
  });
};
