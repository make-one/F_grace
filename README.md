# React for hfjy


## 特性
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-redux](https://github.com/reactjs/react-redux)
* [react-router](https://github.com/rackt/react-router)
* [fetch](https://github.com/github/fetch)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [express](https://github.com/expressjs/express)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)

## 需求配置
* node `^4.5.0`
* npm `^3.0.0`

## 开始

确认好你的环境配置，然后就可以开始以下步骤。

```bash
$ npm install | yarn            # Install project dependencies
$ npm start                     # Compile and launch
```

开发过程中，你用得最多的会是`npm start`，但是这里还有很多其它的处理：


|`npm run <script>`|解释|
|------------------|-----------|
|`start`|服务启动在3000端口，代码热替换开启。|
|`compile`|编译程序到dist目录下（默认目录~/dist）。|
|`dev`|与`npm start`相同, 但是启动nodemon守护进程。|
|`test`|开启Karma测试并生成覆盖率报告。|
|`test:dev`|开启Karma测试并监听改变随时重新测试，但是生成覆盖率报告。|
|`deploy`|启动代码检查，测试，如果成功，编译到dist目录下。|
|`deploy:dev`|与`deploy`相同，但是`NODE_ENV`值为"development"。|
|`deploy:prod`|与`deploy`相同，但是`NODE_ENV`值为"production"。|
|`lint`|检查所有.js文件是否规范。|
|`lint:fix`|检查所有.js文件是否规范并修复它们。 [更多](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|

## 程序目录

这个项目的结构使用的是 **fractal(不规则碎片形：适合大型项目)***，方法的分组主要是依照特性而不是文件类型。注意，这个目录结构只是一个指引，并不一定要按这个来。这种结构谐在让程序更容易扩展


```
.
├── build                    # 所有打包配置项
│   └── webpack              # webpack的指定环境配置文件
├── config                   # 项目配置文件
├── server                   # Express 程序 (使用 webpack 中间件)
│   └── index.js              # 服务端程序入口文件
├── src                      # 程序源文件
│   ├── main.js              # 程序启动和渲染
│   ├── api             		 # restful 服务器接口
│   ├── components           # 全局可复用的表现组件(Presentational Components)
│   ├── containers           # 全局可复用的容器组件
│   ├── layouts              # 主页结构
│   ├── services             # 服务类相关文件
│   ├── static               # 静态文件(不要到处imported源文件)
│   ├── styles               # 程序样式
│   ├── store                # Redux指定块
│   │   └── reducers.js      # Reducer注册和注入
│   └── routes               # 主路由和异步分割点
│       ├── index.js         # 用store启动主程序路由
│       ├── routes.js          # 为上下文providers包住组件
└── tests                    # 单元测试
```

## 样式

所有的css和sass都支持会被预处理。只要被引入，都会经过[PostCSS](https://github.com/postcss/postcss)压缩，加前缀。在生产环境下会提取到一个css文件下。

## 服务端

这个项目的服务端使用express。需要注意的是，只有一个目的那就是提供了`webpack-dev-middleware` 和 `webpack-hot-middleware`（代码热替换）。使用自定义的express程序替换[webpack-dev-server](https://github.com/webpack/webpack-dev-server)，让它更容易实现universal 渲染和为了不使这个包过于庞大。

## 打包优化

Babel被配置[babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime)可以让代码更优化。另外，在生产环境，我们使用[react-optimize](https://github.com/thejameskyle/babel-react-optimize)来优化React代码。

在生产环境下，webpack会导出一个css文件并压缩Javascript，并把js模块优化到最好的性能。

## 静态部署

如果你正在使用nginx处理程序，确保所有的路由都直接指向 `~/dist/index.html` 文件，然后让react-router处理剩下的事。如果你不是很确定应该怎么做，[文档在这里](https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md#configuring-your-server)。Express在脚手架中用于扩展服务和代理API，或者其它你想要做的事，这完全取决于你。
