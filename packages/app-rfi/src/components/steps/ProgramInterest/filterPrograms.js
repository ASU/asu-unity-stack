// Filter degree data based on form field value.
// Currently coded to match on array fields. Could make that optional.
export function filterDegrees({
  degreeData,
  degreeDataFieldName,
  degreeDataNestedFieldName,
  propFilter,
  propFilterName,
}) {
  const propFilterValue = propFilter[propFilterName];

  const nestedFieldNameKeys = degreeDataFieldName.split(".");
  const fieldName = nestedFieldNameKeys.shift();

  // If we have a form value for a field such as "Interest1",
  if (propFilterValue) {
    return degreeData.filter(degree => {
      const degreeFieldValue = degree[fieldName];
      // Check for array fields.
      if (Array.isArray(degreeFieldValue)) {
        // Filter degree data based on the form values for the matching field.
        return !!degreeFieldValue.find(degreeFieldValueItem => {
          return (
            degreeFieldValueItem === propFilterValue ||
            degreeFieldValueItem[degreeDataNestedFieldName] === propFilterValue
          );
        });
      }
      // Check for string fields.
      if (degreeFieldValue) {
        // Make a logical assertion on the string for our filter outcome.
        return degreeFieldValue === propFilterValue;
      }
      return true;
    });
  }
  // If not filtering, pass through.
  return degreeData;
}

// Filter degree data by department or college or actualCampus props if they
// exist.
export function filterDegreesByDeptOrCollegeOrCampus({ degreeData, ...props }) {
  // Progress return if most specific is found first.
  if (props.department) {
    // Filter with prop's props.department against data's DepartmentCode
    return filterDegrees({
      degreeData,
      degreeDataFieldName: "owners",
      degreeDataNestedFieldName: "departmentAcadOrg",
      propFilter: props,
      propFilterName: "department",
    });
  }
  if (props.college) {
    // Filter with prop's props.college against data's CollegeAcadOrg
    return filterDegrees({
      degreeData,
      degreeDataFieldName: "owners",
      degreeDataNestedFieldName: "collegeAcadOrg",
      propFilter: props,
      propFilterName: "college",
    });
  }
  if (props.actualCampus) {
    // Filter with prop's props.actualCampus against data's CampusStringArray
    return filterDegrees({
      degreeData,
      degreeDataFieldName: "campusesOffered",
      degreeDataNestedFieldName: "campusCode",
      propFilter: props,
      propFilterName: "actualCampus",
    });
  }

  // Passthrough.
  return degreeData;
}
