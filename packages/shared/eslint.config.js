const rootConfig = require("../../eslint.config.js");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const reactRefresh = require("eslint-plugin-react-refresh");

module.exports = [
  ...rootConfig,

  // Package-specific overrides
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      // Disable problematic rules for TypeScript files
      "import/extensions": "off",
      "no-undef": "off", // TypeScript handles this
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_|^React$",
          ignoreRestSiblings: true,
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // JavaScript files
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      // Disable import extensions for JS files too if needed
      "import/extensions": "off",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      // Allow console statements in utility files
      "no-console": "off",
    },
  },
];
