import styled from "styled-components";

const breakpoint = "1260px";

const Wrapper = styled.div`
  background-color: #e8e8e8;
  height: 24px;
  transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
  .header-top {
    height: 100%;
    .nav {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .nav-link {
      color: #484848;
      font-size: 0.75rem;
      line-height: 0.75rem;
      padding: 0.25rem 0.5rem;
      margin-right: 0.5rem;
      white-space: nowrap;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &.sr-only:not(:focus):not(:active) {
        clip: rect(0 0 0 0);
        clip-path: inset(100%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      &:focus {
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }
  @media (max-width: ${breakpoint}) {
    display: none;
  }
`;

export { Wrapper };
