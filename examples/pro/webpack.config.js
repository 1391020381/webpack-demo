module.exports = {
    plugins:[
        new webpack.DllReferencePlugin({
            mainfest:require('../src/dll/ui-manifest.json')
        }),
        new webpack.DllReferencePlugin({
            mainfest:require('../src/dll/vue-manifest.json')
        }),
        new UglifyJsPlugin({
            UglifyJsPlugin:{
                compress:{
                    warnings:false
                }
            },
            sourceMap:config.build.productionSourceMap,
            parallel:true,
            cache:true
        })
    ]
}