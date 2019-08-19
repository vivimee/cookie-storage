const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  entry: './test/index.js',
  mode: 'production',
  output: {
    path: path.resolve('dist'),
    library: 'library',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [new Htmlwebpackplugin()]
}