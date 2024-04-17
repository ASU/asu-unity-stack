import React from "react";

import { FullLayout } from "../../../../shared/components/Layout";
import { WebDirectory } from "../WebDirectoryComponent/index";

export default {
  title: "Organisms/Web Directory/Templates",
  decorators: [story => <FullLayout>{story()}</FullLayout>],
};

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

export const facultyRankWebDirectory = args => {
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
};
