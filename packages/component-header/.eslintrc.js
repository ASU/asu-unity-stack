module.exports = {
  globals: {
    fetchMock: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
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
  plugins: [
    "react",
    // "jest"
  ],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "dot-notation": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "tagHeadings|DegreeDataPropResolverServiceType",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
