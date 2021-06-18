// TODO: THIS COMPONENT IS CURRENTLY DEFERRED
// @ts-check
import { Button } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

const ApplyNow = ({ onClick = () => null }) => (
  // @ts-ignore
  <Button
    label="Apply now"
    ariaLabel="Apply now"
    onClick={onClick}
    color="gold"
    size="small"
  />
);

ApplyNow.propTypes = {
  onClick: PropTypes.func,
};

export { ApplyNow };
