const webpack = require('webpack')
const path = require('path')
const Purifycss = require('purifycss-webpack')
const globAll = require('glob-all')
const  ExtractTetWebpackPlguin  = require('extract-text-webpack-plugin')
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
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins:[
                                rquire('postcss-sprites')({
                                    spritePath:'dist/assets/imgs/spirtes',
                                    retina:true   // 图片以 1@2x.png命名
                                }),
                                require('autoprefixer')(),
                                require('"postcss-cssnext')()
                            ]
                        }
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gift)$/,
                use:[
                    // {
                    //     loader:'file-loader',
                    //     options:{
                    //         publicPath:'',
                    //         outputPath:'dist/',
                    //         useRelativePath:true
                    //     }
                    // }
                    {
                        loader:'url-loader',
                        options:{
                            name:'[name][hash:5].[ext]',
                            limit:5000,
                            publicPath:'',
                           outputPath:'dist/',
                             useRelativePath:true
                        }
                    },
                    {
                        loader:'img-loader',
                        options:{
                            pngquant:{
                                quality:80
                            }
                        }
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
    }),
    new ExtractTetWebpackPlguin({
        filename:'[name].min.css'
    }),
    new Purifycss({
        paths:globAll.sync([
            path.join(__dirname,'./*.html'),
            path.join(__dirname,'./src/*js')
        ])
    }),
    new webpack.optimize.UglifyJsPlugin()  // Tree Shaking
]
}