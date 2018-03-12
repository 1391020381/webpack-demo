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
        publicPath:'./dist/',   // 动态加载后的地址
        filename:'[name].boundle.js',
        chunkFilename:'[name].chunk.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:'/node_modules/'
            },
            {
                test:/\.tsx?$/,
                use:{
                    loader:'ts-loader'
                }
            },
            // {
            //     test:/\.css$/,   // 在html中链乳 link标签，而不是style 了解即可 
            //     use:[
            //         {
            //             loader:'style-loader/url'
            //         },
            //         {
            //             loader:'file-loader'
            //         }
            //     ]
            // }，
            {
                test:/\.css$/,  
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'common',
        //     minChunks:2,
        //     chunks:['pageA','pageB']
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            async:'async-common',
            children:true,
            minChunks:2
        }),
        new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        minChunks:Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'mainfest',
        minChunks:Infinity
    })
]
}