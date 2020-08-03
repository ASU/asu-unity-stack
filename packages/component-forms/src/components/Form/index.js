/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useEffect, useRef } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Formik, Form as FormikForm } from "formik";
import { FormPanel } from "./FormPanel";

/**
 * Component to autosubmit Formik values whenever the form values change
 * Adapted from 'vojtechportes' answer here: https://github.com/formium/formik/issues/1218
 **/
const AutoSubmit = ({ values, submitForm }) => {
  // The form should not submit on the first render. The 'firstUpdate' ref
  // is updated after the first useEffect call, and will allow form to autosubmit on
  // subsequent updates.
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    submitForm();
  }, [values, submitForm]);

  return null;
};

const Form = ({ initialValues, onSubmit, validate, autoSubmit, children }) => {
  return (
    <S.FormWrapper>
      <Formik {...{ initialValues, onSubmit, validate }}>
        {({ isSubmitting, values, submitForm, errors, touched }) => {
          return (
            <>
              <FormikForm>{children}</FormikForm>
              {autoSubmit && <AutoSubmit {...{ values, submitForm }} />}
            </>
          );
        }}
      </Formik>
    </S.FormWrapper>
  );
};

Form.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  validate: PropTypes.func,
  autoSubmit: PropTypes.bool,
};

Form.defaultProps = {
  initalValues: {},
  autoSubmit: false,
};

export { Form, FormPanel };
