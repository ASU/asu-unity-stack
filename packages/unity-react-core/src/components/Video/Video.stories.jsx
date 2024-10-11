/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import React from "react";

import stockVideo from "../../assets/video/stock-video-person-drawing.mp4";
import { Video } from "./Video";

// @ts-ignore

/**
 * @typedef {import('./Video').VideoProps} VideoProps
 */
export default {
  title: "Components/Video",
  component: Video,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
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
 * @type {{ args: VideoProps, parameters: object}}
 */
export const DefaultVideo = Template.bind({});
DefaultVideo.args = {
  type: "video", // OPTIONAL
  url: stockVideo,
};
DefaultVideo.parameters = {
  docs: {
    description: {
      story: "",
    },
  },
};

/**
 * @type {{ args: VideoProps, parameters: object}}
 */
export const DefaultVideoWithCaption = Template.bind({});
DefaultVideoWithCaption.args = {
  type: "video", // OPTIONAL
  url: stockVideo,
  caption: "Sample video",
};
DefaultVideoWithCaption.parameters = {
  docs: {
    description: {
      story: "",
    },
  },
};

/**
 * @type {{ args: VideoProps, parameters: object}}
 */
export const YoutubeVideo = Template.bind({});
YoutubeVideo.args = {
  type: "youtube", // Required
  url: "https://www.youtube.com/embed/YW2p0ctzK9c",
};
YoutubeVideo.parameters = {
  docs: {
    description: {
      story: "",
    },
  },
};

/**
 * @type {{ args: VideoProps, parameters: object}}
 */
export const YoutubeVideoWithCaption = Template.bind({});
YoutubeVideoWithCaption.args = {
  type: "youtube", // Required
  url: "https://www.youtube.com/embed/YW2p0ctzK9c",
  caption: "Sample youtube video",
};
YoutubeVideoWithCaption.parameters = {
  docs: {
    description: {
      story: "",
    },
  },
};
