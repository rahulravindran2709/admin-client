const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const BUILD_DIR = path.resolve(__dirname, 'build')
var APP_DIR = path.resolve(__dirname, 'src/components')
console.log(APP_DIR)
var SERVICES_DIR = path.resolve(__dirname, 'src/services')

var config = {
        entry: APP_DIR + '/index.js',
        output: {
                path: BUILD_DIR,
                filename: 'bundle.js'
        },
        resolve: {
                modules: [APP_DIR, SERVICES_DIR, 'node_modules'],
                extensions: ['.js', '.scss', '.css', '.jsx']
        },
         plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
        module: {
                rules: [{
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [{
                                loader: 'babel-loader',
                                options: {
                                        babelrc:false,
                                        presets: ["es2015", "react"],
                                        plugins: ["transform-decorators-legacy","transform-class-properties"]
                                }
                        }]
                }, {
                        test: /\.scss$/,
                        use: [
                                { loader: 'style-loader' },
                                { loader: 'css-loader' }, {
                                        loader: 'sass-loader',
                                        options: {
                                                includePaths: [
                                                        './node_modules'
                                                ]
                                        }
                                }
                        ]
                }]
        }
}

module.exports = config
