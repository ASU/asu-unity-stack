// @ts-check
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { useAppContext } from "../../core/context/app-context";
import { Wrapper } from "./index.styles";
import { Logo } from "./Logo";
import { NavbarContainer } from "./NavbarContainer";
import { Partner } from "./Partner";
import { Title } from "./Title";

const HeaderMain = () => {
  const { breakpoint, isPartner } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChangeMenuVisibility = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    // @ts-ignore
    <Wrapper breakpoint={breakpoint}>
      <div className="container-xl">
        <div className="header-main">
          <nav
            className={`navbar navbar-expand-xl ${isPartner ? "partner" : ""}`}
            aria-label="Main"
          >
            {!isPartner && <Logo />}
            <button
              className="navbar-toggler collapsed"
              type="button"
              onClick={handleChangeMenuVisibility}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? "times" : "bars"} />
            </button>
            <div className={`${!isPartner ? "expand-title" : ""}`}>
              {isPartner ? <Partner /> : <Title />}
              <NavbarContainer display="desktop" />
            </div>
            {mobileMenuOpen && <NavbarContainer display="mobile" />}
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

export { HeaderMain };
