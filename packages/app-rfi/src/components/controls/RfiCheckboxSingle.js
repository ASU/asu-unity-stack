// @ts-check
/* eslint-disable no-unused-vars */
import { Field, useField } from "formik";
import PropTypes from "prop-types";
import React from "react";

// import { Text, Error, Label, Span, E } from "./StyledControls";

const RfiCheckboxSingle = ({ children, name, value }) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  const isError = meta.touched && meta.error;
  return (
    <>
      {/* <div>meta.touched:{""+meta.touched} meta.error:{meta.error}</div> */}
      <label htmlFor={name} className="checkbox">
        <Field type="checkbox" id={name} name={name} value={value} />
        <span>{children}</span>
      </label>
      <div>{isError ? <div>{meta.error}</div> : null}</div>
    </>
  );
};

RfiCheckboxSingle.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export { RfiCheckboxSingle };
