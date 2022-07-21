const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { VantResolver } = require("unplugin-vue-components/resolvers")
const merge = require('lodash/merge')
const glob =require('glob')
const dayjs =require('dayjs')
const tsImportPluginFactory = require('ts-import-plugin') // 按加载
var vConsolePlugin = require('vconsole-webpack-plugin');
const isPROD = process.env.NODE_ENV === 'production';
const buildType = process.env.buildType

console.log(buildType, 'buildType');
function getEntry({ page }) {
  return glob.sync(page).reduce((pre, cur) => {
    const tmp = cur.split('/').splice(-3);

    pre[tmp[1]] = {
      entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'index.ts',
      template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'index.html',
      filename: (buildType ? 'index' : tmp[1]) + '.html',
      version: dayjs().valueOf(),
      cdn: {
        css: process.env.CDN_CSS,
        js: process.env.CDN_JS,
      },
    };

    return pre;
  }, {});
}

module.exports = {
  parallel: true, // 开启多线程打包
  pages: getEntry({ page: `src/entry/${buildType || '**?'}/*.html` }),
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
        target: "http://www.baid.com", // 目标地址
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
