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
  SITES_LOCAL: "web_sites_local",
  WEB_DIRECTORY_DEPARTMENTS: "people_in_dept",
  WEB_DIRECTORY_PEOPLE_AND_DEPS: "profiles_dept_and_people",
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
const standardFormatter = (engineName, results, cardSize) => {
  const topResult = getTopResult(results.results);
  return {
    tab: engineName,
    page: results.meta.page,
    results: results.results.map(result =>
      engines[engineName].converter(result, { size: cardSize, fill: false })
    ),
    topResult:
      topResult === null
        ? null
        : engines[engineName].converter(topResult, {
            size: "small",
            profileURLBase: engines[engineName].profileURLBase,
            fill: true,
          }),
  };
};

export const anonFormatter = (engineName, numResults, cardSize) => {
  const anonResults = new Array(numResults || 3)
    .fill(1)
    .map((n, idx) => anonConverter(idx, cardSize));
  return {
    tab: engineName,
    page: 1,
    results: anonResults.map(result =>
      anonConverter(result, { size: cardSize, fill: false })
    ),
    topResult: null,
  };
};

const webDirDeptsFormatter = (engineName, results, cardSize, filters) => {
  let localResults = null;
  let localPage = 1;
  if (engines[engineName].name === engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS) {
    localResults = results.map(datum => {
      // eslint-disable-next-line camelcase
      const { full_record, ...basicFields } = datum;
      // eslint-disable-next-line camelcase
      return { ...basicFields, ...full_record };
    });
  } else {
    localResults = results.results;
    localPage = results.meta.page;
  }
  if (filters.peopleIds) {
    localResults = localResults.filter(r => {
      return filters.peopleIds.includes(r.asurite_id.raw);
    });
  }
  const titleOverwrite = filters.peopleInDepts ? filters.peopleInDepts : null;
  return {
    tab: engines[engineName].name,
    page: localPage,
    results: localResults.map(result =>
      engines[engineName].converter(result, "large", titleOverwrite)
    ),
  };
};

export const engines = {
  [engineNames.FACULTY]: {
    name: engineNames.FACULTY,
    url: `webdir-profiles/faculty-staff`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
    method: "GET",
    formatter: (results, cardSize) =>
      standardFormatter(engineNames.FACULTY, results, cardSize),
    needsTerm: true,
  },
  [engineNames.STUDENTS]: {
    name: engineNames.STUDENTS,
    url: `webdir-profiles/students`,
    needsAuth: true,
    converter: studentsConverter,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
    method: "GET",
    formatter: (results, cardSize) =>
      standardFormatter(engineNames.STUDENTS, results, cardSize),
    needsTerm: true,
  },
  [engineNames.SITES]: {
    name: engineNames.SITES,
    url: `webdir-search/web`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
    method: "GET",
    formatter: (results, cardSize) =>
      standardFormatter(engineNames.SITES, results, cardSize),
    needsTerm: true,
  },
  [engineNames.SITES_LOCAL]: {
    name: engineNames.SITES_LOCAL,
    url: `webdir-search/web`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
    method: "GET",
    formatter: (results, cardSize) =>
      standardFormatter(engineNames.SITES_LOCAL, results, cardSize),
    needsTerm: true,
  },
  [engineNames.WEB_DIRECTORY_DEPARTMENTS]: {
    name: engineNames.WEB_DIRECTORY_DEPARTMENTS,
    url: `webdir-departments/profiles`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "last_name_desc"],
    method: "GET",
    formatter: (results, cardSize, filters) =>
      webDirDeptsFormatter(
        engineNames.WEB_DIRECTORY_DEPARTMENTS,
        results,
        cardSize,
        filters
      ),
    needsTerm: false,
  },
  [engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
    name: engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    url: `webdir-profiles/department`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "last_name_desc"],
    method: "POST",
    formatter: (results, cardSize, filters) =>
      webDirDeptsFormatter(
        engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
        results,
        cardSize,
        filters
      ),
    needsTerm: false,
  },
};

export const performSearch = function ({
  engine,
  term,
  page,
  itemsPerPage,
  sort,
  filters,
}) {
  async function search(resolve, reject) {
    const currentSort = engine.supportedSortTypes.includes(sort)
      ? sort
      : "_score_desc";

    const searchURLOrDefault = engine.API_URL
      ? `${engine.API_URL}${engine.searchApiVersion}`
      : "https://dev-asu-isearch.ws.asu.edu/api/v1/";

    let query = `${searchURLOrDefault}${engine.url}`;

    let APICall = null;
    if (engine.method === "GET") {
      query = `${query}?&sort-by=${currentSort}`;
      if (term) {
        query = `${query}&query=${term}`;
      }
      if (page) {
        query = `${query}&page=${page}`;
      }
      if (engine.site) {
        query = `${query}&url_host=${engine.site}`;
      }
      if (itemsPerPage) {
        query = `${query}&size=${itemsPerPage}`;
      }
      if (filters && filters.deptIds) {
        const deptIDParam = filters.deptIds
          .map(n => `dept_id[]=${n}`)
          .join("&");
        query = `${query}&${deptIDParam}`;
      }
      if (filters && filters.peopleIds) {
        const asuriteIDParam = filters.peopleIds
          .map(n => `asurite_id[]=${n}`)
          .join("&");
        query = `${query}&${asuriteIDParam}`;
      }
      APICall = () => axios.get(query);
    } else {
      if (!filters) {
        return;
      }
      const tokenResponse = await axios.get(`${engine.API_URL}session/token`);
      const headers = {
        "X-CSRF-Token": tokenResponse.data,
      };
      const data = {
        full_records: true,
        profiles: filters.peopleInDepts,
      };
      APICall = () => axios.post(query, data, { headers });
    }

    APICall()
      .then(res => {
        // engine.inFlight = false;
        // engine.abortController = null;

        resolve(res.data);
      })
      .catch(err => {
        if (err.response.status === 403) {
          reject(403);
        }
      });
  }
  return new Promise(search);
};
