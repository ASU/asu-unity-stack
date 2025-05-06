import PropTypes from "prop-types";
import React from "react";

import { GaEventWrapper } from "../../GaEventWrapper/GaEventWrapper";
import { NavControlButtons } from "./NavControls.styles";
import { useBaseSpecificFramework } from "../../GaEventWrapper/useBaseSpecificFramework";

/**
 * @typedef {Object} NavControlsProps
 * @property {import("../../GaEventWrapper/GaEventWrapper").GaEventType} gaData
 * @property {boolean} hidePrev
 * @property {boolean} hideNext
 * @property {() => void} slideNav
 */
const NavControls = ({ gaData, hidePrev, hideNext, slideNav }) => {
  const { isReact, isBootstrap } = useBaseSpecificFramework();
  return (
    <NavControlButtons>
      {(!hidePrev || isBootstrap) && (
        <GaEventWrapper gaData={{ ...gaData, text: "left chevron" }}>
          <button
            className="scroll-control-prev"
            type="button"
            onClick={isReact && (() => slideNav(-1))}
            tabIndex={-1}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
        </GaEventWrapper>
      )}
      {(!hideNext || isBootstrap) && (
        <GaEventWrapper gaData={{ ...gaData, text: "right chevron" }}>
          <button
            className="scroll-control-next"
            type="button"
            onClick={isReact && (() => slideNav(1))}
            tabIndex={-1}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </GaEventWrapper>
      )}
    </NavControlButtons>
  );
};

NavControls.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: PropTypes.object,
  hidePrev: PropTypes.bool,
  hideNext: PropTypes.bool,
  slideNav: PropTypes.func.isRequired,
};

export { NavControls };
