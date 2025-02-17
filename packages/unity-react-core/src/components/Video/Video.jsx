// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useRef } from "react";

import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

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
  caption,
  title = "",
  className,
  controls = true,
}) => {
  /** @type {React.MutableRefObject<HTMLVideoElement | null>} */
  const videoRef = useRef(null);

  return (
    <div
      className={classNames(`uds-video-container ${className}`, {
        "uds-video-with-caption": caption,
      })}
    >
      <div className="uds-video-player">
        <GaEventWrapper gaData={{ ...defaultGAEvent, section: title }}>
          <video
            ref={videoRef}
            title={title}
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
        </GaEventWrapper>
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
const youtubeTemplate = ({ title = "", caption, url = "", className }) => (
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
    vttUrl,
    title = "",
    caption,
    className,
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
