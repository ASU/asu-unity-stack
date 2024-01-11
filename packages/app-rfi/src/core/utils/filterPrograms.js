// @ts-nocheck

/**
 * @typedef {Object} FilterDegreesObject - creates a new type named 'SpecialType'
 * @prop {import("./datasource-helper").AcadPlan[]} degreeData
 * @prop {string} degreeDataFieldName - An optional param (Google Closure syntax)
 * @prop {string} propFilter - An optional param with a default value
 * @prop {string} propFilterName - An optional param with a default value
 */

// Filter degree data based on form field value.
// Currently coded to match on array fields. Could make that optional.

// Parameters may be declared in a variety of syntactic forms
/**

 * @param {FilterDegreesObject} props
 * @returns {import("./datasource-helper").AcadPlan[]} This is the result
 */
export function filterDegrees({
  degreeData,
  degreeDataFieldName,
  propFilter,
  propFilterName,
}) {
  // If we have a form value for a field such as "Interest1",
  if (propFilter[propFilterName]) {
    return degreeData.filter(degree => {
      // Check for array fields.
      if (Array.isArray(degree[degreeDataFieldName])) {
        // Filter degree data based on the form values for the matching field.
        return degree[degreeDataFieldName].includes(propFilter[propFilterName]);
      }
      // Check for string fields.
      if (degree[degreeDataFieldName]) {
        // Make a logical assertion on the string for our filter outcome.
        return degree[degreeDataFieldName] === propFilter[propFilterName];
      }
      // If undefined, pass through.
      return true;
    });
  }
  // If not filtering, pass through.
  return degreeData;
}

// Filter degree data by department or college or actualCampus props if they
// exist.

/**
 * @typedef {Object} FilterDegreesByScopeObject - creates a new type named 'SpecialType'
 * @prop {import("../../../core/utils/datasource-helper").AcadPlan[]} degreeData
 * @prop {string} [department] ./datasource-helpergle Closure syntax)
 * @prop {string} [college] - An optional param with a default value
 * @prop {string} [actualCampus] - An optional param with a default value
 * @prop {string} [Interest1] - An optional param with a default value
 */

/**

 * @param {FilterDegreesByScopeObject} props
 * @returns {import("../../../core/utils/datasource-helper").AcadPlan[]} This is the result
 */
export function filterDegreesByScope({ degreeData, ...props }) {
  // Progress return if most specific is found first.
  if (props.department) {
    // POTLUCK api handles this and ONLINE api does not use
    // Code is only supporting Deprecated DEGREE search

    // Filter with prop's props.department against data's departmentCode
    return filterDegrees({
      degreeData,
      degreeDataFieldName: "departmentCode",
      propFilter: props,
      propFilterName: "department",
    });
  }
  if (props.college) {
    // POTLUCK api handles this and ONLINE api does not use
    // Code is only supporting Deprecated DEGREE search

    // Filter with prop's props.college against data's collegeCode
    return filterDegrees({
      degreeData,
      degreeDataFieldName: "collegeCode",
      propFilter: props,
      propFilterName: "college",
    });
  }
  if (props.actualCampus) {
    // Filter with prop's props.actualCampus against data's campuses
    return filterDegrees({
      degreeData,
      degreeDataFieldName: "campuses",
      propFilter: props,
      propFilterName: "actualCampus",
    });
  }
  if (props.Interest1) {
    // Filter with prop's props.Interest1 against data's planCategories
    return filterDegrees({
      degreeData,
      degreeDataFieldName: "planCategories",
      propFilter: props,
      propFilterName: "Interest1",
    });
  }

  // Passthrough.
  return degreeData;
}
