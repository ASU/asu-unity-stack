/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import * as S from "./styles";
import PropTypes from "prop-types";

const H4 = props => {
  return <S.H4 class={props.class}>{props.children}</S.H4>;
};

H4.propTypes = {
  class: PropTypes.string,
};

H4.defaultProps = {};

export { H4 };
