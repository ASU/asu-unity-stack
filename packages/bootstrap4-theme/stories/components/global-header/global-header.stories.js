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
import { initGA } from './global-header';

export const BasicExample = createStory(Basic, initGA);
export const DropDownMenusExample = createStory(DropDownMenus, initGA);
export const NoNavigationExample = createStory(NoNavigation, initGA);
export const NoNavigationAndWithButtonsExample = createStory(
  NoNavigationAndWithButtons,
  initGA
);
export const ScrolledStateExample = createStory(ScrolledState, initGA);
export const PartnerExample = createStory(Partner, initGA);
