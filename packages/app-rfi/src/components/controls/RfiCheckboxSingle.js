// @ts-check
/* eslint-disable no-unused-vars */
import {
  faExclamationTriangle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, useField } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { RfiLabel, RfiError } from "./controls-helpers";

const RfiCheckboxSingle = ({ children, id, name, value, requiredIcon }) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  const isError = meta.touched && meta.error;
  return (
    <div className="form-check">
      {/* <div>meta.touched:{""+meta.touched} meta.error:{meta.error}</div> */}
      <Field
        type="checkbox"
        id={id}
        name={name}
        value={value}
        className="form-check-input"
      />
      <label htmlFor={id} className="form-check-label">
        {requiredIcon ? (
          <span title="Required">
            <FontAwesomeIcon icon={faCircle} className="uds-field-required" />
          </span>
        ) : null}
        &nbsp;
        {children}
      </label>
      <RfiError isError={!!isError} metaError={meta.error} />
    </div>
  );
};

RfiCheckboxSingle.defaultProps = {
  // TODO better defaults?
  requiredIcon: undefined,
};

RfiCheckboxSingle.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  requiredIcon: PropTypes.bool,
};

export { RfiCheckboxSingle };
