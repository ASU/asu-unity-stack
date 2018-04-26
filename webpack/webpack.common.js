/**
 * Created by ctestama on 3/21/18.
 */
const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    externals: [nodeExternals()],
};