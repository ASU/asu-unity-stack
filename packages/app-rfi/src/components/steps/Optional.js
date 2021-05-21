// @ts-check
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import {
  RfiTextInput,
  // RfiCheckboxSingle,
  RfiDatepicker,
  RfiRadioGroup,
  RfiTextArea,
  RfiSelect,
} from "../controls";

// Options

// Fetch Country Options from Data Potluck's readable stream service.
async function fetchCountries() {
  // fetch("https://api.myasuplat-dpl.asu.edu/api/codeset/countries?include=states")

  return fetch("https://api.myasuplat-dpl.asu.edu/api/codeset/countries")
    .then(response => response.body)
    .then(rb => {
      const reader = rb.getReader();
      return new ReadableStream({
        start(controller) {
          // The following function handles each data chunk
          function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then(({ done, value }) => {
              // If there is no more data to read
              if (done) {
                controller.close();
                return;
              }
              // Get the data and send it to the browser via the controller
              controller.enqueue(value);
              push();
            });
          }
          push();
        },
      });
    })
    .then(stream => {
      // Respond with our stream
      return new Response(stream, {
        headers: { "Content-Type": "application/json" },
      }).text();
    })
    .then(result => {
      // Parse results
      const resultJson = JSON.parse(result);
      const resultsArrayOfOjbects = Object.values(resultJson);
      // Format for select options.
      let i = 0;
      // TODO Resolve when dust settles. Not hurting anything for now.
      // eslint-disable-next-line no-return-assign
      const results = resultsArrayOfOjbects.map(co => ({
        key: (i += 1),
        value: co.countryCodeTwoChar,
        text: co.description,
      }));
      results.unshift({ key: -1, value: "", text: "-- select country --" });
      // console.log(results, "Results");
      // TODO set up local country data be used as a fallback if we don't get any.
      // TODO Attach details to log if we didn't get results and had to use fallback.
      return results;
    })
    .catch(error => new Error(error));
}

const veteranStatusOptions = [
  { key: "1", value: "None", text: "None" },
  { key: "2", value: "Active Duty", text: "Active Duty" },
  { key: "3", value: "National Guard", text: "National Guard" },
  { key: "4", value: "Veteran", text: "Veteran" },
  { key: "5", value: "Armed forces reserve", text: "Armed forces reserve" },
  { key: "6", value: "Spouse/Dependent", text: "Spouse/Dependent" },
];

// Datepicker note: see https://stackblitz.com/edit/demo-react-formik-datepicker

// Component

const Optional = () => {
  const [countryOptions, setCountries] = useState([]);

  useEffect(() => {
    // Fetch country options.
    fetchCountries().then(data => {
      // Set state on countryOptions.
      setCountries(data);
    });
  }, []); // Run only once

  return (
    <>
      <h3>More about me</h3>
      <RfiSelect
        label="Country of citizenship"
        id="CitizenshipCountry"
        name="CitizenshipCountry"
        options={countryOptions}
      />
      {/*
      <RfiCheckboxSingle id="notCitizen" name="notCitizen" value="1">
        I am not a U.S. citizen and do not have a green card.
      </RfiCheckboxSingle> */}
      <RfiTextInput label="Address" id="Street1" name="Street1" />
      <RfiTextInput label="City" id="City" name="City" />
      <RfiSelect
        label="Country"
        id="Country"
        name="Country"
        options={countryOptions}
      />
      <RfiTextInput
        label="State or Province - TODO" // TODO make select - dependent on country...
        id="State"
        name="State"
      />
      <RfiTextInput label="Zipcode" id="Zip" name="Zip" />
      <RfiDatepicker
        label="Date of Birth"
        id="BirthDate"
        name="BirthDate"
        dateFormat="MM/dd/yyyy"
        className="form-control"
        placeholderText="MM/DD/YYYY"
      />
      <RfiRadioGroup
        label="U.S. Veteran admission information and services"
        id="MilitaryStatus"
        name="MilitaryStatus"
        options={veteranStatusOptions}
      />
      <RfiTextArea
        label="Additional assistance requested"
        id="Comments"
        name="Comments"
      />
      <div>TODO consent wording to go here, dependent on campus selection</div>
    </>
  );
};

// Step configs

const optionalForm = {
  component: Optional,
  validationSchema: {
    CitizenshipCountry: Yup.string(),
    // notCitizen: Yup.string(),
    Street1: Yup.string(),
    City: Yup.string(),
    State: Yup.string(),
    Country: Yup.string(),
    BirthDate: Yup.date(),
    Zip: Yup.string(), // TODO default to * ZipCode *
    MilitaryStatus: Yup.string(),
    Comments: Yup.string().max(250, "Too long. 250 characters maximum."),
  },

  initialValues: {
    CitizenshipCountry: undefined,
    // notCitizen: undefined,
    Street1: undefined,
    City: undefined,
    State: undefined,
    Country: undefined,
    Zip: undefined,
    BirthDate: undefined,
    MilitaryStatus: undefined,
    Comments: undefined,
  },
};

export { optionalForm };

/*
FIELDS
- CitizenshipCountry
- Street1 (address)
- City
- Country // TODO default to country identified by phone number
- State // TODO update options based on Country
- Zip - // TODO default to ZipCode from first page
- BirthDate
- MilitaryStatus
- Comments
- [markup] Consent wording

HIDDEN FIELDS
- Test - 1 or nothing
- Source
- URL
- ga_clientid

- ??? hash/client id

*/
