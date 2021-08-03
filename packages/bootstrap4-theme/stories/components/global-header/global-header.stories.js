import { Basic, DropDownMenus, NoNavigation, NoNavigationAndWithButtons, ScrolledState, Partner } from './global-header.components.js';
import React from 'react';
export default { title: 'Components/Global Header'};


const BasicTemplate = ({...args}) => (
  <Basic />
);

const DropDownMenusTemplate = ({...args}) => (
  <DropDownMenus />
);

const NoNavigationTemplate = ({...args}) => (
  <NoNavigation />
);

const NoNavigationAndWithButtonsTemplate = ({...args}) => (
  <NoNavigationAndWithButtons />
);

const ScrolledStateTemplate = ({...args}) => (
  <ScrolledState />
);

const PartnerTemplate = ({...args}) => (
  <Partner />
);

export const BasicExample =  BasicTemplate.bind({});
export const DropDownMenusExample =  DropDownMenusTemplate.bind({});
export const NoNavigationExample =  NoNavigationTemplate.bind({});
export const NoNavigationAndWithButtonsExample =  NoNavigationAndWithButtonsTemplate.bind({});
export const ScrolledStateExample =  ScrolledStateTemplate.bind({});
export const PartnerExample =  PartnerTemplate.bind({});










