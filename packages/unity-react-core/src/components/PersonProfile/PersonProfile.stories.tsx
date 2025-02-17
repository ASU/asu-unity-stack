import type { Meta, StoryObj } from "@storybook/react";
import { PersonProfile, SocialMediaPlatform } from "./PersonProfile";
// @ts-ignore
import img from "@shared/assets/img/named/anon.png";

const meta: Meta<typeof PersonProfile> = {
  title: "Components/PersonProfile",
  component: PersonProfile,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: "text",
      description: "The full name of the person",
    },
    profession: {
      control: "object",
      description: "Professional title and department information",
    },
    description: {
      control: "text",
      description: "A brief description or bio of the person",
    },
    imageUrl: {
      control: "text",
      description: "URL for the profile image",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PersonProfile>;

const mockSocialMedia = [
  {
    platform: SocialMediaPlatform.Facebook,
    url: "https://example.com",
  },
  {
    platform: SocialMediaPlatform.LinkedIn,
    url: "https://example.com",
  },
  {
    platform: SocialMediaPlatform.Twitter,
    url: "https://example.com",
  },
];

export const Default: Story = {
  args: {
    name: "John Smith",
    profession: {
      title: "Regents Professor",
      department: "Edplus at ASU",
    },
    contactInfo: {
      email: "email@asu.edu",
      phone: "555-555-5555",
      address: {
        street: "1234 Address St.",
        cityStateZip: "Tempe AZ 12345",
      },
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ultrices nisl, at vestibulum tortor.",
    socialMedia: mockSocialMedia,
    imageUrl: img,
  },
};
