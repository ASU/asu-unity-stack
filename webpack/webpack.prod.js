const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
    mode: 'production',
    entry: {
        core: '../src/core/core.js'
    },
    output: {
        path: path.resolve(__dirname, '..', "dist"),
        filename: "[name]/[name].production.js",
        libraryTarget: 'umd',
        library: ["ASUnity", "[name]"],
        umdNamedDefine: true,
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    }
});