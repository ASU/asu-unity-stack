// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

import { VideoOverlay } from "./index.styles";

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
}) => {
  /** @type {React.MutableRefObject<HTMLVideoElement>} */
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);

  function toggleVideo() {
    const video = videoRef.current;
    if (video.paused) video.play();
    else video.pause();
  }

  function toggleOverLay() {
    setPlaying(!playing);
  }

  function onVideoClick(e) {
    e.stopPropagation();
    toggleVideo();
    toggleOverLay();
  }

  function onVideoEnded() {
    toggleOverLay();
  }

  function onPlayButtonClick(e) {
    e.stopPropagation();
    toggleOverLay();
    toggleVideo();
  }

  function onOverlayClick(e) {
    e.stopPropagation();
    toggleOverLay();
    toggleVideo();
  }

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
          onEnded={onVideoEnded}
          playsInline
        >
          <source src={url} />

          <track
            src={vttUrl}
            kind="captions"
            srcLang="en"
            label="english_captions"
          />
        </video>

        <VideoOverlay
          role="button"
          tabIndex={0}
          className="uds-video-overlay"
          onKeyDown={onOverlayClick}
          onClick={onOverlayClick}
          data-playing={playing}
        >
          <button
            type="button"
            onClick={onPlayButtonClick}
            className="btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play"
          >
            <i className="fas fa-play" />
            <span className="sr-only">Play</span>
          </button>
        </VideoOverlay>
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
  } = props;
  return type === "youtube"
    ? youtubeTemplate({ url, title, caption, className })
    : videoTemplate({
        url,
        vttUrl,
        title,
        caption,
        className,
      });
};

Video.propTypes = {
  type: PropTypes.oneOf(["video", "youtube"]),
  url: PropTypes.string,
  vttUrl: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  caption: PropTypes.string,
};

export { Video };
