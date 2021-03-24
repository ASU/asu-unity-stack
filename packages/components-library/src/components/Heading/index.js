/* eslint-disable react/prop-types */
import * as S from "./styles";
import PropTypes from "prop-types";

const Heading = ({ type, ...props }) => {
  switch (type) {
    case "h4":
      return <S.H4 class={props.class}>{props.children}</S.H4>;
    case "h3":
      return <S.H3 class={props.class}>{props.children}</S.H3>;
    default:
      return "";
  }
};

Heading.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string
};

Heading.defaultProps = {};

export { Heading };
