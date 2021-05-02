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
      <h3>About Me</h3>
      <RfiTextInput label="First name *" name="firstName" />
      <RfiTextInput label="Last name *" name="lastName" />
      {/*            <RfiTextInput label="Date of Birth *" name="dateOfBirth" /> */}
      <RfiDatepicker
        label="Date of Birth *"
        name="dateOfBirth"
        dateFormat="MM/dd/yyyy"
        className="form-control"
        placeholderText="MM/DD/YYYY"
      />
      <RfiEmailInput label="Email Address *" name="email" />
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
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
  },
};

export default aboutMeForm;

/*
- first name
- last name
- date of birth
- emai
*/
