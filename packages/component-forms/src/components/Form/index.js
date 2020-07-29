/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Formik, Field, Form as FormikForm } from "formik";
import { FormPanel } from "./FormPanel";

const Form = ({ initialValues, onSubmit, children, ...props }) => {
  return (
    <S.FormWrapper>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <FormikForm>{children}</FormikForm>
      </Formik>
    </S.FormWrapper>
  );
};

Form.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  initalValues: {},
};

export { Form, FormPanel };
