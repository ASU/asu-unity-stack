// @ts-check
/* eslint-disable react/no-danger */
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { trackGAEvent } from "../../core/services/googleAnalytics";
import {
  RfiTextInput,
  RfiTextArea,
  RfiEmailInput,
  RfiSelect,
  RfiPhone,
  RfiCheckboxSingle,
} from "../controls";

const defaultInputEvent = {
  event: "form",
  action: "click",
  name: "onclick",
  type: "click",
  region: "main content",
  component: "step 2 of 3",
};

// Components

const RfiGdpr = ({ campus }) => (
  <div className="rfi-consent">
    <div className="rfi-consent-wording">
      <p>
        By submitting my information, I consent to ASU contacting me about
        campus{" "}
        {campus === "ONLINE"
          ? "educational services using automated calls, prerecorded voice messages, SMS/text messages or email at the information provided above"
          : "education services using email, direct mail, SMS/texting and digital platforms"}
        . Message and data rates may apply. Consent is not required to receive
        services, and I may call ASU directly at{" "}
        <a href="tel:8662776589">866-277-6589</a>. I consent to ASU’s{" "}
        <a href="https://asuonline.asu.edu/text-terms/">
          mobile terms and conditions
        </a>
        , and{" "}
        <a href="https://asuonline.asu.edu/web-analytics-privacy-2/">
          Privacy Statements
        </a>
        , including the European Supplement.
      </p>
    </div>
    <RfiCheckboxSingle
      id="GdprConsent"
      name="GdprConsent"
      value="1"
      requiredIcon
      required
      onBlur={e => {
        trackGAEvent({
          ...defaultInputEvent,
          action: e.target.checked ? "click" : "unclick",
          event: "select",
          type: "checkbox",
          section: "about me",
          text: "i consent",
        });
      }}
    >
      I consent
    </RfiCheckboxSingle>
  </div>
);
const AboutMe = () => {
  const [termOptions, setTermOptions] = useState([]);

  // Surface values from Formik context
  const { values } = useFormikContext();

  // Term options
  useEffect(() => {
    // IF degree is graduate and values.Campus !== ONLNE, call and get terms
    // for the specific program.
    if (
      values.Campus !== "ONLNE" &&
      values.CareerAndStudentType === "Readmission"
    ) {
      // Degree Search REST API
      if (values.Interest2) {
        const serviceUrl = `https://degreesearch-proxy.apps.asu.edu/degreesearch/?init=false&method=findDegreeByAcadPlan&acadPlan=${values.Interest2}&fields=applyInfo&program=graduate&cert=false`;
        // Alternate field graduateAllApplyDates has similar data, but lacks a
        // good label and appears like it might have more dupes.

        fetch(serviceUrl)
          .then(response => response.json())
          .then(data => {
            // Structure of response: data.programs[0].applyInfo
            const {
              programs: [{ applyInfo }],
            } = data;
            // Convert object to array so we can .sort and .map.
            const termData = Object.entries(applyInfo)
              .sort((a, b) => (a[1] > b[1] ? 1 : -1))
              .map(termValue => ({
                key: termValue[0].split(":")[2],
                value: `${termValue[0].split(":")[2]}:${
                  termValue[1].split(":")[0]
                }`,
                text: termValue[1].split(":")[0],
              }));
            // Dedupe based on object key property as dupe terms can occur due
            // to multiple campus offerings.
            // Explanation: https://stackoverflow.com/a/56768137
            const dedupedTermData = [
              ...new Map(termData.map(item => [item.key, item])).values(),
            ];
            setTermOptions(dedupedTermData);
          })
          .catch(error => new Error(error));
      }
    } else {
      // ELSE default to undergrad and build our own options.

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
            value: `${termSpring}:${year} Spring`,
            text: `${year} Spring`,
          });
        }
        // Drop fall for current year if currMo is greater than June.
        if (i > 0 || currMo < 6) {
          // Month is based off zero index.
          termData.push({
            key: termFall,
            value: `${termFall}:${year} Fall`,
            text: `${year} Fall`,
          });
        }
      }
      setTermOptions(termData);
    }
  }, []); // Run once. If user changes degree, runs again on return to the step.

  return (
    <>
      <h3>About me</h3>
      <RfiEmailInput
        label="Email Address"
        id="EmailAddress"
        name="EmailAddress"
        requiredIcon
        required
        autoFocus
        onBlur={e =>
          trackGAEvent({
            ...defaultInputEvent,
            section: "about me ^ email address​",
            text: e.target.value,
          })
        }
      />
      <RfiTextInput
        label="First name"
        id="FirstName"
        name="FirstName"
        requiredIcon
        required
        helperText="First name"
        onBlur={e =>
          trackGAEvent({
            ...defaultInputEvent,
            section: "about me ^ first name",
            text: e.target.value,
          })
        }
      />
      <RfiTextInput
        label="Last name"
        id="LastName"
        name="LastName"
        requiredIcon
        required
        helperText="Last name"
        onBlur={e =>
          trackGAEvent({
            ...defaultInputEvent,
            section: "about me ^ last name",
            text: e.target.value,
          })
        }
      />
      <RfiPhone
        label="Phone"
        id="Phone"
        name="Phone"
        requiredIcon
        required
        onBlur={e =>
          trackGAEvent({
            ...defaultInputEvent,
            section: "about me ^ phone number​",
            text: e.target.value,
          })
        }
      />
      <RfiTextInput
        label="Postal code"
        id="ZipCode"
        name="ZipCode"
        requiredIcon={values.Campus !== "ONLNE"}
        required={values.Campus !== "ONLNE"}
        onBlur={e =>
          trackGAEvent({
            ...defaultInputEvent,
            section: "about me ^ zip code​",
            text: e.target.value,
          })
        }
      />
      {termOptions.length ? (
        <RfiSelect
          label="When do you anticipate starting at ASU?"
          id="EntryTerm"
          name="EntryTerm"
          options={termOptions}
          requiredIcon={values.Campus !== "ONLNE"}
          required={values.Campus !== "ONLNE"}
          onBlur={e =>
            trackGAEvent({
              ...defaultInputEvent,
              event: "select",
              type: "When do you anticipate starting at ASU?",
              section: "about me ^ When do you anticipate starting at ASU?​",
              text: e.target.selectedOptions[0].innerText,
            })
          }
        />
      ) : (
        <RfiTextArea
          label="When do you anticipate starting at ASU?"
          id="EntryTerm"
          name="EntryTerm"
          helperText="The program you are interested in is not accepting new students at this time. Please select a different program of interest, and then select the semester you would like to start."
          disabled
          requiredIcon={values.Campus !== "ONLNE"}
          required={values.Campus !== "ONLNE"}
          onBlur={e =>
            trackGAEvent({
              ...defaultInputEvent,
              section: "about me ^ When do you anticipate starting at ASU?​",
              text: e.target.value,
            })
          }
        />
      )}
      <RfiGdpr campus={values.Campus} />
    </>
  );
};

