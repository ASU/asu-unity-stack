const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [];

module.exports.push({
  context: path.join(__dirname, "src"),
  mode: "production",
  entry: {
    core: "./bundles/core.js"
  },
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
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      // Must be below test-utils
    },
  }
});

// SSR bundle config
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

/*
// Auth bundle config
module.exports.push({
  context: path.join(__dirname, "src"),
  mode: "production",
  entry: {
    auth: "./bundles/auth.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].production.js",
    //filename: 'main.js',
    libraryTarget: "umd",
    library: "AsuWeb[name]",
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
});
*/
