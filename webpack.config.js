// Librerías
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const config = {
    entry: {
        main:'./src/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom'],
        //sw: './src/sw.js'
    },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash:8].js'
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
    }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'my-cache',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'sw.js',
        minify: true,
        navigateFallback: './index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
      },
      new WorkboxPlugin.InjectManifest({
        swSrc: './src/sw.js',
      })
  ),
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
  devtool: 'source-map',
    optimization: {
        runtimeChunk: 'single',
        usedExports: true,
        sideEffects: false,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    }
}

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';
    if (isDevelopment) {
        config.devtool = 'eval-source-map';
    } else {
        config.devtool = 'hidden-source-map';
    }
    return config;
};
