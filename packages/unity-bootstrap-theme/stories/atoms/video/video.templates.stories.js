import React from "react";

// @ts-ignore
import stockVideo from "./stock-video-person-drawing.mp4";


export default {
  title: "Atoms/Videos/Templates",
  args:{content:false},
  argTypes: {
    content: {
      name: "Content",
      control: { type: "boolean" },
    },
  },
  parameters: {
    initFunc: {
      disable: false,
    },
  },
};

export const Default = ({content}) =>
  <div
    className={`uds-video-container ${
      content ? "uds-video-with-caption" : ""
    }`}
  >
    <div className="uds-video-player">
      <video caption="Example video">
        <source src={stockVideo} />
        <track
          src="path/to/caption.vtt"
          kind="captions"
          srclang="en"
          label="english_captions"
        />
      </video>
      <div className="uds-video-overlay">
        <button
          type="button"
          className="btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play"
          data-ga="play button"
          data-ga-name="onclick"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-type="internal link"
          data-ga-region="main content"
          data-ga-section="Example video"
        >
          <i className="fa fa-play"></i>
          <span className="visually-hidden">Play</span>
        </button>
      </div>
    </div>
    {content && (
      <figure>
        <figcaption>Photo by Dent/ASU Now</figcaption>
      </figure>
    )}
  </div>;

export const YoutubeVideo = ({content}) =>
  <div
    className={`uds-video-container ${
      content ? "uds-video-with-caption" : ""
    }`}
  >
    <div className="uds-video-player youtube-video">
      <iframe
        title="Example video"
        src="https://www.youtube.com/embed/YW2p0ctzK9c"
      ></iframe>
    </div>
    {content && (
      <figure>
        <figcaption>Photo by Dent/ASU Now</figcaption>
      </figure>
    )}
  </div>;
