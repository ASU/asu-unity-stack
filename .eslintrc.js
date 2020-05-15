module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    "eslint:recommended",
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this and related prettier extensions are at the end of the extends array.
    "prettier/standard",
    "prettier/react",
  ],
  plugins: [
    // 'eslint-plugin-import-helpers'
    "react"
  ],
  settings: {
    // 'import/resolver': 'webpack',
    // 'import/ignore': 'node_modules'
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-undef": "warn",
    "no-useless-escape": "off",
    "prettier/prettier": "error"
  },
  settings: {
    react: {
      "pragma": "React",
      "version": 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "propWrapperFunctions": [
      "forbidExtraProps"
    ]
  },
};
