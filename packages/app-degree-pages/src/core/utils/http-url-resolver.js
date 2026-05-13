// @ts-check

/**
 *
 * @param {import("../types/listing-page-types").ProgramListDataSource} dataSource
 * @param {import("../types/listing-page-types").ProgramListDataSource} defaultDataSource
 * @returns {string}
 */
function urlResolver(dataSource, defaultDataSource) {
  const httpParameters = { ...defaultDataSource, ...dataSource };
  if (httpParameters.collegeAcadOrg) {
    // Convert `collegeAcadOrg` (from props) to `collegeOrg` for use as paramter
    // to accommodate Degree Search API changes. collegeOrg was added to solve
    // primary ownership issues for degrees that are owned by multiple colleges.
    // See WS2-1391 for more details. We've opted to keep the props interface
    // the same and re-map the name here for a smooth transition.
    httpParameters["collegeOrg"] = httpParameters["collegeAcadOrg"];
    delete httpParameters["collegeAcadOrg"];
  }
  if (httpParameters.program) {
    // Convert `program` (from props) to `degreeType` for use as paramter
    // to accommodate Data Potluck API changes.
    const { program } = httpParameters;

    if (httpParameters.cert === "true" && program === "all") {
      httpParameters["degreeType"] = "GR,UGCM";
    } else if (program === "all") {
      httpParameters["degreeType"] = "GR,UG";
    } else if (httpParameters.cert === "true" && program === "undergrad") {
      httpParameters["degreeType"] = "UGCM";
    } else if (program === "graduate") {
      httpParameters["degreeType"] = "GR";
    } else {
      httpParameters["degreeType"] = "UG";
    }
    delete httpParameters["program"];
  }
  if (httpParameters.acadPlan) {
    httpParameters.endpoint += `/${httpParameters.acadPlan}`;
    delete httpParameters["acadPlan"];
  }

  /** The following code is commented out because it is not used in the current implementation
   * and the default will be to show only active programs.
   * If we need to show inactive programs, we can reimplement this code.

  if (httpParameters.showInactivePrograms === "true") {
    delete httpParameters["showInactivePrograms"];
    delete httpParameters["filter"];
  }

  */

  const { endpoint, ...keyValues } = httpParameters;

  const splitParamsContainingCommas = (paramName, csvString) => {
    if (!csvString || paramName === undefined) return ""; // Do not include in param fetch call if no filter options provided e.g. "blacklistAcadPlan" is equal to null
    // httpParameters that are arrays format to send to API should have 1 paramName seperated by commas
    // input: paramName = "foo", csvString = ["bar", "baz"]
    // output: "foo=bar,baz"
    if (Array.isArray(csvString)) {
      return `${paramName}=${csvString}`;
    }
    // If the paramName is a string already including commas, we need to split it into multiple params
    // input: paramName = "foo", csvString = "bar,baz"
    // output: "foo=bar&foo=baz"
    return csvString
      .split(",")
      .map(item => `${paramName}=${item.trim()}`)
      .join("&");
  };

  const params = Object.keys(keyValues).reduce(
    (accumulator, paramName) =>
      `${accumulator}&${splitParamsContainingCommas(
        paramName,
        httpParameters[paramName]
      )}`,
    ""
  );

  return `${endpoint}?${params}`;
}

export { urlResolver };
