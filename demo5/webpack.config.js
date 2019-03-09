const HtmlWebpackPlugin=require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot:true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
        } )
  
    ],
}