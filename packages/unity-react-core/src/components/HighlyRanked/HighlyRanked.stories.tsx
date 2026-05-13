import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { HighlyRanked } from "./HighlyRanked";

const meta: Meta<typeof HighlyRanked> = {
  title: "Components/HighlyRanked",
  component: HighlyRanked,
};

export default meta;

type Story = StoryObj<typeof HighlyRanked>;

export const Default: Story = {
  args: {
    title: "ASU is highly ranked",
    description:
      "ASU consistently ranks among the best in the nation, recognized for our commitment to excellence and showcasing our dedication to providing quality education and impactful research.",
    ctaText: "See more ASU rankings",
    ctaUrl: "https://www.asu.edu/rankings",
    rankings: [
      {
        value: "400+",
        title: "'prestigious faculty'",
        description: "National Academies-honored faculty",
      },
      {
        value: "#2",
        title: "in the U.S. for employability",
        description: "among public universities",
      },
      {
        value: "83",
        title: "top-ranked programs",
        description:
          "Ranked in the top 25 in the U.S., including 38 in the top 10",
      },
      {
        value: "$6.1",
        title: "billion",
        description: "FY24 economic impact on the state's gross product",
      },
      {
        value: "Top 10",
        title: "worldwide among universities granted U.S. patents",
        description: "For two years",
      },
      {
        value: "270+",
        title: "athletic championships",
        description: "National and conference titles",
      },
      {
        value: "620,000+",
        title: "alumni",
        description: "Leading, shaping, changing our world",
      },
      {
        value: "Association of American Universities (AAU) member",
        title: "",
        description: "Along with Harvard, Stanford and MIT",
        headingLevel: "h2",
      },
      {
        value: "Top producer of elite scholars",
        title: "",
        description: "For 10 consecutive years",
        headingLevel: "h2",
      },
    ],
  },
};

export const MixedValueSizes: Story = {
  args: {
    ...Default.args,
    rankings: [
      {
        value: "400+",
        title: "'prestigious faculty'",
        description: "National Academies-honored faculty",
        headingLevel: "h1",
      },
      {
        value: "#2",
        title: "in the U.S. for employability",
        description: "among public universities",
        headingLevel: "h3",
      },
      {
        value: "83",
        title: "top-ranked programs",
        description:
          "Ranked in the top 25 in the U.S., including 38 in the top 10",
        headingLevel: "h4",
      },
      {
        value: "$6.1",
        title: "billion",
        description: "FY24 economic impact on the state's gross product",
        headingLevel: "h5",
      },
    ],
  },
};
