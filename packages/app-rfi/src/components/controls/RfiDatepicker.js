// DISABLED@ts-check
/* eslint-disable no-unused-vars */
import {
  faExclamationTriangle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik"; // removed unused Formik, setFieldValue
import PropTypes from "prop-types";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

// import { Label, Error, Text, E } from "./StyledControls"; // removed unused Input

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const RfiDatepicker = ({
  label,
  name,
  id,
  dateFormat,
  className,
  placeholderText,
  isRequired,
}) => {
  return (
    <Field name={name}>
      {({
        field,
        form: { touched, errors, values, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => {
        const isError = meta.touched && meta.error;
        // FIXME Issue with returning to this step and not seeing the default value in state (it's still there)
        // Fix is likely to be with reading from state and popping the value in the right place in the props
        // const [dob, setDob] = useState();
        const [dob, setDob] = useState(
          new Date(new Date().setFullYear(new Date().getFullYear() - 20))
        );
        // const [dob, setDob] = useState(setFieldValue);
        // console.log(field, 'FIELD');
        // console.log(meta, 'META');
        // console.log(touched, 'TOUCHED');
        // console.log(errors, 'ERRORS');
        // console.log(values, "VALUES");
        // console.log(values.name, "VALUES.name");
        return (
          <>
            <label htmlFor={id}>
              {isRequired ? (
                <span title="Required">
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              ) : null}
              {label}
            </label>
            <DatePicker
              id={name}
              name={name}
              isRequired={isRequired}
              dateFormat={dateFormat || "MM/dd/yyyy"}
              className={className}
              placeholderText={placeholderText}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              selected={false}
              openToDate={dob}
              value={dob}
              onChange={date => {
                setDob(date);
                setFieldValue(name, date);
              }}
            />
            <div>{isError ? <div>{meta.error}</div> : null}</div>
          </>
        );
      }}
    </Field>
  );
};

RfiDatepicker.defaultProps = {
  // TODO better defaults?
  id: "",
  dateFormat: "",
  className: "",
  placeholderText: "",
  isRequired: false,
};

RfiDatepicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  dateFormat: PropTypes.string,
  className: PropTypes.string,
  placeholderText: PropTypes.string,
  isRequired: PropTypes.bool, // Implement our own req'd prop so Yup validates.
};

export { RfiDatepicker };
