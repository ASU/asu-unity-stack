// @ts-check

import { findCampusDefinition } from "../models";
import { fetchAcademicPlans } from "../utils"

// Possible values are UG, GR, UGCM, and OTHR.
const isUndergradProgram = row => row["degreeType"] === "UG";
// Check if a program is still accepting new students
const hasGraduateApplyDates = row =>
  row["applicationDeadlines"]?.length > 0;
const hasPlanDeadlines = row =>
  row["applicationDeadlines"]?.length > 0;
const isValidActiveProgram = row =>
  Object.keys(row).length > 0
    ? hasPlanDeadlines(row) || hasGraduateApplyDates(row)
    : true;
const getMajorityOwner = row => {
  const owners = row["owners"];
  if (!owners) return null;
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
    getMajorDesc: () => row["acadPlanMarketingDescription"],
    getInstitution: () => "ASU00",
    getAcadPlan: () => row["acadPlanCode"],
    /** @returns {string} */
    getDegree: () => {
      // Minors
    let degree = row["degreeDescriptionShort"] || row["acadPlanTypeDescription"];
    if (degree === "CERT") {
      degree = "Certificate";
    }
    return degree;
  },
    /** @returns {string} */
    getGeneralDegreeMajorMap: () => {
      // TODO: Will there always be a default major map?
      /**
       * majorMapGeneral is an array of all general major maps, excluding online,
       * including archived ones. The most recent has a defaultFlag key of true
       */
      let majorMapGeneral = row["majorMapGeneral"];
      let mostRecentMajorMap = majorMapGeneral?.find(
        obj => obj.defaultFlag === true
      );
      return mostRecentMajorMap?.url || "";
    },
    isUndergradProgram: () => isUndergradProgram(row),
    isGradProgram: () => row["degreeType"] === "GR",
    isMinorOrCertificate: () => row["degreeType"] === "UGCM", // TODO: Is this the best way to identify minors and certificates? Does OTHR also count as a certificate?
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => (isUndergradProgram(row) ? "undergrad" : "graduate"),
    getDegreeDesc: () => row["degreeDescriptionLong"],
    getDegreeDescLong: () => row["degreeDescriptionText"],
    getFullDescription: () => row["fullDescription"],
    getCurriculumUrl: () => row["asuOnlineAcadPlanUrl"]?.trim(),
    getAdmissionsRequirementsText: () => row["admissionsRequirementsText"],
    getTransferAdmission: () => row["transferAdmissionRequirementsText"],
    getGraduateRequirements: () => {
      /** @type {Array<Array>} */
      const rawRequirement1 = row["graduateDegreeAdditionalRequirements"];
      let gradRequirement1 = "";
      if (rawRequirement1?.length > 0) {
        // requirement[0]: acadPlan. ex `LAAUDAUDD`
        // requirement[1]: brief decription of requirement
        // ex 88 credit hours, a written and oral comprehensive exam
        // requirement[2]: unknown code. ex AUD88AUDD
        const flatRequirement1 = rawRequirement1.join(", or<br />");

        // AdmissionsDegRequirements
        gradRequirement1 = flatRequirement1 ? `<p>${flatRequirement1}</p>` : "";
      } else {
        gradRequirement1 = row["degreeMajorMap"];
        return `${gradRequirement1}`;
      }

      /** @type {string} */
      const gradRequirement2 = row["degreeRequirements"]; // Only availble in graduate programs

      return `${gradRequirement1}${gradRequirement2}`;
    },
    isOnline: () => row["asuOnlineAcadPlanUrl"], // Returns null if online url is not available
    // See getGeneralDegreeMajorMap for more info
    getOnlineMajorMapURL: () => {
      let onlineMajorMaps = row["majorMapOnline"];
      // TODO: Might change based on what Cyndi and her team decide what to show for degrees without a major map
      let mostRecentOnlineMajorMap = onlineMajorMaps?.find(
        obj => obj.defaultFlag === true
      );
      if (!mostRecentOnlineMajorMap)
        return onlineMajorMaps?.[onlineMajorMaps.length - 1]?.url;
      return mostRecentOnlineMajorMap?.url || "";
    },
    hasCareerData: () => !!row["careerData"]?.length,
    getCareerData: () => row["careerData"] || [],
    /** @return {string []} */
    getCampusList: () => row["campusesOffered"] || [],
    hasConcurrentOrAccelerateDegrees: () =>
      row["acceleratedAcadPlanCodes"]?.length ||
      row["concurrentAcadPlanCodes"]?.length,
    hasAccelerateDegrees: () => row["acceleratedAcadPlanCodes"]?.length,
    hasConcurrentDegrees: () => row["concurrentAcadPlanCodes"]?.length,
    getAccelerateDegrees: async () => {
      if (!row["acceleratedAcadPlanCodes"]) return [];

      return fetchAcademicPlans(row["acceleratedAcadPlanCodes"]);
    },
    getConcurrentDegrees: async () => {
      if (!row["concurrentAcadPlanCodes"]) return [];

      return fetchAcademicPlans(row["concurrentAcadPlanCodes"]);
    },
    getCollegeDesc: () => {
      // webservice value example "for Design and the Arts, Herberger Institute"
      /** @type {String} */
      return getMajorityOwner(row)?.collegeDescription;
    },
    getCollegeUrl: () => {
      return getMajorityOwner(row)?.collegeUrl || "";
    },
    /** @return {string} */
    getEmailAddress: () => row["emailAddr"],
    /** @return {string} */
    getPhone: () => row["phoneNumber"]?.replace("/", '-'),
    /** @return {string} */
    getDepartmentName: () => getMajorityOwner(row)?.departmentDescription,
    /** @return {string} */
    getPlanUrl: () => row["academicOfficeUrl"],
    // AsuProgramFee
    hasAsuProgramFee: () => row["additionalFee"],
    // AsuLangReqFlag
    getAsuLangReqFlag: () => row["languageRequired"],
    hasAsuLangReqFlag: () => row["languageRequired"],
    // asuMathReqFlag
    hasMathReqFlag: () => row["mathRequired "],
    getAdditionalMathReqCourse: () => {
      let mathCourseRequiredObject = row["firstMathCourseRequired"];
      if (!mathCourseRequiredObject) return "";
      return `${mathCourseRequiredObject.subject} ${mathCourseRequiredObject.catalogNumber} - ${mathCourseRequiredObject.description}`;
    },
    getOtherMathReqCourse: () => row["firstMathCourseRequiredSupplementalText"],
    getMathIntensity: () => row["mathIntensityDescription"],
    /** @return {string} */
    getMinMathReq: () => {
      let mathInfoObject = row["firstMathCourseRequired"];
      if (!mathInfoObject) return "";
      let { subject, catalogNumber, description } = mathInfoObject;
      return `${subject} ${catalogNumber} - ${description}`;
    },
    /** @return {string} */
    getMarketText: () => row["marketingText"]?.trim(),
    /** @return {string} */
    getAsuOfficeLoc: () => row["academicOfficeLocation"] || "",
    /** @return {string} */
    getCampusWue: () => row["campusWue"] || "", // TODO: Update this. What is this used for?
    getConcurrentDegreeMajorMaps: () => fetchAcademicPlans(row["concurrentAcadPlanCodes"]),
    getChangeMajor: () => row["changeMajorRequirementsText"],
    getAsuCareerOpportunity: () => row["careerOpportunities"],
    getGlobalExp: () => row["globalExperienceText"]?.trim(),
    /** @return {string} */
    getCollegeAcadOrg: () => getMajorityOwner(row)?.collegeAcadOrg,
    /** @return {Array} */
    getCollegeAcadOrgJoint: () => {
      let owners = row["owners"];
      if (!owners) return [];

      let allCollegeAcadOrgs =  owners.map(owner => owner.collegeAcadOrg); // TODO: Do we need to include all the owners collegeAcadOrgs when filtering or just the majority owner?
      return allCollegeAcadOrgs;
    },
    /** @return {string} */
    getDepartmentCode: () => getMajorityOwner(row)?.departmentAcadCode,
    /** @return {Object.<string, string>} */
    getGraduateApplyDates: () => row["applicationDeadlines"],
    hasGraduateApplyDates: () => hasGraduateApplyDates(row),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => row["applicationDeadlines"],
    hasPlanDeadlines: () => hasPlanDeadlines(row),
    isValidActiveProgram: () => isValidActiveProgram(row),
    /** @return {boolean} */
    getAsuDegSrchFlg: () => row["activeInDegreeSearch"],
    getAsuCustomText: () => row["customText"],
    getRequiredCoursesLabel: () => {
      if (row["acadPlanTypeDescription"] === "Minor") return "Minor";
      if (row["acadPlanTypeDescription"] === "Certificate") return "Certificate";

      return "Major";
    },
    getSubPlnMajorMaps: () => row["majorMapSubplans"]?.map(planInfo => planInfo.defualtFlag ? planInfo.url : null).filter(Boolean),
    getSubPln: () => row["SubPln"], // TODO: What is this used for? What needs to be shown?
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
