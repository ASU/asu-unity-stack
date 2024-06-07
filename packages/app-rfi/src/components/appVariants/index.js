import React from "react";
import * as Yup from "yup";

import { KEY } from "../../core/utils/constants";
import { AboutMe, aboutMeForm } from "../steps/AboutMe";
import { Optional, optionalForm } from "../steps/Optional";
import { ProgramInterest, programInterestForm } from "../steps/ProgramInterest";
import { Campus } from "../steps/questions/Campus";
import { CareerAndStudentType } from "../steps/questions/CareerAndStudentType.js";
import { Interest1 } from "../steps/questions/Interest1";
import { Interest2 } from "../steps/questions/Interest2";
import { EmailAddress } from "../steps/questions/EmailAddress.js";
import { FirstName } from "../steps/questions/FirstName.js";
import { LastName } from "../steps/questions/LastName.js";
import { Phone } from "../steps/questions/Phone.js";
import { ZipCode } from "../steps/questions/ZipCode.js";
import { EntryTerm } from "../steps/questions/EntryTerm.js";
import { GdprConsent } from "../steps/questions/GdprConsent.js";

const Step = ({ children }) => children;

const variants = {
  rfiVariant1: [
    <Step
      section="Request information"
      onSubmit={(values, bag) => {
        console.log("Step1 onSubmit");
      }}
      validationSchema={Yup.object({
        Campus: Yup.string().required(
          "Error: Which applies to you is required"
        ),
        CareerAndStudentType: Yup.string().required(
          "Error: Student status is required"
        ),
        Interest1: Yup.string().required("Error: Area of Interest is required"),
        Interest2: Yup.string().required(
          "Error: Program of Interest is required"
        ),
      })}
    >
      <h2>Request information</h2>
      <p className="rfi-step1-intro">
        To learn more about ASU or a specific program, fill out the form below
        then check your email.
      </p>
      <Campus />
      <CareerAndStudentType />
      <Interest1 />
      <Interest2 />

      <EmailAddress />
      <FirstName />
      <LastName />
      <Phone />
      <ZipCode />
      <EntryTerm />
      <GdprConsent />
    </Step>,
  ],
  rfiVariant2: [
    <Step
      section="Request information"
      onSubmit={(values, bag) => {
        console.log("Step1 onSubmit");
      }}
      validationSchema={Yup.object(programInterestForm.validationSchema)}
      initialValues={programInterestForm.initialValues}
      validate={(
        values,
        { programOfInterest, programOfInterestOptional, areaOfInterestOptional }
      ) => {
        const errors = {};
        // const { programOfInterest, programOfInterestOptional } = props;
        // If on step 1 and Interest1 is empty and we don't have a
        // ProgramOfInterest (aka Interest2) prop, require Interest1.
        if (areaOfInterestOptional && !values.Interest1 && !programOfInterest) {
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
      <p className="rfi-step1-intro">
        To learn more about ASU or a specific program, fill out the form below
        then check your email.
      </p>
      <Campus />
      <CareerAndStudentType />
      <Interest1 />
      <Interest2 />
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
  rfiVariant3: [
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
