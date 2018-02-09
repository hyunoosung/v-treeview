var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './dev/index.js',
  output: {
    path: path.resolve(__dirname, '../docs'),
    publicPath: '/docs/',
    filename: 'v-treeview.min.js',
    library: 'VTreeview',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    "vue": "Vue"
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      include: /\.min\.js$/,
      compress: {
        warnings: false
      }
    })
  ],
  performance: {
    hints: "error"
  },
  devtool: 'source-map'
}