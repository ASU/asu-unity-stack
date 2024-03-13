import fetchMock from "jest-fetch-mock";

import {
  detailPageDefaultDataSource,
  listingPageDefaultDataSource,
} from "../src/core/constants";
import "./components-core-mock";
import detailNoNewStudentData from "./data/degree-search-detail-no-new-student.json";
import detailData from "./data/degree-search-detail.json";
import listData from "./data/degree-search.json";

const noNewStudentAcadPlan = "BABUSCLBA";

// mock all fetch() calls
fetchMock.enableMocks();
fetchMock.mockResponse(req => {
  if (req.url.includes("dummy-error-url")) {
    return Promise.reject(new Error("dummy error"));
  }
  if (req.url.includes("dummy-broken-json")) {
    const badResponse = { programs: undefined };
    return Promise.resolve(JSON.stringify(badResponse));
  }

  let res = [];

  if (req.url.includes(listingPageDefaultDataSource.endpoint)) {
    res = listData;
  } else if (req.url.includes(noNewStudentAcadPlan)) {
    res = detailNoNewStudentData;
  } else if (req.url.includes(detailPageDefaultDataSource.endpoint + "/")) {
    res = detailData;
  }

  if (globalThis.doDelay) {
    return new Promise(resolve => setTimeout(() => resolve(res), 1000));
  }
  return Promise.resolve(JSON.stringify(res));
});
