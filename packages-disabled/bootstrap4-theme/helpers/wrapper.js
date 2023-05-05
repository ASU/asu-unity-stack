import React from 'react';
import { template } from './templates';

import { Basic as Header } from '../stories/organisms/global-header/global-header.templates.stories.js';
import { GlobalElementsOnly as Footer } from '../stories/organisms/global-footer/global-footer.templates.stories.js';
export const createComponent = (
  name,
  section = 'Atoms',
  type = '',
  extraOptions = {}
) => {
  return {
    title: `${section}/${name}${type === '' ? '' : '/' + type}`,
    argTypes: {
      header: {
        name: 'Show Header',
        control: { type: 'boolean' },
        defaultValue: false,
      },
      footer: {
        name: 'Show Footer',
        control: { type: 'boolean' },
        defaultValue: false,
      },
      template: {
        name: 'Template',
        options: [0, 1, 2, 3, 4],
        defaultValue: 1,
        control: {
          type: 'radio',
          labels: {
            0: 'Full Width',
            1: '1 Column (Fixed Width)',
            2: '2 Column (Fixed Width)',
            3: '3 Column (Fixed Width)',
            4: '4 Column (Fixed Width)',
          },
        },
      },
      ...extraOptions,
    },
  };
};

export const layoutNames = {
  FULL_WIDTH: 0,
  ONE_COLUMN: 1,
  TWO_COLUMN: 2,
  THREE_COLUMN: 3,
  FOUR_COLUMN: 4,
};

/**
 *
 * @param {JSX.Element} componentJSX
 * @param ? {{
 *  unsupportedTemplates: [],
 *  initFunc: () => null,
 *  omitTemplate: boolean,
 * }} props
 * @returns  {JSX.Element}
 */

export const createStory = (
  componentJSX,
  {
    supportedTemplates = [
      layoutNames.FULL_WIDTH,
      layoutNames.ONE_COLUMN,
      layoutNames.TWO_COLUMN,
      layoutNames.THREE_COLUMN,
      layoutNames.FOUR_COLUMN,
    ],
    initFunc = null,
    omitTemplate = false,
  } = {}
) => {
  const Template = ({ ...args }) => {
    if (supportedTemplates.includes(args.template) || omitTemplate) {
      if (initFunc) {
        // Necessitated by Storybook intricacies.
        if (document.readyState !== 'loading') {
          setTimeout(function () {
            initFunc();
          }, 150);
        } else {
          window.addEventListener('DOMContentLoaded', function () {
            initFunc();
          });
        }
      }

      const codeWithArgs =
        typeof componentJSX === 'function' ? componentJSX(args) : componentJSX;

      const componentCode = omitTemplate
        ? codeWithArgs
        : template(codeWithArgs, args.template);

      return (
        <div>
          {args.header && Header}
          {componentCode}
          {args.footer && Footer}
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <h2>This layout isn't supported for this element.</h2>
          <span>Use the storybook controls to choose a supported layout:</span>
          <ul>
            {supportedTemplates.includes(layoutNames.FULL_WIDTH) && (
              <li>Full-width</li>
            )}
            {supportedTemplates.includes(layoutNames.ONE_COLUMN) && (
              <li>One Column</li>
            )}
            {supportedTemplates.includes(layoutNames.TWO_COLUMN) && (
              <li>Two Column</li>
            )}
            {supportedTemplates.includes(layoutNames.THREE_COLUMN) && (
              <li>Three Column</li>
            )}
            {supportedTemplates.includes(layoutNames.FOUR_COLUMN) && (
              <li>Four Column</li>
            )}
          </ul>
        </div>
      );
    }
  };
  return Template.bind({});
};

/**
 *
 * @param {JSX.Element} componentJSX
 * @param ? {{
 *  unsupportedTemplates: [],
 *  initFunc: () => null,
 *  omitTemplate: boolean,
 * }} props
 * @returns  {JSX.Element}
 */

export const createStoryTwo = (
  componentJSX,
  {
    supportedTemplates = [
      layoutNames.FULL_WIDTH,
      layoutNames.ONE_COLUMN,
      layoutNames.TWO_COLUMN,
      layoutNames.THREE_COLUMN,
      layoutNames.FOUR_COLUMN,
    ],
    initFunc = null,
    omitTemplate = false,
  } = {}
) => {
  const Template = ({ ...args }) => {
    if (supportedTemplates.includes(args.template) || omitTemplate) {
      if (initFunc) {
        // Necessitated by Storybook intricacies.
        if (document.readyState !== 'loading') {
          setTimeout(function () {
            initFunc();
          }, 150);
        } else {
          window.addEventListener('DOMContentLoaded', function () {
            initFunc();
          });
        }
      }

      const componentCode = omitTemplate
        ? componentJSX(args)
        : template(componentJSX(args), args.template);

      return (
        <div>
          {args.header && Header}
          {componentCode}
          {args.footer && Footer}
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <h2>This layout isn't supported for this element.</h2>
          <span>Use the storybook controls to choose a supported layout:</span>
          <ul>
            {supportedTemplates.includes(layoutNames.FULL_WIDTH) && (
              <li>Full-width</li>
            )}
            {supportedTemplates.includes(layoutNames.ONE_COLUMN) && (
              <li>One Column</li>
            )}
            {supportedTemplates.includes(layoutNames.TWO_COLUMN) && (
              <li>Two Column</li>
            )}
            {supportedTemplates.includes(layoutNames.THREE_COLUMN) && (
              <li>Three Column</li>
            )}
            {supportedTemplates.includes(layoutNames.FOUR_COLUMN) && (
              <li>Four Column</li>
            )}
          </ul>
        </div>
      );
    }
  };
  return Template.bind({});
};
