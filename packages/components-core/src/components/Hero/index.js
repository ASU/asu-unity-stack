// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import {
  contentPropType,
  imagePropType,
} from "../../core/models/shared-prop-types";
import { HeroImage } from "./index.styles";

/**
 * @typedef {import('../../core/types/hero-types').HeroProps} HeroProps
 */

/**
 * @param {HeroProps} props
 * @returns {JSX.Element}
 * @ignore
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
 * @ignore
 */
function headingHeroHtmlTemplate({
  image,
  subTitle,
  title,
  contents,
  contentsColor,
}) {
  const imageSize = {
    small: "uds-hero-sm",
    medium: "uds-hero-md",
    large: "uds-hero-lg",
    undefined: "",
  };

  const highlightColor = {
    gold: "highlight-gold",
    black: "highlight-black",
    white: "highlight-white",
    undefined: "",
  };

  const textColor = {
    black: "text-dark",
    white: "text-white",
    undefined: "",
  };

  return (
    <div
      className={classNames(`uds-hero`, {
        [imageSize[image.size]]: image.size,
      })}
    >
      <HeroImage
        className="hero"
        src={image.url}
        alt={image.altText}
        data-testid="hero-image"
      />

      {subTitle && (
        <div role="doc-subtitle" data-testid="hero-subtitle">
          <span
            className={classNames({
              [textColor[subTitle.color]]: subTitle.color,
              [highlightColor[subTitle.highlightColor]]:
                subTitle.highlightColor,
            })}
          >
            {subTitle.text}
          </span>
        </div>
      )}

      {title && (
        <h1 style={{ maxWidth: title.maxWidth || "" }} data-testid="hero-title">
          <span
            className={classNames({
              [textColor[title.color]]: title.color,
              [highlightColor[title.highlightColor]]: title.highlightColor,
            })}
          >
            {title.text}
          </span>
        </h1>
      )}

      {contents && (
        <div
          data-testid="hero-content"
          className={classNames("content", {
            [textColor[contentsColor]]: contentsColor,
          })}
        >
          {contents.map((content, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={`content-${index}`}>{content.text}</p>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 *
 * @param {HeroProps} props
 * @returns {JSX.Element}
 */
const Hero = props => {
  const type = props.type || "heading-hero";

  const templateTypes = {
    "heading-hero": () => headingHeroHtmlTemplate(props),
    "story-hero": () => storyHeroHtmlTemplate(props),
    "undefined": () => {
      // eslint-disable-next-line no-console
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
  image: imagePropType,
  title: contentPropType,
  subTitle: contentPropType,
  contents: PropTypes.arrayOf(contentPropType),
  contentsColor: PropTypes.string,
};

export { Hero };