// Step configs

const aboutMeForm = {
  component: AboutMe,

  validationSchema: {
    EmailAddress: Yup.string()
      .email("Error: Invalid email")
      .required("Error: Email is required"),
    FirstName: Yup.string()
      .min(2, "Error: First name is too short")
      .max(64, "Error: First name is too long")
      .required("Error: First name is required"),
    LastName: Yup.string()
      .min(2, "Error: First name is too short")
      .max(64, "Error: First name is too long")
      .required("Error: Last name is required"),
    Phone: Yup.string()
      .min(4, "Error: Phone is too short")
      .max(20, "Error: Phone is too long")
      // Not happy with how this performs, but leaving here for possible future
      // implementation. Interaction with PhoneInput complicates behavior.
      // .matches(
      //   // Based on regex from Simple React Validator
      //   /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      //   "Error: Phone number is not valid"
      // )
      .required("Error: Phone is required"),
    // ZipCode and EnteryTerm are required if campus != online. Conditional
    // validation is deferred to Formik and implemented via customValidate() in
    // RfiTextInput.js and RfiSelect.js for better access to sibling field
    // values thru useFormikContext.
    ZipCode: Yup.string(),
    EntryTerm: Yup.string(),
    GdprConsent: Yup.boolean()
      .required("Error: Consent is required")
      .oneOf([true], "Consent is required"),
  },

  initialValues: {
    EmailAddress: undefined,
    FirstName: undefined,
    LastName: undefined,
    Phone: undefined,
    ZipCode: undefined,
    EntryTerm: undefined,
    GdprConsent: undefined,
  },
};

// Props

RfiGdpr.propTypes = {
  campus: PropTypes.string.isRequired,
};

export { aboutMeForm };
