/* eslint no-use-before-define: ["warn", {"variables": true}] */
// ^^^ Set to "warn" instead of default "error" as we're not throwing any
// ReferenceError's and attempts to resolve resulted in other problems.
import {
  staffConverter,
  studentsConverter,
  subdomainConverter,
  anonConverter,
} from "./dataConverter";
import { validateAndCleanURL } from "./validateUrl";

const axios = require("axios");

export const engineNames = {
  FACULTY: "web_dir_faculty_staff",
  STUDENTS: "web_dir_students",
  SITES: "web_sites",
  SITES_LOCAL: "web_sites_local",
  WEB_DIRECTORY_DEPARTMENTS: "people_in_dept",
  WEB_DIRECTORY_PEOPLE_AND_DEPS: "profiles_dept_and_people",
  WEB_DIRECTORY_FACULTY_RANK: "web_dir_faculty_rank",
};

/**
 * Logs a click event for analysis and improvement of search results.
 *
 * @param {string} query - The search query.
 * @param {string} docId - The ID of the clicked document.
 * @param {string} reqId - The request ID associated with the query.
 * @param {string[]} tags - An array of tags associated with the click event.
 * @param {Object} props - Additional properties and configuration options.
 * @param {boolean} props.loggedIn - Whether the user is logged in.
 * @param {string} props.API_URL - The base API URL.
 * @param {string} props.searchApiVersion - The search API version.
 * @returns {Promise} A promise that resolves when the click event is logged.
 * @throws {Error} If there's an issue with logging the click event.
 */

export function logClick(query, docId, reqId, tags, { ...props }) {
  async function sendData(resolve, reject) {
    const data = {
      query,
      doc_id: docId,
      req_id: reqId,
      tags,
    };
    let response;
    if (props.loggedIn) {
      const tokenResponse = await axios.get(`${props.API_URL}/session/token`);
      const headers = {
        "X-CSRF-Token": tokenResponse.data,
      };
      response = await axios.post(
        `${props.API_URL}${props.searchApiVersion}webdir-click`,
        data,
        { headers }
      );
      resolve(response.data);
    } else {
      response = await axios.post(
        `${props.API_URL}${props.searchApiVersion}webdir-click`,
        data
      );
      resolve(response.data);
    }
    reject(response.data);
  }

  return new Promise(sendData);
}
/** Returns the top result with the highest score from a list of results.
 *
 * @param {Object[]} results - The list of results to search.
 * @param {string} engineName - The name of the search engine.
 * @returns {Object|null} The top result or null if no results meet the threshold.
 */

const getTopResult = (results, engineName) => {
  const topResult = results.reduce((prev, curr) => {
    return prev === null || prev["_meta"].score < curr["_meta"].score
      ? curr
      : prev;
  }, null);
  // Set threshold bar for identifying promoted results to display based on
  // whether it's the web_dir_faculty_staff engine or web_sites engine
  // resultset.
  const thresholdScore = engineName === "web_dir_faculty_staff" ? 100 : 1;
  if (topResult && topResult["_meta"].score >= thresholdScore) {
    return topResult;
  }
  return null;
};

/**
 * Formats search results for display, including selecting the top result.
 *
 * @param {Object} options - Options for formatting the results.
 * @param {string} options.engineName - The name of the search engine.
 * @param {Object} options.results - The search results to format.
 * @param {string} options.cardSize - The size of the result cards.
 * @param {string} options.appPathFolder - The application path folder.
 * @param {string|null} options.localSection - The local section information.
 * @param {Object} options.props - Additional properties and configuration options.
 * @returns {Object} Formatted search results.
 */

const standardFormatter = ({
  engineName,
  results,
  cardSize,
  appPathFolder,
  localSection,
  props,
}) => {
  const topResult = getTopResult(results.results, engineName);
  return {
    tab: engineName,
    page: results.meta.page,
    results: results.results.map(result =>
      engines[engineName].converter({
        datum: result,
        options: { size: cardSize, fill: false },
        appPathFolder,
        logClick,
        requestId: results["meta"].request_id,
        localSection,
        props: { ...props },
      })
    ),
    topResult:
      topResult === null
        ? null
        : engines[engineName].converter({
            datum: topResult,
            options: {
              size: "small",
              profileURLBase: engines[engineName].profileURLBase,
              fill: true,
            },
            appPathFolder,
            logClick,
            requestId: results["meta"].request_id,
            props: { ...props },
          }),
  };
};

