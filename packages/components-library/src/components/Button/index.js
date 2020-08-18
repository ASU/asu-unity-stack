/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from 'preact';
import * as S from "./styles";
import PropTypes from "prop-types";

/**
 * The button component will render a clickable button
 */
const Button = ({ children, href, ...props }) => {
  const type = href ? "link" : "button";

  return (
    <S.Button href={href} type={type} {...props}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  href: PropTypes.string
};

Button.defaultProps = {
};

export default Button;
