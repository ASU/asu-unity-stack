import React from "react";
import PropTypes from "prop-types";
import { sanitizeDangerousMarkup } from "../../../../../../../shared";

function ProfessionalLicensure({ content = "" }) {
  return (
    <section
      className="container"
    >
      <h3>Professional licensure</h3>
        <p
        dangerouslySetInnerHTML={sanitizeDangerousMarkup(content)}
        />
    </section>
  );
};

ProfessionalLicensure.propTypes = {
  content: PropTypes.node,
};

export { ProfessionalLicensure };
