const globals = require("globals");
const react = require("eslint-plugin-react");
const jest = require("eslint-plugin-jest");
const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");
const importPlugin = require("eslint-plugin-import");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const prettier = require("eslint-plugin-prettier");
const eslintPluginPrettier = require("eslint-config-prettier");
const eslintPluginReactHooks = require("eslint-plugin-react-hooks");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      ecmaVersion: 13,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      jest,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      prettier,
      eslintPluginPrettier,
      "react-hooks": eslintPluginReactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    },
    rules: {
      // React rules
      "react/function-component-definition": "off",
      "react/jsx-filename-extension": "off",
      "react/jsx-no-constructed-context-values": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-uses-vars": "error", // Marks JSX variables as used
      "react/jsx-uses-react": "error", // Marks React as used in JSX files

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Import rules
      "import/no-relative-packages": "off",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": ["error", {
        devDependencies: true,
      }],
      "import/no-relative-path-imports": "off",
      "import/no-absolute-path": "off",

      // JSX A11y rules
      "jsx-a11y/control-has-associated-label": "off",
      "jsx-a11y/label-has-associated-control": "off", // Disabled due to too many false positives

      // General rules
      "no-restricted-exports": "off",
      "no-unsafe-optional-chaining": "off",
      "no-promise-executor-return": "off",
      "default-param-last": "off",
      "dot-notation": "off",
      "no-console": 1,
      "no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^(React|_|expect|test|describe|it|beforeEach|afterEach|beforeAll|afterAll|jest|vi|fixture|page)$",
        ignoreRestSiblings: true,
      }],
      "no-undef": "off", // Disable for config files and test files

      // Import rules - disable problematic ones
      "import/no-extraneous-dependencies": "off",

      // Prettier
      "prettier/prettier": ["error", {}, {
        usePrettierrc: true,
      }],
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      ecmaVersion: 13,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      jest,
      "@typescript-eslint": typescriptEslint,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      prettier,
      "react-hooks": eslintPluginReactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // Inherit JS rules
      ...js.configs.recommended.rules,

      // TypeScript specific rules
      "import/extensions": ["error", "ignorePackages", {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      }],
      "import/prefer-default-export": "off",
      "react/jsx-filename-extension": ["error", {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }],
      "@typescript-eslint/ban-ts-comment": ["warn"],
      "no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^(React|_|expect|test|describe|it|beforeEach|afterEach|beforeAll|afterAll|jest|vi|fixture|page)$",
        ignoreRestSiblings: true,
      }],
      "react/require-default-props": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-function": "off",

      // Re-apply common rules for TypeScript files
      "react/function-component-definition": "off",
      "import/no-relative-packages": "off",
      "jsx-a11y/control-has-associated-label": "off",
      "react/jsx-no-constructed-context-values": "off",
      "no-restricted-exports": "off",
      "react/jsx-no-useless-fragment": "off",
      "no-unsafe-optional-chaining": "off",
      "no-promise-executor-return": "off",
      "default-param-last": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-uses-vars": "error", // Marks JSX variables as used
      "react/jsx-uses-react": "error", // Marks React as used in JSX files

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "prettier/prettier": ["error", {}, {
        usePrettierrc: true,
      }],
      "dot-notation": "off",
      "no-console": 1,
      "import/no-extraneous-dependencies": ["error", {
        devDependencies: true,
      }],
      "import/no-relative-path-imports": "off",
      "jsx-a11y/label-has-associated-control": "off", // Disabled due to too many false positives
      "import/no-absolute-path": "off",
    },
  },
  {
    ignores: [
      "**/node_modules",
      "**/build",
      "**/dist",
      "**/lib",
      "**/esm",
      "**/*.spec.ts",
      "**/*spec.ts",
      "**/*.d.ts",
      "**/graphql-schema.ts",
      "vite.config.*"
    ],
  },
];
