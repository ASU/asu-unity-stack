import styled from "styled-components";

const CookieConsentWrapper = styled.div`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 999;
  font-weight: 300;
  color: #191919;
  .cookie-consent-component {
    position: fixed;
    bottom: 2rem;
    margin-right: 1rem;
    &.ease-closing {
      transition-timing-function: ease-out;
      transition: 0.2s;
      transform: translateY(130%);
    }
    .container {
      position: relative;
      background: #e8e8e8;
      border: 1px solid #d0d0d0;
      padding: 1rem 1.5rem 1.5rem 1.5rem;
      max-width: 676px;
      width: 100%;
      margin: 0 auto;
      z-index: 999;
      box-sizing: border-box;
      float: left;
      bottom: 0;

      .content {
        width: 90%;
        font-size: 0.875rem;
        line-height: 1.5rem;
        margin: 0;
        p {
          margin: 0;
          a {
            color: #8c1d40;
            text-decoration: underline;
          }
        }
      }
      .accept-btn {
        color: #ffffff;
        background: #8c1d40;
        text-decoration: none;
        font-weight: 700;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        user-select: none;
        margin: 1rem 0 0 0;
        line-height: 1rem;
        font-size: 14px;
        border-radius: 25px;
        border: none;
        padding: 0.5rem 1.2rem;
        transition: 0.03s ease-in-out;
        &:not(:disabled):not(.disabled) {
          cursor: pointer;
        }
        &:hover {
          transform: scale(1.05);
        }
        &:active {
          transform: scale(1);
        }
      }
      .close-btn {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        border-radius: 400rem;
        line-height: 1rem;
        transition: 0.03s ease-in-out;
        padding: 0.25rem 0.25rem;
        width: 2rem;
        height: 2rem;
        border: solid 1px #d0d0d0;
        background: #ffffff;
        font-size: 1rem;
        &:hover {
          transform: scale(1.05);
        }
        &:active {
          transform: scale(0.95);
        }
        &:not(:disabled):not(.disabled) {
          cursor: pointer;
        }
        @media (max-width: 768px) {
          top: 0.5rem;
          right: 0.5rem;
        }
      }

      // Fade animation
      animation: fade 1s;
      @keyframes fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }

    @media (max-width: 998px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  button,
  a {
    text-decoration: none;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }
  }
`;

export { CookieConsentWrapper };
