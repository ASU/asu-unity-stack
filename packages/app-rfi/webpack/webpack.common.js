const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

const PROJECT_DIR = path.resolve(__dirname, "../");

module.exports = {
  entry: {
    appRfi: "./src/index.js",
  },
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].js",
    publicPath: "/",
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
              presets: ["@babel/env", "@babel/preset-react"],
            },
          },
        ],
      },
      // Process CSS Modules on files matching '*.module.css'
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      // Process regular global CSS styles
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/inline",
        // type: "asset/resource",
        // TODO Probably better to use asset/resource, but doesn't work with
        // examples/rfi.html case, and unsure about how would work for CMSes.
        // Reference: https://webpack.js.org/guides/asset-modules/
      },
    ],
  },
  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  resolve: {
    alias: {
      Components: path.resolve(PROJECT_DIR, "src/components/"),
      // Vendor: path.resolve(PROJECT_DIR, "vendor/"),
    },
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
};
