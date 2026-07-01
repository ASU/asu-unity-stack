// @ts-check

import { findCampusDefinition } from "../models";
import { fetchAcademicPlans } from "../utils";

// Possible values are UG, GR, UGCM, and OTHR.
const isUndergradProgram = row => row["degreeType"] === "UG";
// Check if a program is still accepting new students
const hasGraduateApplyDates = row => row["applicationDeadlines"]?.length > 0;
const hasPlanDeadlines = row => row["applicationDeadlines"]?.length > 0;
const isValidActiveProgram = row =>
  Object.keys(row).length > 0
    ? hasPlanDeadlines(row) || hasGraduateApplyDates(row)
    : true;
const getMajorityOwner = row => {
  const { owners } = row;
  if (!owners) return null;
  const majorityOwner = owners.reduce((prev, curr) =>
    prev.percentOwned > curr.percentOwned ? prev : curr
  );
  return majorityOwner;
};

/**
 *
 * @param {Object.<string, any>} row
 *
 */
// @ts-ignore
/**
 * Creates a service object that provides methods to extract and format degree-related data from a row object.
 * This service acts as a data accessor layer for degree program information, providing a clean API
 * to retrieve various properties and computed values from raw degree data.
 *
 * @param {Object} [row={}] - The raw degree data object containing all degree program information
 * @param {string} [row.acadPlanMarketingDescription] - Marketing description of the academic plan
 * @param {string} [row.acadPlanCode] - Academic plan code
 * @param {string} [row.degreeDescriptionShort] - Short description of the degree
 * @param {string} [row.acadPlanTypeDescription] - Type description of the academic plan
 * @param {Array<Object>} [row.majorMapGeneral] - Array of general major maps
 * @param {string} [row.degreeType] - Type of degree (e.g., "GR" for graduate, "UGCM" for undergraduate)
 * @param {string} [row.degreeDescriptionLong] - Long description of the degree
 * @param {string} [row.degreeDescriptionText] - Text description of the degree
 * @param {string} [row.fullDescription] - Full description of the degree program
 * @param {string} [row.asuOnlineAcadPlanUrl] - URL for ASU online academic plan
 * @param {string} [row.admissionsRequirementsText] - Admissions requirements text
 * @param {string} [row.minorCourseRequirements] - Minor course requirements
 * @param {string} [row.transferAdmissionRequirementsText] - Transfer admission requirements
 * @param {Array<Array>} [row.graduateDegreeAdditionalRequirements] - Graduate degree additional requirements
 * @param {string} [row.degreeMajorMap] - Degree major map
 * @param {string} [row.degreeRequirements] - Degree requirements
 * @param {Array<Object>} [row.majorMapOnline] - Array of online major maps
 * @param {Array<Object>} [row.careerData] - Career data array
 * @param {Array<Object>} [row.campusesOffered] - Array of campuses offering the program
 * @param {Array<string>} [row.acceleratedAcadPlanCodes] - Array of accelerated academic plan codes
 * @param {Array<string>} [row.concurrentAcadPlanCodes] - Array of concurrent academic plan codes
 * @param {string} [row.emailAddr] - Email address
 * @param {string} [row.phoneNumber] - Phone number
 * @param {string} [row.professionalLicensureStandardText] - Standard professional licensure text
 * @param {string} [row.professionalLicensureAdditionalText] - Additional professional licensure text
 * @param {string} [row.academicOfficeUrl] - Academic office URL
 * @param {boolean} [row.additionalFee] - Whether there's an additional fee
 * @param {boolean} [row.languageRequired] - Whether language is required
 * @param {boolean} [row.mathRequired] - Whether math is required
 * @param {string} [row.firstMathCourseRequiredSupplementalText] - Supplemental text for first math course required
 * @param {string} [row.mathIntensityDescription] - Math intensity description
 * @param {Object} [row.firstMathCourseRequired] - First math course required object
 * @param {string} [row.marketingText] - Marketing text
 * @param {string} [row.academicOfficeLocation] - Academic office location
 * @param {string} [row.changeMajorRequirementsText] - Change major requirements text
 * @param {string} [row.careerOpportunities] - Career opportunities text
 * @param {string} [row.globalExperienceText] - Global experience text
 * @param {Array<Object>} [row.owners] - Array of owner objects
 * @param {Object} [row.applicationDeadlines] - Application deadlines object
 * @param {boolean} [row.activeInDegreeSearch] - Whether active in degree search
 * @param {string} [row.customText] - Custom text
 * @param {string} [row.stemOptText] - STEM OPT text
 * @param {Array<Object>} [row.subplans] - Array of subplan objects
 * @param {Array<Object>} [row.majorMapSubplans] - Array of major map subplan objects
 * @returns {Object} Service object with methods to access degree data properties
 */
