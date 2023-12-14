// @ts-check
import React from "react";

import { getCurrentScriptPath } from "../../../../../shared";
import {
  setClientId,
  pushDataLayerEventToGa,
} from "../../core/utils/google-analytics";
import { RfiContext } from "../../core/utils/rfiContext";
import {
  submissionFormFieldPrep,
  submissionSetHiddenFields,
} from "../../core/utils/submission-helpers";
import { aboutMeForm } from "../steps/AboutMe";
import { optionalForm } from "../steps/Optional";
import { programInterestForm } from "../steps/ProgramInterest/index";
import { successForm } from "../steps/Success";
import { RfiStepper } from "./RfiStepper";

const currentScript = getCurrentScriptPath();

const RfiMainForm = () => {
  const { appPathFolder, test, submissionUrl } = React.useContext(RfiContext);

  const RfiImage = `${
    appPathFolder || currentScript
  }/assets/img/WS2-DefaultImagev01-Final.png`;

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

export { RfiMainForm };
