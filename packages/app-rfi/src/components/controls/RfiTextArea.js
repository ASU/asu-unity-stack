// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

// import { TxtArea, Label, Error, Text, E } from "./StyledControls";

const RfiTextArea = ({ label, name, id }) => {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }) => {
        const isError = meta.touched && meta.error;
        return (
          <>
            <label htmlFor={id || name}>{label}</label>
            <textarea error={isError} {...field} />
            <div>{isError ? <div>{meta.error}</div> : null}</div>
          </>
        );
      }}
    </Field>
  );
};

RfiTextArea.defaultProps = {
  // TODO better defaults?
  id: "",
};

RfiTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export { RfiTextArea };
