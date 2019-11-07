module.exports = {
  // publicPath: "./",
  //axios域代理，解决axios跨域问题
  devServer: {
    https: true,
    proxy: {
      "/": {
        target: "http://192.168.17.22:6910",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/": "/"
        }
      }
    }
  }
};
