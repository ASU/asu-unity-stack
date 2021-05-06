// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

// import { Span, Error, Text, LabelGroup, E } from "./StyledControls";

const RfiRadioGroup = ({ name, options, label }) => {
  return (
    <Field as="div" name={name}>
      {({
        field,
        // eslint-disable-next-line no-unused-vars
        form: { touched, errors },
        meta,
      }) => {
        const isError = meta.error;
        return (
          <>
            <label htmlFor={name}>{label}</label>
            {options.map(option => (
              <span key={option.key ? option.key : option.value}>
                <Field type="radio" {...field} value={option.value} />{" "}
                <span>{option.text}</span>
              </span>
            ))}
            <div>{isError ? <div>{meta.error}</div> : null}</div>
          </>
        );
      }}
    </Field>
  );
};

RfiRadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { RfiRadioGroup };
