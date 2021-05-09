// @ts-check
import React from "react";
import * as Yup from "yup";

import {
  RfiTextInput,
  RfiCheckboxSingle,
  // RfiSelect,
  RfiRadioGroup,
  RfiTextArea,
} from "../controls";

// Options

const veteranStatusOptions = [
  { key: "1", value: "None", text: "None" },
  { key: "2", value: "Active Duty", text: "Active Duty" },
  { key: "3", value: "National Guard", text: "National Guard" },
  { key: "4", value: "Veteran", text: "Veteran" },
  { key: "5", value: "Armed forces reserve", text: "Armed forces reserve" },
  { key: "6", value: "Spouse/Dependent", text: "Spouse/Dependent" },
];

// TODO Determine preferable way to source these.
// const countryOptions = [
//   { key: "1", value: "", text: "-- Select --" },
//   { key: "2", value: "Country A", text: "Country A" },
//   { key: "3", value: "Country B", text: "Country B" },
//   { key: "4", value: "Country C", text: "Country C" },
// ];

// Component

const Optional = () => {
  return (
    <>
      <h3>More about me</h3>
      <RfiCheckboxSingle id="notCitizen" name="notCitizen" value="1">
        I am not a U.S. citizen and do not have a green card.
      </RfiCheckboxSingle>
      {/* <RfiSelect
        label="Country"
        id="country"
        name="country"
        options={countryOptions}
        // disabled TODO flagged by ts-check so commented out
      /> */}{" "}
      {/* TODO make disabled work */}
      <RfiTextInput label="Address" id="address" name="address" />
      <RfiTextInput label="City" id="city" name="city" />
      {/* <RfiTextInput
        label="State or Province"
        id="stateProvince"
        name="stateProvince"
      /> */}
      <RfiTextInput
        label="Zipcode"
        id="zipcode"
        name="zipcode" /* disabled TODO flagged by ts-check */
      />{" "}
      {/* TODO make disabled work */}
      <RfiRadioGroup
        label="U.S. Veteran admission information and services"
        id="veteranStatus"
        name="veteranStatus"
        options={veteranStatusOptions}
      />
      <RfiTextArea
        label="Additional assistance requested"
        id="additionalAssistance"
        name="additionalAssistance"
      />
    </>
  );
};

// Step configs

const optionalForm = {
  component: Optional,
  validationSchema: {
    notCitizen: Yup.string(),
    veteranStatus: Yup.string(),
    country: Yup.string(),
    address: Yup.string(),
    city: Yup.string(),
    stateProvince: Yup.string(),
    zipcode: Yup.string(),
    additionalAssistance: Yup.string().max(250, "Too long"),
  },

  initialValues: {
    notCitizen: undefined,
    veteranStatus: undefined,
    country: undefined, // TODO use value, disable
    address: undefined,
    city: undefined,
    stateProvince: undefined,
    zipcode: undefined, // TODO use value, disable
    additionalAssistance: undefined,
  },
};

export default optionalForm;

/*
FIELDS
- country of citizenship
- street address
- city
- state
- country (repeat?)
- date of birth
- military veteran
- questions/comments
- [markup] Consent wordin

HIDDEN FIELDS
- international (derived based on country of citizenship)
- source
- url
- ga_client id

- ??? hash/client id

*/
