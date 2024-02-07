import React from "react";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../unity-bootstrap-theme/helpers/wrapper";
import { WebDirectory } from "../WebDirectoryComponent/index";

export default createComponent("Web Directory", "Organisms", "Templates");

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

export const facultyRankWebDirectory = createStory(
  ({ ...args }) => {
    return (
      <div className="uds-content-align">
        <WebDirectory
          searchType="faculty_rank"
          deptIds="1535"
          API_URL="https://live-asu-isearch.ws.asu.edu/"
          searchApiVersion="api/v1/"
          filters={filters}
          display={display}
          // alphaFilter={args.alphaFilter}
          // appPathFolder="/my/custom/path/to/component/root/example"
        />
      </div>
    );
  },
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);

facultyRankWebDirectory.args = {
  template: 0,
};
