// @ts-check
import { vi } from 'vitest';
import * as data from "./api/feeds.json";

const mockFetch = vi.fn();

vi.stubGlobal('fetch', mockFetch);

mockFetch.mockImplementation(async () => {
  const res = { ...data };
  return new Response(JSON.stringify(res), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
});

// Optional: Reset mocks between tests
beforeEach(() => {
  mockFetch.mockClear();
});
