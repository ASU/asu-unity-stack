// DISABLED@ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Select, { OptionProps } from "react-select";

import { RfiLabel, RfiError } from "./controls-helpers";

// Implementing React Select with Formik and Yup integation can be a bit tricky.
// Using this approach minus the Typescript bits:
// https://gist.github.com/hubgit/e394e9be07d95cd5e774989178139ae8#gistcomment-3168746
// See also the note below included with the Select props, about how we've
// implemented custom validation.

const RfiSelect = ({ id, label, name, requiredIcon, options, disabled }) => {
  const [field, meta, helpers] = useField({ name });
  const isError = meta.touched && meta.error; // TODO generating non fatal error

  // Surface values from Formik context
  const { values } = useFormikContext();

  const style = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused
        ? "2px solid #191919 !important"
        : "1px solid #747474 !important",
      borderRadius: 0,
      boxShadow: state.isFocused ? 0 : 0,
    }),
  };

  // NOTE: We implement custom validation related to RfiSelect in
  // RfiStepper.js in order to manage dependency logic across steps.

  return (
    <div className="form-group">
      <RfiLabel label={label} name={name} id={id} requiredIcon={requiredIcon} />
      <Select
        inputId={id}
        styles={style}
        className="rfi-input-select"
        options={options}
        name={name}
        value={
          options ? options.find(option => option.value === field.value) : null
        }
        isDisabled={disabled}
        onChange={option => helpers.setValue(option.value)}
        onBlur={field.onBlur}
        // NOTE on custom validation - since we're not using the Formik Field
        // component here, we can't use the validate prop to configure a custom
        // validation function like we do in RfiTextInput.js for implementing
        // validation that has dependencies across steps. As a solve, for
        // Select fields requiring such logic, we implement it in a custom
        // validate function attached via the Formik component's validate prop
        // in RfiStepper.js.
      />
      <RfiError isError={isError} metaError={meta.error} />
    </div>
  );
};

// Note on requiredIcon. Yup required status is not readily available so we
// duplicate the setting in our props for displaying the required icon until
// Formik has a better way to do it.

RfiSelect.defaultProps = {
  id: undefined,
  requiredIcon: undefined,
  disabled: false,
};

RfiSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ).isRequired,
  disabled: PropTypes.bool,
  requiredIcon: PropTypes.bool,
};

export { RfiSelect };
