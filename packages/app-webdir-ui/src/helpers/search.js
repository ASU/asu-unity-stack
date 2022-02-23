import {
  staffConverter,
  studentsConverter,
  subdomainConverter,
  anonConverter,
} from "./dataConverter";

const axios = require("axios");

const config = {
  headers: {
    authorization: "Bearer search-up6w8masqk1mvfca91i2pe97",
  },
  itemsPerPage: 6,
};

export const engineNames = {
  FACULTY: "faculty",
  STUDENTS: "students",
  SITES: "sites",
};

const engines = {
  [engineNames.FACULTY]: {
    url: `https://asuis.ent.us-west-2.aws.found.io/api/as/v1/engines/web-dir-faculty-staff/search.json`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 3,
    inFlight: false,
    abortController: null,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
  },
  [engineNames.STUDENTS]: {
    url: `https://asuis.ent.us-west-2.aws.found.io/api/as/v1/engines/web-dir-students/search.json`,
    needsAuth: true,
    converter: studentsConverter,
    resultsPerSummaryPage: 3,
    inFlight: false,
    abortController: null,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
  },
  [engineNames.SITES]: {
    url: `https://asuis.ent.us-west-2.aws.found.io/api/as/v1/engines/web-sites-public/search.json`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    inFlight: false,
    abortController: null,
    supportedSortTypes: ["_score_desc"],
  },
};
const sortOptions = {
  _score_desc: { _score: "desc" },
  last_name_asc: { last_name: "asc" },
  last_name_desc: { last_name: "desc" },
};

const searchEngine = (engineName, term, page, items, auth, sort) => {
  if (engines[engineName].needsAuth && !auth) {
    return new Promise(resolve => {
      resolve({
        engineName,
        page: { page, total_results: 0 },
        results: [...Array(items).keys()].map(anonConverter),
      });
    });
  }
  return new Promise(resolve => {
    if (engines[engineName].inFlight === true) {
      engines[engineName].abortController.abort();
    }
    engines[engineName].inFlight = true;
    engines[engineName].abortController = new AbortController();
    axios
      .post(
        engines[engineName].url,
        {
          sort: [sort],
          query: term,
          // search_fields: { asurite_id: {} },
          page: { size: items, current: page },
        },
        {
          headers: config.headers,
          signal: engines[engineName].abortController.signal,
        }
      )
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
          results: res.data.results.map(engines[engineName].converter),
          topResult,
        });
      });
  });
};

export const performSearch = (tab, term, page, items, auth = null, sort) => {
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
          currentSort
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
