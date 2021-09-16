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

export const BasicExample = createStory(Basic);
export const DropDownMenusExample = createStory(DropDownMenus);
export const NoNavigationExample = createStory(NoNavigation);
export const NoNavigationAndWithButtonsExample = createStory(NoNavigationAndWithButtons);
export const ScrolledStateExample = createStory(ScrolledState);
export const PartnerExample = createStory(Partner);
