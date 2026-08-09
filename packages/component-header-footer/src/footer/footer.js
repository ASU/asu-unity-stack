// @ts-check
import { trackReactComponent } from "@asu/shared";
import { bool, shape } from "prop-types";
import React, { useEffect } from "react";

import { Social, Legal, Innovation, ContactComponent } from "./components";
import { StyledFooter } from "./index.styles";

const Base = ({ isUnbranded }) => {
  return (
    <>
      {!isUnbranded && <Innovation />}
      <Legal />
    </>
  );
};

Base.propTypes = {
  isUnbranded: bool,
};

/**
 * @param {import("./core/models/types").ASUFooter} props
 * @returns {JSX.Element}
 */
const ASUFooter = ({ social, contact, isUnbranded = false }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "component-StyledFooter",
        component: "Component Footer",
        type: "NA",
        configuration: {
          social,
          contact,
        },
      });
    }
  }, []);

  return (
    <StyledFooter role="contentinfo">
      {!isUnbranded && social && <Social social={social} />}
      {contact && <ContactComponent contact={contact} />}
      <Base isUnbranded={isUnbranded} />
    </StyledFooter>
  );
};

ASUFooter.propTypes = {
  social: shape(Social.propTypes),
  contact: shape(ContactComponent.propTypes),
  isUnbranded: bool,
};

export { ASUFooter };
