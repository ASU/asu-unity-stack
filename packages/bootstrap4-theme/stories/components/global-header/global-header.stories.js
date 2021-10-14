import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Global Header');

import {
  Basic,
  DropDownMenus,
  NoNavigation,
  NoNavigationAndWithButtons,
  ScrolledState,
  Partner,
} from './global-header.components.js';
import { initHeaderGA as initFunc } from './global-header';

export const BasicExample = createStory(Basic, { initFunc });
export const DropDownMenusExample = createStory(DropDownMenus, { initFunc });
export const NoNavigationExample = createStory(NoNavigation, { initFunc });
export const NoNavigationAndWithButtonsExample = createStory(
  NoNavigationAndWithButtons,
  { initFunc }
);
export const ScrolledStateExample = createStory(ScrolledState, { initFunc });
export const PartnerExample = createStory(Partner, { initFunc });
