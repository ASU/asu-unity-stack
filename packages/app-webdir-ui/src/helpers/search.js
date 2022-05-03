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
  ALL: "all",
};

const engines = {
  [engineNames.FACULTY]: {
    url: `webdir-profiles/faculty-staff`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
    method: "GET",
  },
  [engineNames.STUDENTS]: {
    url: `webdir-profiles/students`,
    needsAuth: true,
    converter: studentsConverter,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
    method: "GET",
  },
  [engineNames.SITES]: {
    url: `webdir-search/web`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
    method: "GET",
  },
  [engineNames.SITES_LOCAL]: {
    url: `webdir-search/web`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
    method: "GET",
  },
  [engineNames.ALL]: {
    url: `webdir-search/meta`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc"],
    method: "GET",
  },
  [engineNames.WEB_DIRECTORY_DEPARTMENTS]: {
    url: `webdir-departments/profiles`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc"],
    method: "GET",
  },
  [engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
    url: `webdir-profiles/department`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc"],
    method: "POST",
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

export const performSearch = function ({
  tab,
  term,
  page,
  items,
  auth,
  sort,
  filters,
  site,
  API_URL,
  searchApiVersion,
}) {
  async function search(resolve) {
    const currentSort = engines[tab].supportedSortTypes.includes(sort)
      ? sort
      : "_score_desc";

    const searchURLOrDefault = API_URL
      ? `${API_URL}${searchApiVersion}`
      : "https://dev-asu-isearch.ws.asu.edu/api/v1/";

    let query = `${searchURLOrDefault}${engines[tab].url}`;

    let APICall = null;
    if (engines[tab].method === "GET") {
      query = `${query}?&sort-by=${currentSort}`;
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
      const tokenResponse = await axios.get(`${API_URL}session/token`);
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
      engines[tab].inFlight = false;
      engines[tab].abortController = null;

      if (tab === engineNames.ALL) {
        const results = {};
        Object.keys(res.data).forEach(dataKey => {
          if (!auth && engines[dataKey].needsAuth) {
            const anonResults = new Array(items || 3)
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
              topResult:
                topResult === null
                  ? topResult
                  : engines[dataKey].converter(topResult, "small"),
            };
          }
        });
        resolve(results);
      } else if (
        [
          engineNames.WEB_DIRECTORY_DEPARTMENTS,
          engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
        ].includes(tab)
      ) {
        let localResults = null;
        let localPage = 1;
        if (tab === engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS) {
          localResults = res.data.map(datum => {
            // eslint-disable-next-line camelcase
            const { full_record, ...basicFields } = datum;
            // eslint-disable-next-line camelcase
            return { ...basicFields, ...full_record };
          });
        } else {
          localResults = res.data.results;
          localPage = res.data.meta.page;
        }
        if (filters.peopleIds) {
          localResults = localResults.filter(r => {
            return filters.peopleIds.includes(r.asurite_id.raw);
          });
        }
        // filters.peopleInDepts indicates a WEB_DIRECTORY_PEOPLE_AND_DEPS flow.
        // filters.deptIds indicates a WEB_DIRECTORY_DEPARTMENTS flow.
        const titleMatch = filters.peopleInDepts
          ? { peopleInDeps: filters.peopleInDepts }
          : { depts: filters.deptIds };
        resolve({
          tab,
          page: localPage,
          results: localResults.map(result =>
            engines[tab].converter(result, "large", titleMatch)
          ),
        });
      } else {
        resolve({
          tab,
          page: res.data.meta.page,
          results: res.data.results.map(result =>
            engines[tab].converter(result, "large")
          ),
        });
      }
    });
  }
  return new Promise(search);
};
