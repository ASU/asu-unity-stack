import React from "react";

import { SearchPage } from "./index";

import { FullLayout } from "@asu/shared";

const API_URL = import.meta.env.VITE_API_URL;
const searchApiVersion = import.meta.env.VITE_SEARCH_API_VERSION;

export default {
  title: "Organisms/Search Page/Templates",
  decorators: [story => <FullLayout>{story()}</FullLayout>],
};

export const searchPageExample = () => (
  <div className="uds-content-align">
    <SearchPage
      API_URL={API_URL}
      searchApiVersion={searchApiVersion}
      loggedIn={false}
      // appPathFolder="/my/custom/path/to/component/root/example"
    />
  </div>
);
