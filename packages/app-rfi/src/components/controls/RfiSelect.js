// DISABLED@ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useField } from "formik";
import PropTypes from "prop-types";
import React from "react";

// import { Label, Error, Text, StyledSelect, E } from "./StyledControls";

const RfiSelect = ({ id, label, name, options }) => {
  const [field, meta] = useField({ name });
  const isError = meta.touched && meta.error;
  return (
    <>
      <label htmlFor={id || name}>{label}</label>
      <select error={isError} {...field}>
        {options.map(option => (
          <option
            key={option.key ? option.key : option.value}
            value={option.value}
          >
            {option.text}
          </option>
        ))}
      </select>
      <div>{isError ? <div>{meta.error}</div> : null}</div>
    </>
  );
};

RfiSelect.defaultProps = {
  // TODO better defaults?
  id: "",
};

RfiSelect.propTypes = {
  id: PropTypes.string,
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

export { RfiSelect };
