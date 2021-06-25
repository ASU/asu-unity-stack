/* eslint-disable no-console */
// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import {
  ApplyNow,
  OverlapContentImage,
  Video,
} from "../../../../core/components";
import {
  contentPropType,
  contentPropTypes,
  imagePropType,
  tagHeadingList,
  videoPropType,
} from "../../../../core/models";
import { spreadClasses, parseHeading } from "../../../../core/utils";

/**
 * @typedef {import('../../../../core/models/listing-page-types').IntroContentProps} IntroContentProps
 * @typedef {import('../../../../core/models/shared-types').AppTitleProps} AppTitleProps
 */

const PhotoGrid = styled.div`
  .photo-item {
    padding-top: 1.25rem;
  }
`;

const SectionWrapper = styled.div`
  .uds-img,
  .uds-video-container {
    margin-top: 1.25rem;
  }
`;

/**
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
function textPhotoGridTypeHtmlTemplate({
  applyNowUrl,
  title,
  contents,
  photoGrid,
}) {
  const Heading = parseHeading(title);

  return (
    <section className="container">
      <div className="row pt-3">
        <div className="col col-sm-12 col-md-5 pl-0">
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
          <ApplyNow href={applyNowUrl} />
        </div>
        <div className="col col-sm-12 col-md-7">
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
function textTextMediaTypeHtmlTemplate({
  applyNowUrl,
  title,
  contents,
  image,
  video,
}) {
  const Heading = parseHeading(title);

  return (
    <SectionWrapper className="container">
      <div className="row pt-3">
        <div className="col col-sm-12 col-md-5">
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
          <ApplyNow href={applyNowUrl} />
        </div>
        <div className="col col-sm-12 col-md-7">
          {video && (
            <Video
              url={video.url}
              vttUrl={video.vttUrl}
              altText={video.altText}
            />
          )}
          {image && (
            <div className="uds-img">
              <img src={image.url} className="img-fluid" alt={image.altText} />
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

/**
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
function textImageOverlapTypeHtmlTemplate({ title, contents, image }) {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <OverlapContentImage
            title={title.text}
            contents={contents}
            image={image}
            contentDirection="right"
            // contentChildren={<ApplyNow href={applyNowUrl} />}
          />
        </div>
      </div>
    </section>
  );
}

/**
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
const textTypeHtmlTemplate = ({ applyNowUrl, title, contents }) => {
  const Heading = parseHeading(title);

  return (
    <section className="container">
      <div className="row pt-3">
        <div className="col col-sm-12 col-md-5">
          <Heading>
            <span className={`${spreadClasses(title.cssClass)}`}>
              {title.text}
            </span>
          </Heading>
        </div>
        <div className="col col-sm-12 col-md-7 pt-2">
          {contents.map((content, index) => (
            <p
              key={`content-${index + 1}`}
              className={`${spreadClasses(content.cssClass)}`}
            >
              {content.text}
            </p>
          ))}
          <ApplyNow href={applyNowUrl} />
        </div>
      </div>
    </section>
  );
};

/**
 *
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
const IntroContent = ({
  applyNowUrl,
  type,
  title,
  contents,
  image,
  video,
  photoGrid,
}) => {
  const templateTypes = {
    "text": () => textTypeHtmlTemplate({ applyNowUrl, title, contents }),
    "text-media": () =>
      textTextMediaTypeHtmlTemplate({
        applyNowUrl,
        title,
        contents,
        image,
        video,
      }),
    "text-image-overlay": () =>
      textImageOverlapTypeHtmlTemplate({ applyNowUrl, title, contents, image }),
    "text-photo-grid": () =>
      textPhotoGridTypeHtmlTemplate({
        applyNowUrl,
        title,
        contents,
        image,
        photoGrid,
      }),
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
  applyNowUrl: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid",
  ]).isRequired,
  video: videoPropType,
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
