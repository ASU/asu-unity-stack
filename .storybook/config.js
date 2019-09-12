import { configure } from '@storybook/react';


function loadStories() {
  const req = require.context('../packages', true, /^(?!.*node_modules).*\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
  // You can require as many stories as you need.
}

configure(loadStories, module);
