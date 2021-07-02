// @ts-check
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { Wrapper } from "./index.styles";
import { Logo } from "./Logo";
import { NavbarContainer } from "./NavbarContainer";
import { Title } from "./Title";

const HeaderMain = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChangeMenuVisibility = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <Wrapper>
      <div className="container-xl">
        <div className="header-main">
          <nav className="navbar navbar-expand-xl" aria-label="Main">
            <Logo />
            <button
              className="navbar-toggler collapsed"
              type="button"
              onClick={handleChangeMenuVisibility}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? "times" : "bars"} />
            </button>
            <Title />
            <NavbarContainer display="desktop" />
            {mobileMenuOpen && <NavbarContainer display="mobile" />}
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

export { HeaderMain };
