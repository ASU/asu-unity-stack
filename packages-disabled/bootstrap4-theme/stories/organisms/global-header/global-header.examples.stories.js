import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Global Header', 'Organisms', 'Examples');

import {
  Basic,
  DropDownMenus,
  NoNavigation,
  NoNavigationAndWithButtons,
  ScrolledState,
  Partner,
} from './global-header.templates.stories.js';
import { initGlobalHeader as initFunc } from './global-header';

export const BasicExample = createStory(Basic, { initFunc });

BasicExample.args = {
  template: 0,
};

export const DropDownMenusExample = createStory(DropDownMenus, { initFunc });
export const NoNavigationExample = createStory(NoNavigation, { initFunc });
export const NoNavigationAndWithButtonsExample = createStory(
  NoNavigationAndWithButtons,
  { initFunc }
);
export const StickyNoNavigationExample = createStory(
  <>
    {NoNavigationAndWithButtons}
    <main>
      <div id="skip-to-content" class="sr-only" data-elastic-exclude="data-elastic-exclude"></div>
      <div class="bg-gray-3" style={{ height: '200vh' }}></div>
    </main>
  </>,
  { initFunc }
);

export const ScrolledStateExample = createStory(ScrolledState, { initFunc });
export const PartnerExample = createStory(Partner, { initFunc });
