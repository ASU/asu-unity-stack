// @ts-check
import fetchMock from "jest-fetch-mock";

import * as data from "./api/feeds.json";

fetchMock.enableMocks();
fetchMock.mockResponse(() => {
  const res = { ...data };
  return Promise.resolve(JSON.stringify(res));
});
