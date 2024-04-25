const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require("path");

const mode = process.env.NODE_ENV || 'development';  // "prod": "webpack --node-env=production", 
const devMode = mode === 'development' // T если dev, F=prod

//const target = devMode? 'web' : 'browserlist';
const devtool = devMode? 'source-map' : undefined

module.exports = {
    mode,
    devtool, 
    // target,  // надо указывать .browserlist 
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,  // удаление каждый раз папки dist
        filename: 'index.[contenthash].js', //contenthash нужен чтобы браузер не из кэша js Доставал
    },
    devServer:{
        static:"./dist",
        open: true,
        hot: devMode? true: false,  // перезагружает модули 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin(),
    ],
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: 
                [
                    devMode? "style-loader":MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    }
};