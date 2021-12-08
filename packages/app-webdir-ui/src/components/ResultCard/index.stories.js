// @ts-check
import React from "react";

import { ResultCardTemplate } from "./index";

import {
  createComponent,
  createStory,
} from "../../../../bootstrap4-theme/helpers/wrapper";

export default createComponent(
  "App Webdir UI/Result Card",
  "Molecules",
  "Templates"
);

const defaultArgs = {
  id: "person-1",
  name: "Sarah Hough",
  area: "iSearch",
  description:
    "Sarah Hough has nearly 20 years of experience in higher education encompassing marketing, communications and media, branding, strategic planning and something to make this longer so we can test cutting it off..",
  cookieTrail: ["asd", "cvb"],
};

export const Default = createStory(args => {
  return <ResultCardTemplate {...args} />;
});

Default["args"] = {
  ...defaultArgs,
  size: "default",
};
