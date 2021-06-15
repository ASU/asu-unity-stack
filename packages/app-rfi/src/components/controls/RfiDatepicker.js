// DISABLED@ts-check
/* eslint-disable no-unused-vars */
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik"; // removed unused Formik, setFieldValue
import PropTypes from "prop-types";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { RfiLabel, RfiError } from "./controls-helpers";

// TODO nix the kitchen sink. Requires resolution of build issues.
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
        // TODO We strive to keep implementation details out of the control
        // components, but with the datepicker the automatic value mapping from
        // Formik needs a little help. The value defaults to undefined, but
        // if we return after setting, it'll be set correctly if we map it here.
        const [dateVal, setDateVal] = useState(values.dateOfBirth);
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
                selected={dateVal}
                openToDate={dateVal}
                value={dateVal}
                onChange={date => {
                  setDateVal(date);
                  setFieldValue(name, date);
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
