import React from "react";

import { PreSearchMessageTemplate } from "./index.styles";

const PreSearchMessage = () => {
  return (
    <PreSearchMessageTemplate>
      <div className="message-content">
        <h2>Welcome to iSearch</h2>
        <div>
          ASU’s Google-based search tool allows you to find any existing,
          accessible page on Arizona State University web sites. Enter a word or
          phrase into the box above and press the enter or return key to find
          web pages, people, and departments.
        </div>
      </div>
      <div className="quick-links">
        <span>Quick links</span>
        <a href="https://www.asu.edu/">MyASU</a>
        <a href="https://www.asu.edu/">ASU directory</a>
        <a href="https://www.asu.edu/">ASU maps</a>
        <a href="https://www.asu.edu/">ASU course catalog</a>
        <a href="https://www.asu.edu/">ASU helpdesk</a>
        <a href="https://www.asu.edu/">ASU home</a>
      </div>
    </PreSearchMessageTemplate>
  );
};

export { PreSearchMessage };
