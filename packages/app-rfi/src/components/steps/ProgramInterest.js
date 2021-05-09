// @ts-check
import React from "react";
import * as Yup from "yup";

import { RfiSelect } from "../controls";

// Options

// TODO if we have to fallback to XMLRPC services... https://github.com/ganl/mimic-xmlrpc
// Or any benefit in doing a wrapper/adapter service... via a lambda? :D

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
    value: "Readmission",
    text: "Graduate (Masters, PhD, EdD, DNP, etc.)",
  },
];

const areaInterestOptions = [
  { key: "0", value: "", text: "-- Select --" },
  { key: "1", value: "Interest A", text: "Interest A" },
  { key: "2", value: "Interest B", text: "Interest B" },
  { key: "3", value: "Interest C", text: "Interest C" },
];

const programPlanOptions = [
  { key: "0", value: "", text: "-- Select --" },
  { key: "1", value: "Program A", text: "Program A" },
  { key: "2", value: "Program B", text: "Program B" },
  { key: "3", value: "Program C", text: "Program C" },
];
// Component

const ProgramInterest = () => {
  return (
    <>
      <p>
        Please complete and submit the form below, and a representative will
        contact you about enrolling at ASU
      </p>
      {/*
      <RfiRadioGroup
        label="Which applies to you?"
        id="campus"
        name="campus"
        options={campusOptions}
      /> */}
      <RfiSelect
        label="Which applies to you?"
        id="campus"
        name="campus"
        options={campusOptions}
        requiredIcon
      />
      <RfiSelect
        label="Select your student status"
        id="studentType"
        name="studentType"
        options={studentTypeOptions}
        requiredIcon
      />
      <RfiSelect
        label="Area of interest"
        id="areaInterest"
        name="areaInterest"
        options={areaInterestOptions}
        requiredIcon
      />
      <RfiSelect
        label="Program of interest"
        id="programPlan"
        name="programPlan"
        options={programPlanOptions}
        requiredIcon
      />
    </>
  );
};

// Step configs

const programInterestForm = {
  component: ProgramInterest,

  validationSchema: {
    campus: Yup.string().required("Required"),
    studentType: Yup.string().required("Required"),
    areaInterest: Yup.string().required("Required"),
    programPlan: Yup.string().required("Required"),
  },

  initialValues: {
    campus: undefined,
    studentType: undefined,
    areaInterest: undefined,
    programPlan: undefined,
  },
};

export default programInterestForm;

/*
FIELDS
x- campus
x- career and student type // TODO selection will be used to derive values for payload
- interest 1 - area of interest
- interest 2 - program of interest

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

*/
