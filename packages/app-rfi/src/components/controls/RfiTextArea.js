// @ts-check
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { TxtArea, Label, Error, Text, E } from "./styled-components";

const RfiTextArea = ({ label, name, id }) => {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }) => {
        console.log(touched, errors, "avoid not used errors");
        const isError = meta.touched && meta.error;
        return (
          <E>
            <Label htmlFor={id || name}>{label}</Label>
            <TxtArea error={isError} {...field} />
            <Text>{isError ? <Error>{meta.error}</Error> : null}</Text>
          </E>
        );
      }}
    </Field>
  );
};

RfiTextArea.defaultProps = {
  // TODO better defaults?
  id: "",
};

RfiTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export { RfiTextArea };
