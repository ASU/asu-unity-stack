// @ts-check
import React from "react";

import { trackGAEvent } from "../../../../../../shared";
import innovationLogo from "../../../../public/assets/images/innovationLogo.png";
import { FOOTER_URLS } from "../../core/constants";

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
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href={FOOTER_URLS.MAPS_AND_LOCATIONS}
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
                  href={FOOTER_URLS.JOBS}
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
                  href={FOOTER_URLS.DIRECTORY}
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
                  href={FOOTER_URLS.CONTACT_ASU}
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
                  href={FOOTER_URLS.MY_ASU}
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
              <a
                className="img-link"
                href={FOOTER_URLS.RANKINGS}
                onFocus={() =>
                  trackGAEvent({
                    ...DEFAULT_GA_EVENT,
                    text: "#1 in the u.s. for innovation",
                  })
                }
              >
                <img
                  src={innovationLogo}
                  alt="Repeatedly ranked #1, 20+ lists in the last 3 years"
                  width="459"
                  height="100"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Innovation };
