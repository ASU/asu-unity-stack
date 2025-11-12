import React from "react";

import { SearchPage } from "./index";

import { FullLayout } from "@asu/shared";

export default {
  title: "Organisms/Search Page/Templates",
  decorators: [story => <FullLayout>{story()}</FullLayout>],
};

export const searchPageExample = () => (
  <div className="uds-content-align">
    <SearchPage
      API_URL="https://asuapp2dev.prod.acquia-sites.com"
      searchApiVersion="/api/v1/"
      loggedIn={false}
      // appPathFolder="/my/custom/path/to/component/root/example"
    />
  </div>
);
