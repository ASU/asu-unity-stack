// @ts-check
import React from "react";

import { useAppContext } from "../../../core/context/app-context";
import { TitlePropTypes } from "../../../core/models/app-prop-types";
import { TitleWrapper } from "./index.styles";

const Title = () => {
  const { title, parentOrg, parentOrgUrl, baseUrl } = useAppContext();

  if (parentOrg) {
    return (
      <TitleWrapper>
        <a className="unit-name" href={parentOrgUrl}>
          {parentOrg}
        </a>
        <a className="subunit-name" href={baseUrl}>
          {title}
        </a>
      </TitleWrapper>
    );
  }
  return (
    <TitleWrapper>
      <a className="title-subunit-name" href={baseUrl}>
        {title}
      </a>
    </TitleWrapper>
  );
};

Title.propTypes = { ...TitlePropTypes };

export { Title };
