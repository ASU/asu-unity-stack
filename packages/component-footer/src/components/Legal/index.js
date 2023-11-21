// @ts-check
import React from "react";

import { trackGAEvent } from "../../../../../shared";

const DEFAULT_GA_EVENT = {
  type: "internal link",
  section: "tertiary footer",
};

const Legal = () => {
  function getURL() {
    try {
      const URL = window.location.href;
      return URL;
    } catch (error) {
      console.error(error);
      return "";
    }
  }

  return (
    <div className="wrapper" id="wrapper-footer-colophon" data-testid="legal">
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
                onFocus={() =>
                  trackGAEvent({
                    ...DEFAULT_GA_EVENT,
                    text: "copyright and trademark",
                  })
                }
              >
                Copyright and Trademark
              </a>
              <a
                className="nav-link"
                href={`https://accessibility.asu.edu/report?a11yref=${getURL()}`}
                onFocus={() =>
                  trackGAEvent({
                    ...DEFAULT_GA_EVENT,
                    text: "accessibility",
                  })
                }
              >
                Accessibility
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/privacy"
                onFocus={() =>
                  trackGAEvent({
                    ...DEFAULT_GA_EVENT,
                    text: "privacy",
                  })
                }
              >
                Privacy
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
                onFocus={() =>
                  trackGAEvent({
                    ...DEFAULT_GA_EVENT,
                    text: "terms of use",
                  })
                }
              >
                Terms of Use
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/emergency/"
                onFocus={() =>
                  trackGAEvent({
                    ...DEFAULT_GA_EVENT,
                    text: "emergency",
                  })
                }
              >
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
