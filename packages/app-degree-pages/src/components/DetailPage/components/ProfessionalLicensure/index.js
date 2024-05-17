import PropTypes from "prop-types";
import React from "react";

import { sanitizeDangerousMarkup } from "../../../../../../../shared";

function ProfessionalLicensure({ content = "" }) {
  return (
    <section className="container" data-testid="professional-licensure">
      <h3>Professional licensure</h3>
      <p dangerouslySetInnerHTML={sanitizeDangerousMarkup(content)} />
    </section>
  );
}

ProfessionalLicensure.propTypes = {
  content: PropTypes.node,
};

export { ProfessionalLicensure };
