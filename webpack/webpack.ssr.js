const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const nodeExternals = require('webpack-node-externals');
const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        config: {
            path: path.join(__dirname, './postcss.config.js')
        }
    }
};

// Dev SSR bundle config
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './ssr/SSR.js',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'dist/ssr.bundled.js',
        libraryTarget: 'umd'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-loader/locals?module&localIdentName=[name]__[local]___[hash:base64:5]',
                    postCSSLoader
                ]
            }
        ]
    },
    externals: [nodeExternals()],

});