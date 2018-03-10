module.exports = {
    entry :{
        app:'./app.ts'
    },
    output:{
        filename:'[name].[hash:5].js'
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
    }
}