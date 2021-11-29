// @ts-check
import { getCurrentScriptPath } from "@asu-design-system/components-core";
import React from "react";

import { useAppContext } from "../../../core/context/app-context";
import { trackGAEvent } from "../../../core/services/googleAnalytics";

const currentScriptPath = getCurrentScriptPath();
const vertLogo = `${currentScriptPath}/assets/img/arizona-state-university-logo-vertical.png`;
const horizLogo = `${currentScriptPath}/assets/img/arizona-state-university-logo.png`;

const Logo = () => {
  const { logo } = useAppContext();

  return (
    <a
      href={logo ? logo.brandLink : "https://asu.edu"}
      className="navbar-brand"
      data-testid="logo"
      onFocus={() => trackGAEvent({ text: "asu logo" })}
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
