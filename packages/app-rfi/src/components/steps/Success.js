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

const Success = ({ successMsg }) => {
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
      <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(successMsg)} />
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
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
};

Success.propTypes = {
  successMsg: PropTypes.string,
};

export { successForm };
