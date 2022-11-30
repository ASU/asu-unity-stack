// @ts-check
import React from "react";
import styled from "styled-components";
import { Video } from "../../../../../../components-core/src/components/Video";

import { videoPropType } from "../../../../core/models";
import { youtubeURLParser } from "./parseYoutubeURL";

const VideoWrapper = styled.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

/**
 * @param {import("src/core/types/shared-local-types").VideoItem} props
 */
const IntroVideo = ({ type, url, vttUrl, title }) => (
  <VideoWrapper data-testid="intro-video">
    <Video
      type={type}
      url={youtubeURLParser(type, url)}
      vttUrl={vttUrl}
      title={title}
      controls
    />
  </VideoWrapper>
);

IntroVideo.propTypes = { ...videoPropType };
export { IntroVideo };
