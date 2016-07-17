var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.dev');

new webpackDevServer(webpack(config), {
  historyApiFallback: true,
  hot: true,
  publicPath: config.output.publicPath
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000/');
});
