// @ts-check
/* eslint-disable no-unused-vars, react/no-danger, react/no-unused-prop-types */
import { sanitizeDangerousMarkup } from "@asu-design-system/components-core";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Button, Progress } from "reactstrap";
import * as Yup from "yup";

import { trackGAEvent } from "../../core/services/googleAnalytics";

const defaultButtonEvent = {
  event: "form",
  action: "click",
  name: "onclick",
  type: "click",
  region: "main content",
};

const mapSections = {
  0: "Request information",
  1: "About me",
  2: "More about me",
};

const RfiStepper = props => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const section = mapSections[step];

  useEffect(() => {
    const fetchData = async () => {
      // If configured as a cert or minor and we have a program of interest, look
      // up the program's email address and set it in state for use in
      // isCertMinor render below.
      const { dataSourceDegreeSearch, isCertMinor, programOfInterest } = props;
      if (isCertMinor && programOfInterest) {
        const serviceUrl =
          `${dataSourceDegreeSearch}` +
          `?init=false&method=findDegreeByAcadPlan&acadPlan=${programOfInterest}` +
          `&fields=AcadPlan,EmailAddr&program=graduate&cert=true`;

        const res = await fetch(serviceUrl)
          .then(response => response.json())
          .catch(error => new Error(error));
        // Structure of response: response.programs[0].EmailAddr
        if (res.programs) {
          const {
            programs: [{ EmailAddr }],
          } = res;
          setEmail(EmailAddr);
        }
      }
    };

    fetchData();
  }, []);

  // Possible TODO: prompt user before leaving a dirty form in Formik:
  // https://github.com/formium/formik/issues/1657

  const next = () => setStep(step + 1);

  const prev = () => setStep(step - 1);

  // Validation for RfiSelect fields with dependencies across steps that don't
  // play well with Formik and Yup. We implement standard Formik, form-level,
  // non-Yup validation for this. More details in RfiSelect.js. Other field
  // types that require custom validation with cross-step dependencies should
  // see RfiTextInputs.js for a more flexible field-based approach.
  // See Formik validation flavors: https://formik.org/docs/guides/validation
  const validate = values => {
    const errors = {};
    const { programOfInterest, programOfInterestOptional } = props;
    // If on step 1 and Interest1 is empty and we don't have a
    // ProgramOfInterest (aka Interest2) prop, require Interest1.
    if (step === 0 && !values.Interest1 && !programOfInterest) {
      errors.Interest1 = "Error: Area of Interest is required";
    }
    // If on step 1 and Interest2 is empty, and is not optional or campus is
    // ONLNE, require Interest2.
    if (
      step === 0 &&
      !values.Interest2 &&
      (!programOfInterestOptional || values.Campus === "ONLNE")
    ) {
      errors.Interest2 = "Error: Program of Interest is required";
    }

    // If on step 2 and Campus isn't ONLNE, EntryTerm is required.
    if (step === 1 && values.Campus !== "ONLNE" && !values.EntryTerm) {
      errors.EntryTerm = "Error: Entry term is required";
    }
    return errors;
  };

  const {
    validationSchemas,
    initialValues,
    formComponents,
    handleSubmit,
    // props
    campus,
    studentType,
    areaOfInterest,
    programOfInterest,
    isCertMinor,
    country,
    stateProvince,
    successMsg,
    test,
  } = props;
  const schema = validationSchemas[step];

  // For the progress bar.
  const totalSteps = initialValues.length - 1; // Don't count success step.
  const progress = step / totalSteps;

  const initValues = initialValues.reduce((item, total) => ({
    ...total,
    ...item,
  }));

  // Intercede with initial values from props.
  initValues.Campus = campus;
  if (studentType === "graduate") {
    initValues.CareerAndStudentType = "Readmission";
  } else if (studentType === "undergrad") {
    initValues.CareerAndStudentType = "First Time Freshman";
  }
  initValues.Interest1 = areaOfInterest;
  initValues.Interest2 = programOfInterest;
  initValues.Country = country;
  initValues.State = stateProvince;
  // Avoid Uncontrolled to controlled switch warning:
  // https://github.com/formium/formik/issues/28
  initValues.Email = "";

  // If configured as a Cert or Minor, skip the form and only display
  // SuccessMsg.
  if (isCertMinor) {
    const emailRender = (
      <div className="rfi-cert-minor-email-message">
        Request information on this program by sending an email to{" "}
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    );
    return (
      <div className="uds-rfi-form-wrapper rfi-cert-minor">
        <h2>Request information</h2>
        {email && emailRender}
        <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(successMsg)} />
      </div>
    );
  }

  const formComponent = formComponents[step];
  const lastStep = formComponents.length - 1;
  const StepHeader = () => {
    if (test) {
      return (
        <h2>
          <span className="highlight-gold">RFI IN TEST MODE</span>
        </h2>
      );
    }
    return step === 0 ? <h2>Request information</h2> : <></>;
  };
  return (
    <div>
      <Progress
        value={Math.floor(progress * 100)}
        aria-label="Progress bar"
        className="rfi-progress"
      />
      <div className="uds-rfi-form-wrapper">
        {/* Don't display step details if we're on the success "step". */}
        {step !== lastStep ? (
          <div className="rfi-steps">{`Step ${step + 1} of ${totalSteps}`}</div>
        ) : undefined}
        <StepHeader />
        <Formik
          initialValues={initValues}
          validationSchema={Yup.object().shape(schema)}
          validate={validate}
          onSubmit={(
            values,
            { setSubmitting, setFieldTouched, resetForm } /* FormikBag */
          ) => {
            // TODO What did this setTimeout() accomplish? Unnecessary? Faux
            // temporary disable? Disable double clicking?
            // eslint-disable-next-line no-undef
            setTimeout(() => {
              setSubmitting(false);

              // Submit on step before success/last step.
              if (step === lastStep - 1) {
                handleSubmit(values);
                // TODO add a check for success before resetting form and
                // advancing? That way we could display a "try again in a few
                // moments" on error. Else, display success message.
                resetForm();
              }
              // Advance the step.
              next();
              Object.keys(initialValues[step + 1]).map(key =>
                setFieldTouched(key, false, false)
              );
            }, 400);
          }}
        >
          {formik => {
            // Render lastStep without stepper buttons.
            if (step === lastStep) {
              return (
                <Form className="uds-form uds-rfi">
                  {React.createElement(formComponent, props)}
                </Form>
              );
            }
            return (
              <Form className="uds-form uds-rfi">
                {React.createElement(formComponent, props)}

                <div className="rfi-required-footnote" title="Required">
                  <i
                    className="fas fa-circle uds-field-required"
                    aria-hidden="true"
                  />{" "}
                  Required
                </div>
                <RfiStepperButtons
                  stepNum={step}
                  lastStep={lastStep}
                  section={section}
                  handleBack={prev}
                  submitting={formik.isSubmitting}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

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

const RfiStepperButtons = ({
  stepNum,
  lastStep,
  section,
  handleBack,
  submitting,
}) => (
  <nav aria-label="Request information form" className="container">
    <div className="row justify-content-end">
      <div className="col-6">
        {stepNum > 0 ? (
          <Button
            type="button"
            onClick={() => {
              handleBack();
              trackGAEvent({
                ...defaultButtonEvent,
                section,
                text: "prev",
                component: `step ${stepNum + 1} of ${lastStep}`,
              });
            }}
          >
            <span>
              <i className="fas fa-angle-left" aria-hidden="true" />
            </span>{" "}
            Prev
          </Button>
        ) : null}
      </div>
      <div className="col-6 text-right">
        {/* Note: rfi-button and rfi-button-stepN classes are used by GA */}
        {stepNum < lastStep - 1 ? (
          <Button
            type="submit"
            className={`rfi-button-step${stepNum + 1}`}
            onClick={() =>
              trackGAEvent({
                ...defaultButtonEvent,
                section,
                text: "next",
                component: `step ${stepNum + 1} of ${lastStep}`,
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
            className="rfi-submit btn btn-gold"
            disabled={!!submitting}
            onClick={() =>
              trackGAEvent({
                ...defaultButtonEvent,
                event: "form",
                type: "submit",
                section,
                text: "submit",
                component: `step ${stepNum + 1} of ${lastStep}`,
              })
            }
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  </nav>
);

// Props
RfiStepper.defaultProps = {
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

RfiStepper.propTypes = {
  validationSchemas: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  formComponents: PropTypes.arrayOf(PropTypes.func).isRequired,
  handleSubmit: PropTypes.func.isRequired,
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
};

RfiStepperButtons.propTypes = {
  stepNum: PropTypes.number.isRequired,
  lastStep: PropTypes.number.isRequired,
  section: PropTypes.string,
  handleBack: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export { RfiStepper };
