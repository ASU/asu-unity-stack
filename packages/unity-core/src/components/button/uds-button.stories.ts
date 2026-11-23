import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './uds-button.js';

const meta: Meta = {
  title: 'Atoms/Button',
  component: 'uds-button',
  tags: [],
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    color: {
      control: { type: 'select' },
      options: ['default', 'cta', 'neutral', 'contrast'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'small'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Click me',
    color: 'default',
    size: 'default',
    disabled: false,
  },
  render: (args) => html`
    <uds-button
      label=${args.label}
      color=${args.color}
      size=${args.size}
      ?disabled=${args.disabled}
      href=${args.href || ''}
    ></uds-button>
  `,
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    color: 'default',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    color: 'cta',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
  },
};

export const WithHref: Story = {
  args: {
    label: 'Link Button',
    href: 'https://www.asu.edu',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const OnDarkSurface: Story = {
  args: {
    label: 'On Dark Surface',
    color: 'default',
  },
  render: (args) => html`
    <div
      class="uds-surface-dark"
      style="background-color: #191919; padding: 2rem;"
    >
      <uds-button
        label=${args.label}
        color=${args.color}
        size=${args.size}
        ?disabled=${args.disabled}
      ></uds-button>
    </div>
  `,
};
