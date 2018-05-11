const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


module.exports = merge(common, {
    mode: 'production',
    entry: {
        core: './core/core.js'
    },
    output: {
        path: path.resolve(__dirname, '..', "dist"),
        filename: "[name]/[name].production.js",
        libraryTarget: 'umd',
        library: ["ASUnity", "[name]"],
        umdNamedDefine: true,
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]/[name].production.css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]'} }
                ]
            }
        ]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
});