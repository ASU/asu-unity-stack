module.exports = {
  globals: {
    fetchMock: true,
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
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
    "react/require-default-props": "off",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    "dot-notation": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "tagHeadings|DegreeDataPropResolverServiceType",
        argsIgnorePattern: "^_",
      },
    ],
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
