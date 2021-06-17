// @ts-check
import PropTypes from "prop-types";
import React from "react";

// @ts-ignore
import RfiImage from "../../../img/WS2-DefaultImagev01-Final.png";
import { aboutMeForm } from "../steps/AboutMe";
import { optionalForm } from "../steps/Optional";
import { programInterestForm } from "../steps/ProgramInterest";
import { successForm } from "../steps/Success";
import { RfiStepper } from "./RfiStepper";
import { getClientId } from "../utils/google-analytics";

const RfiMainForm = ({
  Campus,
  College,
  Department,
  StudentType,
  AreaOfInterest,
  ProgramOfInterest,
  ProgramOfInterestOptional,
  IsCertMinor,
  Country,
  StateProvince,
  SuccessMsg,
  Test,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 ">
          <div className="uds-image-text-block-container">
            <div className="uds-image-text-block-image-container">
              <img src={RfiImage} className="img-fluid" alt="" />
            </div>
            <div className="uds-image-text-block-text-container">
              <RfiStepper
                Campus={Campus}
                College={College}
                Department={Department}
                StudentType={StudentType}
                AreaOfInterest={AreaOfInterest}
                ProgramOfInterest={ProgramOfInterest}
                ProgramOfInterestOptional={ProgramOfInterestOptional}
                IsCertMinor={IsCertMinor}
                Country={Country}
                StateProvince={StateProvince}
                SuccessMsg={SuccessMsg}
                Test={Test}
                validationSchemas={[
                  programInterestForm.validationSchema,
                  aboutMeForm.validationSchema,
                  optionalForm.validationSchema,
                  successForm.validationSchema,
                ]}
                initialValues={[
                  programInterestForm.initialValues,
                  aboutMeForm.initialValues,
                  optionalForm.initialValues,
                  successForm.initialValues,
                ]}
                formComponents={[
                  programInterestForm.component,
                  aboutMeForm.component,
                  optionalForm.component,
                  successForm.component,
                ]}
                handleSubmit={value => {
                  // TODO While waiting using next lines, isSubmitting
                  // isn't honored re: submit button disabling - see disabled
                  // on submit button. Not a big deal due to immediate advance
                  // to success page. Probably doesn't need an effort.
                  // handleSubmit={async value => {
                  // await new Promise(r => setTimeout(r, 2000));

                  // Get enterpriseclientid from ASUOnline.
                  const asuoClientId = getClientId();

                  // Push to GA.
                  // @ts-ignore
                  if (typeof dataLayer != "undefined") {
                    // @ts-ignore
                    dataLayer.push({ event: "rfi-submit" });
                  }

                  // eslint-disable-next-line no-alert
                  alert(`SUBMITTED FORM \n${JSON.stringify(value, null, 2)}`);

                  // TODO Build payload... notes:
                  // - derive Career and StudentType based on CareerAndStudentType
                  //   - Career: Undergraduate, Graduate
                  //   - StudentType: First Time Freshman, Transfer // TODO clarification sought in MVP doc. Check back.
                  // - hidden fields:
                  //   - Test
                  //   - source (added by host site via proxy)
                  //   - URL
                  //   - ga_client id
                  //   - enterpriseclientid
                  //   - datetime
                  //   - more? confirm. international should be added by lambda

                  // TODO confirmation page needs green checkbox...
                  //      see current web standards: https://brandguide.asu.edu/executing-the-brand/web-and-mobile/web-standards/academic/rfi-request-information
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Props
RfiMainForm.defaultProps = {
  Campus: undefined,
  College: undefined,
  Department: undefined,
  StudentType: undefined,
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined,
  SuccessMsg: "Success.",
  Test: false,
};

RfiMainForm.propTypes = {
  Campus: PropTypes.string,
  College: PropTypes.string,
  Department: PropTypes.string,
  StudentType: PropTypes.string,
  AreaOfInterest: PropTypes.string,
  ProgramOfInterest: PropTypes.string,
  ProgramOfInterestOptional: PropTypes.bool,
  IsCertMinor: PropTypes.bool,
  Country: PropTypes.string,
  StateProvince: PropTypes.string,
  SuccessMsg: PropTypes.string,
  Test: PropTypes.bool,
};

export { RfiMainForm };
