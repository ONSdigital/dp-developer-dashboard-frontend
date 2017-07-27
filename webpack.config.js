const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader')
const formatter = require('eslint-friendly-formatter');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: { 
                    typeCheck: true,
                    tsConfigFile: 'tsconfig.json'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({ 
                    fallback: "style-loader", 
                    use: [
                        {
                            loader: "css-loader",
                            options: {sourceMap: true}
                        },
                        {
                            loader: "sass-loader",
                            options: {sourceMap: true}
                        }
                    ]
                })
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts']
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        new CheckerPlugin()
    ]
};