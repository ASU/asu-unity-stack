// DISABLED@ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field, useField, useFormikContext } from "formik";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { RfiLabel, RfiError } from "./controls-helpers";

// Note: We use a mix of Field and useField here to circumvent issues
// experienced using solely one of the other.

const RfiSelect = ({
  id,
  label,
  name,
  requiredIcon,
  required,
  options,
  disabled,
  autoFocus,
}) => {
  const [field, meta, helpers] = useField({ name });
  const isError = meta.touched && meta.error; // TODO generating non fatal error

  // Surface values from Formik context
  const { values } = useFormikContext();

  // NOTE: We implement custom validation related to RfiSelect in
  // RfiStepper.js in order to manage dependency logic across steps.

  return (
    <div className="form-group">
      <RfiLabel label={label} name={name} id={id} requiredIcon={requiredIcon} />
      <Field
        as="select"
        id={id}
        className="form-control"
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        {...field}
      >
        <option defaultValue>Select&hellip;</option>
        {options.map(option => (
          <option
            key={option.key ? option.key : option.value}
            value={option.value}
          >
            {option.text}
          </option>
        ))}
      </Field>
      <RfiError isError={!!isError} metaError={meta.error} />
    </div>
  );
};

// Note on requiredIcon. Yup required status is not readily available so we
// duplicate the setting in our props for displaying the required icon until
// Formik has a better way to do it.

RfiSelect.defaultProps = {
  id: undefined,
  requiredIcon: undefined,
  required: undefined,
  autoFocus: undefined,
  disabled: false,
};

RfiSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
  disabled: PropTypes.bool,
  requiredIcon: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

export { RfiSelect };
