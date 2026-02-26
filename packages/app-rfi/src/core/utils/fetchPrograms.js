import { DATA_SOURCE, KEY } from "./constants";
import { normalizeDegreeData } from "./datasource-helper";
import { filterDataByProps } from "./filterPrograms";

/**
 * @typedef {object} FetchDegreesDataParameters
 * @prop {string} [dataSourceDegreeSearch]
 * @prop {string} [dataSourceAsuOnline]
 * @prop {string} [filterByDepartmentCode]
 * @prop {string} [filterByCollegeCode]
 * @prop {string} [filterByCampusCode] Campus Code
 * @prop {string} [Campus] Campus type
 * @prop {string} [CampusProgramHasChoice] Campus program has choice
 * @prop {string} [CareerAndStudentType]
 * @prop {string} [Interest2]
 */

/**
 * @param {FetchDegreesDataParameters} params
 * @returns {string}
 */
function getServiceUrl({
  dataSourceDegreeSearch,
  dataSourceAsuOnline,
  filterByDepartmentCode,
  filterByCollegeCode,
  Campus,
  CampusProgramHasChoice,
  CareerAndStudentType,
  Interest2,
}) {
  let serviceUrl;
  let parameter = "";

  const includeFields = [
    "acadPlanMarketingDescription",
    "degreeDescriptionLong",
    "campusesOffered",
    "planCategories",
    "rfiDisplay",
    "degreeType",
    // "applicationDeadlines", // This can double the response size
  ]
    .map(term => `include=${term}`)
    .join("&");

  // ASUOnline API
  if (Campus === KEY.ONLINE) {
    parameter +=
      CareerAndStudentType === KEY.READMISSION
        ? `?category=${KEY.GRADUATE}`
        : `?category=${KEY.UNDERGRADUATE}`; // full word "undergraduate"
    serviceUrl = `${dataSourceAsuOnline}${parameter}`;
    return serviceUrl;
  }

  // ASUOnline API - CampusProgramHasChoice is true, but Campus is not ONLINE Search all ONLINE programs
  if (CampusProgramHasChoice === KEY.ONLINE) {
    serviceUrl = `${dataSourceAsuOnline}`;
    return serviceUrl;
  }

  if (Interest2) {
    serviceUrl =
      `${dataSourceDegreeSearch}/acad-plan/${Interest2}?` +
      `include=applicationDeadlines&${includeFields}`;
    return serviceUrl;
  }

  if (
    CareerAndStudentType === KEY.READMISSION ||
    CareerAndStudentType === KEY.FRESHMAN ||
    CareerAndStudentType === KEY.TRANSFER
  ) {
    // GR or UG
    parameter +=
      CareerAndStudentType === KEY.READMISSION
        ? `&degreeType=${KEY.GR}`
        : `&degreeType=${KEY.UG}`;
  } else {
    // Both GR and UG
    parameter += `&degreeType=${KEY.GR}&degreeType=${KEY.UG}`;
  }

  parameter = filterDataByProps.prepareServiceUrl(
    parameter,
    filterByDepartmentCode,
    filterByCollegeCode
  );

  serviceUrl =
    `${dataSourceDegreeSearch}/acad-plans?filter=activeInDegreeSearch` +
    `${parameter}&${includeFields}`;

  return serviceUrl;
}

/**
 * @typedef {["Success", import("./datasource-helper").AcadPlan[]]} FetchDataSuccessResponse
 * @typedef {["Error", Error]} FetchDataErrorResponse
 *
 * @param {FetchDegreesDataParameters} params
 * @returns {Promise<FetchDataSuccessResponse|FetchDataErrorResponse>}
 */
export async function fetchDegreesData(params) {
  const serviceUrl = getServiceUrl(params);
  let options = {};

  // DATA_SOURCE.ASU_ONLINE requires an Accept header to return JSON
  // This api endpoint also is sent via params.dataSourceAsuOnline, however,
  // this endpoint can be changed by props and is not guaranteed to be the same
  // as DATA_SOURCE.ASU_ONLINE, so we check the URL instead of the prop value.
  // Comparing the URL ensures we add the header and do not have to match
  // conditions in 2 places
  if (serviceUrl.indexOf(DATA_SOURCE.ASU_ONLINE) > -1) {
    // ASUOnline API
    options = {
      headers: {
        Accept: "application/json",
      },
    };
  }

  return (
    fetch(serviceUrl, options)
      // Handle as text first due to encoding issues.
      .then(response => response.json())
      // Normalize data from different API's
      .then(data => normalizeDegreeData(data))
      // Filter before returning data in order to keep filter logic in one place
      .then(data =>
        filterDataByProps.filterData(
          data,
          params.filterByDepartmentCode,
          params.filterByCollegeCode,
          params.filterByCampusCode
        )
      )
      .then(
        /** @returns {FetchDataSuccessResponse|FetchDataErrorResponse} */
        data =>
          data.length > 0 ? ["Success", data] : ["Error", new Error("No Data")]
      )
      .catch(error => ["Error", new Error(error)])
  );
}
