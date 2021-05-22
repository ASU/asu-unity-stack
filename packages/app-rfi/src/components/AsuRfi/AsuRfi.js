// DISABLED@ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import PropTypes from "prop-types";
import React from "react";

// TODO Add to README: Requires peer dependency of @asu-design-system/bootstrap4-theme
// We import the styles in .storybook/preview.js for Storybook rendering, but
// otherwise, we only worry about using the correct markup and tweaking a few
// styles.

import { RfiMainForm } from "../stepper/RfiMainForm";
import "./AsuRfi.css";

const AsuRfi = ({ rfiConfig }) => {
  return (
    <div>
      <RfiMainForm rfiConfig={rfiConfig} />
    </div>
  );
};

export default AsuRfi;

// Props
AsuRfi.defaultProps = {
  rfiConfig: {
    Campus: "",
    College: "",
    Department: "",
    StudentType: "",
    AreaOfInterest: "",
    ProgramOfInterest: "",
    State: "",
  },
};

AsuRfi.propTypes = {
  rfiConfig: PropTypes.instanceOf(Object),
};
