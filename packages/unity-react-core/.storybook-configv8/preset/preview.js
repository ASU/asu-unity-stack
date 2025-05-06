
import { withColumns } from '../withColumns';
import { customViewports } from '../viewports';

export const initialGlobals = {
  columns: false,
};

export const parameters = {
  viewport: { viewports: customViewports },
  controls: { expanded: true },
  layout: 'fullscreen'
};

export const decorators = [
  withColumns,
];


/** @type { import('@storybook/react').Preview } */
const preview = {
  initialGlobals,
  parameters,
  decorators,
};

export default preview;
