// @ts-check
/* eslint-disable no-unused-vars, no-nested-ternary */
import {
  faAngleLeft,
  faAngleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, Progress } from "reactstrap";
import * as Yup from "yup";

function createMarkup(output) {
  return { __html: output };
}

class RfiStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      certEmailAddr: undefined,
    };
  }

  // Async state handling for isCertMinor certEmailAddr state.
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }
  async componentDidMount() {
    // If configured as a cert or minor and we have a program of interest, look
    // up the program's email address and set it in state for use in
    // isCertMinor render below.
    if (this.props.IsCertMinor && this.props.ProgramOfInterest) {
      const serviceUrl = `https://degreesearch-proxy.apps.asu.edu/degreesearch/?init=false&method=findDegreeByAcadPlan&acadPlan=${this.props.ProgramOfInterest}&fields=AcadPlan,EmailAddr&program=graduate&cert=true`;
      const response = await fetch(serviceUrl)
        .then(response => response.json())
        .catch(error => new Error(error));
      // Structure of response: response.programs[0].EmailAddr
      if (response.programs) {
        const {
          programs: [{ EmailAddr }],
        } = response;
        await this.setStateAsync({ certEmailAddr: EmailAddr });
      }
    }
  }

  // Possible TODO: prompt user before leaving a dirty form in Formik:
  // https://github.com/formium/formik/issues/1657

  // TODO Resolve parse error. .babelrc already has plugin identified.
  // Possible solutions: https://github.com/babel/babel/issues/8711
  // ts-check didn't like
  next = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step + 1,
      };
    });
  };

  // ts-check didn't like
  prev = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step - 1,
      };
    });
  };

  // Validation for RfiSelect fields with dependencies across steps that don't
  // play well with Formik and Yup. We implement standard Formik, form-level,
  // non-Yup validation for this. More details in RfiSelect.js. Other field
  // types that require custom validation with cross-step dependencies should
  // see RfiTextInputs.js for a more flexible field-based approach.
  // See Formik validation flavors: https://formik.org/docs/guides/validation
  validate = values => {
    const errors = {};
    // console.log(values.Interest1, "INTEREST 1");
    // console.log(values.Interest2, "INTEREST 2");
    // console.log(this.props.ProgramOfInterestOptional, "PoI Optional");

    // If on step 1 and Interest1 is empty and we don't have a
    // ProgramOfInterest (aka Interest2) prop, require Interest1.
    if (
      this.state.step === 0 &&
      !values.Interest1 &&
      !this.props.ProgramOfInterest
    ) {
      errors.Interest1 = "Area of Interest is required";
    }
    // If on step 1 and Interest2 is empty, and is not optional or campus is
    // ONLNE, require Interest2.
    if (
      this.state.step === 0 &&
      !values.Interest2 &&
      (!this.props.ProgramOfInterestOptional || values.Campus === "ONLNE")
    ) {
      errors.Interest2 = "Program of Interest is required";
    }

    // If on step 2 and Campus isn't ONLNE, EntryTerm is required.
    if (
      this.state.step === 1 &&
      values.Campus !== "ONLNE" &&
      !values.EntryTerm
    ) {
      errors.EntryTerm = "Entry term is required";
    }
    return errors;
  };

  render() {
    const { step } = this.state;
    const {
      validationSchemas,
      initialValues,
      formComponents,
      handleSubmit,
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
    } = this.props;
    const schema = validationSchemas[step];
    console.log(initialValues, `initialValues at ${step}`);

    // For the progress bar.
    const totalSteps = initialValues.length - 1; // Don't count success step.
    const progress = step / totalSteps;

    // Debug
    // console.log(step, 'This is the step we are on');
    // console.log(this.props.initialValues.length, 'This is total # of steps');
    // console.log( (step + 1) / totalSteps, '% of progress');

    const initValues = initialValues.reduce((item, total) => {
      return { ...total, ...item };
    });
    console.log(initialValues, "initialValues");
    console.log(initValues, "initValues");

    // Intercede with initial values from props.
    initValues.Campus = Campus;
    if (StudentType === "Graduate") {
      initValues.CareerAndStudentType = "Readmission";
    } else if (StudentType === "Undergrad") {
      initValues.CareerAndStudentType = "First Time Freshman";
    }
    initValues.Interest1 = AreaOfInterest;
    initValues.Interest2 = ProgramOfInterest;
    initValues.Country = Country;
    initValues.State = StateProvince;
    // Avoid Uncontrolled to controlled switch warning:
    // https://github.com/formium/formik/issues/28
    initValues.Email = "";

    // If configured as a Cert or Minor, skip the form and only display
    // SuccessMsg.
    if (IsCertMinor) {
      const emailRender = (
        <div className="rfi-cert-minor-email-message">
          Request information on this program by sending an email to{" "}
          <a href={`mailto:${this.state.certEmailAddr}`}>
            {this.state.certEmailAddr}
          </a>
        </div>
      );
      return (
        <div className="uds-rfi-form-wrapper rfi-cert-minor">
          <h2>Request information</h2>
          {this.state.certEmailAddr && emailRender}
          <div dangerouslySetInnerHTML={createMarkup(SuccessMsg)} />
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
          {!Test ? (
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

RfiStepper.propTypes = {
  validationSchemas: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  formComponents: PropTypes.arrayOf(PropTypes.func).isRequired,
  handleSubmit: PropTypes.func.isRequired,
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

RfiStepperButtons.propTypes = {
  stepNum: PropTypes.number.isRequired,
  lastStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export { RfiStepper };
