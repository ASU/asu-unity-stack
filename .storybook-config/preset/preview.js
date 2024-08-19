
import { withColumns } from '../withColumns';
import { customViewports } from '../viewports';

const globals = {
  columns: false,
};

const parameters = {
  viewport: { viewports: customViewports },
  controls: { expanded: true },
  layout: 'fullscreen'
};

const decorators = [
  withColumns,
];


/** @type { import('@storybook/react').Preview } */
const preview = {
  globals,
  parameters,
  decorators,
};

export default preview;
