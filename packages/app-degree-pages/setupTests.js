import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import replaceAllInserter from "string.prototype.replaceall";

import * as data from "./mocks/data/degree-search.json";
import {
  detailPageDefaultDataSource,
  listingPageDefaultDataSource,
} from "./src/core/constants";

// fix issue with replaceAl()
replaceAllInserter.shim();
// mock all fetch() calls
fetchMock.enableMocks();
fetchMock.mockResponse(() => Promise.resolve(JSON.stringify([1, 2, 3])));

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

expect.extend({ toMatchImageSnapshot });

Object.defineProperty(document, "currentScript", {
  value: { src: "local/dummy-folder/dummy.js" },
});

const mediaListener = (_eventType = "change", callBack) => {
  callBack?.({
    matches: false,
  });
};
Object.defineProperty(window, "matchMedia", {
  value: (matches = true) => ({
    matches,
    addEventListener: mediaListener,
    removeEventListener: mediaListener,
  }),
});
