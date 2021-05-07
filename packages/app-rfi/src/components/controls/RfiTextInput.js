// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { RfiLabel, RfiError } from "./controls-helpers";

const RfiTextInput = ({ label, name, id, requiredIcon, helperText }) => {
  return (
    <Field name={name}>
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
            <input
              id={id}
              type="text"
              {...field}
              className="form-control"
              placeholder={helperText}
            />
            <RfiError isError={isError} metaError={meta.error} />
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
  // TODO better defaults?
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
