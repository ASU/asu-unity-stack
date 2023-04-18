// Descr100,Degree,CollegeUrlJoioint,CollegeUrl,CampusWueInfo:,CampusStringArray,managedOnlineCampus,concurrentDegreeMajorMaps,onlineMajorMapURL,AsuCritTrackUrl,DescrlongExtns,AsuProgramFee,AsuLangReqFlag,additionalMathReqCourse,MinMathReq,MathIntensity,asuAcadpMrfText,
// https://degrees.apps.asu.edu/t5/service?init=false&method=findDegreeByFirstLetterMapArray&fields=Descr100,Degree,CollegeUrlJoioint,CollegeUrl,CampusWueInfo:,CampusStringArray,managedOnlineCampus,concurrentDegreeMajorMaps,onlineMajorMapURL,AsuCritTrackUrl,DescrlongExtns,AsuProgramFee,AsuLangReqFlag,additionalMathReqCourse,MinMathReq,MathIntensity,asuAcadpMrfText,&program=undergrad&cert=false
const DEGREE_SEARCH_URL =
  `https://degrees.apps.asu.edu/t5/service` +
  `/?init=false` +
  `&method=findDegreeByFirstLetterMapArray` +
  `&fields=` +
  `Descr100,Institution,AcadPlan,Degree,DegreeDescr,DegreeDescrlong,` +
  `concurrentDegreeMajorMaps,managedOnlineCampus,onlineMajorMapURL,` +
  `AsuCritTrackUrl,CampusStringArray,AcadPlan,` +
  `accelerateDegrees,concurrentDegrees,` +
  `CollegeDescr100,CollegeUrl,EmailAddr,DescrlongExtns,AsuProgramFee,` +
  `AsuLangReqFlag,asuAcadpLrfText,` +
  `asuMathReqFlag,additionalMathReqCourse,asuAcadpMrfText,MathIntensity,` +
  `&program=undergrad` +
  `&cert=false`;

console.log(DEGREE_SEARCH_URL);
