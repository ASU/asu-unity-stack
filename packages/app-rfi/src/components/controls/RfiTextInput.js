// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import {
  faExclamationTriangle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

// import { Input, Label, Error, Text, E } from "./StyledControls";

const RfiTextInput = ({ label, name, id, isRequired, helperText }) => {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }) => {
        const isError = meta.touched && meta.error;
        return (
          <div className="form-group">
            <label htmlFor={id || name}>
              {isRequired ? (
                <span title="Required">
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              ) : null}
              {label}
            </label>
            <input
              type="text"
              {...field}
              className="form-control"
              placeholder={helperText}
            />
            <div>
              {isError ? (
                <small className="form-text invalid-feedback">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  {meta.error}
                </small>
              ) : null}
            </div>
          </div>
        );
      }}
    </Field>
  );
};

// Note on isRequired. Yup required status is not readily available so we
// duplicate the setting in our props until Formik has a better way to do it.

RfiTextInput.defaultProps = {
  // TODO better defaults?
  id: "",
  isRequired: "",
  helperText: "",
};

RfiTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  helperText: PropTypes.string,
};

export { RfiTextInput };
