// @ts-check
import React from "react";

import { OverlapContentImage } from "../../../../core/components";

/**
 *
 * @param {import("src/core/models/program-detail-types").GlobalOpportunityProps} props
 * @returns {JSX.Element}
 */
const CareerOutlook = ({ contents, image }) => (
  <section>
    <OverlapContentImage
      title="Career opportunities"
      contents={contents}
      image={image}
    />
  </section>
);

CareerOutlook.propTypes = OverlapContentImage.propTypes;

export { CareerOutlook };
