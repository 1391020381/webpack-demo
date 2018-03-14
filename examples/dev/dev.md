# 搭建开发环境
1. webpack watch mode
2. webpack-dev-server
   * live reloading<刷新浏览器>
   * 路径重定向
   * https
   * 浏览器中显示编译错误
   * 接口代理
   * 模块热更新
   ## devServer的配置
     * inline
     * contentBase
     * port
     * historyApiFallback,
     * https
     * proxy,
     * hot
         * 保持应用的数据状态
         * webpack.HotModuleReplacementPlugin<配合hot使用>
         * weppack.NamedModulesPlugin(打印模块的名称)
         * hot的钩子 module.hot  module.hot.accept module.hot.decline<框架会集成,原生的Js要自己写>
     * openpage
     * lazy
     * overlay
     * npm install webpack-dev-server --save-dev
     ```
     script:{
         "server":"webpack-dev-server --open"
     }
     devServer:{  // 注意  output的publicpath:'/'
         port：'',
         hot:true
         inline:true,
         historyApiFallback:true||{rewrites:[  // true默认首页
             {
                 from:'/pages/a',
                 to:'/pages/a.html'
             },
             {
                 from:/^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
                 to:function(context){
                     return '/' + context.match[1] + context.macth[2].html
                 }
             }
         ]} ,
         proxy:{
             '/api':{
                 target:'https://m.weibo.cn',
                 changeOrigin:true,
                 logLevel:'debug',
                 pathWrites:[],
                 headers:{
                     'Cookie':''
                 }
             }
         }

     }
     
     new webpack.HotModuleReplacementPlugin()
     new webpack.NamedModulesPlugin()
     ```
     * Proxy 代理远程接口请求(内置的是http-proxy-midleware)
     * http-proxy-midleware配置
        * options
           * target
           * changeOrigin
           * headers
           * logLevel
           * pathRewrite
3. express + webpack-dev-middleware

 * clean-webpack-plugin 