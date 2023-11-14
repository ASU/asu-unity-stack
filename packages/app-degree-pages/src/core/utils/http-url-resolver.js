// @ts-check

/**
 *
 * @param {import("../types/listing-page-types").AppDataSource} dataSource
 * @param {import("../types/listing-page-types").AppDataSource} defaultDataSource
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
    let program = httpParameters.program;
    httpParameters["degreeType"] = program === "undergrad" ? "UG" : "GR";
    delete httpParameters["program"];
  }
  if (httpParameters.acadPlan) {
    httpParameters.endpoint += `/${httpParameters.acadPlan}`;
    delete httpParameters["acadPlan"];
  }


  const { endpoint, fields, ...keyValues } = httpParameters;

  const params = Object.keys(keyValues).reduce(
    (accumulator, paramName) =>
      `${accumulator}&${paramName}=${httpParameters[paramName]}`,
    ""
  );
  console.log("endpoint", endpoint + "?" + params);

  return `${endpoint}?${params}`;
}

export { urlResolver };
