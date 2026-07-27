// @ts-check
import { http, HttpResponse } from "msw";

import {
  getMockProfileByAsuriteId,
  mockDirectoryProfiles,
} from "./webDirectoryMockProfiles";

const MOCK_CSRF_TOKEN = "mock-csrf-token";

/**
 * Paginates the mock profile pool the same way the real
 * `webdir-profiles/faculty-staff/filtered` endpoint would, and wraps it in
 * the `{ meta: { page }, results }` envelope expected by `helpers/search.js`.
 * When a `rank_group` param is present (used by `FacultyRankComponent`'s
 * tabs), only profiles seeded with a matching `rankGroup` are included, so
 * each tab shows distinct data instead of the same full pool.
 * @param {URL} url
 */
function buildFilteredProfilesResponse(url) {
  const page = Number(url.searchParams.get("page")) || 1;
  const size = Number(url.searchParams.get("size")) || 6;
  const rankGroup = url.searchParams.get("rank_group");
  const pool = rankGroup
    ? mockDirectoryProfiles.filter(
        profile => profile.rank_group.raw === rankGroup
      )
    : mockDirectoryProfiles;
  const start = (page - 1) * size;
  const results = pool.slice(start, start + size);

  return {
    meta: {
      request_id: "mock-request-id",
      page: {
        current: page,
        total_pages: Math.ceil(pool.length / size),
        total_results: pool.length,
        size,
      },
    },
    results,
  };
}

/**
 * Handles the POST `webdir-profiles/department` endpoint, which is used both
 * for the "people"/"people_departments" Web Directory search (`full_records:
 * true`) and for enriching GET results with title/department info
 * (`full_records: false`).
 * @param {{ full_records?: boolean, profiles?: { asurite_id: string, dept_id?: string }[] }} body
 */
function buildDepartmentProfilesResponse(body) {
  const profiles = body.profiles || [];

  if (!body.full_records) {
    return profiles.map(profile => {
      const mock = getMockProfileByAsuriteId(profile.asurite_id);
      return {
        title: mock.titles.raw,
        dept_name: mock.departments.raw[0],
      };
    });
  }

  return profiles.map((profile, index) => {
    const fullRecord = getMockProfileByAsuriteId(profile.asurite_id, index);
    return {
      asurite_id: profile.asurite_id,
      dept_id: profile.dept_id,
      ...(index === 0 ? { total_results: profiles.length } : {}),
      full_record: fullRecord,
    };
  });
}

/**
 * MSW request handlers for the Web Directory endpoints hit by
 * `WebDirectoryComponent` and `FacultyRankComponent` stories. Registered via
 * each story's `parameters.msw.handlers`.
 */
export const webDirectoryHandlers = [
  http.get("*/session/token", () => HttpResponse.text(MOCK_CSRF_TOKEN)),

  http.get("*/webdir-profiles/faculty-staff/filtered", ({ request }) => {
    const url = new URL(request.url);
    return HttpResponse.json(buildFilteredProfilesResponse(url));
  }),

  http.post("*/webdir-profiles/department", async ({ request }) => {
    const body =
      /** @type {{ full_records?: boolean, profiles?: { asurite_id: string, dept_id?: string }[] }} */ (
        await request.json()
      );
    return HttpResponse.json(buildDepartmentProfilesResponse(body));
  }),
];
