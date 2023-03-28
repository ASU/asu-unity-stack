const autoprefixer = require('autoprefixer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");

const isDev = process.env.NODE_ENV !== 'production';

const paths = {
  js: path.resolve(__dirname, 'src/js'),
  css: path.resolve(__dirname, 'dist/css'),
  img: path.resolve(__dirname, 'dist/img'),
  imgsrc: path.resolve(__dirname, 'src/img'),
  sass: path.resolve(__dirname, 'src/scss'),
};

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    'bootstrap-asu': path.resolve(paths.js, 'index.js'),
  },
  externalsPresets: { node: true },
  externals: [nodeExternals(), 'commonjs sharp'],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js',
    library: 'bootstrapASU',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
  },
  devtool: false,
  resolve: {
    extensions: ['.js'],
  },
  optimization: {
    minimize: !isDev,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        extractComments: true,
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.js,
        use: ['babel-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: paths.sass,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   include: paths.imgsrc,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'img/[name][ext]',
      //   },
      //   use: [
      //     ImageMinimizerPlugin.loader,
      //   ],
      // },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new MiniCssExtractPlugin({
      filename: '../css/bootstrap-asu.min.css',
      chunkFilename: '../css/[id].css',
    }),
    // new ESLintPlugin({
    //   emitError: true,
    //   failOnError: true,
    //   failOnWarning: true,
    //   extensions: ['.js'],
    //   fix: true,
    // }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8080,
  },
};
