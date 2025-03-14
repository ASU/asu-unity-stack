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
    blacklistAcadPlans,
    program,
    showCerts,
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

  const filterByKeywordTitle = (resolver, searchTerm) => {
    if (!searchTerm) return true;
    const regex = new RegExp(searchTerm, "i");
    const title = regex.test(resolver.getMajorDesc());
    if (title){
      return true;
    }
    else {
      return false;
    }
  };

  const filterByKeywordDescription = (resolver, searchTerm) => {
    if (!searchTerm) return true;
    const regex = new RegExp(searchTerm, "i");
    const description = regex.test(resolver.getFullDescription());
    if (description){
      return true;
    }
    else {
      return false;
    }
  };

  const filterByBlacklist = resolver =>
    !blacklistAcadPlans?.includes(resolver.getAcadPlan());

  /**
   * Filters graduate certificates based on the program type and whether certificates should be shown.
   */
  const filterGraduateCerts = resolver => {
    // If the program is undergraduate, always include it.
    if (program === "undergrad") return true;

    // If showing certificates is enabled and the program is graduate,
    // include it only if it's a minor or certificate.
    if (showCerts === "true" && program === "graduate") {
      return resolver.isMinorOrCertificate();
    }

    // If the program is not undergraduate and showing certificates is not enabled
    // include it only if it's a PhD or Masters. This also includes doctorate programs.
    return resolver.isPhdOrMasters();
  };

  const applyFilters = row => {
    const resolver = degreeDataPropResolverService(row);

    return (
      filterByCollegeAcadOrg(resolver) &&
      filterByDepartmentCode(resolver) &&
      filterByCampus(resolver) &&
      filterByAcceleratedConcurrent(row) &&
      filterByBlacklist(resolver) &&
      filterGraduateCerts(resolver)
    );
  };

  let filteredByTitle = [];
  let filteredByDescription = [];

  let newPrograms = programs.filter(degree => {
    const resolver = degreeDataPropResolverService(degree);

    if(filterByKeywordTitle(resolver, keyword)) {
      if (applyFilters(degree)) {
        filteredByTitle.push(degree);
      }
      return false;
    }

    if(filterByKeywordDescription(resolver, keyword)) {
      if (applyFilters(degree)) {
        filteredByDescription.push(degree);
      }
      return false;
    }
  });

  return filteredByTitle.concat(filteredByDescription);
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
