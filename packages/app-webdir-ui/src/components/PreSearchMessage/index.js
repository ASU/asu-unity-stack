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
        <a href="#">MyASU</a>
        <a href="#">ASU directory</a>
        <a href="#">ASU maps</a>
        <a href="#">ASU course catalog</a>
        <a href="#">ASU helpdesk</a>
        <a href="#">ASU home</a>
      </div>
    </PreSearchMessageTemplate>
  );
};

export { PreSearchMessage };
