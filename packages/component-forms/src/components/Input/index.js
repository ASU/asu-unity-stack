/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import PropTypes from "prop-types";
import {ErrorMessage} from "formik";
import * as S from "./styles";

const Input = props => {
  return <S.Input {...props}>{props.children}</S.Input>;
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {};

/** PanelInput Variant */
const PanelInput = ({ icon, name, type, label, description, children }) => {
  return (
    <S.PanelInputWrapper>
      <S.PanelInputCard {...{ icon, label }}>{description}</S.PanelInputCard>
      <S.Input {...{ label, name, type }}>{children}</S.Input>
    </S.PanelInputWrapper>
  );
};

PanelInput.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
};

PanelInput.defaultProps = {};

export { Input, PanelInput };
