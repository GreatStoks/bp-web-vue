const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

});

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Замените на ваш адрес и порт сервера
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
