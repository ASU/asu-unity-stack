// @ts-check
import React from "react";

import { imagePropType } from "../../models/app-prop-types";

/**
 * @typedef {import('../../models/app-props').IntroContentProps} IntroContentProps
 */

/**
 *
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
const IntroContent = ({ image }) => {
  return (
    <section className="container">
      Place holder Intro Content <br />
      <img src={image.url} alt={image.altText} />
    </section>
  );
};

IntroContent.propTypes = {
  image: imagePropType.isRequired,
};

export { IntroContent };
