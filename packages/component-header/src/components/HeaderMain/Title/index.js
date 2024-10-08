// @ts-check
import React, { useEffect, useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import { useAppContext } from "../../../core/context/app-context";
import { TitlePropTypes } from "../../../core/models/app-prop-types";
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
        className="title"
        data-testid="title"
      >
        <a
          className="unit-name"
          href={parentOrgUrl}
          onClick={() =>
            trackGAEvent({
              event: "link",
              action: "click",
              name: "onclick",
              region: "navbar",
              type: "internal link",
              section: "main navbar",
              text: parentOrg,
            })
          }
          title={`${parentOrg} home page`}
        >
          {parentOrg}
        </a>
        <a
          className={`subunit-name ${active ? "active" : ""}`}
          href={baseUrl}
          onClick={() =>
            trackGAEvent({
              event: "link",
              action: "click",
              name: "onclick",
              region: "navbar",
              type: "internal link",
              section: "main navbar",
              text: title,
            })
          }
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
      className="title"
      data-testid="title"
    >
      <a
        className={`title-subunit-name ${active ? "active" : ""}`}
        href={baseUrl}
        onClick={() =>
          trackGAEvent({
            event: "link",
            action: "click",
            name: "onclick",
            region: "navbar",
            type: "internal link",
            section: "main navbar",
            text: title,
          })
        }
        title={`${title} home page`}
      >
        {title}
      </a>
    </TitleWrapper>
  );
};

Title.propTypes = { ...TitlePropTypes };

export { Title };
