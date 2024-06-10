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
import { EmailAddress } from "../steps/questions/EmailAddress";
import { FirstName } from "../steps/questions/FirstName";
import { LastName } from "../steps/questions/LastName";
import { Phone } from "../steps/questions/Phone";
import { ZipCode } from "../steps/questions/ZipCode";
import { EntryTerm } from "../steps/questions/EntryTerm";
import { GdprConsent } from "../steps/questions/GdprConsent";
import { Country } from "../steps/questions/Country.js";
import { MilitaryStatus } from "../steps/questions/MilitaryStatus.js";
import { CampusProgramHasChoice } from "../steps/questions/CampusProgramHasChoice.js";

const Step = ({ children }) => children;

const variants = {
  rfiVariant1: [
    <Step>
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
    <Step section="Request information">
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
    <Step section="About me">
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
