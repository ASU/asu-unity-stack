// @ts-check

/**
 * @type {import("../models/listing-page-types").AppDataSource}
 */
const listingPageDefaultDataSource = {
  endpoint: "https://degreesearch-proxy.apps.asu.edu/degreesearch/",
  method: "findAllDegrees",
  init: "false",
  fields:
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
 * @type {import("../models/listing-page-types").AppDataSource}
 */
const detailPageDefaultDataSource = {
  endpoint: "https://degreesearch-proxy.apps.asu.edu/degreesearch/",
  method: "findDegreeByAcadPlan",
  init: "false",
  fields:
    `marketText,DescrlongExtns,concurrentDegreeMajorMaps,onlineMajorMapURL,ChangeMajor,AsuCritTrackUrl,` +
    // at a glance
    `Descr100,CollegeDescr100,` +
    `AsuOfficeLoc,CampusStringArray,campusWue,MinMathReq,MathIntensity,` +
    // Example Careers
    "careerData," +
    // flexible degree options
    `accelerateDegrees,accelerateDegreeMajorMaps,` +
    `concurrentDegrees,concurrentDegreeMajorMaps,` +
    // career opportunity
    `AsuCareerOpp,` +
    // program contact
    `DepartmentName,EmailAddr,Phone,CollegeDescr100,` +
    // application requirement
    `DescrlongExtn5,gradAdditionalRequirements,TransferAdmission,` +
    `AdmissionsDegRequirements,` +
    // Global opportunity
    `globalExp,` +
    // attend online
    `CurriculumUrl,managedOnlineCampus,` +
    `planCatDescr`,
};

export { listingPageDefaultDataSource, detailPageDefaultDataSource };
