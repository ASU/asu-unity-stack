const rootConfig = require("../../eslint.config.js");

module.exports = [
  ...rootConfig,

  // Package-specific overrides
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react/no-unstable-nested-components": "off",
      "no-unused-vars": ["warn", {
        varsIgnorePattern: "_|tagHeadings|DegreeDataPropResolverServiceType",
        argsIgnorePattern: "^_",
      }],
    },
  },
];
