// @ts-check
import React from "react";

// @ts-ignore
import innovationLogo from "../../assets/images/innovationLogo.png";
import { trackGAEvent } from "../../core/services/googleAnalytics";

const DEFAULT_GA_EVENT = {
  type: "internal link",
  section: "secondary footer",
};

const Innovation = () => {
  return (
    <div
      className="wrapper"
      id="wrapper-footer-innovation"
      data-testid="innovation"
    >
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <a
                className="img-link"
                href="https://www.asu.edu/rankings"
                onFocus={() =>
                  trackGAEvent({
                    ...DEFAULT_GA_EVENT,
                    text: "#1 in the u.s. for innovation",
                  })
                }
              >
                <img
                  src={innovationLogo}
                  alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020"
                />
              </a>
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                  onFocus={() =>
                    trackGAEvent({
                      ...DEFAULT_GA_EVENT,
                      text: "maps and locations",
                    })
                  }
                >
                  Maps and Locations
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/asujobs"
                  onFocus={() =>
                    trackGAEvent({
                      ...DEFAULT_GA_EVENT,
                      text: "jobs",
                    })
                  }
                >
                  Jobs
                </a>
                <a
                  className="nav-link"
                  href="https://isearch.asu.edu/"
                  onFocus={() =>
                    trackGAEvent({
                      ...DEFAULT_GA_EVENT,
                      text: "directory",
                    })
                  }
                >
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                  onFocus={() =>
                    trackGAEvent({
                      ...DEFAULT_GA_EVENT,
                      text: "contact asu",
                    })
                  }
                >
                  Contact ASU
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu/"
                  onFocus={() =>
                    trackGAEvent({
                      ...DEFAULT_GA_EVENT,
                      text: "my asu",
                    })
                  }
                >
                  My ASU
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Innovation };
