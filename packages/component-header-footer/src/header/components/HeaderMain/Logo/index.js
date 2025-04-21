/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { trackGAEvent } from "../../../../../../../shared";
import vertLogo from "../../../../../public/assets/img/arizona-state-university-logo-vertical.png";
import horizLogo from "../../../../../public/assets/img/arizona-state-university-logo.png";
import { useAppContext } from "../../../core/context/app-context";
import { LogoWrapper } from "./index.styles";

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
        alt={logo?.alt ?? "Arizona State University logo"}
        title={logo?.title ?? "ASU homepage"}
        width="303"
        height="234"
        decoding="async"
        // eslint-disable-next-line
        fetchpriority="high"
      />
      <img
        className="horiz"
        src={logo?.mobileSrc ?? horizLogo}
        alt={logo?.alt ?? "Arizona State University logo"}
        title={logo?.title ?? "ASU homepage"}
        width="400"
        height="72"
        decoding="async"
        // eslint-disable-next-line
        fetchpriority="high"
      />
    </LogoWrapper>
  );
};

export { Logo };
