import React from "react";

import { QuickLinks } from "../QuickLinks";
import { PreSearchMessageTemplate } from "./index.styles";

const PreSearchMessage = () => {
  const titleText = "Welcome to ASU search";
  const descText = "Find the information you're looking for from anywhere on ";
  const contactText =
    "Contact us via live chat, phone or email 24 hours a day, seven days a week.";
  return (
    <PreSearchMessageTemplate>
      <div className="message-content">
        <h2>{titleText}</h2>
        <div>
          <div>
            {descText}
            <a href="http://asu.edu/">asu.edu.</a>
          </div>
          <div className="assisstance-area">
            <span className="intro-highlight">Need assistance?</span> <br />
            <a href="https://www.asu.edu/about/contact">{contactText}</a>
          </div>
        </div>
      </div>
      <QuickLinks />
    </PreSearchMessageTemplate>
  );
};

export { PreSearchMessage };
