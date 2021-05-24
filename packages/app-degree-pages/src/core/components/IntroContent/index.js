/* eslint-disable no-console */
// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import {
  contentPropType,
  contentPropTypes,
  imagePropType,
} from "../../models/app-prop-types";
import { tagHeadingList } from "../../models/constants";
import { spreadClasses } from "../../utils/css-utils";

/**
 * @typedef {import('../../models/app-props').IntroContentProps} IntroContentProps
 * @typedef {import('../../models/app-props').AppTitleProps} AppTitleProps
 */

const PhotoGrid = styled.div`
  .photo-item {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

/**
 *
 * @param {AppTitleProps} title
 * @returns
 */
function parseHeading(title, defaultHeading = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    (tagHeadingList.includes(title.component)
      ? title.component
      : defaultHeading)
  );
}

/**
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
function textPhotoGridTypeHtmlTemplate({ title, contents, photoGrid }) {
  const Heading = parseHeading(title);

  return (
    <section className="container">
      <div className="row p-3">
        <div className="col col-sm-12 col-md-6 col-lg-6 ">
          <Heading>
            <span className={`${spreadClasses(title.cssClass)}`}>
              {title.text}
            </span>
          </Heading>
          {contents.map((content, index) => (
            <p
              key={`content-${index + 1}`}
              className={`${spreadClasses(content.cssClass)}`}
            >
              {content.text}
            </p>
          ))}
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6 ">
          <PhotoGrid className="row">
            {photoGrid.images.map((image, index) => (
              <div
                className="photo-item col col-sm-12 col-md-6 col-lg-6"
                key={`img-${index + 1}`}
              >
                <img
                  className={`mg-fluid ${spreadClasses(image.cssClass)}`}
                  src={image.url}
                  alt={image.altText}
                  style={{ maxWidth: "100%" }}
                />
              </div>
            ))}
          </PhotoGrid>
        </div>
      </div>
    </section>
  );
}

/**
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
function textImageOverlapTypeHtmlTemplate({ title, contents, image }) {
  const Heading = parseHeading(title);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="uds-image-overlap">
            <img
              className={`mg-fluid ${spreadClasses(image.cssClass)}`}
              src={image.url}
              alt={image.altText}
            />
            <div className="content-wrapper">
              <Heading>
                <span className={`${spreadClasses(title.cssClass)}`}>
                  {title.text}
                </span>
              </Heading>
              {contents.map((content, index) => (
                <p
                  key={`content-${index + 1}`}
                  className={`${spreadClasses(content.cssClass)}`}
                >
                  {content.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
const textTypeHtmlTemplate = ({ title, contents }) => {
  const Heading = parseHeading(title);

  return (
    <section className="container">
      <div className="row p-3">
        <Heading className="col col-sm-12 col-md-6 col-lg-6">
          <span className={`${spreadClasses(title.cssClass)}`}>
            {title.text}
          </span>
        </Heading>
        {contents.map((content, index) => (
          <p
            key={`content-${index + 1}`}
            className={`col col-sm-12 col-md-6 col-lg-6 ${spreadClasses(
              content.cssClass
            )}`}
          >
            {content.text}
          </p>
        ))}
      </div>
    </section>
  );
};

/**
 *
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
const IntroContent = ({ type, title, contents, image, photoGrid }) => {
  const templateTypes = {
    "text": () => textTypeHtmlTemplate({ title, contents }),
    "text-image-overlay": () =>
      textImageOverlapTypeHtmlTemplate({ title, contents, image }),
    "text-photo-grid": () =>
      textPhotoGridTypeHtmlTemplate({ title, contents, image, photoGrid }),
    "undefined": () => {
      console.error(
        `the type '${type}' is not supported by the 'IntroContent' component.`
      );
      return null;
    },
  };

  return templateTypes[type]();
};

IntroContent.propTypes = {
  type: PropTypes.oneOf(["text", "text-image-overlay", "text-photo-grid"])
    .isRequired,
  image: imagePropType,
  header: contentPropType,
  title: PropTypes.shape({
    ...contentPropTypes,
    component: PropTypes.oneOf(tagHeadingList),
  }),
  contents: PropTypes.arrayOf(contentPropType),
  photoGrid: PropTypes.shape({
    images: PropTypes.arrayOf(imagePropType),
  }),
};

export { IntroContent };
