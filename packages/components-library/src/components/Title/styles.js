/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { forwardRef } from "preact/compat";
import { cx, css } from "emotion";
import {
  containerSize,
  primaryNavTopPadding,
  BreakpointXl,
  BreakpointLg,
  srOnly,
} from "../../theme";

/**
 * Title
 **/
const titleStyles = breakpoint => css`
  .title {
    line-height: 1;
    font-size: 1rem;
    font-weight: 700;
    padding: 0 2rem 1.5rem 2rem;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    > a {
      display: none;
    }

    .unit-name,
    .subunit-name, &.subunit-name  {
      color: #191919;
    }

    @media (min-width: ${breakpoint}) {
      line-height: 1;
      margin: 1rem 0;
      font-weight: 700;
      padding: 0;

      > a {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        display: block;
      }

      &.subunit-name {
        font-size: 2rem;
        margin: 1.5rem 0 1rem 0;
        font-weight: 700;
      }

      .subunit-name {
        font-size: 1.5rem;
        margin-bottom: 0;
      }
    }
  }

  &.scrolled .title {
    padding-bottom: 1rem;
  }

  @media (min-width: ${breakpoint}) {
    &.scrolled .title.subunit-name {
      font-size: 1.5rem;
    }

    &.scrolled .title {
      padding-bottom: 0;
    }
  }
`;

const Title = forwardRef(
  ({ children, parentOrg, baseUrl, parentOrgUrl, ...props }, ref) => {
    if (parentOrg) {
      return (
        <div class="title" ref={ref}>
          <a class="unit-name" href={parentOrgUrl}>
            {parentOrg}
          </a>
          <a class="subunit-name" href={baseUrl}>
            {children}
          </a>
        </div>
      );
    }
    return (
      <a class="title subunit-name" href={baseUrl} ref={ref}>
        {children}
      </a>
    );
  }
);

export { titleStyles, Title };
