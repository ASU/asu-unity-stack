import React from "react";

import { SearchPage } from "./index";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../bootstrap4-theme/helpers/wrapper";

export default createComponent("Search Page", "Organisms", "Templates");

export const searchPageExample = createStory(
  <div className="uds-content-align">
    <SearchPage searchURL="https://dev-asu-isearch.ws.asu.edu/api/v1/" />
  </div>,
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);
searchPageExample.args = {
  template: 0,
};
