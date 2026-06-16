// @ts-check

import { http, HttpResponse } from "msw";
import * as feeds from "../../../__mocks__/api/feeds.json";

/**
 * @param {{ empty?: boolean }} [options] - When `empty` is true an additional
 * handler is registered that returns a feed with no nodes, useful to showcase
 * the configurable `noFeedText`.
 */
function createMockHandlers(options = {}) {
  const handlers = [
    http.get("/api/mocks/feeds-json", () => {
      // @ts-ignore
      return HttpResponse.json(feeds.default || feeds);
    }),
  ];

  if (options.empty) {
    handlers.push(
      http.get("/api/mocks/empty-feeds-json", () =>
        HttpResponse.json({ nodes: [] })
      )
    );
  }

  return handlers;
}

export { createMockHandlers };
