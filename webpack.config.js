/**
 * Created by ctestama on 3/21/18.
 */
const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        core: './src/core/core.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
        libraryTarget: 'var',
        library: ["ASUnity", "[name]"],
    },
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
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader?modules=1&localIdentName=[hash:base64:10]" }
                ]
            }
        ]
    },
    plugins: [

    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
};