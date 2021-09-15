import React from "react";
import { template } from './templates';

import { Basic } from '../stories/components/global-header/global-header.components.js';
import { GlobalElementsOnly } from '../stories/components/global-footer/global-footer.components.js';
export const createComponent = (name, section='Components') => {
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
            4: '4 Column (Fixed Width)'
          },
        }
      },
    },
  }
}

export const UnityStory = (props) => {
  return (
    <div>
      { props.header && <div>header</div> }
      <div>{ props.children }</div>
      { props.footer && <div>footer</div> }
    </div>
  )
}

export const createStory = (componentJSX, initFunc=null, omitTemplate=false) => {

  const Template = ({...args}) => {
    if(initFunc) {
      // Necessitated by Storybook intricacies.
      if( document.readyState !== 'loading' ) {
        setTimeout(function(){ initFunc(); }, 150);
      } else {
        window.addEventListener('DOMContentLoaded', function () {
          initFunc();
        });
      }
    }

    const componentCode = omitTemplate ? componentJSX : template(componentJSX, args.template);

    return (
      <div>
        { args.header && Basic }
        { componentCode }
        { args.footer && GlobalElementsOnly  }
      </div>
    )
  };
  return Template.bind({});
}
