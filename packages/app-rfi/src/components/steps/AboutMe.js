// @ts-check
import React from "react";
import * as Yup from "yup";

import { RfiTextInput, RfiEmailInput, RfiDatepicker } from "../controls";

// import { setFieldValue } from 'formik'
// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// Component

// TODO dateOfBirth should use datepicker. See https://stackblitz.com/edit/demo-react-formik-datepicker

const AboutMe = () => {
  return (
    <>
      <h3>About me</h3>
      <RfiTextInput
        label="First name"
        id="firstName"
        name="firstName"
        requiredIcon
        helperText="First name"
      />
      <RfiTextInput
        label="Last name"
        id="lastName"
        name="lastName"
        requiredIcon
        helperText="Last name"
      />
      {/*            <RfiTextInput label="Date of Birth *" name="dateOfBirth" /> */}
      <RfiDatepicker
        label="Date of Birth"
        id="dateOfBirth"
        name="dateOfBirth"
        dateFormat="MM/dd/yyyy"
        className="form-control"
        placeholderText="MM/DD/YYYY"
        requiredIcon
      />
      <RfiEmailInput
        label="Email Address *"
        id="email"
        name="email"
        requiredIcon
      />
    </>
  );
};

// Step configs

const aboutMeForm = {
  component: AboutMe,

  validationSchema: {
    firstName: Yup.string()
      .min(2, "Too short")
      .max(64, "Too long")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too short")
      .max(64, "Too long")
      .required("Required"),
    dateOfBirth: Yup.date().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  },

  initialValues: {
    firstName: undefined,
    lastName: undefined,
    dateOfBirth: undefined,
    email: undefined,
  },
};

export default aboutMeForm;

/*
- first name
- last name
- date of birth
- emai
*/
