const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
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
    devtool: 'eval',
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
            title: 'React Cosmos'
        })
    ]
});