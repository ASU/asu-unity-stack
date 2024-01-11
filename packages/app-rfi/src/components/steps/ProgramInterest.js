/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
// @ts-check
import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { trackGAEvent } from "../../../../../shared";
import {
  CAMPUS_OPTIONS_DEFAULT,
  GA_EVENT_DEFAULT,
  FAILED_OPTIONS_DEFAULT,
  STUDENT_OPTIONS_DEFAULT,
  STUDENT,
  KEY,
} from "../../core/utils/constants";
import { fetchDegreesData } from "../../core/utils/fetchPrograms";
import {
  filterDegrees,
  filterDegreesByScope,
} from "../../core/utils/filterPrograms";
import { useRfiContext } from "../../core/utils/rfiContext";
import { RfiSelect } from "../controls";
// @ts-ignore

// Component

const ProgramInterest = () => {
  // Surface values from Formik context
  const { values, setFieldValue } = useFormikContext();

  const {
    actualCampus,
    college,
    dataSourceAsuOnline,
    dataSourceDegreeSearch,
    department,
    programOfInterest,
    programOfInterestOptional,
  } = useRfiContext();

  const [degreeData, setDegreeData] = useState([]);
  const [studentTypeOptions, setStudentTypeOptions] = useState(
    STUDENT_OPTIONS_DEFAULT
  );
  const [areaInterestOptions, setAreaInterestOptions] = useState(
    FAILED_OPTIONS_DEFAULT
  );
  const [programInterestOptions, setProgramInterestOptions] = useState(
    FAILED_OPTIONS_DEFAULT
  );

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
    fetchDegreesData({
      dataSourceDegreeSearch,
      dataSourceAsuOnline,
      department,
      college,
      Campus: values.Campus,
      CareerAndStudentType: values.CareerAndStudentType,
    }).then(([response, data]) => {
      if (response === "Error") {
        return;
      }
      setDegreeData(data);
    });
  }, [values.Campus, values.CareerAndStudentType]); // Re-fetch if these change.

  // Campus and CareerAndStudentType
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }
    // Setup Campus and CareerAndStudentType values, options and display if
    // the ProgramOfInterest prop is present - ie. rendering for a Degree Page.
    if (programOfInterest) {
      // Call to get individual degree...
      // Currently only supporting Degree Search REST API degrees, but it
      // returns degrees with ONLNE campus, so perhaps is sufficient.
      fetchDegreesData({
        dataSourceDegreeSearch,
        dataSourceAsuOnline,
        department,
        college,
        Campus: values.Campus,
        CareerAndStudentType: values.CareerAndStudentType,
        Interest2: programOfInterest,
      }).then(([response, data]) => {
        if (response === "Error") {
          return;
        }
        // Set Campus to NOPREF if a Campus value wasn't set via prop, since
        // we'll have a mix of degree types because DS REST API also stores
        // ONLNE degeees.
        setFieldValue("Campus", values.Campus ? values.Campus : KEY.NOPREF);
        // Update options for CareerAndStudentType
        // If Degree starts with a B, it's undergrad.
        // TODO Is there a better means of identifying undergrad programs?
        // Possibly AcadProg field (UG* is Undergrad and GR* is Graduate...
        // wouldn't give us minors and certs, though).
        if (data[0].degreeType === KEY.UG) {
          // PoI is undergrad degree.
          // Set only undergrad options for studentTypeOptions.

          setStudentTypeOptions([STUDENT.FRESHMAN, STUDENT.TRANSFER]);
        } else {
          // PoI is graduate degree.
          // Setting the options here helps trigger dependent useEffects, even
          // though we won't display this single option.
          setStudentTypeOptions([STUDENT.READMISSION]);
          // For Grad, set the value and we'll hide the field in the jsx.
          setFieldValue("CareerAndStudentType", KEY.READMISSION); // Gradudate
        }
      });
    }
  }, [degreeData]);

  // Interest1: areaInterestOptions filter and set logic.
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }

    const degreeDataProcessed = filterDegreesByScope({
      degreeData,
      actualCampus,
      college,
      department,
    });

    const dupAoIArrays = degreeDataProcessed.map(e => {
      if (e.planCategories) {
        return [...e.planCategories];
      }
      return [];
    });
    // Concatenate all arrays together, turn into Set so dupes are removed,
    // and then destructure back into an array. And sort alphabetically.
    const areasOfInterest = [
      ...new Set(Array.prototype.concat.apply([], dupAoIArrays)),
    ].sort();
    const aoiOptions = areasOfInterest.map((aoi, index) => ({
      key: index.toString(),
      value: aoi,
      text: aoi,
    }));
    setAreaInterestOptions(aoiOptions);
  }, [degreeData, values.CareerAndStudentType, values.Campus]);

  // Interest2: programInterestOptions filter and set logic.
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }

    let degreeDataProcessed = filterDegreesByScope({
      degreeData,
      actualCampus,
      college,
      department,
    });

    degreeDataProcessed = filterDegrees({
      degreeData: degreeDataProcessed,
      degreeDataFieldName: "planCategories",
      propFilter: values,
      propFilterName: "Interest1",
    });

    const poiOptions = degreeDataProcessed.map((program, index) => ({
      key: index.toString(),
      value: program.acadPlanCode,
      text: program.title,
    }));
    setProgramInterestOptions(poiOptions);
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
        programOfInterest === undefined && (
          <RfiSelect
            label="Which applies to you?"
            id="Campus"
            name="Campus"
            options={CAMPUS_OPTIONS_DEFAULT}
            requiredIcon
            required
            onBlur={e =>
              trackGAEvent({
                ...GA_EVENT_DEFAULT,
                type: "Which applies to you?",
                text: e.target.selectedOptions[0].innerText,
              })
            }
          />
        )
      }
      {
        // Hide if we have a ProgramOfInterest prop and there is only one
        // option. We have a useEffect above that sets the value in the case
        // there's only one option.
        (programOfInterest === undefined ||
          studentTypeOptions.length !== 1) && (
          <RfiSelect
            label="Select your student status"
            id="CareerAndStudentType"
            name="CareerAndStudentType"
            options={studentTypeOptions}
            requiredIcon
            required
            onBlur={e =>
              trackGAEvent({
                ...GA_EVENT_DEFAULT,
                type: "Select your student status",
                text: e.target.selectedOptions[0].innerText,
              })
            }
          />
        )
      }
      {
        // Hide if we have a ProgramOfInterest prop.
        programOfInterest === undefined && (
          <RfiSelect
            label="Area of interest"
            id="Interest1"
            name="Interest1"
            options={areaInterestOptions}
            requiredIcon
            required
            onBlur={e =>
              trackGAEvent({
                ...GA_EVENT_DEFAULT,
                type: "Area of interest",
                text: e.target.selectedOptions[0].innerText,
              })
            }
          />
        )
      }
      <RfiSelect
        label="Program of interest"
        id="Interest2"
        name="Interest2"
        options={programInterestOptions}
        disabled={programOfInterest !== undefined}
        requiredIcon={
          !programOfInterestOptional || values.Campus === KEY.ONLINE
        }
        required={!programOfInterestOptional || values.Campus === KEY.ONLINE}
        onBlur={e =>
          trackGAEvent({
            ...GA_EVENT_DEFAULT,
            type: "Program of interest",
            text: e.target.selectedOptions[0].innerText,
          })
        }
      />
    </>
  );
};

// // Props
// // For full canonical list of props, see RfiMainForm.js
// ProgramInterest.defaultProps = {
//   programOfInterest: undefined,
//   programOfInterestOptional: false,
//   // Used but indirectly.
//   // department: undefined,
//   // college: undefined,
// };

// ProgramInterest.propTypes = {
//   programOfInterest: PropTypes.string,
//   programOfInterestOptional: PropTypes.bool,
//   dataSourceDegreeSearch: PropTypes.string.isRequired,
//   dataSourceAsuOnline: PropTypes.string.isRequired,
//   // Used but indirectly.
//   // department: PropTypes.string,
//   // college: PropTypes.string,
// };

// Step configs

const programInterestForm = {
  component: ProgramInterest,

  validationSchema: {
    Campus: Yup.string().required("Error: Which applies to you is required"),
    CareerAndStudentType: Yup.string().required(
      "Error: Student status is required"
    ),
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
