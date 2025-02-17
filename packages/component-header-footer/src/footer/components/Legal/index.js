// @ts-check
import React from "react";

import { trackGAEvent } from "../../../../../../shared";
import { LEGAL_URLS } from "../../core/constants";

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
                href={LEGAL_URLS.COPYRIGHT_AND_TRADEMARK}
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
                href={`${LEGAL_URLS.ACCESSIBILITY_REPORT}?a11yref=${getURL()}`}
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
                href={LEGAL_URLS.PRIVACY}
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
                href={LEGAL_URLS.TERMS_OF_USE}
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
                href={LEGAL_URLS.EMERGENCY}
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
