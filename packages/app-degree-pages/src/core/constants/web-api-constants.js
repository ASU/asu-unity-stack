// @ts-check

const DOMAIN_URL = "https://degrees.apps.asu.edu";

/**
 * @type {import("../types/listing-page-types").ProgramListDataSource}
 */
const listingPageDefaultDataSource = {
  endpoint: "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plans",
  filter: "activeInDegreeSearch",
  init: "false",
  include: "*",
  degreeType: "UG",
};

/**
 * @type {import("../types/detail-page-types").ProgramDetailDataSource}
 */
const detailPageDefaultDataSource = {
  acadPlan: null,
  endpoint: "https://degrees.apps.asu.edu/t5/service",
  method: "findDegreeByAcadPlan",
  init: "false",
  fields:
    `graduateApplyDates,planDeadlines,AsuDegSrchFlg,AsuCustomText,Degree,` +
    `marketText,DescrlongExtns,concurrentDegreeMajorMaps,onlineMajorMapURL,` +
    `ChangeMajor,AsuCritTrackUrl,SubPlnMajorMaps,SubPln,` +
    // at a glance
    `Descr100,CollegeDescr100,CollegeUrl,` +
    `AsuOfficeLoc,CampusStringArray,campusWue,MinMathReq,MathIntensity,` +
    `degreeMajorMap,` +
    // Example Careers
    "careerData," +
    // flexible degree options
    `accelerateDegrees,accelerateDegreeMajorMaps,` +
    `concurrentDegrees,concurrentDegreeMajorMaps,` +
    // career opportunity
    `AsuCareerOpp,` +
    // program contact
    `DepartmentName,PlanUrl,EmailAddr,Phone,CollegeDescr100,` +
    // application requirement
    `admissionsRequirementsText,TransferAdmission,gradAdditionalRequirements,AdmissionsDegRequirements,` +
    `AdmissionsDegRequirements,` +
    // Global opportunity
    `globalExp,` +
    // attend online
    `CurriculumUrl,managedOnlineCampus,` +
    `planCatDescr`,
};

export {
  DOMAIN_URL,
  listingPageDefaultDataSource,
  detailPageDefaultDataSource,
};
