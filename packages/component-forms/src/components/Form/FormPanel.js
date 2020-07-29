/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Field} from "formik";
import { PanelInput } from "../Input";
import {Form} from "./";


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
      <Form {...{initialValues, onSubmit}}>
        {fields.map((item, index) => {
          if (item.type != "submit") {
            return (
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
            );
          }

          return <button type="submit">{item.label}</button>;
        })}
      </Form>
    </S.FormPanel>
  );
};

FormPanel.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  children: PropTypes.element,
};

FormPanel.defaultProps = {};

export { FormPanel };
