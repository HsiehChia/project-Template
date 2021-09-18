const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { version } = require('./package.json')

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(new HtmlWebpackPlugin({
    title: 'Development',
  }))
}

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV,
  output: {
    filename: `b3utils.${version}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins,
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}