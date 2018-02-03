var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
    ]
  },
  plugins: [
    // new HtmlwebpackPlugin({
    //   title: 'Webpack-demos',
    //   filename: 'index.html'
    // }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};