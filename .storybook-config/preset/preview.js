
import { withColumns } from '../withColumns';
import { customViewports } from '../viewports';

export const globals = {
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
