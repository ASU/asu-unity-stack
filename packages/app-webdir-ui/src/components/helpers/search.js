import {
  topConverter,
  allConverter,
  staffConverter,
  studentsConverter,
  subdomainConverter,
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
  },
  [engineNames.STUDENTS]: {
    url: `https://asuis.ent.us-west-2.aws.found.io/api/as/v1/engines/web-dir-students/search.json`,
    needsAuth: true,
    converter: studentsConverter,
  },
  [engineNames.SITES]: {
    url: `https://asuis.ent.us-west-2.aws.found.io/api/as/v1/engines/web-sites/search.json`,
    needsAuth: false,
    converter: subdomainConverter,
  },
};

export const searchEngine = (engineName, term, page, items, auth) => {
  return new Promise(resolve => {
    axios
      .post(
        engines[engineName].url,
        { query: term, page: { size: items, current: page } },
        { headers: config.headers }
      )
      .then(res => {
        resolve({
          page: res.data.meta.page,
          results: res.data.results.map(engines[engineName].converter),
        });
      });
  });
};
