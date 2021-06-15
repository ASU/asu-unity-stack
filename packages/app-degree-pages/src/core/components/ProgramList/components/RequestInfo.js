// TODO: THIS COMPONENT IS CURRENTLY DEFERRED
// @ts-check
import { Button } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

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

export { RequestInfo };
