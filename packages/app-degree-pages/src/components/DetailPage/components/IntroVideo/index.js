// @ts-check
import { Video } from "@asu-design-system/components-core";
import React from "react";
import styled from "styled-components";

import { videoPropType } from "../../../../core/models";

const VideoWrapper = styled.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

/**
 * @param {import("src/core/models/shared-types").VideoItem} props
 */
const IntroVideo = ({ type, url, vttUrl, title }) => (
  <VideoWrapper data-testid="intro-video">
    <Video type={type} url={url} vttUrl={vttUrl} title={title} />
  </VideoWrapper>
);

IntroVideo.propTypes = { ...videoPropType };
export { IntroVideo };
