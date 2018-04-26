const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
    mode: 'development',
    entry: {
        core: './src/core/core.js'
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '..', "dist"),
        filename: "[name]/js/[name].js",
        libraryTarget: 'umd',
        library: ["ASUnity", "[name]"],
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]'
                ]
            }
        ]
    },
});