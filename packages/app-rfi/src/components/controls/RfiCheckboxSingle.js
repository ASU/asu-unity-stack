// @ts-check
/* eslint-disable no-unused-vars */
import { Field, useField } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { RfiLabel, RfiError } from "./controls-helpers";

const RfiCheckboxSingle = ({
  children,
  id,
  name,
  value,
  requiredIcon,
  required,
  onBlur,
}) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  const isError = meta.touched && meta.error;
  return (
    <div className="form-check">
      <Field
        type="checkbox"
        id={id}
        name={name}
        className="form-check-input"
        required={required}
        onChange={e => {
          field.onChange?.(e);
          onBlur?.(e);
        }}
      />
      <RfiLabel
        label={children}
        name={name}
        id={id}
        requiredIcon={requiredIcon}
      />
      <RfiError isError={!!isError} metaError={meta.error} />
    </div>
  );
};

RfiCheckboxSingle.defaultProps = {
  requiredIcon: undefined,
  required: undefined,
};

RfiCheckboxSingle.propTypes = {
  children: PropTypes.node.isRequired,
  onBlur: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  requiredIcon: PropTypes.bool,
  required: PropTypes.bool,
};

export { RfiCheckboxSingle };
