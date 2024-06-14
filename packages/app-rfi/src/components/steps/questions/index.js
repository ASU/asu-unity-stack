import * as Yup from "yup";

import { Campus } from "./Campus";
import { CampusProgramHasChoice } from "./CampusProgramHasChoice";
import { CareerAndStudentType } from "./CareerAndStudentType";
import { Country } from "./Country";
import { EmailAddress } from "./EmailAddress";
import { EntryTerm } from "./EntryTerm";
import { FirstName } from "./FirstName";
import { GdprConsent } from "./GdprConsent";
import { Interest1 } from "./Interest1";
import { Interest2 } from "./Interest2";
import { LastName } from "./LastName";
import { MilitaryStatus } from "./MilitaryStatus";
import { Phone } from "./Phone";
import { ZipCode } from "./ZipCode";

export const validation = {
  Campus: Yup.string().required("Error: Which applies to you is required"),
  CareerAndStudentType: Yup.string().required(
    "Error: Student status is required"
  ),
  Interest1: Yup.string().required("Error: Area of Interest is required"),
  Interest2: Yup.string().required("Error: Program of Interest is required"),
  EntryTerm: Yup.string().required("Error: Entry term is required"),
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
  GdprConsent: Yup.boolean()
    .required("Error: Consent is required")
    .oneOf([true], "Consent is required"),
  // CitizenshipCountry: Yup.string(),
  MilitaryStatus: Yup.string(),
};

export {
  Campus,
  CampusProgramHasChoice,
  CareerAndStudentType,
  Country,
  EmailAddress,
  EntryTerm,
  FirstName,
  GdprConsent,
  Interest1,
  Interest2,
  LastName,
  MilitaryStatus,
  Phone,
  ZipCode,
};
