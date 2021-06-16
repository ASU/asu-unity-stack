/* eslint-disable react/no-danger */
// @ts-check
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dompurify from "dompurify";
import PropTypes from "prop-types";
import React from "react";

const sanitizeDangerousMarkup = content => {
  const sanitizer = dompurify.sanitize;

  return { __html: sanitizer(content) };
};

// Component

const Success = ({ SuccessMsg }) => {
  return (
    <div className="rfi-submitted">
      <FontAwesomeIcon
        icon={faCheckCircle}
        size="6x"
        className="rfi-submitted-icon"
        color="#78BE20"
      />
      <div className="rfi-submitted-sub-icon">Submitted</div>
      <h3>Thanks for your request!</h3>
      <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(SuccessMsg)} />
    </div>
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
