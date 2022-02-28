import React from "react";

import { QuickLinks } from "../QuickLinks";
import { PreSearchMessageTemplate } from "./index.styles";

const PreSearchMessage = () => {
  return (
    <PreSearchMessageTemplate>
      <div className="message-content">
        <h2>Welcome to ASU search</h2>
        <div>
          <div>
            Find the information you're looking for from anywhere on <a href="http://asu.edu/">asu.edu.</a>
          </div>
          <div className="assisstance-area">
            <span className="intro-highlight">Need assistance?</span> <br />
            <a href="https://www.asu.edu/about/contact">
              Contact us via live chat, phone or email 24 hours a day, seven days a week.
            </a>
          </div>
        </div>
      </div>
      <QuickLinks />
    </PreSearchMessageTemplate>
  );
};

export { PreSearchMessage };
