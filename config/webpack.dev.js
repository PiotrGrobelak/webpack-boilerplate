const merge = require('webpack-merge')
const paths = require('./paths')
const common = require('./webpack.common.js')

module.exports = merge(common,{
    mode: 'development',
    devtool: 'source-map',
    devServer:{
        port: 2020,
        contentBase: paths.build
    }
})