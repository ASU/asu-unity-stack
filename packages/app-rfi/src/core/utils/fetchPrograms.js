// Fetch degree data from Degree Search REST API.
// Returns the full degree dataset for the given program (undergrad | graduate).
// We do filtering in useEffect()s to manage filtering logic for our various

import { KEY } from "./constants";
import { normalizeDegreeData } from "./datasource-helper";

// field options.
/**
 * @returns {string}
 */
function getServiceUrl({
  dataSourceDegreeSearch,
  dataSourceAsuOnline,
  department,
  college,
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
      `?include=degreeDescriptionShort` +
      `&include=degreeDescriptionLong` +
      `&include=campusesOffered` +
      `&include=planCategories` +
      `&include=degreeType` +
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

  if (department) {
    // add department parameter first
    parameter += `&ownedByDepartment=${department}`;
  } else if (college) {
    // add college parameter if no department parameter
    parameter += `&ownedByCollege=${college}`;
  }

  serviceUrl =
    `${dataSourceDegreeSearch}/acad-plans` +
    `?filter=activeInDegreeSearch` +
    `${parameter}` +
    `&include=degreeDescriptionShort` +
    `&include=degreeDescriptionLong` +
    `&include=campusesOffered` +
    `&include=planCategories` +
    `&include=degreeType` +
    ``;

  return serviceUrl;
}

/**
 * @returns {Promise<["Success", import("./datasource-helper").AcadPlan[]]|["Error", Error]>}
 */
export async function fetchDegreesData(params) {
  const serviceUrl = getServiceUrl(params);
  // ASUOnline API
  let options = {};
  if (params.Campus === KEY.ONLINE) {
    options = {
      headers: {
        // eslint-disable-next-line prettier/prettier
        Accept: "application/json",
      },
    };
  }
  return (
    fetch(serviceUrl, options)
      // Handle as text first due to encoding issues.
      .then(response => response.json())
      .then(data => {
        const normalizedData = normalizeDegreeData(data);
        if (normalizedData.length > 0) {
          return ["Success", normalizedData];
        }
        return ["Error", new Error("No Data")];
      })
      .catch(error => ["Error", new Error(error)])
  );
}
