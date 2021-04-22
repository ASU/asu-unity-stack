// @ts-check
/** @jsx h */
import { h, Fragment } from "preact";
import PropTypes from "prop-types";

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
 *  children?: JSX.Element
 * }} props
 * @returns
 */
const NavButtons = ({ onClick = () => null, children = null }) => (
  <BaseNavButtonContainer>
    <PrevButton onClick={onClick} />
    {children}
    <NextButton onClick={onClick} />
  </BaseNavButtonContainer>
);

NavButtons.propTypes = {
  children: PropTypes.object,
  onItemClick: PropTypes.func,
};

export { BaseNavButtonContainer, NavButtons };
