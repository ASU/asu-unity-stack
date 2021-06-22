// @ts-check
import {
  Button,
  Accordion,
} from "@asu-design-system/components-core/src/components";
import PropTypes from "prop-types";
import React from "react";

import { accordionCardPropTypes } from "../../../../core/models/app-prop-types";

/**
 * @typedef {import('../../../../core/models/program-detail-types').ApplicationRequirementsProps} ApplicationRequirementsProps
 */

/**
 * @param {ApplicationRequirementsProps} props
 * @returns {JSX.Element}
 */

function ApplicationRequirements({ accordionCards }) {
  return (
    <section>
      <h2>
        <span className="highlight-gold">Application requirements</span>
      </h2>
      <h3 className="mt-4">General university admission requirements</h3>
      <p>
        All students are required to meet general university admission
        requirements
      </p>
      <div>
        <Button
          ariaLabel="Freshman"
          color="maroon"
          href="https://admission.asu.edu/freshman/apply "
          label="Freshman"
          size="small"
        />
        <Button
          ariaLabel="Transfer"
          color="maroon"
          href="https://admission.asu.edu/transfer/apply"
          label="Transfer"
          size="small"
        />
        <Button
          ariaLabel="International"
          color="maroon"
          href="https://admission.asu.edu/international/undergrad-apply"
          label="International"
          size="small"
        />
        <Button
          ariaLabel="Readmission"
          color="maroon"
          href="https://admission.asu.edu/undergrad/readmission"
          label="Readmission"
          size="small"
        />
      </div>
      <div className="mt-2 mb-4">
        <Accordion cards={accordionCards} openedCard={1} />
      </div>
    </section>
  );
}

ApplicationRequirements.propTypes = {
  accordionCards: PropTypes.arrayOf(accordionCardPropTypes).isRequired,
};

export { ApplicationRequirements };
