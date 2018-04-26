
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    context: path.join(__dirname, '..', 'src', 'core'),
    entry: './SSR.js',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'SSR.js',
        libraryTarget: 'commonjs2',
        publicPath: '/dist/',
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "css-loader/locals?modules&localIdentName=[path][name]---[local]---[hash:base64:5]"
                ]
            }
        ]
    },
});