function degreeDataPropResolverService(row = {}) {
  return {
    getMajorDesc: () => row["acadPlanMarketingDescription"],
    getInstitution: () => "ASU00",
    getAcadPlan: () => row["acadPlanCode"],
    /** @returns {string} */
    getDegreeSearchUrl: () => {
      const degreeType = row["degreeType"];
      const planCode = row["acadPlanCode"];

      if (!planCode || !degreeType) return "";

      const programTypeMap = {
        UG:   "bachelors",
        GR:   "masters-phd",
        UGCM: "minors",
      };

      const programTypePath = programTypeMap[degreeType];

      if (!programTypePath) return "";

      return `https://degrees.apps.asu.edu/${programTypePath}/major/ASU00/${planCode}`;
    },
    getDegree: () => {
      // Minors
      let degree =
        row["degreeDescriptionShort"] || row["acadPlanTypeDescription"];
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
      const { majorMapGeneral } = row;
      const mostRecentMajorMap = majorMapGeneral?.find(
        obj => obj.defaultFlag === true
      );
      return mostRecentMajorMap?.url || "";
    },
    isUndergradProgram: () => isUndergradProgram(row),
    isPhdOrMasters: () => row["degreeDescriptionShort"] !== "CERT", // Only called in functions that already checked if its a grad program
    isGradProgram: () => row["degreeType"] === "GR", // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () =>
      row["degreeType"] === "UGCM" ||
      (row["degreeType"] === "GR" &&
        row["acadPlanTypeDescription"] === "Certificate"),
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => (isUndergradProgram(row) ? "undergrad" : "graduate"),
    getDegreeDesc: () => row["degreeDescriptionLong"],
    getDegreeDescLong: () => row["degreeDescriptionText"],
    getFullDescription: () => row["fullDescription"],
    getCurriculumUrl: () => row["asuOnlineAcadPlanUrl"]?.trim(),
    getAdmissionsRequirementsText: () => row["admissionsRequirementsText"],
    getMinorCourseRequirements: () => row["minorCourseRequirements"],
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
        gradRequirement1 = row["degreeMajorMap"] || "";
      }

      /** @type {string} */
      const gradRequirement2 = row["degreeRequirements"] || "";
      return `${gradRequirement1}${gradRequirement2}`;
    },
    isOnline: () => row["asuOnlineAcadPlanUrl"], // Returns null if online url is not available
    // See getGeneralDegreeMajorMap for more info
    getOnlineMajorMapURL: () => {
      const onlineMajorMaps = row["majorMapOnline"];
      // The required courses column will stay visible, with the graduate version of the degree
      // listing page having most of them blank since only some will have a requireed courses link.
      const mostRecentOnlineMajorMap = onlineMajorMaps?.find(
        obj => obj.defaultFlag === true
      );
      if (!mostRecentOnlineMajorMap)
        return onlineMajorMaps?.[onlineMajorMaps.length - 1]?.url;
      return mostRecentOnlineMajorMap?.url || "";
    },
    hasCareerData: () => row["careerData"]?.length,
    getCareerData: () => row["careerData"] || [],
    /** @return {Object[]} */
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
    getPhone: () => row["phoneNumber"]?.replace("/", "-"),
    /** @return {string} */
    getProfessionalLicensureText() {
      const standardText = row["professionalLicensureStandardText"] || "";
      const additionalText = row["professionalLicensureAdditionalText"] || "";
      const combinedText = `${standardText}${additionalText}`;

      try {
        const doc = new DOMParser().parseFromString(combinedText, "text/html");
        if (doc.querySelector("parsererror")) {
          return "";
        }
      } catch (error) {
        console.error("Error parsing HTML: ", error.message);
        return "";
      }
      return combinedText;
    },
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
    hasMathReqFlag: () => row["mathRequired"],
    getOtherMathReqCourse: () => row["firstMathCourseRequiredSupplementalText"],
    getMathIntensity: () => row["mathIntensityDescription"],
    /** @return {string} */
    getMinMathReq: () => {
      const mathInfoObject = row["firstMathCourseRequired"];
      if (!mathInfoObject) return "";
      const { subject, catalogNumber, description } = mathInfoObject;
      return `${subject} ${catalogNumber} - ${description}`;
    },
    /** @return {string} */
    getMarketText: () => row["marketingText"]?.trim(),
    /** @return {string} */
    getAsuOfficeLoc: () => row["academicOfficeLocation"] || "",
    /** @return {string} */
    getCampusWue: () => {
      const campusList = row["campusesOffered"];
      if (!campusList) return null;
      return campusList?.find(campus => campus.wue === true)?.campusCode;
    },
    getConcurrentDegreeMajorMaps: () =>
      fetchAcademicPlans(row["concurrentAcadPlanCodes"]),
    getChangeMajor: () => row["changeMajorRequirementsText"],
    getAsuCareerOpportunity: () => row["careerOpportunities"],
    getGlobalExp: () => row["globalExperienceText"]?.trim(),
    /** @return {string} */
    getCollegeAcadOrg: () => getMajorityOwner(row)?.collegeAcadOrg,
    /** @return {Array} */
    getCollegeAcadOrgJoint: () => {
      const { owners } = row;
      if (!owners) return [];
      const allCollegeAcadOrgs = owners.map(owner => owner.collegeAcadOrg);
      return allCollegeAcadOrgs;
    },
    /** @return {string} */
    getDepartmentCode: () => getMajorityOwner(row)?.departmentAcadOrg,
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
      if (row["acadPlanTypeDescription"] === "Certificate")
        return "Certificate";

      return "Major";
    },
    getStemOptText: () => row["stemOptText"],
    hasStemOptText: () => {
      const text = row["stemOptText"];
      if (text && text !== "") {
        return "Yes";
      }
      return "No";
    },
    getSubPlnMajorMaps: () => {
      if (!row["subplans"] || !row["majorMapSubplans"]) return [];

      let subplans = [...row["subplans"]].filter(
        subplan => subplan.campusesOffered
      );
      const majorMapSubplans = [...row["majorMapSubplans"]];

      /**
       * Checks if a time period is current or future academic year
       * @param {string} timePeriod - Format: "2526" represents 2025-2026
       */
      const isValidTimePeriod = timePeriod => {
        if (!timePeriod || timePeriod.length !== 4) return false;
        const currentYear = new Date().getFullYear();
        const periodStartYear = parseInt(`20${timePeriod.substring(0, 2)}`, 10);
        return periodStartYear >= currentYear;
      };

      const removeSubplanByCode = (subplansArr, acadSubPlanCode) =>
        subplansArr.filter(sp => sp.acadSubPlanCode !== acadSubPlanCode);

      const hasSubplanWithCode = (subplansArr, acadSubPlanCode) =>
        subplansArr.some(sp => sp.acadSubPlanCode === acadSubPlanCode);

      const isAlreadyAdded = (majorMap, addedMaps) =>
        addedMaps.some(
          added => added.acadSubPlanCode === majorMap.acadSubPlanCode
        );

      const validSubplans = subplans.filter(
        sp => sp.timePeriod && isValidTimePeriod(sp.timePeriod)
      );

      const hasDefaultOrMatching = majorMapSubplans.some(
        map =>
          map.defaultFlag || hasSubplanWithCode(subplans, map.acadSubPlanCode)
      );

      const result = [];

      for (const majorMap of majorMapSubplans) {
        if (
          majorMap.timePeriod &&
          isValidTimePeriod(majorMap.timePeriod) &&
          !isAlreadyAdded(majorMap, result)
        ) {
          result.push(majorMap);
          subplans = removeSubplanByCode(subplans, majorMap.acadSubPlanCode);
        }
      }

      if (!hasDefaultOrMatching) {
        for (const majorMap of majorMapSubplans) {
          const shouldAdd =
            !isAlreadyAdded(majorMap, result) &&
            hasSubplanWithCode(validSubplans, majorMap.acadSubPlanCode);

          if (shouldAdd) {
            result.push(majorMap);
          }
        }
        return result;
      }

      for (let i = majorMapSubplans.length - 1; i >= 0; i -= 1) {
        if (subplans.length === 0) break;

        const majorMap = majorMapSubplans[i];

        if (isAlreadyAdded(majorMap, result)) continue;

        const shouldAddDefault = majorMap.defaultFlag;
        const shouldAddMatching = hasSubplanWithCode(
          subplans,
          majorMap.acadSubPlanCode
        );

        if (shouldAddDefault || shouldAddMatching) {
          subplans = removeSubplanByCode(subplans, majorMap.acadSubPlanCode);
          result.push(majorMap);
        }
      }

      return result;
    },
    getSubPln: () => row["subplans"],
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
  const getOnlineLocation = url => ({
    text: "Online",
    url,
  });

  const campusList = resolver.getCampusList().map(campus => campus.campusCode);
  if (campusList.length > 0) {
    locations.push(
      ...campusList.map(
        location =>
          (location === "ONLNE" &&
            getOnlineLocation(resolver.getCurriculumUrl())) ||
          findCampusDefinition(location, program) ||
          getDefaultLocation(location)
      )
    );
  }

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
  const validItemsInAnchorMenu = Object.values(anchorMenu).filter(
    key => key === true
  );
  const hasExternalAnchors = anchorMenu?.externalAnchors?.length > 0;
  const res = hasExternalAnchors || validItemsInAnchorMenu.length > 0;
  return res;
};

export {
  degreeDataPropResolverService,
  filterAnchorMenu,
  getCampusLocations,
  hasValidAnchorMenu,
};
