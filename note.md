
* css-loader解析@import 语法
* style-loader 把css 插入head标签
* loader 从右向左执行

* mini-css-extract-plugin 抽离css  配置publicPath
* postcss-loader autoprefixer 
* optimize-css-assets-webpack-plugin 压缩css

* uglifyjs-webpack-plugin
* babel-loader @babel-core @babel/preset-env
* exports-loader
```
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})

```
* externals 配置选项提供了 从输出的bundle中排除依赖的方法。
* html-withimg-loader
* url-loader
* file-loader

* publicPath 可以给单独的资源加比如  img   

* devtool source-mapnoParse


* noParse
* IgnorePlugin
* DllPlugin

```
// 需要在 index.html中引用 __dll_react.js
let path = require('path')
let webpack  = require('webpack')
module.export = {
  model:'development',
  entry{
    react:['react','react-dom']
  },
  output:{
    filename:'_dll_[name].js',
    path:path.resolve(__dirname,'dist'),
    library:'__dll_[name]'
  },
  plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, "dist", "[name]-manifest.json"),
			name: "[name]_[fullhash]"
		})
	]
}


```

```
// webpack.config.js

module.export  = {
  plugins:[
    new webpack.DllReferencePlugin({
      manifest:path.resolve(__dirname,'dist','manifest.json')
    }),
    new webpack.IgnorePlugin(/\.\/locale/,/moment/)
  ]
}


```

* happypack


* tree-shaking    //  需要 es6 import 代码
* scope hosting 作用域提升

* 抽离公共代码  // 多入口  代码分离 optimization  SplitChunksPlugin
* 懒加载  
* 热更新

```
optimization :{
  splitChunks:{
    cacheGroup:{
      common:{
        chunks:'initial',
        minSize:0,
        minChunk:2
      }
    },
    vendor:{
      priority:1,
      test:/node_module/,
      chunks:'initial',
      minSize:0,
      minChunks:2
    }
  }
}

```