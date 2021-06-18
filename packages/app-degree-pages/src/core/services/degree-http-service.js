/* eslint-disable no-shadow */
// @ts-check

import { fetchData } from "../utils/fetch-data";

// for the final release this must be change to a relative path
// likely would be `const path = "/programs";`
const path = "https://webapp4.asu.edu/programs";
// const path = "/programs";

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

function accellerateDegreeTooltipLink(
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

function applyNow() {
  // TODO: find the url
}

export {
  getDegreePrograms,
  majorInfoLink,
  mapTooltipLink,
  mapTooltipSubPlanMapLink,
  accellerateDegreeLink,
  accellerateDegreeTooltipLink,
  requestInfoLink,
  saveFav,
  applyNow,
};
