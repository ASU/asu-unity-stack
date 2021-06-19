// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field, useFormikContext } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { RfiLabel, RfiError } from "./controls-helpers";

const RfiTextInput = ({ label, name, id, requiredIcon, helperText }) => {
  // Surface values from Formik context
  const { values } = useFormikContext();

  // Ideally we'd not have implementation logic in this generic component, but
  // due to structural challenges in obtaining sibling field values via form
  // context, implementing that here with conditional protections is the most
  // reasonable solve identified.
  function customValidate(value) {
    let error;
    // Require ZipCode unless Campus is "ONLNE".
    if (id === "ZipCode" && values.Campus !== "ONLNE" && !value) {
      error = "Required";
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
  helperText: undefined,
};

RfiTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  requiredIcon: PropTypes.bool,
  helperText: PropTypes.string,
};

export { RfiTextInput };
