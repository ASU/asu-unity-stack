import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import { initVideo as initFunc } from './video';

const extraOptions = {
  content: {
    name: 'Content',
    control: { type: 'boolean' },
    defaultValue: false,
  },
};

export default createComponent('Videos', 'Atoms', 'Templates', extraOptions);
import './video';
import stockVideo from './stock-video-person-drawing.mp4';

export const Default = createStory(
  (args) => {
    return (
      <div
        class={`uds-video-container ${
          args.content ? 'uds-video-with-caption' : ''
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
              <span className="sr-only">Play</span>
            </button>
          </div>
        </div>
        {args.content && (
          <figure>
            <figcaption>Photo by Dent/ASU Now</figcaption>
          </figure>
        )}
      </div>
    );
  },
  { initFunc }
);
Default.args = {
  template: 1,
};

export const YoutubeVideo = createStory((args) => {
  return (
    <div
      class={`uds-video-container ${
        args.content ? 'uds-video-with-caption' : ''
      }`}
    >
      <div className="uds-video-player youtube-video">
        <iframe
          title="Example video"
          src="https://www.youtube.com/embed/YW2p0ctzK9c"
        ></iframe>
      </div>
      {args.content && (
        <figure>
          <figcaption>Photo by Dent/ASU Now</figcaption>
        </figure>
      )}
    </div>
  );
});
