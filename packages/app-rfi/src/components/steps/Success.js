/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { sanitizeDangerousMarkup } from "../../../../../shared";
import { useRfiContext } from "../../core/utils/rfiContext";

// Component

const Success = () => {
  const { successMsg } = useRfiContext();
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

export { successForm };
