module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:jest/recommended",
    "plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    "react/jsx-filename-extension": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/require-default-props": "off",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "dot-notation": "off",
    "import/prefer-default-export": "off",
  },
};
