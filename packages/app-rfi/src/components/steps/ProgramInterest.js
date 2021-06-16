/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
// @ts-check
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { RfiSelect } from "../controls";

// Helpers

// Filter degree data based on form field value.
// Currently coded to match on array fields. Could make that optional.
function filterDegrees(
  degreeData,
  degreeDataFieldName,
  filterValue,
  filterValueName
) {
  // If we have a form value for a field such as "Interest1",
  if (filterValue[filterValueName]) {
    return degreeData.filter(degree => {
      // Check for array fields.
      if (Array.isArray(degree[degreeDataFieldName])) {
        // Filter degree data based on the form values for the matching field.
        return degree[degreeDataFieldName].includes(
          filterValue[filterValueName]
        );
      }
      // Check for string fields.
      if (degree[degreeDataFieldName]) {
        // Make a logical assertion on the string for our filter outcome.
        return degree[degreeDataFieldName] === filterValue[filterValueName];
      }
      return true;
    });
  }
  // If not filtering, pass through.
  return degreeData;
}

// Filter degree data by Department or College props if they exist.
function filterDegreesByDeptOrCollege(degreeData, props) {
  // Progress return if most specific is found first.
  if (props.Department) {
    // Filter with prop's props.Department against data's DepartmentCode
    return filterDegrees(degreeData, "DepartmentCode", props, "Department");
  }
  if (props.College) {
    // Filter with prop's props.College against data's CollegeAcadOrg
    return filterDegrees(degreeData, "CollegeAcadOrg", props, "College");
  }
  // Passthrough.
  return degreeData;
}

// Options

// Fetch degree data from our CF reverse proxy of Degree Search REST API.
// Returns the full degree dataset for the given program (undergrad | graduate).
// We do filtering in useEffect()s to manage filtering logic for our various
// field options.
async function fetchDegreesData(Campus, CareerAndStudentType) {
  // fetch(`https://webapp4.asu.edu/programs/t5/service?init=false&method=findDegreeByFirstLetterMapArray&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,CampusStringArray,SubPln,planCatDescr&program=undergrad&cert=false`)

  let serviceUrl;
  let program;

  // ASUOnline API
  if (Campus === "ONLNE") {
    program =
      CareerAndStudentType === "Readmission" ? "graduate" : "undergraduate";
    serviceUrl = `https://asuonline.asu.edu/lead-submissions-v3.3/programs?category=${program}`;
    return (
      fetch(serviceUrl, {
        headers: {
          // eslint-disable-next-line prettier/prettier
          Accept: "application/json",
        },
      })
        // Handle as text first due to encoding issues.
        .then(response => response.json())
        .then(data => {
          return data;
        })
        .catch(error => new Error(error))
    );
  }

  // Degree Search REST API
  program = CareerAndStudentType === "Readmission" ? "graduate" : "undergrad";
  serviceUrl = `https://degreesearch-proxy.apps.asu.edu/degreesearch/?init=false&method=findAllDegrees&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,AcadProg,planCatDescr,CampusStringArray&program=${program}&cert=false`;

  return fetch(serviceUrl)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => new Error(error));
}

// Fetch a single degree record by the acadPlan (aka Program of Interest, aka
// Interest2) from DS REST API. Results include ONLNE results, so haven't
// implemented dual logic for ASUOnline. Doesn't seem to be required by the
// use cases, either.
async function fetchDegreeByAcadPlan(acadPlan) {
  // TODO Confirm we don't need to add support for ASUOnline lookup?
  // serviceUrl = `https://asuonline.asu.edu/lead-submissions-v3.3/programs?plancode[]=${acadPlan}`;

  const serviceUrl = `https://degreesearch-proxy.apps.asu.edu/degreesearch/?init=false&method=findDegreeByAcadPlan&acadPlan=${acadPlan}&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,AcadProg,planCatDescr,CampusStringArray&cert=false`;
  return fetch(serviceUrl)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => new Error(error));
}

// Options

const campusOptions = [
  {
    value: "GROUND",
    label: "I plan to take some/all of my classes on campus",
  },
  {
    value: "ONLNE",
    label: "I plan to study 100% online through ASU Online",
  },
  {
    value: "NOPREF",
    label: "I am not sure",
  },
];

const studentTypeOptionsDefault = [
  { value: "First Time Freshman", label: "First-year undergraduate" },
  { value: "Transfer", label: "Transferring undergraduate" },
  {
    value: "Readmission",
    label: "Graduate (Masters, PhD, EdD, DNP, etc.)",
  },
];

// Component

