import React from "react";

import { WebDirectory } from "./index";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../bootstrap4-theme/helpers/wrapper";

export default createComponent("Web Directory", "Organisms", "Templates");

export const webDirectoryExample = createStory(
  <div className="uds-content-align">
    <WebDirectory />
  </div>,
  { supportedTemplates: [layoutNames.FULL_WIDTH] }
);
webDirectoryExample.args = {
  template: 0,
};
