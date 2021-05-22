// @ts-check
import PropTypes from "prop-types";
import React from "react";

// @ts-ignore
import RfiImage from "../../../img/WS2-DefaultImagev01-Final.png";
import { aboutMeForm } from "../steps/AboutMe";
import { optionalForm } from "../steps/Optional";
import { programInterestForm } from "../steps/ProgramInterest";
import { RfiStepper } from "./RfiStepper";

const RfiMainForm = ({ rfiConfig }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 ">
          <div className="uds-image-text-block-container">
            <div className="uds-image-text-block-image-container">
              <img
                src={RfiImage}
                className="img-fluid"
                alt="Random. REPLACE with appropriate alt text for accessibility."
              />
            </div>
            <div className="uds-image-text-block-text-container">
              <RfiStepper
                rfiConfig={rfiConfig}
                validationSchemas={[
                  programInterestForm.validationSchema,
                  aboutMeForm.validationSchema,
                  optionalForm.validationSchema,
                ]}
                initialValues={[
                  programInterestForm.initialValues,
                  aboutMeForm.initialValues,
                  optionalForm.initialValues,
                ]}
                formComponents={[
                  programInterestForm.component,
                  aboutMeForm.component,
                  optionalForm.component,
                ]}
                handleSubmit={value => {
                  // eslint-disable-next-line no-undef
                  alert(`SUBMITTED FORM \n${JSON.stringify(value, null, 2)}`);

                  // TODO Build payload... notes:
                  // - derive Career and StudentType based on CareerAndStudentType
                  //   - Career: Undergraduate, Graduate
                  //   - StudentType: First Time Freshman, Transfer // TODO clarification sought in MVP doc. Check back.

                  // TODO need confirmation page... see current web standards: https://brandguide.asu.edu/executing-the-brand/web-and-mobile/web-standards/academic/rfi-request-information

                  // GOOD STUFF BELOW
                  // We have a good source of code and various service calls we may be
                  // able to leverage, from the WP RFI plugin:
                  // https://github.com/asu-ke-web-services/ASU-RFI-WordPress-Plugin
                  // The list of attributes in the README might serve as a good
                  // indication of the props we'll want to use.
                  // See the service call code in
                  // https://github.com/asu-ke-web-services/ASU-RFI-WordPress-Plugin/tree/develop/src/services
                  // Including... the ASU Degree Service docs:
                  // http://www.public.asu.edu/~lcabre/javadocs/dsws/
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
  rfiConfig: {
    Campus: undefined,
    College: undefined,
    Department: undefined,
    StudentType: undefined,
    AreaOfInterest: undefined,
    ProgramOfInterest: undefined,
    State: undefined,
    SuccessMsg: "Success.",
    Test: 0,
  },
};

RfiMainForm.propTypes = {
  rfiConfig: PropTypes.instanceOf(Object),
};

export { RfiMainForm };
