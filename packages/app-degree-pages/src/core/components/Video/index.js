import PropTypes from "prop-types";
import React from "react";

/**
 * @typedef {import('../../models/shared-types').VideoItem} VideoItem
 */

/**
 *
 * @param {VideoItem} props
 * @returns
 */
const Video = ({ url = "", vttUrl, altText = "" }) => (
  <div className="uds-video-container">
    <div className="uds-video-player">
      <video title={altText}>
        <source src={url} />

        <track
          src={vttUrl}
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
      </video>
      <div className="uds-video-overlay">
        <button
          type="button"
          className="
          btn btn-circle btn-circle-large btn-circle-alt-white
          uds-video-btn-play
        "
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
      </div>
    </div>
  </div>
);

Video.propTypes = {
  url: PropTypes.string,
  vttUrl: PropTypes.string,
  altText: PropTypes.string,
};

export { Video };
