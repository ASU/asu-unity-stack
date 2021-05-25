// @ts-check
import PropTypes from "prop-types";
import React from "react";

function createMarkup(output) {
  return { __html: output };
}

// Component

const Success = ({ rfiConfig }) => {
  return (
    <>
      <h3>Success</h3>
      <div dangerouslySetInnerHTML={createMarkup(rfiConfig.SuccessMsg)} />
    </>
  );
};

// Step configs

const successForm = {
  component: Success,
  validationSchema: {},

  initialValues: {},
};

// Props
Success.defaultProps = {
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

Success.propTypes = {
  rfiConfig: PropTypes.instanceOf(Object),
};

export { successForm };
