/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Formik, Field, Form } from "formik";

const FormPanel = ({ title, initialValues, onSubmit, fields, header, ...props }) => {

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          {fields.map((item, index) => {
            return (
              <Fragment>
                <label htmlFor={item.name}>{item.label}</label>
                <Field
                  id={item.id}
                  name={item.name}
                  {...item.placeholder ? {placeholder: item.placeholder}: {}}
                  type={item.type ? item.type : ""}
                />
              </Fragment>
            );
          })}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

FormPanel.propTypes = {
  title: PropTypes.string,
  initialValues: PropTypes.object,
  fields: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
  header: PropTypes.string
};

FormPanel.defaultProps = {
  initalValues: {},
  fields: [],
  header: ""
};

export default FormPanel;
