// @ts-check
import PropTypes from "prop-types";
import React from "react";
import { Button } from "reactstrap";

import { trackGAEvent } from "../../../../../shared";

// Note on the spans around the FA i tags below:
// When the host site/app deploys FA such that it replaces the i's with svg
// tags, when React tries to rewrite the DOM we get hit with the error
// "Failed to execute 'removeChild' on 'Node': The node to be removed is not
// a child of this node" ala https://github.com/facebook/react/issues/11538.
// And after reading up more on the issue via the links in this Stackoverflow:
// https://stackoverflow.com/a/48552226/4942751
// The solution I hit on was to wrap the i's with spans so when the DOM
// rewrite happens, the FA switcheroo is happening a layer below the element
// that in this case React is trying to remove.

export const RfiStepperButtons = ({
  stepNumber,
  totalSteps,
  step,
  handleBack,
  formik: { isSubmitting },
}) => {
  return (
    <>
      <div className="rfi-required-footnote" title="Required">
        <i className="fas fa-circle uds-field-required" aria-hidden="true" />{" "}
        Required
      </div>
      <nav aria-label="Request information form" className="container">
        <div className="row justify-content-end">
          <div className="col-6">
            {stepNumber > 0 ? (
              <Button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleBack();
                  trackGAEvent({
                    action: "click",
                    name: "onclick",
                    type: "click",
                    region: "main content",
                    section: step.props.section,
                    text: "prev",
                    component: `step ${stepNumber + 1} of ${totalSteps}`,
                  });
                }}
              >
                <span>
                  <i className="fas fa-angle-left" aria-hidden="true" />
                </span>{" "}
                Previous
              </Button>
            ) : null}
          </div>
          <div className="col-6 text-right">
            {/* Note: rfi-button and rfi-button-stepN classes are used by GA */}
            {stepNumber < totalSteps - 1 ? (
              <Button
                type="submit"
                className={`btn btn-primary rfi-button-step${stepNumber + 1}`}
                onClick={() =>
                  trackGAEvent({
                    action: "click",
                    name: "onclick",
                    type: "click",
                    region: "main content",
                    section: step.props.section,
                    text: "next",
                    component: `step ${stepNumber + 1} of ${totalSteps}`,
                  })
                }
              >
                Next{" "}
                <span>
                  <i className="fas fa-angle-right" aria-hidden="true" />
                </span>
              </Button>
            ) : (
              <Button
                type="submit"
                className="rfi-submit btn btn-primary"
                disabled={!!isSubmitting}
                onClick={() =>
                  trackGAEvent({
                    action: "click",
                    name: "onclick",
                    region: "main content",
                    event: "form",
                    type: "submit",
                    section: step.props.section,
                    text: "submit",
                    component: `step ${stepNumber + 1} of ${totalSteps}`,
                  })
                }
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

RfiStepperButtons.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  step: PropTypes.shape({
    props: PropTypes.shape({
      section: PropTypes.string,
    }),
  }),
  handleBack: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    isSubmitting: PropTypes.bool.isRequired,
  }),
};
