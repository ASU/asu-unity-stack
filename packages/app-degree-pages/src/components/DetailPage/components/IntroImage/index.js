// @ts-check
import React from "react";

import { imagePropType } from "../../../../core/models";

/**
 * @param {import("src/core/models/shared-types").ImageItem} props
 */
const IntroImage = ({ url, altText }) => (
  <div className="uds-img pt-3 pb-3" data-testid="intro-image">
    <img src={url} className="img-fluid" alt={altText} />
  </div>
);

IntroImage.propTypes = { ...imagePropType };
export { IntroImage };
