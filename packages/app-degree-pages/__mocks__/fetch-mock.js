import { vi } from 'vitest';
import {
  detailPageDefaultDataSource,
  listingPageDefaultDataSource,
} from "../src/core/constants";
import "./unity-react-core-mock";
import detailNoNewStudentData from "./data/degree-search-detail-no-new-student.json";
import detailData from "./data/degree-search-detail.json";
import listData from "./data/degree-search.json";

const noNewStudentAcadPlan = "BABUSCLBA";

// Mock fetch globally
const mockFetch = vi.fn();

vi.stubGlobal('fetch', mockFetch);

// Setup the mock implementation
mockFetch.mockImplementation(async (url) => {
  if (url.includes("dummy-error-url")) {
    return Promise.reject(new Error("dummy error"));
  }

  if (url.includes("dummy-broken-json")) {
    const badResponse = { programs: undefined };
    return new Response(JSON.stringify(badResponse));
  }

  let res = [];

  if (url.includes(listingPageDefaultDataSource.endpoint)) {
    res = listData;
  } else if (url.includes(noNewStudentAcadPlan)) {
    res = detailNoNewStudentData;
  } else if (url.includes(detailPageDefaultDataSource.endpoint + "/")) {
    res = detailData;
  }

  if (globalThis.doDelay) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
});

// Optional: Reset mocks between tests
beforeEach(() => {
  mockFetch.mockClear();
});
