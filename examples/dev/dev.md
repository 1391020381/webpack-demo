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
         hot:true,
         hotOnly:true,
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
     if(module.hot){   // 在 js模块中
         module.hot.accept()
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
# 调试
 1. Devtool<Source Map> 
    * css-loader.option.sourcemap
    * less-loader.option.sourcemap
    * sass-loader.option.sourcemap
    ```
    // 在 webpack.config.js中
    devtool:'eval'
    ```
    * 开发  cheap-moule-source-map
    * css的sourcemap要在loader中开启sourcemap 
    {
        loader:'less-loader',
        options:{'
        sourceMap:true
        }
    }  
       * style-loader的 singleton不能为true
 2. webpack.SourceMapDevToolPlugin
 3. webpack.EvalSourceMapDevToolPlugin

 # 配置ESlint
 * eslint
    * https://standardjs.com
    * eslint-config-standard
    * eslint-plugin-promise
    * eslint-plugin-standard 
 * eslint-loader
      * npm install eslint eslint-loader eslint-plugin-html  eslint-friendly-formatter --save-dev
 * eslint-plugin-html
 * eslint-friendly-formatter
 * .eslintrc.*

 ```
 {
     loader:'babel-loader',
     options:{
         presets:['env]
     }
 },
 {
     loader:'eslint-loader,
     options:{
         formatter:require('eslint-friendly-formatter')
     }
 }
 ```

 * eslintrc.js
 ```
 npm install eslint-config-standard eslint-plugin-promise eslint-plugin-node eslint-plugin-import eslint-plugin-standard --save-dev
 module.exports = {
     root:ture,
     extends:'standard',
     plugins:[],
     env:{
         browser:true,
         node:true
     },
     rules:{

     }
 }
 ```

# 开发环境和生产环境
   1. 生产环境
      * 提取公用代码
      * 压缩混淆
      * 文件压缩 base64编码
      * Tree shake

   * webpack-merge   