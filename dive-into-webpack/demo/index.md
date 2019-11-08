# style-loader

- 工作原理大概是把 css 内容用 javascript 里的字符串存储起来,在网页执行 Javascipt 时通过 DOM 操作动态地往 html heade 标签里插入 html style 标签

# webpack-dev-server

- DevServer 启动后会一直驻留在后台保持运行,访问这个网址你就能获取项目根目录下的 index.html
- DevServer 会把 Webpack 构建出的文件保存在内存中,在要访问输出的文件时,必须通过 HTTP 服务访问。由于 DevServer 不会理会 webpack.config.js 里面配置的 output.path 属性,所以要获取 bundle.js 的正确的 URL 是 http:localhost:8080/bundle.js

# 核心概念

- Entry: 入口,Webpack 执行构建的第一步将从 Entry 开始,可抽象成输入
- Module：模块,在 Webpack 里一切皆模块,一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块
- Chunk：代码块,一个 Chunk 由多个模块组合而成,用于代码合并与分割。
- Loader：模块转换器,用于把模块原内容按照需要转换新内容。
- Plugin:扩展插件,在 Webpack 构建流程中的特定时机注入扩展逻辑改变构建结果或做你想要的事情。

* Output：输出结果,在 webpack 经历一系列处理并得出最终想要的代码后输出结果。
