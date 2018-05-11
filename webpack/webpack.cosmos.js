const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        config: {
            path: path.join(__dirname, './postcss.config.js')
        }
    }
};

// Dev client bundle config
module.exports = merge(common, {
    mode: 'development',
    entry: {
        core: ['./core/core.js']
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "[name]/[name].development.js",
        libraryTarget: 'umd',
        library: ["ASUnity", "[name]"],
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    postCSSLoader
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./templates/index.html",
            filename: "./index.html"
        })
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
});