/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from 'preact';
import * as S from "./styles";

/**
 * The button component will render a clickable button
 */
const Button = ({ children, href, ...props }) => {
  const TagName = href ? S.ButtonLink : S.Button;

  return (
    <TagName class="button" href={href} {...props}>
      {children}
    </TagName>
  );
};

Button.defaultProps = {
  href: undefined,
};

export default Button;
