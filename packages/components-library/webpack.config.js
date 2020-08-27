const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [];


const shared = {
  entry: {
    core: "./index.js"
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

// development bundle config
module.exports.push({
  ...shared,
  context: path.join(__dirname, "src"),
  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].development.js",
    libraryTarget: "umd",
    library: "AsuWeb[name]",
    umdNamedDefine: true,
  },

});

// production bundle
module.exports.push({
  ...shared,
  context: path.join(__dirname, "src"),
  mode: "production",
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
});

// SSR bundle config - should be used server-side only
module.exports.push(
  {
    mode: "production",
    context: path.join(__dirname, "src"),
    target: 'node',
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
  }
);
