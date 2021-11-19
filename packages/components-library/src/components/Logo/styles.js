import { css } from "@emotion/css";
import { forwardRef } from "preact/compat";

import { trackGAEvent } from "../../services/googleAnalytics";

/**
 * Logo
 */
const logoStyles = breakpoint => css`
  .navbar-logo {
    display: inline-flex;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    padding: 0;

    .horiz {
      display: none;
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    }

    .vert {
      @media (min-width: 992px) {
        display: block;
        height: 72px;
        width: auto;
        margin: 1.5rem 1rem 1.5rem 0;
      }
    }

    img {
      height: 80px;
    }

    @media (max-width: ${breakpoint}) {
      img {
        float: none;
        height: 32px;
      }

      .vert {
        display: none;
      }
      .horiz {
        display: block;
        height: 32px;
        width: auto;
        margin-bottom: 1rem;
        margin-left: 2rem;
      }
    }
  }

  &.scrolled .primary-nav .navbar-logo d img {
    height: 64px;
  }

  @media (max-width: ${breakpoint}) {
    &.scrolled .primary-nav .navbar-logo d img {
      height: 28px;
    }

    &.scrolled .navbar-logo .horiz {
      margin-bottom: 0.5rem;
    }
  }
`;

const Logo = forwardRef(({ brandLink, src, mobileSrc, alt, ...props }, ref) => {
  return (
    <a
      href={brandLink}
      class="navbar-logo"
      ref={ref}
      {...props}
      onFocus={() => trackGAEvent({ text: "asu logo" })}
    >
      <img class="vert" src={src} alt={alt} />
      <img class="horiz" src={mobileSrc} alt={alt} />
    </a>
  );
});

export { Logo, logoStyles };
