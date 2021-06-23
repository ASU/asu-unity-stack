// @ts-check
import React from "react";

import { OverlapContentImage } from "../../../../core/components";

/**
 *
 * @param {import("src/core/models/program-detail-types").GlobalOpportunityProps} props
 * @returns {JSX.Element}
 */
const GlobalOpportunity = ({ contents, image }) => (
  <section>
    <OverlapContentImage
      title="Global opportunities"
      contents={contents}
      image={image}
    />
  </section>
);

GlobalOpportunity.propTypes = OverlapContentImage.propTypes;

export { GlobalOpportunity };
