import classNames from "classnames";
import React from "react";

import UdsStyles from "Vendor/css/bootstrap-asu.min.module.css";

import { Card } from ".";

export default {
  title: "UDS/Card",
  component: Card,
  argTypes: {
    type: {
      type: "select",
      options: ["default", "degree", "event", "news", "story"],
    },
    width: {
      type: "select",
      options: ["25%", "50%", "75%", "100%"],
    },
    eventFormat: {
      type: "select",
      options: ["stack", "inline"],
    },
  },
};

const Template = args => (
  <div className={UdsStyles["container"]}>
    <div
      className={classNames(
        UdsStyles["row"],
        UdsStyles["row-spaced"],
        UdsStyles["pt-2"],
        UdsStyles["pb-2"]
      )}
    >
      <Card {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "default",
  width: "25%",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Default title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    { color: "maroon", size: "default", label: "CTA button", clickTarget: "#" },
    { color: "gold", size: "small", label: "CTA button", clickTarget: "#" },
  ],
  tags: [
    { color: "gray", label: "tag1", clickTarget: "#" },
    { color: "gray", label: "tag2", clickTarget: "#" },
    { color: "gray", label: "tag3", clickTarget: "#" },
  ],
};

export const Degree = Template.bind({});
Degree.args = {
  type: "degree",
  width: "25%",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Default title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
};

export const Event = Template.bind({});
Event.args = {
  type: "event",
  width: "25%",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Event title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  eventFormat: "inline",
  eventTime: "Wednesday, November 21st, 2021<br />11:30 a.m - 12:30 p.m.",
  eventLocation: "Downtown Phoenix campus",
  buttons: [
    { color: "maroon", size: "default", label: "CTA button", clickTarget: "#" },
  ],
};

export const Story = Template.bind({});
Story.args = {
  type: "story",
  width: "25%",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Story title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    { color: "maroon", size: "default", label: "CTA button", clickTarget: "#" },
  ],
  tags: [
    { color: "gray", label: "tag1", clickTarget: "#" },
    { color: "gray", label: "tag2", clickTarget: "#" },
    { color: "gray", label: "tag3", clickTarget: "#" },
  ],
};

export const ClickableStoryCard = Template.bind({});
ClickableStoryCard.args = {
  type: "story",
  width: "25%",
  horizontal: false,
  clickable: true,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Story title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  tags: [
    { color: "gray", label: "tag1", clickTarget: "#" },
    { color: "gray", label: "tag2", clickTarget: "#" },
    { color: "gray", label: "tag3", clickTarget: "#" },
  ],
};

export const HorizontalStoryCard = Template.bind({});
HorizontalStoryCard.args = {
  type: "story",
  width: "75%",
  horizontal: true,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Horizontal story",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  tags: [
    { color: "gray", label: "tag1", clickTarget: "#" },
    { color: "gray", label: "tag2", clickTarget: "#" },
    { color: "gray", label: "tag3", clickTarget: "#" },
  ],
};

export const AsuNewsStory = Template.bind({});
AsuNewsStory.args = {
  type: "story",
  width: "25%",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "ASU News Story title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    {
      color: "maroon",
      size: "default",
      label: "Read at ASU News",
      clickTarget: "#",
    },
  ],
};

export const GlobalFuturesStory = Template.bind({});
GlobalFuturesStory.args = {
  type: "story",
  width: "25%",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "GFL News Story title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    { color: "maroon", size: "default", label: "Read more", clickTarget: "#" },
  ],
};
