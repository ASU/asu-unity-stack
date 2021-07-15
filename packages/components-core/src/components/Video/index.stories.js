/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import React from "react";

import { Video } from ".";

// @ts-ignore
import stockVideo from "../../assets/video/stock-video-person-drawing.mp4";

/**
 * @typedef {import('.').VideoProps} VideoProps
 */

export default {
  component: Video,
  title: "UDS/Video",
};

/**
 * @param {VideoProps} args
 * @returns {JSX.Element}
 */
const Template = args => (
  <div className="container">
    <Video {...args} />
  </div>
);

/**
 * @type {{ args: VideoProps}}
 */
export const DefaultVideo = Template.bind({});
DefaultVideo.args = {
  type: "video", // OPTIONAL
  url: stockVideo,
};

/**
 * @type {{ args: VideoProps}}
 */
export const DefaultVideoWithCaption = Template.bind({});
DefaultVideoWithCaption.args = {
  type: "video", // OPTIONAL
  url: stockVideo,
  caption: "Sample video",
};

/**
 * @type {{ args: VideoProps}}
 */
export const YoutubeVideo = Template.bind({});
YoutubeVideo.args = {
  type: "youtube", // Required
  url: "https://www.youtube.com/embed/YW2p0ctzK9c",
};

/**
 * @type {{ args: VideoProps}}
 */
export const YoutubeVideoWithCaption = Template.bind({});
YoutubeVideoWithCaption.args = {
  type: "youtube", // Required
  url: "https://www.youtube.com/embed/YW2p0ctzK9c",
  caption: "Sample youtube video",
};
