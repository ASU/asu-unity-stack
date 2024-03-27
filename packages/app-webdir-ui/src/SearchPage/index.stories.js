import React from "react";

import { SearchPage } from "./index";

import { FullLayout } from "../../../../shared/components/Layout";

export default {
  title: "Organisms/Search Page/Templates",
  decorators: [story => <FullLayout>{story()}</FullLayout>],
};

export const searchPageExample = () => (
  <div className="uds-content-align">
    <SearchPage
      API_URL="https://test-asu-isearch.ws.asu.edu"
      searchApiVersion="/api/v1/"
      loggedIn={false}
      // appPathFolder="/my/custom/path/to/component/root/example"
    />
  </div>
);
