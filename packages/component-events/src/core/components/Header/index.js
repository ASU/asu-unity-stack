// @ts-check
import React from "react";

import { layoutDefaultProps } from "../../constants/default-props";
import {
  layoutHeaderPropTypes,
  layoutCTAPropTypes,
} from "../../models/prop-types";
import { HeaderWrapper } from "./index.styles";

/**
 * @param {{
 *  header?: import("../../models/types").LayoutHeaderProps
 *  ctaButton?: import("../../models/types").LayoutCtaButtonProps
 * }} props
 * @returns {JSX.Element}
 *
 */
const Header = ({ header: pHeader, ctaButton: pCtaButton }) => {
  const header = { ...layoutDefaultProps.header, ...pHeader };
  const ctaButton = { ...layoutDefaultProps.ctaButton, ...pCtaButton };

  return (
    <HeaderWrapper className="row align-items-center">
      <div className="col-sm-12 col-md-9">
        <h2 className={`color-${header.color}`}>{header.text}</h2>
      </div>
      <div className="col-sm-12 col-md-3">
        <a className={`btn btn-${ctaButton.color}`} href={ctaButton.url}>
          {ctaButton.text}
        </a>
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  header: layoutHeaderPropTypes,
  ctaButton: layoutCTAPropTypes,
};

export { Header };
