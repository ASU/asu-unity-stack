import React from "react";

import { PreSearchMessageTemplate } from "../PreSearchMessage/index.styles";
import { QuickLinks } from "../QuickLinks";

const PreFacStaffMsg = () => {
  const titleText = "Welcome to the ASU Faculty/Staff directory";
  const descText =
    "Our directory is integrated into the ASU Search engine experience. Find current faculty and staff " +
    "profiles by using the search field above.";
  const contactText =
    "Contact us via live chat, phone or email 24 hours a day, seven days a week.";
  return (
    <PreSearchMessageTemplate>
      <div className="message-content">
        <h2>{titleText}</h2>
        <div>
          <p>{descText}</p>
          <div className="assistance-area">
            <span className="intro-highlight">Need assistance?</span> <br />
            <a href="https://www.asu.edu/about/contact">{contactText}</a>
          </div>
        </div>
      </div>
      <QuickLinks />
    </PreSearchMessageTemplate>
  );
};

export { PreFacStaffMsg };
