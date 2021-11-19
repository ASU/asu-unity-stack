// @ts-check

const DOMAIN_URL = "https://webapp4.asu.edu";

/**
 * @type {import("../types/listing-page-types").ProgramListDataSource}
 */
const listingPageDefaultDataSource = {
  endpoint: "https://degreesearch-proxy.apps.asu.edu/degreesearch/",
  method: "findAllDegrees",
  init: "false",
  fields:
    `graduateApplyDates,planDeadlines,AsuDegSrchFlg,` +
    "CollegeAcadOrg,DepartmentCode," +
    "Descr100,Institution,AcadPlan," +
    "Degree,DegreeDescr,DegreeDescrlong," +
    "concurrentDegreeMajorMaps,managedOnlineCampus,onlineMajorMapURL," +
    "AsuCritTrackUrl,AsuOfficeLoc,CampusStringArray,AcadPlan," +
    "accelerateDegrees,concurrentDegrees," +
    "CollegeDescr100,CollegeUrl,EmailAddr,DescrlongExtns,AsuProgramFee," +
    "AsuLangReqFlag,asuAcadpLrfText," +
    "asuMathReqFlag,additionalMathReqCourse,asuAcadpMrfText,MathIntensity,",
};

/**
 * @type {import("../types/detail-page-types").ProgramDetailDataSource}
 */
const detailPageDefaultDataSource = {
  acadPlan: null,
  endpoint: "https://degreesearch-proxy.apps.asu.edu/degreesearch/",
  method: "findDegreeByAcadPlan",
  init: "false",
  fields:
    `graduateApplyDates,planDeadlines,AsuDegSrchFlg,AsuCustomText,Degree,` +
    `marketText,DescrlongExtns,concurrentDegreeMajorMaps,onlineMajorMapURL,` +
    `ChangeMajor,AsuCritTrackUrl,` +
    // at a glance
    `Descr100,CollegeDescr100,CollegeUrl,` +
    `AsuOfficeLoc,CampusStringArray,campusWue,MinMathReq,MathIntensity,` +
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
    `DescrlongExtn5,TransferAdmission,gradAdditionalRequirements,AdmissionsDegRequirements,` +
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
