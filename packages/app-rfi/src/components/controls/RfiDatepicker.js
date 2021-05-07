// DISABLED@ts-check
/* eslint-disable no-unused-vars */
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik"; // removed unused Formik, setFieldValue
import PropTypes from "prop-types";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { RfiLabel, RfiError } from "./controls-helpers";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const RfiDatepicker = ({
  label,
  name,
  id,
  dateFormat,
  className,
  placeholderText,
  requiredIcon,
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
          <div className="form-group">
            <RfiLabel
              label={label}
              name={name}
              id={id}
              requiredIcon={requiredIcon}
            />
            <div className="input-group input-group-trailing-icon">
              <DatePicker
                id={name}
                name={name}
                // isRequired={isRequired}
                dateFormat={dateFormat || "MM/dd/yyyy"}
                className={className}
                placeholderText={placeholderText}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                // selected={false}
                selected={dob}
                openToDate={dob}
                value={dob}
                onChange={date => {
                  setDob(date);
                  setFieldValue(name, date);
                  console.log(date, "date");
                  console.log(dob, "dob");
                }}
              />
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <RfiError isError={isError} metaError={meta.error} />
          </div>
        );
      }}
    </Field>
  );
};

// Note on requiredIcon. Yup required status is not readily available so we
// duplicate the setting in our props got displaying the required icon until
// Formik has a better way to do it.

RfiDatepicker.defaultProps = {
  // TODO better defaults?
  id: undefined,
  dateFormat: undefined,
  className: undefined,
  placeholderText: undefined,
  requiredIcon: false,
};

RfiDatepicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  dateFormat: PropTypes.string,
  className: PropTypes.string,
  placeholderText: PropTypes.string,
  requiredIcon: PropTypes.bool, // Implement our own req'd prop so Yup validates.
};

export { RfiDatepicker };
