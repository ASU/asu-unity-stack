// DISABLED@ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field, useField, useFormikContext } from "formik";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { RfiLabel, RfiError } from "./controls-helpers";

// Note: We use a mix of Field and useField here to circumvent issues
// experienced using solely one of the other.

const RfiSelect = ({ id, label, name, requiredIcon, options, disabled }) => {
  const [field, meta] = useField({ name });
  const isError = meta.touched && meta.error; // TODO generating non fatal error

  // Surface values from Formik context
  const { values } = useFormikContext();

  // Ideally we'd not have implementation logic in this generic component, but
  // due to structural challenges in obtaining sibling field values via form
  // context, implementing that here with conditional protections is the most
  // reasonable solve identified.
  function customValidate(value) {
    let error;
    // Require EntryTerm unless Campus is "ONLNE".
    if (id === "EntryTerm" && values.Campus !== "ONLNE" && !value) {
      error = "Required";
    }
    return error;
  }

  return (
    <div className="form-group">
      <RfiLabel label={label} name={name} id={id} requiredIcon={requiredIcon} />
      <Field
        as="select"
        id={id}
        className="form-control"
        error={isError}
        disabled={disabled}
        validate={customValidate}
        {...field}
      >
        {options.map(option => (
          <option
            key={option.key ? option.key : option.value}
            value={option.value}
          >
            {option.text}
          </option>
        ))}
      </Field>
      <RfiError isError={isError} metaError={meta.error} />
    </div>
  );
};

// Note on requiredIcon. Yup required status is not readily available so we
// duplicate the setting in our props for displaying the required icon until
// Formik has a better way to do it.

RfiSelect.defaultProps = {
  // TODO better defaults?
  id: undefined,
  requiredIcon: undefined,
  disabled: false,
};

RfiSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  disabled: PropTypes.bool,
  requiredIcon: PropTypes.bool,
};

export { RfiSelect };
