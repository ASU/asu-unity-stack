// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { useAppContext } from "../../core/context/app-context";
import { Wrapper } from "./index.styles";
import { Login } from "./Login";
import { Search } from "./Search";

/**
 * @typedef {{
 *  display: "mobile" | "desktop"
 * }} UniversalNavbarProps
 */

/**
 *
 * @param {UniversalNavbarProps} props
 * @returns {JSX.Element}
 */

const UniversalNavbar = ({ display }) => {
  const { breakpoint } = useAppContext();

  return (
    // @ts-ignore
    <Wrapper className={`universal-nav-${display}`} breakpoint={breakpoint}>
      <div className="container-xl">
        <div className="header-top">
          <nav className="nav" aria-label="Top">
            <div className="links-container">
              <a
                className="nav-link sr-only sr-only-focusable"
                href="#skip-to-content"
              >
                Skip to main content
              </a>
              <a
                className="nav-link sr-only sr-only-focusable"
                href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
              >
                Report an accessibility problem
              </a>
              <a className="nav-link" href="https://asu.edu">
                ASU home
              </a>
              <a className="nav-link" href="https://my.asu.edu">
                My ASU
              </a>
              <a
                className="nav-link"
                href="https://asu.edu/about/colleges-and-schools"
              >
                Colleges and Schools
              </a>
              <Login />
            </div>
            <Search display={display} />
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

UniversalNavbar.propTypes = {
  display: PropTypes.oneOf(["mobile", "desktop"]),
};

export { UniversalNavbar };
