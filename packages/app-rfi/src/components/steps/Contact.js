// @ts-check
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { RfiTextInput, RfiSelect, RfiCheckboxSingle } from "../controls";

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
              // Check chunks by logging to the console
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
      console.log(results, "Results");
      // TODO set up local country data be used as a fallback if we don't get any.
      // TODO log if we didn't get results and had to use fallback.
      return results;
    })
    .catch(error => new Error(error));
}

// Component
const Contact = () => {
  const [countryOptions, setCountries] = useState([]);

  useEffect(() => {
    // Fetch country options.
    fetchCountries().then(data => {
      // Set state on countryOptions.
      setCountries(data);
    });
  }, []); // Run only once.

  return (
    <>
      <h3>Contact info</h3>
      <RfiTextInput label="Phone" id="phone" name="phone" requiredIcon />
      <RfiCheckboxSingle id="mobile" name="mobile" value="1">
        This is a USA mobile number and I would like to receive information via
        SMS text messaging
      </RfiCheckboxSingle>
      <RfiSelect
        label="Country"
        id="country"
        name="country"
        options={countryOptions}
        requiredIcon
      />
      <RfiTextInput label="Postal code (TODO)" name="zipcode" requiredIcon />
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
    mobile: Yup.string(),
    country: Yup.string().required("Required"),
    zipcode: Yup.string().required("Required"), // TODO Required only if countyry is US.
  },

  initialValues: {
    phone: undefined,
    mobile: undefined,
    country: undefined,
    zipcode: undefined,
  },
};

export default contactForm;

/*
- phone number
- is mobile number [checkbox]
- country
- postal code
*/
