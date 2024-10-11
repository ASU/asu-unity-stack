import PropTypes from "prop-types";
import React from "react";

import { NavControlButtons } from "./NavControls.styles";

const NavControls = ({ hidePrev, hideNext, clickPrev, clickNext }) => {
  return (
    <NavControlButtons>
      {!hidePrev && (
        <button
          className="scroll-control-prev"
          type="button"
          onClick={clickPrev}
          tabIndex={-1}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
      )}
      {!hideNext && (
        <button
          className="scroll-control-next"
          type="button"
          onClick={clickNext}
          tabIndex={-1}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      )}
    </NavControlButtons>
  );
};

NavControls.propTypes = {
  hidePrev: PropTypes.bool,
  hideNext: PropTypes.bool,
  clickPrev: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
};

export { NavControls };
