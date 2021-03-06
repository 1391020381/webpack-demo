# JS模块化
1. 命名空间
   * 库名.类名.方法名
   ```
    var NameSpace = {}
    NameSpace.type = NameSpace.type || {}
    NameSpace.type.method = function(){}
   ```
2. commonjs
    * 一个文件为一个模块
    * 通过 module.exports暴露模块的接口
    * 通过require引入模块
    * 同步执行
3. amd/cmd/umd
    1. AMD
       * Async Module Definition
       * 使用define定义模块
       * 使用 require加载模块
       * RequireJS
       * 依赖前置,提前执行
     2. CMD
       * Common Module Definition
       * 一个文件为一个模块
       * 使用define定义模块
       * 使用 require加载模块
       * SeaJS
       * 尽可能懒执行
    3. CMD
    * Universal Module Definition
    * 通用解决方案
    * 三步走:
        1. 判断是否支持AMD
        2. 判断是否支持CommonJS
        3. 如果都没有使用全局变量
4. es6module
   * 一个文件一个模块
   * export /import
   # CSS模块化
   * oocss
   * smacss
   * atomic css
   * mcss
   * amcss
   * BEM
   * css module
  # webpack核心概念
  1. Entry
     * 代码入口
     * 打包的入口
     * 单个或多个(多页应用多个入口,或者业务代码和框架代码分开<打包的入口与运行的入口不一定一样  >)
  2. Ouput
     * 打包成的文件(boundle)
     * 一个或多个
     * 自定义规则
     * 配合CDN
  3. Loaders
     1. 编译相关
        * babel-loader  ts-loader
     2. 样式相关
        * style-loader  css-loader   less-loader  postcss-loader
     3. 文件相关
        * file-loader  url-loader   
  4. Plugins 
      1. 可以参与打包整个过程
      2. 打包优化和压缩
      3. 配置编译时的变量 
      4. 极其灵活

      ## 常用Plugins
      1. 优化相关
        * CommonsChunkPlugin  
        * UglifyjsWebpackPlugin
      2. 功能相关
         *  ExtractTextWebpackPlugin
         *  HtmlWebpackPlugin
         * HotModuleReplacementPlugin
         * CopyWebpackPlguin 

      # 名词
      * Chunk(代码块)
      * Bundle
      * module   