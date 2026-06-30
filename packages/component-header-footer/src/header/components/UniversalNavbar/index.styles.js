import styled from "styled-components";
import { ASU_GRAY6, ASU_GRAY1, ASU_GRAY5 } from "../../colors";
import { CLASS_NAMES } from "../../core/constants/classNames";

const Wrapper = styled.div`
  background-color: ${ASU_GRAY6};
  padding: 0.5rem 0rem;
  transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
  .${CLASS_NAMES.HEADER_TOP} {
    height: 100%;
    .nav {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .${CLASS_NAMES.LINKS_CONTAINER} {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        .${CLASS_NAMES.NAV_LINK} {
          color: ${ASU_GRAY1};
          font-size: 0.75rem;
          line-height: 1;
          white-space: nowrap;
          text-decoration: none;
          display: flex;
          align-items: center;

          &:hover {
            text-decoration: underline;
          }

          &.visually-hidden-focusable:not(:focus):not(:active) {
            clip: rect(0 0 0 0);
            clip-path: inset(100%);
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            width: 1px;
          }
        }
      }
    }
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    width: 100%;
    min-height: auto;
    position: sticky;
    bottom: 0;
    padding: 0;
    .${CLASS_NAMES.HEADER_TOP} {
      width: 100%;
      .nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column-reverse;
        .${CLASS_NAMES.LINKS_CONTAINER} {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-flow: row;
          justify-items: start;
          width: 100%;
          gap: 0;
          border-top: 1px solid ${ASU_GRAY5};
          border-left: 1px solid ${ASU_GRAY5};
          .${CLASS_NAMES.NAV_LINK} {
            white-space: normal;
            margin-right: 0;
            text-align: center;
            width: 100%;
            font-size: 0.875rem;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid ${ASU_GRAY5};
            border-right: 1px solid ${ASU_GRAY5};
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            &.visually-hidden-focusable:not(:focus):not(:active) {
              border: none;
            }
          }
        }
      }
    }
  }

  @media screen and (orientation: landscape) and (max-width: ${({
      breakpoint,
    }) => breakpoint}) {
    .${CLASS_NAMES.HEADER_TOP} .nav .${CLASS_NAMES.LINKS_CONTAINER} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export { Wrapper };
