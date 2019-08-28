const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modeConfig = env => require(`./build-config/webpack.${env}`)(env);

module.exports = ({
    mode
} = {
    mode: "production"
}) => {
    return webpackMerge({
        mode,
        entry: path.resolve(__dirname, "index.js"),
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "dist"),
            filename: "index.js"
        },
        devServer: {
            hot: true,
            open: true
        },
        module: {
            rules: [{
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    loader: ["url-loader", "file-loader"]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "index.html")
            })
        ]
    },
    modeConfig(mode));
};