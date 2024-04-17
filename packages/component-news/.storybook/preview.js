const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  percy: {
    include: [
      "Carousel Card News: Default\$",
      "Card Grid News: Default\$",
      "Card List News: Default\$",
    ],
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters
};

export default preview;
