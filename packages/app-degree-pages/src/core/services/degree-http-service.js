/* eslint-disable no-shadow */
// @ts-check

import { progDetailSectionIds } from "../models";
import { fetchData } from "../utils/fetch-data";

// for the final release this must be change to a relative path
// likely would be `const path = "/programs";`
// const path = "https://webapp4.asu.edu/programs";
const path = "/programs";

/**
 *
 * @param {string} url
 * @returns {Promise}
 */
async function getDegreePrograms(url) {
  return fetchData(url);
}

// /** TODO: keep as reference
//  *
//  * @param {string} institutionCode
//  * @param {string} acadPlanCode
//  * @param {string} program
//  * @param {string} cert
//  * @param {string} searchOnline
//  * @returns
//  */
// function LEGACY_majorInfoLink(
//   institutionCode = "ASU00",
//   acadPlanCode,
//   program = "undergrad",
//   cert = "false",
//   searchOnline = "" // searchOnline
// ) {
//   const url = `${path}/t5/majorinfo/${institutionCode}/${acadPlanCode}/${program}/${cert}`;
//   return !searchOnline ? url : `${url}/searchOnline`;
// }

/**
 *
 * @param {import("../models/shared-types").DegreeDataPropResolver} resolver
 * @param {string} majorInfoUrl
 */
function parseMajorInfoLink(resolver, majorInfoUrl) {
  let res = majorInfoUrl || "";

  res = res
    .replaceAll("{INSTITUTION_CODE}", resolver.getInstitution())
    .replaceAll("{ACAD_PLAN_CODE}", resolver.getAcadPlan());

  return res;
}

/**
 *
 * @param {import("../models/shared-types").DegreeDataPropResolver} resolver
 * @param {string} majorInfoUrl
 */
function accellerateDegreeLink(resolver, majorInfoUrl) {
  let res = parseMajorInfoLink(resolver, majorInfoUrl);
  return res + "#" + progDetailSectionIds.flexibleDegreeOptions.acceleratedId;
}

function mapTooltipLink(location, program = "undergrad") {
  return `${path}/tooltipcampus?campus=${location}&amp;program=${program}`;
}

function mapTooltipSubPlanMapLink(acadPlanCode) {
  return `${path}/tooltipsubplanmajormap/listMajorMaps/ASU00/${acadPlanCode}`;
}

// /** TODO: keep as reference
// function Legacy_accellerateDegreeLink(
//   acadPlanCode,
//   institutionCode = "ASU00",
//   program = "undergrad",
//   cert = "false"
// ) {
//   return `${path}/t5/majorinfo/${institutionCode}/${acadPlanCode}/${program}/${cert}#accelerateDeg`;
// }

function accellerateDegreeTooltipLink(
  acadPlanCode,
  institutionCode = "ASU00",
  program = "undergrad"
) {
  const path = "/programs";
  return `${path}/tooltipdynamic/accelerate/${acadPlanCode}/null/${institutionCode}/${program}`;
}

//  TODO: this contains the old page request info
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

// TODO: this should handle the save to favorite
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
  accellerateDegreeTooltipLink,
  applyNow,
  getDegreePrograms,
  mapTooltipLink,
  mapTooltipSubPlanMapLink,
  accellerateDegreeLink,
  requestInfoLink,
  parseMajorInfoLink,
  saveFav,
};
