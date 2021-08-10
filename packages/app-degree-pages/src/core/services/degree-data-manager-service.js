// ts-check

import { isAccelConcValid } from "../models";
import { degreeDataPropResolverService } from "./degree-data-prop-resolver-service";

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
  },
}) {
  // ============================================================
  /** @param {Object.<string, []>} row  */
  const isValidCollegeAcadOrg = (row = {}) => {
    const resolver = degreeDataPropResolverService(row);

    return collegeAcadOrg
      ? resolver.getCollegeAcadOrg().includes(collegeAcadOrg)
      : true;
  };
  // ============================================================
  /** @param {Object.<string, []>} row  */
  const isValidDepartmentCode = (row = {}) => {
    const resolver = degreeDataPropResolverService(row);

    return departmentCode
      ? resolver.getDepartmentCode().includes(departmentCode)
      : true;
  };
  // ============================================================
  /** @param {Object.<string, []>} row  */
  const isValidCampus = (row = {}) => {
    const resolver = degreeDataPropResolverService(row);

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
  /** @param {Object.<string, any>} row  */
  const doFilter = row =>
    isValidCollegeAcadOrg(row) &&
    isValidDepartmentCode(row) &&
    isValidCampus(row) &&
    isValidAcceleratedConcurrent(row);

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
