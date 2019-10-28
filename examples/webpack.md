# 打包JS
 * Esmodule
 * commonjs
 * amd
 ## ES6
  * Babel-loader
  * babel-core
  * babel Presets
    1. targets.browsers

  ### 函数和方法
  * Generator  Set Map  Array.from  Array.prototype.includes  
  * babel-polyfill
     * 全局垫片(为应用准备)  npm install babel-polyfill --save
  * babel runtime transform
     * 局部垫片(为框架准备)
     * npm install babel-plugin-transform-runtime --save-dev
     * npm install babel-runtime --save
 # typescript-loader
   * npm i typescript ts-loader --save-dev
   * npm i typescript awesome-typescript-loader --save-dev
   * 配置  tsconfig.json
      1. tsc init
      2. 配置选项  官网/docs/handbook/compiler-options.html
      3. 常用选项  compilerOptions  include exclude
    ## 申明文件
      1. npm install @types/loadsh --save
      2. npm install @tpes/vue --save
### Typings
  1. npm install typings -g
  2. typing install loadsh


# 提取公用代码
* webpack.optimize.CommonsChunkPlugin(多入口)
  1. 减少冗余代码
  2. 提高页面加载速度 
* 使用场景
  1. 单页应用
  2. 单页应用 + 第三方依赖
  3. 多页应用 + 第三方依赖 + wepack生成的代码 
*   
# 代码分割和懒加载<修改代码书写的方式来实现>
1. webpack methods
   * require.ensure
       * []:dependencies
       * callback
       * errorCallBack
       * chunkName
   * require.include    
2. ES 2015 loaderspec
  * System.import() -> import()<返回Promise>
  * import().then() -> Primise()
  ## wepack import function
    * import(
      /* webpackChunkName:async-chunk-name */
      /* webpackMode:lazy */
      modulename
    )
3. 代码分割的场景
   *  分离业务代码 和 第三方依赖
   * 分离业务代码 和 业务公共代码   和第三方依赖
   * 分离首次加载 和访问后加载的代码 

4. 处理css  
  * 引入
  * 配置 less/sass
  * 提取css代码 
  * style-loader<创建标签,把css写入html>
     * style-loader/url
     * style-loader/useable   在webpack.config.js中将 style-lader替换为 style-loader/useable 那么在js中引入 css即可 是 use()  unuse()
     * 配置
        1. insertAt(插入位置)
        2. insertInto(插入到dom)
        3. singleton(是否使用一个style)
        4. transform(转化,浏览器环境下,插入页面前,在浏览器端)
  * css-loader<js引入其他css>
     * 配置
      * alias(解析的别名)
      * importLodder(@impoort)
      * Minimize  (是否压缩)
      * modules(启用css-modules)

      ## css-module
       * :local
       * :global
       * compose
       * compose ... from path
     ## 提取 css
     *  extract-loader
     * ExtractTextWebpackPlugin 
     ## PostCSS in Webpack
     * PostCSS
       * Autoprefixer<添加浏览器前缀>
       * css-nano<帮助我们优化,压缩,css-loader中有用>
       * css-next<使用 新语法  css Variables  custom selectors calc()  它包含autoprefixer>
       * npm install --save-dev postcss postcss-loader autoprefixer cssnano postcss-cssnext 

       ## Broswerslist
        * 所有插件都公用 package.json
        * browserslistrc
 # 其他
 * postcss-import
 * postcss-url
 * psotcss-asserts

 # Tree Shaking
 * JS Tree Shaking
 * CSS Tree Shaking

 ## 使用场景
   * 常规优化
   * 引入第三库的某个功能<注意第三方库的 是否有利于 Tree Shaking>

 * webpack2以上会标记哪些代码没有用 再使用 Webpack.optimize.uglifyJS来移除 

 * 打包后的文件 使用  /* harmony export (immutable)标识使用, unused harmony export */ 没有使用 


 1. npm install lodash  
 2. npm install loadash-es
 3. npm install babel-plugin-lodash  

 ### CSS Tree Shaking
   1. Purify css
    * purifycss-webpack
    * npm install purifycss-webpack glob-all --save-dev

  # 文件处理
  ## 图片处理
   1. css中引入的图片
       * file-loader
   2. 自动合成雪碧图
       * postcss-sprites
   3. 压缩图片
       * img-loader
   4. base64编码
     * url-loader
  ## 字体文件
  ## 第三JS库<cdn>  
  ## 处理字体文件
   * file-loader
   * url-loader

  # 第三方js库 
    1. webpack.providePlugin
    2. import-loader
# HTML in Webpack
```  
  1. HtmlWebpackPlugin
       * options {template,filename,minify,chunks,inject}
       * npm install html-webpack-plugin --save-dev  
    2. html-loader
      * options {attrs:[img:src]} 

      * require()
```
3.配合优化
 1. 提前载入webpack加载代码
    * inline-manifest-webpack-plugin
    * html-webpack-inline-chunk-plugin
