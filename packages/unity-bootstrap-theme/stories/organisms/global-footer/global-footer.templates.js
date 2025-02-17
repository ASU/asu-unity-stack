import React from "react";

import innovationLockup from "./../../../public/img/innovation-lockup/on-gold/footer-rank.png";
import endorsedLogo from "./ASU_UniversityTechOffice_2_Horiz_RGB_White_150ppi.png";

export const GlobalElementsOnly = () => (
  <footer
    id="asu-footer"
    role="contentinfo"
    data-elastic-exclude="data-elastic-exclude"
  >
    <div className="wrapper" id="wrapper-footer-innovation">
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="maps and locations"
                >
                  Maps and Locations
                </a>
                <a
                  className="nav-link"
                  href="https://cfo.asu.edu/applicant"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="jobs"
                >
                  Jobs
                </a>
                <a
                  className="nav-link"
                  href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="directory"
                >
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="contact asu"
                >
                  Contact ASU
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="my asu"
                >
                  My ASU
                </a>
              </nav>
              <a
                className="img-link"
                href="https://www.asu.edu/rankings"
                data-ga-footer-type="internal link"
                data-ga-footer-section="secondary footer"
                data-ga-footer="#1 in the u.s. for innovation"
              >
                <img
                  src={innovationLockup}
                  alt="Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)"
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
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="copyright and trademark"
              >
                Copyright and Trademark
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/accessibility/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="accessibility"
              >
                Accessibility
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/privacy"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="privacy"
              >
                Privacy
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="terms of use"
              >
                Terms of Use
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/emergency/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="emergency"
              >
                Emergency
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const ZeroColumns = () => (
  <footer
    id="asu-footer"
    role="contentinfo"
    data-elastic-exclude="data-elastic-exclude"
  >
    <div className="wrapper" id="wrapper-endorsed-footer">
      <div className="container" id="endorsed-footer">
        <div className="row">
          <div className="col-md" id="endorsed-logo">
            <a
              href="https://www.asu.edu"
              data-ga-footer-type="internal link"
              data-ga-footer-section="primary footer"
              data-ga-footer="asu logo"
            >
              <img
                src={endorsedLogo}
                alt="ASU University Technology Office Arizona State University."
                width="311"
                height="96"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="col-md" id="social-media">
            <nav className="nav" aria-label="Social Media">
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="facebook icon"
              >
                <span
                  title="Facebook Social Media Icon"
                  className="fab fa-facebook-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="twitter icon"
              >
                <span
                  title="Twitter Social Media Icon"
                  className="fab fa-square-x-twitter"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="instagram icon"
              >
                <span
                  title="Instagram Social Media Icon"
                  className="fab fa-instagram-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="youtube icon"
              >
                <span
                  title="YouTube Social Media Icon"
                  className="fab fa-youtube-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="linkedin icon"
              >
                <span
                  title="LinkedIn Social Media Icon"
                  className="fab fa-linkedin"
                ></span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper" id="wrapper-footer-innovation">
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="maps and locations"
                >
                  Maps and Locations
                </a>
                <a
                  className="nav-link"
                  href="https://cfo.asu.edu/applicant"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="jobs"
                >
                  Jobs
                </a>
                <a
                  className="nav-link"
                  href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="directory"
                >
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="contact asu"
                >
                  Contact ASU
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="my asu"
                >
                  My ASU
                </a>
              </nav>
              <a
                className="img-link"
                href="https://www.asu.edu/rankings"
                data-ga-footer-type="internal link"
                data-ga-footer-section="secondary footer"
                data-ga-footer="#1 in the u.s. for innovation"
              >
                <img
                  src={innovationLockup}
                  alt="Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)"
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
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="copyright and trademark"
              >
                Copyright and Trademark
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/accessibility/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="accessibility"
              >
                Accessibility
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/privacy"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="privacy"
              >
                Privacy
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="terms of use"
              >
                Terms of Use
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/emergency/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="emergency"
              >
                Emergency
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const OneColumn = () => (
  <footer
    id="asu-footer"
    role="contentinfo"
    data-elastic-exclude="data-elastic-exclude"
  >
    <div className="wrapper" id="wrapper-endorsed-footer">
      <div className="container" id="endorsed-footer">
        <div className="row">
          <div className="col-md" id="endorsed-logo">
            <a
              href="https://www.asu.edu"
              data-ga-footer-type="internal link"
              data-ga-footer-section="primary footer"
              data-ga-footer="asu logo"
            >
              <img
                src={endorsedLogo}
                alt="ASU University Technology Office Arizona State University."
                width="311"
                height="96"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="col-md" id="social-media">
            <nav className="nav" aria-label="Social Media">
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="facebook icon"
              >
                <span
                  title="Facebook Social Media Icon"
                  className="fab fa-facebook-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="twitter icon"
              >
                <span
                  title="Twitter Social Media Icon"
                  className="fab fa-square-x-twitter"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="instagram icon"
              >
                <span
                  title="Instagram Social Media Icon"
                  className="fab fa-instagram-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="youtube icon"
              >
                <span
                  title="YouTube Social Media Icon"
                  className="fab fa-youtube-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="linkedin icon"
              >
                <span
                  title="LinkedIn Social Media Icon"
                  className="fab fa-linkedin"
                ></span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper" id="wrapper-footer-columns">
      <div className="container" id="footer-columns">
        <div className="row">
          <div className="col-xl-3" id="info-column">
            <div className="h5">
              Complete Name of College, School or Unit Title Should Go Here
            </div>
            <p className="contact-link">
              <a href="#">Contact Us</a>
            </p>
            <p className="contribute-button">
              <a href="#" className="btn btn-small btn-gold">
                Support ASU
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper" id="wrapper-footer-innovation">
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="maps and locations"
                >
                  Maps and Locations
                </a>
                <a
                  className="nav-link"
                  href="https://cfo.asu.edu/applicant"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="jobs"
                >
                  Jobs
                </a>
                <a
                  className="nav-link"
                  href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="directory"
                >
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="contact asu"
                >
                  Contact ASU
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="my asu"
                >
                  My ASU
                </a>
              </nav>
              <a
                className="img-link"
                href="https://www.asu.edu/rankings"
                data-ga-footer-type="internal link"
                data-ga-footer-section="secondary footer"
                data-ga-footer="#1 in the u.s. for innovation"
              >
                <img
                  src={innovationLockup}
                  alt="Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)"
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
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="copyright and trademark"
              >
                Copyright and Trademark
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/accessibility/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="accessibility"
              >
                Accessibility
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/privacy"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="privacy"
              >
                Privacy
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="terms of use"
              >
                Terms of Use
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/emergency/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="emergency"
              >
                Emergency
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const OneColumnNoLogoOrSocial = () => (
  <footer
    id="asu-footer"
    role="contentinfo"
    data-elastic-exclude="data-elastic-exclude"
  >
    <div className="wrapper" id="wrapper-footer-columns">
      <div className="container" id="footer-columns">
        <div className="row">
          <div className="col-xl-3" id="info-column">
            <div className="h5">
              Complete Name of College, School or Unit Title Should Go Here
            </div>
            <p className="contact-link">
              <a href="#">Contact Us</a>
            </p>
            <p className="contribute-button">
              <a href="#" className="btn btn-small btn-gold">
                Support ASU
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper" id="wrapper-footer-innovation">
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="maps and locations"
                >
                  Maps and Locations
                </a>
                <a
                  className="nav-link"
                  href="https://cfo.asu.edu/applicant"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="jobs"
                >
                  Jobs
                </a>
                <a
                  className="nav-link"
                  href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="directory"
                >
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="contact asu"
                >
                  Contact ASU
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="my asu"
                >
                  My ASU
                </a>
              </nav>
              <a
                className="img-link"
                href="https://www.asu.edu/rankings"
                data-ga-footer-type="internal link"
                data-ga-footer-section="secondary footer"
                data-ga-footer="#1 in the u.s. for innovation"
              >
                <img
                  src={innovationLockup}
                  alt="Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)"
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
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="copyright and trademark"
              >
                Copyright and Trademark
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/accessibility/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="accessibility"
              >
                Accessibility
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/privacy"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="privacy"
              >
                Privacy
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="terms of use"
              >
                Terms of Use
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/emergency/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="emergency"
              >
                Emergency
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const TwoColumns = () => (
  <footer
    id="asu-footer"
    role="contentinfo"
    data-elastic-exclude="data-elastic-exclude"
  >
    <div className="wrapper" id="wrapper-endorsed-footer">
      <div className="container" id="endorsed-footer">
        <div className="row">
          <div className="col-md" id="endorsed-logo">
            <a
              href="https://www.asu.edu"
              data-ga-footer-type="internal link"
              data-ga-footer-section="primary footer"
              data-ga-footer="asu logo"
            >
              <img
                src={endorsedLogo}
                alt="ASU University Technology Office Arizona State University."
                width="311"
                height="96"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="col-md" id="social-media">
            <nav className="nav" aria-label="Social Media">
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="facebook icon"
              >
                <span
                  title="Facebook Social Media Icon"
                  className="fab fa-facebook-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="twitter icon"
              >
                <span
                  title="Twitter Social Media Icon"
                  className="fab fa-square-x-twitter"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="instagram icon"
              >
                <span
                  title="Instagram Social Media Icon"
                  className="fab fa-instagram-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="youtube icon"
              >
                <span
                  title="YouTube Social Media Icon"
                  className="fab fa-youtube-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="linkedin icon"
              >
                <span
                  title="LinkedIn Social Media Icon"
                  className="fab fa-linkedin"
                ></span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper" id="wrapper-footer-columns">
      <nav aria-label="Footer">
        <div className="container" id="footer-columns">
          <div className="row">
            <div className="col-xl-3" id="info-column">
              <div className="h5">
                Complete Name of College, School or Unit Title Should Go Here
              </div>
              <p className="contact-link">
                <a href="#">Contact Us</a>
              </p>
              <p className="contribute-button">
                <a href="#" className="btn btn-small btn-gold">
                  Support ASU
                </a>
              </p>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-two"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-two"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-two"
                    >
                      Second Column
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-two"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-two"
                >
                  <a className="nav-link" href="#" title="link">
                    Biological and Health Systems Computing
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Informatics and Decision Systems Electrical
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Computer and Energy Matter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Transport and Energy Sustainability and the Built
                    Environment
                  </a>
                  <a className="nav-link" href="#" title="link">
                    The Polytechnic School
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="wrapper" id="wrapper-footer-innovation">
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="maps and locations"
                >
                  Maps and Locations
                </a>
                <a
                  className="nav-link"
                  href="https://cfo.asu.edu/applicant"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="jobs"
                >
                  Jobs
                </a>
                <a
                  className="nav-link"
                  href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="directory"
                >
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="contact asu"
                >
                  Contact ASU
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="my asu"
                >
                  My ASU
                </a>
              </nav>
              <a
                className="img-link"
                href="https://www.asu.edu/rankings"
                data-ga-footer-type="internal link"
                data-ga-footer-section="secondary footer"
                data-ga-footer="#1 in the u.s. for innovation"
              >
                <img
                  src={innovationLockup}
                  alt="Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)"
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
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="copyright and trademark"
              >
                Copyright and Trademark
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/accessibility/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="accessibility"
              >
                Accessibility
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/privacy"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="privacy"
              >
                Privacy
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="terms of use"
              >
                Terms of Use
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/emergency/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="emergency"
              >
                Emergency
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const ThreeColumns = () => (
  <footer
    id="asu-footer"
    role="contentinfo"
    data-elastic-exclude="data-elastic-exclude"
  >
    <div className="wrapper" id="wrapper-endorsed-footer">
      <div className="container" id="endorsed-footer">
        <div className="row">
          <div className="col-md" id="endorsed-logo">
            <a
              href="https://www.asu.edu"
              data-ga-footer-type="internal link"
              data-ga-footer-section="primary footer"
              data-ga-footer="asu logo"
            >
              <img
                src={endorsedLogo}
                alt="ASU University Technology Office Arizona State University."
                width="311"
                height="96"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="col-md" id="social-media">
            <nav className="nav" aria-label="Social Media">
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="facebook icon"
              >
                <span
                  title="Facebook Social Media Icon"
                  className="fab fa-facebook-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="twitter icon"
              >
                <span
                  title="Twitter Social Media Icon"
                  className="fab fa-square-x-twitter"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="instagram icon"
              >
                <span
                  title="Instagram Social Media Icon"
                  className="fab fa-instagram-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="youtube icon"
              >
                <span
                  title="YouTube Social Media Icon"
                  className="fab fa-youtube-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="linkedin icon"
              >
                <span
                  title="LinkedIn Social Media Icon"
                  className="fab fa-linkedin"
                ></span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper" id="wrapper-footer-columns">
      <nav aria-label="Footer">
        <div className="container" id="footer-columns">
          <div className="row">
            <div className="col-xl" id="info-column">
              <div className="h5">
                Complete Name of College, School or Unit Title Should Go Here
              </div>
              <p className="contact-link">
                <a href="#">Contact Us</a>
              </p>
              <p className="contribute-button">
                <a href="#" className="btn btn-small btn-gold">
                  Support ASU
                </a>
              </p>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-two"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-two"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-two"
                    >
                      Second Column
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-two"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-two"
                >
                  <a className="nav-link" href="#" title="link">
                    Biological and Health Systems Computing
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Informatics and Decision Systems Electrical
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Computer and Energy Matter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Transport and Energy Sustainability and the Built
                    Environment
                  </a>
                  <a className="nav-link" href="#" title="link">
                    The Polytechnic School
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-three"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-three"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-three"
                    >
                      Student Information
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-three"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-three"
                >
                  <a className="nav-link" href="#" title="link">
                    Student Organization
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Inner Circle Newsletter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    For Your Parents
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Visit Campus
                  </a>
                  <a className="nav-link" href="#" title="link">
                    K-12 Outreach
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire Our Graduates
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire an Intern
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="wrapper" id="wrapper-footer-innovation">
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="maps and locations"
                >
                  Maps and Locations
                </a>
                <a
                  className="nav-link"
                  href="https://cfo.asu.edu/applicant"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="jobs"
                >
                  Jobs
                </a>
                <a
                  className="nav-link"
                  href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="directory"
                >
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="contact asu"
                >
                  Contact ASU
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="my asu"
                >
                  My ASU
                </a>
              </nav>
              <a
                className="img-link"
                href="https://www.asu.edu/rankings"
                data-ga-footer-type="internal link"
                data-ga-footer-section="secondary footer"
                data-ga-footer="#1 in the u.s. for innovation"
              >
                <img
                  src={innovationLockup}
                  alt="Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)"
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
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="copyright and trademark"
              >
                Copyright and Trademark
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/accessibility/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="accessibility"
              >
                Accessibility
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/privacy"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="privacy"
              >
                Privacy
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="terms of use"
              >
                Terms of Use
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/emergency/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="emergency"
              >
                Emergency
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const FourColumns = () => (
  <footer
    id="asu-footer"
    role="contentinfo"
    data-elastic-exclude="data-elastic-exclude"
  >
    <div className="wrapper" id="wrapper-endorsed-footer">
      <div className="container" id="endorsed-footer">
        <div className="row">
          <div className="col-md" id="endorsed-logo">
            <a
              href="https://www.asu.edu"
              data-ga-footer-type="internal link"
              data-ga-footer-section="primary footer"
              data-ga-footer="asu logo"
            >
              <img
                src={endorsedLogo}
                alt="ASU University Technology Office Arizona State University."
                width="311"
                height="96"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="col-md" id="social-media">
            <nav className="nav" aria-label="Social Media">
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="facebook icon"
              >
                <span
                  title="Facebook Social Media Icon"
                  className="fab fa-facebook-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="twitter icon"
              >
                <span
                  title="Twitter Social Media Icon"
                  className="fab fa-square-x-twitter"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="instagram icon"
              >
                <span
                  title="Instagram Social Media Icon"
                  className="fab fa-instagram-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="youtube icon"
              >
                <span
                  title="YouTube Social Media Icon"
                  className="fab fa-youtube-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="linkedin icon"
              >
                <span
                  title="LinkedIn Social Media Icon"
                  className="fab fa-linkedin"
                ></span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper" id="wrapper-footer-columns">
      <nav aria-label="Footer">
        <div className="container" id="footer-columns">
          <div className="row">
            <div className="col-xl" id="info-column">
              <div className="h5">
                Complete Name of College, School or Unit Title Should Go Here
              </div>
              <p className="contact-link">
                <a href="#">Contact Us</a>
              </p>
              <p className="contribute-button">
                <a href="#" className="btn btn-small btn-gold">
                  Support ASU
                </a>
              </p>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-two"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-two"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-two"
                    >
                      Second Column
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-two"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-two"
                >
                  <a className="nav-link" href="#" title="link">
                    Biological and Health Systems Computing
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Informatics and Decision Systems Electrical
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Computer and Energy Matter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Transport and Energy Sustainability and the Built
                    Environment
                  </a>
                  <a className="nav-link" href="#" title="link">
                    The Polytechnic School
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-three"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-three"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-three"
                    >
                      Student Information
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-three"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-three"
                >
                  <a className="nav-link" href="#" title="link">
                    Student Organization
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Inner Circle Newsletter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    For Your Parents
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Visit Campus
                  </a>
                  <a className="nav-link" href="#" title="link">
                    K-12 Outreach
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire Our Graduates
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire an Intern
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-four"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-four"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-four"
                    >
                      Column Number Four
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-four"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-four"
                >
                  <a className="nav-link" href="#" title="link">
                    Student Organization
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Inner Circle Newsletter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    For Your Parents
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Visit Campus
                  </a>
                  <a className="nav-link" href="#" title="link">
                    K-12 Outreach
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire Our Graduates
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire an Intern
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="wrapper" id="wrapper-footer-innovation">
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="maps and locations"
                >
                  Maps and Locations
                </a>
                <a
                  className="nav-link"
                  href="https://cfo.asu.edu/applicant"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="jobs"
                >
                  Jobs
                </a>
                <a
                  className="nav-link"
                  href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="directory"
                >
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="contact asu"
                >
                  Contact ASU
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="my asu"
                >
                  My ASU
                </a>
              </nav>
              <a
                className="img-link"
                href="https://www.asu.edu/rankings"
                data-ga-footer-type="internal link"
                data-ga-footer-section="secondary footer"
                data-ga-footer="#1 in the u.s. for innovation"
              >
                <img
                  src={innovationLockup}
                  alt="Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)"
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
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="copyright and trademark"
              >
                Copyright and Trademark
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/accessibility/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="accessibility"
              >
                Accessibility
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/privacy"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="privacy"
              >
                Privacy
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="terms of use"
              >
                Terms of Use
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/emergency/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="emergency"
              >
                Emergency
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const FiveColumns = () => (
  <footer
    id="asu-footer"
    role="contentinfo"
    data-elastic-exclude="data-elastic-exclude"
  >
    <div className="wrapper" id="wrapper-endorsed-footer">
      <div className="container" id="endorsed-footer">
        <div className="row">
          <div className="col-md" id="endorsed-logo">
            <a
              href="https://www.asu.edu"
              data-ga-footer-type="internal link"
              data-ga-footer-section="primary footer"
              data-ga-footer="asu logo"
            >
              <img
                src={endorsedLogo}
                alt="ASU University Technology Office Arizona State University."
                width="311"
                height="96"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="col-md" id="social-media">
            <nav className="nav" aria-label="Social Media">
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="facebook icon"
              >
                <span
                  title="Facebook Social Media Icon"
                  className="fab fa-facebook-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="twitter icon"
              >
                <span
                  title="Twitter Social Media Icon"
                  className="fab fa-square-x-twitter"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="instagram icon"
              >
                <span
                  title="Instagram Social Media Icon"
                  className="fab fa-instagram-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="youtube icon"
              >
                <span
                  title="YouTube Social Media Icon"
                  className="fab fa-youtube-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="linkedin icon"
              >
                <span
                  title="LinkedIn Social Media Icon"
                  className="fab fa-linkedin"
                ></span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper" id="wrapper-footer-columns">
      <nav aria-label="Footer">
        <div className="container" id="footer-columns">
          <div className="row">
            <div className="col-xl" id="info-column">
              <div className="h5">
                Complete Name of College, School or Unit Title Should Go Here
              </div>
              <p className="contact-link">
                <a href="#">Contact Us</a>
              </p>
              <p className="contribute-button">
                <a href="#" className="btn btn-small btn-gold">
                  Support ASU
                </a>
              </p>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-two"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-two"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-two"
                    >
                      Second Column
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-two"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-two"
                >
                  <a className="nav-link" href="#" title="link">
                    Biological and Health Systems Computing
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Informatics and Decision Systems Electrical
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Computer and Energy Matter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Transport and Energy Sustainability and the Built
                    Environment
                  </a>
                  <a className="nav-link" href="#" title="link">
                    The Polytechnic School
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-three"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-three"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-three"
                    >
                      Student Information
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-three"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-three"
                >
                  <a className="nav-link" href="#" title="link">
                    Student Organization
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Inner Circle Newsletter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    For Your Parents
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Visit Campus
                  </a>
                  <a className="nav-link" href="#" title="link">
                    K-12 Outreach
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire Our Graduates
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire an Intern
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-four"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-four"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-four"
                    >
                      Column Number Four
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-four"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-four"
                >
                  <a className="nav-link" href="#" title="link">
                    Student Organization
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Inner Circle Newsletter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    For Your Parents
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Visit Campus
                  </a>
                  <a className="nav-link" href="#" title="link">
                    K-12 Outreach
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire Our Graduates
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire an Intern
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-five"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-five"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-five"
                    >
                      Mambo Number Five
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-five"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-five"
                >
                  <a className="nav-link" href="#" title="link">
                    Student Organization
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Inner Circle Newsletter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    For Your Parents
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Visit Campus
                  </a>
                  <a className="nav-link" href="#" title="link">
                    K-12 Outreach
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire Our Graduates
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire an Intern
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="wrapper" id="wrapper-footer-innovation">
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="maps and locations"
                >
                  Maps and Locations
                </a>
                <a
                  className="nav-link"
                  href="https://cfo.asu.edu/applicant"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="jobs"
                >
                  Jobs
                </a>
                <a
                  className="nav-link"
                  href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="directory"
                >
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="contact asu"
                >
                  Contact ASU
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="my asu"
                >
                  My ASU
                </a>
              </nav>
              <a
                className="img-link"
                href="https://www.asu.edu/rankings"
                data-ga-footer-type="internal link"
                data-ga-footer-section="secondary footer"
                data-ga-footer="#1 in the u.s. for innovation"
              >
                <img
                  src={innovationLockup}
                  alt="Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)"
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
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="copyright and trademark"
              >
                Copyright and Trademark
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/accessibility/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="accessibility"
              >
                Accessibility
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/privacy"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="privacy"
              >
                Privacy
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/about/terms-of-use"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="terms of use"
              >
                Terms of Use
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/emergency/"
                data-ga-footer-type="internal link"
                data-ga-footer-section="tertiary footer"
                data-ga-footer="emergency"
              >
                Emergency
              </a>

            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const SixColumns = () => (
  <footer
    id="asu-footer"
    role="contentinfo"
    data-elastic-exclude="data-elastic-exclude"
  >
    <div className="wrapper" id="wrapper-endorsed-footer">
      <div className="container" id="endorsed-footer">
        <div className="row">
          <div className="col-md" id="endorsed-logo">
            <a
              href="https://www.asu.edu"
              data-ga-footer-type="internal link"
              data-ga-footer-section="primary footer"
              data-ga-footer="asu logo"
            >
              <img
                src={endorsedLogo}
                alt="ASU University Technology Office Arizona State University."
                width="311"
                height="96"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="col-md" id="social-media">
            <nav className="nav" aria-label="Social Media">
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="facebook icon"
              >
                <span
                  title="Facebook Social Media Icon"
                  className="fab fa-facebook-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="twitter icon"
              >
                <span
                  title="Twitter Social Media Icon"
                  className="fab fa-square-x-twitter"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="instagram icon"
              >
                <span
                  title="Instagram Social Media Icon"
                  className="fab fa-instagram-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="youtube icon"
              >
                <span
                  title="YouTube Social Media Icon"
                  className="fab fa-youtube-square"
                ></span>
              </a>
              <a
                className="nav-link"
                href="#"
                data-ga-footer-type="external link"
                data-ga-footer-section="primary footer"
                data-ga-footer="linkedin icon"
              >
                <span
                  title="LinkedIn Social Media Icon"
                  className="fab fa-linkedin"
                ></span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper" id="wrapper-footer-columns">
      <nav aria-label="Footer">
        <div className="container" id="footer-columns">
          <div className="row">
            <div className="col-xl" id="info-column">
              <div className="h5">
                Complete Name of College, School or Unit Title Should Go Here
              </div>
              <p className="contact-link">
                <a href="#">Contact Us</a>
              </p>
              <p className="contribute-button">
                <a href="#" className="btn btn-gold">
                  Support ASU
                </a>
              </p>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-two"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-two"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-two"
                    >
                      Second Column
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-two"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-two"
                >
                  <a className="nav-link" href="#" title="link">
                    Biological and Health Systems Computing
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Informatics and Decision Systems Electrical
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Computer and Energy Matter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Transport and Energy Sustainability and the Built
                    Environment
                  </a>
                  <a className="nav-link" href="#" title="link">
                    The Polytechnic School
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-three"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-three"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-three"
                    >
                      Student Information
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-three"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-three"
                >
                  <a className="nav-link" href="#" title="link">
                    Student Organization
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Inner Circle Newsletter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    For Your Parents
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Visit Campus
                  </a>
                  <a className="nav-link" href="#" title="link">
                    K-12 Outreach
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire Our Graduates
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire an Intern
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-four"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-four"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-four"
                    >
                      Column Number Four
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-four"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-four"
                >
                  <a className="nav-link" href="#" title="link">
                    Student Organization
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Inner Circle Newsletter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    For Your Parents
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Visit Campus
                  </a>
                  <a className="nav-link" href="#" title="link">
                    K-12 Outreach
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire Our Graduates
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire an Intern
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-five"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-five"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-five"
                    >
                      Mambo Number Five
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-five"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-five"
                >
                  <a className="nav-link" href="#" title="link">
                    Student Organization
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Inner Circle Newsletter
                  </a>
                  <a className="nav-link" href="#" title="link">
                    For Your Parents
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Visit Campus
                  </a>
                  <a className="nav-link" href="#" title="link">
                    K-12 Outreach
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire Our Graduates
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Hire an Intern
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl flex-footer">
              <div className="card accordion-item desktop-disable-xl">
                <div className="accordion-header">
                  <div className="h5">
                    <a
                      id="footlink-header-six"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      href="#footlink-six"
                      role="button"
                      aria-expanded="false"
                      aria-controls="footlink-six"
                    >
                      The Zen Master and the Hot Dog Vendor
                      <span className="fas fa-chevron-up"></span>
                    </a>
                  </div>
                </div>
                <div
                  id="footlink-six"
                  className="collapse accordion-body"
                  aria-labelledby="footlink-header-six"
                >
                  <a className="nav-link" href="#" title="link">
                    A Zen master
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Visiting New York City
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Walks up to
                  </a>
                  <a className="nav-link" href="#" title="link">
                    A hot dog vendor and says
                  </a>
                  <a className="nav-link" href="#" title="link">
                    Make me one with everything
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="wrapper" id="wrapper-footer-innovation">
      <div className="container" id="footer-innovation">
        <div className="row">
          <div className="col">
            <div className="d-flex footer-innovation-links">
              <nav className="nav" aria-label="University Services">
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/locations-maps"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="maps and locations"
                >
                  Maps and Locations
                </a>
                <a
                  className="nav-link"
                  href="https://cfo.asu.edu/applicant"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="jobs"
                >
                  Jobs
                </a>
                <a
                  className="nav-link"
                  href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="directory"
                >
                  Directory
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/contact"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="contact asu"
                >
                  Contact ASU
                </a>
                <a
                  className="nav-link"
                  href="https://my.asu.edu/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="secondary footer"
                  data-ga-footer="my asu"
                >
                  My ASU
                </a>
              </nav>
              <a
                className="img-link"
                href="https://www.asu.edu/rankings"
                data-ga-footer-type="internal link"
                data-ga-footer-section="secondary footer"
                data-ga-footer="#1 in the u.s. for innovation"
              >
                <img
                  src={innovationLockup}
                  alt="Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)"
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

    <div className="wrapper" id="wrapper-footer-colophon">
      <div className="container" id="footer-colophon">
        <div className="row">
          <div className="col">
            <div className="footer-legal-links">
              <nav
                className="nav colophon"
                aria-label="University Legal and Compliance"
              >
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/copyright-trademark"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="tertiary footer"
                  data-ga-footer="copyright and trademark"
                >
                  Copyright and Trademark
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/accessibility/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="tertiary footer"
                  data-ga-footer="accessibility"
                >
                  Accessibility
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/privacy"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="tertiary footer"
                  data-ga-footer="privacy"
                >
                  Privacy
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/about/terms-of-use"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="tertiary footer"
                  data-ga-footer="terms of use"
                >
                  Terms of Use
                </a>
                <a
                  className="nav-link"
                  href="https://www.asu.edu/emergency/"
                  data-ga-footer-type="internal link"
                  data-ga-footer-section="tertiary footer"
                  data-ga-footer="emergency"
                >
                  Emergency
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
