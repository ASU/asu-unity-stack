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
    blacklistAcadPlans,
  },
}) {
  // See WS2-1391 for more details on why we use collegeAcadOrg
  const filterByCollegeAcadOrg = resolver =>
    !collegeAcadOrg ||
    resolver.getCollegeAcadOrgJoint().includes(collegeAcadOrg);

  const filterByDepartmentCode = resolver =>
    !departmentCode || resolver.getDepartmentCode().includes(departmentCode);

  const filterByCampus = resolver =>
    !locations.length ||
    resolver
      .getCampusList()
      ?.some(campus => locations.some(loc => loc.value === campus.campusCode));

  const filterByAcceleratedConcurrent = (row = {}) =>
    !isAccelConcValid(acceleratedConcurrent) ||
    row[acceleratedConcurrent.value]?.length > 0;

  const filterByKeyword = resolver =>
    !keyword || resolver.getFullDescription()?.includes(keyword);

  const filterByActiveProgram = resolver =>
    JSON.parse(showInactivePrograms) || resolver.isValidActiveProgram();

  const filterByBlacklist = resolver =>
    !blacklistAcadPlans?.includes(resolver.getAcadPlan());

  const applyFilters = row => {
    const resolver = degreeDataPropResolverService(row);

    return (
      filterByCollegeAcadOrg(resolver) &&
      filterByDepartmentCode(resolver) &&
      filterByCampus(resolver) &&
      filterByAcceleratedConcurrent(row) &&
      filterByKeyword(resolver) &&
      filterByActiveProgram(resolver) &&
      filterByBlacklist(resolver)
    );
  };

  return programs.filter(applyFilters);
}

/**
 *
 * @param {ProgramListItem []} programs
 * @returns
 */
const sortPrograms = programs => {
  const sortedPrograms = programs.sort((p1, p2) =>
    p1.acadPlanMarketingDescription.localeCompare(
      p2.acadPlanMarketingDescription
    )
  );

  return sortedPrograms;
};

export { filterData, sortPrograms };
