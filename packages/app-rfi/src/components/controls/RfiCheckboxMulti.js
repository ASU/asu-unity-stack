// @ts-check
/* eslint-disable no-unused-vars */
import { useField, Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

// import { Span, Error, Text, LabelGroup, Label, E } from "./StyledControls";

const RfiCheckboxMulti = ({ label, name, options }) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  const isError = meta.touched && meta.error;
  return (
    <>
      {/* <div>meta.touched:{""+meta.touched} meta.error:{meta.error}</div> */}
      <div>{label}</div>
      {options.map(option => (
        <label htmlFor={name} key={option.id || option.value}>
          <Field type="checkbox" id={name} name={name} value={option.value} />
          <span>{option.text}</span>
        </label>
      ))}
      <div>{isError ? <div>{meta.error}</div> : null}</div>
    </>
  );
};

RfiCheckboxMulti.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { RfiCheckboxMulti };
