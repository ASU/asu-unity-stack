// @ts-check
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { RfiSelect } from "../controls";

// Helper functions

function safelyParseJSON(json) {
  let parsed;
  try {
    parsed = JSON.parse(json);
  } catch (e) {
    console.log(e, "Error parsing JSON");
    console.log(json, "Error JSON");
  }
  return parsed; // Could be undefined!
}

// Options

// Fetch degree data from our CF reverse proxy of Degree Search REST API.
// Returns the full degree dataset for the given program (undergrad | graduate).
// We do filtering in useEffect()s to manage filtering logic for our various
// field options.
async function fetchDegreeData() {
  // fetch(`https://webapp4.asu.edu/programs/t5/service?init=false&method=findDegreeByFirstLetterMapArray&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,CampusStringArray,SubPln,planCatDescr&program=undergrad&cert=false`)

  // TODO
  // Bad encoding on CampusStringArray and planCatDescr <- missing "s
  // Removed from query for now.

  // TODO var to be provided
  // const program = "undergrad";
  const program = "graduate";

  // TODO put in useEffect

  // Just ask for all fields
  return (
    fetch(
      `https://degreesearch-proxy.apps.asu.edu/degreesearch/?init=false&method=findDegreeByFirstLetterMapArray&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,AcadProg&program=${program}&cert=false`
    )
      // Handle as text first due to encoding issues.
      .then(response => response.text()) // Get as raw text first
      .then(raw => {
        return safelyParseJSON(raw);
      })
      // .then(data => console.log(data, "data from safelyParseJson"))
      .catch(error => new Error(error))
  );
}

// TODO verify value to use
const campusOptions = [
  { key: "0", value: "", text: "-- Select --" },
  {
    key: "1",
    value: "on campus",
    text: "I plan to take some/all of my classes on campus",
  },
  {
    key: "2",
    value: "online",
    text: "I plan to study 100% online through ASU Online",
  },
  {
    key: "3",
    value: "no preference",
    text: "I am not sure",
  },
];

const studentTypeOptions = [
  { key: "0", value: "", text: "-- Select --" },
  { key: "1", value: "First Time Freshman", text: "First-year undergraduate" },
  { key: "2", value: "Transfer", text: "Transferring undergraduate" },
  {
    key: "3",
    value: "Readmission", // TODO what should value be here
    text: "Graduate (Masters, PhD, EdD, DNP, etc.)",
  },
];

// Component

