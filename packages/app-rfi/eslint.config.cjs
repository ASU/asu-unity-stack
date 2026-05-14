const rootConfig = require("../../eslint.config.js");
const babelParser = require("@babel/eslint-parser");

module.exports = [
  // Inherit base configurations from root
  ...rootConfig,

  // Package-specific overrides for babel parser
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"]
        }
      }
    },
  },
];
