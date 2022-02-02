// @ts-check
import React from "react";
import { ASUFooter } from "@asu-design-system/component-footer/dist/asuFooter.es";
import styled from "styled-components";

const FooterSection = styled.div`
  footer {
    .footer-innovation-links {
      a {
        order: 2;
      }

      nav {
        order: 1;
      }
    }
`;
function Footer() {
  return (
    <FooterSection className="app-footer">
      <ASUFooter />
    </FooterSection>
  );
}

export { Footer };
