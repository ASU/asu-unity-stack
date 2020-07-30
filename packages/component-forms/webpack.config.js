const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [];

const shared = {
  entry: {
    forms: "./index.js"
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
              presets: ['preact'],
            }
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
  }
}

module.exports.push({
  context: path.join(__dirname, "src"),
  mode: "development",
  entry: shared.entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].development.js",
    libraryTarget: "umd",
    library: "AsuWeb[name]",
    umdNamedDefine: true,
  },
  module: shared.module,
  resolve: shared.resolve
});


module.exports.push({
  context: path.join(__dirname, "src"),
  mode: "production",
  entry: shared.entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].production.js",
    libraryTarget: "umd",
    library: "AsuWeb[name]",
    umdNamedDefine: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      },
    },
    minimizer: [new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    })],
  },
  module: shared.module,
  resolve: shared.resolve
});
