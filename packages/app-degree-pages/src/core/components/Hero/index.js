// @ts-check
import React from "react";

import { contentPropType, imagePropType } from "../../models/app-prop-types";

/**
 * @typedef {import('../../models/app-props').HeroProps} HeroProps
 */

/**
 *
 * @param {HeroProps} props
 * @returns {JSX.Element}
 */
const Hero = ({ image, content }) => {
  return (
    <section className="container">
      Place holder HERO <br />
      <img src={image.url} alt={image.altText} />
      {content && <p>{content.text} </p>}
    </section>
  );
};

Hero.propTypes = {
  image: imagePropType.isRequired,
  content: contentPropType,
};

export { Hero };
