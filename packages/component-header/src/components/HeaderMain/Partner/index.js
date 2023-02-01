/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

// @ts-check
import { getCurrentScriptPath } from "../../../../../components-core/src/core/utils/script-utils";
import { useAppContext } from "../../../core/context/app-context";
import { trackGAEvent } from "../../../core/services/googleAnalytics";
import { PartnerLogosWrapper } from "./index.styles";

const currentScriptPath = getCurrentScriptPath();
const asuVertLogo = `${currentScriptPath}/assets/img/arizona-state-university-logo-vertical.png`;
const asuHorizLogo = `${currentScriptPath}/assets/img/arizona-state-university-logo.png`;
const starbucksLogo = `${currentScriptPath}/assets/img/asu-starbucks.png`;

const Partner = () => {
  const { partnerLogo, logo: asuLogo, breakpoint } = useAppContext();

  return (
    // @ts-ignore
    <PartnerLogosWrapper breakpoint={breakpoint} data-testid="partner">
      <a
        href={partnerLogo?.brandLink ?? "https://starbucks.asu.edu/"}
        onFocus={() => trackGAEvent({ text: "starbucks logo" })}
      >
        <img
          src={partnerLogo?.src ?? starbucksLogo}
          alt={partnerLogo?.alt ?? "ASU Starbucks logo"}
        />
      </a>
      <a
        href={asuLogo?.brandLink ?? "https://asu.edu"}
        onFocus={() => trackGAEvent({ text: "asu logo" })}
      >
        <img
          className="vert"
          src={asuLogo?.src ?? asuVertLogo}
          alt={asuLogo?.alt ?? "Arizona State University"}
        />
        <img
          className="horiz"
          src={asuLogo?.mobileSrc ?? asuHorizLogo}
          alt={asuLogo?.alt ?? "Arizona State University"}
        />
      </a>
    </PartnerLogosWrapper>
  );
};

export { Partner };
