import React from "react";

import { WebDirectory } from "./index";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../bootstrap4-theme/helpers/wrapper";

export default createComponent("Web Directory", "Organisms", "Templates");

export const webDirectoryExampleDepartments = createStory(
  <div className="uds-content-align">
    <WebDirectory
      searchType="departments"
      deptIds="1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003"
      searchURL=" https://dev-asu-isearch.ws.asu.edu/api/v1/"
    />
  </div>,
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);

webDirectoryExampleDepartments.args = {
  template: 0,
};

export const webDirectoryExamplePeople = createStory(
  <div className="uds-content-align">
    <WebDirectory
      searchType="people"
      ids=",mdenke:1350,lhillzev:1353,jagarc50:1350"
      searchURL=" https://dev-asu-isearch.ws.asu.edu/api/v1/"
    />
  </div>,
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);

webDirectoryExamplePeople.args = {
  template: 0,
};

export const webDirectoryExampleDepartmentsAndPeople = createStory(
  <div className="uds-content-align">
    <WebDirectory
      searchType="people_departments"
      ids=",tgrandli:1344,mcrow:1343,jcunnin8:1358,ccherrer:1358,csmudde:1358"
      searchURL=" https://dev-asu-isearch.ws.asu.edu/api/v1/"
    />
  </div>,
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);

webDirectoryExampleDepartmentsAndPeople.args = {
  template: 0,
};
