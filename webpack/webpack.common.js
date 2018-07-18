/**
 * Created by ctestama on 3/21/18.
 */
const path = require("path");

module.exports = {
    context: path.join(__dirname, '..', 'src'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
    resolve: {
        extensions: ['.js', '.jsx']
    }
};