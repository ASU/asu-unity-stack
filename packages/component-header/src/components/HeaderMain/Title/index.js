// @ts-check
import React from "react";

import { useAppContext } from "../../../core/context/app-context";
import { TitlePropTypes } from "../../../core/models/app-prop-types";
import { trackGAEvent } from "../../../core/services/googleAnalytics";
import { TitleWrapper } from "./index.styles";

const Title = () => {
  const { title, parentOrg, parentOrgUrl, baseUrl, breakpoint } =
    useAppContext();

  if (parentOrg) {
    return (
      <TitleWrapper
        // @ts-ignore
        breakpoint={breakpoint}
        className="title"
        data-testid="title"
      >
        <a
          className="unit-name"
          href={parentOrgUrl}
          onFocus={() => trackGAEvent(parentOrg)}
        >
          {parentOrg}
        </a>
        <a
          className="subunit-name"
          href={baseUrl}
          onFocus={() => trackGAEvent(title)}
        >
          {title}
        </a>
      </TitleWrapper>
    );
  }
  return (
    // @ts-ignore
    <TitleWrapper breakpoint={breakpoint} className="title" data-testid="title">
      <a
        className="title-subunit-name"
        href={baseUrl}
        onFocus={() => trackGAEvent(title)}
      >
        {title}
      </a>
    </TitleWrapper>
  );
};

Title.propTypes = { ...TitlePropTypes };

export { Title };
