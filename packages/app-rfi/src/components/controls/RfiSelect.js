// DISABLED@ts-check
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Select, { OptionProps } from "react-select";

import { RfiLabel, RfiError } from "./controls-helpers";

// Implmenting React Select with Formik and Yup integation can be a bit tricky.
// Using this approach minus the Typescript bits:
// https://gist.github.com/hubgit/e394e9be07d95cd5e774989178139ae8#gistcomment-3168746
// See also the note below included with the Select props, about how we've
// implemented custom validation.

const RfiSelect = ({ id, label, name, requiredIcon, options, disabled }) => {
  const [field, meta, helpers] = useField({ name });
  const isError = meta.touched && meta.error; // TODO generating non fatal error

  // Surface values from Formik context
  const { values } = useFormikContext();

  // Ideally we'd not have implementation logic in this generic component, but
  // due to structural challenges in obtaining sibling field values via form
  // context, implementing that here with conditional protections is the most
  // reasonable solve identified.
  function customValidate(value) {
    let error;
    // Require EntryTerm unless Campus is "ONLNE".
    if (id === "EntryTerm" && values.Campus !== "ONLNE" && !value) {
      error = "Required";
    }
    return error;
  }

  return (
    <div className="form-group">
      <RfiLabel label={label} name={name} id={id} requiredIcon={requiredIcon} />
      <Select
        options={options}
        name={name}
        value={
          options ? options.find(option => option.value === field.value) : ""
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
  // TODO better defaults?
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
