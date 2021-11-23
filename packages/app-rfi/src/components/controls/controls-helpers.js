// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import React from "react";

const RfiLabel = ({ label, name, id, requiredIcon }) => (
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

const RfiError = ({ isError, metaError }) => (
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

RfiLabel.defaultProps = {
  id: undefined,
  requiredIcon: undefined,
};

RfiLabel.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  requiredIcon: PropTypes.bool,
};

RfiError.defaultProps = {
  isError: undefined,
  metaError: undefined,
};

RfiError.propTypes = {
  isError: PropTypes.bool,
  metaError: PropTypes.string,
};
export { RfiLabel, RfiError };
