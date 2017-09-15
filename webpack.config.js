const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'build.js'
    },
    //设置开发者工具的端口号,不设置则默认为8080端口
    devServer: {
        inline: true,
        port: 8181
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: [
                    // 制定src文件夹使用
                    path.resolve(__dirname, 'src'),
                ],
                // .babelrc 里规范
                // query: {
                //     presets: ['es2015', 'react', "stage-2"]
                // }
            },
            {//css
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {//scss
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {//less
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        // 启动项目自启页面
        new OpenBrowserPlugin({ url: 'http://localhost:8181/' })
    ]
};

module.exports = config;