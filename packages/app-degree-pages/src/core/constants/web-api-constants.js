// @ts-check

const DOMAIN_URL = "https://degrees.apps.asu.edu";

/**
 * @type {import("../types/listing-page-types").ProgramListDataSource}
 */
const listingPageDefaultDataSource = {
  endpoint: "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plans",
  filter: "activeInDegreeSearch",
  include: "*",
  degreeType: "UG",
};

/**
 * @type {import("../types/detail-page-types").ProgramDetailDataSource}
 */
const detailPageDefaultDataSource = {
  acadPlan: null,
  endpoint: "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan",
  include: "*",
};

export {
  DOMAIN_URL,
  listingPageDefaultDataSource,
  detailPageDefaultDataSource,
};
