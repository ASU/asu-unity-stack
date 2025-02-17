import React from "react";

import {
  NotificationBanner,
  NotificationBannerProps,
} from "./NotificationBanner";

export default {
  title: "Components/Notification Banner",
  component: NotificationBanner,
  args: { color: "orange" },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Example only. Not currently included in unity-react-core package. A notification banner to alert users of important information.",
      },
    },
  },
};

const defaultProps: NotificationBannerProps = {
  title: "Stay up-to-date on what's new at ASU",
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud{" "}
      <a href="https://asunow.asu.edu/">read the latest updates here</a>
    </>
  ),
  buttons: [
    {
      href: "https://provost.asu.edu/sync/students",
      label: "Info. on teaching and learning remotely",
    },
    {
      href: "https://students.asu.edu/faq",
      label: " FAQ Page",
    },
  ],
};

const notificationBannerTemplate = args => <NotificationBanner {...args} />;

export const Overview = {
  render: notificationBannerTemplate.bind({}),
  args: {
    ...defaultProps,
  },
};
