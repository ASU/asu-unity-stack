// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

// import { Input, Label, Error, Text, E } from "./StyledControls";

const RfiEmailInput = ({ name, label }) => {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }) => {
        const isError = meta.touched && meta.error;
        return (
          <>
            <label htmlFor={name}>{label}</label>
            <input type="text" {...field} />
            <div>{isError ? <div>{meta.error}</div> : null}</div>
          </>
        );
      }}
    </Field>
  );
};

RfiEmailInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export { RfiEmailInput };
