// @ts-check

// eslint-disable-next-line jest/no-mocks-import
import * as feeds from "../../../__mocks__/api/feeds.json";

function createMockParam() {
  const mockData = [
    {
      url: "/api/mocks/feeds-json",
      method: "GET",
      status: 200,
      // @ts-ignore
      response: { ...(feeds.default || feeds) },
    },
  ];
  return mockData;
}

export { createMockParam };
