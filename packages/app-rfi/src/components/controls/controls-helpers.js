// @ts-check

import PropTypes from "prop-types";
import React from "react";

// location? here or shared/services/googleAnalytics.js
const GaEventPropTypes = {
  event: PropTypes.string,
  action: PropTypes.string,
  name: PropTypes.string,
  region: PropTypes.string,
  section: PropTypes.string,
  component: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};

const RfiLabel = ({ label, name, id = undefined, requiredIcon = undefined }) => (
  <label htmlFor={id || name}>
    {requiredIcon ? (
      <span title="Required">
        <i className="fas fa-circle uds-field-required" aria-hidden="true" />
      </span>
    ) : null}
    &nbsp;
    {label}
  </label>
);

const RfiError = ({ isError = undefined, metaError = undefined }) => (
  <div role="alert">
    {isError ? (
      <small className="form-text invalid-feedback">
        <i className="fas fa-exclamation-triangle" aria-hidden="true" />
        &nbsp;
        {metaError}
      </small>
    ) : null}
  </div>
);

// Note on requiredIcon. Yup required status is not readily available so we
// duplicate the setting in our props got displaying the required icon until
// Formik has a better way to do it.

RfiLabel.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  requiredIcon: PropTypes.bool,
};

RfiError.propTypes = {
  isError: PropTypes.bool,
  metaError: PropTypes.string,
};
export { RfiLabel, RfiError, GaEventPropTypes };
