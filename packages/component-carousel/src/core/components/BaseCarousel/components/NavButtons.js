// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { trackGAEvent } from "../../../services/googleAnalytics";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

const defaultGAEvent = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel",
};

const BaseNavButtonContainer = ({ children = null }) => (
  <div
    className="glide__arrows"
    data-glide-el="controls"
    data-testid="arrows-container"
  >
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
    <PrevButton
      onClick={() => {
        onClick();
        trackGAEvent({ ...defaultGAEvent, text: "left chevron" });
      }}
    />
    {children}
    <NextButton
      onClick={() => {
        onClick();
        trackGAEvent({ ...defaultGAEvent, text: "right chevron" });
      }}
    />
  </BaseNavButtonContainer>
);

NavButtons.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
};

export { BaseNavButtonContainer, NavButtons };
