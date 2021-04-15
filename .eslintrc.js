module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["eslint-plugin-import-helpers"],
  settings: {
    "import/resolver": "webpack",
    "import/ignore": "node_modules",
  },
  rules: {
    // "no-unused-vars": "warn",
    // "no-console": "warn",
    // "no-undef": "error",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always", // new line between groups
        groups: [
          "module",
          ["/^Components/", "/^Vendor/"],
          [("parent", "sibling", "index")],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
};
