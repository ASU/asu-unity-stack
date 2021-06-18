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
import { setClientId, pushDataLayerEventToGa } from "../utils/google-analytics";
import {
  submissionFormFieldPrep,
  submissionSetHiddenFields,
} from "../utils/submission-helpers";

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
                  // MARSHALL FIELDS FOR THE PAYLOAD

                  submissionFormFieldPrep(value);
                  submissionSetHiddenFields(value, Test);

                  // Patch ASUOnline clientid or enterpriseclientid and also
                  // ga_clientid onto value.
                  // TODO Confirm sourcing for ga_clientid
                  setClientId(value);

                  // Google Analytics push to simulate submit button click
                  // after validation has occurred.
                  pushDataLayerEventToGa("rfi-submit");

                  // eslint-disable-next-line no-alert
                  alert(`SUBMITTED FORM \n${JSON.stringify(value, null, 2)}`);

                  fetch(
                    // TODO TODO TODO UPDATE TEST URL TO POINT TO CLIENT PROXY
                    `http://echo.jsontest.com/${JSON.stringify(
                      value,
                      null,
                      2
                    )}`,
                    {
                      method: "POST",
                      // We convert the React state to JSON and send it as the POST body
                      body: JSON.stringify(JSON.stringify(value, null, 2)),
                    }
                  ).then(function (response) {
                    console.log(response);
                    return response.json();
                  });
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
  SuccessMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
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
