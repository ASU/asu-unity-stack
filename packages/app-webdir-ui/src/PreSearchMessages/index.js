import React from "react";

import { PreSearchDynamicMsg } from "./PreSearchMessage";

const searchMessageComponentMap = {
  "web_dir_faculty_staff": (
    <PreSearchDynamicMsg
      titleText="Welcome to the ASU Faculty and Staff Directory"
      descText="Our directory is integrated into the ASU Search engine experience. Find current faculty and staff profiles by using the search field above."
      contactText="Contact us via live chat, phone or email 24 hours a day, seven days a week."
    />
  ),
  "web_dir_students": (
    <PreSearchDynamicMsg
      titleText="Welcome to the ASU Student Directory"
      descText="Students must opt-in to make their profile publicly available. ASU affiliates with an ASURITE ID can view the remaining student profiles that do not have directory holds on them by "
      contactText="Contact us via live chat, phone or email 24 hours a day, seven days a week."
      signInLink="https://search.asu.edu/caslogin?returnto=/"
    />
  ),
  "all": (
    <PreSearchDynamicMsg
      titleText="Welcome to ASU search"
      descText="Find the information you're looking for from anywhere on asu.edu."
      contactText="Contact us via live chat, phone or email 24 hours a day, seven days a week."
    />
  ),
  "web-sites": (
    <PreSearchDynamicMsg
      titleText="Welcome to ASU search"
      descText="Find the information you're looking for from anywhere on asu.edu."
      contactText="Contact us via live chat, phone or email 24 hours a day, seven days a week."
    />
  ),
};

export { searchMessageComponentMap };
