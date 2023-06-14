const { defineConfig } = require("@vue/cli-service");
// console.log(process.env);
console.log(process.env.NODE_ENV,'process.env.NODE_ENV');
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3.0/' : '/',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        // '/api'是代理标识，一般是每个接口前的相同部分
        target: "http://127.0.0.1:3000", // 请求地址，一般是服务器地址
        changeOrigin: true, // 是否进行跨域
        pathRewrite: {
          // pathRewrite的作用是把请求接口中的 '/api'替换掉，一般是替换为空""
          "^/api": "",
        },
      },
    },
  },
});
console.log(process.env.BASE_URL,'process.env.BASE_URL');

