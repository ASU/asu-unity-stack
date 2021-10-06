import React from 'react';
import { template } from './templates';

import { Basic as Header } from '../stories/components/global-header/global-header.components.js';
import { GlobalElementsOnly as Footer } from '../stories/components/global-footer/global-footer.components.js';
export const createComponent = (name, section = 'Components') => {
  return {
    title: `${section}/${name}`,
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
    },
  };
};

/**
 *
 * @param {JSX.Element} componentJSX
 * @param {{
 *  bootstrap: () => null,
 *  unsupportedTemplates: object,
 *  initFunc: () => null,
 *  omitTemplate: boolean,
 * }} props
 * @returns  {JSX.Element}
 */

export const layoutNames = {
  FULL_WIDTH: 0,
  ONE_COLUMN: 1,
  TWO_COLUMN: 2,
  THREE_COLUMN: 3,
  FOUR_COLUMN: 4,
};

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
  }
) => {
  const Template = ({ ...args }) => {
    if(supportedTemplates.includes(args.template) || omitTemplate) {
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
        ? componentJSX
        : template(componentJSX, args.template);

      return (
        <div>
          {args.header && Header}
          {componentCode}
          {args.footer && Footer}
        </div>
      );
    } else {
      return (
        <div>Oh no!</div>
      )
    }
  };
  return Template.bind({});
};
