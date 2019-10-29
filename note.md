
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

* devtool source-map