/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
// @ts-check

// ================================================================================================
// START LEGACY CODE
// ================================================================================================
// Here that businnes logic used in the old version of the Program listing page
// This code is kept as reference till all the feature will be implemented
// for the final release this must be change to a relative path
const path = "/programs";

//  TODO: this contains the old page request
function mapTooltipLink(location, program = "undergrad") {
  return `${path}/tooltipcampus?campus=${location}&amp;program=${program}`;
}

//  TODO: this contains the old page request
function mapTooltipSubPlanMapLink(acadPlanCode) {
  return `${path}/tooltipsubplanmajormap/listMajorMaps/ASU00/${acadPlanCode}`;
}

function accellerateDegreeTooltipLink(
  acadPlanCode,
  institutionCode = "ASU00",
  program = "undergrad"
) {
  const path = "/programs";
  return `${path}/tooltipdynamic/accelerate/${acadPlanCode}/null/${institutionCode}/${program}`;
}

//  TODO: this contains the old page request
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

// TODO: this contains the old page request
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

//* * TODO: keep as reference
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

// /** TODO: keep as reference
// function Legacy_accellerateDegreeLink(
//   acadPlanCode,
//   institutionCode = "ASU00",
//   program = "undergrad",
//   cert = "false"
// ) {
//   return `${path}/t5/majorinfo/${institutionCode}/${acadPlanCode}/${program}/${cert}#accelerateDeg`;
// }
// ================================================================================================
// END LEGACY CODE
// ================================================================================================
