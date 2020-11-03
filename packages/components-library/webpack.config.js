const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [];

const shared = {
  context: __dirname,
  entry: {
    "components-library": "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["preact"],
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      // Must be below test-utils
    },
  },
  externals: {
    preact : {
      commonjs: 'preact',
      commonjs2: 'preact',
      amd: 'preact',
      root: 'preact'
    },
    emotion: {
      commonjs: 'emotion',
      commonjs2: 'emotion',
      amd: 'emotion',
      root: 'emotion'
    },
    "prop-types": {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'propTypes',
      root: 'propTypes'
    }
  }
};



// development bundle config
module.exports.push({
  ...shared,
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].dev.js",
    libraryTarget: "umd",
    library: "componentsLibrary",
    umdNamedDefine: true,
  },
});

// production bundle
module.exports.push({
  ...shared,
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "componentsLibrary",
    umdNamedDefine: true,
  },
  plugins: [
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
    ],
  },
});

/** Vendor bundle config */
module.exports.push({
  context: shared.context,
  entry: {
    vendor: ["./src/vendor.js"]
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      // Must be below test-utils
    },
  }
});

// SSR bundle config - should be used server-side only
module.exports.push({
  mode: "production",
  context: path.join(__dirname, "src"),
  target: "node",
  entry: {
    code: "./ssr.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].ssr.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   rootMode: "upward",
            // },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: "preact/compat",
      //"react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      // Must be below test-utils
    },
  },
  externals: [nodeExternals()],
});
