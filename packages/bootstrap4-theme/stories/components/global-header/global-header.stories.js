import { Basic, DropDownMenus, NoNavigation, NoNavigationAndWithButtons, ScrolledState, Partner } from './global-header.components.js';
import React from 'react';
export default { title: 'Components/Global Header'};



const BasicTemplate = ({...args}) => (
  <div>
    { Basic }
  </div>
);

const DropDownMenusTemplate = ({...args}) => (
  <div>
    { DropDownMenus }
  </div>
);

const NoNavigationTemplate = ({...args}) => (
  <div>
    { NoNavigation }
  </div>
);

const NoNavigationAndWithButtonsTemplate = ({...args}) => (
  <div>
    { NoNavigationAndWithButtons }
  </div>
);

const ScrolledStateTemplate = ({...args}) => (
  <div>
    { ScrolledState }
  </div>
);

const PartnerTemplate = ({...args}) => (
  <div>
    { Partner }
  </div>
);

export const BasicExample =  BasicTemplate.bind({});
export const DropDownMenusExample =  DropDownMenusTemplate.bind({});
export const NoNavigationExample =  NoNavigationTemplate.bind({});
export const NoNavigationAndWithButtonsExample =  NoNavigationAndWithButtonsTemplate.bind({});
export const ScrolledStateExample =  ScrolledStateTemplate.bind({});
export const PartnerExample =  PartnerTemplate.bind({});



