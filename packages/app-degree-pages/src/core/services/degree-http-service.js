// @ts-check

import { fetchData } from "../utils/fetch-data";

// Descr100,Degree,CollegeUrlJoioint,CollegeUrl,CampusWueInfo:,CampusStringArray,managedOnlineCampus,concurrentDegreeMajorMaps,onlineMajorMapURL,AsuCritTrackUrl,DescrlongExtns,AsuProgramFee,AsuLangReqFlag,additionalMathReqCourse,MinMathReq,MathIntensity,asuAcadpMrfText,
// https://degreesearch-proxy.apps.asu.edu/degreesearch/?init=false&method=findDegreeByFirstLetterMapArray&fields=Descr100,Degree,CollegeUrlJoioint,CollegeUrl,CampusWueInfo:,CampusStringArray,managedOnlineCampus,concurrentDegreeMajorMaps,onlineMajorMapURL,AsuCritTrackUrl,DescrlongExtns,AsuProgramFee,AsuLangReqFlag,additionalMathReqCourse,MinMathReq,MathIntensity,asuAcadpMrfText,&program=undergrad&cert=false
const DEGREE_SEARCH_URL =
  `https://degreesearch-proxy.apps.asu.edu/degreesearch` +
  `/?init=false` +
  `&method=findDegreeByFirstLetterMapArray` +
  `&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,CampusStringArray,SubPln,planCatDescr` +
  `&program=undergrad` +
  `&cert=false`;

/**
 *
 * @param {string} url
 * @returns {Promise}
 */
async function getDegreePrograms(url) {
  return fetchData(url);
}

export { getDegreePrograms, DEGREE_SEARCH_URL };
