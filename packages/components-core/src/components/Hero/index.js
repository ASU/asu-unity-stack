// @ts-check
import React from "react";

import {
  contentPropType,
  imagePropType,
} from "../../core/models/shared-prop-types";
import { spreadClasses } from "../../core/utils/css-utils";

/**
 * @typedef {import('../../core/models/shared-model-types').ImageProps} ImageProps
 * @typedef {import('../../core/models/shared-model-types').ContentProps} ContentProps
 */

/**
 * @typedef {{
 *    image: ImageProps
 *    title?: ContentProps
 *    content?: ContentProps
 * }} HeroProps
 */

/**
 *
 * @param {HeroProps} props
 * @returns {JSX.Element}
 */
const Hero = ({ image, title, content }) => {
  return (
    <div
      className={`uds-hero ${spreadClasses(image.cssClass)}`}
      style={{
        backgroundImage: `url(${image.url})`,
      }}
    >
      <div className="container uds-hero-container">
        {title && (
          <h1 className="heading heading-one col-md-8">
            <span className={`${spreadClasses(title.cssClass)}`}>
              {title.text}
            </span>
          </h1>
        )}
        {content && (
          <div className="uds-hero-text col-sm-12 col-md-7">
            <p>{content.text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Hero.propTypes = {
  image: imagePropType.isRequired,
  title: contentPropType,
  content: contentPropType,
};

export { Hero };
