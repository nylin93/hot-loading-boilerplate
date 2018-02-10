const merge = require('webpack-merge');
const path = require('path');

const common = require('./common.js');

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    historyApiFallback: true,
    port: 8080
  }
});