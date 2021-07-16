import React from 'react';
import { Basic } from '../stories/components/global-header/global-header.components.js';
import { GlobalElementsOnly } from '../stories/components/global-footer/global-footer.components.js';

export const createComponent = (name, section='Components') => {
  return {
    title: `${section}/${name}`,
    argTypes: {
      header: {
        control: { type: 'boolean' },
        default: false,
      },
      footer: {
        control: { type: 'boolean' },
        default: false,
      }
    }
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

export const createStory = (componentJSX) => {
  const Template = ({...args}) => (
    <div>
      { args.header && <Basic /> }
      <div>{ componentJSX }</div>
      { args.footer && <GlobalElementsOnly /> }
    </div>
  );

  return Template.bind({});
}


