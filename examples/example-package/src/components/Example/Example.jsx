import React from "react";
import PropTypes from "prop-types";
import {
  Util
} from "reactstrap";
import bootstrap from "asu-web-standards-bootstrap4/dist/css/bootstrap-asu.min.css";

// Needs to be set for CSS modules.
// See https://github.com/reactstrap/reactstrap/issues/1049
Util.setGlobalCssModule(bootstrap);


export default function Example() {
  return (
    <div>
      Hello Example!
    </div>
  );
}
