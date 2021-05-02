// @ts-check
import React from "react";
import * as Yup from "yup";

import {
  RfiTextInput,
  RfiCheckboxSingle,
  RfiSelect,
  RfiRadioGroup,
  RfiTextArea,
} from "../controls";

// Options

const veteranStatusOptions = [
  { key: "1", value: "option 1", text: "Option 1" },
  { key: "2", value: "option 2", text: "Option 2" },
  { key: "3", value: "option 3", text: "Option 3" },
];

// TODO Determine preferable way to source these.
const countryOptions = [
  { key: "1", value: "", text: "-- Select --" },
  { key: "2", value: "Country A", text: "Country A" },
  { key: "3", value: "Country B", text: "Country B" },
  { key: "4", value: "Country C", text: "Country C" },
];

// Component

const Optional = () => {
  return (
    <>
      <h3>About Me</h3>
      <RfiCheckboxSingle name="notCitizen" value="1">
        TODO get wording: I am not a citizen of the United States.
      </RfiCheckboxSingle>
      <RfiRadioGroup
        label="Veteran status... TODO GET WORDING"
        name="veteranStatus"
        options={veteranStatusOptions}
      />
      <RfiSelect
        label="Country"
        name="country"
        options={countryOptions}
        // disabled TODO flagged by ts-check so commented out
      />{" "}
      {/* TODO make disabled work */}
      <RfiTextInput label="Address" name="address" />
      <RfiTextInput label="City" name="city" />
      <RfiTextInput label="State or Province" name="stateProvince" />
      <RfiTextInput
        label="Zipcode"
        name="zipcode" /* disabled TODO flagged by ts-check */
      />{" "}
      {/* TODO make disabled work */}
      <RfiTextArea
        label="Additional assistance requested"
        name="additionalAssistance"
      />
    </>
  );
};

// Step configs

const optionalForm = {
  component: Optional,
  validationSchema: {
    notCitizen: Yup.boolean(),
    veteranStatus: Yup.string(),
    country: Yup.string(),
    address: Yup.string(),
    city: Yup.string(),
    stateProvince: Yup.string(),
    zipcode: Yup.string(),
    additionalAssistance: Yup.string().max(250, "Too long"),
  },

  initialValues: {
    notCitizen: "",
    veteranStatus: "",
    country: "", // TODO use value, disable
    address: "",
    city: "",
    stateProvince: "",
    zipcode: "", // TODO use value, disable
    additionalAssistance: "",
  },
};

export default optionalForm;

/*
Field Group: Optional
- not US citizen [checkbox]
- US Veteran
- [redux] country
- Address
- City
- State/Province
- [redux] Postal code
- Additional assistance
- [markup] Consent wordin
*/
