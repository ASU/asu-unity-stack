// TODO: THIS COMPONENTs are CURRENTLY DEFERRED
// @ts-check
import PropTypes from "prop-types";
import React from "react";
import { Button } from "../../../../../components-core/src/components/Button";

const ApplyNow = ({ href = null }) => (
  // @ts-ignore
  <Button label="Apply now" ariaLabel="Apply now" href={href} color="gold" />
);

ApplyNow.propTypes = {
  href: PropTypes.string,
};

const RequestInfo = ({ href }) => (
  // @ts-ignore
  <Button
    label=" Request Info"
    ariaLabel="Request Info"
    color="maroon"
    size="small"
    element="button"
    target="_blank"
    href={href}
    /* TODO: those attributes might be optionals,
    refactor JSDOC in Button to allow that */
    // block={false}
    // disabled={false}
    // icon={null}
    // innerRef={null}
    // onClick={null}
    //    element={null}
    //    href={null}
  />
);

RequestInfo.propTypes = {
  href: PropTypes.string,
};

export { ApplyNow, RequestInfo };
