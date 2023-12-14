/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
// @ts-check
import { useFormikContext } from "formik";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";

import { trackGAEvent } from "../../../../../../shared";
import {
  CAMPUS_OPTIONS_DEFAULT,
  GA_EVENT_DEFAULT,
  FAILED_OPTIONS_DEFAULT,
  STUDENT_OPTIONS_DEFAULT,
  STUDENT,
  KEY,
} from "../../../core/utils/constants";
import { RfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";
import { fetchDegreeByAcadPlan, fetchDegreesData } from "./fetchPrograms";
import {
  filterDegrees,
  filterDegreesByDeptOrCollegeOrCampus,
} from "./filterPrograms";

// Component

const ProgramInterest = () => {
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

  // Surface values from Formik context
  const { values } = useFormikContext();

  const {
    actualCampus,
    college,
    dataSourceAsuOnline,
    dataSourceDegreeSearch,
    dataSourcePotLuck,
    department,
    programOfInterest,
    programOfInterestOptional,
  } = useContext(RfiContext);

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
      dataSourcePotLuck,
      dataSourceDegreeSearch,
      dataSourceAsuOnline,
      Campus: values.Campus,
      CareerAndStudentType: values.CareerAndStudentType,
    }).then(data => {
      if (values.Campus === KEY.ONLINE) {
        // ASUOnline data
        // Already sorted alpha by service, for us.
        setDegreeData(data);
      } else if (Array.isArray(data)) {
        // Data Pot Luck data
        // Sort alpha on degree name.
        data.sort((a, b) =>
          a.acadPlanDescription > b.acadPlanDescription ? 1 : -1
        );
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
    if (programOfInterest) {
      // Call to get individual degree...
      // Currently only supporting Degree Search REST API degrees, but it
      // returns degrees with ONLNE campus, so perhaps is sufficient.
      fetchDegreeByAcadPlan(
        dataSourcePotLuck,
        dataSourceDegreeSearch,
        programOfInterest
      ).then(degree => {
        // Set Campus to NOPREF if a Campus value wasn't set via prop, since
        // we'll have a mix of degree types because DS REST API also stores
        // ONLNE degeees.
        values.Campus = values.Campus ? values.Campus : KEY.NOPREF;
        // Update options for CareerAndStudentType
        // If Degree starts with a B, it's undergrad.
        // TODO Is there a better means of identifying undergrad programs?
        // Possibly AcadProg field (UG* is Undergrad and GR* is Graduate...
        // wouldn't give us minors and certs, though).
        if (
          degree.programs[0].Degree.charAt(0) === "B" ||
          degree[0].degreeDescriptionShort.charAt(0) === "B"
        ) {
          // PoI is undergrad degree.
          // Set only undergrad options for studentTypeOptions.
          setStudentTypeOptions([STUDENT.FRESHMAN, STUDENT.TRANSFER]);
        } else {
          // PoI is graduate degree.
          // Setting the options here helps trigger dependent useEffects, even
          // though we won't display this single option.
          setStudentTypeOptions([STUDENT.READMISSION]);
          // For Grad, set the value and we'll hide the field in the jsx.
          values.CareerAndStudentType = KEY.READMISSION; // Gradudate
        }
      });
    }
  }, [degreeData]);

  // Interest1: areaInterestOptions filter and set logic.
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }

    if (values.Campus === KEY.ONLINE) {
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
      const aoiOptions = areasOfInterest.map((aoi, index) => ({
        key: index.toString(),
        value: aoi,
        text: aoi,
      }));
      setAreaInterestOptions(aoiOptions);
    } else {
      // DS REST Areas of Interest
      // Filter with props.department or props.college if they exist.
      const degreeDataProcessed = filterDegreesByDeptOrCollegeOrCampus({
        actualCampus,
        college,
        degreeData,
        department,
      });
      // Create array of Area of Interest arrays with duplicates.
      console.log(degreeDataProcessed);
      // TODO: REMOVE OLD DEGREE SEARCH
      if (typeof degreeDataProcessed[0].planCatDescr !== "undefined") {
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
        console.log(dupAoIArrays);
        console.log(areasOfInterest);
        const aoiOptions = areasOfInterest.map((aoi, index) => ({
          key: index.toString(),
          value: aoi,
          text: aoi,
        }));
        setAreaInterestOptions(aoiOptions);
      } else {
        const dupAoIArrays = degreeDataProcessed.map(e => {
          if (e.planCategories) {
            return e.planCategories.reduce(
              (acc, cur) => [...acc, cur.categoryDescription],
              []
            );
          }
          return [];
        });
        // Concatenate all arrays together, turn into Set so dupes are removed,
        // and then destructure back into an array. And sort alphabetically.
        const areasOfInterest = [
          ...new Set(Array.prototype.concat.apply([], dupAoIArrays)),
        ].sort();

        console.log(dupAoIArrays);
        console.log(areasOfInterest);
        const aoiOptions = areasOfInterest.map((aoi, index) => ({
          key: index.toString(),
          value: aoi,
          text: aoi,
        }));
        setAreaInterestOptions(aoiOptions);
      }
    }
  }, [degreeData, values.CareerAndStudentType, values.Campus]);

  // Interest2: programInterestOptions filter and set logic.
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }

    // Map programPlanOptions for Interest2
    if (values.Campus === KEY.ONLINE) {
      // Filter with form's values.Interest1 against data's interestareas
      const degreeDataProcessed = filterDegrees({
        degreeData,
        degreeDataFieldName: "interestareas",
        degreeDataNestedFieldName: null,
        propFilter: values,
        propFilterName: "Interest1",
      });

      // No Department or College filter for ASUOnline degree data.

      // ASUOnline mapping
      const poiOptions = degreeDataProcessed.map((program, index) => ({
        key: index.toString(),
        value: program.code,
        text: program.title,
      }));
      setProgramInterestOptions(poiOptions);
    } else {
      // Filter with form's values.Interest1 against data's planCatDescr
      const degreeDataFiltered = filterDegrees({
        degreeData,
        degreeDataFieldName: "planCategories",
        degreeDataNestedFieldName: "categoryDescription",
        propFilter: values,
        propFilterName: "Interest1",
      });

      // Filter with props.department or props.college if they exist.
      const degreeDataProcessed = filterDegreesByDeptOrCollegeOrCampus({
        degreeData: degreeDataFiltered,
        actualCampus,
        college,
        department,
      });

      // Degree Search REST mapping
      // DS REST value: AcadPlan and label: Descr100;
      const poiOptions = degreeDataProcessed.map((program, index) => ({
        key: index.toString(),
        value: program.acadPlanCode,
        text: `${program.acadPlanDescription} ${
          program.degreeDescriptionShort
            ? `(${program.degreeDescriptionShort})`
            : ""
        }`,
      }));
      setProgramInterestOptions(poiOptions);
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
//   dataSourcePotLuck: PropTypes.string.isRequired,
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
