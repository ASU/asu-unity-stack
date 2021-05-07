// DISABLED@ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import PropTypes from "prop-types";
import React from "react";

// TODO import styles! How do we use these? Throws build error on resolving img paths.
// TODO this is how they do it in components-core... but we get errors in build and don't get all styles
// eslint-disable-next-line no-unused-vars
// import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";
// TODO this gives is better style coverage but still build errors. Probably
// need better webpack copy of assets to vendor and to improve how we use since
// components-core builds fine.
// eslint-disable-next-line no-unused-vars
import UdsStyles from "../../../node_modules/@asu-design-system/bootstrap4-theme/dist/css/bootstrap-asu.min.css";

import RfiMainForm from "../steps";
import "./AsuRfi.css";

// import { Util } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Needs to be set for CSS modules.
// See https://github.com/reactstrap/reactstrap/issues/1049
// Util.setGlobalCssModule(bootstrap)

const AsuRfi = ({ programPlanCode }) => {
  return (
    <div>
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
