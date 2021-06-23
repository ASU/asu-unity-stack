// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field, useFormikContext } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { RfiLabel, RfiError } from "./controls-helpers";

const RfiTextInput = ({
  label,
  name,
  id,
  requiredIcon,
  helperText,
  autoFocus,
}) => {
  // Surface values from Formik context
  const { values } = useFormikContext();

  // Ideally we'd not have implementation logic in this generic component, but
  // due to structural challenges in obtaining sibling field values via form
  // context, implementing that here with conditional protections is the most
  // reasonable solve identified. TODO One option might be to break out and
  // create a unique component just for special case fields.
  function customValidate(value) {
    let error;
    // Require ZipCode unless Campus is "ONLNE".
    if (id === "ZipCode" && values.Campus !== "ONLNE" && !value) {
      error = "Error: Zip code is required";
    }
    return error;
  }

  return (
    <Field name={name} validate={customValidate}>
      {({ field, form: { touched, errors }, meta }) => {
        const isError = meta.touched && meta.error;
        return (
          <div className="form-group">
            <RfiLabel
              label={label}
              name={name}
              id={id}
              requiredIcon={requiredIcon}
            />
            <Field
              id={id}
              name={name}
              type="text"
              {...field}
              className="form-control"
              placeholder={helperText}
              autoFocus={autoFocus}
            />
            <RfiError isError={!!isError} metaError={meta.error} />
          </div>
        );
      }}
    </Field>
  );
};

// Note on requiredIcon. Yup required status is not readily available so we
// duplicate the setting in our props got displaying the required icon until
// Formik has a better way to do it.

RfiTextInput.defaultProps = {
  id: undefined,
  requiredIcon: undefined,
  autoFocus: undefined,
  helperText: undefined,
};

RfiTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  requiredIcon: PropTypes.bool,
  helperText: PropTypes.string,
  autoFocus: PropTypes.bool,
};

export { RfiTextInput };
