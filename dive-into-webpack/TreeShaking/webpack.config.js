const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlguin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack  = require('webpack')
module.exports = {
    entry:{
        app:path.resolve(__dirname,'src/index.js')
    },
    module:{
        rules:[

        ]
    },
    mode:"production",
    devtool:'inline-source-map',
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        port: 9000,
        hot:true
    },
    plugins:[
        new CleanWebpackPlguin(['dist']),
        new HtmlWebpackPlugin({
            title : 'tree shaking'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJsPlugin()
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}