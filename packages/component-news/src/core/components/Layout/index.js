// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { defaultProps } from "../../constants/default-props";
import {
  componentCtaButtonShape,
  componentHeaderShape,
} from "../../models/news-prop-types";

const Container = styled.section`
  .row,
  .col {
    border: 1px solid;
  }
`;

/**
 * @param {{
 *  children: JSX.Element
 *  header: import("../../models/news-types").ComponentHeader
 *  ctaButton: import("../../models/news-types").ComponentCtaButton
 * }} props
 * @returns {JSX.Element}
 *
 */
const Layout = ({ children, header: pHeader, ctaButton: pCtaButton }) => {
  const header = { ...defaultProps.header, ...pHeader };
  const ctaButton = { ...defaultProps.ctaButton, ...pCtaButton };

  return (
    <Container className="container">
      <div className="row justify-content-between align-items-center">
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
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
  header: componentHeaderShape,
  ctaButton: componentCtaButtonShape,
};
export { Layout };
