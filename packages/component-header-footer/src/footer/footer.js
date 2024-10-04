// @ts-check
import { shape } from "prop-types";
import React, { useEffect } from "react";

import trackReactComponent from "../../../../shared/services/componentDatalayer";
import { Social, Legal, Innovation, ContactComponent } from "./components";
import "./_styles.scss";

const Base = () => {
  return (
    <>
      <Innovation />
      <Legal />
    </>
  );
};

/**
 * @param {import("./core/models/types").ASUFooter} props
 * @returns {JSX.Element}
 */
const ASUFooter = ({ social, contact }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "component-footer",
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
    <footer role="contentinfo">
      {social && <Social social={social} />}
      {contact && <ContactComponent contact={contact} />}
      <Base />
    </footer>
  );
};

ASUFooter.propTypes = {
  social: shape(Social.propTypes),
  contact: shape(ContactComponent.propTypes),
};

export { ASUFooter };
