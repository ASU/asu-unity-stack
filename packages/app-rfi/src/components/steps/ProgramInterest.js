// @ts-check
import React from "react";
import * as Yup from "yup";

import { RfiSelect } from "../controls";

// Options

// TODO options from lookup
const programPlanOptions = [
  { key: "1", value: "", text: "-- Select --" },
  { key: "2", value: "Program A", text: "Program A" },
  { key: "3", value: "Program B", text: "Program B" },
  { key: "4", value: "Program C", text: "Program C" },
];

const studentTypeOptions = [
  { key: "1", value: "", text: "-- Select --" },
  { key: "2", value: "First Time Freshman", text: "First Time Freshman" },
  { key: "3", value: "Transfer", text: "Transfer" },
  { key: "4", value: "Readmission", text: "Readmission" },
];

const campusOptions = [
  { key: "1", value: "", text: "-- Select --" },
  { key: "2", value: "Downtown", text: "Downtown" },
  { key: "3", value: "West", text: "West" },
  { key: "4", value: "Online", text: "Online" },
];

// TODO options from lookup
const startDateOptions = [
  { key: "1", value: "", text: "-- Select --" },
  { key: "2", value: "a0Jd000000OH746EAD", text: "2020 Fall" },
  { key: "3", value: "a0Jd000000OH74BEAT", text: "2021 Spring" },
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
        label="My program of interest is *"
        name="programPlan"
        options={programPlanOptions}
      />
      <RfiSelect
        label="I will be a future *"
        name="studentType"
        options={studentTypeOptions}
      />
      <RfiSelect
        label="My campus of choice is *"
        name="campus"
        options={campusOptions}
      />
      <RfiSelect
        label="My start date *"
        name="startDate"
        options={startDateOptions}
      />
    </>
  );
};

// Step configs

const programInterestForm = {
  component: ProgramInterest,

  validationSchema: {
    studentType: Yup.string().required("Required"),
    programPlan: Yup.string().required("Required"),
    campus: Yup.string().required("Required"),
    startDate: Yup.string().required("Required"),
  },

  initialValues: {
    studentType: "",
    programPlan: "", // TODO default from prop if present
    campus: "",
    startDate: "",
  },
};

export default programInterestForm;

/*
Field Group: "I'm interested in..." - Program Details
- student type
- program plan
- campus
- start dat

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
