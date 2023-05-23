import React from "react";

import { PreSearchMessageTemplate } from "../PreSearchMessage/index.styles";
import { QuickLinks } from "../QuickLinks";

const PreStudentMsg = () => {
  const titleText = "Welcome to the ASU Student directory";
  const descText =
    "Our directory is integrated into the ASU Search engine experience. To ensure student privacy, the" +
    " bulk of the student directory is not available to the general public.";
  const signInLink = "https://search.asu.edu/caslogin?returnto=/";
  const descText1 =
    "Student profiles are available to ASU affiliates with an ASURITE Id. They can be be viewed by logging " +
    "into the site via this ";
  const descText2 = <a href={signInLink}>Sign In link</a>;
  const descText3 = " or the one in the header at the top right.";
  const descText4 =
    "However, students have the option to make their " +
    "profiles publicly available. Those profiles are visible to anyone without the need to log in.";
  const contactText =
    "Contact us via live chat, phone or email 24 hours a day, seven days a week.";
  return (
    <PreSearchMessageTemplate>
      <div className="message-content">
        <h2>{titleText}</h2>
        <div>
          <p>{descText}</p>
          <p>
            {descText1}
            {descText2}
            {descText3}
          </p>
          <p>{descText4}</p>
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
