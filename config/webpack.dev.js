const merge = require('webpack-merge')
const webpack = require('webpack')
const paths = require('./paths')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 2020,
        hot: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        watchContentBase: true,
        stats: {
            children: false,
            colors: true,
            maxModules: 0
        },
    },
    module: {
        rules: [{
                test: /\.s[ac]ss$/i,
                loader: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                loader: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
})