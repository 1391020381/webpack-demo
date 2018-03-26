const path = require('path')
const HtmlWebpackPlgun = require('html-webpack-plugin')
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
    new HtmlWebpackPlgun({
      title: 'Code Splitting',
      template: './src/index.html'
    })
  ]
}