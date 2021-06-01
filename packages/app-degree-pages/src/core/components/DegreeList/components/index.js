// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { Button } from "../../../../../../components-core/src/components/Button";

const RequestInfo = ({ href }) => (
  <Button
    color="maroon"
    size="small"
    ariaLabel="Request Info"
    element="button"
    target="_blank"
    href={href}
  >
    Request Info
  </Button>
);

RequestInfo.propTypes = {
  href: PropTypes.string,
};

const ApplyNow = ({ onClick = () => null }) => (
  <Button color="gold" onClick={onClick} size="small" ariaLabel="Apply now">
    Apply Now
  </Button>
);

ApplyNow.propTypes = {
  onClick: PropTypes.func,
};

export { RequestInfo, ApplyNow };
