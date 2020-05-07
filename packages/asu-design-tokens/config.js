const StyleDictionary = require("style-dictionary");

const buildPath = "build/";

// Define a custom trasnform REM to PX
StyleDictionary.registerTransform({
  name: "remToPxTransform",
  type: "value",
  matcher: prop => prop.attributes.category === "size",
  transformer: prop => `${parseInt(prop.value) * 16}px`,
});

const propertiesToCTI = {
  "width": { category: "size", type: "dimension" },
  "min-width": { category: "size", type: "dimension" },
  "max-width": { category: "size", type: "dimension" },
  "height": { category: "size", type: "dimension" },
  "min-height": { category: "size", type: "dimension" },
  "max-height": { category: "size", type: "dimension" },
  "border-width": { category: "size", type: "border", item: "width" },
  "border-radius": { category: "size", type: "border", item: "width" },
  "border-color": { category: "color", type: "border" },
  "background-color": { category: "color", type: "background" },
  "color": { category: "color", type: "font" },
  "text-color": { category: "color", type: "font" },
  "padding": { category: "size", type: "padding" },
  "padding-vertical": { category: "size", type: "padding" },
  "padding-horziontal": { category: "size", type: "padding" },
  "icon": { category: "content", type: "icon" },
  "font-size": { category: "size", type: "font" },
  "line-height": { category: "size", type: "line-height" },
  "size": { category: "size", type: "icon" },
};

const CTITransform = {
  transformer: prop => {
    // Only perform this custom transform in the 'component' top-level namespace.
    if (prop.path[0] === "component") {
      // When defining component tokens, the key of the token is the relevant CSS property
      // The key of the token is the last element in the path array
      return propertiesToCTI[prop.path[prop.path.length - 1]];
    }

    // Fallback to the original 'attribute/cti' transformer
    return StyleDictionary.transform["attribute/cti"].transformer(prop);
  },
};

// You can export a plain JS object and point the Style Dictionary CLI to it,
// similar to webpack.
module.exports = {
  source: [
    "properties/**/*.json",
    "components/**/*.json",
    "bootstrap/**/*.json",
  ],

  // Rather than calling .registerTransform() we can apply the new transform
  // directly in our configuration. Using .registerTransform() with the same
  // transform name, 'attribute/cti', would work as well.
  transform: {
    // Override the attribute/cti transform with our component-transform
    "attribute/cti": CTITransform,
  },
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: buildPath,
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },

    scss: {
      transformGroup: "scss",
      buildPath: "build/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
      actions: ["copy_assets"],
    },
  },
};
