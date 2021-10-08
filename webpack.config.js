const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV == 'development';

module.exports = {
    entry: path.join(__dirname, "src", "main.tsx"),
    mode: "development",

    output: {
        path: path.join(__dirname, "build"),
        filename: "react_bundle.js"
    },

    devServer: {
        port: 3005,
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.(js||jsx||ts||tsx)$/,
                exclude: [/node_modules/],
                use: ["babel-loader"],
                resolve: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"]
                }
            },

            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDev,
                        }
                    }
                ]
            },

            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDev
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            alwaysWriteToDisk: true,
            minify: !isDev,
        }),

        new MiniCssExtractPlugin({ 
            filename: isDev? '[name].css' : '[name].[fullhash].css',
            chunkFilename: isDev? '[id].css' : '[id].[fullhash].css'
        })
    ]
}