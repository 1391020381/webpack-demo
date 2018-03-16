# 打包结果优化
   * Offical Analyse Tool
   * webpack-bundle-analyzer
# 打包速度优化
   1. 分开vendor和app
      * DllPlugin
      * DllReferencePlugin
   2. UglifyJsPlugin
      * parallel<并行>
      * cache
   3. HappyPack给loader用
      * HappyPack.ThreadPool 
   4. babel-loader
       * options.cacheDirectory
       * include
       * exclude
   5. 其他
      * 减少 resolve
      * devtool:去除sourcemap
      * cache-loader  
      * 升级node
      * 升级webpack         