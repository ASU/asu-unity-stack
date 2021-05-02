// @ts-check
import React from "react";
import * as Yup from "yup";

import { RfiTextInput, RfiSelect, RfiCheckboxSingle } from "../controls";

// Options

// TODO Determine preferable way to source these.
const countryOptions = [
  { key: "1", value: "", text: "-- Select --" },
  { key: "2", value: "Country A", text: "Country A" },
  { key: "3", value: "Country B", text: "Country B" },
  { key: "4", value: "Country C", text: "Country C" },
];

// Component

const Contact = () => {
  return (
    <>
      <h3>Contact info</h3>
      <RfiTextInput label="Phone *" name="phone" />
      <RfiCheckboxSingle name="mobile" value="1">
        This is a USA mobile number and I would like to receive information via
        SMS text messaging
      </RfiCheckboxSingle>
      <RfiSelect label="Country *" name="country" options={countryOptions} />
      <RfiTextInput label="Postal code * (TODO)" name="zipcode" />
    </>
  );
};

// Step configs

const contactForm = {
  component: Contact,

  validationSchema: {
    phone: Yup.string() // TODO transform ?
      .max(24, "Too long")
      .required("Required"),
    mobile: Yup.boolean(),
    country: Yup.string().required("Required"),
    zipcode: Yup.string().required("Required"), // TODO Required only if countyry is US.
  },

  initialValues: {
    phone: "",
    mobile: "",
    country: "",
    zipcode: "",
  },
};

export default contactForm;

/*
- phone number
- is mobile number [checkbox]
- country
- postal code
*/
