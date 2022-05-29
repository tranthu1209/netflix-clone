const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
       target: 'https://netflix-server1209.herokuapp.com',
       changeOrigin: true
    })
  );
};