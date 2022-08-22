const { createProxyMiddleware } = require('http-proxy-middleware');
//proxy request to root api redirected to backend app
module.exports = (app) =>{
    app.use(createProxyMiddleware(
        '/api',
        {
            target: 'http://localhost:4000',
        })
    );
};

