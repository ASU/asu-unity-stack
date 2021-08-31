// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { layoutDefaultProps } from "../../constants/default-props";
import {
  layoutHeaderPropTypes,
  layoutCTAPropTypes,
} from "../../models/prop-types";
import { LayoutWrapper } from "./index.styles";

/**
 * @param {{
 *  children: JSX.Element
 *  header?: import("../../models/types").LayoutHeaderProps
 *  ctaButton?: import("../../models/types").LayoutCtaButtonProps
 * }} props
 * @returns {JSX.Element}
 *
 */
const Layout = ({ children, header: pHeader, ctaButton: pCtaButton }) => {
  const header = { ...layoutDefaultProps.header, ...pHeader };
  const ctaButton = { ...layoutDefaultProps.ctaButton, ...pCtaButton };

  return (
    <LayoutWrapper className="container">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-9">
          <h2 className={`color-${header.color}`}>{header.text}</h2>
        </div>
        <div className="col-sm-12 col-md-3">
          <a className={`btn btn-${ctaButton.color}`} href={ctaButton.url}>
            {ctaButton.text}
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col">{children}</div>
      </div>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
  header: layoutHeaderPropTypes,
  ctaButton: layoutCTAPropTypes,
};

export { Layout };
