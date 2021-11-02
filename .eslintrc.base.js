module.exports = {
  globals: {
    fetchMock: true,
  },
  settings: {
    react: {
      // Automatically detect the react version
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
    // Make this the last element so prettier config overrides other formatting rules
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
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
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": [1, { custom: "ignore" }],
    // Use our .prettierrc file as source
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "dot-notation": "off",
    "no-console": 1,
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-unused-vars": "warn",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  },
};
