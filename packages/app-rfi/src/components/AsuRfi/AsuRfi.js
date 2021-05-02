// DISABLED@ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import PropTypes from "prop-types";
import React from "react";

import RfiMainForm from "../steps";
import "./AsuRfi.css";

// import { Util } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO import styles!
// import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

// Needs to be set for CSS modules.
// See https://github.com/reactstrap/reactstrap/issues/1049
// Util.setGlobalCssModule(bootstrap)

const AsuRfi = ({ programPlanCode }) => {
  return (
    <div>
      <h2>Request for Information</h2>
      <RfiMainForm programPlancode={programPlanCode} />
    </div>
  );
};

export default AsuRfi;

// Props
AsuRfi.defaultProps = {
  // TODO real default...?
  programPlanCode: "",
};

AsuRfi.propTypes = {
  programPlanCode: PropTypes.string,
};
