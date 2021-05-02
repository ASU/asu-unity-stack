// DISABLED@ts-check
import { Field } from "formik"; // removed unused Formik, setFieldValue
import PropTypes from "prop-types";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { Label, Error, Text, E } from "./styled-components"; // removed unused Input

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const RfiDatepicker = ({
  label,
  name,
  id,
  dateFormat,
  className,
  placeholderText,
}) => {
  return (
    <Field name={name}>
      {({
        field,
        form: { touched, errors, values, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => {
        const isError = meta.touched && meta.error;
        console.log(field, touched, errors, setFieldValue, "avoid undefined");
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
        console.log(values, "VALUES");
        console.log(values.name, "VALUES.name");
        return (
          <E>
            <Label htmlFor={id || name}>{label}</Label>
            <DatePicker
              name={name}
              dateFormat={dateFormat || "MM/dd/yyyy"}
              className={className}
              placeholderText={placeholderText}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              selected={dob}
              value={dob}
              onChange={date => {
                setDob(date);
                setFieldValue(name, date);
              }}
            />
            <Text>{isError ? <Error>{meta.error}</Error> : null}</Text>
          </E>
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
};

RfiDatepicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  dateFormat: PropTypes.string,
  className: PropTypes.string,
  placeholderText: PropTypes.string,
};

export { RfiDatepicker };
