const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = [];

const shared = {
  context: __dirname,
  entry: {
    "cookie-consent": "./src/index.js",
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
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      // Must be below test-utils
      "react-dom": "preact/compat",
    },
  },
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
      new CssMinimizerPlugin(),
    ],
  },
  externals: {
    "preact": {
      commonjs: "preact",
      commonjs2: "preact",
      amd: "preact",
      root: "preact",
    },
  },
});
