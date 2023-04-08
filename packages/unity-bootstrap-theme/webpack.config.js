const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const env = process.env.NODE_ENV || "development";
const mode = env === "production" ? "production" : "development";

const paths = {
  js: path.resolve(__dirname, "src/js"),
  distJS: path.resolve(__dirname, "dist/js"),
  imgsrc: path.resolve(__dirname, "src/img"),
  img: path.resolve(__dirname, "dist/img"),
  sass: path.resolve(__dirname, "src/scss"),
  css: path.resolve(__dirname, "dist/css"),
  node: path.resolve(__dirname, "node_modules"),
};

const devtool = "source-map";

const jsConfig = {
  name: "JS",
  mode,
  devtool,
  entry: {
    "global-header": [path.resolve(paths.js, "global-header.js")],
    "googleAnalytics": path.resolve(paths.js, "googleAnalytics.js"),
  },
  output: {
    path: paths.distJS,
    filename: "[name].js",
    library: "bootstrapASU",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
    pathinfo: true,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals(), "commonjs sharp"],
  plugins: [
    new ESLintPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: paths.imgsrc, to: paths.img },
        {
          from: path.resolve(
            paths.node,
            "bootstrap",
            "dist",
            "js",
            "bootstrap.bundle.min.js"
          ),
          to: paths.distJS,
        },
      ],
    }),
  ].filter(Boolean),
  optimization: {
    minimize: env === "production",
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
        terserOptions: {
          compress: {
            drop_console: true, // removes console statements
            drop_debugger: true, // removes debugger statements
          },
        },
      }),
    ],
  },
};

const cssConfig = {
  name: "CSS and Images",
  mode,
  devtool,
  entry: {
    "unity-bootstrap-theme.bundle": {
      import: path.resolve(paths.sass, "styles.js"),
      filename: "../.tmp/null.js",
    },
    "unity-bootstrap-theme": {
      import: path.resolve(paths.sass, "unity-bootstrap-theme.scss"),
      filename: "../.tmp/unity-bootstrap-theme.js",
    },
    "unity-bootstrap-header": {
      import: path.resolve(paths.sass, "extends", "_global-header.scss"),
      filename: "../.tmp/_global-header.js",
    },
    "unity-bootstrap-footer": {
      import: path.resolve(paths.sass, "extends", "_globalfooter.scss"),
      filename: "../.tmp/_globalfooter.js",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name][ext][query]",
  },
  plugins: [
    new StylelintPlugin({
      files: "./src/**/*.{scss,css}",
    }),
    new MiniCssExtractPlugin({
      // filename: ({ chunk }) => path.join("..", "dist", "css", `${chunk.name}.css`),
      filename: path.join("..", "dist", "css", "[name].css"),
      // filename: "[name].css",
      chunkFilename: '[id].css'
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            }
          },
          {
            loader: "css-loader",
            options: {
              // esModule: false,
              sourceMap: false,
              url: false,
              // modules: {
              //   namedExport: true,
              //   localIdentName: "foo__[name]__[local]",
              // },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
            },
          },
        ],
        sideEffects: true,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ].filter(Boolean),
  },
  optimization: {
    minimize: env === "production",
  },
};

module.exports = [
  jsConfig,
  cssConfig,
]
