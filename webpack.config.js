const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './main.tsx'
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
                    tsConfigFile: 'tsconfig.json',
                    visualStudioErrorFormat: true
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
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        new CheckerPlugin()
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};