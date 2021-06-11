// @ts-check

import { fetchData } from "../utils/fetch-data";

const path = "https://webapp4.asu.edu/programs";
// const path = "/programs";

const DEGREE_SEARCH_URL =
  `https://degreesearch-proxy.apps.asu.edu/degreesearch` +
  `/?init=false` +
  `&method=findDegreeByFirstLetterMapArray` +
  `&fields=CollegeUrl,AsuCritTrackUrl,Degree,MinMathReq,DescrlongExtns,MathIntensity,AsuLangReqFlag,CampusStringArray,managedOnlineCampus,asuAcadpMrfText,Descr100,AsuProgramFee,additionalMathReqCourse,CollegeDescr100,AcadPlan,Institution,` +
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

/**
 *
 * @param {string} institutionCode
 * @param {string} acadPlanCode
 * @param {string} program
 * @param {string} cert
 * @param {string} searchOnline
 * @returns
 */
function majorInfoLink(
  institutionCode = "ASU00",
  acadPlanCode,
  program = "undergrad",
  cert = "false",
  searchOnline = "" // searchOnline
) {
  const url = `${path}/t5/majorinfo/${institutionCode}/${acadPlanCode}/${program}/${cert}`;
  return !searchOnline ? url : `${url}/searchOnline`;
}

function mapTooltipLink(location, program = "undergrad") {
  const path = "/programs";
  return `${path}/tooltipcampus?campus=${location}&amp;program=${program}`;
}

function mapTooltipSubPlanMapLink(acadPlanCode) {
  return `${path}/tooltipsubplanmajormap/listMajorMaps/ASU00/${acadPlanCode}`;
}
function accellerateDegreeLink(
  acadPlanCode,
  institutionCode = "ASU00",
  program = "undergrad",
  cert = "false"
) {
  return `${path}/t5/majorinfo/${institutionCode}/${acadPlanCode}/${program}/${cert}#accelerateDeg`;
}

function accellerateDegreeDynamicLink(
  acadPlanCode,
  institutionCode = "ASU00",
  program = "undergrad"
) {
  const path = "/programs";
  return `${path}/tooltipdynamic/accelerate/${acadPlanCode}/null/${institutionCode}/${program}`;
}

function requestInfoLink(acadPlanCode, progNameDesc, emailAddress) {
  // todo: find out where to put  this constant. or replace with field coming from API
  const requestinfourl = "https://requestinfo.asu.edu/request-info";
  // todo: find out field
  const prog = "UGHI";

  return (
    `${requestinfourl}` +
    `?prog=${prog}` +
    `&plan=${acadPlanCode}` +
    `&name=${progNameDesc}` +
    `&contact=${emailAddress}`
  );
}
function saveFav(
  institutionCode = "ASU00",
  acadPlanCode,
  program = "undergrad",
  cert = "false"
) {
  const url = `${path}/save?acadPlan=${institutionCode},${acadPlanCode}&program=${program}&cert=${cert}`;
  fetch(url).then();
}

// https://asudev.jira.com/wiki/spaces/eadvisor/pages/887324850/Apply%2BNow%2BButton%2Band%2BModal%2BDisplay%2BLogic
function applyNow() {
  // todo
}

export {
  getDegreePrograms,
  DEGREE_SEARCH_URL,
  majorInfoLink,
  mapTooltipLink,
  mapTooltipSubPlanMapLink,
  accellerateDegreeLink,
  accellerateDegreeDynamicLink,
  requestInfoLink,
  saveFav,
  applyNow,
};
