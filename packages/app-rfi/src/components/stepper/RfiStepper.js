// @ts-check
/* eslint-disable no-unused-vars, no-nested-ternary, react/destructuring-assignment, react/no-access-state-in-setstate */
import {
  faAngleLeft,
  faAngleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dompurify from "dompurify";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, Progress } from "reactstrap";
import * as Yup from "yup";

const sanitizeDangerousMarkup = content => {
  const sanitizer = dompurify.sanitize;

  return { __html: sanitizer(content) };
};

class RfiStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      certEmailAddr: undefined,
    };
  }

  async componentDidMount() {
    // If configured as a cert or minor and we have a program of interest, look
    // up the program's email address and set it in state for use in
    // isCertMinor render below.
    const {
      dataSourceDegreeSearch,
      isCertMinor,
      programOfInterest,
    } = this.props;
    if (isCertMinor && programOfInterest) {
      const serviceUrl = `${dataSourceDegreeSearch}?init=false&method=findDegreeByAcadPlan&acadPlan=${programOfInterest}&fields=AcadPlan,EmailAddr&program=graduate&cert=true`;
      const resp = await fetch(serviceUrl)
        .then(response => response.json())
        .catch(error => new Error(error));
      // Structure of response: response.programs[0].EmailAddr
      if (resp.programs) {
        const {
          programs: [{ EmailAddr }],
        } = resp;
        await this.setStateAsync({ certEmailAddr: EmailAddr });
      }
    }
  }

  // Async state handling for isCertMinor certEmailAddr state.
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  // Possible TODO: prompt user before leaving a dirty form in Formik:
  // https://github.com/formium/formik/issues/1657

  // TODO Resolve parse error. .babelrc already has plugin identified.
  // Possible solutions: https://github.com/babel/babel/issues/8711
  // ts-check didn't like
  next = () => this.setState({ step: this.state.step + 1 });

  prev = () => this.setState({ step: this.state.step - 1 });

  // Validation for RfiSelect fields with dependencies across steps that don't
  // play well with Formik and Yup. We implement standard Formik, form-level,
  // non-Yup validation for this. More details in RfiSelect.js. Other field
  // types that require custom validation with cross-step dependencies should
  // see RfiTextInputs.js for a more flexible field-based approach.
  // See Formik validation flavors: https://formik.org/docs/guides/validation
  validate = values => {
    const errors = {};
    const { step } = this.state;
    const { programOfInterest, programOfInterestOptional } = this.props;
    // If on step 1 and Interest1 is empty and we don't have a
    // ProgramOfInterest (aka Interest2) prop, require Interest1.
    if (step === 0 && !values.Interest1 && !programOfInterest) {
      errors.Interest1 = "Area of Interest is required";
    }
    // If on step 1 and Interest2 is empty, and is not optional or campus is
    // ONLNE, require Interest2.
    if (
      step === 0 &&
      !values.Interest2 &&
      (!programOfInterestOptional || values.Campus === "ONLNE")
    ) {
      errors.Interest2 = "Program of Interest is required";
    }

    // If on step 2 and Campus isn't ONLNE, EntryTerm is required.
    if (step === 1 && values.Campus !== "ONLNE" && !values.EntryTerm) {
      errors.EntryTerm = "Entry term is required";
    }
    return errors;
  };

  render() {
    const { step, certEmailAddr } = this.state;
    const {
      validationSchemas,
      initialValues,
      formComponents,
      handleSubmit,
      // props
      campus,
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
    } = this.props;
    const schema = validationSchemas[step];

    // For the progress bar.
    const totalSteps = initialValues.length - 1; // Don't count success step.
    const progress = step / totalSteps;

    const initValues = initialValues.reduce((item, total) => {
      return { ...total, ...item };
    });

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
          <a href={`mailto:${certEmailAddr}`}>{certEmailAddr}</a>
        </div>
      );
      return (
        <div className="uds-rfi-form-wrapper rfi-cert-minor">
          <h2>Request information</h2>
          {certEmailAddr && emailRender}
          <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(successMsg)} />
        </div>
      );
    }

    const formComponent = formComponents[step];
    const lastStep = formComponents.length - 1;
    return (
      <div>
        <Progress value={progress * 100} className="rfi-progress" />
        <div className="uds-rfi-form-wrapper">
          {/* Don't display step details if we're on the success "step". */}
          {step !== lastStep ? (
            <div className="rfi-steps">{`Step ${
              step + 1
            } of ${totalSteps}`}</div>
          ) : undefined}
          {!test ? (
            step === 0 ? (
              <h2>Request information</h2>
            ) : (
              ""
            )
          ) : (
            <h2>
              <span className="highlight-gold">RFI IN TEST MODE</span>
            </h2>
          )}
          <Formik
            initialValues={initValues}
            validationSchema={Yup.object().shape(schema)}
            validate={this.validate}
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
                this.next();
                Object.keys(initialValues[step + 1]).map(key => {
                  return setFieldTouched(key, false, false);
                });
              }, 400);
            }}
          >
            {formik => {
              // Render lastStep without stepper buttons.
              if (step === lastStep) {
                return (
                  <Form className="uds-form uds-rfi">
                    {React.createElement(formComponent, this.props)}
                  </Form>
                );
              }
              return (
                <Form className="uds-form uds-rfi">
                  {React.createElement(formComponent, this.props)}

                  <div className="rfi-required-footnote" title="Required">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="uds-field-required"
                    />{" "}
                    Required
                  </div>
                  <RfiStepperButtons
                    stepNum={step}
                    lastStep={lastStep}
                    handleBack={this.prev}
                    submitting={formik.isSubmitting}
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

const RfiStepperButtons = ({ stepNum, lastStep, handleBack, submitting }) => (
  <nav aria-label="Request information form" className="container">
    <div className="row justify-content-end">
      <div className="col-6">
        {stepNum > 0 ? (
          <Button type="button" onClick={handleBack}>
            <FontAwesomeIcon icon={faAngleLeft} /> Prev
          </Button>
        ) : null}
      </div>
      <div className="col-6 text-right">
        {/* Note: rfi-button and rfi-button-stepN classes are used by GA */}
        {stepNum < lastStep - 1 ? (
          <Button type="submit" className={`rfi-button-step${stepNum + 1}`}>
            Next <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        ) : (
          <Button
            type="submit"
            className="rfi-submit btn btn-gold"
            disabled={!!submitting}
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
  handleBack: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export { RfiStepper };
