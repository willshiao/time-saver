const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'babel-webpack-starter'
  })]
};
