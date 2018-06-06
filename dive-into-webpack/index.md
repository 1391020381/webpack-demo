* [dive-into-webpack](https://github.com/gwuhaolin/dive-into-webpack)
    * 在编写本书的时候,Webpack已经迭代到了3.81版本,本书涵盖了对该版本的特性的解析。由于Webpack从版本1到现在,其核心思想和API没有发生很大变化,所以本书的大部分内容适用于Webpack的任何稳定版本，但部分实例代码只适用于最新版本。
* [官网](https://webpack.js.org/)


# 安装与使用
1. npm install webpack webpack-cli --save-dev
2. 默认以src下的index.js为入口,打包到dist中，命名为main.js
3.  npx webpack --config webpack.config.js
* 以更直观的方式将模块和资源组合在一起。无需依赖于含有全局资源的/assets目录,而是将资源与代码组合在一起
# Development
* webpack-dev-server
    * webpack-dev-server为你提供了一个简单的we服务器,并且能够实时重新加载(live reloading)
    * 可以帮助你在代码发生变化后自动编译代码
 * webpack-dev-middleware
    * webpack-dev-middleware是一个容器(wrapper) ,它可以把webpack处理后的文件传递给一个服务器(server)。
    webpack-dev-server在内部使用了它,同时,它也可以作为一个单独的包来使用,以便进行更多自定义设置来实现更多
    的需求。   
 * 模块热更新
    1. js更新
        * module.hot
    2.    借助于style-loader的帮助,css的模块热替换实际上相当简单的。当更新css依赖模块时,此loader在后台使用module-hot-accept来修补(patch) <style>标签
    3. Vue Loader 此loader支持用于vue组件的HMR,提供开箱即用的体验
* tree shaking
    * tree shaking是一个术语,通常用于描述移除JavaScript上下文中未引用的代码(dead-code)。它依赖于ES2015模块系统中的静态结构特性,例如 import 和export。
    * 新的webpack 4正式版本,扩展了这个检测能力,通过package.json的sideEffects属性作为标记,向compiler提供提示,标明项目中哪些文件是"pure(纯的ES2015模块)",由此可以安全地删除文件中未使用的部分
    * package.json 中的sideEffects属性实现的
    *  [sideEffects](https://webpack.docschina.org/guides/tree-shaking/)
    * 结论
        * 为了学会使用 tree shaking，你必须……
        * 使用 ES2015 模块语法（即 import 和 export）。
        * 在项目 package.json 文件中，添加一个 "sideEffects" 入口。
        * 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。
     * DefinePlugin
         *    DefinePlugin 允许创建一个在编译时可以配置的全局常量。
         * [DefinePlugin](https://webpack.docschina.org/plugins/define-plugin)
  # 代码分离
 * 有三种常用的代码分离方法
    * 入口起点:使用 entry配置手动地分离代码
    * 防止重复：使用CommonsChunkPlugin去重合分离chunk
    * 动态导入:通过模块的内联函数调用来分离代码       
 # 常用模块
 1. clean-webpack-plugin   
 2. html-webpack-plugin
 3. webpack-dev-server
 4. webpack-merge"
 5. uglifyjs-webpack-plugin
 6. ExtractTextPlugin (将css分离成单独的文件)

