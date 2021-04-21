// @ts-check
/** @jsx h */
import { h, Fragment } from "preact";
import { PrevButton, NextButton } from ".";

const BaseNavButtonContainer = ({ children }) => (
  <div className="glide__arrows" data-glide-el="controls">
    {children}
  </div>
);

/**
 *
 * @param {{
 *  onClick?: () => void
 * }} props
 * @returns
 */
const NavButtons = ({ onClick = () => null }) => (
  <BaseNavButtonContainer>
    <PrevButton onClick={onClick} />
    <NextButton onClick={onClick} />
  </BaseNavButtonContainer>
);

export { BaseNavButtonContainer, NavButtons };
