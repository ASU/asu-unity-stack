/**
 * @typedef {import("./datasource-helper").AcadPlan} AcadPlan
 */

// The logic to filter result based on Props passed to this application
// Data will only be filtered by the first Prop in this order
// department, college, actualCampus
// In order to keep this logic clear and in one place they are kept together
export const filterDataByProps = {
  /**
   * @param {string} parameter
   * @param {string} [filterByDepartmentCode]
   * @param {string} [filterByCollegeCode]
   * @returns {string}
   */
  prepareServiceUrl: (
    parameter,
    filterByDepartmentCode,
    filterByCollegeCode
  ) => {
    let result = parameter;
    if (filterByDepartmentCode) {
      // add department parameter first
      result += `&ownedByDepartment=${filterByDepartmentCode}`;
    } else if (filterByCollegeCode) {
      // add college parameter if no department parameter
      result += `&ownedByCollege=${filterByCollegeCode}`;
    }
    return result;
  },
  /**
   *
   * @param {AcadPlan[]} degreeData
   * @param {string} [filterByDepartmentCode]
   * @param {string} [filterByCollegeCode]
   * @param {string} [filterByCampusCode]
   * @returns {AcadPlan[]}
   */
  filterData: (
    degreeData,
    filterByDepartmentCode,
    filterByCollegeCode,
    filterByCampusCode
  ) => {
    if (filterByDepartmentCode || filterByCollegeCode) {
      // data was already filtered with api call
      return degreeData;
    }
    if (filterByCampusCode) {
      const result = degreeData.filter(
        ({ campusCodes }) =>
          Array.isArray(campusCodes) && campusCodes.includes(filterByCampusCode)
      );
      // return original set if filtered result is empty
      return result.length > 0 ? result : degreeData;
    }
    // Passthrough
    return degreeData;
  },
};
