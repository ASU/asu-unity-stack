// ts-check

import { isAccelConcValid } from "../models";
import { degreeDataPropResolverService } from "./degree-data-prop-resolver-service";

/**
 * @typedef {import("../types/shared-local-types").DegreeDataPropResolver} PropResolver
 * @typedef {import("../types/shared-local-types").FiltersState} FiltersState
 */
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
    showInactivePrograms,
  },
}) {
  // ============================================================
  /** @param {PropResolver} resolver   */
  const isValidCollegeAcadOrg = resolver =>
    collegeAcadOrg
      ? resolver.getCollegeAcadOrg().includes(collegeAcadOrg)
      : true;
  // ============================================================
  /** @param {PropResolver} resolver   */
  const isValidDepartmentCode = resolver =>
    departmentCode
      ? resolver.getDepartmentCode().includes(departmentCode)
      : true;
  // ============================================================
  /** @param {PropResolver} resolver   */
  const isValidCampus = resolver =>
    locations.length > 0
      ? resolver
          .getCampusList()
          ?.some(campus => locations.some(loc => loc.value === campus))
      : true;
  // ============================================================
  /** @param {Object.<string, []>} row  */
  const isValidAcceleratedConcurrent = (row = {}) =>
    isAccelConcValid(acceleratedConcurrent)
      ? row[acceleratedConcurrent.value]?.length > 0
      : true;
  // ============================================================
  /** @param {PropResolver} resolver   */
  const isValidForKeyword = resolver =>
    keyword ? resolver.getDescrLongExtented()?.includes?.(keyword) : true;
  // ============================================================
  /** @param {PropResolver} resolver   */
  const isValidProgram = resolver =>
    JSON.parse(showInactivePrograms) === false
      ? resolver.isValidActiveProgram()
      : true;
  // ============================================================
  /** @param {Object.<string, any>} row  */
  const doFilter = row => {
    const resolver = degreeDataPropResolverService(row);

    return (
      isValidProgram(resolver) &&
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
