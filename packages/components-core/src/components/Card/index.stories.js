/* eslint react/jsx-props-no-spreading: "off" */
import classNames from "classnames";
import React from "react";

import { Card } from ".";

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
  <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <Card {...args} />
      </div>
    </div>
  </div>
);

const HorizontalTemplate = args => (
  <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-6")}>
        <Card {...args} />
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "default",
  horizontal: false,
  image: "https://source.unsplash.com/WLUHO9A_xik/300x200",
  imageAltText: "An example image",
  title: "Default title",
  body: "<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    {
      color: "maroon",
      size: "default",
      label: "CTA button",
    },
    {
      color: "gold",
      size: "small",
      label: "Link Button",
      href: "/",
      target: "_top",
    },
  ],
  tags: [
    { color: "gray", label: "tag1", href: "/#example-link" },
    { color: "gray", label: "tag2", href: "/#example-link" },
    { color: "gray", label: "tag3", href: "/#example-link" },
  ],
  showBorders: true,
};

export const DefaultBorderless = Template.bind({});
DefaultBorderless.args = {
  ...Default.args,
  title: "Default card - borderless",
  showBorders: false,
};
DefaultBorderless.storyName = "Default (borderless)";

export const Icon = Template.bind({});
Icon.args = {
  type: "default",
  horizontal: false,
  title: "Default title",
  body: "<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    {
      color: "maroon",
      size: "default",
      label: "Button text",
    },
  ],
  icon: ["fas", "newspaper"],
};

export const Degree = Template.bind({});
Degree.args = {
  type: "degree",
  horizontal: false,
  image: "https://source.unsplash.com/WLUHO9A_xik/300x200",
  imageAltText: "An example image",
  title: "Default title",
  body: "<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
};
Degree.parameters = {
  docs: {
    description: {
      story: `

    <Card
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        image="https://source.unsplash.com/WLUHO9A_xik/300x200"
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
  image: "https://source.unsplash.com/WLUHO9A_xik/300x200",
  imageAltText: "An example image",
  title:
    "Event title Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem ad voluptatem dolore dolores nulla ipsam quo distinctio expedita doloribus nisi similique obcaecati velit illo autem numquam iusto, rem nesciunt repellendus laborum. Rerum quisquam, soluta aspernatur a harum dolor ducimus nulla. Itaque aliquam cum fugiat error esse ipsam rerum consectetur!",
  cardLink: "#example-link",
  body: "<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
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
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
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
        image="https://source.unsplash.com/WLUHO9A_xik/300x200"
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
  image: "https://source.unsplash.com/WLUHO9A_xik/300x200",
  imageAltText: "An example image",
  title: "Story title",
  body: "<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  buttons: [
    {
      color: "maroon",
      size: "default",
      label: "CTA button",
      href: "https://google.com",
      target: "_blank",
    },
  ],
  linkLabel: "Default link",
  linkUrl: "https://google.com",
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
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'CTA button',
            size: 'default'
          }
        ]}
        image="https://source.unsplash.com/WLUHO9A_xik/300x200"
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

export const HorizontalStoryCard = HorizontalTemplate.bind({});
HorizontalStoryCard.args = {
  type: "story",
  horizontal: true,
  image: "https://source.unsplash.com/WLUHO9A_xik/300x200",
  imageAltText: "An example image",
  title: "Horizontal story",
  body: "<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
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
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        horizontal
        image="https://source.unsplash.com/WLUHO9A_xik/300x200"
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
  image: "https://source.unsplash.com/WLUHO9A_xik/300x200",
  imageAltText: "An example image",
  title: "ASU News Story title",
  body: "<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
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
        body="<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
        buttons={[
          {
            color: 'maroon',
            label: 'Read at ASU News',
            size: 'default'
          }
        ]}
        image="https://source.unsplash.com/WLUHO9A_xik/300x200"
        imageAltText="An example image"
        title="ASU News Story title"
        type="story"
      />`,
    },
  },
};
