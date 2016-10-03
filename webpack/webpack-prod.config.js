const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackBase = require('./webpack.config');

process.env.NODE_ENV = 'production';

module.exports = Object.assign(webpackBase, {
    output: Object.assign(webpackBase.output, {
        filename: './js/bundle-[hash].js',
    }),
    plugins: webpackBase.plugins.concat([
        new ExtractTextPlugin('./css/styles-[hash].css', {
            allChunks: true,
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
