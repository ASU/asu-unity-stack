// @ts-check
/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { Span, Error, Text, LabelGroup, E } from "./styled-components";

const RfiRadioGroup = ({ name, options, label }) => {
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
          <E>
            <LabelGroup htmlFor={name}>{label}</LabelGroup>
            {options.map(option => (
              <span key={option.key ? option.key : option.value}>
                <Field type="radio" {...field} value={option.value} />{" "}
                <Span>{option.text}</Span>
              </span>
            ))}
            <Text>{isError ? <Error>{meta.error}</Error> : null}</Text>
          </E>
        );
      }}
    </Field>
  );
};

RfiRadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { RfiRadioGroup };
