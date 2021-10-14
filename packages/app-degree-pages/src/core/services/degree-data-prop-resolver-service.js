// @ts-check

import { findCampusDefinition } from "../models";

const mathintensity = {
  G: "General",
  M: "Moderate",
  S: "Substantial",
  undefined: "",
};

// If Degree starts with a B, it's undergrad.
// TODO Is there a better means of identifying undergrad programs?
// Possibly AcadProg field (UG* is Undergrad and GR* is Graduate...
// wouldn't give us minors and certs, though).
const isUndergradProgram = row => row["Degree"]?.charAt(0) === "B";
// Check if a program is still accepting new students
const hasGraduateApplyDates = row =>
  Object.keys(row["graduateApplyDates"] || {}).length > 0;
const hasPlanDeadlines = row =>
  Object.keys(row["planDeadlines"] || {}).length > 0;
const isValidActiveProgram = row =>
  Object.keys(row).length > 0
    ? hasPlanDeadlines(row) || hasGraduateApplyDates(row)
    : true;

/**
 *
 * @param {Object.<string, any>} row
 *
 */
// @ts-ignore
function degreeDataPropResolverService(row = {}) {
  return {
    getMajorDesc: () => row["Descr100"],
    getInstitution: () => row["Institution"],
    getAcadPlan: () => row["AcadPlan"],
    getDegree: () => row["Degree"],
    isUndergradProgram: () => isUndergradProgram(row),
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => (isUndergradProgram(row) ? "undergrad" : "graduate"),
    getDegreeDesc: () => row["DegreeDescr"],
    getDegreeDescLong: () => row["DegreeDescrlong"],
    getDescrLongExtented: () => row["DescrlongExtns"],
    getCurriculumUrl: () => row["CurriculumUrl"]?.trim(),
    getDescrLongExtented5: () => row["DescrlongExtn5"],
    getTransferAdmission: () => row["TransferAdmission"],
    isOnline: () => row["managedOnlineCampus"],
    getOnlineMajorMapURL: () => row["onlineMajorMapURL"],
    getAsuCritTrackUrl: () => row["AsuCritTrackUrl"],
    hasCareerData: () => !!row["careerData"]?.length,
    getCareerData: () => row["careerData"] || [],
    /** @return {string []} */
    getCampusList: () => row["CampusStringArray"] || [],
    hasConcurrentOrAccelerateDegrees: () =>
      !!row["accelerateDegrees"]?.length || !!row["concurrentDegrees"]?.length,
    getAccelerateDegrees: () => row["accelerateDegrees"] || [],
    getConcurrentDegrees: () => row["concurrentDegrees"] || [],
    getCollegeDesc: () => {
      // webservice value example "for Design and the Arts, Herberger Institute"
      /** @type {String} */
      const collegeDescRaw = row["CollegeDescr100"];
      const collegeDesc = collegeDescRaw
        ? collegeDescRaw.split(",").reverse().join(" ").trim()
        : "";
      return collegeDesc;
    },
    getCollegeUrl: () => row["CollegeUrl"],
    /** @return {string} */
    getEmailAddress: () => row["EmailAddr"],
    /** @return {string} */
    getPhone: () => row["Phone"],
    /** @return {string} */
    getDepartmentName: () => row["DepartmentName"],
    /** @return {string} */
    getPlanUrl: () => row["PlanUrl"],
    // AsuProgramFee
    getAsuProgramFee: () => row["AsuProgramFee"],
    hasAsuProgramFee: () => row["AsuProgramFee"] === "Y",
    // AsuLangReqFlag
    getAsuLangReqFlag: () => row["AsuLangReqFlag"],
    hasAsuLangReqFlag: () => row["AsuLangReqFlag"] === "Y",
    getAcadPlanText: () => row["asuAcadpLrfText"],
    // asuMathReqFlag
    getMathReqFlag: () => row["asuMathReqFlag"],
    hasMathReqFlag: () => row["asuMathReqFlag"] === "Y",
    getAdditionalMathReqCourse: () => row["additionalMathReqCourse"],
    getOtherMathReqCourse: () => row["asuAcadpMrfText"],
    getMathIntensity: () => mathintensity[row["MathIntensity"]],
    getMathIntensityRawValue: () => row["MathIntensity"],
    getMinMathReq: () => row["MinMathReq"] || "",
    /** @return {string} */
    getMarketText: () => row["marketText"]?.trim(),
    /** @return {string} */
    getAsuOfficeLoc: () => row["AsuOfficeLoc"] || "",
    /** @return {string} */
    getCampusWue: () => row["campusWue"] || "",
    getConcurrentDegreeMajorMaps: () => row["concurrentDegreeMajorMaps"]?.[0],
    getChangeMajor: () => row["ChangeMajor"],
    getAsuCareerOpportunity: () => row["AsuCareerOpp"],
    getGlobalExp: () => row["globalExp"]?.trim(),
    /** @return {string} */
    getCollegeAcadOrg: () => row["CollegeAcadOrg"],
    /** @return {string} */
    getDepartmentCode: () => row["DepartmentCode"],
    /** @return {Object.<string, string>} */
    getGraduateApplyDates: () => row["graduateApplyDates"],
    hasGraduateApplyDates: () => hasGraduateApplyDates(row),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => row["planDeadlines"],
    hasPlanDeadlines: () => hasPlanDeadlines(row),
    isValidActiveProgram: () => isValidActiveProgram(row),
    getAsuDegSrchFlg: () => row["AsuDegSrchFlg"],
    getAsuCustomText: () => row["AsuCustomText"],
  };
}

/**
 *
 * @param {import("src/core/models/shared-types").DegreeDataPropResolver} resolver
 * @returns {import("src/core/models/shared-types").LinkItem[]}
 */
function getCampusLocations(resolver) {
  const program = resolver.getProgramType();
  const locations = [];
  const getDefaultLocation = location => ({
    text: location,
    url: "",
  });

  const campusList = resolver.getCampusList();
  if (campusList.length > 0)
    locations.push(
      ...campusList.map(
        location =>
          findCampusDefinition(location, program) ||
          getDefaultLocation(location)
      )
    );

  const campusWueLocation = resolver.getCampusWue();
  if (campusWueLocation) {
    locations.push(
      findCampusDefinition(campusWueLocation, program) ||
        getDefaultLocation(campusWueLocation)
    );
  }

  return locations;
}

/**
 *
 * @param {import("src/core/models/program-detail-types").AnchorMenuProps} anchorMenu
 * @param {import("src/core/models/shared-types").DegreeDataPropResolver} resolver
 */
const filterAnchorMenu = (anchorMenu, resolver) => {
  const validAnchors = { ...anchorMenu };

  if (validAnchors.globalOpportunity && !resolver.getGlobalExp()) {
    validAnchors.globalOpportunity = false;
  }
  if (validAnchors.careerOutlook && !resolver.getAsuCareerOpportunity()) {
    validAnchors.careerOutlook = false;
  }
  if (validAnchors.attendOnline && !resolver.getCurriculumUrl()) {
    validAnchors.attendOnline = false;
  }

  return validAnchors;
};

/**
 *
 * @param {import("src/core/models/program-detail-types").AnchorMenuProps} anchorMenu
 * @returns
 */
const hasValidAnchorMenu = anchorMenu => {
  const res =
    Object.keys(anchorMenu).filter(key => key !== "externalAnchors").length >
      0 || anchorMenu?.externalAnchors?.length > 0;
  return res;
};

export {
  degreeDataPropResolverService,
  filterAnchorMenu,
  getCampusLocations,
  hasValidAnchorMenu,
};
