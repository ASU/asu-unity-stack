const StyleDictionary = require("style-dictionary");
const fs = require("fs-extra");
const path = require("path");
// test comment
const buildPath = "build/";

// Define a custom trasnform REM to PX
StyleDictionary.registerTransform({
  name: "remToPxTransform",
  type: "value",
  matcher: prop => prop.attributes.category === "size",
  transformer: prop => `${parseInt(prop.value) * 16}px`,
});

StyleDictionary.registerAction({
  name: "copy_fonts",
  do: function (dictionary, config) {
    console.log("Copying FontAwesome");
    fs.copySync(
      path.dirname(
        require.resolve("@fortawesome/fontawesome-free/package.json")
      ),
      config.buildPath + "assets/fontawesome"
    );
  },
  undo: function (dictionary, config) {
    console.log("Cleaning assets directory");
    fs.removeSync(config.buildPath + "assets/fontawesome");
  },
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
  source: ["properties/**/*.json", "components/**/*.json"],

  // Rather than calling .registerTransform() we can apply the new transform
  // directly in our configuration. Using .registerTransform() with the same
  // transform name, 'attribute/cti', would work as well.
  transform: {
    // Override the attribute/cti transform with our component-transform
    "attribute/cti": CTITransform,
  },
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: buildPath,
      files: [
        {
          destination: "js/theme.js",
          format: "javascript/module",
        },
      ],
      actions: ["copy_fonts"],
    },

    es6: {
      transformGroup: "js",
      buildPath: buildPath,
      files: [
        {
          destination: "es6/tokens.js",
          format: "javascript/es6",
        },
      ],
    },

    css: {
      transformGroup: "css",
      buildPath: buildPath,
      prefix: "uds",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },

    scss: {
      transformGroup: "scss",
      buildPath: buildPath + "scss/",
      prefix: "uds",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
      actions: ["copy_assets"],
    },

    // "ios": {
    //   transformGroup: "ios",
    //   buildPath: buildPath + "/ios/Classes/Generated/",
    //   prefix: "Asu",
    //   files: [
    //     {
    //       destination: "AsuUnitySize.h",
    //       format: "ios/static.h",
    //       type: "float",
    //       className: "AsuUnitySize",
    //       filter: {
    //         attributes: {
    //           category: "size",
    //         },
    //       },
    //     },
    //     {
    //       destination: "AsuUnitySize.m",
    //       format: "ios/static.m",
    //       type: "float",
    //       className: "AsuUnitySize",
    //       filter: {
    //         attributes: {
    //           category: "size",
    //         },
    //       },
    //     },
    //     {
    //       destination: "AsuUnityIcons.h",
    //       format: "ios/strings.h",
    //       className: "AsuUnityIcons",
    //       filter: {
    //         attributes: {
    //           category: "content",
    //           type: "icon",
    //         },
    //       },
    //     },
    //     {
    //       destination: "AsuUnityIcons.m",
    //       format: "ios/strings.m",
    //       className: "AsuUnityIcons",
    //       filter: {
    //         attributes: {
    //           category: "content",
    //           type: "icon",
    //         },
    //       },
    //     },
    //     {
    //       destination: "AsuUnityColor.h",
    //       format: "ios/colors.h",
    //       className: "AsuUnityColor",
    //       type: "AsuUnityColorName",
    //       filter: {
    //         attributes: {
    //           category: "color",
    //         },
    //       },
    //     },
    //     {
    //       destination: "AsuUnityColor.m",
    //       format: "ios/colors.m",
    //       className: "AsuUnityColor",
    //       type: "AsuUnityColorName",
    //       filter: {
    //         attributes: {
    //           category: "color",
    //         },
    //       },
    //     },
    //     {
    //       destination: "AsuUnityProperties.h",
    //       format: "ios/singleton.h",
    //       className: "AsuUnityProperties",
    //     },
    //     {
    //       destination: "AsuUnityProperties.m",
    //       format: "ios/singleton.m",
    //       className: "AsuUnityProperties",
    //     },
    //   ],
    // },

    // "android": {
    //   transformGroup: "android",
    //   buildPath: buildPath + "android/asu-uds/src/main/res/values/",
    //   files: [
    //     {
    //       destination: "asu_uds_colors.xml",
    //       format: "android/colors",
    //     },
    //     {
    //       destination: "asu_uds_font_dimens.xml",
    //       format: "android/fontDimens",
    //     },
    //     {
    //       destination: "asu_uds_dimens.xml",
    //       format: "android/dimens",
    //     },
    //     {
    //       destination: "asu_uds_integers.xml",
    //       format: "android/integers",
    //     },
    //     {
    //       destination: "asu_uds_strings.xml",
    //       format: "android/strings",
    //     },
    //   ],
    // },

    // "android-asset": {
    //   transformGroup: "android",
    //   buildPath: buildPath + "android/asu-uds/src/main/",
    //   files: [
    //     {
    //       destination: "assets/data/properties.json",
    //       format: "json",
    //     },
    //   ],
    //   actions: ["copy_assets"],
    // },
  },
};
