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

export const engines = {
  [engineNames.FACULTY]: {
    name: engineNames.FACULTY,
    url: `webdir-profiles/faculty-staff`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
    method: "GET",
    formatter: (results, cardSize) => standardFormatter(engineNames.FACULTY, results, cardSize),
  },
  [engineNames.STUDENTS]: {
    name: engineNames.STUDENTS,
    url: `webdir-profiles/students`,
    needsAuth: true,
    converter: studentsConverter,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
    method: "GET",
    formatter: (results, cardSize) => standardFormatter(engineNames.STUDENTS, results, cardSize),
  },
  [engineNames.SITES]: {
    name: engineNames.SITES,
    url: `webdir-search/web`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
    method: "GET",
    formatter: (results, cardSize) => standardFormatter(engineNames.SITES, results, cardSize),
  },
  [engineNames.SITES_LOCAL]: {
    name: engineNames.SITES_LOCAL,
    url: `webdir-search/web`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
    method: "GET",
    formatter: (results, cardSize) => standardFormatter(engineNames.SITES_LOCAL, results, cardSize),
  },
  [engineNames.WEB_DIRECTORY_DEPARTMENTS]: {
    name: engineNames.WEB_DIRECTORY_DEPARTMENTS,
    url: `webdir-departments/profiles`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "last_name_desc"],
    method: "GET",
    formatter: (results, cardSize) => standardFormatter(engineNames.WEB_DIRECTORY_DEPARTMENTS, results, cardSize),
  },
  [engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
    name: engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    url: `webdir-profiles/department`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "last_name_desc"],
    method: "POST",
    formatter: (results, cardSize) => standardFormatter(engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS, results, cardSize),
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

const standardFormatter = (engineName, results, cardSize) => {
  return {
    tab: engineName,
    page: results.meta.page,
    results: results.results.map(result =>
      engines[engineName].converter(result, cardSize)
    ),
  }
};

const webDirDeptsFormatter = (engineName, results, cardSize) => {
  let localResults = null;
  let localPage = 1;
  if (engine.name === engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS) {
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
  const titleOverwrite = filters.peopleInDepts
    ? filters.peopleInDepts
    : null;
  return {
    tab: engine.name,
    page: localPage,
    results: localResults.map(result =>
      engine.converter(result, "large", titleOverwrite)
    ),
  };
};

export const performSearch = function ({
  engine,
  term,
  page,
  itemsPerPage,
  sort,
  filters,
}) {
  async function search(resolve) {
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

    APICall().then(res => {
      engine.inFlight = false;
      engine.abortController = null;

      resolve(res.data);
    });
  }
  return new Promise(search);
};
