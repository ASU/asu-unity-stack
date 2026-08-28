import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './uds-accordion.js';
import './uds-accordion-item.js';

const meta: Meta = {
  title: 'Atoms/Accordion',
  component: 'uds-accordion',
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allow multiple items to be open simultaneously',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: { multiple: false },
  render: ({ multiple }) => html`
    <uds-accordion ?multiple=${multiple}>
      <uds-accordion-item title="What is the Unity Design System?" open>
        <p>
          The Unity Design System is ASU's enterprise design system providing
          reusable components, design tokens, and patterns for building
          accessible, on-brand digital experiences.
        </p>
      </uds-accordion-item>
      <uds-accordion-item title="How do I get started?">
        <p>
          Install the <code>@asu/unity-core</code> package from npm, import the
          components you need, and follow the documentation for usage patterns.
        </p>
      </uds-accordion-item>
      <uds-accordion-item title="Is it accessible?">
        <p>
          Yes. All components meet WCAG 2.1 AA requirements including keyboard
          navigation, screen reader support, and sufficient color contrast.
        </p>
      </uds-accordion-item>
    </uds-accordion>
  `,
};

export const MultipleOpen: Story = {
  args: { multiple: true },
  render: ({ multiple }) => html`
    <uds-accordion ?multiple=${multiple}>
      <uds-accordion-item title="First Section" open>
        <p>This section starts open and stays open when others are toggled.</p>
      </uds-accordion-item>
      <uds-accordion-item title="Second Section" open>
        <p>This section also starts open — multiple mode allows it.</p>
      </uds-accordion-item>
      <uds-accordion-item title="Third Section">
        <p>Click to open this one without closing the others.</p>
      </uds-accordion-item>
    </uds-accordion>
  `,
};

export const OnDarkSurface: Story = {
  args: { multiple: false },
  render: ({ multiple }) => html`
    <div
      style="background: #191919; padding: 2rem; --uds-color-background-accordion-header: #484848; --uds-color-background-accordion-header-hover: #5a5a5a; --uds-color-background-accordion-panel: #2a2a2a; --uds-color-font-dark-base: #ffffff; --uds-color-border: #484848;"
    >
      <uds-accordion ?multiple=${multiple}>
        <uds-accordion-item title="Dark Surface Item 1" open>
          <p>Content displayed on a dark background using inverted tokens.</p>
        </uds-accordion-item>
        <uds-accordion-item title="Dark Surface Item 2">
          <p>Styling adapts through CSS custom properties for surface variants.</p>
        </uds-accordion-item>
        <uds-accordion-item title="Dark Surface Item 3">
          <p>Focus indicators remain visible on dark backgrounds.</p>
        </uds-accordion-item>
      </uds-accordion>
    </div>
  `,
};

export const WithRichContent: Story = {
  args: { multiple: true },
  render: ({ multiple }) => html`
    <uds-accordion ?multiple=${multiple}>
      <uds-accordion-item title="Formatted Content" open>
        <h3 style="margin-top: 0;">Subheading inside the panel</h3>
        <p>Panels can contain <strong>rich HTML</strong> including:</p>
        <ul>
          <li>Lists and nested structures</li>
          <li>Links to <a href="https://asu.edu">ASU resources</a></li>
          <li>Inline code like <code>&lt;uds-accordion&gt;</code></li>
        </ul>
      </uds-accordion-item>
      <uds-accordion-item title="Media Content">
        <figure style="margin: 0;">
          <img
            src="https://picsum.photos/400/200"
            alt="Placeholder image"
            style="width: 100%; height: auto; display: block;"
          />
          <figcaption style="font-size: 0.875rem; color: #747474; margin-top: 0.5rem;">
            Images and media embed naturally in accordion panels.
          </figcaption>
        </figure>
      </uds-accordion-item>
      <uds-accordion-item title="Table Data">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align: left; padding: 0.5rem; border-bottom: 2px solid #e8e8e8;">Term</th>
              <th style="text-align: left; padding: 0.5rem; border-bottom: 2px solid #e8e8e8;">Credits</th>
              <th style="text-align: left; padding: 0.5rem; border-bottom: 2px solid #e8e8e8;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 0.5rem; border-bottom: 1px solid #e8e8e8;">Fall 2025</td>
              <td style="padding: 0.5rem; border-bottom: 1px solid #e8e8e8;">15</td>
              <td style="padding: 0.5rem; border-bottom: 1px solid #e8e8e8;">Complete</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem; border-bottom: 1px solid #e8e8e8;">Spring 2026</td>
              <td style="padding: 0.5rem; border-bottom: 1px solid #e8e8e8;">16</td>
              <td style="padding: 0.5rem; border-bottom: 1px solid #e8e8e8;">In Progress</td>
            </tr>
          </tbody>
        </table>
      </uds-accordion-item>
    </uds-accordion>
  `,
};
