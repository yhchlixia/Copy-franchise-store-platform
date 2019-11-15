module.exports = {
  // publicPath: "./",
  //axios域代理，解决axios跨域问题
  devServer: {
    https: true,
    proxy: {
      "/": {
        target: "https://tismp.everonet.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/": "/"
        }
      }
    }
  }
};
