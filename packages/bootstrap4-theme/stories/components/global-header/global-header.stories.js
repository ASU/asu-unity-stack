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
import { initHeaderGA } from './global-header';

export const BasicExample = createStory(Basic, initHeaderGA);
export const DropDownMenusExample = createStory(DropDownMenus, initHeaderGA);
export const NoNavigationExample = createStory(NoNavigation, initHeaderGA);
export const NoNavigationAndWithButtonsExample = createStory(
  NoNavigationAndWithButtons,
  initHeaderGA
);
export const ScrolledStateExample = createStory(ScrolledState, initHeaderGA);
export const PartnerExample = createStory(Partner, initHeaderGA);
