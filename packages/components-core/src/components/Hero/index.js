// @ts-check
import PropTypes from "prop-types";
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
 *    type?: "heading-hero" | "story-hero" // defau is "heading-hero"
 *    image: ImageProps
 *    title?: ContentProps
 *    content?: ContentProps
 * }} HeroProps
 */

/**
 * @param {HeroProps} props
 * @returns {JSX.Element}
 */
function storyHeroHtmlTemplate({ image, title, content }) {
  // eslint-disable-next-line no-console
  console.log({ image, title, content });
  //  TODO: to be implemented
  return <div>TODO: to be implemented</div>;
}

/**
 * @param {HeroProps} props
 * @returns {JSX.Element}
 */
function headingHeroHtmlTemplate({ image, title, content }) {
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
}

/**
 *
 * @param {HeroProps} props
 * @returns {JSX.Element}
 */
const Hero = ({ type = "heading-hero", image, title, content }) => {
  const templateTypes = {
    "heading-hero": () => headingHeroHtmlTemplate({ image, title, content }),
    "story-hero": () => storyHeroHtmlTemplate({ image, title, content }),
    "undefined": () => {
      console.error(
        `the type '${type}' is not supported by the 'Hero' component.`
      );
      return null;
    },
  };

  return templateTypes[type]();
};

Hero.propTypes = {
  type: PropTypes.oneOf(["heading-hero", "story-hero"]),
  image: imagePropType.isRequired,
  title: contentPropType,
  content: contentPropType,
};

export { Hero };