const ProgramInterest = props => {
  const [degreeData, setDegreeData] = useState([]);
  const [studentTypeOptions, setStudentTypeOptions] = useState(
    studentTypeOptionsDefault
  );
  const [areaInterestOptions, setAreaInterestOptions] = useState([
    {
      value: "",
      label: "Load failed. Please try again in 5 minutes.",
    },
  ]);
  const [programInterestOptions, setProgramInterestOptions] = useState([
    {
      value: "",
      label: "Load failed. Please try again in 5 minutes.",
    },
  ]);
  const [selectKey, setSelectKey] = useState(0);

  // Surface values from Formik context
  const { values } = useFormikContext();

  // Check if degree data has loaded.
  const degreeDataIsLoaded = () => {
    if (typeof degreeData !== "object") {
      return false;
    }
    return degreeData.length;
  };

  // FETCH master degree data from Degree Search REST API.
  useEffect(() => {
    // TODO Possibly: implement sessionStorage, see pg 159 in Learning React
    // HOLD on using sessionStorage due to limiting complexity while getting
    // basic switching/fetching behaviors in place.
    // Alternately, move to using react-query library.

    // Fetch master of degree data.

    fetchDegreesData(values.Campus, values.CareerAndStudentType).then(data => {
      if (values.Campus === "ONLNE") {
        // ASUOnline data
        // Already sorted alpha by service, for us.
        setDegreeData(data);
      } else {
        // Degree Search data
        // Sort alpha on degree name.
        data.programs.sort((a, b) => (a.Descr100 > b.Descr100 ? 1 : -1));
        setDegreeData(data.programs);
      }
    });
  }, [values.Campus, values.CareerAndStudentType]); // Re-fetch if these change.

  // Campus and CareerAndStudentType
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }
    // Setup Campus and CareerAndStudentType values, options and display if
    // the ProgramOfInterest prop is present - ie. rendering for a Degree Page.
    if (props.ProgramOfInterest) {
      // Call to get individual degree...
      // Currently only supporting Degree Search REST API degrees, but it
      // returns degrees with ONLNE campus, so perhaps is sufficient.
      fetchDegreeByAcadPlan(props.ProgramOfInterest).then(degree => {
        // Set Campus to NOPREF since we'll have a mix of degree types since DS
        // REST API also stores ONLNE degeees.
        values.Campus = "NOPREF";
        // Update options for CareerAndStudentType
        // If Degree starts with a B, it's undergrad.
        // TODO Is there a better means of identifying undergrad programs?
        if (degree.programs[0].Degree.charAt(0) === "B") {
          // PoI is undergrad degree.
          // Set only undergrad options for studentTypeOptions.
          setStudentTypeOptions([
            { value: "First Time Freshman", label: "First-year undergraduate" },
            { value: "Transfer", label: "Transferring undergraduate" },
          ]);
        } else {
          // PoI is graduate degree.
          // Setting the options here helps trigger dependent useEffects, even
          // though we won't display this single option.
          setStudentTypeOptions([
            {
              value: "Readmission",
              label: "Graduate (Masters, PhD, EdD, DNP, etc.)",
            },
          ]);
          // For Grad, set the value and we'll hide the field in the jsx.
          values.CareerAndStudentType = "Readmission"; // Gradudate
        }
      });
    }
  }, [degreeData]);

  // Interest1: areaInterestOptions filter and set logic.
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }

    // Force the the Area of Interest and Program of Interest selects to
    // re-render ala https://github.com/JedWatson/react-select/issues/2846
    // in order to clear selection when options reload. Best solve, given
    // structural challenges.
    setSelectKey(selectKey + 1);
    // Also clear value used in Formik validation, as it doesn't get cleared.
    if (!props.AreaOfInterest) {
      values.Interest1 = undefined;
    }

    if (values.Campus === "ONLNE") {
      // ASUOnline Areas of Interest

      // No Department or College filter for ASUOnline degree data.

      // Create array of Area of Interest arrays with duplicates.
      const dupAoIArrays = degreeData.map(e => {
        if (e.interestareas) {
          return [...e.interestareas];
        }
        return [];
      });
      // Concatenate all arrays together, turn into Set so dupes are removed,
      // and then destructure back into an array. And sort alphabetically.
      const areasOfInterest = [
        ...new Set(Array.prototype.concat.apply([], dupAoIArrays)),
      ].sort();
      setAreaInterestOptions(
        areasOfInterest.map(aoi => ({
          value: aoi,
          label: aoi,
        }))
      );
    } else {
      // DS REST Areas of Interest

      // Filter with props.Department or props.College if they exist.
      const degreeDataProcessed = filterDegreesByDeptOrCollege(
        degreeData,
        props
      );

      // Create array of Area of Interest arrays with duplicates.
      const dupAoIArrays = degreeDataProcessed.map(e => {
        if (e.planCatDescr) {
          return [...e.planCatDescr];
        }
        return [];
      });
      // Concatenate all arrays together, turn into Set so dupes are removed,
      // and then destructure back into an array. And sort alphabetically.
      const areasOfInterest = [
        ...new Set(Array.prototype.concat.apply([], dupAoIArrays)),
      ].sort();
      setAreaInterestOptions(
        areasOfInterest.map(aoi => ({
          value: aoi,
          label: aoi,
        }))
      );
    }
  }, [degreeData, values.CareerAndStudentType, values.Campus]);

  // Interest2: programInterestOptions filter and set logic.
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }

    // Force the the Area of Interest and Program of Interest selects to
    // re-render ala https://github.com/JedWatson/react-select/issues/2846
    // in order to clear selection when options reload. Best solve, given
    // structural challenges.
    setSelectKey(selectKey + 1);
    // Also clear value used in Formik validation, as it doesn't get cleared.
    if (!props.ProgramOfInterest) {
      values.Interest2 = undefined;
    }

    // Map programPlanOptions for Interest2
    if (values.Campus === "ONLNE") {
      // Filter with form's values.Interest1 against data's interestareas
      const degreeDataProcessed = filterDegrees(
        degreeData,
        "interestareas",
        values,
        "Interest1"
      );

      // No Department or College filter for ASUOnline degree data.

      // ASUOnline mapping
      setProgramInterestOptions(
        degreeDataProcessed.map(program => ({
          value: program.code,
          label: program.title,
        }))
      );
    } else {
      // Filter with form's values.Interest1 against data's planCatDescr
      const degreeDataFiltered = filterDegrees(
        degreeData,
        "planCatDescr",
        values,
        "Interest1"
      );

      // Filter with props.Department or props.College if they exist.
      const degreeDataProcessed = filterDegreesByDeptOrCollege(
        degreeDataFiltered,
        props
      );

      // Degree Search REST mapping
      // DS REST value: AcadPlan and label: Descr100;
      setProgramInterestOptions(
        degreeDataProcessed.map(program => ({
          value: program.AcadPlan,
          label: program.Descr100,
        }))
      );
    }
  }, [
    degreeData,
    values.Campus,
    values.CareerAndStudentType,
    values.Interest1,
  ]);

  return (
    <>
      <p className="rfi-step1-intro">
        To learn more about ASU or a specific program, fill out the form below
        then check your email.
      </p>
      {
        // Hide if we have a ProgramOfInterest prop.
        // We have a useEffect above that sets the value.
        props.ProgramOfInterest === undefined && (
          <RfiSelect
            label="Which applies to you?"
            id="Campus"
            name="Campus"
            options={campusOptions}
            requiredIcon
          />
        )
      }
      {
        // Hide if we have a ProgramOfInterest prop and there is only one
        // option. We have a useEffect above that sets the value in the case
        // there's only one option.
        (props.ProgramOfInterest === undefined ||
          studentTypeOptions.length !== 1) && (
          <RfiSelect
            label="Select your student status"
            id="CareerAndStudentType"
            name="CareerAndStudentType"
            options={studentTypeOptions}
            requiredIcon
          />
        )
      }
      {
        // Hide if we have a ProgramOfInterest prop.
        props.ProgramOfInterest === undefined && (
          <RfiSelect
            label="Area of interest"
            id="Interest1"
            name="Interest1"
            options={areaInterestOptions}
            requiredIcon
            key={`aoi${selectKey}`}
          />
        )
      }
      <RfiSelect
        label="Program of interest"
        id="Interest2"
        name="Interest2"
        options={programInterestOptions}
        disabled={props.ProgramOfInterest !== undefined}
        requiredIcon={
          !props.ProgramOfInterestOptional || values.Campus === "ONLNE"
        }
        key={`poi${selectKey}`}
      />
    </>
  );
};

// Props
// For full canonical list of props, see RfiMainForm.js
ProgramInterest.defaultProps = {
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  // Used but indirectly.
  // Department: undefined,
  // College: undefined,
};

ProgramInterest.propTypes = {
  AreaOfInterest: PropTypes.string,
  ProgramOfInterest: PropTypes.string,
  ProgramOfInterestOptional: PropTypes.bool,
  // Used but indirectly.
  // Department: PropTypes.string,
  // College: PropTypes.string,
};

// Step configs

const programInterestForm = {
  component: ProgramInterest,

  validationSchema: {
    Campus: Yup.string().required("Required"),
    CareerAndStudentType: Yup.string().required("Required"),
    Interest1: Yup.string(), // Uses form-level validation in RfiStepper.js
    Interest2: Yup.string(), // Uses form-level validation in RfiStepper.js
  },

  initialValues: {
    Campus: undefined,
    CareerAndStudentType: undefined,
    Interest1: undefined,
    Interest2: undefined,
  },
};

export { programInterestForm };
