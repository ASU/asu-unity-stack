// @ts-check
import { useField, Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { Span, Error, Text, LabelGroup, Label, E } from "./styled-components";

const RfiCheckboxMulti = ({ label, name, options }) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  console.log(field, "avoid undefined");
  const isError = meta.touched && meta.error;
  return (
    <E>
      {/* <div>meta.touched:{""+meta.touched} meta.error:{meta.error}</div> */}
      <LabelGroup>{label}</LabelGroup>
      {options.map(option => (
        <Label key={option.id || option.value}>
          <Field type="checkbox" name={name} value={option.value} />
          <Span>{option.text}</Span>
        </Label>
      ))}
      <Text>{isError ? <Error>{meta.error}</Error> : null}</Text>
    </E>
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
