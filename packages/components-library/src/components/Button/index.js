/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from 'preact';
import * as S from "./styles";

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

Button.defaultProps = {
  href: undefined,
};

export default Button;
