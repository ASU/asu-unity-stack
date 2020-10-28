const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [];

const shared = {
  context: path.join(__dirname, "src"),
  entry: {
    "component-forms": "./index.js"
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
  },
  externals: {
    '@asu-design-system/components-library' : {
      commonjs: '@asu-design-system/components-library',
      commonjs2: '@asu-design-system/components-library',
      amd: 'componentsLibrary',
      root: 'componentsLibrary'
    },
    preact: 'preact',
    emotion: 'emotion',
    "prop-types": {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
      root: 'propTypes'
    }
  }
}

module.exports.push({
  ...shared,
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].dev.js",
    libraryTarget: "umd",
    library: "AsuWeb[name]",
    umdNamedDefine: true,
  },
});


module.exports.push({
  ...shared,
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "componentForms",
    umdNamedDefine: true
  },
  optimization: {
    /*splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      },
    },*/
    minimizer: [new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    })],
  },
});
