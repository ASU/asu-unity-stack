/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
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
  href: PropTypes.string,
  gold: PropTypes.bool,
  maroon: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export { Button };
