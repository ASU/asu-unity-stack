// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { RfiLabel, RfiError } from "./controls-helpers";

const RfiEmailInput = ({ name, label, id, requiredIcon }) => {
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
            <input type="text" {...field} id={id} className="form-control" />
            <RfiError isError={isError} metaError={meta.error} />
          </div>
        );
      }}
    </Field>
  );
};

RfiEmailInput.defaultProps = {
  id: undefined,
  requiredIcon: undefined,
};

RfiEmailInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requiredIcon: PropTypes.bool,
};

export { RfiEmailInput };
