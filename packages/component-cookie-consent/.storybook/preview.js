const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  percy: {
    exclude: [
      '\.*'
    ],
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters
};

export default preview;
