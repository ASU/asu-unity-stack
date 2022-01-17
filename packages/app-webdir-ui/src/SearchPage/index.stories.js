import React from "react";

import { SearchPage } from "./index";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../bootstrap4-theme/helpers/wrapper.js";

export default createComponent("Search Page", "Organisms", "Template");

export const profileCardExample = createStory(
  <div className="uds-content-align">
    <SearchPage />
  </div>,
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);
