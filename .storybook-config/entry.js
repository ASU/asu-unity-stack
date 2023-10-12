
import { withColumns } from './components/withColumns';
// import { withTemplate } from './components/withTemplate';
// import { withHeaderFooter } from './components/withHeader';
import { customViewports } from './parameters/viewports';
// import { uds } from './parameters/uds';

export const globals = {
  // header: false,
  // footer: false,
  columns: false,
  // template: 1
};

export const parameters = {
  viewport: { viewports: customViewports },
  // uds,
  controls: { expanded: true },
  layout: 'fullscreen'
};

export const decorators = [
  // withTemplate,
  withColumns,
  // withHeaderFooter,
];
