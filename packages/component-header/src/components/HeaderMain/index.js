import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import vertLogo from "../../assets/images/arizona-state-university-logo-vertical.png";
import horizLogo from "../../assets/images/arizona-state-university-logo.png";
import { LogoPropTypes } from "../../core/models/app-prop-types";
import { DesktopNavbar } from "./DesktopNavbar";
import { Wrapper } from "./index.styles";
import { MobileNavbar } from "./MobileNavbar";

const HeaderMain = ({ logo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChangeMenuVisibility = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <Wrapper>
      <div className="container-xl">
        <div className="header-main">
          <nav className="navbar navbar-expand-xl" aria-label="Main">
            <a
              href={logo ? logo.brandLink : "asu.edu"}
              className="navbar-brand"
            >
              <img
                className="vert"
                src={logo ? logo.src : vertLogo}
                alt={logo ? logo.alt : "Arizona State University"}
              />
              <img
                className="horiz"
                src={logo ? logo.mobileScr : horizLogo}
                alt={logo ? logo.alt : "Arizona State University"}
              />
            </a>
            {mobileMenuOpen && <MobileNavbar />}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleChangeMenuVisibility}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? "times" : "bars"} />
            </button>
            <DesktopNavbar />
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

HeaderMain.propTypes = {
  logo: { ...LogoPropTypes },
};

export { HeaderMain };
