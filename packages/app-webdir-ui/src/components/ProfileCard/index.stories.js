// @ts-check
import React from "react";

import { ProfileCard } from "./index";

import {
  createComponent,
  createStory,
} from "../../../../bootstrap4-theme/helpers/wrapper";
import ProfilePic from "../assets/test-image.png";

export default createComponent(
  "App Webdir UI/Profile Card",
  "Molecules",
  "Templates"
);

const defaultArgs = {
  imgURL: ProfilePic,
  name: "Christine Wilkinson",
  title: "Regents Professor",
  email: "email@asu.edu",
  telephone: "555-555-5555",
  addressLink: "asu.edu",
  addressLine1: "1234 Address St.",
  addressLine2: "Tempte, AZ 12345",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis",
  facebookLink: "https://facebook.com",
  linkedinLink: "https://linkedin.com",
  twitterLink: "https://twitter.com",
};

const largeArgs = {
  ...defaultArgs,
  ...{
    titles: [
      { name: "Regents Professor", org: "ASU" },
      { name: "Regents Professor", org: "ASU" },
      { name: "Regents Professor", org: "ASU" },
    ],
  },
};

export const Default = createStory(args => {
  return <ProfileCard {...args} />;
});

Default["args"] = {
  ...defaultArgs,
  size: "default",
};

export const Small = createStory(args => {
  return <ProfileCard {...args} />;
});

Small["args"] = {
  ...defaultArgs,
  size: "small",
};

export const Micro = createStory(args => {
  return <ProfileCard {...args} />;
});

Micro["args"] = {
  ...defaultArgs,
  size: "micro",
};

export const Large = createStory(args => {
  return <ProfileCard {...args} />;
});

Large["args"] = {
  ...largeArgs,
  size: "large",
};
