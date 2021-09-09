// @ts-check
import React from "react";

// @ts-ignore
import vertLogo from "../../../assets/images/arizona-state-university-logo-vertical.png";
// @ts-ignore
import horizLogo from "../../../assets/images/arizona-state-university-logo.png";
import { useAppContext } from "../../../core/context/app-context";

const Logo = () => {
  const { logo } = useAppContext();

  return (
    <a
      href={logo ? logo.brandLink : "https://asu.edu"}
      className="navbar-brand"
      data-testid="logo"
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
  );
};

export { Logo };
