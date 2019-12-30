var path = require('path');
var webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
      path: path.resolve(__dirname, 'public/js/'),
      filename: 'engyj-leadcapture.js'
  },
  module : {
    rules : [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env"],
        }
      }
    ]
  }

};
