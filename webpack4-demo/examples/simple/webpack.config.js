const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')
const webpack = require('webpack')
const dev = Boolean(process.env.WEBPACK_SERVE)

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'cheap-module.eval-source-map' : 'hidden-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: dev ? '[name].js ' : '[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'none'
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  }
}

if (dev) {
  module.exports.serve = {
    port: 8080,
    add: app => {
      app.use(convert(history({})))
    }
  }
}