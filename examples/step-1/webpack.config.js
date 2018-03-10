const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry :{
        pageA:'./src/pageA.js',
        pageB:'./src/pageB.js',
        'vendor':['lodash']
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].boundle.js',
        chunkFilename:'[name].chunk.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:'/node_modules/'
            },
            {
                test:/\.tsx?$/,
                use:{
                    loader:'ts-loader'
                }
            }
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks:2,
            chunks:['pageA','pageB']
        }),
        new webpack.optimize.CommonsChunkPlugin({
        // name:'common',
        // minChunks:2
        name:'vendor',
        minChunks:Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'mainfest',
        minChunks:Infinity
    })
]
}