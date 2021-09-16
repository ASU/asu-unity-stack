import React from "react";

// @ts-ignore
import asuVertLogo from "../../../assets/images/arizona-state-university-logo-vertical.png";
// @ts-ignore
import asuHorizLogo from "../../../assets/images/arizona-state-university-logo.png";
import starbucksLogo from "../../../assets/images/asu-starbucks.png";
import { useAppContext } from "../../../core/context/app-context";
import { trackGAEvent } from "../../../core/services/googleAnalytics";
import { PartnerLogosWrapper } from "./index.styles";

const Partner = () => {
  const { partnerLogo, logo: asuLogo, breakpoint } = useAppContext();

  return (
    <PartnerLogosWrapper breakpoint={breakpoint} data-testid="partner">
      <a
        href={
          partnerLogo ? partnerLogo.brandLink : "https://starbucks.asu.edu/"
        }
        onFocus={() => trackGAEvent("starbucks logo")}
      >
        <img
          src={partnerLogo ? partnerLogo.src : starbucksLogo}
          alt={partnerLogo ? partnerLogo.alt : "Asu Starbucks logo"}
        />
      </a>
      <a
        href={asuLogo ? asuLogo.brandLink : "https://asu.edu"}
        onFocus={() => trackGAEvent("asu logo")}
      >
        <img
          className="vert"
          src={asuLogo ? asuLogo.src : asuVertLogo}
          alt={asuLogo ? asuLogo.alt : "Arizona State University"}
        />
        <img
          className="horiz"
          src={asuLogo ? asuLogo.mobileScr : asuHorizLogo}
          alt={asuLogo ? asuLogo.alt : "Arizona State University"}
        />
      </a>
    </PartnerLogosWrapper>
  );
};

export { Partner };
