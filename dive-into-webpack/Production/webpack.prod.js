const merge = require('webpack-merge')
const UgligyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common,{
    plugins:[
        new UgligyJSPlugin()
    ]
})