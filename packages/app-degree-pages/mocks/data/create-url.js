// Descr100,Degree,CollegeUrlJoioint,CollegeUrl,CampusWueInfo:,CampusStringArray,managedOnlineCampus,concurrentDegreeMajorMaps,onlineMajorMapURL,AsuCritTrackUrl,DescrlongExtns,AsuProgramFee,AsuLangReqFlag,additionalMathReqCourse,MinMathReq,MathIntensity,asuAcadpMrfText,
// https://degreesearch-proxy.apps.asu.edu/degreesearch/?init=false&method=findDegreeByFirstLetterMapArray&fields=Descr100,Degree,CollegeUrlJoioint,CollegeUrl,CampusWueInfo:,CampusStringArray,managedOnlineCampus,concurrentDegreeMajorMaps,onlineMajorMapURL,AsuCritTrackUrl,DescrlongExtns,AsuProgramFee,AsuLangReqFlag,additionalMathReqCourse,MinMathReq,MathIntensity,asuAcadpMrfText,&program=undergrad&cert=false
const DEGREE_SEARCH_URL =
  `https://degreesearch-proxy.apps.asu.edu/degreesearch` +
  `/?init=false` +
  `&method=findDegreeByFirstLetterMapArray` +
  `&fields=` +
  `Descr100,CollegeDescr100,CollegeUrl,AsuCritTrackUrl,` +
  `Degree,DegreeDescr,DegreeDescrshort,DegreeDescrlong,` +
  `SubPlnMajorMapUrl,SubPlnMajorMaps,SubplnMajorMapSubplanCode,` +
  `MinMathReq,DescrlongExtns,MathIntensity,` +
  `AsuLangReqFlag,CampusStringArray,managedOnlineCampus,asuAcadpMrfText,` +
  `AsuProgramFee,additionalMathReqCourse,AcadPlan,Institution,` +
  `&program=undergrad` +
  `&cert=false`;

console.log(DEGREE_SEARCH_URL);
