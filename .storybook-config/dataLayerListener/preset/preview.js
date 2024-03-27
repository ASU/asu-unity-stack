import { withDataLayerListener } from "../withDataLayerListener";
const decorators = [withDataLayerListener];


/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators,
};

export default preview;
