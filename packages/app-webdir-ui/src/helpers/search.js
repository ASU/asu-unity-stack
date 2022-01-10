import {
  topConverter,
  allConverter,
  staffConverter,
  studentsConverter,
  subdomainConverter,
  anonConverter,
} from "./dataConverter";

const axios = require('axios');

const config = {
  headers: {
    authorization: "Bearer search-up6w8masqk1mvfca91i2pe97",
  },
  itemsPerPage: 6,
};
const ITEMS_PER_PAGE = 6;

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
  },
  [engineNames.STUDENTS]: {
    url: `https://asuis.ent.us-west-2.aws.found.io/api/as/v1/engines/web-dir-students/search.json`,
    needsAuth: true,
    converter: studentsConverter,
    resultsPerSummaryPage: 3,
  },
  [engineNames.SITES]: {
    url: `https://asuis.ent.us-west-2.aws.found.io/api/as/v1/engines/web-sites/search.json`,
    needsAuth: false,
    converter: subdomainConverter,
    resultsPerSummaryPage: 6,
  },
};

const searchEngine = (engineName, term, page, items, auth) => {
  if(engines[engineName].needsAuth && !auth) {
    return new Promise(resolve => {
      resolve({
        engineName,
        page,
        results: [...Array(items).keys()].map(anonConverter),
      })
    });
  } else {
    return new Promise(resolve => {
      axios
      .post(
        engines[engineName].url,
        { query: term, page: { size: items, current: page } },
        { headers: config.headers }
        )
        .then(res => {
          const topResult = res.data.results.reduce((prev, curr) => {
            return prev === null || prev._meta.score < curr._meta.score ? curr : prev
          }, null);
          resolve({
            engineName,
            page: res.data.meta.page,
            results: res.data.results.map(engines[engineName].converter),
            topResult: engines[engineName].converter(topResult)
          });
        });
      });
  }
};

export const performSearch = (tab, term, page, items, auth=null) => {
  return new Promise((resolve, reject) => {
    if(tab === 'all') {
      const promises = Object.keys(engines).map((engine) => {
        return searchEngine(engine, term, page, engines[engine].resultsPerSummaryPage, auth);
      });
      const resultsDict = {};
      Promise.all(promises).then((results) => {
        results.forEach((res) => {
          resultsDict[res.engineName] = {
            results: res.results,
            topResult: res.topResult,
            page: res.page
          };
        });
        resolve(resultsDict)
      })
    } else {
      searchEngine(tab, term, page, items, auth).then((results) => {
        resolve(results)
      });
    }
  })
};
