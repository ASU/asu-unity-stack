// @ts-check
import PropTypes from "prop-types";
import React from "react";

// @ts-ignore
import RfiImage from "../../assets/img/WS2-DefaultImagev01-Final.png";
import { aboutMeForm } from "../steps/AboutMe";
import { optionalForm } from "../steps/Optional";
import { programInterestForm } from "../steps/ProgramInterest";
import { successForm } from "../steps/Success";
import { setClientId, pushDataLayerEventToGa } from "../utils/google-analytics";
import {
  submissionFormFieldPrep,
  submissionSetHiddenFields,
} from "../utils/submission-helpers";
import { RfiStepper } from "./RfiStepper";

const RfiMainForm = ({
  campus,
  actualCampus,
  college,
  department,
  studentType,
  areaOfInterest,
  programOfInterest,
  programOfInterestOptional,
  isCertMinor,
  country,
  stateProvince,
  successMsg,
  test,
  dataSourceDegreeSearch,
  dataSourceAsuOnline,
  dataSourceCountriesStates,
  submissionUrl,
}) => {
  return (
    <div className="container rfi-container-inner">
      <div className="row">
        <div className="col col-12 ">
          <div className="uds-image-text-block-container">
            <div className="uds-image-text-block-image-container">
              <img src={RfiImage} className="img-fluid" alt="" />
            </div>
            <div className="uds-image-text-block-text-container">
              <RfiStepper
                campus={campus}
                actualCampus={actualCampus}
                college={college}
                department={department}
                studentType={studentType}
                areaOfInterest={areaOfInterest}
                programOfInterest={programOfInterest}
                programOfInterestOptional={programOfInterestOptional}
                isCertMinor={isCertMinor}
                country={country}
                stateProvince={stateProvince}
                successMsg={successMsg}
                test={test}
                dataSourceDegreeSearch={dataSourceDegreeSearch}
                dataSourceAsuOnline={dataSourceAsuOnline}
                dataSourceCountriesStates={dataSourceCountriesStates}
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

                  let payload = value;
                  payload = submissionFormFieldPrep(payload);
                  payload = submissionSetHiddenFields(payload, test);

                  // Patch ASUOnline clientid or enterpriseclientid and also
                  // ga_clientid onto payload.
                  // TODO Confirm sourcing for ga_clientid
                  payload = setClientId(payload);

                  // Google Analytics push to simulate submit button click
                  // after validation has occurred.
                  pushDataLayerEventToGa("rfi-submit");

                  if (test) {
                    // eslint-disable-next-line no-alert
                    alert(
                      `SUBMITTED FORM \n${JSON.stringify(payload, null, 2)}`
                    );
                  }

                  fetch(
                    // NOTE: You can use relative URL for submission to client
                    // site proxy endpoint.
                    `${submissionUrl}`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      // We convert the payload to JSON and send it as the
                      // POST body.
                      body: JSON.stringify(payload),
                    }
                  )
                    .then(response => response.json())
                    .then(response => {
                      // eslint-disable-next-line no-console
                      console.log("Successful submit:", response);
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
  campus: undefined,
  actualCampus: undefined,
  college: undefined,
  department: undefined,
  studentType: undefined,
  areaOfInterest: undefined,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined,
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: false,
};

RfiMainForm.propTypes = {
  campus: PropTypes.string,
  actualCampus: PropTypes.string,
  college: PropTypes.string,
  department: PropTypes.string,
  studentType: PropTypes.string,
  areaOfInterest: PropTypes.string,
  programOfInterest: PropTypes.string,
  programOfInterestOptional: PropTypes.bool,
  isCertMinor: PropTypes.bool,
  country: PropTypes.string,
  stateProvince: PropTypes.string,
  successMsg: PropTypes.string,
  test: PropTypes.bool,
  dataSourceDegreeSearch: PropTypes.string.isRequired,
  dataSourceAsuOnline: PropTypes.string.isRequired,
  dataSourceCountriesStates: PropTypes.string.isRequired,
  submissionUrl: PropTypes.string.isRequired,
};

export { RfiMainForm };
