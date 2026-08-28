import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './uds-card.js';
import '../button/uds-button.js';

const meta: Meta = {
  title: 'Molecules/Card',
  component: 'uds-card',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    heading: { control: 'text' },
    image: { control: 'text' },
    href: { control: 'text' },
    horizontal: { control: 'boolean' },
  },
  args: {
    heading: 'Card Heading',
    horizontal: false,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: 'Default Card',
  },
  render: (args) => html`
    <div style="max-width: 360px; width: 100%;">
      <uds-card heading=${args.heading}>
        <p>This is the card body content. It can contain any text or HTML.</p>
      </uds-card>
    </div>
  `,
};

export const WithImage: Story = {
  args: {
    heading: 'Campus Life',
    image: 'https://picsum.photos/seed/asu/800/450',
  },
  render: (args) => html`
    <div style="max-width: 360px;">
      <uds-card heading=${args.heading} image=${args.image}>
        <p>Experience the vibrant campus community at Arizona State University.</p>
      </uds-card>
    </div>
  `,
};

export const WithActions: Story = {
  args: {
    heading: 'Apply Now',
    image: 'https://picsum.photos/seed/apply/800/450',
  },
  render: (args) => html`
    <div style="max-width: 360px;">
      <uds-card heading=${args.heading} image=${args.image}>
        <p>Start your journey at ASU. Applications are now open for Fall 2027.</p>
        <uds-button slot="actions" label="Apply" color="gold"></uds-button>
        <uds-button slot="actions" label="Learn More" color="secondary"></uds-button>
      </uds-card>
    </div>
  `,
};

export const Horizontal: Story = {
  args: {
    heading: 'Research Spotlight',
    image: 'https://picsum.photos/seed/research/800/600',
    horizontal: true,
  },
  render: (args) => html`
    <div style="max-width: 700px;">
      <uds-card heading=${args.heading} image=${args.image} ?horizontal=${args.horizontal}>
        <p>ASU researchers are leading breakthroughs in sustainability, AI, and space exploration.</p>
        <uds-button slot="actions" label="Read More" color="primary"></uds-button>
      </uds-card>
    </div>
  `,
};

export const OnDarkSurface: Story = {
  args: {
    heading: 'Innovation at ASU',
    image: 'https://picsum.photos/seed/dark/800/450',
  },
  render: (args) => html`
    <div class="uds-surface-dark" style="background-color: #191919; padding: 2rem;">
      <div style="max-width: 360px;">
        <uds-card heading=${args.heading} image=${args.image}>
          <p>Ranked #1 in innovation by U.S. News & World Report.</p>
          <uds-button slot="actions" label="Explore" color="gold"></uds-button>
        </uds-card>
      </div>
    </div>
  `,
};

export const CardAsLink: Story = {
  args: {
    heading: 'Visit ASU',
    image: 'https://picsum.photos/seed/visit/800/450',
    href: 'https://visit.asu.edu',
  },
  render: (args) => html`
    <div style="max-width: 360px;">
      <uds-card heading=${args.heading} image=${args.image} href=${args.href}>
        <p>Schedule a campus tour and see Sun Devil life firsthand.</p>
      </uds-card>
    </div>
  `,
};
