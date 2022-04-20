import React from "react";

import { QuickLinksTemplate } from "./index.styles";

const QuickLinks = () => {
  const collagesAndSchoolsMessage = "ASU's colleges and schools";
  return (
    <QuickLinksTemplate>
      <span>Quick links</span>
      <a href="https://students.asu.edu/advising">
        ASU advising directory by college
      </a>
      <a href="https://www.asu.edu/academics/colleges-schools">
        {collagesAndSchoolsMessage}
      </a>
      <a href="https://degrees.asu.edu/">Search majors and degree programs</a>
      <a href="https://webapp4.asu.edu/catalog/classlist">ASU class search</a>
      <a href="https://search.lib.asu.edu/discovery/search?vid=01ASU_INST:01ASU">
        ASU Library One search
      </a>
      <a href="https://news.asu.edu/">ASU news</a>
      <a href="https://asuevents.asu.edu/">ASU events calendar</a>
      <a href="https://cfo.asu.edu/applicant">Search ASU job openings</a>
    </QuickLinksTemplate>
  );
};

export { QuickLinks };
