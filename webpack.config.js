// Librerías
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: './public/favicon.ico'
    })
  ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    proxy: {
            '/songs': {
                target: 'http://localhost:3001/',
                pathRewrite: {'^/songs/': '/songs/'},
                xfwd: true
            },
            '/albums': {
                target: 'http://localhost:3001/',
                pathRewrite: {'^/albums/': '/albums/'},
                xfwd: true
            },
            '/images': {
                target: 'http://localhost:3001/',
                pathRewrite: {'^/images/': '/images/'},
                xfwd: true
            }
    }
  },
  mode: 'development', //production, none
}

