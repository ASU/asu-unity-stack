// @ts-check
import React from "react";

// @ts-ignore
import innovationLogo from "../../assets/images/innovationLogo.png";

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
              <a className="img-link" href="https://www.asu.edu/rankings">
                <img
                  src={innovationLogo}
                  alt="Number one in the U.S. for innovation. #1 ASU, #2 Stanford, #3 MIT. - U.S. News and World Report, 5 years, 2016-2020"
                />
              </a>
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                >
                  Maps and Locations
                </a>
                <a className="nav-link" href="https://www.asu.edu/asujobs">
                  Jobs
                </a>
                <a className="nav-link" href="https://isearch.asu.edu/">
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                >
                  Contact ASU
                </a>
                <a className="nav-link" href="https://my.asu.edu/">
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
