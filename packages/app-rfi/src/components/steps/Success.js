/* eslint-disable react/no-danger */
// @ts-check
import PropTypes from "prop-types";
import React from "react";

function createMarkup(output) {
  return { __html: output };
}

// Component

const Success = ({ SuccessMsg }) => {
  return (
    <>
      <h3>Success</h3>
      <div dangerouslySetInnerHTML={createMarkup(SuccessMsg)} />
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
  SuccessMsg: "Success.",
};

Success.propTypes = {
  SuccessMsg: PropTypes.instanceOf(String),
};

export { successForm };
