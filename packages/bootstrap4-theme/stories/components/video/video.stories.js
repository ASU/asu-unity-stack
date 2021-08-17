import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Videos');
import './video';
import stockVideo from './stock-video-person-drawing.mp4';

export const Default = createStory(
  <div class="m-4">
    {/* Component start */}
    <div class="uds-video-container">
      <div class="uds-video-player">
        <video caption="Example video">
          <source src={stockVideo} />
          <track
            src="path/to/caption.vtt"
            kind="captions"
            srclang="en"
            label="english_captions"
          />
        </video>
        <div class="uds-video-overlay">
          <button
            type="button"
            class="btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play"
          >
            <i class="fa fa-play"></i>
            <span class="sr-only">Play</span>
          </button>
        </div>
      </div>
    </div>
    {/* Component end */}
  </div>
);

export const DefaultWithCaption = createStory(
  <div class="m-4">
    {/* Component start */}
    <div class="uds-video-container uds-video-with-caption">
      <div class="uds-video-player">
        <video caption="Example video">
          <source src={stockVideo} />
          <track
            src="path/to/caption.vtt"
            kind="captions"
            srclang="en"
            label="english_captions"
          />
        </video>
        <div class="uds-video-overlay">
          <button
            type="button"
            class="btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play"
          >
            <i class="fa fa-play"></i>
            <span class="sr-only">Play</span>
          </button>
        </div>
      </div>
      <figure>
        <figcaption>Photo by Dent/ASU Now</figcaption>
      </figure>
    </div>
    {/* Component end */}
  </div>
);

export const YoutubeVideo = createStory(
  <div class="m-4">
    {/* Component start */}
    <div class="uds-video-container uds-video-with-caption">
      <div class="uds-video-player youtube-video">
        <iframe
          title="Example video"
          src="https://www.youtube.com/embed/YW2p0ctzK9c"
        ></iframe>
      </div>
    </div>
    {/* Component end */}
  </div>
);

export const YoutubeVideoWithCaption = createStory(
  <div class="m-4">
    {/* Component start */}
    <div class="uds-video-container uds-video-with-caption">
      <div class="uds-video-player youtube-video">
        <iframe
          title="Example video"
          src="https://www.youtube.com/embed/YW2p0ctzK9c"
        ></iframe>
      </div>
      <figure>
        <figcaption>Photo by Dent/ASU Now</figcaption>
      </figure>
    </div>
    {/* Component end */}
  </div>
);

export const AlignedVideo = createStory(
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="asu-header-align">
          {/* Component start */}
          <div class="uds-video-container">
            <div class="uds-video-player">
              <video caption="Example video">
                <source src={stockVideo} />
                <track
                  src="path/to/caption.vtt"
                  kind="captions"
                  srclang="en"
                  label="english_captions"
                />
              </video>
              <div class="uds-video-overlay">
                <button
                  type="button"
                  class="btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play"
                >
                  <i class="fa fa-play"></i>
                  <span class="sr-only">Play</span>
                </button>
              </div>
            </div>
          </div>
          {/* Component end */}
        </div>
      </div>
    </div>
  </div>
);
