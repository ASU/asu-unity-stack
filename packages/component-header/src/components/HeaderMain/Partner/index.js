import React from "react";

// @ts-ignore
import asuVertLogo from "../../../assets/images/arizona-state-university-logo-vertical.png";
// @ts-ignore
import asuHorizLogo from "../../../assets/images/arizona-state-university-logo.png";
import starbucksLogo from "../../../assets/images/asu-starbucks.png";
import { useAppContext } from "../../../core/context/app-context";
import { PartnerLogosWrapper } from "./index.styles";

const Partner = () => {
  const { partnerLogo, logo: asuLogo, breakpoint } = useAppContext();

  return (
    <PartnerLogosWrapper breakpoint={breakpoint}>
      <a
        href={
          partnerLogo ? partnerLogo.brandLink : "https://starbucks.asu.edu/"
        }
      >
        <img
          src={partnerLogo ? partnerLogo.src : starbucksLogo}
          alt={partnerLogo ? partnerLogo.alt : "Asu Starbucks logo"}
        />
      </a>
      <a href={asuLogo ? asuLogo.brandLink : "https://asu.edu"}>
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
