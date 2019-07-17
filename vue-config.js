const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

let cdn_js = [
  "/static/scripts3rd/dayjs/dayjs.min.js",
];

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: "/",
  // 构建输出目录
  outputDir: "dist",
  // 保存时检测eslint
  lintOnSave: true,

  chainWebpack: (config) => {
    // 设置目录相对路径别名
    config.resolve.alias
      .set('@', resolve('src'));

    // CDN引入第三方库处理
    config.externals({
      'dayjs': 'dayjs',
    });

    // HtmlWebpackPlugin插件配置参数扩展
    config.plugin('html')
      .tap((args) => {
        args[0].cdn_js = cdn_js;
        return args;
      });
  },

  // webpack 基本配置
  configureWebpack: {
    entry: {
      'main': './src/main.js'
    }
  },
  // 开发环境配置
  devServer: {
    port: 8080,
    proxy: {}
  }
};
