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
   3. HappyPack给loader用<npm install happpack --save-dev>
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
 # 长缓存优化
    1. 提取 vendor    
    2.  hash -> chunkhash   
    3. 提取 webpack runtime 
    ```
    module.exports = {
        entry :{
            main:'./src/foo',
            vendor:['vue']
        },
        output:{
            path:path.resolve(__dirname,'dist)),
            filename:'[name],[chunkhash].js'
        },
        plugins:[
            new webpack.NamedChunksPlugin(),
            new webapck.NamedModulesPlguin(),
            new webpack.optimize.CommonsChunkPlugin({
                name:'vendor',
                minChunks:Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name:'manifest'
            })
        ]
    }
    ```      
 # 场景
   1. 引入新模块,模块顺序变化,vendor hash变化  
       * 解决 
         * NamedChunksPlugin
         * NamedModulesPlguin
   2. 动态引入的模块时,vendor hash变化
        * 解决
          * 定义动态模块的chunkname
          ·```
          import(/* webpackChunkName:'async','./async'  */)
          ```

  # 总结
    * 独立打包vendor
    * 抽出manifest(webpack runtime)
    * NamedChunksPlugin
    * NamedModulesPlguin  
    * 定义动态模块的chunkname

  # 多页面应用
    

              