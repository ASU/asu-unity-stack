// @ts-check
import fetchMock from "jest-fetch-mock";

import mockProgram from "../../../mocks/data/degree-search.json";
import { fetchData } from "./fetch-data";

describe("#Test Degree HTTP request", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should return the degree list programs", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockProgram));
    const URL = "../../../mocks/data/degree-search.json";
    const json = await fetchData(URL);
    expect(json).toBeDefined();
  });
});
