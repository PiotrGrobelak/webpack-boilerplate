const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const common = require('./webpack.common.js')


module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [{
                test: /\.s[ac]ss$/i,
                loader: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.css$/i,
                loader: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash:6].css',
            chunkFilename: '[id].css',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    },
    performance: {
        maxAssetSize: 512000,
    },
})