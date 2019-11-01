module.exports = {
  //axios域代理，解决axios跨域问题
  devServer: {
    https: true,
    proxy: {
      "/": {
        target: "xxxxx.xxx",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/": "/"
        }
      }
    }
  }
};
