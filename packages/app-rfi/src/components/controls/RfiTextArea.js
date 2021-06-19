// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { RfiLabel, RfiError } from "./controls-helpers";

const RfiTextArea = ({ label, name, id, requiredIcon }) => {
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
            <Field
              as="textarea"
              name={name}
              id={id}
              {...field}
              className="form-control"
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

RfiTextArea.defaultProps = {
  id: undefined,
  requiredIcon: undefined,
};

RfiTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  requiredIcon: PropTypes.bool,
};

export { RfiTextArea };
