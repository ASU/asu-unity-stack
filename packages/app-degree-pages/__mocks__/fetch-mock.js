import fetchMock from "jest-fetch-mock";

import {
  detailPageDefaultDataSource,
  listingPageDefaultDataSource,
} from "../src/core/constants";
import "./components-core-mock";
import * as detailData from "./data/degree-search-detail.json";
import * as listData from "./data/degree-search.json";

// mock all fetch() calls
fetchMock.enableMocks();
fetchMock.mockResponse(req => {
  let res = { programs: [] };
  if (req.url.includes(listingPageDefaultDataSource.method)) {
    res = listData;
  }
  if (req.url.includes(detailPageDefaultDataSource.method)) {
    res = detailData;
  }
  return Promise.resolve(JSON.stringify(res));
});
