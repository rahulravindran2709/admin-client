var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'build')
var APP_DIR = path.resolve(__dirname, 'components')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    modules: [APP_DIR, 'node_modules'],
    extensions: ['.js', '.scss', '.css', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: [{loader: 'babel-loader'}]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                './node_modules'
              ]
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
