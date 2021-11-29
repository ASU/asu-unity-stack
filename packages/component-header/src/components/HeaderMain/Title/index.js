// @ts-check
import React, { useEffect, useState } from "react";

import { useAppContext } from "../../../core/context/app-context";
import { TitlePropTypes } from "../../../core/models/app-prop-types";
import { trackGAEvent } from "../../../core/services/googleAnalytics";
import { checkFirstLoad } from "../../../core/utils/helpers/title";
import { TitleWrapper } from "./index.styles";

const Title = () => {
  const [active, setActive] = useState(false);
  const { title, parentOrg, parentOrgUrl, baseUrl, breakpoint, animateTitle } =
    useAppContext();

  useEffect(() => {
    if (animateTitle !== false) {
      // If a custom baseUrl is passed in, it will be used to check for first page load
      let root = baseUrl === "/" ? window.location.hostname : baseUrl;
      // If relative baseURL given, append to the hostname for checking first page load
      if (!root.includes(window.location.hostname) && root.indexOf("/") === 0) {
        root = window.location.hostname + root;
      }
      if (checkFirstLoad(root)) {
        setActive(true);
      }
    }
  }, [active, animateTitle, baseUrl]);

  if (parentOrg) {
    return (
      <TitleWrapper
        // @ts-ignore
        breakpoint={breakpoint}
        className={`title ${active ? "active" : ""}`}
        data-testid="title"
      >
        <a
          className="unit-name"
          href={parentOrgUrl}
          onFocus={() => trackGAEvent({ text: parentOrg })}
          title={`${parentOrg} home page`}
        >
          {parentOrg}
        </a>
        <a
          className="subunit-name"
          href={baseUrl}
          onFocus={() => trackGAEvent({ text: title })}
          title={`${title} home page`}
        >
          {title}
        </a>
      </TitleWrapper>
    );
  }
  return (
    <TitleWrapper
      // @ts-ignore
      breakpoint={breakpoint}
      className={`title ${active ? "active" : ""}`}
      data-testid="title"
    >
      <a
        className="title-subunit-name"
        href={baseUrl}
        onFocus={() => trackGAEvent({ text: title })}
        title={`${title} home page`}
      >
        {title}
      </a>
    </TitleWrapper>
  );
};

Title.propTypes = { ...TitlePropTypes };

export { Title };
