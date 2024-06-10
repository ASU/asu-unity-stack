import React from "react";

export default {
  title: "Atoms/Secondary Nav Link/Examples",
  argTypes: {},
  parameters: {
    footer: {
      disable: true
    },
    controls: { disable: true }
  }
};

export const SecondaryNavLink = () => (
  <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  }}
  id="html-root">
  <a href="#" className="secondary-nav-link">
    Secondary Nav Link
  </a>
  </div>
);
