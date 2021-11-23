import PropTypes from "prop-types";
import React from "react";

import { NavControlButtons } from "./NavControls.styles";

export const NavControls = ({ clickPrev, clickNext }) => {
  return (
    <NavControlButtons>
      <button className="scroll-control-prev" type="button" onClick={clickPrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>
      <button className="scroll-control-next" type="button" onClick={clickNext}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>
    </NavControlButtons>
  );
};

NavControls.propTypes = {
  clickPrev: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
};
