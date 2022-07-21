const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { VantResolver } = require("unplugin-vue-components/resolvers")
const merge = require('lodash/merge')
const tsImportPluginFactory = require('ts-import-plugin') // 按加载
var vConsolePlugin = require('vconsole-webpack-plugin');
const isPROD = process.env.NODE_ENV === 'production';

module.exports = {
  parallel: true, // 开启多线程打包
  configureWebpack: {
    plugins: [
      new vConsolePlugin({
        filter: [],  // 需要过滤的入口文件
        enable: !isPROD // 发布代码前记得改回 false
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
      }),
      Components({
        dirs: ['src/components'],
        deep: true,
        resolvers: [VantResolver()],
      }),
    ],
  },
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  },
  devServer: {
    open: true,
    proxy: {
      "/": {
        target: "https://mcs8-test.bobandata.com:7715", // 目标地址
        ws: true, // 是否代理websockets
        changeOrigin: true, // 设置同源 默认false，是否需要改变原始主机头为目标URL,
      },
    },
  },
  // 基本路径
  publicPath: process.env.PUBLISH_PATH,
  // css: {
  //   requireModuleExtension: true,
  //   loaderOptions: {
  //     // 给 sass-loader 传递选项
  //     sass: {
  //       // @/ 是 src/ 的别名
  //       // 所以这里假设你有 `src/variables.scss` 这个文件
  //       // prependData: '@import "@/assets/scss/mixin.scss";'
  //     },
  //   },
  // },
  lintOnSave: false,
};
