const rootConfig = require("../../eslint.config.js");

module.exports = [
  ...rootConfig,

  // Package-specific overrides
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react/no-unstable-nested-components": "off",
      "import/no-unresolved": ["error", {
        ignore: ["^@shared.*"],
      }],
      "import/extensions": ["error", "ignorePackages", {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      }],
    },
  },
];
