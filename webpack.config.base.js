const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src/components');
const SERVICES_DIR = path.resolve(__dirname, 'src/services');
module.exports = (options) => ({
        entry: options.entry,
        output: Object.assign({
                path: BUILD_DIR,
                filename: 'bundle.js'
        }, options.output),
        resolve: {
                modules: [APP_DIR, SERVICES_DIR, 'node_modules'],
                extensions: ['.js', '.scss', '.css', '.jsx']
        },
        plugins: options.plugins.concat([new webpack.DefinePlugin({
                'process.env': {
                        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
        }), new webpack.NamedModulesPlugin()]),
        module: {
                rules: [{
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [{
                                loader: 'babel-loader',
                                options: {
                                  /**Disabling lookup of .babelrc file and use the configuration from here instead **/
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
        },
        devtool: options.devtool,
        target: 'web',
        performance: options.performance || {}
});
