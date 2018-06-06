const path = require('path')
const HtmlWebpackPlguin =  require('html-webpack-plugin')
const CleanWebapckPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname, "dist") ,    // 在localhost:8080下建立服务,将dist目录下的文件,作为可访问的文件
        port: 9000,
        hot:true
    },
    plugins:[
        new CleanWebapckPlugin(['dist']),
        new HtmlWebpackPlguin({
            title:'Development And Hot Module Replacement'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}