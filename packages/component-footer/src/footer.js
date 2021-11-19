// @ts-check
import { shape } from "prop-types";
import React from "react";

import { Social, Legal, Innovation, Contact } from "./components";

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
  return (
    <footer role="contentinfo">
      {social && <Social social={social} />}
      {contact && <Contact contact={contact} />}
      <Base />
    </footer>
  );
};

ASUFooter.propTypes = {
  social: shape(Social.propTypes),
  contact: shape(Contact.propTypes),
};

export { ASUFooter };
