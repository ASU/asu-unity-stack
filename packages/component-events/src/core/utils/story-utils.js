// @ts-check

import { http, HttpResponse } from "msw";
import * as feeds from "../../../__mocks__/api/feeds.json";

function createMockHandlers() {
  return [
    http.get("/api/mocks/feeds-json", () => {
      // @ts-ignore
      return HttpResponse.json(feeds.default || feeds);
    }),
  ];
}

export { createMockHandlers };
