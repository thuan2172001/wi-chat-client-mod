const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  //entry: path.join(__dirname, 'src', 'index.js'),
  entry: path.join(__dirname, 'src'),
  output: {
    filename: 'app.js',
    //path: path.resolve(__dirname, 'public')
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      // {
      //   test: /\.html$/,
      //   use: [{
      //     loader: 'html-loader',
      //     options: {
      //       minimize: true
      //     }
      //   }],
      // },
      { test: /\.jpg$/, use: ["file-loader"] },
      { test: /\.png$/, use: ["url-loader?mimetype=image/png"] },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "public"),
    port: 3000
  },
  //fix bug cannot resolve  'fs'
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  mode: 'development'
};
