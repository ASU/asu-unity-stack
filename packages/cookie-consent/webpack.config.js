const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = [];
const shared = {
  entry: {
    "cookie-consent": "./index.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  context: path.join(__dirname, "src"),
};

// development bundle config
module.exports.push({
  ...shared,
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].development.js",
    libraryTarget: "umd",
    library: "AsuCookieConsent",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              import: true,
            },
          },
        ],
      },
    ],
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
    library: "AsuCookieConsent",
    umdNamedDefine: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "cookie-consent.css",
            },
          },
          "extract-loader",
          {
            loader: "css-loader",
            options: {
              import: true,
            },
          },
        ],
      },
    ],
  },
});
