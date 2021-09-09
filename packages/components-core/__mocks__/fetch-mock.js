// @ts-check
import fetchMock from "jest-fetch-mock";

import * as data from "./data/feed-anatomy-search.json";

fetchMock.enableMocks();
fetchMock.mockResponse(() => {
  const res = { ...data };
  return Promise.resolve(JSON.stringify(res));
});
