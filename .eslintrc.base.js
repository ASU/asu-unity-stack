module.exports = {
  globals: {
    fetchMock: true,
    cy: true,
    Cypress: true,
  },
  settings: {
    react: {
      // Automatically detect the react version
      version: "detect",
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "airbnb",
    // Make this the last element so prettier config overrides other formatting rules
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    // "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    "react/function-component-definition": "off",
    "import/no-relative-packages": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-constructed-context-values": "off",
    "no-restricted-exports": "off",
    "react/jsx-no-useless-fragment": "off",
    "no-unsafe-optional-chaining": "off",
    "no-promise-executor-return": "off",
    "default-param-last": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": [1, { custom: "ignore" }],
    "react/jsx-props-no-spreading": "off",
    // Use our .prettierrc file as source
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "dot-notation": "off",
    "no-console": 1,
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "import/no-relative-path-imports": "off",
    "import/order": ["error", {
      "newlines-between": "always",
      "pathGroupsExcludedImportTypes": ["builtin"]
    }],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "import/no-absolute-path": "off",
    "import/order": "off",
  },
  overrides: [
    {
      settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      plugins: ["eslint-plugin-import-helpers", "@typescript-eslint"],
      rules: {
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
          }
        ],
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "@typescript-eslint/ban-ts-comment": ["warn"],
        "no-unused-vars": "off",
        "react/require-default-props": "off",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
        "@typescript-eslint/no-empty-function": "off"
      }
    },
  ],
};
