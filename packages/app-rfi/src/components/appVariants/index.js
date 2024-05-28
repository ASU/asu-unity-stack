import React from "react";
import * as Yup from "yup";

import { KEY } from "../../core/utils/constants";
import { AboutMe, aboutMeForm } from "../steps/AboutMe";
import { Optional, optionalForm } from "../steps/Optional";
import { ProgramInterest, programInterestForm } from "../steps/ProgramInterest";

const Step = ({ children }) => children;

const variants = {
  AppVariant1: [
    <Step
      section="Request information"
      onSubmit={(values, bag) => {
        console.log("Step1 onSubmit");
      }}
      validationSchema={Yup.object({
        ...programInterestForm.validationSchema,
        ...aboutMeForm.validationSchema,
      })}
      initialValues={programInterestForm.initialValues}
      validate={(values, { programOfInterest, programOfInterestOptional }) => {
        const errors = {};
        // const { programOfInterest, programOfInterestOptional } = props;
        // If on step 1 and Interest1 is empty and we don't have a
        // ProgramOfInterest (aka Interest2) prop, require Interest1.
        if (!values.Interest1 && !programOfInterest) {
          errors.Interest1 = "Error: Area of Interest is required";
        }
        // If on step 1 and Interest2 is empty, and is not optional or campus is
        // ONLNE, require Interest2.
        if (
          !values.Interest2 &&
          (!programOfInterestOptional || values.Campus === KEY.ONLINE)
        ) {
          errors.Interest2 = "Error: Program of Interest is required";
        }
        // If on step 2 and Campus isn't ONLNE, EntryTerm is required.
        if (values.Campus !== KEY.ONLINE && !values.EntryTerm) {
          errors.EntryTerm = "Error: Entry term is required";
        }

        return errors;
      }}
    >
      <h2>Request information</h2>
      <ProgramInterest />

      <AboutMe />
    </Step>,
  ],
  AppVariant2: [
    <Step
      section="Request information"
      onSubmit={(values, bag) => {
        console.log("Step1 onSubmit");
      }}
      validationSchema={Yup.object(programInterestForm.validationSchema)}
      initialValues={programInterestForm.initialValues}
      validate={(values, { programOfInterest, programOfInterestOptional }) => {
        const errors = {};
        // const { programOfInterest, programOfInterestOptional } = props;
        // If on step 1 and Interest1 is empty and we don't have a
        // ProgramOfInterest (aka Interest2) prop, require Interest1.
        if (!values.Interest1 && !programOfInterest) {
          errors.Interest1 = "Error: Area of Interest is required";
        }
        // If on step 1 and Interest2 is empty, and is not optional or campus is
        // ONLNE, require Interest2.
        if (
          !values.Interest2 &&
          (!programOfInterestOptional || values.Campus === KEY.ONLINE)
        ) {
          errors.Interest2 = "Error: Program of Interest is required";
        }

        return errors;
      }}
    >
      <h2>Request information</h2>
      <ProgramInterest />
    </Step>,
    <Step
      section="About me"
      onSubmit={() => console.log("Step2 onSubmit")}
      validationSchema={Yup.object(aboutMeForm.validationSchema)}
      initialValues={aboutMeForm.initialValues}
      validate={values => {
        const errors = {};
        // If on step 2 and Campus isn't ONLNE, EntryTerm is required.
        if (values.Campus !== KEY.ONLINE && !values.EntryTerm) {
          errors.EntryTerm = "Error: Entry term is required";
        }
        return errors;
      }}
    >
      <h3>About me</h3>
      <AboutMe />
    </Step>,
  ],
  AppVariant3: [
    <Step
      section="Request information"
      onSubmit={(values, bag) => {
        console.log("Step1 onSubmit");
      }}
      validationSchema={Yup.object(programInterestForm.validationSchema)}
      initialValues={programInterestForm.initialValues}
      validate={(values, { programOfInterest, programOfInterestOptional }) => {
        const errors = {};
        // const { programOfInterest, programOfInterestOptional } = props;
        // If on step 1 and Interest1 is empty and we don't have a
        // ProgramOfInterest (aka Interest2) prop, require Interest1.
        if (!values.Interest1 && !programOfInterest) {
          errors.Interest1 = "Error: Area of Interest is required";
        }
        // If on step 1 and Interest2 is empty, and is not optional or campus is
        // ONLNE, require Interest2.
        if (
          !values.Interest2 &&
          (!programOfInterestOptional || values.Campus === KEY.ONLINE)
        ) {
          errors.Interest2 = "Error: Program of Interest is required";
        }

        return errors;
      }}
    >
      <h2>Request information</h2>
      <ProgramInterest />
    </Step>,
    <Step
      section="About me"
      onSubmit={() => console.log("Step2 onSubmit")}
      validationSchema={Yup.object(aboutMeForm.validationSchema)}
      initialValues={aboutMeForm.initialValues}
      validate={values => {
        const errors = {};
        // If on step 2 and Campus isn't ONLNE, EntryTerm is required.
        if (values.Campus !== KEY.ONLINE && !values.EntryTerm) {
          errors.EntryTerm = "Error: Entry term is required";
        }
        return errors;
      }}
    >
      <h3>About me</h3>
      <AboutMe />
    </Step>,
    <Step
      section="More about me"
      onSubmit={() => console.log("Step3 onSubmit")}
      validationSchema={Yup.object(optionalForm.validationSchema)}
      initialValues={optionalForm.initialValues}
    >
      <Optional />
    </Step>,
  ],
};

export { variants };
