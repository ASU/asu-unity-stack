import React from "react";

import { FullLayout } from "@asu/shared";
import { WebDirectory } from "../WebDirectoryComponent/index";

const API_URL = import.meta.env.VITE_API_URL;
const searchApiVersion = import.meta.env.VITE_SEARCH_API_VERSION;

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

export const FacultyRankWebDirectory = args => {
  return (
    <div className="uds-content-align">
      <WebDirectory
        searchType="faculty_rank"
        deptIds="249891,1709,N1712169848,1706,1705"
        API_URL={API_URL}
        searchApiVersion={searchApiVersion}
        filters={filters}
        display={display}
        // alphaFilter={args.alphaFilter}
        // appPathFolder="/my/custom/path/to/component/root/example"
      />
    </div>
  );
};
