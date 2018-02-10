const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './src/client.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 3,
              sourceMap: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};