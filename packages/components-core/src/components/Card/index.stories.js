/* eslint react/jsx-props-no-spreading: "off" */
import classNames from "classnames";
import React from "react";

import { Card } from ".";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export default {
  title: "UDS/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `The Card component can be used to generate UDS-compliant default, degree, story, news and event cards.

## Usage

Most props are valid options for all card types, except for the event-specific props.
Card users are responsible to meet all UDS design guidelines with their Cards,
including rules on the use of Call-to-Action buttons and tags.

View component examples and source code below.
        `,
      },
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
      <div
        className={classNames(
          UdsStyles["col"],
          UdsStyles["col-12"],
          UdsStyles["col-md-6"],
          UdsStyles["col-lg-4"]
        )}
      >
        <Card {...args} />
      </div>
    </div>
  </div>
);

const HorizontalTemplate = args => (
  <div className={UdsStyles["container"]}>
    <div
      className={classNames(
        UdsStyles["row"],
        UdsStyles["row-spaced"],
        UdsStyles["pt-2"],
        UdsStyles["pb-2"]
      )}
    >
      <div
        className={classNames(
          UdsStyles["col"],
          UdsStyles["col-12"],
          UdsStyles["col-md-12"],
          UdsStyles["col-lg-6"]
        )}
      >
        <Card {...args} />
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "default",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Default title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    {
      color: "maroon",
      size: "default",
      label: "CTA button",
    },
    {
      color: "gold",
      size: "small",
      label: "CTA button",
    },
  ],
  tags: [
    { color: "gray", label: "tag1", href: "/#example-link" },
    { color: "gray", label: "tag2", href: "/#example-link" },
    { color: "gray", label: "tag3", href: "/#example-link" },
  ],
};

export const Icon = Template.bind({});
Icon.args = {
  type: "default",
  horizontal: false,
  clickable: false,
  title: "Default title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    {
      color: "maroon",
      size: "default",
      label: "Button text",
    },
  ],
  icon: "newspaper",
};

export const Degree = Template.bind({});
Degree.args = {
  type: "degree",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Default title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
};
Degree.parameters = {
  docs: {
    description: {
      story: `

    <Card
        body="Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        image="https://picsum.photos/300/200"
        imageAltText="An example image"
        title="Default title"
        type="degree"
      />`,
    },
  },
};

export const Event = Template.bind({});
Event.args = {
  type: "event",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Event title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  eventFormat: "stack",
  eventTime: "Wed, November 21st, 2021<br />11:30 a.m - 12:30 p.m.",
  eventLocation: "Downtown Phoenix campus",
  buttons: [
    {
      color: "maroon",
      size: "default",
      label: "CTA button",
    },
  ],
};
Event.parameters = {
  docs: {
    description: {
      story: `
The event props, \`eventLocation\` and \`eventTime\` are allowed to contain basic HTML formatting, primarily \`<br>\` for line breaks.


    <Card
        body="Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'CTA button',
            size: 'default'
          }
        ]}
        eventFormat="stack"
        eventLocation="Downtown Phoenix campus"
        eventTime="Wed, November 21st, 2021<br>11:30 a.m - 12:30 p.m."
        image="https://picsum.photos/300/200"
        imageAltText="An example image"
        title="Event title"
        type="event"
      />`,
    },
  },
};

export const Story = Template.bind({});
Story.args = {
  type: "story",
  horizontal: false,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Story title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    {
      color: "maroon",
      size: "default",
      label: "CTA button",
    },
  ],
  linkLabel: "Default link",
  linkUrl: "http://google.com",
  tags: [
    { color: "gray", label: "tag1", href: "/#example-link" },
    { color: "gray", label: "tag2", href: "/#example-link" },
    { color: "gray", label: "tag3", href: "/#example-link" },
  ],
};
Story.parameters = {
  docs: {
    description: {
      story: `

    <Card
        body="Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'CTA button',
            size: 'default'
          }
        ]}
        image="https://picsum.photos/300/200"
        imageAltText="An example image"
        linkLabel="Default link"
        linkUrl="http://google.com"
        tags={[
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag1'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag2'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag3'
          }
        ]}
        title="Story title"
        type="story"
      />`,
    },
  },
};

export const ClickableStoryCard = Template.bind({});
ClickableStoryCard.args = {
  type: "story",
  horizontal: false,
  clickable: true,
  clickHref: "/#example-link",
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Story title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  tags: [
    { color: "gray", label: "tag1", href: "/#example-link" },
    { color: "gray", label: "tag2", href: "/#example-link" },
    { color: "gray", label: "tag3", href: "/#example-link" },
  ],
};
ClickableStoryCard.parameters = {
  docs: {
    description: {
      story: `

    <Card
        body="Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        clickHref="/#example-link"
        clickable
        image="https://picsum.photos/300/200"
        imageAltText="An example image"
        tags={[
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag1'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag2'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag3'
          }
        ]}
        title="Story title"
        type="story"
      />`,
    },
  },
};

export const HorizontalStoryCard = HorizontalTemplate.bind({});
HorizontalStoryCard.args = {
  type: "story",
  horizontal: true,
  clickable: false,
  image: "https://picsum.photos/300/200",
  imageAltText: "An example image",
  title: "Horizontal story",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  tags: [
    { color: "gray", label: "tag1", href: "/#example-link" },
    { color: "gray", label: "tag2", href: "/#example-link" },
    { color: "gray", label: "tag3", href: "/#example-link" },
  ],
};
HorizontalStoryCard.parameters = {
  docs: {
    description: {
      story: `

    <Card
        body="Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        horizontal
        image="https://picsum.photos/300/200"
        imageAltText="An example image"
        tags={[
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag1'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag2'
          },
          {
            color: 'gray',
            href: '/#example-link',
            label: 'tag3'
          }
        ]}
        title="Horizontal story"
        type="story"
      />`,
    },
  },
};

export const AsuNewsStory = Template.bind({});
AsuNewsStory.args = {
  type: "story",
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
    },
  ],
};
AsuNewsStory.parameters = {
  docs: {
    description: {
      story: `

    <Card
        body="Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'Read at ASU News',
            size: 'default'
          }
        ]}
        image="https://picsum.photos/300/200"
        imageAltText="An example image"
        title="ASU News Story title"
        type="story"
      />`,
    },
  },
};
