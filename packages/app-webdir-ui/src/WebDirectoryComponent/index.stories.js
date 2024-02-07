import React from "react";

import { WebDirectory } from "./index";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../unity-bootstrap-theme/helpers/wrapper";

const extraOptions = {
  alphaFilter: {
    name: "Alphabetical Filtering",
    control: { type: "radio" },
    options: ["true", "false"],
    defaultValue: "false",
  },
};

export default createComponent(
  "Web Directory",
  "Organisms",
  "Templates",
  extraOptions
);

const display = {
  defaultSort: "last_name",
  doNotDisplayProfiles: "",
  profilesPerPage: "10",
  usePager: "1",
};
const filters = {
  employee: "",
  expertise: "",
  title: "",
  campuses: "",
};
/* For testing filters...
const filters = {
  employee: "Faculty,Administative",
  expertise: "Big Data,Connected Learning",
  title: "Professor",
  campuses: "TEMPE,POLY",
};
*/

export const webDirectoryExampleDepartments = createStory(
  ({ ...args }) => {
    return (
      <div className="uds-content-align">
        <WebDirectory
          searchType="departments"
          deptIds="1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003,159390"
          API_URL="https://test-asu-isearch.ws.asu.edu"
          searchApiVersion="/api/v1/"
          filters={filters}
          display={display}
          alphaFilter={args.alphaFilter}
          // appPathFolder="/my/custom/path/to/component/root/example"
        />
      </div>
    );
  },
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);

webDirectoryExampleDepartments.args = {
  template: 0,
};

export const webDirectoryExamplePeople = createStory(
  ({ ...args }) => {
    return (
      <div className="uds-content-align">
        <WebDirectory
          searchType="people"
          ids=",mcrow:454517,mdenke:1350,jagarc50:1350,lhillzev:1353"
          API_URL="https://test-asu-isearch.ws.asu.edu"
          searchApiVersion="/api/v1/"
          display={display}
          alphaFilter={args.alphaFilter}
          // appPathFolder="/my/custom/path/to/component/root/example"
        />
      </div>
    );
  },
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);

webDirectoryExamplePeople.args = {
  template: 0,
};

export const webDirectoryExampleDepartmentsAndPeople = createStory(
  ({ ...args }) => {
    return (
      <div className="uds-content-align">
        <WebDirectory
          searchType="people_departments"
          ids=",tgrandli:1344,mcrow:1343,jcunnin8:1358,ccherrer:1358,csmudde:1358"
          API_URL="https://test-asu-isearch.ws.asu.edu"
          searchApiVersion="/api/v1/"
          display={display}
          alphaFilter={args.alphaFilter}
          // appPathFolder="/my/custom/path/to/component/root/example"
        />
      </div>
    );
  },
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);

webDirectoryExampleDepartmentsAndPeople.args = {
  template: 0,
};
