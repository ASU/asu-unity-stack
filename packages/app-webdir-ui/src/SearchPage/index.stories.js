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
    <SearchPage
      API_URL="https://dev-asu-isearch.ws.asu.edu/"
      searchApiVersion="api/v1/"
      loggedIn
    />
  </div>,
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);
searchPageExample.args = {
  template: 0,
};
