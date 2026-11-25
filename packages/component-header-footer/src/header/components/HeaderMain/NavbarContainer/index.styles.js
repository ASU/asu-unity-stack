import styled from "styled-components";
import { CLASS_NAMES } from "../../../core/constants/classNames";

const Wrapper = styled.nav`
  white-space: nowrap;
  > .${CLASS_NAMES.CONTENT_CONTAINER} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    height: auto;
    margin: inherit;
    font-size: inherit;
    color: inherit;
    flex-direction: row;
  }
  .${CLASS_NAMES.NAV_LIST} {
    display: flex;
    margin: 0;
  }
  @media (max-width: ${({ $breakpoint }) => $breakpoint}) {
    width: 100%;
    > .${CLASS_NAMES.CONTENT_CONTAINER} {
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: auto;
      min-height: 0;
      > *:last-child {
        margin-bottom: 1rem;
      }
    }
    .${CLASS_NAMES.NAV_LIST} {
      flex-direction: column;
      width: 100%;
    }
    .${CLASS_NAMES.BUTTONS_CONTAINER} {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      width: 100%;
    }
  }
`;

export { Wrapper };
