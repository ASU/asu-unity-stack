// @ts-check
import styled from "styled-components";

// Co-located here (rather than in unity-bootstrap-theme) so `NavControls`
// renders correctly for any consumer out of the box, without depending on a
// shared/global stylesheet that may not know this component still needs it.
const NavControlButtons = styled.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }

  .scroll-control-prev,
  .scroll-control-next {
    outline: none;
    border: none;
    width: 80px;
    position: absolute;
    height: 100%;
    top: 0;
  }

  .scroll-control-prev {
    background: linear-gradient(
      90deg,
      rgba(25, 25, 25, 0.25) 0%,
      rgba(25, 25, 25, 0) 100%
    );
    left: 0;
  }

  .scroll-control-next {
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(25, 25, 25, 0) 0%,
      rgba(25, 25, 25, 0.25) 100%
    );

    .carousel-control-next-icon {
      margin: 0 12px 0 42px;
    }
  }

  .scroll-control-prev .carousel-control-prev-icon,
  .scroll-control-next .carousel-control-next-icon {
    background-size: 60% 60%;
    display: block;
    opacity: 1;
    padding: 12px;
    position: relative;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    background-color: #fafafa; // $asu-gray-7
    border: solid 1px #d0d0d0; // $asu-gray-5
    border-radius: 100%;
    color: #000;
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' data-fa-i2svg=''><path fill='currentColor' d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path></svg>");
    background-position: 80% 50%;
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' data-fa-i2svg=''><path fill='currentColor' d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path></svg>");
    background-position: 60% 50%;
  }

  @media screen and (max-width: 768px) {
    // $uds-breakpoint-md
    .scroll-control-prev,
    .scroll-control-next {
      width: 48px;
    }

    .scroll-control-next .carousel-control-next-icon,
    .scroll-control-prev .carousel-control-prev-icon {
      margin: 0px 12px 0px 8px;
    }

    .scroll-control-prev .carousel-control-prev-icon {
      margin-left: 0px;
    }
  }
`;

export { NavControlButtons };
