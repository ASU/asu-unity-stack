import { trackGAEvent } from "@asu/shared";
import React from "react";

import vertLogo from "../../../../../public/assets/img/arizona-state-university-logo-vertical.png";
import horizLogo from "../../../../../public/assets/img/arizona-state-university-logo.png";
import { useAppContext } from "../../../core/context/app-context";
import { CLASS_NAMES } from "../../../core/constants/classNames";
import { LogoWrapper } from "./index.styles";

const Logo = () => {
  const { logo } = useAppContext();

  return (
    <LogoWrapper
      href={logo?.brandLink ?? "https://asu.edu"}
      className={CLASS_NAMES.NAVBAR_BRAND}
      data-testid="logo"
      onFocus={() => trackGAEvent({ text: "asu logo" })}
    >
      <img
        className={CLASS_NAMES.LOGO_VERT}
        src={logo?.src ?? vertLogo}
        alt={logo?.alt ?? "Arizona State University logo"}
        title={logo?.title ?? "ASU homepage"}
        width="303"
        height="234"
        decoding="async"
        fetchpriority="high"
      />
      <img
        className={CLASS_NAMES.LOGO_HORIZ}
        src={logo?.mobileSrc ?? horizLogo}
        alt={logo?.alt ?? "Arizona State University logo"}
        title={logo?.title ?? "ASU homepage"}
        width="400"
        height="72"
        decoding="async"
        fetchpriority="high"
      />
    </LogoWrapper>
  );
};

export { Logo };
