import React from "react";

import { SearchPage } from "./index";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../unity-bootstrap-theme/helpers/wrapper";

export default createComponent("Search Page", "Organisms", "Templates");

export const searchPageExample = createStory(
  <div className="uds-content-align">
    <SearchPage
      API_URL="https://test-asu-isearch.ws.asu.edu/"
      searchApiVersion="api/v1/"
      loggedIn={false}
      // appPathFolder="/my/custom/path/to/component/root/example"
    />
  </div>,
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);
searchPageExample.args = {
  template: 0,
};