export const anonFormatter = (
  engineName,
  numResults,
  cardSize,
  appPathFolder
) => {
  const anonResults = new Array(numResults || 3).fill(1);
  return {
    tab: engineName,
    page: 1,
    results: anonResults.map((result, idx) =>
      anonConverter(
        idx,
        {
          size: cardSize,
          fill: false,
        },
        appPathFolder
      )
    ),
    topResult: null,
  };
};

const webDirDeptsFormatter = ({
  engineName,
  results,
  cardSize,
  filters,
  appPathFolder,
}) => {
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
  if (!!filters && filters.peopleIds) {
    localResults = localResults.filter(r => {
      return filters.peopleIds.includes(r.asurite_id.raw);
    });
  }
  // filters.peopleInDepts indicates a WEB_DIRECTORY_PEOPLE_AND_DEPS flow.
  // filters.deptIds indicates a WEB_DIRECTORY_DEPARTMENTS flow.
  const titleOverwrite =
    !!filters && filters.peopleInDepts
      ? { peopleInDeps: filters.peopleInDepts }
      : { depts: filters?.deptIds };

  return {
    tab: engines[engineName].name,
    page: localPage,
    results: localResults.map(result => {
      try {
        return engines[engineName].converter({
          datum: result,
          options: {
            size: "large",
            titleMatch: titleOverwrite,
            profileURLBase: "https://search.asu.edu",
          },
          appPathFolder,
        });
      } catch (e) {
        console.log(e, result);
        return null;
      }
    }),
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
    formatter: ({ results, cardSize, filters = null, appPathFolder }) =>
      standardFormatter({
        engineName: engineNames.FACULTY,
        results,
        cardSize,
        appPathFolder,
      }),
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
    formatter: ({ results, cardSize, filters = null, appPathFolder }) =>
      standardFormatter({
        engineName: engineNames.STUDENTS,
        results,
        cardSize,
        appPathFolder,
      }),
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
    formatter: (
      results,
      cardSize,
      filters = null,
      appPathFolder,
      localSection = null,
      { ...props }
    ) => {
      return standardFormatter(
        engineNames.SITES_LOCAL,
        results,
        cardSize,
        appPathFolder,
        localSection,
        { ...props }
      );
    },
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
    formatter: ({
      results,
      cardSize,
      filters = null,
      appPathFolder,
      localSection = null,
      props: { ...props },
    }) => {
      return standardFormatter({
        engineName: engineNames.SITES_LOCAL,
        results,
        cardSize,
        appPathFolder,
        localSection,
        props: { ...props },
      });
    },
    needsTerm: true,
  },
  [engineNames.WEB_DIRECTORY_DEPARTMENTS]: {
    name: engineNames.WEB_DIRECTORY_DEPARTMENTS,
    url: `webdir-profiles/faculty-staff/filtered`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: [
      "_score_desc",
      "last_name_desc",
      "last_name_asc",
      "employee_weight",
    ],
    method: "GET",
    formatter: ({ results, cardSize, filters, appPathFolder }) =>
      webDirDeptsFormatter({
        engineName: engineNames.WEB_DIRECTORY_DEPARTMENTS,
        results,
        cardSize,
        filters,
        appPathFolder,
      }),
    needsTerm: false,
  },
  [engineNames.WEB_DIRECTORY_FACULTY_RANK]: {
    name: engineNames.WEB_DIRECTORY_FACULTY_RANK,
    url: `webdir-profiles/faculty-staff/filtered`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["faculty_rank"],
    method: "GET",
    formatter: ({ results, cardSize, filters, appPathFolder }) =>
      webDirDeptsFormatter({
        engineName: engineNames.WEB_DIRECTORY_DEPARTMENTS,
        results,
        cardSize,
        filters,
        appPathFolder,
      }),
    needsTerm: false,
  },
  [engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
    name: engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    url: `webdir-profiles/department`,
    needsAuth: false,
    converter: staffConverter,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "last_name_desc", "last_name_asc"],
    method: "POST",
    formatter: ({ results, cardSize, filters, appPathFolder }) =>
      webDirDeptsFormatter({
        engineName: engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
        results,
        cardSize,
        filters,
        appPathFolder,
      }),
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
  display,
  rankGroup,
  controller,
  size,
  restClientTag,
}) {
  async function search(resolve, reject) {
    const currentSort = engine.supportedSortTypes.includes(sort) ? sort : "";

    const searchURLOrDefault = engine.API_URL
      ? `${engine.API_URL}${engine.searchApiVersion}`
      : "https://dev-asu-isearch.ws.asu.edu/api/v1/";

    let query = `${searchURLOrDefault}${engine.url}`;

    let APICall = null;
    if (engine.method === "GET") {
      query = `${query}?sort-by=${currentSort}`;

      // reassign endpoint to new custom endpoint and sort is not
      // important since endpoint automatically only sorts by employee weight
      if (currentSort === "employee_weight") {
        query = `${engine.API_URL}endpoint/v1/department/custom-sort?`;
      }
      if (term) {
        query = `${query}&query=${term}`;
      }
      if (page && currentSort === "employee_weight") {
        query = `${query}&page=${page - 1}`;
      } else if (page) {
        query = `${query}&page=${page}`;
      }
      if (engine.site) {
        query = `${query}&url_host=${engine.site}`;
      }
      if (itemsPerPage && sort === "employee_weight") {
        query = `${query}&items_per_page=${itemsPerPage}`;
      } else if (itemsPerPage) {
        query = `${query}&size=${itemsPerPage}`;
      }
      if (filters && filters.deptIds) {
        const deptIDValues = filters.deptIds.map(n => `${n}`).join(",");
        query = `${query}&dept_ids=${deptIDValues}`;
      }
      if (display?.doNotDisplayProfiles) {
        const doNotDisplayProfilesParam = `profiles_to_exclude=${display.doNotDisplayProfiles}`;
        query = `${query}&${doNotDisplayProfilesParam}`;
      }
      if (filters && filters.peopleIds) {
        const asuriteIDParam = filters.peopleIds.map(n => `${n}`).join(",");
        query = `${query}&asurite_ids=${asuriteIDParam}`;
      }
      if (filters && filters.title) {
        const titleParam = `title=${filters.title}`;
        query = `${query}&${titleParam}`;
      }
      if (filters && filters.campuses) {
        const campusesParam = `campuses=${filters.campuses}`;
        query = `${query}&${campusesParam}`;
      }
      if (filters && filters.expertise) {
        const expertiseParam = `expertise_areas=${filters.expertise}`;
        query = `${query}&${expertiseParam}`;
      }
      if (filters && filters.employee) {
        const employeeTypesParam = `employee_types=${filters.employee}`;
        query = `${query}&${employeeTypesParam}`;
      }
      if (filters && filters.lastInit) {
        const lastInitParam = `last_init=${filters.lastInit}`;
        query = `${query}&${lastInitParam}`;
      }
      if (rankGroup) {
        query = `${query}&rank_group=${rankGroup}`;
      }
      if (restClientTag) {
        query = `${query}&client=${restClientTag}`;
      }
      const validatedQueryUrl = validateAndCleanURL(query);
      APICall = () =>
        axios.get(validatedQueryUrl, { signal: controller.signal });
    } else {
      if (!filters) {
        return;
      }
      const validatedTokenUrl = validateAndCleanURL(
        `${engine.API_URL}/session/token`
      );
      const tokenResponse = await axios.get(validatedTokenUrl);
      const headers = {
        "X-CSRF-Token": tokenResponse.data,
      };
      const data = {
        "size": size,
        "page": page,
        "sort-by": currentSort || "",
        "full_records": true,
        "profiles": filters.peopleInDepts,
        "last_init": filters.lastInit || null,
        "profiles_to_exclude": display.doNotDisplayProfiles || null,
      };

      if (restClientTag) {
        query = `${query}?&client=${restClientTag}`;
      }
      const validatedDataUrl = validateAndCleanURL(query);

      APICall = () => axios.post(validatedDataUrl, data, { headers });
    }

    APICall()
      .then(res => {
        const { data } = res;
        resolve(data);
      })
      .catch(err => {
        if (err.response?.status === 403) {
          reject(403);
        }
      });
  }
  return new Promise(search);
};
