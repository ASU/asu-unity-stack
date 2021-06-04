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
      <RfiCheckboxSingle id="GdprConsent" name="GdprConsent" requiredIcon>
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
    // TODO IF graduate call for field graduateAllApplyDates then parse.
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
      <RfiPhone label="Phone" id="Phone" name="Phone" requiredIcon />
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
    // TODO MAYBE WE DON'T USE YUP FOR CONDITIONAL REQ VALIDATIONS?
    ZipCode: Yup.string().required("Required"), // TODO Required only if campus != online.
    // ZipCode: Yup.string().when("Campus", {
    //   is: "ONLNE",
    //   otherwise: d => d.required("Required"),
    //   // then: Yup.string(),
    //   // otherwise: Yup.string().required("Required"),
    // }), // TODO Required only if campus != online.
    // ZipCode: Yup.string().test(
    //   "test-zipcode",
    //   "Validation failure message",
    //   // eslint-disable-next-line no-unused-vars
    //   function ziptest(value, context) {
    //     // return value.length > 0;
    //     // console.log(values, "VAAAAAAAALUES");
    //     console.log(value, "VAAAAAAAALUE");
    //     console.log(context, "CONTEXXXXXXXT");
    //     return false;
    //   }
    // ),
    EntryTerm: Yup.string().required("Required"),
    GdprConsent: Yup.boolean()
      .required("Consent is required")
      .oneOf([true], "Consent is required"),
    // Dependencies from other steps
    // Campus: Yup.string(),
  },

  initialValues: {
    EmailAddress: undefined,
    FirstName: undefined,
    LastName: undefined,
    Phone: undefined,
    // mobile: undefined,
    ZipCode: undefined,
    EntryTerm: undefined,
    GdprConsent: undefined,
    // Dependencies from other steps, value set from formik context.
    // Campus: values.Campus,
  },
};

// Props

RfiGdpr.propTypes = {
  campus: PropTypes.string.isRequired,
};

export { aboutMeForm };

/*
FIELDS
- EmailAddress
- FirstName
- LastName
- Phone // TODO use Yup phone library
- ZipCode
- EntryTerm // TODO more logic and svc call based on if graduate / undergrad -- See notes in options function for REST service call
*/
