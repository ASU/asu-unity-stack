import React from "react";

import { WebDirectory } from "./index";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../bootstrap4-theme/helpers/wrapper";

export default createComponent("Web Directory", "Organisms", "Templates");

export const webDirectoryExample = createStory(
  <div className="uds-content-align">
    <WebDirectory
      searchType="people_departments"
      ids=",mdenke:1350,lhillzev:1353,jagarc50:1350"
      deptIds="1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003"
      searchURL=" https://dev-asu-isearch.ws.asu.edu/api/v1/"
    />
  </div>,
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);
webDirectoryExample.args = {
  template: 0,
};
