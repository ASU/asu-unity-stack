// @ts-check
/* eslint-disable react/no-danger */
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import {
  RfiTextInput,
  RfiEmailInput,
  RfiSelect,
  RfiPhone,
  RfiCheckboxSingle,
} from "../controls";

function createMarkup(output) {
  return { __html: output };
}

// Components

const RfiGdpr = ({ campus }) => {
  let gdprWording = `By submitting my information, I consent to ASU contacting me about educational services using email, direct mail, SMS/texting and digital platforms. Message and data rates may apply. Consent is not required to receive services, and I can unsubscribe at any time by contacting UnsubFutureStudentComm@asu.edu. I consent to ASU’s <a href="https://asuonline.asu.edu/text-terms/">mobile terms and conditions</a>, and <a href="https://asuonline.asu.edu/web-analytics-privacy-2/">Privacy Statements</a>, including the European Supplement.`;
  if (campus === "ONLNE") {
    gdprWording = `By submitting my information, I consent to ASU contacting me about educational services using automated calls, prerecorded voice messages, SMS/text messages or email at the information provided above. Message and data rates may apply. Consent is not required to receive services, and I may call ASU directly at <a href="tel:8662776589">866-277-6589</a>. I consent to ASU’s <a href="https://asuonline.asu.edu/text-terms/">mobile terms and conditions</a>, and <a href="https://asuonline.asu.edu/web-analytics-privacy-2/">Privacy Statements</a>, including the European Supplement.`;
  }
  return (
    <div className="rfi-consent">
      <div
        className="rfi-consent-wording"
        dangerouslySetInnerHTML={createMarkup(gdprWording)}
      />
      <RfiCheckboxSingle
        id="GdprConsent"
        name="GdprConsent"
        value="1"
        requiredIcon
      >
        I consent
      </RfiCheckboxSingle>
    </div>
  );
};

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
            setTermOptions(
              // Convert object to array so we can .sort and .map.
              Object.entries(applyInfo)
                .sort((a, b) => (a[1] > b[1] ? 1 : -1))
                .map(termValue => ({
                  value: termValue[0].split(":")[2],
                  label: termValue[1].split(":")[0],
                }))
            );
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
            value: termSpring,
            label: `${year} Spring`,
          });
        }
        // Drop fall for current year if currMo is greater than June.
        if (i > 0 || currMo < 6) {
          // Month is based off zero index.
          termData.push({
            value: termFall,
            label: `${year} Fall`,
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
      <RfiPhone label="Phone" id="Phone" name="Phone" requiredIcon />
      <RfiTextInput
        label="Postal code"
        id="ZipCode"
        name="ZipCode"
        requiredIcon={values.Campus !== "ONLNE"}
      />
      <RfiSelect
        label="When do you anticipate starting at ASU?"
        id="EntryTerm"
        name="EntryTerm"
        options={termOptions}
        requiredIcon={values.Campus !== "ONLNE"}
      />
      <RfiGdpr campus={values.Campus} />
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
    Phone: Yup.string().max(30, "Too long").required("Required"),
    // ZipCode and EnteryTerm are required if campus != online. Conditional
    // validation is deferred to Formik and implemented via customValidate() in
    // RfiTextInput.js and RfiSelect.js for better access to sibling field
    // values thru useFormikContext.
    ZipCode: Yup.string(),
    EntryTerm: Yup.string(),
    GdprConsent: Yup.boolean()
      .required("Consent is required")
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
