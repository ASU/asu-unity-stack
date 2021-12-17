const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

const PROJECT_DIR = path.resolve(__dirname, "../");

// production bundle
const umdConfig = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].umd.js",
    library: {
      name: "AsuWebCarousel",
      type: "umd",
      umdNamedDefine: true,
    },
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
});

const cjsConfig = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].cjs.js",
    library: {
      type: "commonjs2",
    },
  },
});

const esModuleConfig = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].es.js",
    library: {
      type: "module",
    },
    environment: { module: true },
  },
  experiments: {
    outputModule: true,
  },
  externalsType: "module",
  externals: {
    // these needs to be low-case spelled
    "react": "react",
    "react-dom": "react-dom",
  },
});

module.exports = [umdConfig, cjsConfig, esModuleConfig];