const ProgramInterest = ({ rfiConfig }) => {
  const [degreeData, setDegreeData] = useState([]);
  const [areaInterestOptions, setAreaInterestOptions] = useState([
    { key: "0", value: "", text: "-- Select --" },
    { key: "1", value: "error", text: "Load failed: Area of Interest Options" },
  ]);
  const [programInterestOptions, setProgramInterestOptions] = useState([
    { key: "0", value: "", text: "-- Select --" },
    { key: "1", value: "error", text: "Load failed: Program Interest Options" },
  ]);

  // TODO remove debug / error avoid, once used.
  console.log(rfiConfig, "props in ProgramInterest");

  // Surface values from Formik context
  const { values } = useFormikContext();

  // Check if degree data has loaded.
  const degreeDataIsLoaded = () => {
    return degreeData.length > 0 && typeof degreeData.map === "function";
  };

  // FETCH data from Degree Search REST API.
  useEffect(() => {
    // TODO Use localStorage
    // TODO check for locally stored data before calling fetch.
    // TODO localStorage see pg 159 in Learning React
    // TODO it's possible it makes more sense for this to be pushed up the tree
    // into RfiStepper so it's only called once...

    // TODO PREFETCH DS REST UGRAD and GRAD && ASUO API UGRAD and GRAD and store local?

    // Fetch master of degree data.
    fetchDegreeData().then(data => {
      // Set state on countryOptions.
      setDegreeData(data.programs);
      console.log(data.programs, "data for degreeData");
    });
  }, []); // Run only once

  // Campus
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }
    console.log("Campus");
    // Logic in here.
    // TODO wire in props then check for props.Campus
  }, [degreeData]);

  // CareerAndStudentType
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }
    console.log("CareerAndStudentType");
    // Logic in here.
    // TODO wire in props then check for props and values.
  }, [degreeData]);

  // Interest1: areaInterestOptions filter and set logic.
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }

    // TODO HOLD WAITING ON FIELD DATA BEING VALID
    // TODO Map areaInterstOptions / Interest1 planCatDescr
    setAreaInterestOptions(
      degreeData.map(program => ({
        key: program.AcadPlan,
        value: program.AcadPlan,
        text: `MOCK: ${program.Descr100}`,
      }))
    );
    console.log(programInterestOptions, "mock areaInterestOptions SET");
  }, [degreeData, values.Campus]);

  // Interest2: programInterestOptions filter and set logic.
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }

    // Map programPlanOptions for Interest2
    // DS REST value: AcadPlan and label: Descr100;
    setProgramInterestOptions(
      degreeData.map(program => ({
        key: program.AcadPlan,
        value: program.AcadPlan,
        text: program.Descr100,
      }))
    );
    console.log(programInterestOptions, "programInterestOptions SET");
  }, [degreeData, values.Campus, values.Interest1]); // TODO Run when...

  // TODO start using react-select?
  // See https://binyamin.medium.com/formik-with-react-select-952b4db8768a

  return (
    <>
      <p>
        Please complete and submit the form below, and a representative will
        contact you about enrolling at ASU
      </p>
      <RfiSelect
        label="Which applies to you?"
        id="Campus"
        name="Campus"
        options={campusOptions}
        requiredIcon
      />
      <RfiSelect
        label="Select your student status"
        id="CareerAndStudentType"
        name="CareerAndStudentType"
        options={studentTypeOptions}
        requiredIcon
      />
      <RfiSelect
        label="Area of interest"
        id="Interest1"
        name="Interest1"
        options={areaInterestOptions}
        requiredIcon
      />
      <RfiSelect
        label="Program of interest"
        id="Interest2"
        name="Interest2"
        options={programInterestOptions}
        requiredIcon
      />
    </>
  );
};

// Step configs

const programInterestForm = {
  component: ProgramInterest,

  validationSchema: {
    Campus: Yup.string().required("Required"),
    CareerAndStudentType: Yup.string().required("Required"),
    Interest1: Yup.string().required("Required"),
    Interest2: Yup.string().required("Required"),
  },

  initialValues: {
    Campus: undefined,
    CareerAndStudentType: undefined,
    Interest1: undefined,
    Interest2: undefined,
  },
};

// Props
ProgramInterest.defaultProps = {
  rfiConfig: {
    Campus: "",
    College: "",
    Department: "",
    StudentType: "",
    AreaOfInterest: "",
    ProgramOfInterest: "",
    State: "",
    SuccessMsg: "Success.",
    Test: 0,
  },
};

ProgramInterest.propTypes = {
  rfiConfig: PropTypes.instanceOf(Object),
};

export { programInterestForm };

/*
FIELDS
- Campus
- CareerAndStudentType // TODO A TWOFER - selection will be used to derive values for payload
- Interest1 - area of interest // TODO based on campus: for Online pull from ASUO API, else pull from Degree Search API // TODO admin can hide via prop
- Interest2 - program of interest // TODO same logic as above + auto populate on a degree detail page (via prop) // TODO optional for ground ugrad, required for grad

From legacy module - a trail for what to update from
  // Load degree settings
  //// If AJAX, uses existing form_state campus value
  $degree_assets = array(
    'academic_plan' => '',
    'academic_program' => '',
    'degree_awarded' => '',
    'degree_program' => '',
    'diploma_description' => '',
    'campus' => array(),
    'deg_code' => '',
    'deg_name' => '',
    'college_code' => '',
    'college_name' => '',
    'form_type' => '',
    'grad_dates' => '',
    'start_dates' => array(),
  );

  Note on campus options:
  Not sure we're going to need these in the MVP...
  Campus codes as defined by http://www.public.asu.edu/~lcabre/javadocs/dsws/
	There is no actual endpoint to get these: array( 'TEMPE', 'POLY', 'DTPHX', 'WEST', 'ONLNE' );


*/
