// ts-check

import { isAccelConcValid } from "../models";
import { degreeDataPropResolverService } from "./degree-data-prop-resolver-service";

/** @typedef {import("../models/shared-types").DegreeDataPropResolver} PropResolver */
/**
 *
 * @param {{
 * programs: ProgramListItem[]
 * filters: FiltersState
 * }} props
 * @returns
 */
function filterData({
  programs = [],
  filters: {
    collegeAcadOrg,
    departmentCode,
    acceleratedConcurrent,
    locations = [],
    keyword,
  },
}) {
  // ============================================================
  /** @param {PropResolver} resolver   */
  const isValidCollegeAcadOrg = resolver => {
    return collegeAcadOrg
      ? resolver.getCollegeAcadOrg().includes(collegeAcadOrg)
      : true;
  };
  // ============================================================
  /** @param {PropResolver} resolver   */
  const isValidDepartmentCode = resolver => {
    return departmentCode
      ? resolver.getDepartmentCode().includes(departmentCode)
      : true;
  };
  // ============================================================
  /** @param {PropResolver} resolver   */
  const isValidCampus = resolver => {
    return locations.length > 0
      ? resolver
          .getCampusList()
          ?.some(campus => locations.some(loc => loc.value === campus))
      : true;
  };
  // ============================================================
  /** @param {Object.<string, []>} row  */
  const isValidAcceleratedConcurrent = (row = {}) =>
    isAccelConcValid(acceleratedConcurrent)
      ? row[acceleratedConcurrent.value]?.length > 0
      : true;
  // ============================================================
  /** @param {PropResolver} resolver   */
  const isValidForKeyword = resolver => {
    return keyword
      ? resolver.getDescrLongExtented()?.includes?.(keyword)
      : true;
  };
  // ============================================================
  /** @param {Object.<string, any>} row  */
  const doFilter = row => {
    const resolver = degreeDataPropResolverService(row);
    return (
      resolver.isValidActiveProgram() &&
      isValidCollegeAcadOrg(resolver) &&
      isValidDepartmentCode(resolver) &&
      isValidCampus(resolver) &&
      isValidAcceleratedConcurrent(row) &&
      isValidForKeyword(resolver)
    );
  };

  return programs.filter(doFilter);
}

/**
 *
 * @param {ProgramListItem []} programs
 * @returns
 */
const sortPrograms = programs => {
  const sortedPrograms = programs.sort((p1, p2) =>
    p1.Descr100.localeCompare(p2.Descr100)
  );

  return sortedPrograms;
};

export { filterData, sortPrograms };
