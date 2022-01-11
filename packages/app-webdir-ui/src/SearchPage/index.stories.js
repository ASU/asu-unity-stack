import React from "react";

import { SearchPage } from "./index";

export default {
  title: "ASU Search Page",
  component: SearchPage,
};

const Template = () => {
  return (
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <SearchPage />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
