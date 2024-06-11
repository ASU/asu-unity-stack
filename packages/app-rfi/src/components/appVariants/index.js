import React from "react";

import {
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
  validation,
} from "../steps/questions";

const Step = ({ children }) => children;

const variants = {
  rfiVariant1: [
    <Step validationSchema={validation}>
      <h2>Request information</h2>
      <p className="rfi-step1-intro">
        To learn more about ASU or a specific program, fill out the form below
        then check your email.
      </p>
      <Campus />
      <CareerAndStudentType />
      <Interest1 />
      <Interest2 />
      <CampusProgramHasChoice />
      <EmailAddress />
      <FirstName />
      <LastName />
      <Phone />
      <ZipCode />
      <Country />
      <EntryTerm />
      <MilitaryStatus />
      <GdprConsent />
    </Step>,
  ],
  rfiVariant2: [
    <Step
      section="Request information"
      validationSchema={{
        Campus: validation.Campus,
        CareerAndStudentType: validation.CareerAndStudentType,
        Interest1: validation.Interest1,
        Interest2: validation.Interest2,
        CampusProgramHasChoice: validation.CampusProgramHasChoice,
      }}
    >
      <h4>Step 1 of 2</h4>
      <h2>Request information</h2>
      <p className="rfi-step1-intro">
        To learn more about ASU or a specific program, fill out the form below
        then check your email.
      </p>
      <Campus />
      <CareerAndStudentType />
      <Interest1 />
      <Interest2 />
      <CampusProgramHasChoice />
    </Step>,
    <Step
      section="About me"
      validationSchema={{
        EmailAddress: validation.EmailAddress,
        FirstName: validation.FirstName,
        LastName: validation.LastName,
        Phone: validation.Phone,
        ZipCode: validation.ZipCode,
        Country: validation.Country,
        EntryTerm: validation.EntryTerm,
        MilitaryStatus: validation.MilitaryStatus,
        GdprConsent: validation.GdprConsent,
      }}
    >
      <h4>Step 2 of 2</h4>
      <h2>About me</h2>
      <EmailAddress />
      <FirstName />
      <LastName />
      <Phone />
      <ZipCode />
      <Country />
      <EntryTerm />
      <MilitaryStatus />
      <GdprConsent />
    </Step>,
  ],
};

export { variants };
