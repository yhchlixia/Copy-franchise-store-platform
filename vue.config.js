module.exports = {
  //axios域代理，解决axios跨域问题
  devServer: {
    proxy: {
      "/": {
        target: "http://192.168.17.22:9090",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/": "/"
        }
      }
    }
  }
};
