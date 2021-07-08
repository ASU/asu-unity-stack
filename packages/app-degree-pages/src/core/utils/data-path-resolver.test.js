import mockData from "../../../mocks/data/degree-search.json";
import { dataPathResolver } from "./data-path-resolver";

describe("#Test Data Path Resolver", () => {
  test.each([
    ["programs"],
    ["programs.0.CollegeUrl"],
    ["programs.0.EmailAddr"],
    ["programs.0.dummyFieldSubPln.dummyField"],
  ])(
    "should find a value into an object by resolving the `path` provided" +
      "\n\tdataPathResolver(mockData, '%s')",
    path => {
      /** @type {object[]} */
      const value = dataPathResolver(mockData, path);
      expect(value).toBeDefined();
    }
  );
});
