// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

const BaseNavButtonContainer = ({ children = null }) => (
  <div className="glide__arrows" data-glide-el="controls">
    {children}
  </div>
);
BaseNavButtonContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

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
  children: PropTypes.element,
  onClick: PropTypes.func,
};

export { BaseNavButtonContainer, NavButtons };
