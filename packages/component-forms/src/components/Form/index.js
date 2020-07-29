/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Formik, Field, Form } from "formik";

const FormPanel = ({
  title,
  initialValues,
  onSubmit,
  fields,
  description,
  imgUrl,
  ...props
}) => {
  return (
    <S.FormPanel>
      <S.FormHeader
        {...{
          title,
          description,
          imgUrl,
        }}
      />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          {fields.map((item, index) => {
            if (item.type != "submit") {
              const check = item.type == "checkbox";

              return (
                <S.FormPanelField icon={item.icon}>
                  <S.FormField {...item}>
                    <Field
                      id={item.name}
                      name={item.name}
                      {...(item.placeholder
                        ? { placeholder: item.placeholder }
                        : {})}
                      type={item.type ? item.type : ""}
                    />
                  </S.FormField>
                </S.FormPanelField>
              );
            }

            return <button type="submit">{item.label}</button>;
          })}
        </Form>
      </Formik>
    </S.FormPanel>
  );
};

FormPanel.propTypes = {
  title: PropTypes.string,
  initialValues: PropTypes.object,
  fields: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
};

FormPanel.defaultProps = {
  initalValues: {},
  fields: [],
  header: "",
};

export default FormPanel;
