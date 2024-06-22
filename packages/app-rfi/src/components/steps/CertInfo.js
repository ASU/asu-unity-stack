/* eslint-disable react/no-danger */
// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { sanitizeDangerousMarkup } from "../../../../../shared";

// Component

const CertInfo = ({ certMinorEmail, successMsg }) => {
  const emailRender = (
    <div className="rfi-cert-minor-email-message">
      Request information on this program by sending an email to{" "}
      <a href={`mailto:${certMinorEmail}`}>{certMinorEmail}</a>
    </div>
  );
  return (
    <div className="uds-rfi-form-wrapper rfi-cert-minor">
      <h2>Request information</h2>
      {certMinorEmail && emailRender}
      {successMsg && (
        <div
          dangerouslySetInnerHTML={sanitizeDangerousMarkup(`${successMsg}`)}
        />
      )}
    </div>
  );
};

CertInfo.propTypes = {
  certMinorEmail: PropTypes.string.isRequired,
  successMsg: PropTypes.string.isRequired,
  // children: PropTypes.node.isRequired,
};
export { CertInfo };
