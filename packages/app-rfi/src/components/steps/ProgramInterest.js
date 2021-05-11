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

export default programInterestForm;

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
