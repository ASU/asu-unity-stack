/* eslint-disable react/no-danger */
// @ts-check
import { sanitizeDangerousMarkup } from "@asu-ke/components-core";
import PropTypes from "prop-types";
import React from "react";

// Component

const Success = ({ successMsg }) => {
  return (
    <div className="rfi-submitted">
      <i
        className="fas fa-check-circle rfi-submitted-icon"
        style={{ fontSize: "6rem", color: "#78BE20" }}
        aria-hidden="true"
      />
      <div className="rfi-submitted-sub-icon">Submitted</div>
      <h3>Thanks for your request!</h3>
      <div
        className="rfi-success-msg-wrapper"
        dangerouslySetInnerHTML={sanitizeDangerousMarkup(successMsg)}
      />
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
