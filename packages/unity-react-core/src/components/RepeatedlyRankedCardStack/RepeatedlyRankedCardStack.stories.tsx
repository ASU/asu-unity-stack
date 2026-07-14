// RepeatedlyRankedCardStack.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RepeatedlyRankedCardStack } from "./RepeatedlyRankedCardStack";
import type { CardData } from "./types";

const sampleCards: CardData[] = [
  {
    value: "#1",
    title: "Innovation",
    body: "Most Innovative University",
    categories: [
      { name: "Innovation", description: "ASU ahead of MIT and Stanford", source: "U.S. News & World Report, 11 years" },
    ],
  },
  {
    value: "#2",
    title: "Sustainability",
    body: "Leader in Sustainability",
    categories: [
      { name: "Sustainability", description: "ASU ahead of Stanford and UC Berkeley" },
    ],
  },
  {
    value: "Repeatedly ranked #1",
    title: "in 30+ lists in the last 3 years",
    body: "ASU continues to be recognized as a global leader.",
    categories: [
      { name: "Innovation", description: "ASU ahead of MIT and Stanford", source: "U.S. News & World Report, 11 years" },
      { name: "Sustainability", description: "ASU ahead of Stanford and UC Berkeley" },
      { name: "Global impact", description: "ASU ahead of MIT and Penn State" },
    ],
  },
  {
    value: "Top 1%",
    title: "Employability",
    body: "Graduates highly sought by employers.",
  },
  {
    value: "Top 10",
    title: "Accessibility",
    body: "Commitment to accessible education.",
  },
];

const meta: Meta<typeof RepeatedlyRankedCardStack> = {
  title: "Components/RepeatedlyRankedCardStack",
  component: RepeatedlyRankedCardStack,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    ctaButtonColor: {
      control: "select",
      options: ["dark", "gold", "maroon", "gray"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RepeatedlyRankedCardStack>;

export const Default: Story = {
  args: {
    title: "ASU is recognized globally as a leading knowledge enterprise.",
    ctaText: "ASU rankings",
    ctaUrl: "/rankings",
    cards: sampleCards,
  },
};

export const MinimumCards: Story = {
  args: {
    title: "Three Card Example",
    cards: sampleCards.slice(0, 3),
  },
};

export const MaximumCards: Story = {
  args: {
    title: "Seven Card Example",
    cards: [
      ...sampleCards,
      { value: "#6", title: "Research" },
      { value: "#7", title: "International" },
    ],
  },
};

export const WithDescription: Story = {
  args: {
    title: "ASU Rankings",
    description: "Arizona State University has been recognized for excellence across multiple categories.",
    ctaText: "Learn more",
    ctaUrl: "/about",
    cards: sampleCards,
  },
};

export const NoCTA: Story = {
  args: {
    title: "Rankings Without CTA",
    cards: sampleCards,
  },
};

export const EmptyState: Story = {
  args: {
    cards: [],
  },
};
