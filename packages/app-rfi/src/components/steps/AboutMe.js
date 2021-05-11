// @ts-check
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import {
  RfiTextInput,
  RfiEmailInput,
  RfiSelect,
  // RfiCheckboxSingle,
} from "../controls";

// Component

const AboutMe = () => {
  const [termOptions, setTermOptions] = useState([]);

  // Term options
  useEffect(() => {
    // TODO IF graduate call graduateAllApplyDates
    // https://webapp4.asu.edu/programs/t5/service?init=false&method=findDegreeByFirstLetterMapArray&fields=AcadPlan,Degree,Descrlong,graduateAllApplyDates&program=graduate&cert=false&nopassive=true

    // TODO ELSE default to undergrad and use this

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
    termData.unshift({ key: -1, value: "", text: "-- select start date --" });
    setTermOptions(termData);
  }, []); // Run only once. TODO change so we can update based on selections.

  return (
    <>
      <h3>About me</h3>
      <RfiEmailInput
        label="Email Address *"
        id="EmailAddress"
        name="EmailAddress"
        requiredIcon
      />
      <RfiTextInput
        label="First name"
        id="FirstName"
        name="FirstName"
        requiredIcon
        helperText="First name"
      />
      <RfiTextInput
        label="Last name"
        id="LastName"
        name="LastName"
        requiredIcon
        helperText="Last name"
      />
      <RfiTextInput label="Phone" id="Phone" name="Phone" requiredIcon />
      {/* <RfiCheckboxSingle id="mobile" name="mobile" value="1">
        This is a USA mobile number and I would like to receive information via
        SMS text messaging
      </RfiCheckboxSingle> */}
      <RfiTextInput
        label="Postal code"
        id="ZipCode"
        name="ZipCode"
        requiredIcon
      />
      <RfiSelect
        label="My start date"
        id="EntryTerm"
        name="EntryTerm"
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
    EmailAddress: Yup.string().email("Invalid email").required("Required"),
    FirstName: Yup.string()
      .min(2, "Too short")
      .max(64, "Too long")
      .required("Required"),
    LastName: Yup.string()
      .min(2, "Too short")
      .max(64, "Too long")
      .required("Required"),
    Phone: Yup.string() // TODO transform ?
      .max(24, "Too long")
      .required("Required"),
    // mobile: Yup.string(),
    ZipCode: Yup.string().required("Required"), // TODO Required only if countyry is US.
    EntryTerm: Yup.string().required("Required"),
  },

  initialValues: {
    EmailAddress: undefined,
    FirstName: undefined,
    LastName: undefined,
    Phone: undefined,
    // mobile: undefined,
    ZipCode: undefined,
    EntryTerm: undefined,
  },
};

export default aboutMeForm;

/*
FIELDS
- EmailAddress
- FirstName
- LastName
- Phone // TODO use Yup phone library
- ZipCode
- EntryTerm // TODO more logic and svc call based on if graduate / undergrad
*/
