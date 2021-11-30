const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const common = require("./webpack.common.js");

const PROJECT_DIR = path.resolve(__dirname, "../");

// production bundle
const config = {
  ...common,
  context: path.join(PROJECT_DIR, "src"),
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].production.js",
    libraryTarget: "umd",
    library: "AsuWebCarousel",
    umdNamedDefine: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
    ],
  },
  performance: {
    maxEntrypointSize: 255000,
  },
};

module.exports = config;
