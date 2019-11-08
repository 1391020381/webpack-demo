const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Code Splitting',
      template: './src/index.html'
    })
  ]
}