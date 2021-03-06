const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry:{
        vue:['vue','vue-router'],
        ui:['element-ui']
    },
    output:{
        path:path.join(__dirname,'../src/dll'),
        filename:'[name].dll.js',
        library:'[name]'
    },
    plugins:[
        new webpack.DllPlugin({  // dist 下文件会被删除
            path:path.join(__dirname,'../src/dll','[name]-mainfest.json'),
            name:'[name]'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}

// 执行  webpack --config  build/webpack.dll.conf.js