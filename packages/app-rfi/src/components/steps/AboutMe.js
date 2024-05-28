// @ts-check
/* eslint-disable react/no-danger */
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { trackGAEvent } from "../../../../../shared";
import { KEY } from "../../core/utils/constants";
import { fetchDegreesData } from "../../core/utils/fetchPrograms";
import { useRfiContext } from "../../core/utils/rfiContext";
import {
  RfiTextInput,
  RfiTextArea,
  RfiEmailInput,
  RfiSelect,
  RfiPhone,
  RfiCheckboxSingle,
} from "../controls";
import { GdprConsent } from "./GdprConsent";

const defaultInputEvent = {
  event: "form",
  action: "click",
  name: "onclick",
  type: "click",
  region: "main content",
  component: "step 2 of 3",
};

// Components

const getGenericTermOptions = () => {
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
  return termData;
};

export const AboutMe = () => {
  const [termOptions, setTermOptions] = useState(getGenericTermOptions());
  const { degreeData } = useRfiContext();

  // Surface values from Formik context
  const { values } = useFormikContext();

  // Term options
  useEffect(() => {
    // IF degree is graduate and values.Campus !== ONLNE, call and get terms
    // for the specific program.
    if (
      values.Campus !== KEY.ONLNE &&
      values.CareerAndStudentType === KEY.READMISSION
    ) {
      // Degree Search REST API
      if (values.Interest2) {
        // Convert object to array so we can .sort and .map.
        const termData = degreeData.applicationDeadlines
          ?.sort((a, b) => (a.strm > b.strm ? 1 : -1))
          .map(({ strm, strmDescription }, i) => ({
            key: `${i}`,
            value: strm,
            text: strmDescription,
          }));
        if (termData && termData.length > 0) {
          setTermOptions(termData);
        }
      }
    }
  }, []); // Run once. If user changes degree, runs again on return to the step.

  return (
    <>
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
        requiredIcon={values.Campus !== KEY.ONLNE}
        required={values.Campus !== KEY.ONLNE}
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
          requiredIcon={values.Campus !== KEY.ONLNE}
          required={values.Campus !== KEY.ONLNE}
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
          requiredIcon={values.Campus !== KEY.ONLNE}
          required={values.Campus !== KEY.ONLNE}
          onBlur={e =>
            trackGAEvent({
              ...defaultInputEvent,
              section: "about me ^ When do you anticipate starting at ASU?​",
              text: e.target.value,
            })
          }
        />
      )}
      <GdprConsent campus={values.Campus} />
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
    ZipCode: Yup.string().max(
      10,
      "Error: a maximum of 10 characters is allowed for postal code."
    ),
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

export { aboutMeForm };
