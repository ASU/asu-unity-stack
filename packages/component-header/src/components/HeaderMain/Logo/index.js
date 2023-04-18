/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { getCurrentScriptPath } from "../../../../../components-core/src/core/utils/script-utils";
import { useAppContext } from "../../../core/context/app-context";
import { trackGAEvent } from "../../../core/services/googleAnalytics";
import { LogoWrapper } from "./index.styles";

const currentScriptPath = getCurrentScriptPath();
const vertLogo = `${currentScriptPath}/assets/img/arizona-state-university-logo-vertical.png`;
const horizLogo = `${currentScriptPath}/assets/img/arizona-state-university-logo.png`;

const Logo = () => {
  const { logo } = useAppContext();

  return (
    <LogoWrapper
      href={logo?.brandLink ?? "https://asu.edu"}
      className="navbar-brand"
      data-testid="logo"
      onFocus={() => trackGAEvent({ text: "asu logo" })}
    >
      <img
        className="vert"
        src={logo?.src ?? vertLogo}
        alt={logo?.alt ?? "Arizona State University"}
        title={logo?.title ?? "ASU home page"}
        width="303"
        height="234"
        decoding="async"
        // eslint-disable-next-line
        fetchPriority="high"
      />
      <img
        className="horiz"
        src={logo?.mobileSrc ?? horizLogo}
        alt={logo?.alt ?? "Arizona State University"}
        title={logo?.title ?? "ASU home page"}
        width="400"
        height="72"
        decoding="async"
        // eslint-disable-next-line
        fetchPriority="high"
      />
    </LogoWrapper>
  );
};

export { Logo };
