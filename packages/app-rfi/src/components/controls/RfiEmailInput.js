// @ts-check
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { Input, Label, Error, Text, E } from "./styled-components";

const RfiEmailInput = ({ name, label }) => {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }) => {
        console.log(touched, errors, "avoid unused errors");
        const isError = meta.touched && meta.error;
        return (
          <E>
            <Label htmlFor={name}>{label}</Label>
            <Input type="text" {...field} />
            <Text>{isError ? <Error>{meta.error}</Error> : null}</Text>
          </E>
        );
      }}
    </Field>
  );
};

RfiEmailInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export { RfiEmailInput };
