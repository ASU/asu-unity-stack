// @ts-check
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import {
  RfiTextInput,
  RfiEmailInput,
  RfiDatepicker,
  RfiSelect,
} from "../controls";

// Component

// Datepicker note: see https://stackblitz.com/edit/demo-react-formik-datepicker

const AboutMe = () => {
  const [termOptions, setTermOptions] = useState([]);

  // Term options
  useEffect(() => {
    // Term logic example: for term 2217, the 2 is for century, 21 for last 2 of
    // year, 1 for spring, 7 for fall. We don't do summer, but it's 4, for
    // reference.
    const termData = [];
    const currMo = new Date().getMonth();
    for (let i = 0; i < 5; i += 1) {
      // Use i to calculate out years.
      const year = new Date().getFullYear() + i;
      const mil = year.toString();
      const termSpring = mil.slice(0, 1) + mil.slice(2) + 1; // 1 == spring
      const termFall = mil.slice(0, 1) + mil.slice(2) + 7; // 7 == fall
      // Drop spring for current year.
      if (i > 0) {
        termData.push({
          key: termSpring,
          value: termSpring,
          text: `${year} Spring`,
        });
      }
      // Drop fall for current year if currMo is greater than June.
      if (i > 0 || currMo < 6) {
        // Month is based off zero index.
        termData.push({
          key: termFall,
          value: termFall,
          text: `${year} Fall`,
        });
      }
    }
    setTermOptions(termData);
  }, []); // Run only once. TODO change so we can update based on selections.

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
      <RfiSelect
        label="My start date"
        id="startDate"
        name="startDate"
        options={termOptions}
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
    startDate: Yup.string().required("Required"),
  },

  initialValues: {
    firstName: undefined,
    lastName: undefined,
    dateOfBirth: undefined,
    email: undefined,
    startDate: undefined,
  },
};

export default aboutMeForm;

/*
FIELDS
- email
- firstName
- lastName
- phone
- zipcode/postal code
- entry term
*/
