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
  (row["applicationDeadlines"] || {}).length > 0;
const isValidActiveProgram = row =>
  Object.keys(row).length > 0
    ? hasPlanDeadlines(row) || hasGraduateApplyDates(row)
    : true;
const getMajorityOwner = row => {
  const owners = row["owners"];
  const majorityOwner = owners.reduce((prev, curr) =>
    prev.percentOwned > curr.precentOwned ? prev : curr
  );
  return majorityOwner;
};

/**
 *
 * @param {Object.<string, any>} row
 *
 */
// @ts-ignore
function degreeDataPropResolverService(row = {}) {
  return {
    getMajorDesc: () => row["acadPlanDescription"],
    getInstitution: () => row["Institution"],
    getAcadPlan: () => row["AcadPlan"],
    getDegree: () => row["degreeDescriptionShort"],
    /** @returns {string} */
    getGeneralDegreeMajorMap: () => {
      // TODO: Will there always be a default major map?
      /**
       * majorMapGeneral is an array of all general major maps, excluding online,
       * including archived ones. The most recent has a defaultFlag key of true
      */
      let majorMapGeneral = row["majorMapGeneral"];
      let mostRecentMajorMap = majorMapGeneral.find(obj => obj.defaultFlag === true);
      return mostRecentMajorMap?.url || "";
    },
    isUndergradProgram: () => isUndergradProgram(row),
    isGradProgram: () => !isUndergradProgram(row),
    isMinorOrCertificate: () => {
      return !!(row["Degree"] === "Minor" || row["Degree"] === "Certificate");
    },
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => (isUndergradProgram(row) ? "undergrad" : "graduate"),
    getDegreeDesc: () => row["DegreeDescr"],
    getDegreeDescLong: () => row["DegreeDescrlong"],
    getFullDescription: () => row["fullDescription"],
    getCurriculumUrl: () => row["CurriculumUrl"]?.trim(),
    getAdmissionsRequirementsText: () => row["admissionsRequirementsText"],
    getTransferAdmission: () => row["TransferAdmission"],
    getGraduateRequirements: () => {
      /** @type {Array<Array>} */
      const rawRequirement1 = row["gradAdditionalRequirements"];
      let gradRequirement1 = "";
      if (rawRequirement1?.length > 0) {
        // requirement[0]: acadPlan. ex `LAAUDAUDD`
        // requirement[1]: brief decription of requirement
        // ex 88 credit hours, a written and oral comprehensive exam
        // requirement[2]: unknown code. ex AUD88AUDD
        const flatRequirement1 = rawRequirement1
          .map(requirement => requirement?.[1])
          .join(", or<br />");

        // AdmissionsDegRequirements
        gradRequirement1 = flatRequirement1 ? `<p>${flatRequirement1}</p>` : "";
      } else {
        gradRequirement1 = row["degreeMajorMap"];
        return `${gradRequirement1}`;
      }

      /** @type {string} */
      const gradRequirement2 = row["AdmissionsDegRequirements"];

      return `${gradRequirement1}${gradRequirement2}`;
    },
    isOnline: () => !row["majorMapGeneral"], // Returns null if only online is available
    // See getGeneralDegreeMajorMap for more info
    getOnlineMajorMapURL: () => {
      let onlineMajorMaps = row["majorMapOnline"];
      let mostRecentOnlineMajorMap = onlineMajorMaps.find(obj => obj.defaultFlag === true);
      return mostRecentOnlineMajorMap?.url || "";
    },
    hasCareerData: () => !!row["careerData"]?.length,
    getCareerData: () => row["careerData"] || [],
    /** @return {string []} */
    getCampusList: () => row["campusesOffered"] || [],
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
    /** @return {Array} */
    getCollegeAcadOrgJoint: () => row["CollegeAcadOrgJoint"],
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
    getRequiredCoursesLabel: () => {
      if (row["Degree"] === "Minor") return "Minor";
      if (row["Degree"] === "Certificate") return "Certificate";

      return "Major";
    },
    getSubPlnMajorMaps: () => row["SubPlnMajorMaps"],
    getSubPln: () => row["SubPln"],
  };
}

/**
 *
 * @param {import("src/core/types/shared-local-types").DegreeDataPropResolver} resolver
 * @returns {import("src/core/types/shared-types").LinkItem[]}
 */
function getCampusLocations(resolver) {
  const program = resolver.getProgramType();
  const locations = [];
  const getDefaultLocation = location => ({
    text: location,
    url: "",
  });

  const campusList = resolver.getCampusList().map(campus => campus.campusCode);
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
 * @param {import("src/core/types/detail-page-types").AnchorMenuProps} anchorMenu
 * @param {import("src/core/types/shared-local-types").DegreeDataPropResolver} resolver
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
 * @param {import("src/core/types/detail-page-types").AnchorMenuProps} anchorMenu
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
