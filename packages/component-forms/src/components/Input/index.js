/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import PropTypes from "prop-types";
import { Checkbox } from "./Checkbox";
import { Toggle } from "./Toggle";

import * as S from "./styles";

const Input = ({ type, ...props }) => {
  switch (type) {
    case "checkbox":
      return <Checkbox {...props} />;
    case "toggle":
      return <Toggle {...props} />;
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
const PanelInput = ({ icon, label, description, children, id, title, ...props }) => {
  return (
    <S.PanelInputWrapper>
      {description ? (
        <S.PanelInputCard {...{ icon, label, id, title }}>
          {description}
        </S.PanelInputCard>
      ) : (
        <div class="title-only"><S.PanelInputInfo {...{ icon }}>{title}</S.PanelInputInfo></div>
      )}
      {children}
    </S.PanelInputWrapper>
  );
};

PanelInput.propTypes = {
  icon: PropTypes.string, // icon to be displayed at beginning of field info card
  label: PropTypes.string, // label for screenreaders only (not displayed)
  title: PropTypes.string, // displayed alongside field
  description: PropTypes.string, // desciption to expand when field info card is expanded
  id: PropTypes.string, // id to use on field info card
  children: PropTypes.node,
};

PanelInput.defaultProps = {};

export { Input, PanelInput };
