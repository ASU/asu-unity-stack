// @ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useField, Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { RfiError } from "./controls-helpers";

const RfiCheckboxMulti = ({ label, name, options }) => {
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
          <fieldset>
            <legend>{label}</legend>
            <RfiError isError={isError} metaError={meta.error} />
            {options.map(option => (
              <div
                className="form-check"
                key={option.key ? option.key : option.value}
              >
                <Field
                  type="checkbox"
                  id={name + option.key}
                  {...field}
                  value={option.value}
                />{" "}
                <label htmlFor={name + option.key} className="form-check-label">
                  {option.text}
                </label>
              </div>
            ))}
          </fieldset>
        );
      }}
    </Field>
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
