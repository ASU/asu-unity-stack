// @ts-check
const programListFields =
  "Descr100,Institution,AcadPlan," +
  "Degree,DegreeDescr,DegreeDescrlong," +
  "concurrentDegreeMajorMaps,managedOnlineCampus,onlineMajorMapURL," +
  "AsuCritTrackUrl,AsuOfficeLoc,CampusStringArray,AcadPlan," +
  "accelerateDegrees,concurrentDegrees," +
  "CollegeDescr100,CollegeUrl,EmailAddr,DescrlongExtns,AsuProgramFee," +
  "AsuLangReqFlag,asuAcadpLrfText," +
  "asuMathReqFlag,additionalMathReqCourse,asuAcadpMrfText,MathIntensity,";

const programDetailFields =
  `marketText,DescrlongExtns,concurrentDegreeMajorMaps,onlineMajorMapURL,ChangeMajor,AsuCritTrackUrl,` +
  // at a glance
  `CollegeDescr100,` +
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
  `planCatDescr`;

export { programListFields, programDetailFields };
