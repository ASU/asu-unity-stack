/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import PropTypes from "prop-types";
import { Checkbox } from "./Checkbox";
import * as S from "./styles";

const Input = ({ type, ...props }) => {
  switch (type) {
    case "checkbox":
      return <Checkbox {...props} />;
    default:
      return <S.Input {...props}>{props.children}</S.Input>;
  }
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
      {children}
    </S.PanelInputWrapper>
  );
};

PanelInput.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
};

PanelInput.defaultProps = {};

export { Input, PanelInput };
