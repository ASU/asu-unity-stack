// @ts-check
import React from "react";

const Legal = () => {
  return (
    <div className="wrapper" id="wrapper-footer-colophon">
      <div className="container" id="footer-colophon">
        <div className="row">
          <div className="col">
            <nav
              className="nav colophon"
              aria-label="University Legal and Compliance"
            >
              <a
                className="nav-link"
                href="https://www.asu.edu/about/copyright-trademark"
              >
                Copyright and Trademark
              </a>
              <a className="nav-link" href="https://www.asu.edu/accessibility/">
                Accessibility
              </a>
              <a className="nav-link" href="https://www.asu.edu/about/privacy">
                Privacy
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
              >
                Terms of Use
              </a>
              <a className="nav-link" href="https://www.asu.edu/emergency/">
                Emergency
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Legal };
