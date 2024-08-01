import styled from "styled-components";

const VideoOverlay = styled.div`
  &[data-playing="true"] {
    display: none;
  }
`;

export { VideoOverlay };
