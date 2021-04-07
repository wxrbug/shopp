//外部资源别名配置
const path = require("path");
const host = require("ip").address()

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    host,
    port: 4000
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("network", resolve("src/network"))
  },
}