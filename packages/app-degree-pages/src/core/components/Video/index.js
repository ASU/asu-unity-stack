import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";

/**
 * @typedef {import('../../models/shared-types').VideoItem} VideoItem
 */

const VideoOverlay = styled.div`
  &[data-playing="true"] {
    display: none;
  }
`;

/**
 *
 * @param {VideoItem} props
 * @returns
 */
const Video = ({ url = "", vttUrl, altText = "" }) => {
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
    <div className="uds-video-container">
      <div className="uds-video-player">
        <video
          ref={videoRef}
          title={altText}
          onClick={onVideoClick}
          onEnded={onVideoEnded}
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
            className={
              "btn btn-circle btn-circle-large" +
              " btn-circle-alt-white uds-video-btn-play"
            }
          >
            <svg
              className="svg-inline--fa fa-play fa-w-14"
              aria-hidden="true"
              focusable="false"
              data-prefix="fa"
              data-icon="play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
              />
            </svg>
            <span className="sr-only">Play</span>
          </button>
        </VideoOverlay>
      </div>
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string,
  vttUrl: PropTypes.string,
  altText: PropTypes.string,
};

export { Video };
