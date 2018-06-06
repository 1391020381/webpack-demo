* [dive-into-webpack](https://github.com/gwuhaolin/dive-into-webpack)
    * 在编写本书的时候,Webpack已经迭代到了3.81版本,本书涵盖了对该版本的特性的解析。由于Webpack从版本1到现在,其核心思想和API没有发生很大变化,所以本书的大部分内容适用于Webpack的任何稳定版本，但部分实例代码只适用于最新版本。
* [官网](https://webpack.js.org/)


# 安装与使用
1. npm install webpack webpack-cli --save-dev
2. 默认以src下的index.js为入口,打包到dist中，命名为main.js
3.  npx webpack --config webpack.config.js
* 以更直观的方式将模块和资源组合在一起。无需依赖于含有全局资源的/assets目录,而是将资源与代码组合在一起
