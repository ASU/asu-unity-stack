// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

import { trackGAEvent } from "../../core/services/googleAnalytics";

const defaultGAEvent = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button",
};

/**
 * @typedef {import('../../core/types/video-types').VideoProps} VideoProps
 */

/**
 * @param {VideoProps} props
 * @returns {JSX.Element}
 * @ignore
 */
const videoTemplate = ({
  url = "",
  vttUrl,
  caption = null,
  title = "",
  className,
  controls = true,
}) => {
  /** @type {React.MutableRefObject<HTMLVideoElement>} */
  const videoRef = useRef();

  const onVideoClick = e => {
    trackGAEvent({ ...defaultGAEvent, section: title });
  };

  return (
    <div
      className={classNames(`uds-video-container ${className}`, {
        "uds-video-with-caption": caption,
      })}
    >
      <div className="uds-video-player">
        <video
          ref={videoRef}
          title={title}
          onClick={onVideoClick}
          playsInline
          controls={controls || true}
        >
          <source src={url} />

          <track
            src={vttUrl}
            kind="captions"
            srcLang="en"
            label="english_captions"
          />
        </video>
      </div>
      {caption && (
        <figure data-testid="video-caption">
          <figcaption>{caption}</figcaption>
        </figure>
      )}
    </div>
  );
};

/**
 * @param {VideoProps} props
 * @returns {JSX.Element}
 * @ignore
 */
const youtubeTemplate = ({
  title = "",
  caption = null,
  url = "",
  className,
}) => (
  <div
    className={classNames(`uds-video-container ${className}`, {
      "uds-video-with-caption": caption,
    })}
  >
    <div className="uds-video-player youtube-video">
      <iframe title={title} src={url} />
    </div>
    {caption && (
      <figure data-testid="video-caption">
        <figcaption>{caption}</figcaption>
      </figure>
    )}
  </div>
);

/**
 *
 * @param {VideoProps} props
 * @returns {JSX.Element}
 */
const Video = props => {
  const {
    type = "video",
    url = "",
    vttUrl = null,
    title = "",
    caption = null,
    className = null,
    controls = true,
  } = props;
  return type === "youtube"
    ? youtubeTemplate({ url, title, caption, className })
    : videoTemplate({
        url,
        vttUrl,
        title,
        caption,
        className,
        controls,
      });
};

Video.propTypes = {
  type: PropTypes.oneOf(["video", "youtube"]),
  url: PropTypes.string,
  vttUrl: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  caption: PropTypes.string,
  controls: PropTypes.bool,
};

export { Video };
