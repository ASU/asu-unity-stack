import { KEY } from "./constants";
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
  CareerAndStudentType,
  Interest2,
}) {
  let serviceUrl;
  let parameter = "";

  // ASUOnline API
  if (Campus === KEY.ONLINE) {
    parameter +=
      CareerAndStudentType === KEY.READMISSION
        ? `?category=${KEY.GRADUATE}`
        : `?category=${KEY.UNDERGRADUATE}`; // full word "undergraduate"
    serviceUrl = `${dataSourceAsuOnline}${parameter}`;
    return serviceUrl;
  }

  if (Interest2) {
    serviceUrl =
      `${dataSourceDegreeSearch}/acad-plan/${Interest2}` +
      `?include=acadPlanMarketingDescription` +
      `&include=degreeDescriptionLong` +
      `&include=campusesOffered` +
      `&include=planCategories` +
      `&include=degreeType` +
      `&include=rfiDisplay` +
      `&include=applicationDeadlines` +
      ``;
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
    `${dataSourceDegreeSearch}/acad-plans` +
    `?filter=activeInDegreeSearch` +
    `${parameter}` +
    `&include=acadPlanMarketingDescription` +
    `&include=degreeDescriptionLong` +
    `&include=campusesOffered` +
    `&include=planCategories` +
    `&include=rfiDisplay` +
    `&include=degreeType` +
    ``;

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
  if (params.Campus === KEY.ONLINE) {
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
