// @ts-check
import classNames from "classnames";
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
 *    type?: "heading-hero" | "story-hero" // defaut value is "heading-hero"
 *    image: ImageProps
 *    title?: ContentProps
 *    contents?: ContentProps[]
 * }} HeroProps
 */

/**
 * @param {HeroProps} props
 * @returns {JSX.Element}
 */
function storyHeroHtmlTemplate({ image, title, contents }) {
  // eslint-disable-next-line no-console
  console.log({ image, title, contents });
  //  TODO: to be implemented
  return <div>TODO: to be implemented</div>;
}

/**
 * @param {HeroProps} props
 * @returns {JSX.Element}
 */
function headingHeroHtmlTemplate({ image, title, contents }) {
  const imageSize = {
    small: "uds-hero-sm",
    medium: "uds-hero-md",
    large: "uds-hero-lg",
    undefined: null,
  };

  const highlightColor = {
    gold: "highlight highlight-gold",
    black: "highlight highlight-black",
    undefined: null,
  };

  return (
    <div
      className={classNames(`uds-hero ${spreadClasses(image.cssClass)}`, {
        [imageSize[image.size]]: image.size,
      })}
      style={{
        backgroundImage: `url(${image.url})`,
      }}
    >
      <div className="container uds-hero-container">
        {title && (
          <h1 className="heading heading-one col-md-8">
            <span
              className={classNames(`${spreadClasses(title.cssClass)}`, {
                [highlightColor[title.highlightColor]]: title.highlightColor,
              })}
            >
              {title.text}
            </span>
          </h1>
        )}
        {contents &&
          contents.map((content, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`content-${index}`}
              className="uds-hero-text col-sm-12 col-md-7"
            >
              <p>{content.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

/**
 *
 * @param {HeroProps} props
 * @returns {JSX.Element}
 */
const Hero = ({ type = "heading-hero", image, title, contents }) => {
  const templateTypes = {
    "heading-hero": () => headingHeroHtmlTemplate({ image, title, contents }),
    "story-hero": () => storyHeroHtmlTemplate({ image, title, contents }),
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
  contents: PropTypes.arrayOf(contentPropType),
};

export { Hero };
