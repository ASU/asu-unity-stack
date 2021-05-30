/* eslint-disable no-console */
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
async function fetchDegreeData(Campus, CareerAndStudentType) {
  // fetch(`https://webapp4.asu.edu/programs/t5/service?init=false&method=findDegreeByFirstLetterMapArray&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,CampusStringArray,SubPln,planCatDescr&program=undergrad&cert=false`)

  let serviceUrl;
  let program;

  // TODO // Bad encoding on CampusStringArray and planCatDescr <- missing "s
  // Removed from query for now.

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
        // .then(data => console.log(data, "data from safelyParseJson"))
        .catch(error => new Error(error))
    );
  }

  // Degree Search REST API
  program = CareerAndStudentType === "Readmission" ? "graduate" : "undergrad";
  serviceUrl = `https://degreesearch-proxy.apps.asu.edu/degreesearch/?init=false&method=findDegreeByFirstLetterMapArray&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,AcadProg&program=${program}&cert=false`;

  return (
    fetch(serviceUrl, {
      headers: {
        // eslint-disable-next-line prettier/prettier
        Accept: "application/json",
      },
    })
      // Handle as text first due to encoding issues.
      .then(response => response.text()) // Get as raw text first
      .then(raw => {
        return safelyParseJSON(raw);
      })
      // .then(data => console.log(data, "data from safelyParseJson"))
      .catch(error => new Error(error))
  );
}

const campusOptions = [
  { key: "0", value: "", text: "-- Select --" },
  {
    key: "1",
    value: "GROUND",
    text: "I plan to take some/all of my classes on campus",
  },
  {
    key: "2",
    value: "ONLNE",
    text: "I plan to study 100% online through ASU Online",
  },
  {
    key: "3",
    value: "NOPREF",
    text: "I am not sure",
  },
];

const studentTypeOptions = [
  { key: "0", value: "", text: "-- Select --" },
  { key: "1", value: "First Time Freshman", text: "First-year undergraduate" },
  { key: "2", value: "Transfer", text: "Transferring undergraduate" },
  {
    key: "3",
    value: "Readmission",
    text: "Graduate (Masters, PhD, EdD, DNP, etc.)",
  },
];

// Component

const ProgramInterest = () => {
  const [degreeData, setDegreeData] = useState([]);
  const [areaInterestOptions, setAreaInterestOptions] = useState([
    { key: "0", value: "", text: "-- Select --" },
    {
      key: "1",
      value: "",
      text: "Load failed. Please try again in 5 minutes.",
    },
  ]);
  const [programInterestOptions, setProgramInterestOptions] = useState([
    { key: "0", value: "", text: "-- Select --" },
    {
      key: "1",
      value: "",
      text: "Load failed. Please try again in 5 minutes.",
    },
  ]);

  // Surface values from Formik context
  const { values } = useFormikContext();

  // Check if degree data has loaded.
  const degreeDataIsLoaded = () => {
    console.log(degreeData, "degreeDataIsLoaded() CHECK");
    // return true;
    return degreeData.length;
    // return degreeData.length > 0 && typeof degreeData.map === "function";
  };

  // FETCH data from Degree Search REST API.
  useEffect(() => {
    // TODO implment sessionStorage, see pg 159 in Learning React
    // HOLD on using sessionStorage due to limiting complexity while getting
    // basic switching/fetching behaviors in place.

    // Fetch master of degree data.

    fetchDegreeData(values.Campus, values.CareerAndStudentType).then(data => {
      // ASUOnline data
      if (values.Campus === "ONLNE") {
        setDegreeData(data);
        console.log(data, "fetched degreeData ONLNE");
      } else {
        // Degree Search data
        setDegreeData(data.programs);
        console.log(data.programs, "fetched degreeData");
      }
    });
  }, [values.Campus, values.CareerAndStudentType]); // Re-fetch if these chagne.

  // Campus
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }
    console.log("useEffect for Campus");
    // Logic in here.
    // TODO wire in props then check for props.Campus
  }, [degreeData]);

  // CareerAndStudentType
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }
    console.log("useEffect for CareerAndStudentType");
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
    if (values.Campus !== "ONLNE") {
      setAreaInterestOptions(
        degreeData.map(program => ({
          key: program.AcadPlan,
          value: program.AcadPlan,
          text: `MOCK: ${program.Descr100}`,
        }))
      );
      console.log(programInterestOptions, "mock areaInterestOptions SET");
    }
  }, [degreeData, values.Campus]);

  // Interest2: programInterestOptions filter and set logic.
  useEffect(() => {
    if (!degreeDataIsLoaded()) {
      return;
    }

    console.log(degreeData, "programInterestOptions degreeData CHECKIN");

    // Map programPlanOptions for Interest2
    // DS REST value: AcadPlan and label: Descr100;
    if (values.Campus === "ONLNE") {
      // ASUOnline mapping
      setProgramInterestOptions(
        degreeData.map(program => ({
          key: program.code,
          value: program.code,
          text: program.title,
        }))
      );
      console.log(programInterestOptions, "programInterestOptions SET");
    } else {
      // Degree Search REST mapping
      setProgramInterestOptions(
        degreeData.map(program => ({
          key: program.AcadPlan,
          value: program.AcadPlan,
          text: program.Descr100,
        }))
      );
      console.log(programInterestOptions, "programInterestOptions SET");
    }
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

export { programInterestForm };

/*
FIELDS
- Campus
- CareerAndStudentType // TODO A TWOFER - selection will be used to derive values for payload
- Interest1 - area of interest // TODO based on campus: for Online pull from ASUO API, else pull from Degree Search API // TODO admin can hide via prop
- Interest2 - program of interest // TODO same logic as above + auto populate on a degree detail page (via prop) // TODO optional for ground ugrad, required for grad
*/
