/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Field, ErrorMessage } from "formik";
import { PanelInput } from "../Input";
import { Form } from "./";

const FormPanel = ({ title, fields, description, imgUrl, ...props }) => {
  return (
    <S.FormPanel>
      <S.FormHeader
        {...{
          title,
          description,
          imgUrl,
        }}
      />
      <Form {...props}>
        {fields.map((item, index) => {
          if (item.type != "submit") {
            return (
              <>
                <PanelInput {...item}>
                  <Field
                    id={item.name}
                    name={item.name}
                    {...(item.placeholder
                      ? { placeholder: item.placeholder }
                      : {})}
                    type={item.type ? item.type : ""}
                  />
                </PanelInput>
                <ErrorMessage {...{ name: item.name }} render={(msg) => <S.InputError>{msg}</S.InputError>} />
              </>
            );
          }

          return <button type="submit">{item.label}</button>;
        })}
      </Form>
    </S.FormPanel>
  );
};

FormPanel.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  validate: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  children: PropTypes.element,
  autoSubmit: PropTypes.bool,
};

FormPanel.defaultProps = {
  autoSubmit: false,
};

export { FormPanel };
