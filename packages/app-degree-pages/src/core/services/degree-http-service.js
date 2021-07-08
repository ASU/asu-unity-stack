/* eslint-disable no-shadow */
// @ts-check

import { progDetailSectionIds } from "../models";

//  TODO: this should handle the map tooltip
function mapTooltipLink() {
  // TODO: to be implemented
}

//  TODO: this should handle the subplan tooltip
function mapTooltipSubPlanMapLink() {
  // TODO: to be implemented
}

//  TODO: this should handle the accellerate / concurrent tooltip
function accellerateDegreeTooltipLink() {
  // TODO: to be implemented
}

//  TODO: this should handle the request info link
function requestInfoLink() {
  // TODO: to be implemented
}

// TODO: this should handle the save to favorite
function saveFav() {
  // TODO: to be implemented
}

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
  const res = parseMajorInfoLink(resolver, majorInfoUrl);
  return `${res}#${progDetailSectionIds.flexibleDegreeOptions.acceleratedId}`;
}

export {
  accellerateDegreeTooltipLink,
  mapTooltipLink,
  mapTooltipSubPlanMapLink,
  accellerateDegreeLink,
  requestInfoLink,
  parseMajorInfoLink,
  saveFav,
};
