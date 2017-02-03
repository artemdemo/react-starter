const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackBase = require('./webpack.config');

module.exports = Object.assign(webpackBase, {
    output: Object.assign(webpackBase.output, {
        filename: './js/bundle-[hash].js',
    }),
    plugins: webpackBase.plugins.concat([
        new ExtractTextPlugin('./css/styles-[hash].css'),
        new CleanWebpackPlugin(['./build/js', './build/css', './build/fonts'], {
            verbose: true,
            dry: false,
            root: path.resolve(__dirname, '../'),
            exclude: ['.gitignore'],
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': `"production"`
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ])
});
