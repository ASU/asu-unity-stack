/* eslint no-use-before-define: ["warn", {"variables": true}] */
// ^^^ Set to "warn" instead of default "error" as we're not throwing any
// ReferenceError's and attempts to resolve resulted in other problems.
import {
  staffConverter,
  studentsConverter,
  subdomainConverter,
  anonConverter,
} from "./dataConverter";

const axios = require("axios");

const getLastNameFromFullName = fullName => {
  const tempNameArr = fullName.split(" ");
  return tempNameArr[tempNameArr.length - 1];
};

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
const standardFormatter = (engineName, results, cardSize, appPathFolder) => {
  const topResult = getTopResult(results.results);
  return {
    tab: engineName,
    page: results.meta.page,
    results: results.results.map(result =>
      engines[engineName].converter(
        result,
        { size: cardSize, fill: false },
        appPathFolder
      )
    ),
    topResult:
      topResult === null
        ? null
        : engines[engineName].converter(
            topResult,
            {
              size: "small",
              profileURLBase: engines[engineName].profileURLBase,
              fill: true,
            },
            appPathFolder
          ),
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

const webDirDeptsFormatter = (
  engineName,
  results,
  cardSize,
  filters,
  appPathFolder
) => {
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
  // filters.peopleInDepts indicates a WEB_DIRECTORY_PEOPLE_AND_DEPS flow.
  // filters.deptIds indicates a WEB_DIRECTORY_DEPARTMENTS flow.
  const titleOverwrite = filters.peopleInDepts
    ? { peopleInDeps: filters.peopleInDepts }
    : { depts: filters.deptIds };

  return {
    tab: engines[engineName].name,
    page: localPage,
    results: localResults.map(result => {
      try {
        return engines[engineName].converter(
          result,
          {
            size: "large",
            titleMatch: titleOverwrite,
            profileURLBase: "https://isearch.asu.edu",
          },
          appPathFolder
        );
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
    formatter: (results, cardSize, appPathFolder) =>
      standardFormatter(engineNames.FACULTY, results, cardSize, appPathFolder),
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
    formatter: (results, cardSize, appPathFolder) =>
      standardFormatter(engineNames.STUDENTS, results, cardSize, appPathFolder),
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
    formatter: (results, cardSize, appPathFolder) =>
      standardFormatter(engineNames.SITES, results, cardSize, appPathFolder),
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
    formatter: (results, cardSize, appPathFolder) =>
      standardFormatter(
        engineNames.SITES_LOCAL,
        results,
        cardSize,
        appPathFolder
      ),
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
    formatter: (results, cardSize, filters, appPathFolder) =>
      webDirDeptsFormatter(
        engineNames.WEB_DIRECTORY_DEPARTMENTS,
        results,
        cardSize,
        filters,
        appPathFolder
      ),
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
    formatter: (results, cardSize, filters, appPathFolder) =>
      webDirDeptsFormatter(
        engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
        results,
        cardSize,
        filters,
        appPathFolder
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
  display,
}) {
  async function search(resolve, reject) {
    const currentSort = engine.supportedSortTypes.includes(sort) ? sort : "";

    const searchURLOrDefault = engine.API_URL
      ? `${engine.API_URL}${engine.searchApiVersion}`
      : "https://dev-asu-isearch.ws.asu.edu/api/v1/";

    let query = `${searchURLOrDefault}${engine.url}`;

    let APICall = null;
    if (engine.method === "GET") {
      query = `${query}?&sort-by=${currentSort}`;

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
      if (filters && filters.employee_types) {
        const employeeTypesParam = `campuses=${filters.employee_types}`;
        query = `${query}&${employeeTypesParam}`;
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
        "size":
          filters.peopleInDepts < itemsPerPage
            ? filters.peopleInDepts.length
            : itemsPerPage,
        "page": page || "",
        "sort-by": currentSort || "",
        "full_records": true,
        "profiles": filters.peopleInDepts,
      };
      APICall = () => axios.post(query, data, { headers });
    }

    APICall()
      .then(res => {
        // engine.inFlight = false;
        // engine.abortController = null;
        const { data } = res;
        if (
          engine.method === "POST" &&
          (sort === "last_name_desc" || sort === "last_name_asc")
        ) {
          data.sort((a, b) =>
            getLastNameFromFullName(a.display_name).localeCompare(
              getLastNameFromFullName(b.display_name)
            )
          );

          if (sort === "last_name_desc") {
            data.reverse();
          }
        }
        resolve(data);
      })
      .catch(err => {
        if (err.response.status === 403) {
          reject(403);
        }
      });
  }
  return new Promise(search);
};

export const filterOutResults = (results, stringOfProfilesToExclude) => {
  let arrOfTotalResults;
  let filteredResults;
  if (!Array.isArray(results)) {
    arrOfTotalResults = results.results;
  } else {
    arrOfTotalResults = results;
  }
  const tempProfilesToFilterOut = stringOfProfilesToExclude
    .split(",")
    .map(x => x.trim());
  if (arrOfTotalResults[0].asurite_id.raw) {
    filteredResults = arrOfTotalResults.filter(x => {
      return !tempProfilesToFilterOut.includes(x.asurite_id.raw);
    });
  } else {
    filteredResults = arrOfTotalResults.filter(x => {
      return !tempProfilesToFilterOut.includes(x.asurite_id);
    });
  }
  if (!Array.isArray(results)) {
    return { meta: { ...results.meta }, results: filteredResults };
  }
  return filteredResults;
};
