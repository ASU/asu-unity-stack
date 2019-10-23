import { configure } from '@storybook/react';


function loadStories() {

  // exclude node_modules directories
  const req = require.context('../', true, /^(?!.*(node_modules)).*\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
  // You can require as many stories as you need.
}

configure(loadStories, module);
