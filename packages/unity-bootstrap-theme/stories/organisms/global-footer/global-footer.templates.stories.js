import PropTypes from "prop-types";
import React from "react";

import innovationLockup from "./200420-GlobalFooter-No1InnovationLockup.png";
import endorsedLogo from "./ASU_UniversityTechOffice_2_Horiz_RGB_White_150ppi.png";


const Endorced = () => (
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
);


const Innovation = () => (
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
                href="https://www.asu.edu/asujobs"
                data-ga-footer-type="internal link"
                data-ga-footer-section="secondary footer"
                data-ga-footer="jobs"
              >
                Jobs
              </a>
              <a
                className="nav-link"
                href="https://isearch.asu.edu/"
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
);

const Colophon = () => (
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
);
const InfoColumn = ({columns=1}) => {
/*
colClass = "col-xl" if columns > 4
buttonClass = "btn btn-gold" if columns === 6
*/
  let colClass = "col-xl-3", buttonClass = "btn btn-small btn-gold";
  colClass = (columns > 4) ? "col-xl" : colClass;
  buttonClass = (columns > 5) ? "btn btn-gold" : buttonClass;
  return(

    <div className={colClass} id="info-column">
      <div className="h5">
        Complete Name of College, School or Unit Title Should Go Here
      </div>
      <p className="contact-link">
        <a href="#">Contact Us</a>
      </p>
      <p className="contribute-button">
        <a href="#" className={buttonClass}>
          Support ASU
        </a>
      </p>
    </div>
  )
}

const Column = ({title,id,links}) => (
  <div className="col-xl flex-footer">
    <div className="card accordion-item desktop-disable-xl">
      <div className="accordion-header">
        <div className="h5">
          <a
            id={`footlink-header-${id}`}
            className="collapsed"
            data-bs-toggle="collapse"
            href={`#footlink-${id}`}
            role="button"
            aria-expanded="false"
            aria-controls={`footlink-${id}`}
          >
            {title}
            <span className="fas fa-chevron-up"></span>
          </a>
        </div>
      </div>
      <div
        id={`footlink-${id}`}
        className="collapse accordion-body"
        aria-labelledby={`footlink-header-${id}`}
      >
        {
          links && links.map(link=>(
              <a key={link} className="nav-link" href="#" title="link">{link}</a>
            )
          )
        }
      </div>
    </div>
  </div>
);
const data = [
  {
    title:"Second Column",
    id:"two",
    links:[
      "Biological and Health Systems Computing",
      "Informatics and Decision Systems Electrical",
      "Computer and Energy Matter",
      "Transport and Energy Sustainability and the Built Environment",
      "The Polytechnic School",
    ]
  },
  {
    title:"Student Information",
    id:"three",
    links:[
      "Student Organization",
      "Inner Circle Newsletter",
      "For Your Parents",
      "Visit Campus",
      "K-12 Outreach",
      "Hire Our Graduates",
      "Hire an Intern",
    ]
  },
  {
    title:"Column Number Four",
    id:"four",
    links:[
      "Student Organization",
      "Inner Circle Newsletter",
      "For Your Parents",
      "Visit Campus",
      "K-12 Outreach",
      "Hire Our Graduates",
      "Hire an Intern",
    ]
  },
  {
    title:"Mambo Number Five",
    id:"five",
    links:[
      "Student Organization",
      "Inner Circle Newsletter",
      "For Your Parents",
      "Visit Campus",
      "K-12 Outreach",
      "Hire Our Graduates",
      "Hire an Intern",
    ]
  },
  {
    title:"The Zen Master and the Hot Dog Vendor",
    id:"six",
    links:[
      "A Zen master",
      "Visiting New York City",
      "Walks up to",
      "A hot dog vendor and says",
      "Make me one with everything",
    ]
  }
];



export const Footer = ({logo=true, columns=0}) => {
  const Container = ()=> (<>{
    (columns !== 0) && <div className="container" id="footer-columns">
        <div className="row">
          <InfoColumn columns={columns}/>
          {
            Array(columns-1).fill(null).map((na,col)=>(<Column key={data[col].id} {...data[col]}/>))
          }
        </div>
      </div>
    }</>);
      return (
        <footer
        id="asu-footer"
        role="contentinfo"
        data-elastic-exclude="data-elastic-exclude"
        >
      { logo && <Endorced /> }

      {(columns !== 0) &&
        <div className="wrapper" id="wrapper-footer-columns">
        {
          (columns === 1) ?
          <Container /> :
          <nav aria-label="Footer"><Container/></nav>
        }
        </div>
      }

      <Innovation />

      <Colophon />
    </footer>
  )
};

Footer.propTypes = {
  logo: PropTypes.bool,
  columns: PropTypes.oneOf([0,1,2,3,4,5,6]),
}

Footer.defaultProps = {
  logo: true,
  columns: 0
}
