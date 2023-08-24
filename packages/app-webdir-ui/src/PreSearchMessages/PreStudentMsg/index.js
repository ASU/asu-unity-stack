import React from "react";

import { PreSearchMessageTemplate } from "../PreSearchMessage/index.styles";
import { QuickLinks } from "../../QuickLinks";

const PreStudentMsg = () => {
  const titleText = "Welcome to the ASU Student Directory";
  const signInLink = "https://search.asu.edu/caslogin?returnto=/";
  const descText =
    "Students must opt-in to make their profile publicly available. The remainder of student profiles that do not have " +
    "directory holds on them are available to ASU affiliates with an ASURITE ID and can be be viewed by ";
  const descText1 = <a href={signInLink}>logging into the site</a>;
  const descText2 = ".";
  const contactText =
    "Contact us via live chat, phone or email 24 hours a day, seven days a week.";
  return (
    <PreSearchMessageTemplate>
      <div className="message-content">
        <h2>{titleText}</h2>
        <div>
          <p>
            {descText}
            {descText1}
            {descText2}
          </p>
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

export { PreStudentMsg };
