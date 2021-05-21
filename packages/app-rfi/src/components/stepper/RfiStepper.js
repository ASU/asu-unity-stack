// @ts-check
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, Progress } from "reactstrap";
import * as Yup from "yup";

class RfiStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  // TODO confirm works
  // next() {
  // ts-check didn't like
  next = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step + 1,
      };
    });
  };

  // TODO confirm works
  // prev() {
  // ts-check didn't like
  prev = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step - 1,
      };
    });
  };

  render() {
    const { step } = this.state;
    const { validationSchemas, initialValues, formComponents } = this.props;
    const schema = validationSchemas[step];

    // For the progress bar.
    const totalSteps = initialValues.length;
    const progress = step / totalSteps;

    // Debug
    // console.log(step, 'This is the step we are on');
    // console.log(this.props.initialValues.length, 'This is total # of steps');
    // console.log( (step + 1) / totalSteps, '% of progress');

    const initValues = initialValues.reduce((item, total) => {
      return { ...total, ...item };
    });

    const formComponent = formComponents[step];
    const lastStep = formComponents.length - 1;
    const { handleSubmit } = this.props;
    return (
      <div>
        <Progress value={progress * 100} className="rfi-progress" />
        <div className="uds-rfi-form-wrapper">
          <div>{`Step ${step + 1} of ${totalSteps}`}</div>
          <h2>Request information</h2>
          <Formik
            initialValues={initValues}
            validationSchema={Yup.object().shape(schema)}
            onSubmit={(values, { setSubmitting, setFieldTouched }) => {
              // eslint-disable-next-line no-undef
              setTimeout(() => {
                setSubmitting(false);

                if (step === lastStep) {
                  handleSubmit(values);
                } else {
                  this.next();
                  Object.keys(initialValues[step + 1]).map(key => {
                    return setFieldTouched(key, false, false);
                  });
                }
              }, 400);
            }}
          >
            {() => {
              return (
                <Form className="uds-form uds-rfi">
                  {React.createElement(formComponent, {})}

                  <RfiStepperButtons
                    stepNum={step}
                    lastStep={lastStep}
                    handleBack={this.prev}
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

const RfiStepperButtons = ({ stepNum, lastStep, handleBack }) => (
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
        {stepNum < lastStep ? (
          <Button type="submit" className={`rfi-button-step${stepNum + 1}`}>
            Next <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        ) : (
          <Button type="submit" className="rfi-button btn btn-gold">
            Consent/submit
          </Button>
        )}
      </div>
    </div>
  </nav>
);
// TODO disable submit button above when clicked. formik.isSubmitting isn't
// available. Maybe our success page will just hide the button...

RfiStepper.propTypes = {
  validationSchemas: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  formComponents: PropTypes.arrayOf(PropTypes.func).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

RfiStepperButtons.propTypes = {
  stepNum: PropTypes.number.isRequired,
  lastStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export { RfiStepper };
