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
  rootNode: path.resolve(__dirname, "../../node_modules")
};

const devtool = "source-map";

const jsConfig = {
  name: "JS",
  mode,
  devtool,
  entry: {

  },
  output: {
    path: paths.distJS,
    filename: "[name].js",
    library: "[name].js",
    libraryTarget: "umd",
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
            paths.rootNode,
            "bootstrap",
            "dist",
            "js",
            "bootstrap.bundle.min.js"
          ),
          to: paths.distJS,
        },
        {
          from: path.resolve(paths.js, "data-layer.js"),
          to: paths.distJS,
        },
        {
          from: path.resolve(paths.js, "global-header.js"),
          to: paths.distJS,
        },
      ],
    }),
  ].filter(Boolean),
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: false, // removes console statements
            drop_debugger: false, // removes debugger statements
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
      import: path.resolve(paths.sass, "unity-bootstrap-theme.bundle.scss"),
      filename: "../.tmp/[name].js",
    },
    "unity-bootstrap-theme": {
      import: path.resolve(paths.sass, "unity-bootstrap-theme.scss"),
      filename: "../.tmp/[name].js",
    },
    "unity-bootstrap-header": {
      import: path.resolve(paths.sass, "unity-bootstrap-header.scss"),
      filename: "../.tmp/[name].js",
    },
    "unity-bootstrap-footer": {
      import: path.resolve(paths.sass, "unity-bootstrap-footer.scss"),
      filename: "../.tmp/[name].js",
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
              sourceMap: true,
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
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
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
