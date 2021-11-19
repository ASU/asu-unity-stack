const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const common = require("./webpack.common");

const PROJECT_DIR = path.resolve(__dirname, "../");

// production bundle
const config = {
  ...common,
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].production.js",
    library: {
      name: "events",
      type: "umd",
      umdNamedDefine: true,
      // export: "default",
    },
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
  /*  TODO:
   this block should be uncommented and we should decide a standard way
   to include React library externally, such explained in this link
   https://reactjs.org/docs/add-react-to-a-website.html#step-2-add-the-script-tags
   */
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
};

module.exports = config;
