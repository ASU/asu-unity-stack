import fetchMock from "jest-fetch-mock";

import {
  detailPageDefaultDataSource,
  listingPageDefaultDataSource,
} from "../src/core/constants";
import "./components-core-mock";
import * as data from "./data/degree-search.json";

// mock all fetch() calls
fetchMock.enableMocks();
fetchMock.mockResponse(req => {
  let res = { programs: [] };
  if (req.url.includes(listingPageDefaultDataSource.method)) {
    res = data;
  }
  if (req.url.includes(detailPageDefaultDataSource.method)) {
    res = { programs: data.programs?.splice(0, 1) };
  }
  return Promise.resolve(JSON.stringify(res));
});

