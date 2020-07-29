/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Field } from "formik";

const Input = props => {
  return (
    <S.Input {...props}>
      {props.children}
    </S.Input>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {};

/** PanelInput Variant */
const PanelInput = ({ icon, name, type, label, children }) => {
  return (
    <S.PanelInput icon={icon}>
      <S.Input {...{ label, name, type }}>
        {children}
      </S.Input>
    </S.PanelInput>
  );
};

PanelInput.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
};

PanelInput.defaultProps = {};

export { Input, PanelInput };
