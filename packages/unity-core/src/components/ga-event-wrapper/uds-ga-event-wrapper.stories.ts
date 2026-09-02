import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './uds-ga-event-wrapper.js';
import '../button/uds-button.js';

const meta: Meta = {
  title: 'Utilities/GaEventWrapper',
  component: 'uds-ga-event-wrapper',
  tags: [],
  argTypes: {
    prefix: {
      control: { type: 'select' },
      options: ['', 'input', 'header', 'header-input'],
    },
  },
  args: {
    prefix: '',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Behavioral wrapper that reflects `gaData` onto its single slotted ' +
          'child as `data-ga*` attributes and pushes an event to ' +
          '`window.dataLayer` on click. The web-component equivalent of the ' +
          'React `GaEventWrapper`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const gaData = {
  text: 'Apply now',
  event: 'link',
  action: 'apply cta',
  name: 'onclick',
  type: 'click',
  region: 'main content',
  section: 'hero',
  component: 'cta',
};

export const WrappingALink: Story = {
  render: () => html`
    <uds-ga-event-wrapper
      .gaData=${gaData}
      @slotchange=${(e: Event) => e}
    >
      <a href="/apply">Apply now</a>
    </uds-ga-event-wrapper>
  `,
};

export const WrappingAButton: Story = {
  render: () => html`
    <uds-ga-event-wrapper .gaData=${{ ...gaData, text: 'Request info', action: 'rfi open' }}>
      <button type="button">Request info</button>
    </uds-ga-event-wrapper>
  `,
};

export const WithPrefix: Story = {
  args: { prefix: 'header' },
  render: (args) => html`
    <uds-ga-event-wrapper
      prefix=${args.prefix}
      .gaData=${{ text: 'Menu', event: 'nav', action: 'open menu' }}
    >
      <button type="button">Menu (inspect for data-ga-header-*)</button>
    </uds-ga-event-wrapper>
  `,
};

export const WrappingUdsButton: Story = {
  render: () => html`
    <uds-ga-event-wrapper .gaData=${gaData}>
      <uds-button label="Apply now" color="gold"></uds-button>
    </uds-ga-event-wrapper>
  `,
};
