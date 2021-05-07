// DISABLED@ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useField } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { RfiLabel, RfiError } from "./controls-helpers";

const RfiSelect = ({ id, label, name, requiredIcon, options }) => {
  const [field, meta] = useField({ name });
  const isError = meta.touched && meta.error;
  return (
    <div className="form-group">
      <RfiLabel label={label} name={name} id={id} requiredIcon={requiredIcon} />
      <select id={id} className="form-control" error={isError} {...field}>
        {options.map(option => (
          <option
            key={option.key ? option.key : option.value}
            value={option.value}
          >
            {option.text}
          </option>
        ))}
      </select>
      <RfiError isError={isError} metaError={meta.error} />
    </div>
  );
};

// Note on requiredIcon. Yup required status is not readily available so we
// duplicate the setting in our props got displaying the required icon until
// Formik has a better way to do it.

RfiSelect.defaultProps = {
  // TODO better defaults?
  id: undefined,
  requiredIcon: undefined,
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
  requiredIcon: PropTypes.bool,
};

export { RfiSelect };
