// @ts-check
import { Field, useField } from "formik";
import PropTypes from "prop-types";
import React from "react";

import { Text, Error, Label, Span, E } from "./styled-components";

const RfiCheckboxSingle = ({ children, name, value }) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  console.log(field, "avoid undefined");
  const isError = meta.touched && meta.error;
  return (
    <E>
      {/* <div>meta.touched:{""+meta.touched} meta.error:{meta.error}</div> */}
      <Label className="checkbox">
        <Field type="checkbox" name={name} value={value} />
        <Span>{children}</Span>
      </Label>
      <Text>{isError ? <Error>{meta.error}</Error> : null}</Text>
    </E>
  );
};

RfiCheckboxSingle.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export { RfiCheckboxSingle };
